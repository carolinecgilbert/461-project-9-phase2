# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to the front-end directory within the dist directory
WORKDIR /app/front-end

# Install Angular CLI globally (if not already installed)
RUN npm install -g @angular/cli

# Copy the source code (including your Angular project) into the container
COPY . .

# Run npm install
RUN npm install

# Build the Angular app
RUN ng build

# Expose ports (if applicable)
EXPOSE 9000 4200

# Define the command to serve your app
CMD ["ng", "serve", "--host", "0.0.0.0"]

