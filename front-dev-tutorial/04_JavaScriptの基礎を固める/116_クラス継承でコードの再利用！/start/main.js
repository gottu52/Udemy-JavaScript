document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
    }
    animate() {
        console.log('hello')
    }
}
