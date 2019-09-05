export default function textInput() {
  'ngInject';
  return {
    controller: TextInput,
    templateUrl: './text-input.html',
    controllerAs: '$ctrl',
    require: ['^form'],
    scope: {
      required: "=",
      name: "@",
      model: "=",
      label: "="
    },
    bindToController: true
  }
}

class TextInput {
  constructor() {
    'ngInject';
    var $ctrl = this;
  }
}