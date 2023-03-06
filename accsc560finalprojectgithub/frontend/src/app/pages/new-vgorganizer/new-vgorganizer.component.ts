import { Component, OnInit } from '@angular/core';
import { VgorganizerService } from 'src/app/vgorganizer.service';

@Component({
  selector: 'app-new-vgorganizer',
  templateUrl: './new-vgorganizer.component.html',
  styleUrls: ['./new-vgorganizer.component.scss']
})
export class NewVgorganizerComponent implements OnInit {

  constructor(private vgorganizerService: VgorganizerService) { }

  ngOnInit() {

  }

  createVgorganizer(name: string, system: string, publisher: string, eshopUSApriceindollars: Number, rating: string, owngame: string, beatmainstory: string, unitssoldtotal: Number, releaseyear: Number, personalratingoutoften: Number) {
    this.vgorganizerService.createVgorganizer(name, system, publisher, eshopUSApriceindollars, rating, owngame, beatmainstory, unitssoldtotal, releaseyear, personalratingoutoften).subscribe((response: any) => {
      console.log(response);

    });
  }

}
