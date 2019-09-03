import EnrollmentSteps from "./enroll-steps.directive";
import "./membership"

let enrollStepsModule = angular.module("enroll.steps", ["enroll.steps.membership"]);

import StepsConfig from "./enroll-steps.config";
enrollStepsModule.config(StepsConfig);

// Include our UI-Router config settings
import IdentityConfig from './identity/identity-step.config';
enrollStepsModule.config(IdentityConfig);

enrollStepsModule.directive('enrollmentSteps', EnrollmentSteps);