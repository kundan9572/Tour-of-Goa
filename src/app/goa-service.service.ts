import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { GOA } from './goaInterface';
import { MOCKGOA } from './mock-goa';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GoaServiceService {

  constructor( private messageService: MessageService) { }

  getGoa(): Observable<GOA[]>{
    this.messageService.add('GoaService: fetched Goa')
    return of(MOCKGOA); 
  }
}
