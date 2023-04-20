var app = angular.module("dellPlatform", ['ngRoute']);

app.controller('MainCtrl', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      console.log($location.hash());
      $anchorScroll();
    };
  });
  
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/sites/content.html"
    })
    .when("/hyper", {
        templateUrl : "src/sites/hyper.html"
    })
    .when("/storage", {
        templateUrl : "src/sites/storage.html"
    })
    .when("/servers", {
        templateUrl : "src/sites/servers.html"
    })
    .when("/optplx", {
        templateUrl : "src/sites/optplx.html"
    })
    .when("/lttd", {
        templateUrl : "src/sites/lttd.html"
    })
    .when("/prscn", {
        templateUrl : "src/sites/prscn.html"
    })
});

window.addEventListener('scroll', function() {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }

    }

    var topbutton = document.getElementById("topBtn");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
});

function scrollFunction() {


}

// Cuando se de click en el boton nos lleva al tope
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}