import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlepageService {
  private titleSubject = new Subject<string>();
  public title$ = this.titleSubject.asObservable();
  constructor() { }

  public setTitle(title: string): void {
    this.titleSubject.next(title);
  }
}
