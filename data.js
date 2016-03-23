var repairAreas = [
    {
        'id': '1',
        'repairArea': 'Bath and Showers',
        'picture': 'img/australia.jpg',
        'Title': 'Bath and Showers'
    },
    {
        'id': '2',
        'repairArea': 'Cupboards, Drawers and Wardrobes',
        'picture': 'img/australia.jpg',
        'Title': 'Cupboards, Drawers and Wardrobes'
    },
    {
        'id': '3',
        'repairArea': 'Doors',
        'picture': 'img/australia.jpg',
        'Title': 'Doors'
    },
    {
        'id': '4',
        'repairArea': 'Electrics',
        'picture': 'img/australia.jpg',
        'Title': 'Electrics'
    },
    {
        'id': '5',
        'repairArea': 'Gas Services',
        'picture': 'img/australia.jpg',
        'Title': 'Gas Services'
    },
    {
        'id': '6',
        'repairArea': 'Heating and Cooling',
        'picture': 'img/australia.jpg',
        'Title': 'Heating and Cooling'
    },
    {
        'id': '7',
        'repairArea': 'Hot Water',
        'picture': 'img/australia.jpg',
        'Title': 'Hot Water'
    },
    {
        'id': '8',
        'repairArea': 'Kitchen Sinks and Bathroom Basins',
        'picture': 'img/australia.jpg',
        'Title': 'Kitchen Sinks and Bathroom Basins'
    },
    {
        'id': '9',
        'repairArea': 'Laundry Items and Clothes Lines',
        'picture': 'img/australia.jpg',
        'Title': 'Laundry Items and Clothes Lines'
    },
    {
        'id': '10',
        'repairArea': 'Outside of Home',
        'picture': 'img/australia.jpg',
        'Title': 'Outside of Home'
    },
    {
        'id': '11',
        'repairArea': 'Pests',
        'picture': 'img/australia.jpg',
        'Title': 'Pests'
    },
    {
        'id': '12',
        'repairArea': 'Stoves and Rangehoods',
        'picture': 'img/australia.jpg',
        'Title': 'Stoves and Rangehoods'
    },
    {
        'id': '13',
        'repairArea': 'Toilets',
        'picture': 'img/australia.jpg',
        'Title': 'Toilets'
    },
    {
        'id': '14',
        'repairArea': 'Walls, Floors, Ceilings and Stairs',
        'picture': 'img/australia.jpg',
        'Title': 'Walls, Floors, Ceilings and Stairs'
    },
    {
        'id': '15',
        'repairArea': 'Water Meter',
        'picture': 'img/australia.jpg',
        'Title': 'Water Meter'
    },
    {
        'id': '16',
        'repairArea': 'Windows',
        'picture': 'img/australia.jpg',
        'Title': 'Windows'
    },
];

var peopleSearchApp = angular.module('peopleSearchApp', []);
 
peopleSearchApp.controller('PeopleSearchCtrl', function($scope){
    $scope.repairAreas = repairAreas;
    $scope.orderList = "repairArea";
    
})

/*.directive('userTiles', function($compile) {
    return {
        restrict: 'E';
        link: function(scope,element,attrs){
            var template = '';
        }
    }
});*/
