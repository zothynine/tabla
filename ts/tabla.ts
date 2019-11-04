import { get as getSVGSprite } from './cards-svg-sprite.js'

function generateRandomDeck(sprite: HTMLElement) {

    const _SPRITE: HTMLElement = sprite || null
    if (!_SPRITE) {
        console.error('no cards sprite loaded')
        return
    }

    const _CARDS: Array<HTMLElement> = Array.prototype.slice.call(_SPRITE.querySelectorAll('svg > symbol[id*="-"]'))

    while (_CARDS.length > 0) {

        const _I: number = Math.floor(Math.random() * _CARDS.length)
        const _CARD: HTMLElement = _CARDS[_I]
        const _ID: string = _CARD.getAttribute('id')
        const _DRAW_PILE: HTMLElement = document.getElementById('draw-pile')

        _DRAW_PILE.insertAdjacentHTML('beforeend', `
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
        const _SPRITE: HTMLElement = document.getElementById('cards-sprite')
        _SPRITE.insertAdjacentHTML('afterbegin', getSVGSprite())
        generateRandomDeck(_SPRITE)
    }
}, false)
