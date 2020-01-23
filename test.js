window.addEventListener("load", () => {

	const insertForm = document.querySelector("#insert-form");
	const searchForm = document.querySelector("#search-form");
	const searchDataListDiv = document.querySelector("#search-data-list");
	const loadButton = document.querySelector("#load-button");
	const allDataListDiv = document.querySelector("#all-data-list");

	insertForm.addEventListener("submit", (e) => {
		console.log("submitting");
		e.preventDefault();

		let url = "https://services.mullasuleman.com/insert_data.php";
		fetch(url, {
				body: new FormData(e.target),
				method: "POST"
			})
			.then(response => response.json())
			.then(message => {
				console.log(message);
			});
	});

	searchForm.addEventListener("submit", (e) => {
		console.log("searching");
		e.preventDefault();

		let url = "https://services.mullasuleman.com/search.php";
		fetch(url, {
				body: new FormData(e.target),
				method: "post"
			})
			.then(response => response.json())
			.then(contents => {
				console.log(contents);
				let displayData = "";
				if (contents) {
					contents.forEach(human => {
						displayData += `<p>${human.id}: ${human.a_name}</p>`;
					});
				} else {
					displayData = "<p>No data found</p>";
				}
				searchDataListDiv.innerHTML = displayData;
			});
	});

	loadButton.addEventListener("click", () => {
		let url = "https://services.mullasuleman.com/all_data.php";
		fetch(url)
			.then(response => response.json())
			.then(contents => {
				console.log(contents)
				let displayData = "";
				contents.forEach(human => {
					displayData += `<p>${human.id}: ${human.a_name}</p>`;
				});
				allDataListDiv.innerHTML = displayData;
			});
	});
});