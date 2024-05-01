app.controller('MenuController', function($scope, $location) {
    // Function to navigate to a specific page
    $scope.navigateTo = function(page) {
      $location.path('/' + page); // Redirect to the specified page
    };
  });
  