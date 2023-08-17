import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PrateleiraComponent } from './componentes/prateleira/prateleira.component';
import { ReviewsComponent } from './componentes/reviews/reviews.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { SacolaVaziaComponent } from './componentes/cabecalho/sacola-vazia/sacola-vazia.component';
import { SacolaCheiaComponent } from './componentes/cabecalho/sacola-cheia/sacola-cheia.component';
import { CabecalhoSacolasComponent } from './componentes/cabecalho/cabecalho-sacolas/cabecalho-sacolas.component';
import { AnuncioComponent } from './componentes/anuncio/anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CabecalhoComponent,
    PrateleiraComponent,
    ReviewsComponent,
    RodapeComponent,
    SacolaVaziaComponent,
    SacolaCheiaComponent,
    CabecalhoSacolasComponent,
    AnuncioComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
