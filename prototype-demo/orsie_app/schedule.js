//function to sort the schedule by room
function scheduleSorter(location){
    //get the schedule container
    let fullScheduleContainer = document.querySelector('#full-schedule-container');

    //filter the master schedule by the location parameter
    let sortedSchedule = masterSchedule.filter(schedule => schedule.location == location);
    
    //set the schedule container to be blank
    fullScheduleContainer.innerHTML = '';

    //add a card for each event in that room
    for(schedule of sortedSchedule){
        fullScheduleContainer.innerHTML += schedule.html;
    };

    if(fullScheduleContainer.innerHTML == ''){
        fullScheduleContainer.innerHTML = "the events in this room are on-going go to the location to see for yourself!"
    }
};

//function to reset the schedule page to default
function resetSchedule(){
    let fullScheduleContainer = document.querySelector('#full-schedule-container');
    //set the schedule page to have it's default html
    fullScheduleContainer.innerHTML = fullScheduleHTML;
}