(function () {
    'use strict';
    angular.module('app')
        .controller('CreateTaskCtrl', function ($scope) {
            $scope.addTask = {};
            $scope.name = '';
            $scope.Description = '';
            $scope.addTask.Assigner = ["Nguyễn Thị Kim Vàng",
                "Trần Thị Phương Thảo",
                "Trương Tích Thiện",
                "Trần Hiếu Bùi",
                "Nguyễn Minh Trung"
            ];

            $scope.addTask.levels = $scope.addTask.Assigner[0].value;
            $scope.Startdate = '';
            $scope.Duedate = '';
            $scope.projectname = '';
            $scope.Color = '';
            $scope.Status = '';
            $scope.Tags = '';
            $scope.tasks = [
                {

                    'name': 'Nguyen Thi Kim Vang',
                    'Description': 'abcd',
                    'Assigner': 'Tran Thi Phuong Thao',
                    'Startdate': '1/1/2018',
                    'Duedate': '4/1/2018',
                    'projectname': 'Task Traker',
                    'Color': 'Vang',
                    'Status': 'Doing',
                    'Tags': 'Task Traker'
                },
                {

                    'name': 'Tran Thi Phuong Thao',
                    'Description': 'abcd',
                    'Assigner': 'Nguyen Thi Kim Vang',
                    'Startdate': '1/1/2018',
                    'Duedate': '4/1/2018',
                    'projectname': 'Task Traker',
                    'Color': 'do',
                    'Status': 'Done',
                    'Tags': 'Task Traker'
                }
            ];
            $scope.saveTask = function () {
                // var newt = {};
                // newt.name = $scope.addTask.name;
                // newt.Description = $scope.addTask.Description;
                // newt.Assigner = $scope.addTask.Assigner;
                // newt.Startdate = $scope.addTask.Startdate;
                // newt.Duedate = $scope.addTask.Duedate;
                // newt.projectname = $scope.addTask.projectname;
                // newt.Color = $scope.addTask.Color;
                // newt.Status = $scope.addTask.Status;
                // newt.Tags = $scope.addTask.Tags;

                var newt = angular.copy($scope.addTask);

                $scope.tasks.push($scope.addTask);
                $scope.addTask = {};

            };
        });

}());