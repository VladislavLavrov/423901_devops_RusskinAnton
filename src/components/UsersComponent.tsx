import React, { useState } from 'react';
import { BarsTable, BarsButton } from 'bars-frontend-shared';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UsersComponent: React.FC = () => {
  const [users] = useState<User[]>([
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор' },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', role: 'Пользователь' },
    { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', role: 'Редактор' }
  ]);

  // Простой формат колонок без использования MRT_ColumnDef
  const columns = [
    {
      accessorKey: 'name',
      header: 'Имя',
    },
    {
      accessorKey: 'email', 
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Роль',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Управление пользователями</h2>
      
      <BarsButton
        variant="green"
        text="Добавить пользователя"
        style={{ marginBottom: '20px' }}
      />
      
      <BarsTable
        columns={columns}
        data={users}
        enableRowSelection={false}
        enableEditing={false}
      />
    </div>
  );
};

export default UsersComponent;