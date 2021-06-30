import { Component, OnInit } from '@angular/core';
import { faTwitter, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  title = 'Ray Stratos';

  faTwitter=faTwitter;
  faDiscord  = faDiscord;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram; 

  constructor() { }

  ngOnInit(): void {
  }

}
