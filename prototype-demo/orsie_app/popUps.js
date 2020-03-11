//add the pop up to the news ticker
function displayPopUps(){
    //get the date
    let date = new Date();
    //the time in a 24hr string format
    let currentTime = `${date.getHours()}:${date.getMinutes()}`;

    //check every pop up
    for(popup of popUps){
        //if the pop up time matches the current time
        if(popup.time == currentTime){
            //change the news ticker content to the new pop up 
            document.querySelector('#newsTicker').innerText = `${popup.location}: ${popup.msg}`;
        };
    };
};

//run the displayPopUps function every minute
setInterval(displayPopUps, 60000);

//function to clear the news ticker ... might not be necessary, but this is the code for it 
function clearPopUps(){
    document.querySelector('#newsTicker').innerText = ``;
};