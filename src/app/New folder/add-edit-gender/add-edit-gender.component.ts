import { Component,Input,OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-add-edit-gender',
  templateUrl: './add-edit-gender.component.html',
  styleUrls: ['./add-edit-gender.component.scss']
})
export class AddEditGenderComponent implements OnInit {

  constructor(private service: ApiService) { }
  @Input() gender: any;
  ID = "";


  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getAllData().subscribe((data: any) => {
      //this.GenderList = data;
    });
  }

  addEmployee() {
  }

  updateEmployee() {
  }

}
