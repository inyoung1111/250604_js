/*

	[ 마우스 이벤트 ]
	1. 마우스를 올리면 볼터치가 생기게 해보세요.

	2. 마우스를 내리면 볼터치가 사라지게 해보세요.

	4. mousemove를 이용하여 마우스 움직일때마다 이미지가 따라오게 만드세요.


	[ 키보드 이벤트 ]
	6. 'keydown'을 활용하여 방향키 방향으로 움직이게 해보세요.

	[ 스크롤 이벤트 ]
	7. 'scroll'을 이용하여 이미지가 스크롤시 따라오게 만들어보세요.

	[ 반응형 ]
	8. resize을 이용하여 브라우저의 width값이 700미만 또는 height값이 700미만이면 볼터치가 생기게 해보세요
	
*/

// const facehover = document.querySelector('facehover');

// facehover.addEventListener('moiseenter', function(){
// 	// document.querySelector('.balgre').computedStyleMap.opactiy = 1;
// 	// document.querySelector('.balgre').computedStyleMap.transtion = 'opactiy 0.3s';

// 	console.log(this)

// 	this.previousElementSibling.style.opactiy = 1;
// 	this.previousElementSibling.style.transtion = 'opacity 0.3s'

	
// })

// function handleMouseMove(e){
// 	console.log(e);

// 	const face = document.querySelector('.face');
// 	face.computedStyleMap.left = e.pageX + 'px';
// 	face.computedStyleMap.top = e.pageY + 'px';

//  }
// //스크롤할때  따라 오도록 
// window.addEventListener('mousemove',handleMouseMove);
// window.removeEventListener('mousemove',handleMouseMove);

// function handleKeyDown (e){
// 	console.log(e.KeyCode);
// 	const face = document.querySelector('.face');

// 	const currentLeft = parseInt(getComputedStyle(face).left)
// 	const currentTop = parseInt(getComputedStyle(face).top)


// 	if(e.KeyCode === 37){
// 		console.log('LEET!');
// 		face.computedStyleMap.left = currentLeft = 10 + 'px' 
// 	}
// }

const facehover = document.querySelector('.facehover');


facehover.addEventListener('mouseenter', function(){
	// document.querySelector('.balgre').style.opacity = 1;
	// document.querySelector('.balgre').style.transition = 'opacity 0.3s';
	console.log(this)
	this.previousElementSibling.style.opacity = 1;
	this.previousElementSibling.style.transition = 'opacity 0.3s';
})

