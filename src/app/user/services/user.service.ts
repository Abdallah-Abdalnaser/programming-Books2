import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  show = new Subject<boolean>();
  Delete = new Subject<boolean>();
  message = new Subject<string>();
  constructor() { }
}
