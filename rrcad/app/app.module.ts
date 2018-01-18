import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module';
import { DialogConfirmService } from './dialogconfirm.service';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


@NgModule({
    imports : [AppRoutingModule, 
               BrowserModule, 
               ClientesModule, 
               HttpModule, 
               InMemoryWebApiModule.forRoot(InMemoryDataService) 
               ],
               declarations :[AppComponent],
               providers : [
                   DialogConfirmService
               ],
               bootstrap: [AppComponent]
           })
           export class AppModule {}