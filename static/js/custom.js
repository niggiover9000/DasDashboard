// Custom JS

M.AutoInit();

// Floating Button
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {hoverEnabled: true});
  });

// Sidenav
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {'draggable':true});
  });

// Tooltip
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {'position': 'left'});
  });

// Modal
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {'dismissible':true});
  });

  // Feature Discovery
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
  });




  //JQuery
    //Hide ProgressBar
    $ (function (){
        $("#choose_btn").on("click", function (){
            $("#progress").hide()
        });
    });

    //Show ProgressBar when File is selected
    $ (function (){
        $("#file_field").on("change", function() {
            $("#progress").show(1000)
        });
    });