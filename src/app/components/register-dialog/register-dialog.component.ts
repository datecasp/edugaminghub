import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegisterFormDTO } from 'src/app/models/register-form-DTO';
import { AuthService } from 'src/app/services/auth-service.service';
import { passwordCheckerValidator } from 'src/app/shared/password-checker.directive';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  passwordForm: FormGroup = new FormGroup({});
  public notRegistered: boolean = true;
  public mismatch: boolean | any;
  public isFormValid: boolean | any;
  //EventEmitter of Object Type to send the Form values
  @Output() registerOutput: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterFormDTO,
  ) {}

  ngOnInit(): void {
    this.registerForm.reset();
    this.passwordForm.reset();
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.email, Validators.required])
      )
    });
      this.passwordForm = new FormGroup({
          password: new FormControl('', Validators.required),
          repeatPassword: new FormControl('', Validators.required),
        },
        {
          validators: passwordCheckerValidator,
        }
      
    );
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
    return this.passwordForm.get('password');
  }

  get repeatPassword() {
    return this.passwordForm.get('repeatPassword');
  }

  submitRegister() {
    if (this.registerForm.valid) {
      this.registerOutput.emit(this.registerForm.value);
    }
  }

  sendData(registerForm: FormGroup, passwordForm: FormGroup){
    this.data.name = registerForm.controls['name'].value;
    this.data.surname = registerForm.controls['surname'].value;
    this.data.email = registerForm.controls['email'].value;
    this.data.password = passwordForm.controls['password'].value;
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
