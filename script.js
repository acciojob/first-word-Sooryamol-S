function firstWord(s) {
  // your code here
	let s='';
	if(s.length==0){
		return '';
	}
	
	for(let i=0;i<s.length;i++){
		if(s.charAt[i]==' ' || i==s.length-1){
			return s;
		}
			s=s+s.charAt[i];
		}
	return s;
}

// Do not change the code below

/*const s = prompt("Enter String:");
alert(firstWord(s));*/
