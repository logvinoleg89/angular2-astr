import {Component}         from 'angular2/core';
import {StepsService} from "../../services/steps.service";

@Component({
  selector: 'sd-step-one',
  templateUrl: 'app/+signUp/components/stepOne/stepOne.component.html',
  styleUrls: ['app/+signUp/components/stepOne/stepOne.component.css'],
  providers: [],
  directives: []
})
export class StepOneComponent {

  public step:number;

  constructor(
    private _stepsService:StepsService
  ) {
  }

  ngOnInit() {
    this.step = this._stepsService.currentStep;
  }

  onSubmit(){
    this.step = 2;
    this._stepsService.currentStep = 2;
  }
}