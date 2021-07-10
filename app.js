//Ch 43-48

1
function q1(){
    alert("hello World")
}

2
function q2(){
    alert("Thanks for Purchasing a phone from us")
}
3
function del(){
 var ab=document.getElementById("hey").remove();
}


5
count=0;

function inc(){
    count=count+1;

    var count1=document.getElementById("count");

count1.innerHTML=count
    
}
function dec(){
    count=count-1;

    var count1=document.getElementById("count");

count1.innerHTML=count
    
}

// Ch 39 - 42
2
// function year(y){
//     var ly=y%4;
//     if(ly==0){
//         alert (y+ " is leap year ")
//     }
//     else{
//         alert(y+" is not a leap year." )
//     }
// }
// var year1=+prompt("Enter a year")
// year(year1)

3
// function area(a,b,c){
//    var s=(a+b+c)/2;
//     var area1 =Math.sqrt(s*(s-a)*(s-b)*(s-c))
//    return area1;
// }
// var x=+prompt("To find Area of Triangle \n Enter length of side A")
// var y=+prompt(" Enter length of side A")
// var z=+prompt(" Enter length of side A")

// var a=area(x,y,z)
// alert("The Area of Triangle is "+Math.floor(a));

4
// var s1=+prompt("Enter marks of Eng")
// var s2=+prompt("Enter marks of Math")
// var s3=+prompt("Enter marks of Urdu")

// function mainfun(sub1,sub2,sub3){
//         var obttotal=sub1+sub2+sub3;

//         function percent(){
//             var percent=(obttotal/300)*100;
//             alert("Your Percentage is "+Math.floor(percent)+"%")
//         }
//         function ave(){
//         var ave=obttotal/3;
// alert("Average marks "+ave)
//         }
//         percent()
//         ave()
// }

// mainfun(s1,s2,s3)


6
// var s = prompt("Enter a sentence for rmeve vowels");
// function vowels(string){
// string = string.replace( /[aeiou]/g, '' );

// alert(string);
// }
// vowels(s)

8
// var dist=+prompt("Enter distance between any two Cities (in km)")
// function conversion(e){
// function meters(){
//       var m=  e*1000;
//       alert("Distance between two cities in meters is "+m)
// }
// function feet(){
//     var m=  e*3280.84;
//     alert("Distance between two cities in feet is "+m)
// }
// function inches(){
//     var m=  e*339370.1;
//     alert("Distance between two cities in inches is "+m)
// }
// function centim(){
//     var m=  e*100000;
//     alert("Distance between two cities in centmeters is "+m)
// }
// meters()
// feet()
// inches()
// }
// conversion(dist);

10
// an=+prompt("Enter number"," ");

// function currency(n){
// h=Math.floor(n/100);
// alert(h)
// n=n-h*100;
// alert(n)
// f=Math.floor(n/50);
// n=n-f*50;
// alert(n)
// t=Math.floor(n/10);
// n=n-t*10;

// document.write("Hundreds="+h+"<br>Fifties="+f+"<br>Tens="+t)
// }
// currency(an)