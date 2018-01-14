/*Funciones activadoras en ellas son llamadas las funciones escribir y borrar
Cada una corresponde a una pestaña y modifican las clases de la interfaz según
convenga*/

function _activaCastellano(){
	_interfazCastellano();
	document.getElementById('language').value="es/ES";
	_controladorDinamico();
}

function _activaIngles(){
	_interfazIngles();
	document.getElementById('language').value="en/EN";
	_controladorDinamico();
}

function _activaPrincipal(){
	_escribirVideo();
	_borrarBlog();
	_borrarAcerca();
	_borrarContacto();
	_borrarDonacion();
	$("#home-container").removeClass('invisible');

	$("#home").addClass('active');
	$("#blog").removeClass('active');
	$("#about").removeClass('active');
	$("#contact").removeClass('active');
	$("#donation").removeClass('active');

	$("#li_home").addClass('active');
	$("#li_blog").removeClass('active');
	$("#li_about").removeClass('active');
	$("#li_contact").removeClass('active');
	$("#li_donation").removeClass('active');

	//Para que recargue la url en dispositivos moviles con el dropdown activado
	_urlDinamica("home");
}

function _activaBlog(blog){
	_borrarVideo();
	_borrarAcerca();
	_borrarContacto();
	_borrarDonacion();
	_escribirBlog();
	$("#home-container").addClass('invisible');
	
	$("#home").removeClass('active');
	$("#blog").addClass('active');
	$("#about").removeClass('active');
	$("#contact").removeClass('active');
	$("#donation").removeClass('active');

	$("#li_home").removeClass('active');
	$("#li_blog").addClass('active');
	$("#li_about").removeClass('active');
	$("#li_contact").removeClass('active');
	$("#li_donation").removeClass('active');
	if (blog==null){
		_retornaBlog();
		_urlDinamica("blog");
		} else {
		_urlDinamica("blog",blog);
		}
}

function _activaAcerca(){
	_borrarVideo();
	_borrarBlog();
	_borrarContacto();
	_borrarDonacion();
	_escribirAcerca();

	$("#home-container").addClass('invisible');

	$("#home").removeClass('active');
	$("#blog").removeClass('active');
	$("#about").addClass('active');
	$("#contact").removeClass('active');
	$("#donation").removeClass('active');

	$("#li_home").removeClass('active');
	$("#li_blog").removeClass('active');
	$("#li_about").addClass('active');
	$("#li_contact").removeClass('active');
	$("#li_donation").removeClass('active');

	_retornaAcerca();

	_urlDinamica("about");
}

function _activaContacto(){
	_borrarVideo();
	_borrarBlog();
	_borrarAcerca();
	_borrarDonacion();
	_escribirContacto();

	$("#home-container").addClass('invisible');

	$("#home").removeClass('active');
	$("#blog").removeClass('active');
	$("#about").removeClass('active');
	$("#contact").addClass('active');
	$("#donation").removeClass('active');

	$("#li_home").removeClass('active');
	$("#li_blog").removeClass('active');
	$("#li_about").removeClass('active');
	$("#li_contact").addClass('active');
	$("#li_donation").removeClass('active');

	_retornaContacto();

	_urlDinamica("contact");
}

function _activaDonacion(){
	_borrarVideo();
	_borrarBlog();
	_borrarAcerca();
	_borrarContacto();
	_escribirDonacion();

	$("#home-container").addClass('invisible');

	$("#home").removeClass('active');
	$("#blog").removeClass('active');
	$("#about").removeClass('active');
	$("#contact").removeClass('active');
	$("#donation").addClass('active');

	$("#li_home").removeClass('active');
	$("#li_blog").removeClass('active');
	$("#li_about").removeClass('active');
	$("#li_contact").removeClass('active');
	$("#li_donation").addClass('active');

	_retornaDonacion();

	_urlDinamica("donation");
}
//Una alerta de ejemplo
function _alerta(){
	alert ("Sorroco, Aulixio");
}

//Esta función muestra una alerta si las cookies no están activadas.
function _alertaCookies(lang){
	if (lang=="es/ES")
	alert ('Esta página utiliza cookies para brindar un mejor servicio,\nes necesario activarlas antes de continuar para evitar comportamientos inesperados.')
	if (lang=="en/EN")
	alert ('This page uses cookies to provide a better service,\nit\'s necessary to activate them before continuing to avoid unexpected behavior.')
}

//Funciones de Borrado en DOM

