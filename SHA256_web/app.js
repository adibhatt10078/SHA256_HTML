angular.module('hashApp', []).controller('HashController', function($scope) {
  $scope.inputText = "";
  $scope.hashedText = "";

  $scope.generateHash = function() {
    if ($scope.inputText.trim() !== "") {
      $scope.hashedText = CryptoJS.SHA256($scope.inputText).toString();
    } else {
      $scope.hashedText = "Please enter a valid string.";
    }
  };
});
