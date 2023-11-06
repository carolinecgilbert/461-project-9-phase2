# Use an official Node.js runtime as a parent image
FROM node:16

# Create a directory for your app inside the container
WORKDIR /app/front-end

# Install Angular CLI globally (if not already installed)
RUN npm install
RUN npm install -g @angular/cli

# Build dist directory
RUN ng build

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
