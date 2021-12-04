
var isim=prompt("Lütfen isim giriniz;");
document.getElementById("isim").innerHTML=isim;

function showTime(){

var time = new Date();

var h=time.getHours();
var min=time.getMinutes();
var s=time.getSeconds();
var date=h+":"+min + ":"+s+ " Cumartesi ";



document.getElementById("tarih").innerHTML= date;


setTimeout(showTime,1000);

}
showTime();