const newYears="11 Aug 2023";

const daysEl=document.getElementById('days');
const hourEl=document.getElementById('hours');
const minEl=document.getElementById('min');
const secEl=document.getElementById('sec');


function countDown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    const Totalseconds=(newYearsDate-currentDate)/1000;
    const days= Math.floor(Totalseconds / 3600 / 24)
    const hours= Math.floor(Totalseconds/3600)%24;
    const minutes= (Math.floor(Totalseconds/60)%24)%60;
    const seconds=Math.floor(Totalseconds)%60;
    console.log(days,hours,minutes,seconds);

    daysEl.innerHTML= days;
    hourEl.innerHTML= hours;
    minEl.innerHTML= minutes;
    secEl.innerHTML= seconds;

}
countDown();//intial countdown
setInterval(countDown,1000);