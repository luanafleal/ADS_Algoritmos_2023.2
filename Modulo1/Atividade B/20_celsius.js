/**
 * F1_q20: Leia uma temperatura em °C, calcule e
 * escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
 */

import { question } from "readline-sync";

// Início
const temperatura_celsius = Number(question('Temperatura em Graus Celsius: '))

// Processamento
const temperatura_fahrenheit = (9 * temperatura_celsius + 160) / 5

// Saída
console.log(`\n${temperatura_celsius}°C equivale a ${temperatura_fahrenheit}°F`)