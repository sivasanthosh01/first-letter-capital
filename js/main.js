var a=prompt("Enter the Word");
document.write("The given word is:&nbsp;"+a+"<br>");
var b=a.replace(a[0],a[0].toUpperCase());
document.write("Now the word is Capitalized<br>"+b);
