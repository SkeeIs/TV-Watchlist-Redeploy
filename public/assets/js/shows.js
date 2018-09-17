// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-started").on("click", function(event) {
      var id = $(this).data("id");
      var watchedStatus = $(this).data("watchedstatus");

      var showStatus = {
        watched_status: watchedStatus,
      };
      console.log("ID OF CLICKED: " + id);
      console.log("VALUE OF havestarted: " + watchedStatus);
      // Send the PUT request.
      $.ajax("/api/shows/" + id, {
        type: "PUT",
        data: showStatus
      }).then(
        function() {
          console.log("changed show to", watchedStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".change-liked").on("click", function(event) {
    var id = $(this).data("id");
    var liked = $(this).data("liked");

    var likedShow = { 
        liked: liked
    };
    console.log("ID OF CLICKED: " + id);
    // Send the PUT request.
    $.ajax("/api/shows/liked/" + id, {
        type: "PUT",
        data: likedShow
    }).then(
        function() {
        console.log("changed show to", liked);
        // Reload the page to get the updated list
        location.reload();
        }
    );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newShow = {
        name: $("#show-name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/shows", {
        type: "POST",
        data: newShow
      }).then(
        function() {
          console.log("added new show");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-show").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/shows/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted show", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  