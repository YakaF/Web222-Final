
      function formValidation()  
      {
         clearErrors();
         var result = validateFirstname();
         result = validateFirstnameFirstCap() && result;
         result = validateLastname() && result;
         result = validateLastnameFirstCap() && result;
         result = validatePassword6() && result;
         result = validatePasswordFirstAlphabet && result;
         result = validatePassword1Upper() && result;
         result = validatePassword1Digits() && result;
         result = validateUsername6() && result;
         return result;
      }

 //////////////////
 /////////////////
     
      function validateFirstname() 
      {
         var allAlpha = true;
         var elem = document.querySelector("#firstname");
         var inputValue = elem.value.trim();
         inputValue = inputValue.toUpperCase();
    
         for (var i = 0; i < inputValue.length; i++) {
              // check all characters are letters
              if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
         }  
       
         if (!allAlpha){
              showErrors("In First Name section, please enter with all alphabet letters.");
              elem.focus();
              return false;
         } 
         return true;
    } 
      //////////////////////////
      //////////////////////////
    function validateFirstnameFirstCap() 
    {
      var cap1 = true;
      var elem = document.querySelector("#firstname");
      if (!elem.value.charAt(0).match(/^[A-Z]/) )
      {
         cap1 = false;
      }
      
      if (!cap1)
      {
         showErrors("<br>In first name section, the first letter should be in capital.");
         elem.focus();
         return false;
      }
      return true;
   }
      //////////////////////////
      //////////////////////////

   function validateLastname() 
   {
      var allAlpha = true;
      var elem = document.querySelector("#lastname");
      var inputValue = elem.value.trim();
      inputValue = inputValue.toUpperCase();
 
      for (var i = 0; i < inputValue.length; i++) {
           // check all characters are letters
           if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
      }  
    
      if (!allAlpha){
           showErrors("<br>In Last Name section, please enter with all alphabet letters.");
           elem.focus();
           return false;
      } 
      return true;
 } 
   //////////////////////////
   //////////////////////////
 function validateLastnameFirstCap() 
 {
   var cap1 = true;
   var elem = document.querySelector("#lastname");
   if (!elem.value.charAt(0).match(/^[A-Z]/) )
   {
      cap1 = false;
   }
   
   if (!cap1)
   {
      showErrors("<br>In Last name section, the first letter should be in capital.");
      elem.focus();
      return false;
   }
   return true;
}
   
      //////////////////////////
      //////////////////////////
     
      function validatePassword6() 
      {

         var stringName = document.querySelector("#password").value;
         stringName = stringName.trim();
         var stringLength = stringName.length;
  
  
         if (stringLength < 6) 
         {
           showErrors( "<br>Password must be at least 6 characters long");
             return false;
         }

        /* if (!stringName.charAt(0).match(/^[A-Z]/))
         {
            showErrors("<br>In Password section, the first letter should be alphabet.");
            return false;
         }*/

        return true; 
  
       }

 //////////////////////////
      //////////////////////////

  

      function validatePasswordFirstAlphabet() 
      {
         var cap1 = true;
         var elem = document.querySelector("#password");
         if (!elem.value.charAt(0).match(/^[a-zA-Z]/) )
         {
            cap1 = false;
         }
         
         if (!cap1)
         {
            showErrors("<br>In password section, the first letter should be in alphabet.");
            elem.focus();
            return false;
         }
         return true;
      }

/////////////
////////////
function validatePassword1Upper() 
{ 
   var passUpper = false;
   var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var elem = document.querySelector("#password");
   var inputValue = elem.value.trim();
 
   for (var i = 0; i < inputValue.length; i++) {
        if (alphString.indexOf(inputValue.substr(i,1))>= 0)   
        { passUpper = true; }
   }  
 
   if (!passUpper)
   {
        showErrors("<br> Please enter 1 upper case in password");
        elem.focus();
        return false;
   } else
    { return true; }
} 


/////////////
////////////
function validatePassword1Digits() 
{ 
   var passDigit = false;
   var alphString1 = "0123456789";
   var elemD = document.querySelector("#password");
   var inputValueD = elemD.value.trim();
 
   for (var i = 0; i < inputValueD.length; i++) {
        if (alphString1.indexOf(inputValueD.substr(i,1))>= 0)   
        { passDigit = true; }
   }  
 
   if (!passDigit)
   {
        showErrors("<br> Please enter 1 digit in password");
        elemD.focus();
        return false;
   } else
    { return true; }
} 

/////////////
////////////

function validateUsername6() 
{

   var stringName = document.querySelector("#username").value;
   stringName = stringName.trim();
   var stringLength = stringName.length;


   if (stringLength < 6) 
   {
     showErrors( "<br>user name must be at least 6 characters long");
       return false;
   }

  return true; 

 }

 //////////////////
 /////////////////

 function validateUsernameFirstAlphabet() 
 {
    var cap1 = true;
    var elem = document.querySelector("#username");
    if (!elem.value.charAt(0).match(/^[a-zA-Z]/) )
    {
       cap1 = false;
    }
    
    if (!cap1)
    {
       showErrors("<br>In user name section, the first letter should be in alphabet.");
       elem.focus();
       return false;
    }
    return true;
 }

 ///////////////
 //////////////


      function showErrors(messages) 
      {
         document.querySelector('#error').innerHTML += messages;
      } 

      function  clearErrors() 
      {
         document.querySelector('#error').innerHTML = "";       
      } 