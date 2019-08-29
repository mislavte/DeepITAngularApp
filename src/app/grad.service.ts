import { Injectable } from '@angular/core';
import { Grad } from './grad/grad.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradService extends BaseService<Grad> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'grad');
   }
}
