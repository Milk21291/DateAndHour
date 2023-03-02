const resultado = document.getElementById('resultado');

const date = new Date();
const dayOfTheWeek = date.getDay();
let dayOfWeekText = dayOfTheWeek;
const day = date.getDate();
let dayText = day
const month = date.getMonth();
let monthText = month;
const year = date.getFullYear();
const hour = date.getHours();
const minuts = date.getMinutes();

// Day of the week
if(dayOfTheWeek  === 0) {
    dayOfWeekText = 'Domingo';
    } else if(dayOfTheWeek === 1) {
        dayOfWeekText = 'Segunda-feira';
    } else if(dayOfTheWeek === 2) {
        dayOfWeekText = 'Terça-feira';
    } else if(dayOfTheWeek === 3) {
        dayOfWeekText = 'Quarta-feira';
    } else if(dayOfTheWeek === 4) {
        dayOfWeekText = 'Quinta-feira';
    } else if(dayOfTheWeek === 5) {
        dayOfWeekText = 'Sexta-feira';
    } else if(dayOfTheWeek === 6) {
        dayOfWeekText = 'Sábado';
    };

    // Day
    if(day  === 1) {
        dayText = '01';
        } else if(day === 2) {
            dayText = '02';
        } else if(day === 3) {
            dayText = '03';
        } else if(day === 4) {
            dayText = '04';
        } else if(day === 5) {
            dayText = '05';
        } else if(day === 6) {
            dayText = '06';
        } else if(day === 7) {
            dayText = '07';
        } else if(day === 8) {
            dayText = '08';
        } else if(day === 9) {
            dayText = '09';
        };

    // Mouth
    if(month === 0) {
        monthText = 'Janeiro';
        } else if(month === 1) {
            monthText = 'Fevereiro';
        } else if(month === 2) {
            monthText = 'Março';
        } else if(month === 3) {
            monthText = 'Abril';
        } else if(month === 4) {
            monthText = 'Maio';
        } else if(month === 5) {
            monthText = 'Junho';
        } else if(month === 6) {
            monthText = 'Julho';
        } else if(month === 7) {
            monthText = 'Agosto';
        } else if(month === 8) {
            monthText = 'Setembro';
        } else if(month === 9) {
            monthText = 'Outubro';
        } else if(month === 10) {
            monthText = 'Novembro';
        } else if(month === 11) {
            monthText = 'Dezembro';
        };
    
    resultado.innerHTML = `<h1> ${dayOfWeekText}, ${dayText} de ${monthText} de ${year} às ${hour}:${minuts} </h1>`;
    