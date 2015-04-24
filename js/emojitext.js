function convert(){
    var emojis = {
      ':': 'colon',
      ',': 'comma',
      'D': 'capital D',
      'O': 'capital O',
      'P': 'capital P',
      '-': 'dash',
      '8': 'eight',
      '!': 'exclamation mark',
      '{': 'left brace',
      '[': 'left bracket',
      '(': 'left parenthesis',
      '.': 'period',
      '?': 'question mark',
      '}': 'right brace',
      ']': 'right bracket',
      ')': 'right parenthesis',
      ';': 'semicolon',
      '3': 'three',
      '_': 'underscore',
    };

    var error;
    var input = document.getElementById('input').value.replace(
      / /g, ''
    );
    var output = '';

    for(var emoji in input){
        if(emojis[input[emoji]] == undefined){
            error = 'Unrecognized emoji!';
            break;
        }

        output += emojis[input[emoji]] + ' ';
    }

    output = error || output.trim();
    document.getElementById('output').value = output;
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // Enter: convert.
    if(key === 13){
        convert();
    }
};
