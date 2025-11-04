'use strict';


(function () {
    const modal = document.querySelector("#modal");
    const subscribeButtons = document.querySelectorAll(".card__subscribe-btn");
    const closeButton = document.querySelector("#modal-close");
    const formEl = document.querySelector("#register-form");
    const emailEl = document.querySelector("#email");
    const confirmEl = document.querySelector("#confirm-email");
    const hamburgerEl = document.querySelector('.hamburger-btn')

    subscribeButtons.forEach(button => {
        button.addEventListener("click", () => modal.showModal());
    });

    closeButton.addEventListener("click", () => modal.close());

    hamburgerEl.addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('active');
    });


    function showError(field, message) {
        const errorEl = field.closest("label").querySelector(".error-message");
        errorEl.innerText = message;
    }

    function clearError(field) {
        const errorEl = field.closest("label").querySelector(".error-message");
        errorEl.innerText = "";
    }


    function emailValidate() {
        let isValid = true;
        const emailValue = emailEl.value.trim();
        const confirmValue = confirmEl.value.trim();

        if (emailValue === "") {
            showError(emailEl, "Please enter your email.");
            isValid = false;
        } else if (!emailValue.includes("@")) {
            showError(emailEl, "Please enter a valid email address, email must inculde '@'.");
            isValid = false;
        } else {
            clearError(emailEl);
        }
        if (isValid == false) {
            return isValid
        }

        if (confirmValue === "") {
            showError(confirmEl, "Please confirm your email.");
            isValid = false;
        } else if (emailValue !== confirmValue) {
            showError(confirmEl, "Emails do not match.");
            isValid = false;
        } else {
            clearError(confirmEl);
        }

        return isValid;
    }

    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        if (emailValidate()) {
            formEl.submit();
        }
    });


})();
