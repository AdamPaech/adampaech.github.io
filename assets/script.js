// Create the dark mode toggle button
const toggleButton = document.createElement('button');
toggleButton.id = 'dark-mode-toggle';
toggleButton.innerHTML = '🌙'; // Use moon emoji for toggle button

// Append the toggle button to the body (or you can specify any location)
document.body.appendChild(toggleButton);

// Event listener for toggle button click
toggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Save the dark mode preference in local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check local storage for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
