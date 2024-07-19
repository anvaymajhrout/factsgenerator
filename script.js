document.addEventListener('DOMContentLoaded', () => {
    const generateFactButton = document.getElementById('generate-fact-button');
    const resultsContainer = document.getElementById('results-container');

    async function fetchFact(category) {
        const url = `http://numbersapi.com/random/${category}`;
        const response = await fetch(url);
        const fact = await response.text();
        return fact;
    }

    function displayFact(fact) {
        resultsContainer.innerHTML = '';
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');
        resultElement.innerHTML = `<p>${fact}</p>`;
        resultsContainer.appendChild(resultElement);
    }

    generateFactButton.addEventListener('click', async () => {
        const category = document.getElementById('category').value;
        const fact = await fetchFact(category);
        displayFact(fact);
    });
});
