import { Component ,OnInit } from '@angular/core';
import { TitlepageService } from '../titlepage.service';

@Component({
  selector: 'app-programmeunique',
  templateUrl: './programmeunique.component.html',
  styleUrls: ['./programmeunique.component.css']
})
export class ProgrammeuniqueComponent implements OnInit  {

  ngOnInit(): void {
      this.titleService.setTitle("Programme d'Entraînement Complet pour la Musculation ")
  }
  constructor(private titleService:TitlepageService){

  }
}
