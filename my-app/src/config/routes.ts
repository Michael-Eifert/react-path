import { Route } from '../model/Route'
import About from '../pages/About'
import Expenses from '../pages/Expenses'
import GroupPage from '../pages/GroupPage'
import Home from '../pages/Home'
import GroupDetailPage from '../pages/group/[groupId]'

export const routes: Array<Route> = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    element: Home,
    path: '/',
    isEnabled: true,
  },
  {
    key: 'router-group',
    title: 'Group Page',
    description: 'List of all Groups',
    element: GroupPage,
    path: '/group',
    isEnabled: true,
  },
  {
    key: 'router-group-detail-page',
    title: 'Group Detail Page',
    description: 'Group Detail Page',
    element: GroupDetailPage,
    path: '/group/:groupId',
    isEnabled: true,
    subPage: true,
  },
  {
    key: 'router-about',
    title: 'About',
    description: 'About',
    element: About,
    path: '/about',
    isEnabled: true,
  },
  {
    key: 'router-expenses',
    title: 'Expenses',
    description: 'Expenses',
    element: Expenses,
    path: '/expenses',
    isEnabled: false,
  },
]
