import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './initial-pages/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InitialPagesModule } from './initial-pages/initial-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    InitialPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
