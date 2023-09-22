var display_text = document.getElementById("frame");
var oparator,firstvalue,secondvalue="",sympol,ans,fact=1,i,restart;
display_text.value = null;
var full_text,full_text_length,sliced_text;
var second_text,second_text_length,second_sliced_text;
var first_text,first_text_length,first_sliced_text;



//FIRST ROW___________________________________________________________________________________
function button_sqroot(){
   display_text.value = display_text.value+"√";
   oparator = true;
   sympol = 6;
}
function button_power(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"√ ";
   oparator = true;
   sympol = 5;
}
function button_point(){
   if(oparator == true)
   {
     secondvalue = secondvalue+".";
     display_text.value = display_text.value+".";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+".";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"."; 
   }
}
function button_DE(){
   if(oparator == true && secondvalue == "")
   {
     oparator = false;
     full_text = display_text.value;
     full_text_length = full_text.length;
     sliced_text = full_text.slice(0,full_text_length-1);
     display_text.value = sliced_text;
   }
   else if(oparator == true)
   {
      full_text = display_text.value;
      full_text_length = full_text.length;
      sliced_text = full_text.slice(0,full_text_length-1);
      display_text.value = sliced_text;

      second_text = secondvalue;
      second_text_length = second_text.length;
      second_sliced_text = second_text.slice(0,second_text_length-1);
      secondvalue = second_sliced_text;
   }
   else
   {
      first_text = display_text.value;
      first_text_length = first_text.length;
      sliced_text = first_text.slice(0,first_text_length-1);
      display_text.value = sliced_text;
   }
}
function button_AC(){
   display_text.value = "";
   firstvalue="";
   secondvalue="";
   ans="";
   fact = 1;
}
function button_square(){
   display_text.value = display_text.value+"²";
   sympol = 7;
   firstvalue = parseFloat(display_text.value);
}
//SECOND ROW______________________________________________________________________________________
function button_9(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"9";
     display_text.value = display_text.value+"9";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"9";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"9"; 
   }
}
function button_8(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"8";
     display_text.value = display_text.value+"8";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"8";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"8"; 
   }
}
function button_7(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"7";
     display_text.value = display_text.value+"7";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"7";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"7"; 
   }
}
function button_x(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"x";
   oparator = true;
   sympol = 3;
}
function button_div(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"/";
   oparator = true;
   sympol = 4;
}

function button_cube(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"^3";
   sympol = 8;
}

//THIRD ROW___________________________________________________________________________________
function button_4(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"4";
     display_text.value = display_text.value+"4";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"4";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"4"; 
   }
}
function button_5(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"5";
     display_text.value = display_text.value+"5";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"5";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"5"; 
   }
}
function button_6(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"6";
     display_text.value = display_text.value+"6";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"6";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"6"; 
   }
}
function button_add(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"+";
   oparator = true;
   sympol = 1;
}
function button_sub(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"-";
   oparator = true;
   sympol = 2;
}

function button_factorial(){
   firstvalue = parseFloat(display_text.value);
   display_text.value = display_text.value+"!";
   sympol = 9;
}
//FOURTH ROW_____________________________________________________________________________
function button_1(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"1";
     display_text.value = display_text.value+"1";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"1";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"1"; 
   }
}
function button_2(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"2";
     display_text.value = display_text.value+"2";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"2";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"2"; 
   }
}
function button_3(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"3";
     display_text.value = display_text.value+"3";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"3";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"3"; 
   }
}
function button_0(){
   if(oparator == true)
   {
     secondvalue = secondvalue+"0";
     display_text.value = display_text.value+"0";
   }
   else if(restart == true)
   {
      display_text.value = "";
      firstvalue="";
      secondvalue="";
      ans="";
      fact = 1;
      display_text.value = display_text.value+"0";
      restart = false;
   }
   else
   {
      display_text.value = display_text.value+"0"; 
   }
}
function button_ans(){
      secondvalue = "";
      display_text.value = ""+ans;
}

//_________________________________________________________________________________________

function button_equal(){
   display_text.value = display_text.value+"=";
   secondvalue = parseFloat(secondvalue);
   oparator=false;
   restart = true;
  
   switch(sympol)
   {

      //ADDITION
      case 1: 
      ans = firstvalue+secondvalue;
      display_text.value = display_text.value+ans;
      break;
      
      //SBSTRACTION
      case 2: 
      ans = firstvalue-secondvalue;
      display_text.value = display_text.value+ans
      break;

      //MULTIPLICATION
      case 3: 
      ans = firstvalue*secondvalue;
      display_text.value = display_text.value+ans
      break;

      //DIVITION
      case 4: 
      ans = firstvalue/secondvalue;
      display_text.value = display_text.value+ans
      break;

      //POWER
      case 5: 
      ans = Math.pow(firstvalue,secondvalue);
      display_text.value = display_text.value+ans
      break;

      //ROOT
      case 6: 
      ans = Math.sqrt(secondvalue);
      display_text.value = display_text.value+ans
      break;

      //SQUARE
      case 7: 
      ans = Math.pow(firstvalue,2);
      display_text.value = display_text.value+ans;
      break;

      //CUBE
      case 8: 
      ans = Math.pow(firstvalue,3);
      display_text.value = display_text.value+ans;
      break;

      //FACTORIAL
      case 9: 
      for(i=1; i<=firstvalue; i++)
      {
        fact = fact*i;
      }
      ans = fact;
      display_text.value = display_text.value+ans;
      break;
   }
}