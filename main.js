// This is the sample data for this lesson
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
		views : {
			'main' : {
				templateUrl : 'templates/topics.html',
				controller : 'getTopicsController'
			}
		}
	});
})

app.factory('getTopicsFactory',function($resource){
	return $resource("https://api.imgur.com/3/topics/defaults")
})

app.controller('getTopicsController',function($scope,getTopicsService){
	$scope.data = getTopicsService;
	console.log($scope.data);
})

app.service('getTopicsService',function(getTopicsFactory){
	console.log(getTopicsFactory);
	var self = {
		loadTopics:function(){
			getTopicsFactory.get(function(data){
				console.log(data);
			})
		}
	}
	self.loadTopics();
	return self
});







