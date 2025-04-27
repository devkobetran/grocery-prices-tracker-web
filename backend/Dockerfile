## Use official OpenJDK 21 image
#FROM eclipse-temurin:21-jdk-alpine
#
## Set working directory inside the container
#WORKDIR /backend
#
## Copy Gradle build files first to leverage caching
#COPY build.gradle.kts gradle.properties gradlew ./
#COPY gradle/ ./gradle/
#RUN ./gradlew clean build --no-daemon
#
## Copy application source code after dependencies are cached
#COPY src/ ./src/
#
## Build the application
#RUN ./gradlew bootJar --no-daemon
#
## Expose the backend port
#EXPOSE 8080
#
## Define the startup command
#CMD ["java", "-jar", "build/libs/*.jar"]