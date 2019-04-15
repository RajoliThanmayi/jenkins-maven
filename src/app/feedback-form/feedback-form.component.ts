import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup; // Declaring a variable of type FormGroup
  morefeedbacksControls: FormArray;

  constructor(private formBuilder: FormBuilder) { 
    this.buildFeedbackForm();
  }

  ngOnInit() {
    // Set default values in form only after ng on init
    // let customerNameControl = this.feedbackForm.get('customerName') as FormControl;
    // customerNameControl.setValue('Kiran Kumar Dash', {emitEvent: true}); // value and trigger change event
  }

  buildFeedbackForm() {
    // Building the Feedback Form Group
    this.feedbackForm = this.formBuilder.group({
      // customerName: new FormControl() // arguments: val, validator
      customerName: this.formBuilder.control(null), // same as above but expects null by default
      productPurchased: this.formBuilder.control(null),
      // productPurchased: this.formBuilder.control('Washing Machine'), // default value setting
      suggestions: this.formBuilder.control(null),
      delivery: this.formBuilder.group({
        delOnTime: this.formBuilder.control(null),
        // delOnTime: this.formBuilder.control(true), // default value setting
        damagedProduct: this.formBuilder.control(null),
        extraCharge: this.formBuilder.control(null)
      }),
      installation: this.formBuilder.group({
        properInstallation: this.formBuilder.control(null),
        easyUserManual: this.formBuilder.control(null),
        properTraining: this.formBuilder.control(null)
      }),
      maintenance: this.formBuilder.group({
        periodicMaintenance: this.formBuilder.control(null),
        issuesFixed: this.formBuilder.control(null),
        frequentIssues: this.formBuilder.control(null)
      }), // Nested Form Group
      gender: this.formBuilder.control(null),
      // gender: this.formBuilder.control('Male'), // default value setting
      productQuality: this.formBuilder.control(null), // Radio buttons - formcontrol
      morefeedbacks: this.formBuilder.array([
        this.formBuilder.control(null)
      ]) // Form array for dynamic form elements
    }); // Form Builder uses a group of form controls to create a Form Group

    // Building the FormArray Control
    this.morefeedbacksControls = this.feedbackForm.get('morefeedbacks') as FormArray;
  }

  addMoreFeedback() {
    this.morefeedbacksControls.push(this.formBuilder.control(null));
  }

  deleteMoreFeedback(index) {
    this.morefeedbacksControls.removeAt(index);
  }

  clearForm() {
    /*this.feedbackForm.reset({
      customerName: 'Kiran Kumar Dash' // Default name on clearing out form
    });*/
    this.feedbackForm.reset(); // Resets the formgroup
  }

  submitFeedbackForm() {
    console.log(this.feedbackForm.value);
  }

}
