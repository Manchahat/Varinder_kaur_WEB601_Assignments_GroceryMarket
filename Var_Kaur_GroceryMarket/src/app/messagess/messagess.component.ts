import { Component } from '@angular/core';
import { MessageService } from '../services/messageservice';

@Component({
  selector: 'app-messagess',
  templateUrl: './messagess.component.html',
  styleUrls: ['./messagess.component.scss']
})

export class MessagessComponent {
  constructor(public messageService: MessageService) {}
  
}
