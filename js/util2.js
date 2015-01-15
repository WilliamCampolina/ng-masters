function vaibuscarasissues(){
    function GithubRepo(username, reponame){
		this.tabela = [];
		this.username = username;
		this.reponame = reponame;
    }

    GithubRepo.prototype.busca_issues = function(){
			var url = "https://api.github.com/repos/"+username+"/"+reponame+"/issues";
			var _this = this;
			return $.get(url).success(function(result){
					_this.tabela = result;
			});
    }
    GithubRepo.prototype.popula_tabela = function(idTabela){
		var _this = this;
		
			for (var i = 0; i < _this.tabela.length; i++) {
			$(idTabela).append(
								"<tr>" +
								"    <th>" + _this.tabela[i]["number"] + "</th>" +
								"    <th>" + _this.tabela[i]["title"] + "</th>" +
								"</tr>"
								);
		};
    }



    var username = $("#user").val();
	var reponame = $("#reponame").val();

    var le_repo = new GithubRepo(username, reponame);
    le_repo.busca_issues().success(function(){
        le_repo.popula_tabela("#issuestable");
    });
}

