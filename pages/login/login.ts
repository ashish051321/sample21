import { Component, OnInit } from "@angular/core";
import { ScreenConstants, loginCardImages } from "../../common/constants";
import { interval, Subject } from "rxjs";
import { delay, first, mapTo, take, takeWhile, takeUntil } from "rxjs/operators";

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
  destroy$:Subject<boolean> = new Subject<boolean>();
  constructor() {}

  login(){
    
  }

  startApp() {
    this.showSplash = false;
    this.destroy$.next(true);
  }

  ngOnInit() {
    interval(600)
      .pipe(
        takeUntil(this.destroy$),
        takeWhile(data => {console.log('data',data); return (data < 1000)} )
      )
      .subscribe(
        data => {
          this.splashIndex = (data % 6) + 1;
        },
        err => {
          console.log("something went wrong while loading the app !");
        },
        () => {
          this.showSplash = false;
        }
      );
  }
  ngOnDestroy(){
    this.destroy$.next(true);
  }
}
