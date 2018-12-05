import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { EditPageModule } from '../edit/edit.module';
import { SearchPageModule } from '../search/search.module';
import { ListPageModule } from '../list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ListPageModule,
    SearchPageModule,
    EditPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
