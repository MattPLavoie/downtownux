app.controller('confController', ['$scope', '$http', confController]);

function confController($scope, $http) {
  Tabletop.init( {
        key: '13vt27jO41_sjDlpjatEvWkEtx-Ri4GvaqUGfIEJ7Gck',
        callback: function(data, tabletop) {
          $scope.schedule = data;
          $scope.$digest();
        },
        simpleSheet: true,
        orderby: 'time'
      } );

  $scope.scrollTo = function(el) {
    $('body').animate({ scrollTop: $('.' + el).offset().top }, 600);
  };
}
