import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegisterFormDTO } from 'src/app/models/register-form-DTO';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  public notRegistered: boolean = true;
  //EventEmitter of Object Type to send the Form values 
  @Output() registerOutput: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    private _formBulder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterFormDTO,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm.reset();
    this.registerForm = this._formBulder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submitRegister() {
    if (this.registerForm.valid) {
      this.registerOutput.emit(this.registerForm.value);
    }
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
