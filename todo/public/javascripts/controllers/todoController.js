angular.module('todoModule').controller('todoController',function($scope,$http,todoService){
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    todoService.get().success(function(data){
        $scope.todos = data;
        $scope.loading = false;
    });

    $scope.createTodo = function (){
        if($scope.formData.text!=undefined){
            $scope.loading = true;
            todoService.create($scope.formData).success(function(data){
                $scope.formData = {};
                $scope.todos = data;
                $scope.loading = false;
            });
        }
    }

    $scope.delete  = function(){
        var ids = [];
        var cks = document.getElementsByTagName('input');
        for(var i=0;i<cks.length;i++){
            if(cks[i].checked){
                ids.push(cks[i].value);
            }
        }
        $scope.loading = true;
        todoService.delete(ids).success(function(data){
            $scope.todos = data;
            $scope.loading = false;
        });
    }
});