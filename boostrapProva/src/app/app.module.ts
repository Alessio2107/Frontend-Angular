import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { TestCicloComponent } from './test-ciclo/test-ciclo.component';
import { MomentPipe } from './moment.pipe';
import { UpperCustomPipe } from './upper-custom.pipe';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    TestCicloComponent,
    MomentPipe,
    UpperCustomPipe,
    FiltroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
