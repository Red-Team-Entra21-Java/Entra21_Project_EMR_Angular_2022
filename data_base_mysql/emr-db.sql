CREATE DATABASE  IF NOT EXISTS `emr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `emr`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: emr
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment_emr`
--

DROP TABLE IF EXISTS `appointment_emr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment_emr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `doctor_id` int NOT NULL,
  `date_appointment` datetime NOT NULL,
  `anamnesis` text NOT NULL,
  `prescription` text,
  `certificate` text,
  `forwarding` text,
  `medical_release` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqnra5cw0kqb57plargwjhuns5` (`doctor_id`),
  KEY `FKjdguhf3saiwh64vti80harfg9` (`patient_id`),
  CONSTRAINT `FKjdguhf3saiwh64vti80harfg9` FOREIGN KEY (`patient_id`) REFERENCES `patient_emr` (`id`),
  CONSTRAINT `FKqnra5cw0kqb57plargwjhuns5` FOREIGN KEY (`doctor_id`) REFERENCES `doctor_emr` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_emr`
--

LOCK TABLES `appointment_emr` WRITE;
/*!40000 ALTER TABLE `appointment_emr` DISABLE KEYS */;
INSERT INTO `appointment_emr` VALUES (1,1,1,'2022-10-06 12:00:00','Cefaleia leve','Paracetamol, se dor ou febre','n/h','n/h','Released'),(3,4,2,'2022-10-09 12:00:00','Cefaleia','Paracetamol, se dor','n/h','n/h','Released'),(4,2,2,'2022-10-07 12:00:00','teste','teste','teste','teste','Released'),(5,6,2,'2022-10-07 12:00:00','teste123','teste','teste','teste','Released'),(6,4,2,'2022-10-07 12:00:00','Dor de cabeça - Enxaqueca','Cefaliv - 8h/8h se dor','1 day','Neuro','Released'),(7,3,2,'2022-09-28 14:16:56','teste123','teste','teste','teste','internee'),(8,1,1,'2022-10-08 12:00:00','Cefaleia','Paracetamol, se dor','n/h','n/h1','Released'),(9,4,2,'2022-10-08 12:00:00','Cefaleia','Paracetamol, se dor','n/h','n/h','Released'),(11,6,2,'2022-10-01 19:21:40','Tesyter','1','1','1','Released'),(13,5,2,'2022-10-01 19:38:58','1','1','1','1','Released'),(15,30,2,'2022-10-10 12:00:00','teste',NULL,NULL,NULL,'Released'),(16,3,2,'2022-10-04 21:54:28','Teste','teste','teste','teste','Released'),(17,2,7,'2022-10-05 13:38:43','teste doctor 77','teste doctor 7','teste doctor 7','teste doctor 7','Released'),(18,3,1,'2022-10-09 22:25:23','teste','teste','teste','teste','Released'),(19,4,1,'2022-10-09 22:26:37','teste',NULL,NULL,'teste','Released'),(20,6,1,'2022-10-09 23:02:28','teste',NULL,NULL,NULL,'Released'),(21,10,1,'2022-10-09 23:03:46','teste',NULL,NULL,NULL,'Released'),(22,9,1,'2022-10-11 15:19:22','testando',NULL,NULL,NULL,'Released'),(23,37,1,'2022-10-11 15:27:40','teste',NULL,NULL,NULL,'Released'),(24,10,1,'2022-10-11 15:29:00','teste',NULL,NULL,NULL,'Released'),(25,4,1,'2022-10-12 13:50:53','Paciente relata que há cerca de 5 dias, iniciou um quadro de dores na coluna torácica, irradiando para a lombar. De intensidade 8 de 10. Desencadeia quando abaixa e/ou pega peso, persistindo nos períodos vespertinos. Fez uso do anti-inflamatório Meloxican pelos últimos 3 dias de 12/12 horas. Nega dispneia, nega tosse, nega trauma físico.','TORSILAX - 50mg\nTomar 1(um) comprimido por via oral, a cada 12(doze) horas, por 5 (cinco) dias.','Recomendo 1 dia de afastamento.','N/H','Released'),(26,9,1,'2022-10-13 17:55:39','Paciente relata que há cerca de 5 dias, iniciou um quadro de dores na coluna torácica, irradiando para a lombar. De intensidade 8 de 10. Desencadeia quando abaixa e/ou pega peso, persistindo nos períodos vespertinos. Fez uso do anti-inflamatório Meloxican pelos últimos 3 dias de 12/12 horas. Nega dispneia, nega tosse, nega trauma físico.\n','TORSILAX - 50mg\nTomar 1(um) comprimido por via oral, a cada 12(doze) horas, por 5 (cinco) dias.\n','Recomendo 1 dia de afastamento.','N/H','Released');
/*!40000 ALTER TABLE `appointment_emr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_emr`
--

DROP TABLE IF EXISTS `doctor_emr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_emr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_father` varchar(255) DEFAULT NULL,
  `name_mother` varchar(255) DEFAULT NULL,
  `number_home` smallint DEFAULT NULL,
  `register_number` varchar(255) DEFAULT NULL,
  `register_state` varchar(255) DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsx8a8u0naq6jelggliqb5rk43` (`user_id`),
  CONSTRAINT `FKsx8a8u0naq6jelggliqb5rk43` FOREIGN KEY (`user_id`) REFERENCES `user_emr` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_emr`
--

LOCK TABLES `doctor_emr` WRITE;
/*!40000 ALTER TABLE `doctor_emr` DISABLE KEYS */;
INSERT INTO `doctor_emr` VALUES (1,'1986-09-14','Londrina','Brasil','528.220.220-46','Rocio Fechado','Female','Carla Maria Moraes','Lucas Moraes','Julia Moraes',3476,'62445561-0','PR','Obstetra','Parana','Rua Conselheir',NULL),(2,'1975-03-30','Florianopolis','Brasil','801.031.720-92','Centro','Male','Rafael da Silva','Carlos da Silva','Julia Silva',1765,'57599400-2','SC','Clinico Geral','Santa Catarina','Rua Barao',NULL),(3,'1991-02-01','Itajai','Brasil','399.015.800-72','Itaipava','Male','Ruam Sales Pereira Junior','Ruam Sales','Solange Silva',31,'46579027-5','SC','Cardiologista','Santa Catarina','Rua Coronel Alberto',NULL),(4,'1965-05-20','Balneario Camboriu','Brasil','694.939.570-12','Centro','Female','Maria Aparecida Silva','Cicero Silva','Giovana Aparecida',9633,'23246668-8','SC','Ortopedia','Santa Catarina','Rua Central',NULL),(5,'1978-01-01','Navigate','Brazil','37261503070','Centro','Female','Fernanda Silva Silva','Jose Silva','Maria Silva',1253,'162054-32','PR','Cardiologista','Santa Catarina','Street Test',NULL),(7,NULL,NULL,NULL,'89210464028',NULL,NULL,'Emerson Carlos',NULL,'Joana da Silva',NULL,'123456','PR','Cardiologista',NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctor_emr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_emr`
--

