// Get the video element
var video = document.getElementById('video');

// Create an array to store the timestamps
var timestamps = [];

// Event listener for spacebar key press
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is spacebar
  if (event.keyCode === 32) {
    // Pause the video
    video.pause();
    
    // Get the current timestamp
    var timestamp = video.currentTime;
    
    // Store the timestamp in the array
    timestamps.push(timestamp);
    
    // Update the displayed timestamps in the textarea
    var timestampsTextArea = document.getElementById('timestamps');
    timestampsTextArea.value = timestamps.join('\n');
  }
});
