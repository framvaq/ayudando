SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `ayudando` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `ayudando`;

CREATE TABLE `announcements` (
  `id` int(20) NOT NULL,
  `user` int(10) NOT NULL,
  `type` enum('ask','give') COLLATE utf8_spanish_ci NOT NULL,
  `date_published` timestamp NOT NULL DEFAULT current_timestamp(),
  `place` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` text COLLATE utf8_spanish_ci NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `answers` (
  `user_id` int(10) NOT NULL,
  `announcement_id` int(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `message` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `rates` (
  `id_rating` int(11) NOT NULL,
  `id_rated` int(11) NOT NULL,
  `rating` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `type` enum('ask','give','both') COLLATE utf8_spanish_ci NOT NULL,
  `place` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `contact` enum('contactno','contactcontact','contactannouncement','') COLLATE utf8_spanish_ci NOT NULL,
  `rating` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);
ALTER TABLE `announcements` ADD FULLTEXT KEY `description` (`description`);

ALTER TABLE `answers`
  ADD KEY `announcement_id` (`announcement_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `rates`
  ADD KEY `id_rated` (`id_rated`),
  ADD KEY `id_rating` (`id_rating`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `announcements`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `announcements`
  ADD CONSTRAINT `announcements_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `announcements_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`announcement_id`) REFERENCES `announcements` (`id`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `rates`
  ADD CONSTRAINT `rates_ibfk_1` FOREIGN KEY (`id_rated`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rates_ibfk_2` FOREIGN KEY (`id_rating`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
