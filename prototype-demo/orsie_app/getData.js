function getData(){
    fetch('./events.json')
    .then(data => data.json())
    .then(data => {
        let currentEventsContainer = document.querySelector('#current-events-container');
        let eventData = data.events;

        for(zone of eventData){
            currentEventsContainer.innerHTML += `
                <div class="event-box">
                    <div class="event-box-inner">
                        <h3 class="event-name">${zone.name}</h3>
                        <h4 class="event-time">${zone.time}</h4>
                        <p class="event-location">${zone.location}</p>
                        <p class="event-description">${zone.description}</p>
                    </div>
                </div>
            `
        }
    })
}