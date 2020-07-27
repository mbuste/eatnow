import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HexagonComponent } from './component/hexagon/hexagon.component';
import { WhyusComponent } from './component/whyus/whyus.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { CategoryComponent } from './component/category/category.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavTopComponent } from './component/nav-top/nav-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HexagonComponent,
    WhyusComponent,
    CategoriesComponent,
    CategoryComponent,
    ContactComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
