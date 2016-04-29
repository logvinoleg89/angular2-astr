import {Component}         from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';

import {NgForm}    from 'angular2/common';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {UserInterface, UserService} from '../../user/index';
import {Sign, SignService} from '../../sign/index';
import {Wish, WishService} from '../../wish/index';
import {Employment, EmploymentService} from '../../employment/index';
import {Relationship, RelationshipService} from '../../relationship/index';

import {StepOneComponent} from './stepOne/stepOne.component';
import {StepTwoComponent} from './stepTwo/stepTwo.component';
import {StepsService} from '../services/steps.service';


@Component({
  selector: 'sd-sign-up',
  templateUrl: 'app/+signUp/components/signUp.component.html',
  styleUrls: ['app/+signUp/components/signUp.component.css'],
  providers: [
    StepsService,
    UserService,
    SignService,
    WishService,
    EmploymentService,
    RelationshipService,
  ],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, StepOneComponent, StepTwoComponent]
})
export class SignUpComponent {

  public step = 1;

  public formData = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private _stepsService:StepsService,
    private _userService:UserService,
    private _signService:SignService,
    private _wishService:WishService,
    private _employmentService:EmploymentService,
    private _relationshipService:RelationshipService
  ) {
  }

  ngOnInit() {
    this.step = this._stepsService.currentStep;

    this.getSign();
    this.getWish();
    this.getEmployment();
    this.getRelationship();
    //this.registerUser();
  }

  getSign() {
    this._signService.get()
    .subscribe(res => {
      console.log(res);
    });
  }

  getWish() {
    this._wishService.get()
    .subscribe(res => {
      console.log(res);
    });
  }

  getEmployment() {
    this._employmentService.get()
    .subscribe(res => {
      console.log(res);
    });
  }

  getRelationship() {
    this._relationshipService.get()
    .subscribe(res => {
      console.log(res);
    });
  }

  registerUser() {
    this._userService.save({firstName: 'asd'})
    .subscribe(res => {
      console.log(res, 'User Created');
    });
  }
}