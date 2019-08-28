import { Injectable } from '@angular/core';
import { Drzava } from './drzava/drzava.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrzavaService {

  constructor() { }

  getAll(): Observable<Drzava[]> {
    return null;
  }

  getById(id: number | string): Drzava {
    id = +id;
    let d = new Drzava();
    d.id = 1;
    d.naziv = 'Hrvatska';
    return d;
  }
}
