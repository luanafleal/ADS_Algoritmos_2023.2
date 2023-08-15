/**
 * F1_q21: Leia uma temperatura em °F,
 * calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
 */

import { question } from "readline-sync";

// Início
const temperatura_fahrenheit = Number(question('Temperatura em Fahrenheit: '))

// Processamento
const temperatura_celsius = (5 * temperatura_fahrenheit - 160) / 9

// Saída
console.log(`\n${temperatura_fahrenheit}°F equivale a ${temperatura_celsius}°C`)