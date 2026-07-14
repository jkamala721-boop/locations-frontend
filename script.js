window.onload = function () {
async function loadWaitlistCount() {

    try {

        const response = await fetch(
            "https://locations-backend-0a1p.onrender.com/waitlist-count"
        );

        const data = await response.json();

        document.getElementById(
            "waitlistCount"
        ).textContent = data.count;
document.getElementById("waitlistCount2").textContent =
    data.count;

const percentage =
    (data.count / 100) * 100;

document.getElementById("progressFill").style.width =
    percentage + "%";
    } catch (error) {

        console.log(error);

    }

}

loadWaitlistCount();
    const form = document.getElementById("waitlistForm");

    form.addEventListener("submit", async function(event) {

        event.preventDefault();
        const submitButton =
    form.querySelector('button[type="submit"]');

submitButton.disabled = true;
submitButton.innerText = "Submitting...";

        const fullName =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("email").value;

        const role =
            document.getElementById("role").value;

        try {

            const response = await fetch(
    "https://locations-backend-0a1p.onrender.com/join-waitlist",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullName,
            email,
            role
        })
    }
);

            if (response.ok) {

               document.getElementById("message").innerText =
    "✅ Successfully joined the waitlist!";
submitButton.disabled = false;
submitButton.innerText = "Join Waitlist";
form.reset();

            } else {
submitButton.disabled = false;
submitButton.innerText = "Join Waitlist";
                const error = await response.json();

                console.log(error);

               document.getElementById("message").innerText =
    "❌ Something went wrong. Please try again.";

            }

        } catch (error) {
            submitButton.disabled = false;
submitButton.innerText = "Join Waitlist";

            console.log(error);

           document.getElementById("message").innerText =
    "❌ Connection error.";

        }

    });
      const navbarButton =
        document.getElementById("navbarWaitlistButton");

    if (navbarButton) {

        navbarButton.addEventListener("click", function() {

            document.getElementById("waitlist")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    }
    console.log(document.getElementById("navbarWaitlistButton"));
console.log(document.getElementById("heroWaitlistButton"));
const heroButton =
    document.getElementById("heroWaitlistButton");

if (heroButton) {

    heroButton.addEventListener("click", function() {

        document.getElementById("waitlist")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}

};