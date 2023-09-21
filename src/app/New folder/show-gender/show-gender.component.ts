import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

// Register a sample datas for gender
import genderData from 'src/sample-datas/gender-data.json';

@Component({
  selector: 'app-show-gender',
  templateUrl: './show-gender.component.html',
  styleUrls: ['./show-gender.component.scss']
})
export class ShowGenderComponent implements OnInit {
  constructor(private service: ApiService) { }

  GenderList: any = [];  
  ModalTitle = "";
  ActivateAddEditGenderComp: boolean = false;
  gender: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }
  
  refreshEmpList() {
    this.service.getAllData().subscribe(data => {
      this.GenderList = genderData;
    });
  }

  
  addClick() {
   /* this.gender = {
      ID: "0",
      EmployeeName: "",
      DepartmentID: "",
      DOJ: ""
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true; */
  }

  closeClick(){}

  editClick(gender : any){}

  deleteClick(gender : any){}

}
