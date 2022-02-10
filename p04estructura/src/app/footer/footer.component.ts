import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public message: string;
  public year: number = new Date().getFullYear();

  constructor() { 
    this.message = 'footer funciona chachi!';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.year = 1973;
    }, 3000)  
  }

}