DROP TABLE IF EXISTS `patient_emr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_emr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_father` varchar(255) DEFAULT NULL,
  `name_mother` varchar(255) DEFAULT NULL,
  `number_home` smallint DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_emr`
--

LOCK TABLES `patient_emr` WRITE;
/*!40000 ALTER TABLE `patient_emr` DISABLE KEYS */;
INSERT INTO `patient_emr` VALUES (1,'1995-02-01','Navegantes','Brasil','316.094.990-77','Centro','Male','Emerson Seiler','Jose Seiler','Maria Seiler',1253,'SC','Rua Adolfo Konder'),(2,'1980-02-26','Pasadena','EUA','238.024.750-11','Center','Male','Sheldon Cooper','George Cooper','Mary Cooper',2311,'Pasadena','Los Robles Avenue'),(3,'1985-06-13','Imbituba','Brasil','776.939.100-85','Numerais','Female','Joana da Silva','Joao da Silva','Julia Garcia',1268,'Santa Catarina','Rua 465'),(4,'2002-10-06','Github','Brasil','763.323.270-65','Git','Female','Silvana Github','Linus Github','Olivia Github',404,'Parana','Rua Versionamento'),(5,NULL,'Numerais','Brasil','528.684.210-08','Centro','Other','Joao da Silva','Jose da Silva','Maria da Silva',37,'São Paulo','Rua 123'),(6,'2007-06-02','Blumenau','Brasil','027.291.780-07','Centro','Female','Eduarda Clara Lima','Alfredo Lima','Suelem Clara',198,'Santa Catarina','Rua Blumenau'),(7,'1967-02-01','Navegantes','Brasil','123.124.345-01','Center','Male','Carlos','Carlos','Nayara',123,'Santa Catarina','Rua Adolfo Konder'),(8,'1967-02-01','Itajaí','Brasil','145.132.123-21','Centro','Female','Maria Silva','Joao Silva','Maria Silva',1,'Santa Catarina','Rua Adolfo Konder'),(9,'1980-02-26','Centered','EUA','660.816.880-20','Pasadena','male','Leonard Hofstader','George Cooper','Mary Cooper',2311,'California','Av Los Robles Avenue'),(10,'1978-01-01','Navegantes','Brasil','638.636.310-80','Centro','Male','Marco Alcantara Junior','Father Doctor','Maria Silva',171,'Santa Catarina','Rua Adolfo Konder'),(11,'1995-10-01','Teste','Teste','316.094.990-77','Teste','Female','Teste','Teste','Teste',1,'Teste','Teste'),(25,NULL,NULL,NULL,'28494507079',NULL,NULL,'Carla Maria Moraes',NULL,'Mother Doctor',NULL,NULL,NULL),(30,NULL,NULL,NULL,'71405058021',NULL,NULL,'Administrator',NULL,'Maria Silva',NULL,NULL,NULL),(31,NULL,NULL,NULL,'72222656001',NULL,NULL,'Administrator',NULL,'Maria Silva',NULL,NULL,NULL),(32,NULL,NULL,NULL,'77903126008',NULL,NULL,'Carla Maria Moraes',NULL,'Joana da Silva',NULL,NULL,NULL),(33,NULL,NULL,NULL,'71405058021',NULL,NULL,'Carla Maria Moraes',NULL,'Maria Silva',NULL,NULL,NULL),(34,NULL,NULL,NULL,'83606615027',NULL,NULL,'Administrator',NULL,'Mother Doctor',NULL,NULL,NULL),(36,NULL,NULL,NULL,'03896776045',NULL,'Female','Carla Maria Moraes',NULL,'Maria Silva',NULL,NULL,NULL),(37,'1990-10-10',NULL,NULL,'10871171007',NULL,NULL,'Fabio Soares',NULL,'Maria Soares',NULL,NULL,NULL),(38,NULL,NULL,NULL,'11026086027',NULL,NULL,'Joao Silva',NULL,'Maria Silva',NULL,NULL,NULL),(39,NULL,NULL,NULL,'11026086027',NULL,NULL,'Alberto Carlos Silva',NULL,'Fabiana Carlos',NULL,NULL,NULL);
/*!40000 ALTER TABLE `patient_emr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_emr`
--

DROP TABLE IF EXISTS `team_emr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_emr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `github` text NOT NULL,
  `college` text NOT NULL,
  `image` text NOT NULL,
  `linkedin` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_emr`
--

LOCK TABLES `team_emr` WRITE;
/*!40000 ALTER TABLE `team_emr` DISABLE KEYS */;
INSERT INTO `team_emr` VALUES (1,'Emerson Seiler','https://github.com/seiler-emerson','Studying Software Engineering and B.Sc Mechanical Engineering','https://avatars.githubusercontent.com/seiler-emerson','https://www.linkedin.com/in/seileremerson/'),(2,'Welliton Borges','https://github.com/Wellitonborges','Studying Analysis and Systems Development','https://avatars.githubusercontent.com/Wellitonborges','https://www.linkedin.com/in/welliton-borges-studying-java-development/'),(3,'Bárbara Ribeiro','https://github.com/Ba-Ribeiro','B.A. Accounting Sciences','https://avatars.githubusercontent.com/Ba-Ribeiro','https://www.linkedin.com/in/b%C3%A1rbararibeiro050392/');
/*!40000 ALTER TABLE `team_emr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_emr`
--

DROP TABLE IF EXISTS `user_emr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_emr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7bwcsa61arfy2pg84xwxhvkeq` (`doctor_id`),
  CONSTRAINT `FK7bwcsa61arfy2pg84xwxhvkeq` FOREIGN KEY (`doctor_id`) REFERENCES `doctor_emr` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_emr`
