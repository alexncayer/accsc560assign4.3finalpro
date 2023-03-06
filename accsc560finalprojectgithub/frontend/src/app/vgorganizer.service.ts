import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class VgorganizerService {

  constructor(private webReqService: WebRequestService) { }

  createVgorganizer(name: string, system: string, publisher: string, eshopUSApriceindollars: Number, rating: string, owngame: string, beatmainstory: string, unitssoldtotal: Number, releaseyear: Number, personalratingoutoften: Number) {
    //"We want to send a web request to create" a game entry (Devstackr, 2019)
    return this.webReqService.post('vgorganizer', {name, system, publisher, eshopUSApriceindollars, rating, owngame, beatmainstory, unitssoldtotal, releaseyear, personalratingoutoften })

  }

  //if I was able to get adding a new vgorganizer game entry working
  //updateVgorganizer(id: string, name: string, system: string, publisher: string, eshopUSApriceindollars: Number, rating: string, owngame: string, beatmainstory: string, unitssoldtotal: Number, releaseyear: Number, personalratingoutoften: Number) {
    //return this.webReqService.patch(`vgorganizer/${id}`, { name, system, publisher, eshopUSApriceindollars, rating, owngame, beatmainstory, unitssoldtotal, releaseyear, personalratingoutoften });
    
  //}

  //if I was able to get adding a new vgorganizer game entry working
  //deleteVgorganizer(id: string) {
      //return this.webReqService.get(`vgorganizer/${id}`);
  //}
}
