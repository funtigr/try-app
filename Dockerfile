# Use official Node.js image
FROM node:16

# Create and set the app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]