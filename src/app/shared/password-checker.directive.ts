import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export const passwordCheckerValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password && repeatPassword && password.value === repeatPassword.value
    ? null
    : { 'mismatch': true };
};

@Directive({
  selector: '[appPassswordChecker]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCheckerDirective,
      multi: true,
    },
  ],
})
export class PasswordCheckerDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordCheckerValidator(control);
  }
  constructor() {}
}
