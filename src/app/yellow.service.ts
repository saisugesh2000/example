import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YellowService {

 //  Light Mode And Dark Mode
 isyellow: boolean = false;

 constructor() {
   // Read theme preference from localStorage if available
   if (typeof sessionStorage !== 'undefined'){
     const storedTheme = sessionStorage.getItem('isyellow');
     this.isyellow = storedTheme ? JSON.parse(storedTheme) : false;
   }
 }

 yellow(): void {
   this.isyellow = !this.isyellow;
   // Save theme preference to localStorage if available
   if (typeof sessionStorage !== 'undefined') {
     sessionStorage.setItem('isyellow', JSON.stringify(this.isyellow));
   }
 }
}
