function updateView() {
	model.app.innerHTML = /*HTML*/ `
		<div class="shell">
			<header class="header">${header()}</header>
			<main id="main" class="card">${createPage(model.currentPage)}</main>
		</div>
	`;
}

function createPage(page) {
	if (page === "home") return homeView();

	return /*HTML*/ `
		<section class="content">
			<h2>404</h2>
			<p>Page not found.</p>
		</section>
	`;
}

updateView();
