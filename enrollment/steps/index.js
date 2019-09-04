import "./membership";
import "./identity";

let enrollStepsModule = angular.module("enroll.steps", ["enroll.steps.membership", "enroll.steps.identity"]);

import StepsConfig from "./enroll-steps.config";
enrollStepsModule.config(StepsConfig);

// Include our UI-Router config settings
import IdentityConfig from './identity/identity-step.config';
enrollStepsModule.config(IdentityConfig);

