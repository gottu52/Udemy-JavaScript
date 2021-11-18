const child = document.querySelector('.child');
const cb = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('a');
            observer.unobserve(entry.target);
        } else {
            console.log('b');
        }
    })
    // alert('');
}
const io = new IntersectionObserver(cb);
io.observe(child);
