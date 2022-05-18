//https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
				if (this.status == 200) {elmnt.innerHTML = this.responseText;}
				if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
				/*remove the attribute, and call this function once more:*/
				elmnt.removeAttribute("w3-include-html");
				includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
	/* ==============================================================
	/* MENU HIDE / SHOW
	/* ============================================================== */
		var menu = document.getElementById('menu-principal')
		var menuLogo = document.getElementById('navegacion-logo')
		var prevScrollpos = window.pageYOffset
		// hide / show menu scroll
		window.onscroll = function() {
			showHideLogo()
			if (window.pageYOffset > 0) {
				menu.classList.add('scrolled-alternate')
			} else {
				menu.classList.remove('scrolled-alternate')
			}
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				menu.classList.remove('scrolled-down')
				menu.classList.add('scrolled-up')
			} else {
				menu.classList.remove('scrolled-up')
				menu.classList.add('scrolled-down')
			}
			prevScrollpos = currentScrollPos
		}
		window.addEventListener('resize', showHideLogo)
		// hide show logo
		function showHideLogo() {
			console.log('showHideLogo')
			//desktop
			if(document.body.classList.contains('inicio') && window.pageYOffset > 0 && window.innerWidth > 576) {
				console.log('inicio:offset>0:width>576')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo_blanco_azul.svg'
				menuLogo.classList.remove('opacity-0')
				menuLogo.classList.add('opacity-1')
			}
			if(document.body.classList.contains('inicio') && window.pageYOffset <= 0 && window.innerWidth > 576) {
				menuLogo.classList.remove('opacity-1')
				menuLogo.classList.add('opacity-0')
			}
			//movil
			if( (document.body.classList.contains('inicio')) && (window.pageYOffset <= 0) && (window.innerWidth < 576) ) {
				console.log('inicio:offset<0:width<577')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo.svg'
				menuLogo.classList.remove('opacity-0')
			}
			if(document.body.classList.contains('inicio') && window.pageYOffset > 0 && window.innerWidth < 576) {
				console.log('inicio:offset>0:width<576')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo_blanco_azul.svg'
				menuLogo.classList.remove('opacity-0')
				menuLogo.classList.add('opacity-1')
			}
			// desktop internas
			if( (document.body.classList.contains('interno')) ) {
				console.log('interno')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo.svg'
				menuLogo.classList.remove('opacity-0')
				menuLogo.classList.add('opacity-1')
			}
			if( (document.body.classList.contains('interno')) && (window.pageYOffset > 0) ) {
				console.log('interno:offset>0:width>576')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo_blanco_azul.svg'
				menuLogo.classList.add('opacity-1')
			}
		}
		showHideLogo()
	//
	/* ==============================================================
	/* TOGGLER
	/* ============================================================== */
		const toggler = document.getElementById('toggler')
		toggler.addEventListener('click', function(){
			console.log('toggler')
			if( toggler.classList.contains('collapsed') ) {
				console.log('collapsed')
				menu.classList.remove('menu-movil-open')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo.svg'
			} else {
				console.log('nocollapsed')
				menu.classList.add('menu-movil-open')
				menuLogo.src = 'http://127.0.0.1:5500/images/rotoplas_logo_blanco_azul.svg'
			}
		})
	//
}