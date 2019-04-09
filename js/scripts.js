$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var name = $("select#name").val();
    var bad = parseInt($("select#bad").val());
    var weapons = $("select#weapons").val();
    var game = $("select#game").val();
    var deaths = parseInt($("select#deaths").val());
    var female = parseInt($("select#female").val());

    if ((name === 'male') && (weapons === 'none') && (bad === 4) && (game === 'running-man') && (deaths === 2) && (female === 1)) {
      $("#ben").show();
      $("#amber").hide();
      $("#subzero").hide();
      $("#fireball").hide();
      $("#buzzsaw").hide();
      $("#dynamo").hide();
    };
    if ((name === 'female') && (weapons === 'none') && (bad === 4) && (game === 'running-man') && (deaths === 2) && (female === 1)) {
      $("#ben").hide();
      $("#amber").show();
      $("#subzero").hide();
      $("#fireball").hide();
      $("#buzzsaw").hide();
      $("#dynamo").hide();
    };
    if ((name === 'male') && (weapons === 'hockey-stick') && (bad === 0) && (game = 'running-man') && (deaths === 0) && (female === 1)) {
      $("#ben").hide();
      $("#amber").hide();
      $("#subzero").show();
      $("#fireball").hide();
      $("#buzzsaw").hide();
      $("#dynamo").hide();
    };
    if ((name === 'male') && (weapons === 'flamethrower') && (bad === 0) && (game === 'running-man') && (deaths === 0) && (female === 1)) {
      $("#ben").hide();
      $("#amber").hide();
      $("#subzero").hide();
      $("#fireball").show();
      $("#buzzsaw").hide();
      $("#dynamo").hide();
    };
    if ((name === 'male') && (weapons === 'chainsaw') && (bad === 0) && (game === 'running-man') && (deaths === 0) && (female === 1)) {
      $("#ben").hide();
      $("#amber").hide();
      $("#subzero").hide();
      $("#fireball").hide();
      $("#buzzsaw").show();
      $("#dynamo").hide();
    };
    if ((name === 'male') && (weapons === 'electricity') && (bad === 0) && (game === 'running-man') && (deaths === 0) && (female === 1)) {
      $("#ben").hide();
      $("#amber").hide();
      $("#subzero").hide();
      $("#fireball").hide();
      $("#buzzsaw").hide();
      $("#dynamo").show();
    };
  });
});
