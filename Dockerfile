# Use an official Node.js runtime as a parent image
FROM node:16

# Create a directory for your app inside the container
WORKDIR /app

# Install Angular CLI globally (if not already installed)
RUN cd front-end && npm install
RUN cd front-end && npm install -g @angular/cli

# Build dist directory
RUN cd front-end && ng build

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
