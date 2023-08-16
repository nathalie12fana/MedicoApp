import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // EndPoints
  end_point = 'http://192.168.43.122:8000/api/';
  // Routes
  users = 'users';
  audiences = 'produits';
  action_user='user/'
  action_audience='produit/'
  store='store'
  update='update/'
  delete='delete/'
  add_qty='qty/add/'
  remove_qty='qty/withdrap/'
  add_promotion='promotion/'
  audienceToken:any


  constructor(private a: HttpClient) {}

  /**
   *  méthodes pour les utilisateurs
   */

  getAllUsers() {
    return this.a.get(this.end_point + this.users);
  }

  getOneUser(id:any) {
    return this.a.get(this.end_point + this.action_user + id);
  }

  storeUser(data:any) {
    return this.a.post(this.end_point + this.action_user + this.store,data);
  }

  updateUser(id:any,data:any){
    return this.a.put(this.end_point + this.action_user + this.update + id,data)
  }

  deleteUser(id:any){
    return this.a.delete(this.end_point + this.action_user + this.delete + id)
  }

  /**
   *  méthodes pour les audiences
   */

  getAllAudiences() {
    return this.a.get(this.end_point + this.audiences);
  }

  getOneAudience(id:any) {
    return this.a.get(this.end_point + this.action_audience + id);
  }

  storeAudience(data:any) {
    return this.a.post(this.end_point + this.action_audience + this.store,data);
  }

  // addQty(id:any,data:any){
  //   return this.a.put(this.end_point + this.action_product + this.add_qty + id,data)
  // }

  // removeQty(id:any,data:any){
  //   return this.a.put(this.end_point + this.action_product +this.remove_qty + id,data)
  // }

  // addPromotion(id:any,data:any){
  //   return this.a.put(this.end_point + this.add_promotion + id,data)
  // }

  updateAudience(id:any,data:any){
    return this.a.put(this.end_point + this.action_audience + this.update + id,data)
  }

  deleteAudience(id:any){
    return this.a.delete(this.end_point + this.action_audience + this.delete + id)
  }

}
