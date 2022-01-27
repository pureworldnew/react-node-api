/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.21-MariaDB : Database - interview_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`interview_db` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `interview_db`;

/*Table structure for table `companies` */

DROP TABLE IF EXISTS `companies`;

CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_size` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_location` varchar(255) DEFAULT NULL,
  `company_industry` varchar(255) DEFAULT NULL,
  `job_role` varchar(255) DEFAULT NULL,
  `job_type` varchar(255) DEFAULT NULL,
  `job_rating` varchar(255) DEFAULT NULL,
  `job_req` text DEFAULT NULL,
  `job_skills` varchar(255) DEFAULT NULL,
  `reg_date` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `companies` */

insert  into `companies`(`id`,`company_size`,`company_name`,`company_location`,`company_industry`,`job_role`,`job_type`,`job_rating`,`job_req`,`job_skills`,`reg_date`,`created_at`,`updated_at`) values 
(6,'16','https://www.linkedin.com/company/cloud-construct/','Boston, MA',NULL,'softwareEngineer','contract','75/1099','Not started due to hospital','angular/ionic','Wed Sep 01 2021 04:29:46 GMT-0500 (Central Daylight Time)','2022-01-27 10:31:40','2022-01-27 10:31:40'),
(7,'265105','https://www.linkedin.com/company/wipro/','Bangalore, Karnataka',NULL,'softwareEngineer','fullTime','150k','Paused due to lazy delivery of laptop','angular/node','Fri Oct 01 2021 04:29:46 GMT-0500 (Central Daylight Time)','2022-01-27 10:33:20','2022-01-27 10:33:20'),
(8,'8','https://www.linkedin.com/company/sky-republic/','Scottsdale, Arizona',NULL,'softwareEngineer','fullTime','135k','working for 2 months from Nov. 2021','react/typescript/node','Mon Nov 01 2021 04:29:46 GMT-0500 (Central Daylight Time)','2022-01-27 10:37:33','2022-01-27 10:37:33'),
(9,'55230','https://www.linkedin.com/company/capital-one/','McLean, Va',NULL,'softwareEngineer','fullTime','85/h','not started due to drug screen','full stack','Mon Nov 01 2021 04:29:46 GMT-0500 (Central Daylight Time)','2022-01-27 10:39:03','2022-01-27 10:39:03'),
(10,'313819','https://www.linkedin.com/company/cognizant/','Teaneck, New Jersey',NULL,'softwareEngineer','fullTime','135k','full stack','full stack','Sat Jan 01 2022 04:29:46 GMT-0600 (Central Standard Time)','2022-01-27 10:40:46','2022-01-27 10:40:46'),
(11,'281','https://www.linkedin.com/company/ispottv/','Bellevue, WA',NULL,'softwareEngineer','fullTime','135k','progress with laptop delivery','full stack','Mon Jan 10 2022 04:29:46 GMT-0600 (Central Standard Time)','2022-01-27 10:41:56','2022-01-27 10:41:56');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
