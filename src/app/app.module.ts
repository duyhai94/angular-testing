import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './shared/pipe/filterbykey.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
