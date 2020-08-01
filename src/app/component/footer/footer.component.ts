import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  isShown:boolean =false;
  ngOnInit(): void {
  }

  slideMenu(){
      this.isShown = !this.isShown;
    }

}
