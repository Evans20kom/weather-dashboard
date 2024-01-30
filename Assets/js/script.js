// Locations array, intialized with those appearing by default
let locations = ["London", "Komotini"];

// Function to add searched locations to history
function showButtons() {

  // Deleting the buttons prior to adding new locations to avoid having repeated buttons.
  $("#history").empty();

  // Loop to create a button for each element of the locations array.
  for (var buttonCounter = 0; buttonCounter < locations.length; buttonCounter++) {

    // Create dynamic buttons of locations with JQuery
    var dynamicButtons = $("<button>");
    // Adding location data attribute
    dynamicButtons.attr("data-locations", locations[buttonCounter]);
    // Text for the buttons
    dynamicButtons.text(locations[buttonCounter]);
    // Adding the button to the buttons-view div
    $("#history").append(dynamicButtons);
  }
}

// Function to add button when search is clicked
$("#search-button").on("click", function(event) {
  event.preventDefault();

  // adding the location from the search form box to a new array.
  let newLocation = $("#search-input").val().trim();

  // Appending the new location to the locations array
  locations.push(newLocation);

  // Calling function to repeat function including the new searched locations
  showButtons ();

});

// Calling the renderButtons function to display the initial buttons
showButtons();