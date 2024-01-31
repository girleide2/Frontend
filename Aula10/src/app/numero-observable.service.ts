
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumeroObservableService {

  constructor() { }

 
  getNumeros(): Observable<number> {
    return interval(100) 
      .pipe(
        take(100)  
      );
  }
}
