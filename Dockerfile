# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy all other files
COPY . .

# Build the app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose port 8000
EXPOSE 8000


# Start the application
CMD ["serve", "-s", "dist", "-l", "8000"]
