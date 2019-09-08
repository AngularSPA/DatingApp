import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const that = this;
    that.getValue();
  }

  getValue() {
    const that = this;
    that.http.get('http://localhost:5000/api/values').subscribe(response => {
      that.values = response;
    }, error => {
      console.log(error);
    });
  }

}
