//global variable to hold pop up info
let popUps = [];
//global variable to hold all zone schedules
let masterSchedule = [];

function getData(){
    fetch('./events.json')
    .then(data => data.json())
    .then(data => {
        let currentEventsContainer = document.querySelector('#current-events-container');
        let eventData = data.events;
        
        for(zone of eventData){
            //add all pop ups to the global pop up array
            for(popup of zone.popUps){
                popUps.push({location: zone.location, time: popup.when, msg: popup.what});
            };


            //create schedule cards
            zone.schedule.forEach(evt => {
                if(evt.what != '' && evt.what != 'Zone Open' && evt.what != 'Zone Closed'){
                    //push zone schedule to masterSchedule
                    masterSchedule.push(
                        {html:
                        `<div class="schedule-box">
					        <div class="schedule-time">${evt.when}</div>
					        <div class="schedule-title">${evt.what}</div>
					        <div class="schedule-location">${zone.location}</div>
					        <div class="schedule-zone">${zone.name}</div>
                        </div>`,
                        //convert the time string to a full number for sorting 
                        time: `${evt.when.replace(/:/, '')}`});
                }
            });

            //create event cards
            currentEventsContainer.innerHTML += `
                <div id="zone${zone.zone}" data-mapId="${zone.mapId}" class="event-box">
                    <div class="event-box-inner">
                        <h3 class="event-name">${zone.name}</h3>
                        <h4 class="event-time">${zone.time}</h4>
                        <p class="event-location">${zone.location}</p>
                        <p class="event-description">${zone.description}</p>
                    </div>
                </div>
            `;
        }
    })
    .then(data => {
        let fullScheduleContainer = document.querySelector('#full-schedule-container');
        //sort the schedule by time;
        masterSchedule.sort((a,b) => a.time - b.time);
        // create cards for all events in the master schedule
        for(schedule of masterSchedule){
            fullScheduleContainer.innerHTML += schedule.html;
        }
    })
}