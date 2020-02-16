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
    const submitButton = this.document.querySelector("#submit");
    const spinner = document.querySelector("#spinner");
    const registerText = document.querySelector("#register");

    // position form page logo on start
    let h = (formPage.offsetHeight / 2) - (formPage.offsetHeight / 5.5);

    // If user has scrolled down, resets the scroll to the top
    TweenMax.to("html", 0.5, {
        scrollTo: 0,
        ease: Sine.easeOut
    });

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
        TweenMax.from(greenLine, .50, {
            delay: 1,
            transformOrigin: "left top",
            scaleX: 0,
            scaleY: 0,
            ease: Ease.easeOut
        })
        TweenMax.from(brownLine, .50, {
            delay: 1,
            transformOrigin: "right top",
            scaleX: 0,
            scaleY: 0,
            ease: Ease.easeOut
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

    // the event listener on input fields for automatic scroll
    inputFields.forEach(field => {
        field.addEventListener("focus", function () {
            // preventing the scroll on iphones (makes it really "jumpy")
            if (!(navigator.vendor === "Apple Computer, Inc.")) {
                TweenMax.to("html", 0.2, {
                    scrollTo: "+=60px",
                    ease: Sine.easeOut
                });
            }
        });
    })

    // event listener to handel the form submit and send data
    insertForm.addEventListener("submit", (e) => {
        console.log("submitting");
        e.preventDefault();

        // disable button, hide text, show spinner
        submitButton.setAttribute("disabled", "disabled");
        registerText.style.display = "none";
        spinner.style.display = "block";

        // sending/fetching data from the server
        let url = "https://services.mullasuleman.com/insert_data.php";
        fetch(url, {
                body: new FormData(e.target),
                method: "post"
            })
            .then(response => response.json())
            .then(message => {
                // code if connection is successful
                console.log(message);
                if (message.id == 0) {
                    // show success message if data inserted
                    registerText.innerHTML = `Awesome, ${inputFields[0].value}! <br>See you at the event.`;
                    spinner.style.display = "none";
                    registerText.style.display = "block";

                } else if(message.id == 3) {
                    // show failure message if data insertion fails
                    // change color to red
                    TweenMax.to(submitButton, 0.5, {
                        backgroundColor: "#D33222",
                        onComplete: function () {
                            // spinner.style.display = "none";
                            registerText.innerHTML = `You have already registered for this event.`;
                            spinner.style.display = "none";
                            registerText.style.display = "block";
                        }
                    })
                    // enable button, change text back to register, change color back to green
                    // executed after 3 seconds
                    TweenMax.to(submitButton, 2, {
                        delay: 3,
                        backgroundColor: "#0b8261",
                        onComplete: function () {
                            registerText.innerHTML = `Register`;
                            submitButton.removeAttribute("disabled");
                        }
                    })
                }else {
                    // show failure message if data insertion fails
                    // change color to red
                    TweenMax.to(submitButton, 0.5, {
                        backgroundColor: "#D33222",
                        onComplete: function () {
                            // spinner.style.display = "none";
                            registerText.innerHTML = `There was a problem. <br>Please try again.`;
                            spinner.style.display = "none";
                            registerText.style.display = "block";
                        }
                    })
                    // enable button, change text back to register, change color back to green
                    // executed after 3 seconds
                    TweenMax.to(submitButton, 2, {
                        delay: 3,
                        backgroundColor: "#0b8261",
                        onComplete: function () {
                            registerText.innerHTML = `Register`;
                            submitButton.removeAttribute("disabled");
                        }
                    })
                }
            })
            .catch(error => {
                // code to execute if internet fails
                console.log(error);
                // show failure message
                // change color to red
                TweenMax.to(submitButton, 0.5, {
                    backgroundColor: "#D33222",
                    onComplete: function () {
                        // spinner.style.display = "none";
                        registerText.innerHTML = `Please check your connection and try again.`;
                        spinner.style.display = "none";
                        registerText.style.display = "block";
                    }
                })

                // enable button, change text back to register, change color back to green
                // executed after 3 seconds
                TweenMax.to(submitButton, 2, {
                    delay: 3,
                    backgroundColor: "#0b8261",
                    onComplete: function () {
                        registerText.innerHTML = `Register`;
                        submitButton.removeAttribute("disabled");
                    }
                })
            });
    });
}