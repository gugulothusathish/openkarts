
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @ViewChild('nameReference') nameRef: ElementRef;
  @ViewChild('emailReference') emailRef: ElementRef;
  @ViewChild('pwdReference') pwdRef: ElementRef;
  

  onRegister(mobileRef: HTMLInputElement){
    console.log('Entered email is ::',this.nameRef.nativeElement.value);
    console.log('Entered name is ::',this.emailRef.nativeElement.value);
    console.log('Entered password is ::',this.pwdRef.nativeElement.value);
    console.log('Entered mobile is ::', mobileRef.value);
  }

}
