// SORT

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort(); 

const ascSort = prices.slice().sort((a, b) => a - b); // sorting from smallest to largest 

const decSort = prices.slice().sort((a, b) => b - a); // sorting from largest to smallest 
