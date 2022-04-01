import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
<<<<<<< HEAD
    isTitle: true,
=======
    isTitle: true
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Dashboard',
    icon: 'home',
<<<<<<< HEAD
    link: '/dashboard',
  },
  {
    label: 'من نحن',
    icon: 'alert-circle',
    link: '/about-us',
  },
  {
    label: 'مستخدمي لوحة التحكم',
    icon: 'users',
    link: '/admins',
  },

  {
    label: 'الحالات',
    icon: 'users',
    link: '/cases',
  },


  {
    label: 'Web Apps',
    isTitle: true,
=======
    link: '/dashboard'
  },
  {
    label: 'الأسئلة الشائعة',
    icon: 'help-circle',
    link: '/general/faq'
  },
  {
    label: 'المستخدمين',
    icon: 'users',
    link: '/general/users'
  },
  {
    label: 'Web Apps',
    isTitle: true
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Email',
    icon: 'mail',
    subItems: [
      {
        label: 'Inbox',
        link: '/apps/email/inbox',
      },
      {
        label: 'Read',
<<<<<<< HEAD
        link: '/apps/email/read',
      },
      {
        label: 'Compose',
        link: '/apps/email/compose',
      },
    ],
=======
        link: '/apps/email/read'
      },
      {
        label: 'Compose',
        link: '/apps/email/compose'
      },
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Chat',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'Calendar',
    icon: 'calendar',
    link: '/apps/calendar',
    badge: {
      variant: 'primary',
      text: 'Event',
<<<<<<< HEAD
    },
  },
  {
    label: 'Components',
    isTitle: true,
=======
    }
  },
  {
    label: 'Components',
    isTitle: true
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'UI Kit',
    icon: 'feather',
    subItems: [
      {
        label: 'Accordion',
        link: '/ui-components/accordion',
      },
      {
        label: 'Alerts',
        link: '/ui-components/alerts',
      },
      {
        label: 'Badges',
        link: '/ui-components/badges',
      },
      {
        label: 'Breadcrumbs',
        link: '/ui-components/breadcrumbs',
      },
      {
        label: 'Buttons',
        link: '/ui-components/buttons',
      },
      {
        label: 'Button group',
        link: '/ui-components/button-group',
      },
      {
        label: 'Cards',
        link: '/ui-components/cards',
      },
      {
        label: 'Carousel',
        link: '/ui-components/carousel',
      },
      {
        label: 'Collapse',
        link: '/ui-components/collapse',
      },
      {
        label: 'Datepicker',
        link: '/ui-components/datepicker',
      },
      {
        label: 'Dropdowns',
        link: '/ui-components/dropdowns',
      },
      {
        label: 'List group',
        link: '/ui-components/list-group',
      },
      {
        label: 'Media object',
        link: '/ui-components/media-object',
      },
      {
        label: 'Modal',
        link: '/ui-components/modal',
      },
      {
        label: 'Navs',
        link: '/ui-components/navs',
      },
      {
        label: 'Navbar',
        link: '/ui-components/navbar',
      },
      {
        label: 'Pagination',
        link: '/ui-components/pagination',
      },
      {
        label: 'Popovers',
        link: '/ui-components/popovers',
      },
      {
        label: 'Progress',
        link: '/ui-components/progress',
      },
      {
        label: 'Rating',
        link: '/ui-components/rating',
      },
      {
        label: 'Scrollbar',
        link: '/ui-components/scrollbar',
      },
      {
        label: 'Spinners',
        link: '/ui-components/spinners',
      },
      {
        label: 'Timepicker',
        link: '/ui-components/timepicker',
      },
      {
        label: 'Tooltips',
        link: '/ui-components/tooltips',
      },
      {
        label: 'Typeadhed',
        link: '/ui-components/typeahead',
      },
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Advanced UI',
    icon: 'anchor',
    subItems: [
      {
        label: 'Cropper',
        link: '/advanced-ui/cropper',
      },
      {
        label: 'Owl carousel',
        link: '/advanced-ui/owl-carousel',
      },
      {
        label: 'Sweet alert',
        link: '/advanced-ui/sweet-alert',
      },
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Forms',
    icon: 'file-text',
    subItems: [
      {
        label: 'Basic elements',
<<<<<<< HEAD
        link: '/form-elements/basic-elements',
=======
        link: '/form-elements/basic-elements'
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
      },
      {
        label: 'Advanced elements',
        subItems: [
          {
            label: 'Form validation',
<<<<<<< HEAD
            link: '/advanced-form-elements/form-validation',
          },
          {
            label: 'Input mask',
            link: '/advanced-form-elements/input-mask',
          },
          {
            label: 'Ng-select',
            link: '/advanced-form-elements/ng-select',
          },
          {
            label: 'Ngx-chips',
            link: '/advanced-form-elements/ngx-chips',
          },
          {
            label: 'Ngx-color-picker',
            link: '/advanced-form-elements/ngx-color-picker',
          },
          {
            label: 'Ngx-dropzone',
            link: '/advanced-form-elements/ngx-dropzone-wrapper',
          },
        ],
      },
      {
        label: 'Editors',
        link: '/form-elements/editors',
      },
      {
        label: 'Wizard',
        link: '/form-elements/wizard',
      },
    ],
=======
            link: '/advanced-form-elements/form-validation'
          },
          {
            label: 'Input mask',
            link: '/advanced-form-elements/input-mask'
          },
          {
            label: 'Ng-select',
            link: '/advanced-form-elements/ng-select'
          },
          {
            label: 'Ngx-chips',
            link: '/advanced-form-elements/ngx-chips'
          },
          {
            label: 'Ngx-color-picker',
            link: '/advanced-form-elements/ngx-color-picker'
          },
          {
            label: 'Ngx-dropzone',
            link: '/advanced-form-elements/ngx-dropzone-wrapper'
          },
        ]
      },
      {
        label: 'Editors',
        link: '/form-elements/editors'
      },
      {
        label: 'Wizard',
        link: '/form-elements/wizard'
      },
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Charts & graphs',
    icon: 'pie-chart',
    subItems: [
      {
        label: 'ApexCharts',
        link: '/charts-graphs/apexcharts',
      },
      {
        label: 'ChartJs',
        link: '/charts-graphs/chartjs',
      },
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Tables',
    icon: 'layout',
    subItems: [
      {
        label: 'Basic tables',
        link: '/tables/basic-table',
      },
      {
        label: 'Data table',
        link: '/tables/data-table',
      },
      {
        label: 'Ngx-datatable',
<<<<<<< HEAD
        link: '/tables/ngx-datatable',
      },
    ],
=======
        link: '/tables/ngx-datatable'
      }
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Icons',
    icon: 'smile',
    subItems: [
      {
        label: 'Feather icons',
        link: '/icons/feather-icons',
      },
      {
        label: 'Mdi icons',
        link: '/icons/mdi-icons',
<<<<<<< HEAD
      },
    ],
  },
  {
    label: 'Pages',
    isTitle: true,
=======
      }
    ]
  },
  {
    label: 'Pages',
    isTitle: true
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Special pages',
    icon: 'book',
    subItems: [
      {
        label: 'Blank page',
        link: '/general/blank-page',
      },
      {
        label: 'Faq',
        link: '/general/faq',
      },
      {
<<<<<<< HEAD
=======
        label: 'users',
        link: '/general/users',
      },
      {
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
        label: 'Invoice',
        link: '/general/invoice',
      },
      {
        label: 'Profile',
        link: '/general/profile',
      },
      {
        label: 'Pricing',
        link: '/general/pricing',
      },
      {
        label: 'Timeline',
        link: '/general/timeline',
<<<<<<< HEAD
      },
    ],
=======
      }
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Authentication',
    icon: 'unlock',
    subItems: [
      {
        label: 'Login',
        link: '/auth/login',
      },
      {
        label: 'Register',
        link: '/auth/register',
      },
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
  {
    label: 'Error',
    icon: 'cloud-off',
    subItems: [
      {
        label: '404',
        link: '/error/404',
      },
      {
        label: '500',
        link: '/error/500',
      },
<<<<<<< HEAD
    ],
=======
    ]
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
  },
];
