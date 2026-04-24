# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built React app to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 8080 (Cloud Run default)
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
