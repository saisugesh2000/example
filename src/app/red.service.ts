import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedService {

 //  Light Mode And Dark Mode
 isred: boolean = false;

 constructor() {
   // Read theme preference from localStorage if available
   if (typeof sessionStorage !== 'undefined'){
     const storedTheme = sessionStorage.getItem('isred');
     this.isred = storedTheme ? JSON.parse(storedTheme) : false;
   }
 }

 red(): void {
   this.isred = !this.isred;
   // Save theme preference to localStorage if available
   if (typeof sessionStorage !== 'undefined') {
     sessionStorage.setItem('isred', JSON.stringify(this.isred));
   }
 }
}