function _borrarBlog(){
	if (document.getElementById("blog-container")){
		$('#blog-container').remove();
	}
}

function _borrarAcerca(){
	if (document.getElementById("about-container")){
		$('#about-container').remove();
	}
}

function _borrarContacto(){
	if (document.getElementById("contact-container")){
		$('#contact-container').remove();
	}
}

function _borrarDonacion(){
	if (document.getElementById("donation-container")){
			$('#donation-container').remove();
	}
}

function _borrarVideo(){
	if (document.getElementById("cover-video")){
		//var miVideo = document.getElementById("cover-video")
		//	miVideo.parentNode.removeChild(miVideo);
		$("#cover-video").remove();
			document.body.classList.remove("overflow");
			document.getElementById("pie").style.position="";
	}
}

//En el caso de que se use un navegador muy antiguo
function _borrarNavegacion(){
	$('#mast_head').remove();
	$('#inner_low').remove();
}

function _compruebaCookies(){
	 var x = navigator.cookieEnabled;
     return x; //verdadero o falso
}

function _controladorDinamico(){
	/*Esta función es la única que sera llamada manualmente
	mirar nº de objetivos
	hacer un bucle según número de objetivos con límite preestablecido*/
	_divideTarget(_recortaTarget());
}

function _divideTarget( array_target){

	//Esta función hace de switch con un array representando una url
	var primera = array_target[1];
	var condicion=false;
	var segunda = array_target[2];

	//var segunda = primera.split(espacio);*/
		if (primera=="home") {
			_activaPrincipal();
			condicion=true;
		}
		if (primera=="blog"){
			_activaBlog();
			condicion=true;
		}
		if (primera=="about"){
			_activaAcerca();
			condicion=true;
		}
		if (primera=="contact"){
			_activaContacto();
			condicion=true;
		}
		if (primera=="donation"){
			_activaDonacion();
			condicion=true;
		}
		if (!condicion)
			_activaPrincipal();
}


//Funciones de escritura en DOM

function _escribirVideo(){
	//Se cambian ciertos estilos para adaptar el dispositivo
	//Estoy por escribir en document write directamente.
	//Tengo que al innerHTML del elemento padre inssertarle la etiqueta video, más fácil
	//Nada, al final no hizo falta, ademas document.write es interpretado por cada navegador como le viene en gana

	if (!document.getElementById("cover-video")){
		document.body.classList.add("overflow");
		$("#pie").addClass('fijarPie');
		//Para reajustar el tamaño misterios de CSS mejor en blanco que fixed
		document.getElementById("mast_head").style.position="";
		document.getElementById("pie").style.position="fixed";
		//Creo los elementos que necesito con sus parametros
		var miVideo = document.createElement('video');
		miVideo.classList.add('embed-responsive-item');
		miVideo.classList.add('fillWidth');
		miVideo.setAttribute('id','cover-video');
		/*Si la página esta en un idioma u otro debera alternar el video y el poster*/
		miVideo.setAttribute('poster','img/gif/title_es.gif');
		/*En chroome exite un problema al posicionar el cursor sobre links sobrepuestos sobre elementos de video.
			Para solventarlo en cada div superior al cover-video es necesario añadir estilos z-index
		miVideo.setAttribute('style',"z-index:;");*/

		var fuente = document.createElement('source');
		fuente.src="video/MOV_0073.mp4";
		fuente.type="video/mp4";

		//Los anido
		miVideo.appendChild(fuente);
		//Y los inserto
		document.getElementById('home-container').appendChild(miVideo);

		_reproducirVideo();
		_mutearVideo();
		_loopVideo();
	}
}

