import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { CasaComponent } from './casa/casa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipsComponent,
    AlojamientoComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
