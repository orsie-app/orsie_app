// JavaScript Document

/*
* Description: Event registration/sign-in form for DC events
*/


window.onload = function () {
    
    // page elements
    let splashPage = document.querySelector('#splash');
    let formPage = document.querySelector('#registration-page');
    let orsieLogo = document.querySelector('#registration-form-logo');
    
    // svg elements
    let orsieLogoSVG = orsieLogo.contentDocument;
    let dcClip = orsieLogoSVG.querySelector('#clip-path');
    let orsieClip = orsieLogoSVG.querySelector('#clip-path-2');
    let greenLine = orsieLogoSVG.querySelector('#lineGreen');
    let brownLine = orsieLogoSVG.querySelector('#lineBrown');
    
    // form elements
    const insertForm = document.querySelector("#registration-form");
    const inputFields = document.querySelectorAll("input");
    
    // position form page logo on start
    let h = (formPage.offsetHeight / 2) - (formPage.offsetHeight / 5.5);
    console.log(h);
    
    
    // animate splash onto screen, then animate form
    TweenMax.to(splashPage, 0.5, {
        delay: 2.5,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: function () {
            splashPage.setAttribute("style", "display: none;");
            // function to animate in form Page
            showForm();
        }
    })

    // function to animate the ORSIE logo
    function animateOrsie() {
        let tweenLogo = new TimelineMax();

        tweenLogo.from(dcClip, .55, {
            scaleY: 0,
            ease: Power1.easeOut,
        })
        tweenLogo.from(orsieClip, .75, {
            // delay:0.75,
            scaleX: 0,
            ease: Power2.easeOut,
        })
        // keep animated lines seperate for it to happen at same time after rest of logo is animated
        TweenMax.from(greenLine, .75, {
            delay: 1,
            transformOrigin: "right bottom",
            scaleY: 0,
            scaleX: 0,
            y: -25,
            ease: Power1.easeOut
        })
        TweenMax.from(brownLine, .75, {
            delay: 1,
            transformOrigin: "left bottom",
            scaleY: 0,
            scaleX: 0,
            y: -25,
            ease: Power1.easeOut
        })
    }


    // animate form in and call to animate orsie logo
    function showForm() {
        // change from display none in css to display grid
        TweenMax.to(formPage, 1, {
            opacity: 1
        });
        // position logo
        TweenMax.set(orsieLogo, {
            y: h,
            opacity: 0
        })
        let t1 = new TimelineMax();
        t1.to(orsieLogo, 1.75, {
            opacity: 1,
            transformOrigin: "center top",
            onComplete: animateOrsie()
        })
        t1.to(orsieLogo, 1, {
            y: 0,
            ease: Power2.easeInOut
        })
        t1.staggerFrom("#registration-page .reveal", 0.25, {
            opacity: 0,
            ease: Power4.easeIn
        }, 0.15)
    }

/*

To Do:
- add a "Thank you for registering" after click
- have form automatically go to next input field?

*/

    inputFields.forEach(field => {
        field.addEventListener("focus", function () {
            TweenMax.to(".container", 0.2, {
                scrollTo: "+=60px"
            });
        });
    })

    // event listener to handel the form submit and send data
    insertForm.addEventListener("submit", (e) => {
		console.log("submitting");
		e.preventDefault();

		let url = "https://services.mullasuleman.com/insert_data.php";
		fetch(url, {
				body: new FormData(e.target),
				method: "post"
			})
			.then(response => response.json())
			.then(message => {
                console.log(message);
                if (message.id == 0)
					alert (`Awesome, ${inputFields[0].value}! See you at the event!`);
			});
	});
}
