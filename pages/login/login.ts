import { Component, OnInit } from "@angular/core";
import { ScreenConstants, loginCardImages } from "../../common/constants";
import { interval } from "rxjs";
import { delay, first, mapTo } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.css"]
})
export class LoginPage implements OnInit {
  showSplash = true;
  screenConst = ScreenConstants;
  loginCardImages = loginCardImages;
  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        delay(5000),
        first(),
        mapTo(false)
      )
      .subscribe(data => {
        this.showSplash = data; 
      });
  }
}
