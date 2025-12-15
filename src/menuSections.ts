import type { MenuSection } from "bars-frontend-core/dist/esm/types/shared/types/MenuItem";

export const MenuSections: MenuSection[] = [
    {
        Name: 'Все',
        Items: [{
          Name: 'Конфигурация',
          SvgSrc: 'public/config.svg',
          Children: [
            {
              sectionName: 'Настройки системы',
              items: [{
                  label: 'Основные настройки',
                  href: '/settings'
              },
              {
                  label: 'Информация о боте',
                  href: '/botinfo'
              }]
            },
          ]
        }
      ]
    }
]
