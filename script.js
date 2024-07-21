var tl = new TimelineLite();

function initThis(){
	setElements();
}

function setElements(){
	TweenMax.set('#main_content', {opacity:1, delay:.3});

	TweenMax.set('#girl, #girl_drop_shadow', {scale:0.1});

	// frame 2
	TweenMax.set('#bg2, .f5_txt_2', {opacity:0});
	TweenMax.set('#line_1', {x:300});
	TweenMax.set('.f2_txt, .f3_txt, .f4_txt, .f5_txt_1', {opacity:0, y:50})
	
	// frame 3
	TweenMax.set('#logo', {opacity:0});

	// frame 4
	TweenMax.set('#cta', {opacity:0});
	TweenMax.delayedCall(0.3, introFrame);
}

function introFrame() {
	// Frame1
	tl.to('#girl, #girl_drop_shadow', 0.5, {z:"0.1px", rotation: 0.02, scale:1, force3D:false, ease:Power2.easeOut})
	.to('#line_1', 0.5, {delay:.5, x:0, ease:Power2.easeOut})
	.to('#girl, #girl_drop_shadow', 0.5, {x:-190, ease:Power2.easeOut}, "=-.5")
	.to('#bg2', 0.5, {opacity:1}, "=-.1.5")
	.to('.f2_txt', {
    	y: 0,
    	opacity: 1,
    	stagger: 0.3
	})
	.to('.f2_txt', 0.5, { opacity:0, ease:Power2.easeOut}, "=+2")
	.to('#logo', 0.5, { opacity:1, ease:Power2.easeOut}, "=-.3")
	.to('.f3_txt', {
    	y: 0,
    	opacity: 1,
    	stagger: 0.3
	}, "=-.3")
	.to('.f3_txt', 0.5, { delay:2, opacity:0, ease:Power2.easeOut})
	.to('.f4_txt', {
    	y: 0,
    	opacity: 1,
    	stagger: 0.3
	}, "=-.3")
	.to('#cta', 0.5, { opacity:1, ease:Power2.easeOut})
	.to('.f4_txt', 0.5, { delay:2, opacity:0, ease:Power2.easeOut})
	.to('.f5_txt_1', 0.5, { y:0, opacity:1, ease:Power2.easeOut})
	.to('.f5_txt_2', 0.5, { opacity:1, ease:Power2.easeOut})
}

window.addEventListener('load', initThis);