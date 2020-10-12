import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GOA } from '../goaInterface';
import { MOCKGOA } from '../mock-goa';
import { GoaServiceService } from '../goa-service.service';
import { MessageService} from '../message.service';


@Component({
  selector: 'app-goa',
  templateUrl: './goa.component.html',
  styleUrls: ['./goa.component.css']
})
export class GoaComponent implements OnInit {

  goa: GOA[];

  selectedGoa: GOA;


  constructor(private goaService: GoaServiceService , private messageService: MessageService) { }

  getGoa(): void{
    this.goaService.getGoa().subscribe(goa => this.goa = goa)
  }

  ngOnInit(): void {
    this.getGoa();
  }


onSelect(goa:GOA){
  this.selectedGoa = goa;
  this.messageService.add('GoaServiceService: You have selected a Goa Invitation')
}

}
