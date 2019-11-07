import { get as getSVGSprite } from './cards-svg-sprite.js'

function getTableArea(card: HTMLElement): String {

    if (!card) return
    return card.closest('.js-pos').getAttribute('data-table-area')
}

function moveCard(card: HTMLElement, targetAreaName: String): void {

    if (!card || !targetAreaName) return
    const _PLACEHOLDER_STR: String = '<div></div>'
    const _TARGET_AREA: HTMLElement = document.querySelector(`[data-table-area='${targetAreaName}']`)
    _TARGET_AREA.insertAdjacentHTML('beforeend', _PLACEHOLDER_STR)
    const _PLACEHOLDER: HTMLElement = _TARGET_AREA.querySelector('div:last-child')
    const _CURRENT_POS: HTMLElement = document.querySelector(`[data-table-area='${getTableArea(card)}']`)
    const _CURRENT_X: Number = _CURRENT_POS.getBoundingClientRect().left
    const _CURRENT_Y: Number = _CURRENT_POS.getBoundingClientRect().top
    const _TARGET_POS: HTMLElement = _TARGET_AREA.querySelector(`div:last-child`)
    const _TARGET_X: Number = _TARGET_POS.getBoundingClientRect().left
    const _TARGET_Y: Number = _TARGET_POS.getBoundingClientRect().top

    document.body.insertAdjacentElement('afterbegin', card);
    card.setAttribute('style', `top: ${_CURRENT_Y}px; left: ${_CURRENT_X}px; z-index: 1;`)
    setTimeout(() => {
        card.style.top = _TARGET_Y + 'px';
        card.style.left = _TARGET_X + 'px';
    },10),
    card.removeEventListener('click', onCardClickOrTab)
    setTimeout(() => {
        _TARGET_AREA.removeChild(_PLACEHOLDER)
        _TARGET_AREA.insertAdjacentElement('beforeend', card)
        card.removeAttribute('style')
    }, 1000);
}

function onCardClickOrTab(e: Event): void {

    const _TARGET: HTMLElement = (e.target as HTMLElement)
    const _CARD: HTMLElement = _TARGET.closest('.card')
    moveCard(_CARD, 'hand')
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
