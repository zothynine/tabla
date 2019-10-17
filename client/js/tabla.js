import { get as getSVGSprite } from './cards-svg-sprite.js'

function makeCards(sprite) {

    const _SPRITE = sprite || null
    if (!_SPRITE) {
        console.error('no cards sprite loaded')
        return
    }

    const CARDS = _SPRITE.querySelectorAll('svg > symbol[id*="-"]')
    CARDS.forEach(card => {

        const _ID = card.getAttribute('id').toLowerCase()

        _SPRITE.insertAdjacentHTML('afterend', `
        <div class="card" id="${_ID.replace('-','')}">
            <svg viewbox="0 0 300 400">
                <use xlink:href="#${_ID}" />
                <use xlink:href="#back" />
            </svg>
        </div>
        `)
    })
}

window.addEventListener('message', event => {

    if (event.data === 'cardSpriteReady') {
        const _SPRITE = document.getElementById('cards-sprite')
        _SPRITE.insertAdjacentHTML('afterbegin', getSVGSprite())
        makeCards(_SPRITE)
    }
}, false)
