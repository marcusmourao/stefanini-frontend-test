import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ListPage } from '../list/list.page';
import { SearchPage } from '../search/search.page';
import { EditPage } from '../edit/edit.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(list:list)',
        pathMatch: 'full',
      },
      {
        path: 'list',
        outlet: 'list',
        component: ListPage
      },
      {
        path: 'search',
        outlet: 'search',
        component: SearchPage
      },
      {
        path: 'edit',
        outlet: 'edit',
        component: EditPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(list:list)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
