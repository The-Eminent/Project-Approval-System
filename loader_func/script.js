// Simulate API request (replace this with your actual API call)
function simulateAPICall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000); // Simulating a 3-second API call
  });
}

// Function to hide the loader and show the content
function hideLoader() {
  const loaderContainer = document.getElementById('loader-container');
  const content = document.getElementById('content');

  loaderContainer.style.display = 'none';
  content.style.display = 'block';
}

// Simulate plagiarism checking and API call
async function checkForPlagiarism() {
  try {
    // Show loader
    const loaderContainer = document.getElementById('loader-container');
    loaderContainer.style.display = 'flex';

    // Simulate API call
    await simulateAPICall();

    // Hide loader and show content
    hideLoader();
  } catch (error) {
    console.error('Error:', error);
    // Handle errors if needed
  }
}

// Call the plagiarism checking function when the page loads
window.onload = checkForPlagiarism;
