$(function() {
  $(".devour").on("click", function(event) {
    const id = $(this).data("id");
    const newDevoured = $(this).data("devoured");

    const newDevourState = {
      devoured: newDevoured
    };
  
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      location.reload();
    });
  
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurg = {
      name: $("#burg")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(function() {
      location.reload();
    });
  });
});
