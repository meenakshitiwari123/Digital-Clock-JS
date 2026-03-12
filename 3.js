function updateClock()
{
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
hours=hours<10? '0' + hours:hours;
minutes=minutes<10?
'0'+ minutes:minutes;
seconds=seconds<10?
 '0' + seconds:seconds ;
 const timestring=`${hours}:${minutes}:${seconds}`;
 document.getElementById('clock').innerHTML=timestring;
 const options={
    weekday:'long',year:'numeric',month:'long',day:'numeric'};
const dateString=now.toLocaleDateString(undefined,options);
document.getElementById('date').innerHTML=dateString;
}
setInterval(updateClock,1000);
updateClock();