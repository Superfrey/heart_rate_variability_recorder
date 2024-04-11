let heartbeats = [];

document.getElementById('heartbeat-btn').addEventListener('click', function() {
    const now = new Date().getTime();
    heartbeats.push(now);

    // Start 30-second timer after first heartbeat
    if (heartbeats.length === 1) {
        setTimeout(calculateResults, 30000); // 30 seconds
    }
});

function calculateResults() {
    const intervals = heartbeats.slice(1).map((beat, index) => beat - heartbeats[index]);
    const meanInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const sd = Math.sqrt(intervals.reduce((sq, n) => sq + Math.pow(n - meanInterval, 2), 0) / intervals.length);
    const successiveDifferences = intervals.slice(1).map((interval, index) => Math.pow(interval - intervals[index], 2));
    const rmssd = Math.sqrt(successiveDifferences.reduce((a, b) => a + b, 0) / successiveDifferences.length);
    const meanHeartRate = 60000 / meanInterval;

    document.getElementById('results').innerHTML = `Mean Interval: ${meanInterval.toFixed(2)} ms<br>Mean Heart Rate: ${meanHeartRate.toFixed(2)} BPM<br>Standard deviation of heartbeat intervals: ${sd.toFixed(2)} ms<br>RMSSD: ${rmssd.toFixed(2)} ms`;
}

let heartbeats = [];

document.getElementById('heartbeat-btn').addEventListener('click', function() {
    const now = new Date().getTime();
    heartbeats.push(now);

    // Start 30-second timer after the first heartbeat
    if (heartbeats.length === 1) {
        setTimeout(calculateResults, 30000); // 30 seconds
    }
});

function calculateResults() {
    // Perform calculations as before
    // (Your existing calculation logic here)

    // Show the Start New Recording button
    document.getElementById('new-recording-btn').style.display = 'inline-block';
}

document.getElementById('new-recording-btn').addEventListener('click', function() {
    // Reset heartbeats array for new recording
    heartbeats = [];
    
    // Hide the Start New Recording button until next time
    this.style.display = 'none';

    // Clear the results display
    document.getElementById('results').innerHTML = '';

    // Optionally, provide a message or reset the interface as needed
    // For example, resetting instructions or countdown timers if you have them
});

