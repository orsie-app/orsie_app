// JavaScript Document
window.onload = function () {
	let mapTab = document.querySelector('#map-tab');
	let eventsButton = document.querySelector('#events-button');
	let mapPage = document.querySelector('#map-page');
	mapPage.style.right = window.innerWidth + 'px';
	mapPage.style.top = window.innerHeight * 0.5 + 'px';
	let mapOpen = false;

	mapTab.addEventListener("touchmove", function (event) {
		let touch = event.targetTouches[0];
		if (touch.pageX <= window.innerWidth * 0.8) {
			mapTab.style.left = (touch.pageX - 70) + 'px';
			mapTab.style.top = (touch.pageY - 10) + 'px';
			mapPage.style.right = window.innerWidth - touch.pageX + 10 + 'px';
			event.preventDefault();
			// calculate the amount of the screen is covered by the draggable element
			let percentCovered = (mapTab.offsetLeft*0.5) / window.innerWidth;
			// move map page pull out with map tab
			mapPage.style.top = (touch.pageY - 180) + 'px';
			//  adjust border radius of map page accordingly
			mapPage.style.borderTopRightRadius = `${600 - window.innerWidth  - percentCovered * 600}px`;
			mapPage.style.borderBottomRightRadius = `${600 - window.innerWidth - percentCovered * 600}px`;
			document.getElementById('fader').style.zIndex = 900;
		}
	}, false, {
		passive: false
	});

	mapTab.addEventListener("touchend", function (event) {
		// if map is not open
		if (mapOpen == false && mapTab.offsetLeft > window.innerWidth*0.30) {
			//move the mapTab for continuity of animation
			gsap.to(mapTab, {
				duration: 0.5,
				left: window.innerWidth - 50,
				ease: "Power3.Out",
				onComplete: function () {
					gsap.to(mapTab, {
						duration: 0.1,
						left: -40,
					})
				}
			});
			// fill the screen with the map page
			gsap.to(mapPage, {
				duration: 0.33,
				right: 0,
				top: 0,
				height: window.innerHeight,
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				ease: "Power3.Out",
				onComplete: function () {
					// animate the events tab into the screen
					gsap.fromTo(eventsButton, {
						x: 30,
						duration: 0.2
					}, {
						x: 0,
						duration: 0.2,
						opacity: 1,
					});
					// fade the actual map in
					gsap.to(["#map", "#map-info"], {
						duration: 0.2,
						opacity: 1,
					})
				}
			});
			// map is now open
			mapOpen = true;
			event.preventDefault();
			// set fader div to 0.9 alpha black
			gsap.to("#fader", {
				duration: 0.5,
				backgroundColor: "rgba(0,0,0,0.9)",
				ease: "Power3.InOut",
			})
		}else{
		// remove the map page from the screen
		gsap.to(mapPage, {
			duration: 0.33,
			right: window.innerWidth,
			height: window.innerHeight * 0.6,
			borderTopRightRadius: 600,
			borderBottomRightRadius: 600,
			ease: "Power3.Out",
		});

		//move mapTab along with the map page
		gsap.to(mapTab, {
			duration: 0.33,
			left: -40,
		})
			
		}
	}, false, {
		passive: false
	})

	//click function to cover people tapping the button
	mapTab.addEventListener("click", function (event) {
		//move the mapTab for continuity of animation
		gsap.to(mapTab, {
			duration: 0.5,
			left: window.innerWidth - 50,
			ease: "Power3.Out",
			onComplete: function () {
				gsap.to(mapTab, {
					duration: 0.1,
					left: -40,
				})
			}
		});
		// fill the screen with the map page
		gsap.to(mapPage, {
			duration: 0.33,
			right: 0,
			top: 0,
			height: window.innerHeight,
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			ease: "Power3.Out",
			onComplete: function () {
				// animate the events tab into the screen
				gsap.fromTo(eventsButton, {
					x: 30,
					duration: 0.2
				}, {
					x: 0,
					duration: 0.2,
					opacity: 1,
				});
				// fade the actual map in
				gsap.to(["#map", "#map-info"], {
					duration: 0.2,
					opacity: 1,
				})
			}
		});
		// map is now open
		mapOpen = true;
		event.preventDefault();
		// set fader div to 0.9 alpha black
		gsap.to("#fader", {
			duration: 0.5,
			backgroundColor: "rgba(0,0,0,0.9)",
			ease: "Power3.InOut",
		})
	}, false, {
		passive: false
	})
	//click function to close the map
	eventsButton.addEventListener("click", function (event) {
		// remove the eventsButton from the screen and reset it's location
		gsap.to(eventsButton, {
			duration: 0.01,
			right: 0,
			opacity: 0,
		});
		// remove the map page from the screen
		gsap.to(mapPage, {
			duration: 0.33,
			right: window.innerWidth,
			top: window.innerHeight * 0.5,
			height: window.innerHeight * 0.6,
			borderTopRightRadius: 600,
			borderBottomRightRadius: 600,
			ease: "Power3.Out",
			onComplete: function () {
				gsap.to(eventsButton, {
					right: 0,
					duration: 0.2
				})
			}
		});
		gsap.to(["#map", "#map-info"], {
			duration: 0.05,
			opacity: 0,
		})
		// map is now closed
		mapOpen = false;
		event.preventDefault();
		// set fader div to 0.9 alpha black and put fader below other elements
		gsap.to("#fader", {
			duration: 0.5,
			backgroundColor: "rgba(0,0,0,0)",
			ease: "Power3.InOut",
			onComplete: function () {
				document.getElementById('fader').style.zIndex = -1;
			}
		})
	})
};