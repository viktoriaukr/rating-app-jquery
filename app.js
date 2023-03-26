$("button").on("click", function () {
  let title = $("#title").val();
  let rating = $("#rating").val();
  let movie = $("<div></div>").text(`${title} ${rating}`);
  let deleteBtn = $("<button class='btn'>X</button>");
  movie.append(deleteBtn);
  $("#title-list").append(movie);
  $("#title").val("");
  $("#rating").val("");

  $(document).on("click", ".btn", function () {
    $(this).parent().remove();
  });
});
