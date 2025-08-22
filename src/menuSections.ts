import type { MenuSection } from "bars-frontend-core/esm/types/shared/types/MenuItem";

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
                  label: 'Пользователи',
                  href: '/users'
              }]
            },
            {
              sectionName: 'Документы',
              items: [{
                  label: 'Создать документ',
                  href: '/create-document'
              },
              {
                  label: 'Список документов',
                  href: '/documents'
              }]
            }
          ]
        },
        {
          Name: 'Отчеты',
          SvgSrc: 'public/reports.svg',
          Children: [
            {
              sectionName: 'Аналитика',
              items: [{
                  label: 'Статистика',
                  href: '/statistics'
              },
              {
                  label: 'Графики',
                  href: '/charts'
              }]
            }
          ]
        }
      ]
    }
]
