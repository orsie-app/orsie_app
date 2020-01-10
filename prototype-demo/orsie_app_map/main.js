// JavaScript Document

window.onload = function () {
	let mapTab = document.querySelector('#map-tab');
	let eventsTab = document.querySelector('#events-tab');
	let mapPage = document.querySelector('#map-page');
	mapPage.style.right = window.innerWidth + 'px';
	mapPage.style.top = window.innerHeight * 0.5 + 'px';
	let mapOpen = true;

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
			gsap.fromTo(eventsTab, {
				x: 30,
				duration: 0.2
			}, {
				x: 0,
				duration: 0.2,
				display: "block",
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


	mapTab.addEventListener("touchmove", function (event) {
		let touch = event.targetTouches[0];
		if (touch.pageX <= window.innerWidth * 0.3) {
			mapTab.style.left = (touch.pageX - 60) + 'px';
			//mapPage.style.top = window.innerHeight * 0.4 - touch.pageX / window.innerWidth * 350 + 'px';

			mapPage.style.right = window.innerWidth - touch.pageX + 10 + 'px';
			event.preventDefault();
			// calculate the amount of the screen is covered by the draggable element
			let percentCovered = (mapTab.offsetLeft) / window.innerWidth;
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
		if (mapOpen == false) {
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
					gsap.fromTo(eventsTab, {
						x: 30,
						duration: 0.2
					}, {
						x: 0,
						duration: 0.2,
						display: "block",
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
		}
	}, false, {
		passive: false
	})

	eventsTab.addEventListener("touchmove", function (event) {
		let touch = event.targetTouches[0];
		if (touch.pageX >= window.innerWidth * 0.75) {
			eventsTab.style.left = (touch.pageX - 60) + 'px';
			mapPage.style.right = window.innerWidth - touch.pageX + 'px';
			event.preventDefault();
			// calculate the amount of the screen is covered by the draggable element
			let percentCovered = (eventsTab.offsetLeft) / window.innerWidth;
			//  adjust border radius of map page accordingly
			mapPage.style.borderTopRightRadius = `${600 - percentCovered * 800}px`;
			mapPage.style.borderBottomRightRadius = `${600 - percentCovered * 800}px`;
			// fade map out quickly
			gsap.to(["#map", "#map-info"], {
				duration: 0.05,
				opacity: 0,
			})
		}
	}, false, {
		passive: false
	})

	eventsTab.addEventListener("touchend", function (event) {
		if (mapOpen == true) {
			// remove the eventsTab from the screen and reset it's location
			gsap.to(eventsTab, {
				duration: 0.01,
				right: 0,
				left: "",
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
					gsap.to(eventsTab, {
						right: 0,
						duration: 0.2
					})
				}
			});

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
		}
	})

	// original map transition below
	////////////////////////////////////////////////////
	// mapButton.addEventListener('click', function () {
	// 	if (eventsPage.style.top == '65vh') {
	// 		gsap.to(eventsPage, {
	// 			duration: 1,
	// 			top: '10vh',
	// 			ease: Power4.easeInOut
	// 		});
	// 		gsap.to("header", {
	// 			duration: 1,
	// 			top: '0vh',
	// 			ease: Power4.easeInOut
	// 		});
	// 	} else {
	// 		gsap.to(eventsPage, {
	// 			duration: 1,
	// 			top: '65vh',
	// 			ease: Power4.easeInOut
	// 		});
	// 		gsap.to("header", {
	// 			duration: 1,
	// 			top: '-10vh',
	// 			ease: Power4.easeInOut
	// 		});
	// 	}
	// });
	/////////////////////////////////////////////////////


	// mouse events for prototype demonstration on laptop

	let alternator = false;

	mapTab.addEventListener("mousedown", function (event) {
		alternator == true ? alternator = false : alternator = false;
		eventsTab.style.zIndex = -2;
		mapTab.addEventListener("mousemove", function (event) {
			if (alternator == false) {
				let touchX = event.clientX;
				if (touchX <= window.innerWidth * 0.3) {
					mapTab.style.left = (touchX - 60) + 'px';
					//mapPage.style.top = window.innerHeight * 0.4 - touch.pageX / window.innerWidth * 350 + 'px';

					mapPage.style.right = window.innerWidth - touchX + 10 + 'px';
					event.preventDefault();
					// calculate the amount of the screen is covered by the draggable element
					let percentCovered = (mapTab.offsetLeft) / window.innerWidth;
					//  adjust border radius of map page accordingly
					mapPage.style.borderTopRightRadius = `${600 - window.innerWidth  - percentCovered * 600}px`;
					mapPage.style.borderBottomRightRadius = `${600 - window.innerWidth - percentCovered * 600}px`;
					document.getElementById('fader').style.zIndex = 900;
				}

			}
		})

	}, false, {
		passive: false
	});

	document.getElementById('fader').addEventListener("mouseup", function (event) {
		eventsTab.style.zIndex = 99998;
		// if map is not open
		if (mapOpen == false) {
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
					gsap.fromTo(eventsTab, {
						x: 30,
						duration: 0.2
					}, {
						x: 0,
						duration: 0.2,
						display: "block",
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
		}
	}, false, {
		passive: false
	})
	mapTab.addEventListener("mouseup", function (event) {
		eventsTab.style.zIndex = 99998;
		// if map is not open
		if (mapOpen == false) {
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
					gsap.fromTo(eventsTab, {
						x: 30,
						duration: 0.2
					}, {
						x: 0,
						duration: 0.2,
						display: "block",
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
		}
	}, false, {
		passive: false
	})

	eventsTab.addEventListener("mousedown", function (event) {
		alternator = true;
			if (alternator = true) {
				let touchX = event.clientX;
					eventsTab.style.left = (touchX - 55) + 'px';
					mapPage.style.right = window.innerWidth - touchX + 'px';
					event.preventDefault();
					// calculate the amount of the screen is covered by the draggable element
					let percentCovered = (eventsTab.offsetLeft) / window.innerWidth;
					//  adjust border radius of map page accordingly
					mapPage.style.borderTopRightRadius = `${600 - percentCovered * 800}px`;
					mapPage.style.borderBottomRightRadius = `${600 - percentCovered * 800}px`;
					// fade map out quickly
					gsap.to(["#map", "#map-info"], {
						duration: 0.05,
						opacity: 0,
					})
			}

	}, false, {
		passive: false
	})
	eventsTab.addEventListener("click", function (event) {
		alternator = true;
			if (alternator = true) {
				let touchX = event.clientX;
					eventsTab.style.left = (touchX - 60) + 'px';
					mapPage.style.right = window.innerWidth - touchX + 'px';
					event.preventDefault();
					// calculate the amount of the screen is covered by the draggable element
					let percentCovered = (eventsTab.offsetLeft) / window.innerWidth;
					//  adjust border radius of map page accordingly
					mapPage.style.borderTopRightRadius = `${600 - percentCovered * 800}px`;
					mapPage.style.borderBottomRightRadius = `${600 - percentCovered * 800}px`;
					// fade map out quickly
					gsap.to(["#map", "#map-info"], {
						duration: 0.05,
						opacity: 0,
					})
			}

	}, false, {
		passive: false
	})

	mapPage.addEventListener("mouseup", function (event) {
		if (mapOpen == true) {
			// remove the eventsTab from the screen and reset it's location
			gsap.to(eventsTab, {
				duration: 0.01,
				right: 0,
				left: "",
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
					gsap.to(eventsTab, {
						right: 0,
						duration: 0.2
					})
				}
			});

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
		}
	})

	eventsTab.addEventListener("click", function (event) {
		if (mapOpen == true) {
			// remove the eventsTab from the screen and reset it's location
			gsap.to(eventsTab, {
				duration: 0.01,
				right: 0,
				left: "",
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
					gsap.to(eventsTab, {
						right: 0,
						duration: 0.2
					})
				}
			});

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
		}
	})

	mapTab.createEvent("touchend");


};