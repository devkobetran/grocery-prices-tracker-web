FROM node:22-alpine

WORKDIR /frontend

COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

EXPOSE 3000