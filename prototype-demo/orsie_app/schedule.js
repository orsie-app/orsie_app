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

    //adjust location specific schedule styles
    let scheduleBoxes = Array.from(document.querySelectorAll('.schedule-box'));

    for(box of scheduleBoxes){
        //switch the box from grid to flex
        box.style.height = '50px';
        box.style.display = 'flex';
        box.style.justifyContent = 'flex-start';
        box.style.alignItems = 'center';
        //hide unnecessary items
        box.querySelector('.schedule-zone').style.display = 'none';
        box.querySelector('.schedule-location').style.display = 'none';
        //make time right-side up
        box.querySelector('.schedule-time').style.transform = 'rotate(0deg)';
        box.querySelector('.schedule-time').style.writingMode = 'horizontal-tb';
        //resize remaining elements
        box.querySelector('.schedule-time').style.height = '80%';
        box.querySelector('.schedule-time').style.minWidth = '30%';
        box.querySelector('.schedule-title').style.height = '80%';
        box.querySelector('.schedule-title').style.minWidth = '70%';
        
        //switch title from div to marquee
        let originalTitle = box.querySelector('.schedule-title');
        let scrollingTitle = document.createElement('marquee');
        scrollingTitle.innerHTML = originalTitle.innerHTML;
        box.replaceChild(scrollingTitle, originalTitle);
    }

    //add in room info block above the schedule cards
    let newElement = document.createElement('div');
    newElement.classList.add('info-box');
    let infoBlockInner = 
            `<div class="info-box-inner">
                <h3 class="info-name">${scheduleBoxes[0].querySelector('.schedule-zone').innerText}</h3>
                <p class="info-location">${scheduleBoxes[0].querySelector('.schedule-location').innerText}</p>
            </div>`
    newElement.innerHTML = infoBlockInner;
        

    if(fullScheduleContainer.innerHTML == ''){
        fullScheduleContainer.innerHTML = "the events in this room are on-going go to the location to see for yourself!"
    }else{
        fullScheduleContainer.insertBefore(newElement, scheduleBoxes[0]);
    }
};

//function to reset the schedule page to default
function resetSchedule(){
    let fullScheduleContainer = document.querySelector('#full-schedule-container');
    //set the schedule page to have it's default html
    fullScheduleContainer.innerHTML = fullScheduleHTML;
}