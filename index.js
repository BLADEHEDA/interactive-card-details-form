//The form validation of the page using the javascript
// use the dom to get the ID's OF THE ELEMENTS and manipulate it it accordingly
//CHECK THE validity of the inout (using if else s )  

const name = document.getElementById('username');
const num = document.getElementById('nums'); 
const month = document.getElementById('month');
const year = document.getElementById('year');
const series= document.getElementById('serie');

// lets create a finction htat permits us to verify the validity and availability of the data 
function anmess(){
    let namevalue = name.value;
    const numvalue = num.value;   
    const monthvalue = month.value;
    const yearvalue = year.value;
    const seriesvalue= series.value;
  
  // This line displays an error message below the inout dialog box indicating an error message  
    let error=  document.getElementById("error");
    let error1=  document.getElementById("error1");
    let error2=  document.getElementById("error2");
    let error3=  document.getElementById("error3");
  if(namevalue ==""){
    error.textContent = "This field cannot be empty"
  return false
  }

  else if(numvalue==""){

    error1.textContent="This field cannot be empty"
    return false;
 }
 else if(monthvalue==""){
  alert("enter a month");
  // error1.textContent="can't be blank"
  return false;
}
else if( yearvalue==""){
  alert("enter a year");

  // error2.textContent="can't be blank"
 
  return false;
}
else if( seriesvalue==""){
  alert("enter series number");

  // error.textContent="can't be blank"
 
  return false;
}

}
