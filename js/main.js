'use strict';

function repo_init(){
    core_repo_init({
      'title': 'EmojiText.htm',
    });

    document.getElementById('input').oninput = convert;
}
