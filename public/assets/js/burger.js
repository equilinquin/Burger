$(function() {
  $(".devour").on("click", function(event) {
    const id = $(this).data("id");
    const newDevoured = $(this).data("devoured");
    console.log(newDevoured);

    const newDevourState = {
      devoured: newDevoured
    };
    if($(this)[0].innerText == "Devour It!!") {
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      location.reload();
    });
  };
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
