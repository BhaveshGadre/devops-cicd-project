# Base Image
FROM node:24-alpine

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]