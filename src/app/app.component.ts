import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators ,FormControl ,AbstractControl} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  genders = ['Male','Female'];
  signUpForm : FormGroup
 // emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  usernamepattern = "^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,12}$";
  passwordpattern = "(?=.*?[#?!@$%^&*-]).{6,12}$";

  constructor(private _fb:FormBuilder){}
  ngOnInit() {
    
    function Passwordvalidator(c: AbstractControl): { invalid: boolean } { 
              
            
                       let u = c.get('username').value;
                       console.log(u);
                       
                       let p = c.get('password').value;
                      
                    let uname = u.substr(0,3);
                    let pass = p.substr(0,3);
                    if(uname===pass){
                        return {invalid: true};
        
                    }
                    return {invalid: false};
                    
                  }
      this.signUpForm = new FormGroup ({
       
          'username': new FormControl(null,[Validators.required,Validators.pattern(this.usernamepattern)]),
          'password': new FormControl(null,[Validators.required,Validators.pattern(this.passwordpattern),Passwordvalidator]),
          
      
          //'gender': new FormControl('male',Validators.required)

      }); 
  }
  onSubmit(){
    if(this.signUpForm.valid){
    console.log("EmailID :-"+this.signUpForm.value.email);
    console.log("Password :-"+this.signUpForm.value.password);
    console.log("Gender :-"+this.signUpForm.value.gender);
    console.log('Form Submitted !');
    }
  }
}   
//     //this.signUpForm.reset();
//   }
// onReset(){

//   this.signUpForm.reset();
// }

// initAddress() {
//   // initialize our address
//   return this._fb.group({
//       street: ['', Validators.required],
//       postcode: ['',Validators.maxLength(6)]
//   });
// }

// addAddress() {
// // add address to the list
// const control = <FormArray>this.signUpForm.controls['addresses'];
// control.push(this.initAddress());
// }

// removeAddress(i: number) {
// // remove address from the list
// const control = <FormArray>this.signUpForm.controls['addresses'];
// control.removeAt(i);
// }
 


  
// }


// onSubmit(form: NgForm){

//   console.log(form);
// }


// ---------------new-------------



// export class AppComponent implements OnInit {
//     public myForm: FormGroup;
//     usernamepattern = "^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,12}$";
//     passwordpattern = "(?=.*?[#?!@$%^&*-]).{6,12}$";
//     pincode = "^[0-9]{6}$";

//     constructor(private _fb: FormBuilder) { }

//     ngOnInit() {
      
//       function Passwordvalidator(c: AbstractControl): { invalid: boolean } { 
              
            
//                let u = c.get('username').value;
//                console.log(u);
               
//                let p = c.get('password').value;
              
//             let uname = u.substr(0,3);
//             let pass = p.substr(0,3);
//             if(uname===pass){
//                 return {invalid: true};

//             }
//             return {invalid: false};
            
//           }
//         this.myForm = this._fb.group({
//             name: ['', [Validators.required, Validators.pattern(this.usernamepattern)]],
//             password: ['', [Validators.required,Validators.pattern(this.passwordpattern)]],
//             addresses: this._fb.array([
//                 this.initAddress(),
//             ])
//         });
//     }

//     initAddress() {
//         return this._fb.group({
//             street: ['', Validators.required],
//             address2: ['', Validators.required],
//             address3: [''],
//             postcode: ['',[Validators.required, Validators.pattern(this.pincode)]]
//         });
//     }

//     addAddress() {
//         const control = <FormArray>this.myForm.controls['addresses'];
//         control.push(this.initAddress());
//     }

//     removeAddress(i: number) {
//         const control = <FormArray>this.myForm.controls['addresses'];
//         control.removeAt(i);
//     }

