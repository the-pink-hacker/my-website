function AddNavBar() {
	$("body").prepend(`
		<div class="navbar" id="navbar">
			<div class="navbar_links">
				<a href="index.html">Main</a>
				<a href="curseforge.html">CurseForge</a>
				<a href="blender.html">Blender</a>
				<a href="other.html">Other</a>
				<a href="links.html">Links</a>
			</div>
		</div>
	`);
}

$(function(){
	AddNavBar();
}); 
