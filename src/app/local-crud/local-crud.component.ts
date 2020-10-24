import {Component, OnInit} from '@angular/core';
import {LocalCrudServiceService} from '../services/local-crud-service.service';


@Component({
  selector: 'app-local-crud',
  templateUrl: './local-crud.component.html',
  styleUrls: ['./local-crud.component.css']
})
export class LocalCrudComponent implements OnInit {

  computerName = '';

  constructor(
    private databaseService: LocalCrudServiceService
  ) {

  }
  ngOnInit(): void {
    const x = process.env.COMPUTERNAME;
    console.log('L19: x', x);
  }

  async createDB(event: Event): Promise<void> {
    console.log('L23: , event', event);
  }




}
