import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  BarsButton,
  BarsTextField,
  BarsCheckBox,
  BarsSnackbar,
  BarsSelect,
  BarsSelectItem,
} from 'bars-frontend-shared';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import type { DropTargetMonitor, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface ButtonConfig {
  id: string;
  show: boolean;
  disabled: boolean;
  text: string;
  emoji: string;
  width?: 1 | 2; // только ширина
}

const defaultButtons: ButtonConfig[] = [
  { id: 'profile', show: true, disabled: false, text: 'Профиль', emoji: '👤', width: 1 },
  { id: 'balance', show: true, disabled: false, text: 'Баланс', emoji: '💰', width: 1 },
  { id: 'buy', show: true, disabled: false, text: 'Купить', emoji: '🛒', width: 2 },
  { id: 'history', show: true, disabled: false, text: 'История', emoji: '📜', width: 1 },
  { id: 'card', show: true, disabled: false, text: 'Моя карта', emoji: '💳', width: 1 },
  { id: 'help', show: true, disabled: false, text: 'Помощь', emoji: '❓', width: 1 },
];

const isValidConfig = (obj: any): obj is ButtonConfig[] =>
  Array.isArray(obj) &&
  obj.every(
    (b: any) =>
      typeof b.id === 'string' &&
      typeof b.show === 'boolean' &&
      typeof b.disabled === 'boolean' &&
      typeof b.text === 'string' &&
      typeof b.emoji === 'string'
  );

interface DraggableButtonProps {
  button: ButtonConfig;
  index: number;
  moveButton: (from: number, to: number) => void;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ button, index, moveButton }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<{ index: number }, void, unknown>({
    accept: 'BUTTON',
    hover(item, monitor: DropTargetMonitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;

      moveButton(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.8 : 1,
        transform: isDragging ? 'scale(1.05)' : 'none',
        transition: 'all 0.2s ease',
        cursor: 'grab',
        gridColumn: `span ${button.width || 1}`,
        display: 'flex',
      }}
    >
      <BarsButton
        text={`${button.emoji} ${button.text}`}
        disabled={button.disabled}
        variant="green"
        style={{
          width: '100%',
          height: '50px',
          justifyContent: 'center',
        }}
      />
    </div>
  );
};

const SettingsConstructor: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonConfig[]>(defaultButtons);
  const [originalButtons, setOriginalButtons] = useState<ButtonConfig[]>(defaultButtons);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('uiButtons');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (isValidConfig(parsed)) {
          setButtons(parsed);
          setOriginalButtons(parsed);
        }
      } catch {}
    }
  }, []);

  const hasUnsavedChanges = useMemo(
    () => JSON.stringify(buttons) !== JSON.stringify(originalButtons),
    [buttons, originalButtons]
  );

  const updateButton = (id: string, patch: Partial<ButtonConfig>) => {
    setButtons((prev) => prev.map(btn => btn.id === id ? { ...btn, ...patch } : btn));
  };

  const addButton = () => {
    const newButton: ButtonConfig = {
      id: `btn-${Date.now()}`,
      show: true,
      disabled: false,
      text: 'Новая кнопка',
      emoji: '🔘',
      width: 1,
    };
    setButtons((prev) => [...prev, newButton]);
  };

  const removeButton = (id: string) => {
    setButtons((prev) => prev.filter(b => b.id !== id));
  };

  const handleSave = () => {
    localStorage.setItem('uiButtons', JSON.stringify(buttons));
    setOriginalButtons(buttons);
    setSnackbarOpen(true);
  };

  const handleReset = () => setButtons(defaultButtons);

  const moveButton = useCallback((from: number, to: number) => {
    setButtons((prev) => {
      const newButtons = [...prev];
      const [moved] = newButtons.splice(from, 1);
      newButtons.splice(to, 0, moved);
      return newButtons;
    });
  }, []);

  const visibleButtons = buttons.filter(b => b.show);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 20, height: '90vh' }}>
        {/* Настройки */}
        <div style={{ overflowY: 'auto', paddingRight: 12 }}>
          <h2>🎛️ Конструктор кнопок</h2>
          {buttons.map((btn) => (
            <div key={btn.id} style={{ marginBottom: 16, padding: 12, border: '1px solid #ddd', borderRadius: 12 }}>
              <strong>{btn.text}</strong>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
                <BarsCheckBox state={btn.show} handleChange={(_, v) => updateButton(btn.id, { show: v })} />
                <span>Показывать</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <BarsCheckBox state={btn.disabled} handleChange={(_, v) => updateButton(btn.id, { disabled: v })} />
                <span>Блокировать</span>
              </div>
              <BarsTextField label="Эмодзи" value={btn.emoji} onChange={(e) => updateButton(btn.id, { emoji: e.target.value })} />
              <BarsTextField label="Текст" value={btn.text} onChange={(e) => updateButton(btn.id, { text: e.target.value })} />

              {/* Настройка ширины через BarsSelect */}
<div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
  <label>Ширина:</label>
  <BarsSelect
    value={[String(btn.width || 1)]} // 👈 массив строк
    onChange={(e) => {
      const val = Array.isArray(e.target.value) ? e.target.value[0] : e.target.value;
      updateButton(btn.id, { width: Number(val) as 1 | 2 });
    }}
  >
    <BarsSelectItem value="1">1</BarsSelectItem>
    <BarsSelectItem value="2">2</BarsSelectItem>
  </BarsSelect>
</div>

              <div style={{ marginTop: 8 }}>
                <BarsButton variant="red" text="🗑️" onClick={() => removeButton(btn.id)} />
              </div>
            </div>
          ))}

          <BarsButton variant="green" text="➕ Добавить кнопку" onClick={addButton} />
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <BarsButton variant="green" text="🔄 Сбросить" onClick={handleReset} />
            <BarsButton variant="green" text="💾 Сохранить" onClick={handleSave} disabled={!hasUnsavedChanges} />
          </div>
        </div>

        {/* Превью */}
        <div style={{ padding: 16, border: '1px dashed #bbb', borderRadius: 12 }}>
          <h3>👀 Превью</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 120px)', // 2 кнопки в ряд
              gridAutoRows: '50px',
              gap: 8,
            }}
          >
            {visibleButtons.map((btn, index) => (
              <DraggableButton key={btn.id} button={btn} index={index} moveButton={moveButton} />
            ))}
          </div>
        </div>

        <BarsSnackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          message="Конфигурация сохранена!"
          autoHideDuration={3000}
        />
      </div>
    </DndProvider>
  );
};

export default SettingsConstructor;
