// Q.1
document.write( "<h4><u>Q.1</u></h4>");
    for (i = 1; i <= 5; i++) {
        alert("hello world " + [i]);
    };
// Q.2
document.write( "<h4><u>Q.2</u></h4>");
for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");
};
 //Q.3
 document.write( "<h4><u>Q.3</u></h4>");
var anyNumber = prompt("Enter number to show its table");
var numberLength = prompt("enter length of table");
for (var q = 1; q <= numberLength; q++) {
    var result = q * anyNumber;

    document.write(anyNumber + " x " + q + " = " + result + "<br>")}
// Q.4
document.write( "<h4><u>Q.4</u></h4>");
var ar = ["nokia", "samsung", "apple", "sony", "huawei"];
for (var w = 0; w <= ar.length; w++) {
    document.write(ar[w] + "<br>")
};
// Q.5
document.write( "<h4><u>Q.5</u></h4>");
var fruits = ["apple ", "banana ", "mango ", "orange ", "strawberry "];
for (var w = 0; w <= ar.length; w++) {
    document.write(fruits[w] + "<br>")
}
for (e = 0; e < fruits.length; e++) {
    document.write("element at index " + e + " is " + fruits[e] + "<br>")
};
// Q.6 
document.write( "<h4><u>Q.6</u></h4>");
var z=[];
var numberOfItems=parseInt(prompt("Enter number of items"));
document.write("Nomber of items: "+numberOfItems+"<br>");
document.write("Items: <br>")

for(var r=0; r<numberOfItems; r++){
var items=prompt("enter item for "+ r +" index");
z.push(items);
document.write(z[r]+"<br>");
};
// Q.7  
document.write( "<h4><u>Q.7</u></h4>");
for (var x=1; x <=15; x++) {
    document.write(x + ", " ); 
};
document.write( "<br><br>");

var num;
document.write("Reverse Counting: " + "<br>");
for (num = 10; num >= 1; num--) {
  document.write( num + ", " );
};
document.write( "<br><br>");

document.write("Odd Numbers: " + "<br>");
for(var b=1; b<20; b+=2) {
    document.write(b + ", ");
};
document.write( "<br><br>");

document.write("Even Numbers: " + "<br>");
for(var w=0; w<=20; w +=2) {
    document.write(w + ", ");
};
document.write( "<br><br>");

