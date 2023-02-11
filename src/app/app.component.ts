import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "_Dev_Null_'s DM Tools"
  isOpened: boolean = false;

  public onMenuClick(): void {
    console.log(`before: ${this.isOpened}`)
    this.isOpened = !this.isOpened;
    console.log(`after: ${this.isOpened}`)
  }
}
