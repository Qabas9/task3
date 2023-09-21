import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    'https://www.usmle.org/sites/default/files/styles/hero_interior/public/2021-09/prepare_for_your_exam_option_2.webp?h=0775493e&itok=ilhVptIl',
  
        ];

  items: MenuItem[]= [];
    
  home: MenuItem = {};
  
  ngOnInit() {}

    // this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

    //     this.home = { icon: 'pi pi-home', routerLink: '/' };
    // }
      // this.items = [
      //   { label: "AngularJS" },
      //   { label: "ReactJS" },
      //   { label: "HTML" },
      //   { label: "JavaScript" },
      //   { label: "PrimeNG" }
      // ];
      
      // this.home = {icon: 'pi pi-home'};
  }

