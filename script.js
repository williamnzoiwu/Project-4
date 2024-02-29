const chatBox = document.getElementById('chat-box');

// Global variable to store the loaded intents
let loadedIntents = null;

// Function to fetch and store intents if not already loaded
async function fetchAndStoreIntents() {
    if (!loadedIntents) {
        console.log("Fetching intents...");
        loadedIntents = await fetch('intents2.json') // Adjust the path if necessary
            .then(response => {
                console.log("Intents fetched successfully.");
                return response.json();
            })
            .catch(error => {
                console.error("Failed to load intents:", error);
                return null;
            });
    } else {
        console.log("Intents already loaded.");
    }
    console.log("Loaded Intents:", loadedIntents); // Log the loaded intents
    return loadedIntents;
}


// Function to find a response from the intents
function findResponse(message, intents) {
    let response = "Sorry, I don't understand."; // Default fallback response
    console.log("Finding response for message:", message); // Log the input message

    outerLoop: // Label for the outer loop for early exit
    for (const intent of intents.intents) {
        for (const pattern of intent.patterns) {
            console.log(`Checking pattern: ${pattern} against message: ${message.toLowerCase()}`);
            if (message.toLowerCase().includes(pattern.toLowerCase())) {
                console.log(`Match found in intent: ${intent.tag} | Pattern: ${pattern}`);
                response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                console.log(`Responding with: ${response}`); // Log the selected response
                break outerLoop; // Exit both loops early upon finding a match
            }
        }
    }

    return response;
}







document.getElementById('send-btn').addEventListener('click', async function() {
    const userInput = document.getElementById('user-input').value; // Capture the value immediately

    if (userInput.trim() === '') return; // Prevent empty messages

    console.log("User message:", userInput); // Confirming user input is logged

    // Load or retrieve stored intents
    const intents = await fetchAndStoreIntents();

    console.log("Actual user input being processed:", userInput); // Ensure this is logged after fetching intents

    // Create user message element
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput; // Use the captured value
    userMessage.classList.add('message', 'user-message');
    chatBox.appendChild(userMessage);

    // Placeholder for bot response
    const botResponse = document.createElement('div');
    botResponse.textContent = 'Thinking...'; // Placeholder response
    botResponse.classList.add('message', 'bot-message');
    chatBox.appendChild(botResponse);

    setTimeout(() => {
        const response = findResponse(userInput, intents); // Use the captured value
        botResponse.textContent = response; // Update with actual response
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
    }, 1000);

    document.getElementById('user-input').value = ''; // Clear input field after capturing the value
    document.getElementById('user-input').focus(); // Focus on input field for next message
});


