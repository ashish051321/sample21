import { Component, OnInit } from '@angular/core';
import  {ScreenConstants} from '../../common/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage implements OnInit {
  screenConst = ScreenConstants;
  constructor() {
    
   }

  ngOnInit() {
  }

}