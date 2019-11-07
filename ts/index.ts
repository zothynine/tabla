import { get as getSVGSprite } from './cards-svg-sprite.js'

function getTableArea(card: HTMLElement): String {

    if (!card) return
    return card.closest('.js-pos').getAttribute('data-table-area')
}

function moveCard(card: HTMLElement, targetAreaName: String): void {

    if (!card || !targetAreaName) return
    const _PLACEHOLDER_STR: String = '<div class="placeholder"></div>'
    const _TARGET_AREA: HTMLElement = document.querySelector(`[data-table-area='${targetAreaName}']`)
    _TARGET_AREA.insertAdjacentHTML('beforeend', _PLACEHOLDER_STR)
    const _PLACEHOLDER: HTMLElement = _TARGET_AREA.querySelector('div:last-child')
    const _SOURCE_PARENT: HTMLElement = document.querySelector(`[data-table-area='${getTableArea(card)}']`)
    const _SOURCE_X: Number = _SOURCE_PARENT.getBoundingClientRect().left
    const _SOURCE_Y: Number = _SOURCE_PARENT.getBoundingClientRect().top
    const _TARGET_PARENT: HTMLElement = _TARGET_AREA.querySelector(`div:last-child`)
    const _TARGET_X: Number = _TARGET_PARENT.getBoundingClientRect().left
    const _TARGET_Y: Number = _TARGET_PARENT.getBoundingClientRect().top

    _SOURCE_PARENT.classList.add('clicklock')
    document.body.insertAdjacentElement('afterbegin', card);
    card.setAttribute('style', `top: ${_SOURCE_Y}px; left: ${_SOURCE_X}px; z-index: 1;`)
    setTimeout(() => {
        card.style.top = _TARGET_Y + 'px';
        card.style.left = _TARGET_X + 'px';
    },10),
    card.removeEventListener('click', onCardClickOrTab)
    setTimeout(() => {
        _TARGET_AREA.removeChild(_PLACEHOLDER)
        _TARGET_AREA.insertAdjacentElement('beforeend', card)
        card.removeAttribute('style')
        _SOURCE_PARENT.classList.remove('clicklock')
    }, 1000);
}

function onCardClickOrTab(e: Event): void {

    const _EV_TARGET: HTMLElement = (e.target as HTMLElement)
    if (_EV_TARGET.classList.contains('clicklock')) return;
    const _CARD: HTMLElement = _EV_TARGET.closest('.card')
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
