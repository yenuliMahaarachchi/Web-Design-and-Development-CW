let count = 4; 
        const countdownElement = document.getElementById("countdown");

        const countdownInterval = setInterval(() => {
            count--;
            countdownElement.textContent = count;

            if (count === 0) {
                clearInterval(countdownInterval);
                document.getElementById("splash-screen").classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = "../html/home.html"; 
                }, 1000);
            }
        }, 1000);