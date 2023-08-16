import { Component } from '@angular/core';
import { Audience } from '../Service/audience';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent {
  audiences!:Array<Audience>
  curentPage:number=0
  nbElements:number=3
  totalPage:number=0
  erreur:any
  reussite:any

  constructor(private service:UtilsService ){
    
  }

  ngOnInit(): void {
    this.getProduitsWithPagination();
  }
  
  getProduits(){
    this.service.getAllAudiences().subscribe((response:any)=>{
      this.audiences=response.data
    },(err)=>{
      this.erreur=err.message
      setTimeout(() => {
        this.erreur=""
      }, 16000);
      console.log(err);
      })
    
  }

  goToPage(i:number){
    this.curentPage=i
    this.getProduitsWithPagination()
  }

  getProduitsWithPagination(){
    this.service.getAllAudiences().subscribe((response:any)=>{
      this.audiences=response.data
      let index= this.curentPage*this.nbElements
      this.totalPage = ~~(this.audiences.length / this.nbElements)
      if (this.audiences.length % this.nbElements !=0) {
        this.totalPage++
      }
      let pageP=this.audiences.slice(index,index+this.nbElements)
      this.audiences=pageP
      console.log(this.totalPage);
      
    },(err)=>{
      this.erreur=err.message
      setTimeout(() => {
        this.erreur=""
      }, 16000);
      console.log(err);
      })

  }

  deleteData(p:any){
    this.service.deleteAudience(p).subscribe((res)=>{
      console.log(res);
      this.reussite="Donnée supprimée avec succès !"
      setTimeout(() => {
        this.reussite=""
      }, 10000);
      let id = this.audiences.indexOf(p)
      this.audiences.splice(id,1)
      
    })
  }

}
