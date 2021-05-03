FROM openjdk:8
ADD target/cloud-gateway-0.0.1-SNAPSHOT.jar cloud-gateway.jar
EXPOSE 9191
ENTRYPOINT ["java", "-jar", "cloud-gateway.jar"]
