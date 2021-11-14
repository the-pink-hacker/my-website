function AddNavBar() {
	$("body").prepend(`
		<div class="navbar" id="navbar">
			<div class="navbar_links">
				<a href="/index.html">Main</a>
				<div class="dropdown_container">
					<a class="dropdown" href="/projects.html">Projects</a>
					<div class="dropdown_content">
						<a href="/projects/classic_3d.html">Classic 3D</a>
						<a href="/projects/classic_3d_lite.html">Classic 3D - Lite</a>
						<a href="/projects/classic_3d_logs.html">Classic 3D - Logs</a>
						<a href="/projects/classic_3d_mod.html">Classic 3D - Mod Support</a>
						<hr>
						<a href="/projects/items_plus.html">Items+</a>
						<a href="/projects/no_armor.html">No Armor</a>
					</div>
				</div>
				<a href="/blender.html">Blender</a>
				<a href="/other.html">Other</a>
				<a href="/links.html">Links</a>
			</div>
		</div>
	`);
}

$(function(){
	AddNavBar();
}); 
