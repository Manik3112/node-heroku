async function asgn(){
	for(let i=0 ; i<10 ; i++ ){
		console.log(`I : ${i}`)
	}
	for(let k=0 ; k<10 ; k++ ){
		console.log(`K : ${k}`)
	}
}

console.log(await asgn())