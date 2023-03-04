const result = document.getElementById('result');

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
    const daysWeek = {
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
    };

    function weeks(dayWeek) {
        return daysWeek[dayWeek]
    };

    dayOfWeekText = weeks(dayOfTheWeek);

    // Day
        const days = {
            1: '01',
            2: '02',
            3: '03',
            4: '04',
            5: '05',
            6: '06',
            7: '07',
            8: '08',
            9: '09',
        };

        function daysWithZero(withZero) {
            return days[withZero]
        };

        dayText = daysWithZero(day);

    // Mouth
        const dayMonths = {
            0: 'Janeiro',
            1: 'Fevereiro',
            2: 'Março',
            3: 'Abril',
            4: 'Maio',
            5: 'Junho',
            6: 'Julho',
            7: 'Agosto',
            8: 'Setembro',
            9: 'Outubro',
            10: 'Novembro',
            11: 'Dezembro',
        };

        function months(month) {
            return dayMonths[month]
        };

        monthText = months(month);
    
    result.innerHTML = `<h1> ${dayOfWeekText}, ${dayText} de ${monthText} de ${year} às ${hour}:${minuts} </h1>`;
    
