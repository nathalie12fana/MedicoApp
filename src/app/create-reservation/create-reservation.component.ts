import { Component } from '@angular/core';
import { Audience } from './reservation';
import { UtilsService } from '../utils.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {
  produit = new Audience()
  erreur:any
  reussite:any

  constructor(private service:UtilsService){}

  saveAudience(formData:NgForm){
    let data =formData.value
    this.service.storeAudience(data).subscribe((res:any)=>{
      this.reussite=res.statut
      setTimeout(() => {
        this.reussite=""
      }, 12000);
      console.log(res);
    },(err:any)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 12000);
      console.log(err);
      })
  }
}
