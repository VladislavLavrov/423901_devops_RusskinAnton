import React, { useState } from 'react';
import { BarsButton,
  BarsTextField,
  BarsCheckBox,
  BarsSelect,
  BarsSelectItem,
  BarsSnackbar } from 'bars-frontend-shared';


const SettingsComponent: React.FC = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'ru'
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCheckboxChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setSettings({...settings, notifications: checked});
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Настройки системы</h2>
      
      <BarsTextField
        label="Название системы"
        value="Моя система"
        onChange={(e) => console.log(e.target.value)}
      />
      
      <BarsSelect
        label="Тема оформления"
        onChange={(e) => setSettings({...settings, theme: e.target.value})}
      >
        <BarsSelectItem value="light">Светлая</BarsSelectItem>
        <BarsSelectItem value="dark">Темная</BarsSelectItem>
      </BarsSelect>
      
      <BarsSelect
        label="Язык"
        onChange={(e) => setSettings({...settings, language: e.target.value})}
      >
        <BarsSelectItem value="ru">Русский</BarsSelectItem>
        <BarsSelectItem value="en">Английский</BarsSelectItem>
      </BarsSelect>
      
      <BarsCheckBox
        state={settings.notifications}
        handleChange={handleCheckboxChange}
      />

      <BarsButton
        variant="green"
        text="Сохранить настройки"
        onClick={undefined}
        style={{ marginTop: '20px' }}
      >

      </BarsButton>
      
      <BarsSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message="Настройки успешно сохранены!"
        styleAlert={{ 
          backgroundColor: '#4caf50', 
          color: 'white',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};

export default SettingsComponent;