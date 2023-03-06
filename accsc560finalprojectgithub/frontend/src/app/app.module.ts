import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgorganizerViewComponent } from './pages/vgorganizer-view/vgorganizer-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewVgorganizerComponent } from './pages/new-vgorganizer/new-vgorganizer.component';
import { EditVgorganizerComponent } from './pages/edit-vgorganizer/edit-vgorganizer.component';
@NgModule({
  declarations: [
    AppComponent,
    VgorganizerViewComponent,
    NewVgorganizerComponent,
    EditVgorganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
