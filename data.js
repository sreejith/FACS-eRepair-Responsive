var repairAreas = [
    {
        'id': '1',
        'repairArea': 'Bath and Showers',
        'picture': 'img/bathroom.gif',
        'Title': 'Bath and Showers'
    },
    {
        'id': '2',
        'repairArea': 'Cupboards, Drawers and Wardrobes',
        'picture': 'img/CupC5.gif',
        'Title': 'Cupboards, Drawers and Wardrobes'
    },
    {
        'id': '3',
        'repairArea': 'Doors',
        'picture': 'img/DoorC39.gif',
        'Title': 'Doors'
    },
    {
        'id': '4',
        'repairArea': 'Electrics',
        'picture': 'img/socket_australia.gif',
        'Title': 'Electrics'
    },
    {
        'id': '5',
        'repairArea': 'Gas Services',
        'picture': 'img/HeatC76.gif',
        'Title': 'Gas Services'
    },
    {
        'id': '6',
        'repairArea': 'Heating and Cooling',
        'picture': 'img/HeatC4.gif',
        'Title': 'Heating and Cooling'
    },
    {
        'id': '7',
        'repairArea': 'Hot Water',
        'picture': 'img/HeatC71.gif',
        'Title': 'Hot Water'
    },
    {
        'id': '8',
        'repairArea': 'Kitchen Sinks and Bathroom Basins',
        'picture': 'img/SinkC4.gif',
        'Title': 'Kitchen Sinks and Bathroom Basins'
    },
    {
        'id': '9',
        'repairArea': 'Laundry Items and Clothes Lines',
        'picture': 'img/ExterC7.gif',
        'Title': 'Laundry Items and Clothes Lines'
    },
    {
        'id': '10',
        'repairArea': 'Outside of Home',
        'picture': 'img/Outside-(front)-house.gif',
        'Title': 'Outside of Home'
    },
    {
        'id': '11',
        'repairArea': 'Pests',
        'picture': 'img/rat.gif',
        'Title': 'Pests'
    },
    {
        'id': '12',
        'repairArea': 'Stoves and Rangehoods',
        'picture': 'img/ElecC94.gif',
        'Title': 'Stoves and Rangehoods'
    },
    {
        'id': '13',
        'repairArea': 'Toilets',
        'picture': 'img/WCC8.gif',
        'Title': 'Toilets'
    },
    {
        'id': '14',
        'repairArea': 'Walls, Floors, Ceilings and Stairs',
        'picture': 'img/WallC7.gif',
        'Title': 'Walls, Floors, Ceilings and Stairs'
    },
    {
        'id': '15',
        'repairArea': 'Water Meter',
        'picture': 'img/(Wat-C39)-Water-meter-(AUS).gif',
        'Title': 'Water Meter'
    },
    {
        'id': '16',
        'repairArea': 'Windows',
        'picture': 'img/WallC26.gif',
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