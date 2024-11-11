
    document.querySelector("form").addEventListener("submit", async function(event) {
        event.preventDefault();  // Prevent default form submission

        // Collect form data into a JSON object
        const formData = {
            type: 'contact',
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        console.log("Sending form data:", formData);

        // Your Google Apps Script URL
        const scriptURL = "https://script.google.com/macros/s/AKfycbyeX3TTNGIpqrIiuUIB2hQTtf3OtedNspIWfDmI6XO0Ex-n_nQa6iKAnlgQ6nDKrC2LHQ/exec";

        // Send form data as JSON
        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },  // Ensure data is sent as JSON
                body: JSON.stringify(formData)  // Convert formData object to JSON string
            });

            const jsonResponse = await response.json();
            console.log("Response from Apps Script:", jsonResponse);

            if (jsonResponse.result === "success") {
                alert("Form submitted successfully!");
                document.querySelector("form").reset();  // Clear form fields
            } else {
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit the form. Please try again later.");
        }
    });
