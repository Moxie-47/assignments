function CurrentTime(){
    console.clear()
    const date = new Date() ;
    let hour = date.getHours().toString().padStart(2,0) ;
    let meridiem = "AM"
    if(hour % 12 >0){
        meridiem = "PM"
        hour = hour%12 ;
        // hour = hour< 10 ? '0'+hour:hour
    }
    let minutes = date.getMinutes().toString().padStart(2,'0') ;
    let seconds = date.getSeconds().toString().padStart(2,'0');
    // minutes = minutes<10  ? '0' + minutes : minutes
    // seconds = seconds<10  ? '0' + seconds : seconds
    
    console.log(`${hour}:${minutes}:${seconds} ${meridiem}`);
}

setInterval(CurrentTime,1000)
