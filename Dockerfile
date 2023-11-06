# Use an official Node.js runtime as a parent image
FROM node:16

# Create a directory for your app inside the container
WORKDIR /app/front-end

# Install Angular CLI globally (if not already installed)
RUN npm install
RUN npm install -g @angular/cli

# Build dist directory
RUN ng build

# Create a directory for your app inside the container
WORKDIR /app

# Copy the contents of the dist directory into the container
COPY ./dist /app/dist

# Copy the contents of the front-end directory into the container
COPY ./front-end /app/front-end

# Install app dependencies
RUN npm install

# Expose ports (if applicable)
EXPOSE 9000 4200

# Define the command to run your app
CMD [ "node", "app.js" ]
