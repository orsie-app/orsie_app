// JavaScript Document

/*
* Description: Event registration/sign-in form for DC events
*/

// position form page logo on start (please change/fix this..)
let h = (window.innerHeight/2)-(window.innerHeight/5.5);
console.log(h);

window.onload = function () {
    // svg elements 
    let orsieLogo = document.getElementById('registration-form-logo').contentDocument;
    let dcClip = orsieLogo.getElementById('clip-path');
    let orsieClip = orsieLogo.getElementById('clip-path-2');
    let greenLine = orsieLogo.getElementById('lineGreen');
    let brownLine = orsieLogo.getElementById('lineBrown');

    function animateOrsie(){
        let tweenLogo = new TimelineMax();

        tweenLogo.from(dcClip, .55, {
            scaleY: 0,
            ease:Power1.easeOut,
        })
        tweenLogo.from(orsieClip, .75, {
            // delay:0.75,
            scaleX: 0,
            ease:Power2.easeOut,
        })
        // keep animated lines seperate for it to happen at same time after rest of logo is animated
        TweenMax.from(greenLine, .75, {
            delay:1,
            transformOrigin: "right bottom",
            scaleY: 0,
            scaleX:0,
            y:-25,
            ease: Power1.easeOut,
        })
        TweenMax.from(brownLine, .75, {
            delay:1,
            transformOrigin: "left bottom",
            scaleY: 0,
            scaleX:0,
            y:-25,
            ease:Power1.easeOut,
        })
    }

    let splashPage = document.getElementById("splash");

    // hide form page 
    let formPage = document.getElementById("registration-page");
    formPage.setAttribute("style", "display: none;");

    // animate splash onto screen, then animate form
    TweenMax.to("#splash", 0.25, {
        delay: 2.5,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: function(){
            // let splashPage = document.getElementById("splash");
            splashPage.setAttribute("style", "display: none;");
            // function to animate in form Page
            showForm();
        }
    })

    // animate form in and call to animate orsie logo
    function showForm(){
        let orsieLogo = document.getElementById('registration-form-logo')
        // change from display none in css to display grid
        formPage.setAttribute("style", "display: grid;");
        // position logo
        TweenMax.set(orsieLogo, {y:h, opacity:0})
        let t1 = new TimelineMax();
        t1.to(orsieLogo, 1.75, {
            opacity:1,
            transformOrigin: "center top",
            onComplete: animateOrsie()
        })
        t1.to(orsieLogo,1, {
            y:0,
            ease: Power2.easeInOut
        } )
        t1.staggerFrom("#registration-page .reveal", 0.25,{
            opacity:0,
            ease: Power4.easeIn
        },0.15)
    }
}

/*

To Do:
- add a "Thank you for registering" after click
- have form automatically go to next input field?

*/