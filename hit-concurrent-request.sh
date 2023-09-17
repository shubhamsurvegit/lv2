

#!/bin/bash

# Define the API endpoint you want to hit
API_URL="http://localhost:3000/process"

# Define the number of concurrent requests you want to make
NUM_REQUESTS=2  # Adjust this to your desired number of requests

# Loop to make concurrent API requests
for ((i = 1; i <= $NUM_REQUESTS; i++)); do
  # Send a GET request to the API URL in the background
  curl -s -o /dev/null "$API_URL" &
done

# Wait for all background jobs to finish
wait

echo "All requests completed."


# run using ./fileName.sh