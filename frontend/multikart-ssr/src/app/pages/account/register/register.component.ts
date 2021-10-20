import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public url = {
    img: "assets/images/user.png"
  };
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      uname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{0-10}')]],
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
  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.userForm.value);
    this.userService.create(this.userForm.value)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    // this.userForm.reset();
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
