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
    // Calculate intervals between heartbeats
    const intervals = heartbeats.slice(1).map((beat, index) => beat - heartbeats[index]);
    // Calculate mean interval
    const meanInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    // Calculate standard deviation
    const sd = Math.sqrt(intervals.reduce((sq, n) => sq + Math.pow(n - meanInterval, 2), 0) / intervals.length);
    
    // Update webpage with results
    document.getElementById('results').innerHTML = `Mean Interval: ${meanInterval.toFixed(2)} ms<br>Standard Deviation: ${sd.toFixed(2)} ms`;
}

