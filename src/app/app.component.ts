import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';

import { db } from "./../assets/movie-db";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  errorMessage:string = "";
  movies:Movie[] =[];
  filteredMovies:Movie[] = [];
  languages:any[] = db.languages;
  genres:any[] = db.genres;

  constructor(){}

  ngOnInit(): void {
      this.movies = db.movies;
      this.filteredMovies = this.movies;
  }

  getFilteredMovies(){
    
  }

}
