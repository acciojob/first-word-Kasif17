function firstWord(s) {
  // your code here
	s = s.trim();
	 let result = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === " ") {
            return result; 
        }
        result += s.charAt(i); 
    }
    return result; 
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
