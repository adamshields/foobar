import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';

// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    // MatButtonModule
  ],
  exports: [
    ListUsersComponent,
  ]
})
export class UsersModule { }
