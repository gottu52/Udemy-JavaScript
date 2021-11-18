document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    // const cb = (entries, observer) => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             const ta = new TextAnimation(entry.target);
    //             ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     })
    // }
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
      
});

class ScrollObserver {
    constructer(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this._init;
    }
    _init() {
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const ta = new TextAnimation(entry.target);
                    ta.animate();
                    observer.unobserve(entry.target);
                } else {
                }
            })
        }
        const io = new IntersectionObserver(callback, options);
        els.forEach(el => io.observe(el));  
    }
}


