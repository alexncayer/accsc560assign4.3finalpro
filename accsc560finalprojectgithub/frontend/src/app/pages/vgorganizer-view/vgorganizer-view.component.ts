import { Component, OnInit } from '@angular/core';
import { VgorganizerService } from 'src/app/vgorganizer.service';

@Component({
  selector: 'app-vgorganizer-view',
  templateUrl: './vgorganizer-view.component.html',
  styleUrls: ['./vgorganizer-view.component.scss']
})
export class VgorganizerViewComponent implements OnInit {

  constructor(private vgorganizerService: VgorganizerService) { }
  //At some point for authentication or a further step, adding "private route: ActivedRoute" and "private router: Router" after service vgorganizer: Vgorganizer 
  //to help with deleting a given video game entry (Devstackr, 2019).

  ngOnInit() {
    //Code below if I got add new vgorganizer to work (in comments below)
    //this.route.params.subscribe(
      //(params: Params) => {
          //if(params.vgorganizerId) {
              //this.selectedVgorganizerId = params.vgorganizerId;
              //this.vgorganizerService.getVgorganizer(params.vgorganizerId).subscribe((vgorganizer: Vgorganizer[]) => {
                    //this.vgorganizer = vgorganizer;
              
              //)}
          //} else {
              //this.vgorganizer = undefined;
          //}
      //}
    //)

    //this.vgorganizerService.getVgorganizer().subscribe((vgorganizer: Vgorganizer[]) => {
        //this.vgorganizer = vgorganizer;
    //})

  }

  //Code below if I was able to add a new vgorganizer video game entry to work
  // onDeleteVgorganizerClick() {
      //this.vgorganizerService.deleteList(this.selectedVgorganizerId).subscribe((res: any) => {
          //console.log(res);
      //});
  //}

  //Testing to add a game entry manually does work as shown in screenshot attached to the documents I submitted to the assignment post.
  //createNewVgorganizer() {
    //this.vgorganizerService.createVgorganizer('Test', 'Nintendo Switch', 'ACProductions', 59.99, 'Everyone', 'Yes', 'Yes', 5000, 2023, 8).subscribe((response: any) => {
      //this.router.navigate(['/vgorganizer']);
      //console.log(response);

    //});

  //}



}
