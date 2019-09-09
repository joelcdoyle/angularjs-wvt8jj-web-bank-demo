export default function phoneInput() {
  'ngInject';
  return {
    templateUrl: './phone-input.html',
    controllerAs: "$ctrl",
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "="
    },
    bindToContrller: true,
    link: function(scope, elem, attrs, ) {
      let ngModel = elem.find('input').controller('ngModel');

      ngModel.$parsers.push((value) => {
        let numbers = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        ngModel.$setViewValue(!numbers[2] ? numbers[1] : '(' + numbers[1] + ') ' + numbers[2] + (numbers[3] ? '-' + numbers[3] : ''));
        ngModel.$render();
      })
    }
  }
}