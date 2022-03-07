let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let time = hours + ":" + minutes + ":" + seconds;
let current_date = date + ":" + month + ":" + year
let current_date_time = date + "" + month + "" + year + "" + hours + "" + minutes + "" + seconds;