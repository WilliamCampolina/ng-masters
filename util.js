function vaibuscarasissues(){
    function GithubRepo(username, reponame){
    	var tabela;
        var busca = {
					'busca_issues': function(){
						var url = "https://api.github.com/repos/"+username+"/"+reponame+"/issues";
						return $.get(url).success(function(result){
								tabela = result;
						});
				},
					'popula_tabela': function(issuestable){
						console.log("2222");
							for (var i = 0; i < tabela.length; i++) {
							$("#issuestable").append(
												"<tr>" +
												"    <th>" + tabela[i]["number"] + "</th>" +
												"    <th>" + tabela[i]["title"] + "</th>" +
												"</tr>"
												);
						};
				},

        }
        return busca;

    }


    var username = $("#user").val();
	var reponame = $("#reponame").val();
    var le_repo = GithubRepo(username, reponame);
    le_repo.busca_issues().success(function(){
        le_repo.popula_tabela("#issuestable");
    });
}