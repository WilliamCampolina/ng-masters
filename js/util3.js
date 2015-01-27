var myapp = angular.module("myapp", []);
myapp.controller('MyCtrl', function ($scope,AngulifeJS){

var ct = $scope.ct = AngulifeJS;

});


myapp.factory('AngulifeJS',function(){
	var ct = {
		linhas:0,
		colunas:0,
		matrix:[]

	};

	ct.montaMatriz = function(){
		ct.matrix = [];
		for(var i = 0; i < ct.linhas; i++){
			var linha = [];
			for(var j = 0; j < ct.colunas; j++){
				linha.push(
					{
						value:false,
							linha:i,
							coluna:j
						}
					);
			}
			ct.matrix.push(linha);
		}
	};

	ct.toggle_alive = function(cell){
			ct.matrix[cell.linha][cell.coluna].value = !cell.value;

			/*if(cell.value){
				ct.has_live_cell ++;
			}else{
				ct.has_live_cell --;
			}*/
		};

	return ct;

})

