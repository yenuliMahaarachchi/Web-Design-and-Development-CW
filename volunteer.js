document.addEventListener("DOMContentLoaded", function () {
    // Handle Feedback Submission
    function handleSubmit(event) {
        event.preventDefault(); // 🛠️ Prevent page reload
        alert("Feedback Submitted Successfully!");
    }

    // Add event listener to the submit button
    const submitButton = document.querySelector(".submit");
    if (submitButton) {
        submitButton.addEventListener("click", handleSubmit);
    }

    
});
