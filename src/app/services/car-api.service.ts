import { Injectable } from '@angular/core';
//import {HttpClient, HttpErrorResponse}
import { Observable } from 'rxjs'; 
import { catchError, tap } from 'rxjs';
import { ICar } from '../interfaces/car.ts';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor(_http) {
    
  }