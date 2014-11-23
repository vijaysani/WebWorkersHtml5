WebWorkersHtml5
===============
Testing Web Workers efficiency by using simple program and running it 16 million times to see if browser crashes. 

Problem : Consider an example where in I'm running a program having complex computations on the client side, the chances of your 
browser becoming unresponsive are very high and might eventualy crash your browser .

Solution: Html5 Web Workers API .
Web Workers: A web worker is a JavaScript running in the background, without affecting the performance of the page.

My Example Problem : 
Here in my example I tried to display the hex colors on the page in a span tag by setting background color of the span tag.
      Hexadecimal value range from 0x000000 to 0xFFFFFF 
      ie  0-f --> 16 digits and FFFFFF --> 16*16*16*16*16*16 = 16 raise to 6 (total of more than 16 million different colors ).
When I tried to display the colors using JS, browers crashed within couple of seconds .
  
I have used web workers to solve my above problem and it will display all the possible color combinations .

I have created 2 separate web worker threads to see if any performance issues occur while displaying on the page,
but didnt find any .

I will update the details of the code soon .
