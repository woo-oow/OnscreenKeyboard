
var word = document.getElementById('word');
var typedWord = '';

document.addEventListener('keydown', function(event) {
    var keyElement = document.getElementById(event.code);
    if (keyElement && event.code !== 'ShiftRight') {
        keyElement.style.backgroundColor = 'gray';
        if (event.code === 'Backspace') {
            typedWord = typedWord.slice(0, -1);
        }
        else if (event.code === "Space") {
          typedWord += " ";
        }
        else {
                typedWord += event.key;
            }
            word.innerText = typedWord;
        }
    });

document.addEventListener('keyup', function(event) {
    var keyElement = document.getElementById(event.code);
    if (keyElement && event.code !== 'ShiftRight') {
        keyElement.style.backgroundColor = '#fff';
    }
});
