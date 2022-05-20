$(() => {
  const $submit = $("#eta");
  const $estimate = $("#estimate");

  $submit.on("click", function (e) {
    e.preventDefault();

    // VALUE OF SEND ETA INPUT FIELD (eta in seconds)
    const estimate = {
      eta: $estimate.val(),
    };

    $.ajax({
      url: "https://spuddies-food-ordering.herokuapp.com/api/submit/eta",
      method: "POST",
      data: estimate,
    })
      .then((data) => {
        console.log("DATA:", data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    $estimate.val("ETA message sent succesfully!");
  });
});
