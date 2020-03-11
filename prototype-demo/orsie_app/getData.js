//global variable to hold pop up info
let popUps = [];

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
}