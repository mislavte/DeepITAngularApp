import { Injectable } from '@angular/core';
import { Grad } from './grad/grad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradService {

  constructor() { }

  getAll(): Observable<Grad[]> {
    return null;
  }

  getById(id: number | string): Grad {
    id = +id;
    let d = new Grad();
    d.id = 1;
    d.naziv = 'Hrvatska';
    return d;
  }
}
