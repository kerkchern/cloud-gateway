FROM openjdk:8
ADD target/cloud-gateway.jar cloud-gateway.jar
EXPOSE 9191
ENTRYPOINT ["java", "-jar", "cloud-gateway.jar"]