import { get as getSVGSprite } from './cards-svg-sprite.js'

function generateRandomDeck(sprite) {

    const _SPRITE = sprite || null
    if (!_SPRITE) {
        console.error('no cards sprite loaded')
        return
    }

    const _CARDS = Array.prototype.slice.call(document.querySelectorAll('svg > symbol[id*="-"]'))

    while (_CARDS.length > 0) {

        const _I = parseInt(Math.random() * _CARDS.length)
        const _CARD = _CARDS[_I]
        const _ID = _CARD.getAttribute('id')

        _SPRITE.insertAdjacentHTML('afterend', `
            <div class="card" id="${_ID.replace('-','')}">
                <svg viewbox="0 0 300 400">
                    <use xlink:href="#${_ID}" />
                    <use xlink:href="#back" />
                </svg>
            </div>
        `)

        _CARDS.splice(_I, 1)
    }
}

window.addEventListener('message', event => {

    if (event.data === 'cardSpriteReady') {
        const _SPRITE = document.getElementById('cards-sprite')
        _SPRITE.insertAdjacentHTML('afterbegin', getSVGSprite())
        generateRandomDeck(_SPRITE)
    }
}, false)
