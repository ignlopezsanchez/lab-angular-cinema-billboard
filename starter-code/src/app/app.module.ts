import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './MyHomeComponent/MyHomeComponent.component';
import { MyMovieComponentComponent } from './MyMovieComponent/MyMovieComponent.component';
import { RouterModule,Routes } from "@angular/router";
import { MyMoviesService } from './Services/my-movies.service';

const routes: Routes = [
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MyMoviesService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
