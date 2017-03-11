var app = angular.module('flipclix', [
	'ngResource',
	'ui.router'
	]);

// app.config(function ($httpProvider, $resourceProvider) {
// 	$httpProvider.defaults.headers.common['Authorization'] = 'Client-ID b8edfffa5d653f8';
// 	$resourceProvider.defaults.stripTrailingSlashes = false;
// });

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('topics',{
		url : "/",
		templateUrl : 'templates/topics.html',
		controller : 'getTopicsController'
	});
})

app.factory('getTopicsFactory',function($resource){
	return $resource("https://api.imgur.com/3/topics/defaults")
})

app.controller('getTopicsController',function($scope,getTopicsService){
	$scope.topics = getTopicsService.loadTopics();
		console.log("Topics: ",$scope.topics);

})

app.service('getTopicsService',function(getTopicsFactory){
	var self = {
		loadTopics:function(){
			var topics;
			getTopicsFactory.get(function(data){
				 topics = data.data;
			})
			return topics;
		}
	}
	self.loadTopics();
	return self
});