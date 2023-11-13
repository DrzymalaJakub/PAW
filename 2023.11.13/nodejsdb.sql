-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 05, 2023 at 07:30 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejsdb`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `contact`
--

CREATE TABLE `contact` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `selection` text NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `selection`, `content`) VALUES
(1, 'reeee', 'encemence@gmail.reeee', 'Nie', 'text');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'imie_nr1', 'nazwisko_nr1', 'student_nr1@gmail.net'),
(2, 'imie_nr2', 'nazwisko_nr2', 'student_nr2@gmail.net'),
(3, 'imie_nr3', 'nazwisko_nr3', 'student_nr3@gmail.net'),
(4, 'imie_nr4', 'nazwisko_nr4', 'student_nr4@gmail.net'),
(5, 'imie_nr5', 'nazwisko_nr5', 'student_nr5@gmail.net'),
(6, 'imie_nr6', 'nazwisko_nr6', 'student_nr6@gmail.net'),
(7, 'imie_nr7', 'nazwisko_nr7', 'student_nr7@gmail.net'),
(8, 'imie_nr8', 'nazwisko_nr8', 'student_nr8@gmail.net'),
(9, 'imie_nr9', 'nazwisko_nr9', 'student_nr9@gmail.net'),
(10, 'imie_nr10', 'nazwisko_nr10', 'student_nr10@gmail.net');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subjects`
--

CREATE TABLE `subjects` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `hours_a_week` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `hours_a_week`) VALUES
(1, 'przedmiot_nr1', 2),
(2, 'przedmiot_nr2', 3),
(3, 'przedmiot_nr3', 4),
(4, 'przedmiot_nr4', 5),
(5, 'przedmiot_nr5', 6),
(6, 'przedmiot_nr6', 7),
(7, 'przedmiot_nr7', 8),
(8, 'przedmiot_nr8', 9),
(9, 'przedmiot_nr9', 10),
(10, 'przedmiot_nr10', 11);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `subjects`
--
ALTER TABLE `subjects`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
