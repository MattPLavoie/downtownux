app.controller('confController', ['$scope', '$http', '$routeParams', confController]);

var api = {
    schedule2016: "13vt27jO41_sjDlpjatEvWkEtx-Ri4GvaqUGfIEJ7Gck",
    schedule2017: "1RaaU5_pf6fv9ORfM5_utZVM2wUAmQzJGZE-I7uNcQxA",
    speakers2017: "19LcgW5N-RNC3uCY3N-yx3fPb9ljsOiobFV_04GrTifY"
};

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

    if (!$scope.speakers2017) {
      Tabletop.init( {
            key: api.speakers2017,
            callback: function(data, tabletop) {
              $scope.speakers2017 = data;
              console.log(data);
              $scope.$digest();
            },
            simpleSheet: true,
            orderby: 'time'
          } );
      }

      if (!$scope.schedule2017) {
        Tabletop.init( {
              key: api.schedule2017,
              callback: function(data, tabletop) {
                $scope.schedule2017 = data;
                console.log(data);
                $scope.$digest();
              },
              simpleSheet: true,
              orderby: 'time'
            } );
        }



  var body = $('body');
  var nav = $('nav');
  var header = $('header');
  var headerHeight = 0, navHeight = 0;
  var addedHeight = 0;

  var resizeHandler = function () {
    headerHeight = header.outerHeight();
    navHeight = nav.outerHeight();
    header.css('border-bottom-width', navHeight);
    $('.nav-spacer').css('height', navHeight);
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
