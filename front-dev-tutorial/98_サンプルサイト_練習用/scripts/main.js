document.addEventListener('DOMContentLoaded', function () {

    // スライダー
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    // インターセクションオブサーバー
    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
});

