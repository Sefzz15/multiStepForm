import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Custom validator για να συγκρίνει το password με το confirmPassword
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
  };
}

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class MultiStepFormComponent implements OnInit {
  form!: FormGroup;
  step: number = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form
    this.form = this.fb.group({
      step1: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      step2: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
      }),
      step3: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]],
        },
        { validators: passwordMatchValidator() } // Προσθήκη του custom validator στο form group
      ),
    });
  }

  // Function to go to next step
  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  // Function to go to previous step
  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  // Function to handle form submission
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data: ', this.form.value);
    }
  }
}
