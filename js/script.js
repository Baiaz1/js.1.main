let question = prompt("Введите дату рождения");
let year = 2022;
let age = year - question;

if(age<0){
    alert("not born");
}else if(age<30){
    alert("young");
}else if(age<60){
    alert("middle");
}else if(age>60){
    alert("old");
};