import {
  MainPage
} from '../../pages/Main.jsx'

const mainRoutes = [
  {
    path:'/Justine-Portfolio',
    exact: true,
    auth: true,
    accessible: true,
    component: MainPage
  },
]

export const routes = [
  {
    path:'/Justine-Portfolio',
    exact: true,
    auth: true,
    accessible: true,
    component: MainPage
  },
  ...mainRoutes,
]

export const menu = {
  route: {
    path: '/Justine-Portfolio',
    routes: [
      {
        path: '/Justine-Portfolio',
        name: 'Portfolio'
      }
    ]
  }
}
