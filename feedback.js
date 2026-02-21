document.addEventListener("DOMContentLoaded", function () {

    // Character Counter for Feedback
    const textarea = document.getElementById('feedback');
    const charCount = document.getElementById('charCount');

    if (textarea && charCount) {
        function updateCounter() {
            const remaining = 300 - textarea.value.length;
            charCount.textContent = remaining;
        }
        textarea.addEventListener("input", updateCounter);
        updateCounter(); // Ensure correct count on page load (if pre-filled)
    }

    // Email Validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (emailInput && emailError) {
        function validateEmail() {
            emailInput.setCustomValidity(""); // Reset before checking
            if (emailInput.validity.typeMismatch || !emailInput.value.includes("@")) {
                emailInput.setCustomValidity("Please enter a valid email address (e.g., user@example.com)");
            }
            emailError.textContent = emailInput.validationMessage;
        }

        emailInput.addEventListener("blur", validateEmail);
        emailInput.addEventListener("input", validateEmail); // Live validation
    }

    // Phone Number Validation
    const phoneInput = document.getElementById("phonenumber");
    const phoneError = document.getElementById("phoneError");

    if (phoneInput && phoneError) {
        function validatePhone() {
            const phonePattern = /^\d{10}$/;
            phoneInput.setCustomValidity(""); // Reset before checking
            if (!phonePattern.test(phoneInput.value)) {
                phoneInput.setCustomValidity("Please enter a 10-digit phone number (e.g., 1234567890)");
            }
            phoneError.textContent = phoneInput.validationMessage;
        }

        phoneInput.addEventListener("blur", validatePhone);
        phoneInput.addEventListener("input", function () {
            phoneInput.value = phoneInput.value.replace(/\D/g, ""); // Allow only digits
            validatePhone();
        });
    }

    // Form Submission Validation
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            if (emailInput && !emailInput.checkValidity()) {
                emailError.textContent = emailInput.validationMessage;
                isValid = false;
            }

            if (phoneInput && !phoneInput.checkValidity()) {
                phoneError.textContent = phoneInput.validationMessage;
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if invalid
            } else {
                alert("Feedback Submitted Successfully!");
            }
        });
    }

});
