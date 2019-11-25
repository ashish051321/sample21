import { Component, OnInit } from "@angular/core";
import { ScreenConstants, loginCardImages } from "../../common/constants";
import { interval } from "rxjs";
import { delay, first, mapTo, take, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.css"]
})
export class LoginPage implements OnInit {
  showSplash = true;
  splashIndex = 1;
  screenConst = ScreenConstants;
  loginCardImages = loginCardImages;
  constructor() {}

  startApp() {
    this.showSplash = false;
  }

  ngOnInit() {
    interval(600)
      .pipe(
        // delay(1000)
      )
      .subscribe(
        data => {
          this.splashIndex = (data % 6) + 1;
        },
        err => {
          console.log("somethign went wrong while loading the app !");
        },
        () => {
          this.showSplash = false;
        }
      );
  }
}
