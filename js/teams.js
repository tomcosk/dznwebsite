$(function(){
    $(".desc-team").hide();
    var teams = {
        "team1": "editorial",
        "team2": "singleCostumersView",
        "team3": "wtaTv",
        "team4": "coverageTool",
        "team5": "projekt0",
        "team6": "rightsPlatform",
        "team7": "cms",
        "team8": "vod",
    };

    for(key in teams) {
        $("."+key).click(function(){
            showTeam(teams[key]);  
        });
    }
});

function showTeam(teamName) {
    $(".desc-team").hide();
    $("#"+teamName).show();     
}


