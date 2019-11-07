import { get as getSVGSprite } from './cards-svg-sprite.js'

function getTableArea(card: HTMLElement): String {

    let _tablePosition: HTMLElement
    return card.closest('.js-pos').getAttribute('data-table-area')
}

function onCardClickOrTab(e: Event): void {

    const _TARGET: HTMLElement = (e.target as HTMLElement)
    const _CARD: HTMLElement = _TARGET.closest('.card')
    console.log( getTableArea(_CARD) )
}

function generateRandomDeck(sprite: HTMLElement): void {

    const _SPRITE: HTMLElement = sprite
    if (!_SPRITE) {
        console.error('no cards sprite loaded')
        return
    }

    const _CARDS: Array<HTMLElement> = Array.prototype.slice.call(_SPRITE.querySelectorAll('svg > symbol[id*="-"]'))
    const _DRAW_PILE: HTMLElement = document.querySelector('.js-draw-pile')

    while (_CARDS.length > 0) {

        const _I: number = Math.floor(Math.random() * _CARDS.length)
        const _CARD: HTMLElement = _CARDS[_I]
        const _ID: string = _CARD.getAttribute('id')

        _DRAW_PILE.insertAdjacentHTML('beforeend', `
            <div class="card" id="${_ID.replace('-','')}">
                <svg viewbox="0 0 300 400">
                    <use class="face" xlink:href="#${_ID}" />
                    <use class="back" xlink:href="#back" />
                </svg>
            </div>
        `)

        _CARDS.splice(_I, 1)
    }

    _DRAW_PILE.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', onCardClickOrTab)
    })
}

window.addEventListener('message', event => {

    if (event.data === 'cardSpriteReady') {
        const _SPRITE: HTMLElement = document.querySelector('.js-cards-sprite')
        _SPRITE.insertAdjacentHTML('afterbegin', getSVGSprite())
        generateRandomDeck(_SPRITE)
    }
}, false)
