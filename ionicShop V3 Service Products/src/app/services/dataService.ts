// angular.module('starter.services', ['ngResource'])

// .factory('Session', function ($resource) {
    
//     //return $resource('http://localhost:5000/sessions/:sessionId');

//     return $resource('https://damp-dawn-17713.herokuapp.com/api/products');
    
// });


import { Injectable }     from '@angular/core';
import { URLSearchParams} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
//import { Product }          from '../app.component';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Injectable()
export class ProductDataService {

    public site:string;
    //my_authToken:string;
    public foods = [];

    constructor(private http: Http) { 

       //this.site = "http://localhost:3000/"
       
       this.site = "https://damp-dawn-17713.herokuapp.com/"

        this.foods = [
                        { title: 'Drinks', icon: 'angular', color: '#E63135',
                        subItems: [
                            { title: 'Coffee', icon: 'css3', color: '#F46529'},
                            { title: 'Tea', icon: 'html5', color: '#FFD439'} ] },

                        { title: 'Dinner', icon: 'javascript', color: '#CE6296',
                        subItems: [
                            { title: 'Fruit', icon: 'sass', color: '#78BD43'},
                            { title: 'Vegetables', icon: 'nodejs', color: '#3575AC'},
                            { title: 'Dessert', icon: 'python', color: '#412159'} ]   
                        }
                    ];   

    }

  // Local Array data
  getFoodsFromLocal()
  {
    return this.foods;
  }

// old functions -------------------------------------------------------- bellow : 
    getProducts(token) {

        let url  = this.site + 'api/products';

        console.log(url);
        //console.log(this.my_authToken);

        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
        let headers = new Headers({ 'Content-Type': 'application/json',
                                    'Authorization': token}); 

        let options = new RequestOptions({ headers: headers });      

        return this.http.get(url, options)
            .map(this.extractData) 
            .catch(this.handleError);         
    }

    getProductById(token, id : string) {

        //let url  = this.site + 'api/accounts/user/06cb192c-4734-4eb4-82a9-cdf251fccd20';
        let url  = this.site + 'api/products/' + id;

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
        //'Authorization': 'Bearer ' + token}); 
        'Authorization': token});   // For mean
        let options = new RequestOptions({ headers: headers });      

        return this.http.get(url, options)
            .map(this.extractData) 
            .catch(this.handleError);         
    }

    deleteProductById(token) {

      //??????

        let url  = this.site + 'api/accounts/user/06cb192c-4734-4eb4-82a9-cdf251fccd20';

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token}); 
        let options = new RequestOptions({ headers: headers });      

        return this.http.get(url, options)
            .map(this.extractData) 
            .catch(this.handleError);  
    } 

    // private put(hero: Hero) {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // let url = `${this.heroesUrl}/${hero.id}`;

    // return this.http
    //             .put(url, JSON.stringify(hero), {headers: headers})
    //             .map(res => res.json());
    // }


    createProduct(productModel: Object): Observable<Comment[]> {
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({ headers: headers });

        let url     = this.site + 'api/products/create';

        //let params: URLSearchParams = new URLSearchParams();

        let content = new URLSearchParams();

        content.set('goods_id',  productModel["goods_id"]);
        content.set('goods_sn', productModel["goods_sn"]);  
        content.set('goods_name', productModel["goods_name"]);
        content.set('shop_price', productModel["shop_price"]);
        content.set('market_price', productModel["market_price"]);
        content.set('goods_quantity', productModel["goods_quantity"]);
        content.set('goods_desc', productModel["goods_desc"]);
        content.set('img1', productModel["img1"]);
        content.set('img2', productModel["img2"]);
        content.set('img3', productModel["img3"]);
        content.set('is_free_post', productModel["is_free_post"]);
        content.set('update_time', productModel["update_time"]);

        return this.http.post(url, content.toString(), options)
            .map(this.extractData) 
            .catch(this.handleError); 
    } 


    // Retreival of JSON from .NET is a success.
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    // An error occurred. Notify the user.
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}