function setBtnLoveOnCLickListener() {
    const man = prompt('Его имя:');
    const woman = prompt('Ее имя:');
    let result = getRandomIntNumber();

    alert(`${man} подходит к ${woman} на ${result} %!`);
}
function setBtnBMIOnCLickListener() {
    const weight = +prompt('Вес(кг):');
    const height = +prompt('Рост(см):');
    const bmi = Math.round(weight / (Math.pow(height / 100, 2)));
    let result = "";

    switch(true) {
        case bmi <= 18.5:
            result = "Недостаточный вес";
            break;
        case (bmi > 18.5 &&  bmi <= 25):
            result = "Нормальный вес";
            break;
        case (bmi > 25 &&  bmi <= 30):
            result = "У вас излишек веса";
            break;
        case bmi > 30:
            result = "Ожирение";
            break;
        default:
            result = "-"
            break;
    }

    alert(`ИМТ: ${bmi} \nРезультат: ${result}`);
}
function setBtnYearOnCLickListener() {
    const year = +prompt('Год:');
    
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        alert(`${year} - Високосный год`);
    } else {
        alert(`${year} - Не является високосным`);
    }
}
function setBtnDinnerOnCLickListener() {
    const count = +prompt('Кол-во человек:');
    let mems = [];
    let mem = "";

    for (let i = 0; i < count; i++) {
        mem = prompt('Имя:');
        mems[i] = mem;
    }

    alert("Ужин оплачивает " + mems[Math.floor(Math.random() * mems.length)]);
}
function getRandomIntNumber(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}