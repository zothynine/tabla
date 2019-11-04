import { get as getSVGSprite } from './cards-svg-sprite.js';
function generateRandomDeck(sprite) {
    var _SPRITE = sprite || null;
    if (!_SPRITE) {
        console.error('no cards sprite loaded');
        return;
    }
    var _CARDS = Array.prototype.slice.call(_SPRITE.querySelectorAll('svg > symbol[id*="-"]'));
    while (_CARDS.length > 0) {
        var _I = Math.floor(Math.random() * _CARDS.length);
        var _CARD = _CARDS[_I];
        var _ID = _CARD.getAttribute('id');
        var _DRAW_PILE = document.getElementById('draw-pile');
        _DRAW_PILE.insertAdjacentHTML('beforeend', "\n            <div class=\"card\" id=\"" + _ID.replace('-', '') + "\">\n                <svg viewbox=\"0 0 300 400\">\n                    <use xlink:href=\"#" + _ID + "\" />\n                    <use xlink:href=\"#back\" />\n                </svg>\n            </div>\n        ");
        _CARDS.splice(_I, 1);
    }
}
window.addEventListener('message', function (event) {
    if (event.data === 'cardSpriteReady') {
        var _SPRITE = document.getElementById('cards-sprite');
        _SPRITE.insertAdjacentHTML('afterbegin', getSVGSprite());
        generateRandomDeck(_SPRITE);
    }
}, false);
//# sourceMappingURL=tabla.js.map