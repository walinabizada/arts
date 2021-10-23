import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  public url = {
    img: "assets/images/user.png"
  };
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')
    this.userForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      uname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{0-10}'), Validators.minLength(10), Validators.maxLength(10)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      image: ['', Validators.required],
    })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  
  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.log('this.userForm.invalid', this.userForm.invalid);
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    console.warn('Your order has been submitted', this.userForm.value);
    // this.authService.register(this.userForm.value).subscribe(
    //   response => {
    //     console.log(response);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error => {
    //     console.log(error);
    //     this.errorMessage = error.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
    // this.userForm.reset();
  }
  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }
  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url.img = reader.result.toString();
      this.userForm.controls['image'].setValue(reader.result.toString());
    }
  }

}
