
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  /*
  message = "menssagem de erro ao retornar query"
  */
  $scope.values = [];
  $scope.attributs = [];
  $scope.script


  //investigar dois valores iguais no mesmo array ocorre um problema
  function dataEmployes(){
    $scope.values = [
      ["1","Igor","1000","2"],
      ["2","Pedro","1500","1"],
      ["3","Carlos","1500","2"],
      ["4","Lucas", "1000", "1"],
      ["5","Jorge", "1300", "2"],
      ["6", "Fabio", "1500", "1"]
    ];
    $scope.attributs = ["id","name", "salary" ,"department_id"];
  }

  function dataDepartments(){
    $scope.values = [
      ["1","sales", "2"],
      ["2","technology","3"]
    ];
    $scope.attributs = ["id","name", "boss_id"];
  }

  function dataClients(){
     $scope.values = [
      ["1","Henrique", "2"],
      ["2","Lucas","3"],
      ["3", "Paulo", "4"]
    ];
    $scope.attributs = ["id","name", "salesman_id"];
  }


  $(function(){
     $("#modal-mensagem").modal();  
  });


  $scope.tes =function(){
    console.log("TESTANDO");
    if($scope.script.toLowerCase() == "select * from employees"){
      dataEmployes();
    }else if($scope.script.toLowerCase() == "select * from departments"){
      dataDepartments();
    }else if($scope.script.toLowerCase() == "select * from clients"){
      dataClients();
    }
    
  }  

  $("#btnConnection").click(function(){

    var connectionName  = $("#connection-name").val();

    console.log(connectionName);
    treeArray = [{
      text: connectionName,
      nodes:[
        {
        text:"Management_Database",
          nodes:[
            {
              text:"Employees",
              nodes:[
              ]
            },
            {
              text:"Departments",
              nodes:[
              ]
            },
            {
              text:"Clients",
              nodes:[
              ]
            }
          ]
        }
      ]
      }];

      createTree(treeArray);
  });
});