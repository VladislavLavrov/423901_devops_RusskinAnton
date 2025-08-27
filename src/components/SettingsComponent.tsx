import React, { useEffect, useMemo, useState } from 'react';
import {
  BarsButton,
  BarsTextField,
  BarsCheckBox,
  BarsSelect,
  BarsSelectItem,
  BarsSnackbar,
} from 'bars-frontend-shared';

type Layout = 'left' | 'center' | 'right';
type Order = 'save-reset' | 'reset-save';

interface ButtonConfig {
  show: boolean;
  disabled: boolean;
  text: string;
  emoji: string;
}

interface UIConfig {
  layout: Layout;           // выравнивание кнопок
  order: Order;             // порядок отображения
  buttons: {
    save: ButtonConfig;
    reset: ButtonConfig;
  };
}

// --- дефолтная конфигурация ---
const defaultConfig: UIConfig = {
  layout: 'left',
  order: 'save-reset',
  buttons: {
    save: { show: true, disabled: false, text: 'Сохранить настройки', emoji: '💾' },
    reset: { show: true, disabled: false, text: 'Сбросить', emoji: '↩️' },
  },
};

// --- миграция со старого формата (если уже что-то лежит в localStorage) ---
const migrateLegacy = (raw: any): UIConfig | null => {
  if (!raw || typeof raw !== 'object') return null;
  if ('buttons' in raw) return raw as UIConfig; // уже новый формат
  if ('showSaveButton' in raw || 'showResetButton' in raw) {
    return {
      layout: 'left',
      order: 'save-reset',
      buttons: {
        save: {
          show: raw.showSaveButton ?? true,
          disabled: raw.disableSave ?? false,
          text: raw.saveButtonText ?? 'Сохранить настройки',
          emoji: raw.saveButtonEmoji ?? '💾',
        },
        reset: {
          show: raw.showResetButton ?? true,
          disabled: raw.disableReset ?? false,
          text: raw.resetButtonText ?? 'Сбросить',
          emoji: raw.resetButtonEmoji ?? '↩️',
        },
      },
    };
  }
  return null;
};

const SettingsConstructor: React.FC = () => {
  const [config, setConfig] = useState<UIConfig>(defaultConfig);
  const [originalConfig, setOriginalConfig] = useState<UIConfig>(defaultConfig);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // загрузка сохранённого конфига и миграция при первом рендере
useEffect(() => {
  const saved = localStorage.getItem('uiConfig');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const migrated = migrateLegacy(parsed) ?? parsed ?? defaultConfig;
      setConfig(migrated);
      setOriginalConfig(migrated); // синхронизируем с конфигом
    } catch {
      setConfig(defaultConfig);
      setOriginalConfig(defaultConfig);
    }
  } else {
    setConfig(defaultConfig);
    setOriginalConfig(defaultConfig);
  }
}, []);


  // есть ли несохранённые изменения
  const hasUnsavedChanges = useMemo(
    () => JSON.stringify(config) !== JSON.stringify(originalConfig),
    [config, originalConfig]
  );

  // хелперы обновления полей
  const updateButton = (key: keyof UIConfig['buttons'], patch: Partial<ButtonConfig>) => {
    setConfig(prev => ({
      ...prev,
      buttons: {
        ...prev.buttons,
        [key]: { ...prev.buttons[key], ...patch },
      },
    }));
  };

  const updateLayout = (value: Layout) => setConfig(prev => ({ ...prev, layout: value }));
  const updateOrder  = (value: Order)  => setConfig(prev => ({ ...prev, order: value }));

  // сохранить/сбросить
