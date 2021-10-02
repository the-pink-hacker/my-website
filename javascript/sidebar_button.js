// After page load
$(function() {
    CheckSidebar();

	document.getElementById("sidebar-button").addEventListener("click", function() {
		CheckSidebar();
	});

	window.addEventListener("resize", function() {
		CheckSidebar();
	});
});

// Updates the sidebar
function CheckSidebar() {
	var button = $("#sidebar-button");
	var sidebar = $("#sidebar");
	var links = $("#sidebar-links");

	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

	if (vw <= 700) {
		if (button.is(":checked")) {
			links.css("display", "initial");
			sidebar.css("width", "30vw");
		}
		else if (!button.is(":checked")) {
			links.css("display", "none");
			sidebar.css("width", "10vw");
		}
	}
	else {
		links.css("display", "");
		sidebar.css("width", "");
	}
}
