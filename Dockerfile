# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to the front-end directory within the dist directory
WORKDIR /app/dist/front-end

# Copy the package.json and package-lock.json files for the front-end
COPY package*.json ./

# Install front-end app dependencies
RUN npm install

# Build the front-end Angular app
RUN ng build

# Set the working directory to the root of the project
WORKDIR /app

# Copy the back-end source code
COPY dist/src ./

# Install back-end app dependencies
RUN npm install

# Expose ports (if applicable)
EXPOSE 9000 4200

# Define the command to run the back-end and front-end
CMD [ "node", "app.js" ] 
