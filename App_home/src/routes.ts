import { type DockviewRoute } from 'bars-frontend-shared';
import SettingsComponent from './components/SettingsComponent';
import BotInfo from './components/BotInfo';

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
    patch: '/botinfo',
    component: {
        customComponent: BotInfo,
        typeName: 'botinfo'
    },
    name: 'Информация о боте',
  },
];
