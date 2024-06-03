/** GENERAL FEEDBACK:
 * Great job getting all test cases to pass!
 */

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target
  const formValues = Object.fromEntries(new FormData(form))
  formValues.didLikeAssignment = Boolean(formValues.didLikeAssignment)
  /** FEEDBACK: Make sure you create the habit of using {} when you use if/else statements! */
  if (Boolean(formValues.didLikeAssignment) === true) formValues['didLikeAssignment'] = "Yes"
  else formValues['didLikeAssignment'] = "No"
  console.log(formValues);

  const username = document.getElementById("results-username");
  const coding = document.getElementById("results-coding-level");
  const locate = document.getElementById("results-location");
  const did = document.getElementById("results-did-like-assignment");

  username.textContent = formValues.username
  coding.textContent = formValues.codingLevel
  locate.textContent = formValues.location
  did.textContent = formValues.didLikeAssignment

  form.reset();
};

document.querySelector("form").addEventListener("submit", handleSubmit)
/** FEEDBACK: Submit events can only be placed on forms! You do not need this line of code since you are already taking care of the dom manipulation with the other submit event! */
document.querySelector("#results").addEventListener("submit", handleSubmit)
