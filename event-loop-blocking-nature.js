
const express = require("express");

const app = express();
const port = 3000;

const blockingOp = () => {
  for (let i = 0; i < 10000000000; i++) {}
  return "Result";
};

const nonBlockingOp = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result");
    }, 3000);
  });
};

const asyncOp = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("PDF generated");
    }, 3000);
  });
};

app.get("/process", async (req, res) => {
  console.log("Incoming request");
    // const result = blockingOp();
    // const result = await nonBlockingOp();
    asyncOp();
  console.log("Task completed");
  res.send("Response");
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});