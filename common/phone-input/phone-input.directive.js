export default function phoneInput() {
  'ngInject';
  return {
    templateUrl: './phone-input.html',
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "="
    },
    bindToContrller: true,
    link: function(scope, elem, attrs, ) {
      let ngModel = elem.controller('ngModel');

      ngModel.$parsers.push((value) => {
        let numbers = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        ngModel.$setViewValue(!x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''));
        ngModel.$render();
      })
    }
  }
}