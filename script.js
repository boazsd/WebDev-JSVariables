var x=3;
console.log(x);
x="boaz shlomo-david"
console.log( typeof x);
var myObject = {eyeColor:"blue", name:"Fiat", height: 180};
myObject.eyeColor = "red";
myObject.isInIsrael = true;
myObject.city = "tel-Aviv";
var languages = {Hebrew: true, English: true, Russian: false}
myObject.languages = languages;
console.log( myObject.languages.Hebrew);
var myArray =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log( myArray);
console.log( myArray.length);
delete myArray[9];
delete myArray[8];
console.log( myArray);
