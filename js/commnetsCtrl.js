app.controller('commentsCtrl', function($scope) {
    
    $scope.commentsList = [];


	$scope.emailChange = function() {
    	$scope.emailInvalid = false;    
    };

    $scope.commentChange = function() {
    	$scope.commentInvalid = false;    
    };

    $scope.submitFunc = function() {

    	$scope.emailInvalid = false;
    	$scope.commentInvalid = false;

    	if(!$scope.isValidEmail($scope.yourEmail)) {
    		$scope.emailInvalid = true;
    		return;
    	}

    	if(!$scope.isValidComment($scope.yourMessage)) {
    		$scope.commentInvalid = true;
    		return;
    	}

    	$scope.commentsList.push({
    		email: $scope.yourEmail,
    		message: $scope.yourMessage}
    		);

    	$scope.yourEmail = "";
    	$scope.yourMessage = "";
    };

    $scope.commentsFilter = function(comment) {
    	if($scope.filterText === undefined) {
    		return true;
    	}
    	return (comment.email.toLowerCase().indexOf($scope.filterText.toLowerCase()) !== -1 
    		|| (comment.message && comment.message.toLowerCase().indexOf($scope.filterText.toLowerCase()) !== -1));
    };


    $scope.isValidEmail = function(email) {
    	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	console.log("result: " + re.test(email))
    	return re.test(email);
	};

	$scope.isValidComment = function(comment) {
		return comment != undefined && comment != "" && comment != null;
	};

});