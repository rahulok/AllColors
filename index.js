var body = document.querySelector('.body');

// function dosettimeout(a,b,c) {
// 	setTimeout( function(){console.log(`${a}${b}${c}`)}, 1000 );
// }
let i=1;
for(let r = 0; r<=255;r+=3)
	for(let g = 0; g<=255; g+=3)
		for(let b = 0; b<=255; b+=3)
		{
			setTimeout(function(){body.style.backgroundColor = `rgb(${b},${r},${g})`},i*1);
			i++	;
			// setTimeout( function() {console.log(b)}, b*1000 )
			// dosettimeout(b,b,b);
		}
