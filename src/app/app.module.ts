import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component'
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    BookAddComponent,
    BookListComponent,
    UserComponent,
    ViewListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    FlexLayoutModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
