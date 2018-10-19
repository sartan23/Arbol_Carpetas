


var contador = 0;
	
		function agregar(){
			console.log('agregar()');
			$("#Contenedor").append('<div id="N' + contador + '" ><input id="E' + contador + '" class="input" type="button" name="" value="-" onclick="eliminar(this)"><input id="A' + contador + '" class="input" type="button" name="" value="+" onclick="agregarNodo(this.parentElement.id)"> /div>);
			$("#Contenedor #N" + contador).addClass('Nodo');
			console.log('--> ' + $("#Contenedor #N0").html());
			console.log('--> ' + $("#Contenedor").html());
			contador += 1;
		}

		function agregarNodo(divActual){
			console.log('agregarNodo(): ' + divActual);
			$("#Contenedor").find("div#" + divActual).append('<div id="N' + contador + '" class="Nodo2"></div>');
			//console.log('1: ' + $("#Contenedor").find("div#N " + contador).id();
			console.log('c: ' + contador);
			$("#Contenedor").find('div#N' + contador).append('<input id="E' + contador + '" class="input" type="button" name="" value="-" onclick="eliminar(this)">');
			$("#Contenedor").find('div#N' + contador).append('<input id="A' + contador + '" class="input" type="button" name="" value="+" onclick="agregarNodo(this.parentElement.id)">');
			

			
			contador++;
		}

		function eliminar(inputActual){
			console.log('eliminar(): ' + inputActual.id);
			console.log('Parent: ' + inputActual.parentElement.id)
			$("#Contenedor").find('div#' + inputActual.parentElement.id).remove();


		}



			
		