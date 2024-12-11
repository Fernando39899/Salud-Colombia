
document.getElementById('analyzeButton').addEventListener('click', () => {
    const symptoms = document.getElementById('symptoms').value;
    if (symptoms.trim() === '') {
        alert('Por favor, describe tus síntomas.');
    } else {
        document.getElementById('result').innerHTML = `<p>Análisis en proceso para: "${symptoms}". Por favor, espera.</p>`;
    }
});
