$(function() {

  $('.team1').click(function() {
    showTeam(editorial);
  });
  $('.team2').click(function() {
    showTeam(singleCostumersView);
  });
  $('.team3').click(function() {
    showTeam(wtaTv);
  });
  $('.team4').click(function() {
    showTeam(coverageTool);
  });
  $('.team5').click(function() {
    showTeam(project0);
  });
  $('.team6').click(function() {
    showTeam(rightsPlatform);
  });
  $('.team7').click(function() {
    showTeam(cms);
  });
  $('.team8').click(function() {
    showTeam(vod);
  });
});

function showTeam(teamName) {
  $('.desc-team').hide();
  $('.desc-teams').css('display', 'grid');
  if ($(window).width() < 1150) {
    $(teamName).css('display', 'block');
  }else {
    $(teamName).css('display', 'grid');
  }
}
