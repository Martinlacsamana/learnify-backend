# Use an offical Node runtime as a parent image
FROM node:latest

# Create our working directory with Docker
WORKDIR /app
COPY package*.json ./

# Run all needed dependencies
RUN npm install

# Copy resst of the files
COPY . .

EXPOSE 8080


CMD ["npm", "start"]