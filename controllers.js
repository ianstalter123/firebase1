app.controller('ChatController', function($scope, $firebaseArray){
console.log("hello firebase chat");

var msgRef = new Firebase("https://crackling-fire-8350.firebaseio.com/chat")

$scope.messages = $firebaseArray(msgRef)

// sets up the template for new messages
$scope.newMsg = {text: "", author: "", url: ""}
$scope.edit = true

$scope.addMsg = function() {
	console.log($scope.newMsg.text);
	console.log($scope.newMsg.author);
	//pushes the new message content to the server
	$scope.messages.$add($scope.newMsg).then(function(data){
		$scope.newMsg.text = ""	
		$scope.newMsg.author = ""	
		$scope.newMsg.url = ""	
	})
}

$scope.removeMsg = function(msg) {
	//removes the message from the scope
	$scope.messages.$remove(msg).then(function(data){
		console.log('removed'); 
	})
}

$scope.clickd = function(msg) {
		console.log("clicked it");
		console.log(msg);
		$scope.edit = "false"
	}


})