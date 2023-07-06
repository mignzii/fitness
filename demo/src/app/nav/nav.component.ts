import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlepageService } from '../titlepage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
  public titre!: string
  ngOnInit(): void {
    this.titleService.title$.subscribe((title: string) => {
      this.titre = title;

    });
    console.log("pee" +this.titre)
  }
  constructor(private titleService:TitlepageService){
  }
  

}