function _escribirBlog(){
	if (!document.getElementById("blog-container")){
		//Para reajustar el tamaño
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		var miBlog = document.createElement('div');
		miBlog.classList.add('container');
		miBlog.setAttribute('id','blog-container');
		//col1.innerHTML=_retornaDonacion();
		//fila.appendChild(createElement('br'));
		insertAfter(document.getElementById('home-container'),miBlog);
		//insertAfter(document.getElementById('mast_head'),miDonacion);

	} else {
	if (document.getElementById("blog-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		/*AQUI TENGO QUE MODIFICAR COSAS PARA EL CAMBIO DE IDIOMA, BASICAMENTE
		COPIAR LO DE ARRIBA*/
		//col1.innerHTML=_retornaDonacion();
	}
	}
}

function _escribirDonacion(){
	if (!document.getElementById("donation-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		var miDonacion = document.createElement('div');
		miDonacion.classList.add('container');
		miDonacion.setAttribute('id','donation-container');
		var fila = document.createElement('div');
		fila.classList.add('row')
		fila.classList.add('justify-content-md-center')
		fila.setAttribute('id','fila_donation')
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','donation_left');
		col2.setAttribute('id','donation_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"donation\" img\" class=\"img-fluid rounded\">";
		fila.appendChild(col1);
		fila.appendChild(col2);
		miDonacion.appendChild(fila);
		insertAfter(document.getElementById('home-container'),miDonacion);
	} else {
	if (document.getElementById("donation-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		$('#donation_left').remove();
		$('#donation_rigth').remove();
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','donation_left');
		col2.setAttribute('id','donation_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"donation\" img\" class=\"img-fluid rounded\">";
		document.getElementById("fila_donation").appendChild(col1);
		document.getElementById("fila_donation").appendChild(col2);
	}
	}
}

function _escribirAcerca(){
	if (!document.getElementById("about-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		var miAcerca = document.createElement('div');
		miAcerca.classList.add('container');
		miAcerca.setAttribute('id','about-container');
		var fila = document.createElement('div');
		fila.classList.add('row')
		fila.classList.add('justify-content-md-center')
		fila.setAttribute('id','fila_about')
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','about_left');
		col2.setAttribute('id','about_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"about\" img\" class=\"img-fluid rounded\">";
		fila.appendChild(col1);
		fila.appendChild(col2);
		miAcerca.appendChild(fila);
		insertAfter(document.getElementById('home-container'),miAcerca);
	} else {
	if (document.getElementById("about-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		$('#about_left').remove();
		$('#about_rigth').remove();
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','about_left');
		col2.setAttribute('id','about_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"about\" img\" class=\"img-fluid rounded\">";
		document.getElementById("fila_about").appendChild(col1);
		document.getElementById("fila_about").appendChild(col2);
	}
	}
}

function _escribirContacto(){
	if (!document.getElementById("contact-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		var miContacto = document.createElement('div');
		miContacto.classList.add('container');
		miContacto.setAttribute('id','contact-container');
		var fila = document.createElement('div');
		fila.classList.add('row')
		fila.classList.add('justify-content-md-center')
		fila.setAttribute('id','fila_contact')
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','contact_left');
		col2.setAttribute('id','contact_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"contact\" img\" class=\"img-fluid rounded\">";
		fila.appendChild(col1);
		fila.appendChild(col2);
		miContacto.appendChild(fila);
		insertAfter(document.getElementById('home-container'),miContacto);
	} else {
	if (document.getElementById("contact-container")){
		document.getElementById("mast_head").style.position="relative";
		$("#pie").removeClass('fijarPie');
		$('#contact_left').remove();
		$('#contact_rigth').remove();
		var col1 = document.createElement('div');
		var col2 = document.createElement('div');
		col1.setAttribute('id','contact_left');
		col2.setAttribute('id','contact_rigth');
		col1.classList.add('col-sm-8');
		col2.classList.add('col-sm-4');
		col2.innerHTML="<img src=img/donation.jpg id=\"contact\" img\" class=\"img-fluid rounded\">";
		document.getElementById("fila_contact").appendChild(col1);
		document.getElementById("fila_contact").appendChild(col2);
	}
	}
}

/*Método para cambiar el idioma*/

function _filtrarIdioma(){
	var idioma = document.getElementById("language").value;
	if (idioma=="es/ES") _activaCastellano();
	if (idioma=="en/EN") _activaIngles();
}

/*Esta función inserta despues de un nodo dado, no existe un metodo original
en javascript, sin embargo existe en jquery*/
function insertAfter(e,i){ 
	//@e nodo tras el que se quiere insertar
	//@i nodo que se quiere insertar
        if(e.nextSibling){ 
            e.parentNode.insertBefore(i,e.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }

/*Metodos para cambiar la interfaz*/
function _interfazCastellano(){

	/*Cambio el texto y el elemento target*/
	document.getElementById("home").innerHTML="Inicio";
	document.getElementById("blog").innerHTML="Blog";
	document.getElementById("about").innerHTML="Acerca de";
	document.getElementById("contact").innerHTML="Contacto";
	document.getElementById("donation").innerHTML="Donaciones";

	document.getElementById("home").href="?lang=es#home";
	document.getElementById("blog").href="?lang=es#blog#_top";
	document.getElementById("about").href="?lang=es#about#_top";
	document.getElementById("contact").href="?lang=es#contact#_top";
	document.getElementById("donation").href="?lang=es#donation#_top";

	document.getElementById("link_home").innerHTML="Inicio";
	document.getElementById("link_blog").innerHTML="Blog";
	document.getElementById("link_about").innerHTML="Acerca de";
	document.getElementById("link_contact").innerHTML="Contacto";
	document.getElementById("link_donation").innerHTML="Donaciones";

	document.getElementById("link_home").href="?lang=es#home";
	document.getElementById("link_blog").href="?lang=es#blog#_top";
	document.getElementById("link_about").href="?lang=es#about#_top";
	document.getElementById("link_contact").href="?lang=es#contact#_top";
	document.getElementById("link_donation").href="?lang=es#donation#_top";

	document.getElementById("lang-drop-en/EN").classList.remove('active');
	document.getElementById("lang-drop-es/ES").classList.add('active');

	_urlCastellano();
	_pieCastellano();

	//Las funciones de interfaz deben modificar el pie de la página según convenga	
}

function _interfazIngles(){

	$("#home").text("Home");
	$("#blog").text("Blog");
	$("#about").text("About");
	$("#contact").text("Contact");
	$("#donation").text("Donation");

	$("#home").attr("href","?lang=en#home");
	$("#blog").attr("href","?lang=en#blog#_top");
	$("#about").attr("href","?lang=en#about#_top");
	$("#contact").attr("href","?lang=en#contact#_top");
	$("#donation").attr("href","?lang=en#donation#_top");

	$("#link_home").text("Home");
	$("#link_blog").text("Blog");
	$("#link_about").text("About");
	$("#link_contact").text("Contact");
	$("#link_donation").text("Donation");

	$("#link_home").attr("href","?lang=en#home");
	$("#link_blog").attr("href","?lang=en#blog#_top");
	$("#link_about").attr("href","?lang=en#about#_top");
	$("#link_contact").attr("href","?lang=en#contact#_top");
	$("#link_donation").attr("href","?lang=en#donation#_top");
	
	document.getElementById("lang-drop-en/EN").classList.add('active');
	document.getElementById("lang-drop-es/ES").classList.remove('active');

	_urlIngles();
	_pieIngles();
}

function _localizacion(){
	return location.href;
}

function _mensajeExito(){
	var idioma = document.getElementById("language").value;
	if (idioma=="es/ES"){
		$.fancybox.open('<h4 class="successFancy">Tu mensaje ha sido recibido con éxito. Gracias por tu tiempo.</h4>');
	}
	if (idioma=="es/EN"){
		$.fancybox.open('<h4 class="successFancy">Your message has been received successfully. Thanks for your time.</h4>');
	}
}
function _mensajeFallo(){
	var idioma = document.getElementById("language").value;
if (idioma=="es/ES"){
		$.fancybox.open('<h4 class="failFancy">Tu mensaje no se pudo recibir. Verifica el formato.</h4>');
	}
	if (idioma=="es/EN"){
		$.fancybox.open('<h4 class="failFancy">Your message could not be received. Please, check the format.</h4>');

}}

/*funcion para manejar contacto en el post*/
/*function _manejaContacto(){	
}*/

/*Funcion Target recorta la url para _controladorDinamico() */

function _recortaTarget(){
	var t = _localizacion();
	var separador = "#";
	target = t.split(separador);
	return (target);
}

/*Funciones de retorno, se encargan de ejecutar los métodos de carga para cada 
idioma seleccionado*/

function _retornaAcerca(){
		var idioma = document.getElementById('language').value;
	if (!_compruebaCookies()){
		_alertaCookies(idioma);
	} else {
		if (idioma=="es/ES"){
			$(document).ready(function(){
	        $("#about_left").load("info/es/acerca.php");  
			});
		}
		if (idioma=="en/EN")
				$(document).ready(function(){
	        $("#about_left").load("info/en/acerca.php");  
			});
	}
}

function _retornaBlog(){
	var idioma = document.getElementById('language').value;
	if (!_compruebaCookies()){
		_alertaCookies(idioma);
	} else {
		if (idioma=="es/ES"){
			$(document).ready(function(){
	        $("#blog-container").load("info/es/blog.php");
	        //$("#blog_left").load("info/es/blog.php");  
		});
		}
		if (idioma=="en/EN")
				$(document).ready(function(){
	        $("#blog-container").load("info/en/blog.php");  
		});
	}
}

function _retornaPaginaBlog(indice){
	var idioma = document.getElementById('language').value;
	if (!_compruebaCookies()){
		_alertaCookies(idioma);
	} else {
		if (idioma=="es/ES"){
			$(document).ready(function(){
	        $("#blog-container").load("blog/es/" + indice +".php");
		});
		}
		if (idioma=="en/EN")
				$(document).ready(function(){
	        $("#blog-container").load("blog/en/" + indice +".php");
		});
	}
}


function _retornaContacto(){
		var idioma = document.getElementById('language').value;
	if (!_compruebaCookies()){
		_alertaCookies(idioma);
	} else {
		if (idioma=="es/ES"){
			$(document).ready(function(){
	        	$("#contact_left").load("info/es/contacto.php");  
			});
		}
		if (idioma=="en/EN")
				$(document).ready(function(){
	        $("#contact_left").load("info/en/contacto.php");  
		});
	}
}

function _retornaDonacion(){
		var idioma = document.getElementById('language').value;
	if (!_compruebaCookies()){
		_alertaCookies(idioma);
	} else {
		if (idioma=="es/ES"){
			$(document).ready(function(){
	        $("#donation_left").load("info/es/donacion.php");  
			});
		}
		if (idioma=="en/EN")
				$(document).ready(function(){
	        $("#donation_left").load("info/en/donacion.php");  
		});
	}
}



function _urlCastellano(){
	//Capturo la url para modificarla al cambiar el select
	var url = _recortaTarget();
	if (url[1])
		history.pushState(null, "", "?lang=es#" + url[1] + "#_top" );
	else if (!url[1])
		history.pushState(null, "", "?lang=es");
}

function _urlDinamica(pagina, pb){
var idioma = document.getElementById("language").value;
	if (idioma=="es/ES"){
		if (pb != null)
			history.pushState(null, "", "?lang=es&blog=" + pb + "#" + pagina + "#_top" );
		else {
		history.pushState(null, "", "?lang=es#" + pagina + "#_top" );
		}
	}
	if (idioma=="en/EN"){
				if (pb != null)
			history.pushState(null, "", "?lang=en&blog=" + pb + "#" + pagina + "#_top" );
		else {
		history.pushState(null, "", "?lang=en#" + pagina + "#_top" );	
	}
	}
}

function _urlIngles(){
var url = _recortaTarget();
	if (url[1])
		history.pushState(null, "", "?lang=en#" + url[1] + "#_top" );
	else if (!url[1])
		history.pushState(null, "", "?lang=en");
}

function _pieCastellano(){
	$("#privacidad").attr("data-src","info/es/privacidad.php");
	$("#privacidad").text("Privacidad");
	$("#cookies").attr("data-src","info/es/cookies.php");
	$("#licencia").attr("data-src","info/es/licencia.php");
	$("#licencia").text("Licencia");
	$("#cc_link").attr("href","https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es_ES");
	$("#cc_image").attr("alt","Licencia Creative Commons.");
	$("#privacidad").attr("alt","Enlace a política de privacidad.");
	$("#cookies").attr("alt","Enlace a política de cookies del sitio web.");
	$("#licencia").attr("alt","Enlace a la licencia del sitio web.");
	$("#cc-image").attr("alt","Enlace e imagen de la licencia Creative Commons.")
}

function _pieIngles(){
	$("#privacidad").attr("data-src","info/en/privacidad.php");
	$("#privacidad").text("Privacy");
	$("#cookies").attr("data-src","info/en/cookies.php");
	$("#licencia").attr("data-src","info/en/licencia.php");
	$("#licencia").text("Licence");
	$("#cc_link").attr("href","https://creativecommons.org/licenses/by-nc-sa/4.0/deed");
	$("#cc_image").attr("alt","Licence Creative Commons.");
	$("#privacidad").attr("alt","Link to privacy policy.");
	$("#cookies").attr("alt","Link to the cookie policy of the website.");
	$("#licencia").attr("alt","Link to the website's license.");
	$("#cc-image").attr("alt","Link and image of the Creative Commons license.")
}

//Funciones de Video
function _reproducirVideo(){
	document.getElementById("cover-video").play();
}

function _mutearVideo(){
	document.getElementById("cover-video").muted=true;
}

function _loopVideo(){
	document.getElementById("cover-video").loop=true;
}

function _controlsVideo(){
	document.getElementById("cover-video").controls;
}

function _cargaVideo(){
	document.getElementById("cover-video").load();
}