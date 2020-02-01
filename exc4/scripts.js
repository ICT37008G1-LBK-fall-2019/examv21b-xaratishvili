let text = "jam123churchel123456789changala123shvili123456789";

var res = text.replace(/([0-9]{6})([0-9]{3})/g, '$1###');

console.log(text);
console.log(res);


