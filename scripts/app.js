var slider = {
    slides:['images/level1.jpg','images/level2.jpg','images/level3.jpg',
        'images/level4.jpg','images/level5.jpg','images/level6.jpg'],
    frame: 0,
    set: function(image) {
        document.getElementById("picture").style.backgroundImage = "url(" + image + ")";
    },
    init: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() {
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
    window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    },12000);
};
