function AddNavBar() {
	$("body").prepend(`
		<div class="navbar" id="navbar">
			<div class="navbar_links">
				<a href="index.html">Main</a>
				<a href="curseforge.html">CurseForge</a>
				<a href="blender.html">Blender</a>
				<a href="other.html">Other</a>
				<a href="links.html">Links</a>
				<div>
					<div class="dropdown">Projects</div>
					<div class="dropdown_content">
						<a href="">Classic 3D</a>
						<a href="">Classic 3D - Lite</a>
						<a href="">Classic 3D - Logs</a>
						<a href="">Classic 3D - Mod Support</a>
						<hr>
						<a href="">Items+</a>
						<a href="">No Armor</a>
					</div>
				</div>
			</div>
		</div>
	`);
}

$(function(){
	AddNavBar();
}); 
