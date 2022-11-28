
function n2(n){return String(n).padStart(2,'0');}

var m = new Date();
var dateString = m.getFullYear() +"年"+ n2(m.getMonth()+1) +"月"+ n2(m.getDate()) + "日 " + n2(m.getHours()) + ":" + n2(m.getMinutes()) + ":" + n2(m.getSeconds());
document.body.innerHTML = document.body.innerHTML.replaceAll('PLACEHOLDER_DATETIME', dateString);

var aDay = 24*60*60*1000; var m2 = new Date(Date.now() - aDay*0.75);
var pcrDateString = n2(m2.getMonth()+1) +"月"+ n2(m2.getDate()) + "日";
document.body.innerHTML = document.body.innerHTML.replaceAll('PLACEHOLDER_PCRDATE', pcrDateString);

var loc = prompt('请输入地址','劳动路213号');
document.body.innerHTML = document.body.innerHTML.replaceAll('PLACEHOLDER_ADDR', loc);


