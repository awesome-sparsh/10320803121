const express = require("express");
const axios = require("axios");

const app = express();
const port = 9876;

const windowSize = 10;
let numberWindow = [];

// Configuration for the third-party API
const API_ENDPOINTS = {
  p: "http://20.244.56.144/test/primes",
  f: "http://20.244.56.144/test/fibo",
  e: "http://20.244.56.144/test/even", // Assuming this endpoint exists
  r: "http://20.244.56.144/test/random", // Assuming this endpoint exists
};

// Function to fetch numbers from the third-party server
async function fetchNumbers(numberId) {
  try {
    const response = await axios.get(API_ENDPOINTS[numberId], { timeout: 500 });
    if (response.status === 200) {
      return response.data.numbers;
    }
    return [];
  } catch (error) {
    console.error(`Error fetching numbers for ID ${numberId}:`, error.message);
    return [];
  }
}

// Function to maintain the window of numbers
function maintainWindow(newNumbers) {
  for (const num of newNumbers) {
    if (!numberWindow.includes(num)) {
      if (numberWindow.length >= windowSize) {
        numberWindow.shift();
      }
      numberWindow.push(num);
    }
  }
}

// Function to calculate the average of numbers in the window
function calculateAverage(numbers) {
  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
  return 0;
}

// Root route
app.get("/", (req, res) => {
  res.send(
    "Average Calculator Microservice is running. Use the /numbers/:numberId endpoint."
  );
});

app.get("/numbers/:numberId", async (req, res) => {
  const numberId = req.params.numberId;

  if (!API_ENDPOINTS[numberId]) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const windowPrevState = [...numberWindow];
  const newNumbers = await fetchNumbers(numberId);
  maintainWindow(newNumbers);
  const avg = calculateAverage(numberWindow);

  const response = {
    windowPrevState,
    windowCurrState: numberWindow,
    numbers: newNumbers,
    avg: avg.toFixed(2),
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
