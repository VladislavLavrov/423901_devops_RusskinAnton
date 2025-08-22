import { type DockviewRoute } from 'bars-frontend-shared';
import SettingsComponent from './components/SettingsComponent';
import UsersComponent from './components/UsersComponent';

export const ConfigurationRoutes: DockviewRoute[] = [
  {
    patch: '/settings',
    component: {
        customComponent: SettingsComponent,
        typeName: 'settings'
    },
    name: 'Настройки',
  },
  {
    patch: '/users',
    component: {
        customComponent: UsersComponent,
        typeName: 'users'
    },
    name: 'Пользователи',
  },
];
