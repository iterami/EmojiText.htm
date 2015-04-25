function convert(){
    var characters = {
      '&': 'and',
      '@': 'at',
      '*': 'asterisk',
      '\\': 'backslash',
      '^': 'caret',
      ':': 'colon',
      ',': 'comma',
      'D': 'capital D',
      'O': 'capital O',
      'P': 'capital P',
      '-': 'dash',
      '8': 'eight',
      '=': 'equals sign',
      '!': 'exclamation mark',
      '/': 'forward slash',
      '`': 'grave accent',
      '>': 'greater than',
      '{': 'left brace',
      '[': 'left bracket',
      '(': 'left parenthesis',
      '<': 'less than',
      '#': 'number sign',
      '%': 'percent sign',
      '.': 'period',
      '+': 'plus sign',
      '?': 'question mark',
      '}': 'right brace',
      ']': 'right bracket',
      ')': 'right parenthesis',
      ';': 'semicolon',
      '3': 'three',
      '~': 'tilda',
      '_': 'underscore',
    };

    var input = document.getElementById('input').value.replace(
      / /g, ''
    );
    var output = '';

    for(var character in input){
        if(characters[input[character]] == undefined){
            continue;
        }

        output += characters[input[character]] + ' ';
    }

    document.getElementById('output').value = output.trim();
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // Enter: convert.
    if(key === 13){
        convert();
    }
};
