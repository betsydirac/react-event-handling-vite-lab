//password field that logs typing.used in app with submit button.
function PasswordInput() {
  function handleChange() {
    console.log("Entering password...");
  }

  return <input type="password" onChange={handleChange} />;
}

export default PasswordInput;