import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared.module';

import { UserTableComponent } from './components/table/user-table.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [UserTableComponent, UsersListComponent, DialogComponent],
  providers: [UsersService],
  imports: [SharedModule, MaterialModule, UsersRoutingModule],
})
export class UsersModule {}
