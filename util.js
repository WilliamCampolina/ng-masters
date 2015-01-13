$(document).ready(function(){

	/*function vaibuscarasissues(){
		console.log("teste");
    function GithubRepo(username, reponame){
        //seu codigo aqui...
    }

    //mais um pouco de codigo aqui....

    var le_repo = GithubRepo(username, reponame);
    le_repo.busca_issues();
    le_repo.popula_tabela("#issuestable");
}*/






	$("#vaibuscarasissues").click(function() {
		console.log("teste");
		var username = $("#user").val();
		var reponame = $("#reponame").val();

		function GithubRepo(username, reponame){
        //https://api.github.com/repos/freedomsponsors/www.freedomsponsors.org/issues
        var url = "https://api.github.com/repos/"+username+"/"+reponame+"/issues";
	        console.log(url);
	       $.get(url).success(function(result){
				
				console.log(result[0]["number"]);
				console.log("terminou");

				for (var i = 0; i < result.length; i++) {
					/*console.log(result[i]["number"]);
					console.log(result[i]["title"]);*/

					$("#issuestable").append(
                            "<tr>" +
                            "    <th>" + result[i]["number"] + "</th>" +
                            "    <th>" + result[i]["title"] + "</th>" +
                            "</tr>"
                            );
				};
			});
		}

		var le_repo = GithubRepo(username, reponame);
		//le_repo.busca_issues();
		//le_repo.popula_tabela("#issuestable");


	});





	
});