function firstWord(s) {
  // your code here
	let p='';
	if(s.length==0){
		return '';
	}
	
	for(let i=0;i<s.length;i++){
		if(s.charAt[i]==' ' || i==s.length-1){
			return p;
		}
			p=p+s.charAt[i];
		}
	return p;
}

// Do not change the code below

/*const s = prompt("Enter String:");
alert(firstWord(s));*/
