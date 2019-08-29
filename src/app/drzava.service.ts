import { Injectable } from '@angular/core';
import { Drzava } from './drzava/drzava.model';
import { of, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrzavaService extends BaseService<Drzava> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'drzava');
   }

}
