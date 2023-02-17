import { Directive, HostBinding, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appManage]' //attribute directive. On which element
                            // to apply the functionality.
                            //Where to do
})
export class ManageDirective {
    @Input() appManage = '';//for property binding use same property name
                           // as selector name

    constructor(){

    }

    @HostBinding('class.open') isOpen: boolean  = false; //what to do

    @HostListener('click') 
    manageButtonOpen(){  //when to do
        this.isOpen = ! this.isOpen;
        console.log('>>>>>>passed input from directive>>>>>>', this.appManage);
        
    }

}

//HostBinding will be applied when HostListener even occurs on the element
//on which you applied this directive