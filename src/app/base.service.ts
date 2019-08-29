import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  constructor(protected httpClient: HttpClient,
              protected controllerName: string) { }

  getAll(): Observable<T[]> {
    return this.httpClient.get(environment.baseURL + this.controllerName + '/getAllActive') as Observable<T[]>;
  }

  getById(id: number): Observable<T> {
    return this.httpClient.get<T>(environment.baseURL + this.controllerName + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(environment.baseURL + this.controllerName + '/' + id);
  }

  update(entity: T): Observable<T> {
    return this.httpClient.put<T>(environment.baseURL + this.controllerName, entity);
  }

  create(entity: T): Observable<T> {
    return this.httpClient.post<T>(environment.baseURL + this.controllerName, entity);
  }
}
