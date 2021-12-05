function AddNavBar() {
	$("body").prepend(`
		<div class="navbar" id="navbar">
			<div class="navbar_links">
				<a href="/my-website/index.html">Main</a>
				<div class="dropdown_container">
					<a class="dropdown" href="/my-website/projects.html">Projects</a>
					<div class="dropdown_content">
						<a href="/my-website/projects/classic_3d.html">Classic 3D</a>
						<a href="/my-website/projects/classic_3d_lite.html">Classic 3D - Lite</a>
						<a href="/my-website/projects/classic_3d_logs.html">Classic 3D - Logs</a>
						<a href="/my-website/projects/classic_3d_mod.html">Classic 3D - Mod Support</a>
						<hr>
						<a href="/my-website/projects/items_plus.html">Items+</a>
						<a href="/my-website/projects/no_armor.html">No Armor</a>
					</div>
				</div>
				<a href="/my-website/blender.html">Blender</a>
				<a href="/my-website/other.html">Other</a>
				<a href="/my-website/links.html">Links</a>
			</div>
		</div>
	`);
}

$(function(){
	AddNavBar();
}); 
