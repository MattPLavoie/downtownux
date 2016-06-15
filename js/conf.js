app.controller('confController', ['$scope', '$http', '$routeParams', confController]);

function confController($scope, $http, $routeParams) {
  if (!$scope.schedule) {
    Tabletop.init( {
          key: '13vt27jO41_sjDlpjatEvWkEtx-Ri4GvaqUGfIEJ7Gck',
          callback: function(data, tabletop) {
            $scope.schedule = data;
            $scope.$digest();
            if($routeParams.section) {
              $scope.scrollTo($routeParams.section);
            }
          },
          simpleSheet: true,
          orderby: 'time'
        } );
    }


  var body = $('body');
  var nav = $('nav');
  var header = $('header');
  var headerHeight = 0, navHeight = 0;

  var resizeHandler = function () {
    headerHeight = header.outerHeight();
    navHeight = nav.outerHeight();
    header.css('border-bottom-width', navHeight);
  };

  resizeHandler();

  $(window).resize(_.throttle(resizeHandler, 60));

  $(document).scroll(_.throttle(function () {
    if (body.scrollTop() > headerHeight) {
      body.addClass('sticky');
    } else {
      body.removeClass('sticky');
    }
  }, 60))

  $scope.scrollTo = function(el) {
    $('body').animate({ scrollTop: $('.' + el).offset().top - navHeight }, 600);
  };
}
