import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ServicioArboService } from '../servicio-arbo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
}) 
export class Tab1Page implements OnInit {
  constructor(
    private serviciosteven: ServicioArboService
  ) {  }
  allCharacters: any;

  ngOnInit() {
    this.serviciosteven.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }
}
