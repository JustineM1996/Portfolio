import {
  ProjectFilled,
  ControlFilled,
  TabletFilled
} from '@ant-design/icons'

import {
  MainPage,
  ProjectsPage,
  WorkexpsPage,
} from '../../pages/Main.jsx'

const aboutRoutes = [
  {
    path:'/about',
    exact: true,
    auth: true,
    accessible: true,
    component: MainPage
  },
];

const projectRoutes = [
  {
    path:'/projects',
    exact: true,
    auth: true,
    accessible: true,
    component: ProjectsPage
  },
];

const workRoutes = [
  {
    path:'/work-exps',
    exact: true,
    auth: true,
    accessible: true,
    component: WorkexpsPage
  },
];

export const routes = [
  {
    path:'/Justine-Portfolio',
    exact: true,
    auth: true,
    accessible: true,
    component: MainPage
  },
  ...aboutRoutes,
  ...projectRoutes,
  ...workRoutes,
]



export const menu = {
  route: {
    path: '/Justine-Portfolio',
    routes: [
      {
        path: '/about',
        name: 'About',
        icon: <TabletFilled/>,
      },
      {
        path: '/projects',
        name: 'Projects',
        icon: <ProjectFilled/>,
      },
      {
        path: '/work-exps',
        name: 'Work Exps',
        icon: <ControlFilled/>,
      },
    ]
  }
}
