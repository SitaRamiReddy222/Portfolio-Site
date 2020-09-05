// Progress bar
let prog = $(function() {
  var current_progress = 0;
  var interval = setInterval(function() {
    current_progress += 2;
    $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% ");
    if (current_progress >= 70) clearInterval(interval);
  }, 100);
});

prog();
