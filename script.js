document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerHTML = '<p>Por favor, introduce valores válidos.</p>';
        return;
    }
    
    const imc = peso / (altura * altura);
    let mensaje = '';
    let clase = '';
    
    if (imc < 18.5) {
        mensaje = 'Estás ligeramente fuera del rango';
        clase = 'precaucion';
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = 'Tu peso está en rango saludable';
        clase = 'saludable';
    } else if (imc >= 25 && imc < 30) {
        mensaje = 'Estás ligeramente fuera del rango';
        clase = 'precaucion';
    } else {
        mensaje = 'Estás fuera del rango saludable';
        clase = 'riesgo';
    }
    
    document.getElementById('resultado').innerHTML = `
        <p class="${clase}"><strong>${mensaje}</strong></p>
        <p>Tu IMC es: <strong>${imc.toFixed(2)}</strong></p>
        <p>Recuerda que este es solo un indicador general. Consulta a un profesional de la salud para una evaluación completa.</p>
    `;
});