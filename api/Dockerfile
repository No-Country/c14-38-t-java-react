# Etapa 1: Construye la aplicación Spring Boot
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Etapa 2: Crea la imagen final de la aplicación
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/stockwise.jar /app/stockwise.jar
EXPOSE 8080
CMD ["java", "-jar", "stockwise.jar"]