const handleSave = () => {
  localStorage.setItem('uiConfig', JSON.stringify(config));
  setOriginalConfig(config); // обязательно обновляем "оригинал"
  setSnackbarOpen(false);
  setTimeout(() => setSnackbarOpen(true), 50);
};
  const handleResetToDefaults = () => {
    setConfig(defaultConfig);
  };

  // отображение/порядок кнопок
  const justifyContent =
    config.layout === 'left' ? 'flex-start' : config.layout === 'center' ? 'center' : 'flex-end';

  const orderedKeys: Array<'save' | 'reset'> =
    config.order === 'save-reset' ? ['save', 'reset'] : ['reset', 'save'];

  // обработчики кликов по самим кнопкам
  const onClickSave = () => handleSave();
  const onClickReset = () => handleResetToDefaults();

  return (
    <div style={{ padding: 20, maxWidth: 820, margin: '0 auto', display: 'grid', gap: 24 }}>
      <h2>🎛️ Конструктор кнопок</h2>

      {/* Панель управления (редактор конфигурации кнопок) */}
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'start',
        }}
      >
        {/* Настройки Save */}
        <div style={{ display: 'grid', gap: 12, padding: 16, border: '1px solid #e0e0e0', borderRadius: 12 }}>
          <strong>Кнопка «Сохранить»</strong>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <BarsCheckBox
              state={config.buttons.save.show}
              handleChange={(_, v) => updateButton('save', { show: v })}
            />
            <span>Показывать кнопку</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <BarsCheckBox
              state={config.buttons.save.disabled}
              handleChange={(_, v) => updateButton('save', { disabled: v })}
            />
            <span>Блокировать кнопку</span>
          </div>
          <BarsTextField
            label="Эмодзи"
            value={config.buttons.save.emoji}
            onChange={(e) => updateButton('save', { emoji: e.target.value })}
            placeholder="например, 💾"
          />
          <BarsTextField
            label="Текст"
            value={config.buttons.save.text}
            onChange={(e) => updateButton('save', { text: e.target.value })}
            placeholder="например, Сохранить настройки"
          />
        </div>

        {/* Настройки Reset */}
        <div style={{ display: 'grid', gap: 12, padding: 16, border: '1px solid #e0e0e0', borderRadius: 12 }}>
          <strong>Кнопка «Сбросить»</strong>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <BarsCheckBox
              state={config.buttons.reset.show}
              handleChange={(_, v) => updateButton('reset', { show: v })}
            />
            <span>Показывать кнопку</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <BarsCheckBox
              state={config.buttons.reset.disabled}
              handleChange={(_, v) => updateButton('reset', { disabled: v })}
            />
            <span>Блокировать кнопку</span>
          </div>
          <BarsTextField
            label="Эмодзи"
            value={config.buttons.reset.emoji}
            onChange={(e) => updateButton('reset', { emoji: e.target.value })}
            placeholder="например, ↩️"
          />
          <BarsTextField
            label="Текст"
            value={config.buttons.reset.text}
            onChange={(e) => updateButton('reset', { text: e.target.value })}
            placeholder="например, Сбросить"
          />
        </div>

        {/* Размещение/порядок */}
        <div style={{ gridColumn: '1 / -1', display: 'grid', gap: 12, padding: 16, border: '1px solid #e0e0e0', borderRadius: 12 }}>
          <strong>Размещение кнопок</strong>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
<BarsSelect
  label="Выравнивание"
  value={[config.layout]} // просто строка
  onChange={(e) => {
    const newValue = e.target.value as Layout;
    updateLayout(newValue);
  }}
>
  <BarsSelectItem value="left">Слева</BarsSelectItem>
  <BarsSelectItem value="center">По центру</BarsSelectItem>
  <BarsSelectItem value="right">Справа</BarsSelectItem>
</BarsSelect>

<BarsSelect
  label="Порядок"
  value={[config.order]}
  onChange={(e) => {
    const newValue = e.target.value as Order;
    updateOrder(newValue);
  }}
>
  <BarsSelectItem value="save-reset">Сохранить → Сбросить</BarsSelectItem>
  <BarsSelectItem value="reset-save">Сбросить → Сохранить</BarsSelectItem>
</BarsSelect>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <BarsButton
              variant="green"
              text="🔄 Вернуть дефолтную конфигурацию (без сохранения)"
              onClick={onClickReset}
            />
            <BarsButton
              variant="green"
              text={`💾 Сохранить изменения конструктора`}
              onClick={onClickSave}
              disabled={!hasUnsavedChanges}
            />
          </div>
        </div>
      </div>

      {/* Превью итоговых кнопок (как они будут выглядеть в вашем UI) */}
      <div style={{ padding: 16, border: '1px dashed #cfcfcf', borderRadius: 12 }}>
        <div style={{ marginBottom: 8, opacity: 0.8 }}>Превью:</div>
        <div style={{ display: 'flex', gap: 10, justifyContent }}>
          {orderedKeys.map((key) => {
            const cfg = config.buttons[key];
            if (!cfg.show) return null;

            if (key === 'save') {
              return (
                <BarsButton
                  key="save"
                  variant="green"
                  text={`${cfg.emoji} ${cfg.text}`}
                  onClick={onClickSave}
                  disabled={cfg.disabled || !hasUnsavedChanges}
                />
              );
            }
            return (
              <BarsButton
                key="reset"
                variant="red"
                text={`${cfg.emoji} ${cfg.text}`}
                onClick={onClickReset}
                disabled={cfg.disabled}
              />
            );
          })}
        </div>
      </div>

      {/* Snackbar */}
      <BarsSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message="Конфигурация кнопок сохранена!"
        autoHideDuration={3000}
        styleAlert={{
          backgroundColor: '#4caf50',
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      />
    </div>
  );
};

export default SettingsConstructor;
