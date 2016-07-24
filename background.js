var addShipitButton = function() {
  if ($("#thumbs-up-form-button").length !== 0) {
    return;
  }

  var $commentActions = $("#partial-new-comment-form-actions");

  if ($commentActions.length === 0) {
    return;
  }

  var $shipitButton = $('<button id="thumbs-up-form-button" class="btn"><span class="octicon octicon-squirrel">Ship it & Comment</span></button>');
  var $commentInput = $commentActions.closest("form").find("textarea");

  $shipitButton.on("click", function() {
    $commentInput.val("Ship it");
    return true;
  });

  $shipitButton.insertAfter($commentActions.find("button:first"));
};
$(document).ready(addShipitButton);
