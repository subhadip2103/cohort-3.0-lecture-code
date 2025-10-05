import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173" 
}))
app.use(express.json());


// initial counts
let counts = {
  network: 104,
  jobs: 0,
  messaging: 0,
  notifications: 12,
};

// change counts every 5 seconds
function mutateCounts() {
  // helper to random +/- small delta but keep non-negative
  const delta = (max = 5) => Math.floor(Math.random() * (max + 1));
  counts.network = Math.max(0, counts.network + (Math.random() < 0.5 ? -delta(3) : delta(3)));
  counts.jobs = Math.max(0, counts.jobs + (Math.random() < 0.5 ? -delta(2) : delta(2)));
  counts.messaging = Math.max(0, counts.messaging + (Math.random() < 0.5 ? -delta(4) : delta(4)));
  counts.notifications = Math.max(0, counts.notifications + (Math.random() < 0.5 ? -delta(6) : delta(6)));
}

// start the mutator
setInterval(mutateCounts, 5000);

// REST endpoint: returns the current counts
app.get("/counts", (req, res) => {
  res.json(counts);
});

// SSE endpoint: push updates to connected clients every 5s
app.get("/stream", (req, res) => {
  // SSE headers
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive"
  });
  res.flushHeaders();

  // send initial payload
  res.write(`data: ${JSON.stringify(counts)}\n\n`);

  // send updates every 5 seconds (aligned with mutateCounts)
  const interval = setInterval(() => {
    res.write(`data: ${JSON.stringify(counts)}\n\n`);
  }, 5000);

  // when client disconnects
  req.on("close", () => {
    clearInterval(interval);
  });
});

app.listen(3000, () => {
  console.log(`Notifications API running on http://localhost:3000`);
  console.log(`GET /counts → current counts`);
  console.log(`GET /stream  → SSE realtime updates`);
});
 