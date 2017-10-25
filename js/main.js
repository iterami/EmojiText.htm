'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'input': {
          'oninput': convert,
        },
      },
      'title': 'EmojiText.htm',
    });
}
