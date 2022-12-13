function conveEuros() {
    let cambio = parseInt(document.getElementById("montoCambio").value);
    let resultado = 0;
    let euro = 5016.82;

    if(document.getElementById("tipoCambioEuro").checked){
        resultado = cambio * euro;
        alert("el cambio de pesos colombianos a euros es: $" + resultado);
    }
}

const factorial = () => {
    var n = parseInt(document.getElementById("numFact").value);
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return alert(`El factorial de ${n} es: ${total}`); 
}

const converTemperatura = () => {
    let temperatura = parseInt(document.getElementById("temperatura").value);
    let centigrados = 0;
    let fahrenheit = 0;

    if(document.getElementById("tipoFahrenheit").checked){
        fahrenheit = (9/5*temperatura)+32;
        switch (fahrenheit) {
                default:
                if (fahrenheit <= 37 && fahrenheit >=32){
                    alert(`${temperatura} grados centigrados, son ${fahrenheit} grados fahrenheit; NOS CONGELAMOS`);
                }
                if(fahrenheit >= 37 && fahrenheit <= 50){
                    alert(`${temperatura} grados centigrados, son ${fahrenheit} grados fahrenheit; ESTA HACIENDO FRESCO`);
                }
                if(fahrenheit >= 51 && fahrenheit <= 77){
                    alert(`${temperatura} grados centigrados, son ${fahrenheit} grados fahrenheit; ESTA TEMPLADO EL DIA`);
                }
                if(fahrenheit >= 100){
                    alert(`${temperatura} grados centigrados, son ${fahrenheit} grados fahrenheit; ALERTA NUCLEAR`);
                }else{
                    alert(`${temperatura} grados centigrados, son ${fahrenheit} grados fahrenheit`);
                }
                break;
        }
    };

    
    if(document.getElementById("tipoCelcius").checked){
        centigrados = (9/5*temperatura) + 32;


        switch (centigrados) {
                default:
                if (centigrados <= 0 && centigrados <= 5 ){
                    alert(`${temperatura} grados centigrados, son ${centigrados} grados fahrenheit; NOS CONGELAMOS`);
                }
                if(centigrados >= 5 && centigrados <= 15){
                    alert(`${temperatura} grados centigrados, son ${centigrados} grados fahrenheit; ESTA HACIENDO FRESCO`);
                }
                if(centigrados >= 16 && centigrados <= 25){
                    alert(`${temperatura} grados centigrados, son ${centigrados} grados fahrenheit; ESTA TEMPLADO EL DIA`);
                }
                if(centigrados >= 38){
                    alert(`${temperatura} grados centigrados, son ${centigrados} grados fahrenheit; ALERTA NUCLEAR`);
                }else{
                    alert(`${temperatura} fahrenheit, son ${centigrados} grados centigrados`);
                }
                break;
        } 
    }

}

const dateRec = () => {
    
    let año = parseInt(document.getElementById("año").value);
    let mes = parseInt(document.getElementById("mes").value);
    let dia = parseInt(document.getElementById("dia").value);

    let fecha1 = new Date(`${mes}/${dia}/${año}`);
    

    let fecha2 = new Date(`12/31/${año}`);

    let milSegundosDia = 24 * 60 * 60 * 1000;

    let milSegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
    let diasTrasncurridos = Math.round(milSegundosTranscurridos / milSegundosDia);
    alert(`faltan ${diasTrasncurridos} dias para fin de año`)
    

}

const aumentar = () => {
    let aumentar = document.getElementById("p-change");
    aumentar.classList.add("grande");

}

const disminuir = () => {
    let disminuir = document.getElementById("p-change");
    disminuir.classList.add("pequeño");
}


