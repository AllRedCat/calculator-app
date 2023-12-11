// switch theme
document.addEventListener('DOMContentLoaded', function () {
    const themeOptions = document.querySelectorAll('.theme-option');

    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedTheme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', selectedTheme);
        })
    })
})

// calculadora
function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}
