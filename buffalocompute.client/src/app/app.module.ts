import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { FooterComponent } from './menu/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
