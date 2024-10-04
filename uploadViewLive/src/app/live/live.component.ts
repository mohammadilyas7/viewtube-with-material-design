import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  liveForm:FormGroup;
  constructor(formBuilder:FormBuilder) {
    this.liveForm = formBuilder.group({
      'addtitle':new FormControl('',[Validators.required,Validators.maxLength(100)]),
      'pick':new FormControl('',[Validators.required]),
      'picke':new FormControl('',Validators.required)
    })
   }
  ngOnInit(): void {
  }

  saveDetails()
  {
    alert("Your live stream event is scheduled successfully");
    console.log(this.liveForm.value);
  }
}