document.write("Series: " + "<br>");
for(var r=2; r<=20; r+=2) {
    if (r%2===0) {
        document.write(r + "K, ");
    }
};
document.write( "<br><br>");
// Q.8 
document.write( "<h4><u>Q.8</u></h4>");
var foods=["chips","cake","apple pie","cookie","patties"];
var userSearch=prompt("Welcome to our bakery!\n What do you want to order?");
userSearch=userSearch.toLocaleLowerCase();
for(var t=0; t<foods.length; t++){
    if(userSearch===foods[t]){
        document.write(userSearch+" is available at "+t+" index");
    }
     else if(userSearch==!foods[t]){
        document.write(userSearch+" is not available");break;
    }
};
// Q.9
document.write( "<h4><u>Q.9</u></h4>");
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
for (var y = 0; y < numbers.length; y++) {
    if (largest < numbers[y] ) {
        largest = numbers[y];
    }
}
document.write("An array items: "+numbers+"<br>");
document.write("The largest number is "+largest);document.write("<br><br>");
// Q.10
document.write( "<h4><u>Q.10</u></h4>");
var numbers = [24, 53, 78, 91, 12];
var smallest = numbers[0];
for (var u = 0; u < numbers.length; u++) {
    if (smallest > numbers[u] ) {
        smallest = numbers[u];
    }
}
document.write("An array items: "+numbers+"<br>");
document.write("The smallest number is "+smallest);
// Q.11 
document.write( "<h4><u>Q.11</u></h4>");
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
var smallest = numbers[0];
for (var m = 0; m < numbers.length; m++) {
    if (smallest > numbers[m] ) {
        smallest = numbers[m];
    }
    else if (largest < numbers[m] ) {
        largest = numbers[m];}
}
document.write("An array items: "+numbers+"<br>");
document.write("The smallest number is "+smallest+"<br>");
document.write("The largest number is "+largest+"<br>")
// Q.12 
document.write( "<h4><u>Q.12</u></h4>");
var aNumber = 5;
var limit=101;
for (var q = aNumber; q < limit; q+=5) {
    document.write(q + " ,")
};
/*
// Q.13 *********
document.write( "<h4><u>Q.13</u></h4>");
var students = ["Ali", "Sami", "Taha", "Inam"];
var stdScores = [58, 73, 89, 90];
document.write("<table><tr>"+"<td>Students</td><td>Scores</td>"+"</tr>")
for(var s=0; s<students.length; s++){
    document.write("</tr>");
for(var d=0; d<stdScores.length; d++){
    document.write("<tr>"+"<td>"+students[s]+"</td>"+"<td>"+stdScores[d]+"</td>"+"</tr>");break;
}
document.write("</tr>");
}document.write("</table>");


// Q.14 *****
document.write( "<h4><u>Q.14</u></h4>");
var scores=[12, 45, 3, 22, 34, 50];
var stops=parseInt(prompt("Enter a value to print from beginning to that value.\n [12, 45, 3, 22, 34, 50]"));
for(var o=0; o<=scores.length; o++){
    if(stops==scores[o]){
        document.write(scores[0]+scores[stops])
    }
}
// Q.15 *****
document.write( "<h4><u>Q.15</u></h4>");
var A = [ [1,2,3] , [4,5,6] , [7,8,9] ];
for (var p=0; p<=A.length; p++){
    document.write(A[p]+"<br>");
    for(var a=0; a<=[p].length; a++){
        
        
        document.write(A[a]);
    }
}*/
// Q.16 
document.write( "<h4><u>Q.16</u></h4>");
var num=parseInt(prompt("Enter a number"));
for(var f=num; f>=0; f-=0.5){
    document.write([f]+" <b>,</b> ");
};
document.write( "<br>");

// Q.17
document.write( "<h4><u>Q.17</u></h4>");
for(var g=0; g<=20; g++){
    if([g]%2===0){
        document.write([g]+" is even"+"<br>");
    }
    else {
        document.write([g]+" is odd"+"<br>");
    }
};document.write(i + "<br>");

// Q.18
document.write( "<h4><u>Q.18</u></h4>");
var product=1;
for(var h=1; h<=7; h++){
    if([h]%2==!0){
        product = product * h;
    }
    else {
        continue;
    }
 
};document.write( product);
document.write( "<br>");
// Q.19
document.write( "<h4><u>Q.19</u></h4>");
var n_a = 7;
var stars2 = "";
for (var j = 0; j < n_a; j++) {
  for (var k = 0; k < n_a - j; k++) {
    stars2 += "*";
  }
  stars2 += "<br>";
}
document.write(stars2+"<br>");
// Q.20
document.write( "<h4><u>Q.20</u></h4>");
// a....
document.write("<h4>a.</h4>")
var n_b = 4;
var stars3 = "";

for(var l = 0; l < n_b; l++) { 
  for(var z = 0; z < n_b; z++) {
    stars3 += "*";
  }
  stars3 += "<br>";
}
document.write(stars3);
// b...
document.write("<h4>b.</h4>")
var n_c = 5;
var stars4 = "";
for (var x = 1; x <= n_c; x++) {
  for (var c = 0; c < x; c++) {
    stars4 += "*";
  }
  stars4 += "<br>";
}
document.write(stars4);
// c....
document.write("<h4>c.</h4>")
var n_d = 5;
var stars5 = "";
for (var v = 0; v < n_d; v++) {
  for (var b = 0; b < n_d - v; b++) {
    stars5 += "*";
  }
  stars5 += "<br>";
}
document.write(stars5+"<br>");