import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-models-email',
  templateUrl: './models-email.component.html',
  styleUrls: ['./models-email.component.css']
})
export class ModelsEmailComponent implements OnInit {
  baseUrl = "http://localhost:5000/api/"
  emails: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.baseUrl+"emails").subscribe(response => {
      this.emails = response;

      let formattedEmails = [];
      //create an array out of the body of the email 
      //this preserves formatting for the html
      this.emails.forEach(email => {
        console.log(email);
        var body:string = email.body;
        var bodyArray: Array<string>;
        //the body attribute may be null
        if (body != null) {
          body = body.toString();
          let curWord:string = "";
          let bodyArray = body.split(/\r?\n/);
          console.log(bodyArray);
          email.body = bodyArray;
          formattedEmails.push(email);
        } 
      });
      this.emails = formattedEmails;
    }, error => {
      console.log(error);
    });
  }



}
