#!/bin/bash
# scripts/kill-port.sh
# Script to kill process running on a specific port

PORT=${1:-4028}

echo "Looking for processes using port $PORT..."

# Find and kill the process using the port
PID=$(lsof -ti:$PORT)

if [ -z "$PID" ]; then
    echo "No process found using port $PORT"
else
    echo "Killing process $PID using port $PORT"
    kill -9 $PID
    echo "Process killed successfully"
fi