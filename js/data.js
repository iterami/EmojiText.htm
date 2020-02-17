'use strict';

function convert(){
    const characters = {
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
      '"': 'double quotation mark',
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
      '\'': 'single quotation mark',
      '3': 'three',
      '~': 'tilda',
      '_': 'underscore',
      '|': 'vertical bar',
    };

    const input = document.getElementById('input').value.replace(
      / /g,
      ''
    );
    let output = '';

    for(const character in input){
        if(characters[input[character]] === void 0){
            continue;
        }

        output += characters[input[character]] + ' ';
    }

    document.getElementById('output').value = output.trim();
}
