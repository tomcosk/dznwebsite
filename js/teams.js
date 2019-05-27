$(function(){
    hideAllTeams();

    $(".team1").click(function(){
        hideAllTeams();
        $("#editorial").show();  
    });
    $(".team2").click(function(){
        hideAllTeams();
        $("#single-costumers-view").show();
    });
    $(".team3").click(function(){
        hideAllTeams();
        $("#wta-tv").show();
    });
    $(".team4").click(function(){
        hideAllTeams();
        $("#coverage-tool").show();
    });
    $(".team5").click(function(){
        hideAllTeams();
        $("#projekt-0").show();
    });
    $(".team6").click(function(){
        hideAllTeams();
        $("#rights-platform").show();
    });
    $(".team7").click(function(){
        hideAllTeams();
        $("#cms").show();
    });
    $(".team8").click(function(){
        hideAllTeams();
        $("#vod").show();
    });
});

function hideAllTeams() {
    $(".desc-team").hide();
}

