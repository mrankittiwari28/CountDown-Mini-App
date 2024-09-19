const endDate=new Date("24 Dec 2024 12:00:00").getTime();
const startDate=new Date().getTime();

let x=setInterval(function updateTimer(){

    const now =new Date().getTime();

    const distanceCovered=now-startDate;
    const distancePending=endDate-now;

    // calculate days ,hours, mins ,secs
    // 1 day=24*60*60*1000 ms

    const oneDayInMillis=(24*60*60*1000);
    const onehourInMillis=(60*60*1000);
    const oneminsInMillis=(60*1000);
    const onesecsInMillis=(1000);

    const days=Math.floor(distancePending/oneDayInMillis);

    const hrs=Math.floor((distancePending%(oneDayInMillis)/(onehourInMillis)));

    const mins=Math.floor((distancePending%(onehourInMillis)/(oneminsInMillis)));

    const secs=Math.floor((distancePending%(oneminsInMillis)/(onesecsInMillis)));
   
    // populate in UI  ------> 
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;


    const totalDistance=endDate-startDate;

    const percentageDistance=(distanceCovered/totalDistance)*100;

    document.getElementById('progress-bar').style.width=percentageDistance+"%";
    
    if(distancePending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";
    }

},1000);