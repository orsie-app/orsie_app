document.querySelector('#eventsNav').addEventListener('click', (e) => {
    // update to animate or whatever
    document.querySelector('#current-events-container').style.display = "block";
    document.querySelector('#full-schedule-container').style.display = "none";
});

document.querySelector('#scheduleNav').addEventListener('click', (e) => {
    // update to animate or whatever
    document.querySelector('#current-events-container').style.display = "none";
    document.querySelector('#full-schedule-container').style.display = "block";
});