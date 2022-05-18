console.log('app')
// Inicializacion de la carga de contenidos html
includeHTML();
// Documente ready
jQuery(document).ready(function($){
	/* ==============================================================
	/* SLIDER
	/* ============================================================== */
		$('.carac-dif-nodo-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	//
})