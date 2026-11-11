//submit button that logs mouse entering and exiting. used in app with password input.
function SubmitButton() {
  function handleEnter() {
    console.log("Mouse Entering");
  }

  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;