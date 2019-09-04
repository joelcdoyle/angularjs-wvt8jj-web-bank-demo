import "./identity-step.scss";

let identityStepModule = angular.module("enroll.steps.identity", []);

import IdentityStepCtrl from "./identity-step.controller";
identityStepModule.controller("IdentityStepCtrl", IdentityStepCtrl);