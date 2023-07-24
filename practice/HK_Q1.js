 function outer(n)
 {
     var str = "";
     for(var i = 0;i<n;i++)
     {
         str = str + "*";
     }
     console.log(str);
 }
 
 outer(5);
 
  function inner(n)
 {
     var str = "*";
     for(var i = 0;i<n-2;i++)
     {
         str = str + " ";
     }
     console.log(str + "*");
     
 }
 
 inner(5)
 inner(5)
 outer(5);
