let breathingTimer;
let breathingTime = 0;
let breathingAnimation = document.getElementById('breathingAnimation');
let breathingMessage = document.getElementById('breathingMessage');
let breathingCounter = document.getElementById('breathingCounter');

// Dark Mode Toggle Function
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function startBreathing() {
    breathingTime = 0;
    breathingMessage.textContent = "Inhale... Hold... Exhale...";
    breathingCounter.textContent = `Time: ${breathingTime}s`;
    breathingAnimation.style.display = "block";
    breathingAnimation.style.animation = "breathe 4s ease-in-out infinite";
    document.getElementById('startBreathingBtn').style.display = "none";
    document.getElementById('stopBreathingBtn').style.display = "inline-block";
    
    breathingTimer = setInterval(function() {
        breathingTime++;
        breathingCounter.textContent = `Time: ${breathingTime}s`;
    }, 1000);
}


function stopBreathing() {
    clearInterval(breathingTimer);
    breathingMessage.textContent = "Breathing exercise completed!";
    breathingAnimation.style.animation = "none";
    document.getElementById('startBreathingBtn').style.display = "inline-block";
    document.getElementById('stopBreathingBtn').style.display = "none";
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();  // Trim any extra spaces

    // Check if input is not empty
    if (todoText === "") {
        alert("Please enter a valid activity to add to the list.");
        return;  // Don't add an empty to-do
    }

    // Add the to-do to the list
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = todoText;

    // Create and append Edit and Delete buttons for each To-Do
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTodo(li, todoText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTodo(li);

    // Append buttons to the To-Do list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    // Clear the input field after adding the to-do
    todoInput.value = "";
}

// Function to delete a to-do item
function deleteTodo(todoItem) {
    todoItem.remove();
}

// Function to edit a to-do item
function editTodo(todoItem, oldText) {
    const newText = prompt("Edit your To-Do item:", oldText);
    
    if (newText !== null && newText.trim() !== "") {
        todoItem.firstChild.textContent = newText.trim(); // Update the text content
    }
}

// Array of random motivational quotes
const quotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "You are never too old to set another goal or to dream a new dream.",
    "It always seems impossible until it’s done.",
    "The way to get started is to quit talking and begin doing.",
    "Hardships often prepare ordinary people for an extraordinary destiny."
];

// Function to show a random quote
function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
}

// Function to show personalized guidance based on mood
function showGuidance() {
    const mood = document.getElementById('mood').value;
    const guidanceContainer = document.getElementById('guidance-container');
    let guidanceText = '';

    switch(mood) {
        case 'happy':
            guidanceText = 'Keep up the good vibes! Stay positive and share your happiness with others!';
            break;
        case 'stressed':
            guidanceText = 'Take a deep breath, try some mindfulness exercises, and relax!';
            break;
        case 'sad':
            guidanceText = 'It’s okay to feel sad. Try journaling or talking to a friend.';
            break;
        case 'angry':
            guidanceText = 'Take a step back, breathe deeply, and channel your energy into something productive.';
            break;
        case 'anxious':
            guidanceText = 'Focus on the present moment, meditate, or go for a walk to clear your mind.';
            break;
        case 'motivated':
            guidanceText = 'Keep pushing forward! Set small goals and celebrate each achievement.';
            break;
        default:
            guidanceText = 'Select your mood to receive personalized guidance!';
    }

    guidanceContainer.textContent = guidanceText;
    document.getElementById('moreGuidanceBtn').style.display = "inline-block"; // Show more guidance button

}
