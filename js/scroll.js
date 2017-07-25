window.onscroll = scroll; //cuando hacemos scroll llamamos a la función
		 function scroll(){
			   //coge el valor del scroll en pixeles
			   var sc = window.pageYOffset;
			   //registramos el valor scroll en la consola por si tenemos que hacer ajustes, saber dónde
			   //console.log('window.pageYOffset = '+sc);
			   
			   console.log($(this).scrollTop());
				
				if($(this).scrollTop() < 486){
					$('nav').addClass('appear');
					
					$('nav').addClass('custom-navbar');
					$('nav').addClass('navbar');
				}else
				{
				
					$('nav').removeClass('custom-navbar');
					$('nav').removeClass('navbar');
				}

		 }