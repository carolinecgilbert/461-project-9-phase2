# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to your Angular project directory
WORKDIR /app/front-end

# Install Angular CLI globally (if not already installed)
RUN npm install -g @angular/cli

# Copy the source code (including your Angular project) into the container
COPY . .

# Run npm install to install project dependencies
RUN npm install

# Build the Angular app and specify the output directory
RUN ng build --output-path=/app/dist

# Expose the backend port (adjust to match your backend configuration)
EXPOSE 9000

# Define the command to serve your app
CMD ["ng", "serve", "--host", "0.0.0.0"]


