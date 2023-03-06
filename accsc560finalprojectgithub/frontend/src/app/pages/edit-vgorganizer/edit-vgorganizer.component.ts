import { Component, OnInit } from '@angular/core';
import { VgorganizerService } from 'src/app/vgorganizer.service';
//if worked properly, would have import with ActivedRoute, Params coming from the '@angular/router' (Devstackr, 2019)

@Component({
  selector: 'app-edit-vgorganizer',
  templateUrl: './edit-vgorganizer.component.html',
  styleUrls: ['./edit-vgorganizer.component.scss']
})
export class EditVgorganizerComponent implements OnInit {
  constructor(private vgorganizerService: VgorganizerService) { }
  //Would have "private route: Activated Route" before vgorganizerService: VgorganizerService in the constructor (Devstackr, 2019)
  //Meanwhile, would have "private router: Router" located after private vgorganizerService: VgorganizerService (Devstackr, 2019).

  ngOnInit() {
    //Code below if I got add new vgorganizer to work (in comments below)
    //this.route.params.subscribe(
      //(params: Params) => {
              //this.vgorganizerId = params.vgorganizerId;
          //}
      //}
    //)
    

  }

  updateVgorganizer() {
    //if adding new entry worked
    //this.vgorganizerService.updateVgorganizer(this.vgorganizerId, name, system, publisher, eshopUSApriceindollars, rating, owngame, beatmainstory, unitssoldtotal, releaseyear, personalratingoutoften).subscribe(() => {

    //})

  }

}