--

LOCK TABLES `user_emr` WRITE;
/*!40000 ALTER TABLE `user_emr` DISABLE KEYS */;
INSERT INTO `user_emr` VALUES (1,'User','user','user','user@emr.com','User',NULL),(2,'Carla Maria Moraes','carla','carla','carlamaria@emr.com','Doctor',1),(3,'Emerson Seiler','seiler','seiler123','seiler@emr.com','Admin',NULL),(5,'Administrator','admin','admin','admin@admin.com','Admin',NULL),(6,'Finance User','finance','finance','finance@emr.com','Admin',NULL),(7,'Welliton Borges','welliton','123','welliton@emr.com','Admin',NULL),(8,'patient','patient','patient','patient@emr.com','User',NULL),(13,'Teste Testando','1','1','teste@emr.com','User',NULL),(19,'Mayara','mayara','123','mayara@emr.com','User',NULL),(25,'Rafael da Silva','rafaelsilva','rafaelsilva','rafael@emr.com','Doctor',2),(26,'Ruam Sales Pereira Junior','ruamsales','ruamsales','ruam@emr.com','Doctor',3),(27,'Maria Aparecida Silva','mariaaparecida','mariaaparecida','mariaap@emr.com','Doctor',4),(28,'Fernanda Silva Silva','fernandasilva','fernandasilva','fernanda@emr.com','Doctor',5),(29,'Emerson Carlos','emersoncarlos','emersoncarlos','emersoncarlos@emr.com','Doctor',7),(40,'teste','12345','12345','teste@teste.com','User',NULL),(41,'Rubem Oliota','oliota','oliota','oliota@emr.com','Admin',NULL),(42,'Filipe Albuquerque','filipe','filipe','filipe@emr.com','User',NULL);
/*!40000 ALTER TABLE `user_emr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-16  2:24:59
