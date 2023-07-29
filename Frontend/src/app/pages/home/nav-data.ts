// nav-data.ts

export interface INavbarData {
    routeLink: string;
    icon?: string;
    label: string;
    items?: INavbarData[];
  }
  
  export const navbarData: INavbarData[] = [
    {
      routeLink: '/home',
      icon: 'bi bi-house',
      label: 'Home',
    },
    {
      routeLink: '',
      icon: 'bi bi-person-lock',
      label: 'Admin Panel',
      items: [
        {
          routeLink: '/adduser',
          label: 'Add User',
        },
        {
          routeLink: '/viewuser',
          label: 'View Users',
        },
      ],
    },
    {
      routeLink: '',
      icon: 'bi bi-people-fill',
      label: 'Student Panel',
      items: [
        {
          routeLink: '/addstuds',
          label: 'Add Student',
        },
        {
          routeLink: '/viewstuds',
          label: 'View Students',
        },
        {
          routeLink: '/csv',
          label: 'CSV Upload',
        },
      ],
    },
    {
      routeLink: '/passchange',
      icon: 'bi bi-gear',
      label: 'Change Password',
    },
    {
      routeLink: '/passchange',
      icon: 'bi bi-gear',
      label: 'Change Password',
    },
  ];
  