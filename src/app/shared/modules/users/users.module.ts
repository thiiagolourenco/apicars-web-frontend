import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared.module';

import { UserTableComponent } from './components/table/user-table.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [UserTableComponent, UsersListComponent],
  imports: [CommonModule, SharedModule, MaterialModule, UsersRoutingModule],
})
export class UsersModule {}
