angular.module('hashApp', []).controller('HashController', function($scope) {
  $scope.inputText = "";
  $scope.hashedText = "";
  $scope.error = "";

  $scope.generateHash = function() {
    if ($scope.inputText.trim() !== "") {
      $scope.hashedText = CryptoJS.SHA256($scope.inputText).toString();
    } else {
      $scope.error = "Please enter a valid string.";
    }
  };

  $scope.reset = function() {
    $scope.inputText = "";
    $scope.hashedText = "";
    $scope.error = "";
  };
});
