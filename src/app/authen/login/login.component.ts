import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Profile {
  name: string;
  old: number;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {

  }
  
  onSubmit() {
    if (this.login.value.email.length < 6) {
      return false;
    }
    return true;
  }
  list: Profile[] = [
    {
      name: 'ha2i',
      old: 18
    },
    {
      name: 'ha3i',
      old: 19
    },
    {
      name: 'ha5i',
      old: 11
    },
    {
      name: 'hai',
      old: 12
    },
    {
      name: 'ha5i',
      old: 14
    },
    {
      name: 'hai',
      old: 19
    }
  ]
 

}
