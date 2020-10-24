import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocalCrudComponent } from './local-crud/local-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocalCrudComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
