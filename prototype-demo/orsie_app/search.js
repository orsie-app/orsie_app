// search page elements
const searchPageInstruction = document.querySelector("#search-page #instruction");
const searchForm = document.querySelector("#search-form");
const searchResults = document.querySelector("#search-results");
const signInButton = document.querySelector("#sign-in-button");

// variables to store sign in info
let idClicked = "";
let nameToDisplay = "";


/*****************  SEARCH PAGE SCRIPTS  *********************/

// function to update display data
function updateDisplayData(displayData) {
	searchResults.innerHTML = displayData;
}

// function to show a spinner whenever necessary 
function showSpinner() {
	let spinner = `
			<div class="result">
				<div id="spinner-box">
					<span id="spinner"></span>
				</div>
			</div>`;
	updateDisplayData(spinner);
}

// event handler to handle when the form is submitted
searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let displayMsg = "";

	// resetting sign in variables
	idClicked = "";
	nameToDisplay = "";
	signInButton.style.display = "none";
	signInButton.setAttribute("disabled", "1");

	// checking if the search field is empty or not
	if (searchForm.firstElementChild.value) {
		// if text entered
		let searchFormData = new FormData(e.target);
		showSpinner();
		search(searchFormData);
	} else {
		// if search text not entered
		displayMsg = `
				<div class="result" id="error">
					<p>Please enter your name or email to search.</p>
				</div>`;
		updateDisplayData(displayMsg);
	}
});

// function to handle search and fetch data
function search(searchData) {
	// set service URL
	let url = "https://services.mullasuleman.com/search.php";
	let displayMsg = "";

	// fetching data from the database
	fetch(url, {
			body: searchData,
			method: "post"
		})
		.then(response => response.json())
		.then(contents => {
			// when fetch data complete
			console.log(contents);
			displayMsg = "";
			// set the names list if any data found
			if (contents) {
				contents.forEach(guest => {
					displayMsg += `
						<div class="result" data-id="${guest.id}">
							<h3>${guest.a_name}</h3>
							<p>${guest.organization_name ? guest.organization_name : ""}</p>
							<p>${guest.guest_type ? guest.guest_type : ""}</p>
						</div>`;
				});
				signInButton.style.display = "block";
			} else {
				// error to show if no names are found
				// also shows link to registration page
				// TODO: Update the registration page link
				displayMsg = `
					<div class="result" id="error">
						<p>No results found. Make sure you entered your name correctly. If you did not register for the event, you can register now.</p>
					</div>
					<div class="result" id="register">
						<a href="../registration" target="blank">Register Here</a>
					</div>
					`;
			}
			updateDisplayData(displayMsg);
		})
		.catch(error => {
			// error to show when search text not entered
			displayMsg = `
				<div class="result" id="error">
					<p>Please check your connection and try again.</p>
				</div>`;
			updateDisplayData(displayMsg);
		});
}

// handling name list click event
// adding event listener on the parent div because children divs are dynamically generated
searchResults.addEventListener("click", function (e) {
	let elementClicked;
	// if result div is clicked
	if (e.target.matches(".result")) {
		elementClicked = e.target;
	} else if (e.target.matches(".result *")) {
		// else if any of the inside elements are clicked
		elementClicked = e.target.parentNode;
	}

	// removing styles from selected element when other name is picked
	Array.from(searchResults.children).forEach(result => {
		result.classList.remove("selected");
	});

	// handler to sign users in ONLY if the proper element is clicked
	if (elementClicked) {
		// setting values for signing in
		idClicked = elementClicked.getAttribute("data-id");
		nameToDisplay = elementClicked.firstElementChild.innerText;

		// animating the name clicked
		elementClicked.classList.add("selected");
		signInButton.removeAttribute("disabled");
	}
});

signInButton.addEventListener("click", function () {
	// sign the user in when sign in is clicked
	showSpinner();
	signIn(idClicked, nameToDisplay);
})

// function to handle sign in and send data
// and update the div as needed
function signIn(id, name) {
	let displayMsg = ""

	// setting form data to send for signing in
	let formData = new FormData();
	formData.append('id', id);
	formData.append('event_name', document.querySelector("#event_name").value);
	let url = "https://services.mullasuleman.com/sign_in.php";
	// fetching data from the database
	fetch(url, {
			body: formData,
			method: "post"
		})
		.then(response => response.json())
		.then(message => {
			// when fetch data complete
			console.log(message);
			displayMsg = "";
			// show welcome message if sign in successful
			if (message.id == 0) {
				displayMsg += `
					<div class="result" id="success">
						<p>Welcome, ${name}!</p>
						<p>Enjoy Research Day 2020!</p>
					</div>`;

				// disabling form and sign in buttons
				signInButton.style.display = "none";
				signInButton.setAttribute("disabled", "1");
				searchForm.style.display = "none";

				// updating instruction text on sign in page
				searchPageInstruction.innerText = "You have checked in!"
				gsap.to("#search-page", {
					delay: 1,
					duration: 0.5,
					opacity: 0,
				});
				gsap.to("#search-page", {
					delay: 1.5,
					display: "none"
				})

			} else {
				// display message to show if could not sign in because of PHP error
				displayMsg = `
					<div class="result" id="error">
						<p>There was a problem signing in. Please try again</p>
					</div>
					`;
			}
			updateDisplayData(displayMsg);
		}).catch(error => {
			console.log(error);

			// error message to show if internet fails
			displayMsg += `
				<div class="result" id="error">
				<p>Check your connection and try again.</p>
				</div>`;
			updateDisplayData(displayMsg);
		});
}