const myArray = [
    {   "id":100,
        "image":"../assets/emp1.jpg",
      "firstName":"Anthony",
      "lastName":"Morris",
      "PreferredName" : "Anthony Morris",
      "email":"anthonymorris@gmail.com ",
      "jobTitle":"SharePoint practice head",
      "Office":"India",
      "department":"IT Department",
      "PhoneNumber":"9562562567",
       "SkypeId":"+91+9562562567"
    },
    {    "id":101,
         "image":"../assets/emp2.jpg",
        "firstName":"Helen",
        "lastName":"Zimmerman ",
        "PreferredName" : "Helen Zimmerman",
        "email":"helenzimmerma@gmail.com ",
        "jobTitle":"Operations manager",
        "Office":"India",
        "department":"IT Department",
        "PhoneNumber":"9362565567",
         "SkypeId":"+91+9362565567"
      }
      ,
          {
            "id":102,
            "image":"../assets/emp3.jpg",
            "firstName":"Jonathon",
            "lastName":"Smith",
            "PreferredName" : "Jonathon Smith",
            "email":"jonathonsmith@gmail.com ",
            "jobTitle":"Product manager",
            "Office":"Seattle",
            "department":"IT Department",
            "PhoneNumber":"8925555236",
             "SkypeId":"+91+8925555236"
          },
          { "id":103,
            "image":"../assets/emp4.jpg",
            "firstName":"Tami",
            "lastName":"Hopkins",
            "PreferredName" : "Tami Hopkins",
            "email":"tamihopkins@gmail.com ",
            "jobTitle":".Net developement",
            "Office":"Seattle",
            "department":"IT Department",
            "PhoneNumber":"9632587415",
             "SkypeId":"+91+9632587415"
          }
          ,
          { "id":104,
            "image":"../assets/emp5.jpg",
            "firstName":"Franklin",
            "lastName":"Humark",
            "PreferredName" : "Franklin Humark",
            "email":"franklinhumark@gmail.com ",
            "jobTitle":"Network Engineer",
            "Office":"Seattle",
            "department":"IT Department",
            "PhoneNumber":"9517536842",
             "SkypeId":"+91+9517536842"
          }
          ,
          {
            "id":105,
            "image":"../assets/emp6.jpg",
            "firstName":"Angela",
            "lastName":"Bailey",
            "PreferredName" : "Angela Bailey",
            "email":"angelabailey@gmail.com ",
            "jobTitle":"Business Analyst",
            "Office":"Seattle",
            "department":"IT Department",
            "PhoneNumber":"9637415820",
             "SkypeId":"+91+9637415820"
          }
          ,
          {
            "id":106,
            "image":"../assets/emp7.jpg",
            "firstName":"Robert",
            "lastName":"Mitchell",
            "PreferredName" : "Robert Mitchell",
            "email":"robertmitchell@gmail.com ",
            "jobTitle":"Software Engineer",
            "Office":"India",
            "department":"IT Department",
            "PhoneNumber":"9637415820",
             "SkypeId":"+91+9637415820"
          }
          ,
          {
            "id":107,
            "image":"../assets/emp8.jpg",
            "firstName":"Oliva",
            "lastName":"Watson",
            "PreferredName" : "Oliva Watson",
            "email":"olivawatson@gmail.com ",
            "jobTitle":"Software Developer",
            "Office":"Seattle",
            "department":"UX department",
            "PhoneNumber":"9637419520",
             "SkypeId":"+91+9637419520"
          }     
];
function visible()
{
    document.getElementsByClassName("listhidden")[0].style.display='block';
    document.getElementById('viewmore').style.display='none';
}
function hide(){
    document.getElementsByClassName("listhidden")[0].style.display='none';
    document.getElementById('viewmore').style.display='block';
}
//---------------------------------------------------ADD EMPLOYEE BUTTON---------------------------------------------------------------------
function added()
{   

   if(validateForm()) {
    console.log("form validated");
    var profile="../assets/emp7.jpg";
    var fname=document.getElementById("input_fname").value;
    var lname=document.getElementById("input_lname").value;
    var pname=document.getElementById("input_pname").value;
    var email=document.getElementById("input_email").value;
    var job=document.getElementById("input_job_title").value;
    var deptval=document.getElementById("input_department").value;
    var number=document.getElementById("input_number").value;
    var skype=document.getElementById("input_skype").value;
    var loc=document.querySelector( 'input[name="location"]:checked').value;
   myArray.push({
            "id":myArray.length+100,
            "image":profile,
            "firstName":fname,
            "lastName":lname,
            "PreferredName" : pname,
            "email":email,
            "jobTitle":job,
            "Office":deptval,
            "department":deptval,
            "PhoneNumber":number,
             "SkypeId":skype,
             "Office":loc
   });
   refreshPage();
   clear_form_data();
   return true;
}
else{
  
    // clear_form_data();
return false;
}
}
function clear_form_data()
{
    document.getElementById('input_fname').value="";
    document.getElementById('input_lname').value="";
    document.getElementById('input_pname').value="";
    document.getElementById('input_email').value="";
    document.getElementById('input_job_title').value="";
    document.getElementById('input_department').value="";
    document.getElementById('input_number').value="";
    document.getElementById('input_skype').value="";
    document.getElementById('input_fname').style.border="1px solid black";
    document.getElementById('input_lname').style.border="1px solid black";
    document.getElementById('input_pname').style.border="1px solid black";
    document.getElementById('input_email').style.border="1px solid black";
    document.getElementById('input_job_title').style.border="1px solid black";
    document.getElementById('input_department').style.border="1px solid black";
    document.getElementById('input_number').style.border="1px solid black";
    document.getElementById('input_skype').style.border="1px solid black";
    document.getElementById('mailerror').innerHTML="";   
}
//-----------------------------------------FORM VALIDATION------------------------------------------------------------------
function validateForm()
{
    var fname=document.getElementById("input_fname").value.trim();
    var lname=document.getElementById("input_lname").value.trim();
    var Pname=document.getElementById("input_lname").value.trim();
    var mail=document.getElementById("input_email").value.trim();
    var jtitle=document.getElementById('input_job_title').value.trim();
    var dep=document.getElementById('input_department').value.trim();
    var tel=document.getElementById('input_number').value.trim();
    var sky=document.getElementById('input_skype').value.trim();
    
    var regx=/([a-zA-Z0-9\.-]+)@([a-z]+).([a-z]{2,10})/;
    var namepat=/^([a-zA-Z]+)$/;
    var numregx=/^[6-9][0-9]{9}$/;
    
    if(!(namepat.test(fname)))
    {   
        document.getElementById('input_fname').style.border="3px solid red";
        document.getElementById('fnerror').innerHTML="enter valid name";
    }
    else{
        document.getElementById('input_fname').style.border="3px solid green";
        if(!(namepat.test(lname)))
        {
           document.getElementById('input_lname').style.border="3px solid red";
           document.getElementById('lnerror').innerHTML="enter valid name(length should not exceed more than 12)";
        }
        else{
            document.getElementById('input_lname').style.border="3px solid green";
            if(regx.test(mail)){
                document.getElementById('input_email').style.border="3px solid green";
                if(jtitle=='SharePoint practice head'||jtitle=='Operations manager'||jtitle=='Product manager'||jtitle=='.Net developement'||jtitle=='Network Engineer'||jtitle=='Business Analyst'||jtitle=='Software Engineer'||jtitle=='Software Developer')
                {
                    document.getElementById('input_job_title').style.border="3px solid green";
                    if(dep=='IT Department'||dep=='HR Department'||dep=='UX Department')
                    {
                        document.getElementById('input_department').style.border="3px solid green";
                       if(numregx.test(tel))
                       {
                          document.getElementById('input_number').style.border="3px solid green";
                          if(regx.test(sky))
                          {
                            document.getElementById('input_skype').style.border="3px solid green";
                            return true;
                          }
                          else{
                            
                        document.getElementById('input_skype').style.border="3px solid red";
                        document.getElementById('skyperror').innerHTML="Enter valid skype ";
                        error();
                        return false;
                          }
                       }
                       else{
                        document.getElementById('input_number').style.border="3px solid red";
                        document.getElementById('phnerror').innerHTML="Enter valid phone number";
                        error();
                        return false;
                       }
                        
                    }
                    else{
                        document.getElementById('input_department').style.border="3px solid red";
                        
                        error();
                        return false;
                    }

                }
                else{
                  
                    document.getElementById('input_job_title').style.border="3px solid red";
                   
                    error();
                    return false;
                }

            }
            else{
                document.getElementById('input_email').style.border="3px solid red";
                document.getElementById('mailerror').innerHTML="Please fill valid email ";
                error();
                return false;
            }
            
        }
    }
}
function error()
{
  var choice=confirm("enter all the details");
  if(choice==true){
    Event.stopPropagation();
    return true;
  }
  else{
    return false;
  }
}
// -----------------------------------DISPLAYING DATA INTO HTML PAGE--------------------------------------------------------------
var output="";
for(let i=0;i<myArray.length;i++)
{
    output=output.concat(`
    <div class="emp" onclick="popup(${myArray[i].id})" > 
    <img src="${myArray[i].image}" alt="img" class="profilepic"> 
    <div class="card_content">
    <h3 class="prefname">${myArray[i].PreferredName}</h3>
    <p class="jobtitle">${myArray[i].jobTitle}</p>
    <p class="dept">${myArray[i].department}</p>
    <div class="links">
    <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
</div>
</div>
    </div>`);
   document.getElementsByClassName("results_box")[0].innerHTML=output;
}
function filterIt(){
    console.log("IT filter");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].department=="IT Department"){
            count=count+1;
        }
    }
    document.getElementById("it").innerHTML= "IT"+"("+count+")";   
}
function filterHuman(){
    console.log("filterHr");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].department=="Human resource"){
            count=count+1;
        }
    }
    document.getElementById("humanRes").innerHTML= "Human resource"+"("+ count+ ")";   
}
function filterMd(){
    console.log("filter MD");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].department=="MD"){
            count=count+1;
        }
    }
    document.getElementById("md").innerHTML= "MD"+"("+ count+ ")";  
}
function filterUx(){
    console.log("filter Sales");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].department=="UX department"){
            count=count+1;
        }
    }
    document.getElementById("uxdept").innerHTML= "UX department"+"("+ count+ ")";   
}
function filterSeattle(){
    console.log("filterSeattle");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].Office=="Seattle"){
            count=count+1;
        }
    }
    document.getElementById("seattle").innerHTML= "Seattle"+"("+ count+ ")";  
}
function filterIndia(){
    console.log("filter India");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].Office=="India"){
            count=count+1;
        }
    }
    document.getElementById("india").innerHTML= "India"+"("+ count+ ")"; 
}
function filterSharePoint(){
    console.log("filter sharepoint");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="SharePoint practice head"){
            count=count+1;
        }
    }
    document.getElementById("sharepoint").innerHTML="SharePoint practice head"+"("+ count+ ")";
    
}
function filterDotNet(){
    console.log("filter Dotnet");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle==".Net developement"){
            count=count+1;
        }
    }
    console.log(count);
 document.getElementById("dotnet").innerHTML=".Net developement"+ "("+count+")";
    
}
function filterRecruit(){
    console.log("filter Recruit");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="Recruiting Expert"){
            count=count+1;
        }
    }
    document.getElementById("recruit").innerHTML= "Recruiting Expert"+"("+ count+ ")";
    
}
function filterBi(){
    console.log("filter Bi");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="BI Developer"){
            count=count+1;
        }
    }
    document.getElementById("bi").innerHTML= "BI Developer"+"("+ count+ ")";
    
}
function filterBa(){
    console.log("filter business analyst");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="Business Analyst"){
            count=count+1;
        }
    }
    document.getElementById("business").innerHTML= "Business Analyst"+"("+ count+ ")";
    
}
function filterSd()
{
    console.log("filter software developer");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="Software Developer"){
            count=count+1;
        }
    }
    document.getElementById("software").innerHTML= "Software Developer"+"("+ count+ ")";
}
function filterEa()
{
    console.log("filter Executive Assistant");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="Executive Assistant"){
            count=count+1;
        }
    }
    document.getElementById("executive").innerHTML= "Executive Assistant"+"("+ count+ ")";
}
function filterHr()
{
    console.log("filter HR manager");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="HR manager"){
            count=count+1;
        }
    }
    document.getElementById("hrM").innerHTML= "HR manager"+"("+ count+ ")";
}
function filterQe()
{
    console.log("filter Quality Engineer");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="Quality engineer"){
            count=count+1;
        }
    }
    document.getElementById("quality").innerHTML= "Quality engineer"+"("+ count+ ")";
}
refreshPage();
function alpEmp(){
    employees();
}
function clearEmp(){
    employees();
}
function dept(Dept){
    var result="";
    for(let i=0;i<myArray.length;i++){
      if(myArray[i].department==Dept)
      {
        result=result.concat(`
        <div class="emp">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3>
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>
        `);
      }
    }
    document.getElementsByClassName("results_box")[0].innerHTML=result;
}
function noRes()
{
    document.getElementsByClassName("results_box")[0].innerHTML="<h1>"+"no results found"+"</h1>";
}
function offices(place){
    var result="";
    for(let i=0;i<myArray.length;i++){
      if(myArray[i].Office==place)
      {
     
        result=result.concat(`
        <div class="emp">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3>
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
        <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
        <i class="bi bi-chat-fill pe-2 icons"></i>
        <i class="bi bi-star-fill pe-2 icons"></i>
        <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>
        `);
     document.getElementsByClassName("results_box")[0].innerHTML=result;
      }
    }
}
function jobTitle(job){
    var result="";
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle==job)
      {
        result=result.concat(`
        <div class="emp">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3>
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>
        `);
     
    }
}
  document.getElementsByClassName("results_box")[0].innerHTML=result;
   }
// ----------------------------------------FUNCTION FOR ALPHABETICAL SEARCH--------------------------------------------------
function alphabet(letter)
{
    var result="";
    for(let i=0;i<myArray.length;i++)
    { 
        if(((document.getElementById("slct_option").value)=="FirstName"))
      {
         if(myArray[i].firstName.charAt(0)==letter)
         {
            result=result.concat(`
            <div class="emp">
            <img src="${myArray[i].image}" alt="img" class="profilepic"> 
            <div class="card_content">
            <h3 class="prefname">${myArray[i].PreferredName}</h3>
            <p class="jobtitle">${myArray[i].jobTitle}</p>
            <p class="dept">${myArray[i].department}</p>
            <div class="links">
            <i class="bi bi-telephone-fill pe-2 icons"></i>
            <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
            <i class="bi bi-chat-fill pe-2 icons"></i>
            <i class="bi bi-star-fill pe-2 icons"></i>
            <i class="bi bi-heart-fill icons"></i>
        </div>
        </div>
            </div>
            `);
        
         }
      }
      else if(((document.getElementById("slct_option").value)=="LastName")) 
      {
        if(myArray[i].lastName.charAt(0)==letter)
        {
           result=result.concat(`
           <div class="emp">
           <img src="${myArray[i].image}" alt="img" class="profilepic"> 
           <div class="card_content">
           <h3 class="prefname">${myArray[i].PreferredName}</h3>
           <p class="jobtitle">${myArray[i].jobTitle}</p>
           <p class="dept">${myArray[i].department}</p>
           <div class="links">
           <i class="bi bi-telephone-fill pe-2 icons"></i>
           <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
           <i class="bi bi-chat-fill pe-2 icons"></i>
           <i class="bi bi-star-fill pe-2 icons"></i>
           <i class="bi bi-heart-fill icons"></i>
       </div>
       </div>
           </div>
           `);
       
        }
      }
      else{
        if(myArray[i].firstName.charAt(0)==letter)
        {
           result=result.concat(`
           <div class="emp">
           <img src="${myArray[i].image}" alt="img" class="profilepic"> 
           <div class="card_content">
           <h3 class="prefname">${myArray[i].PreferredName}</h3>
           <p class="jobtitle">${myArray[i].jobTitle}</p>
           <p class="dept">${myArray[i].department}</p>
           <div class="links">
           <i class="bi bi-telephone-fill pe-2 icons"></i>
           <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
           <i class="bi bi-chat-fill pe-2 icons"></i>
           <i class="bi bi-star-fill pe-2 icons"></i>
           <i class="bi bi-heart-fill icons"></i>
       </div>
       </div>
           </div>
           `);
       
        }
      }

   }
    document.getElementsByClassName("results_box")[0].innerHTML=result;
}
// ----------------------------------------FUNCTION FOR DISPLAYING ALL EMPLOYEES DATA--------------------------------------------------
function employees()
{
    var output="";
    for(let i=0;i<myArray.length;i++)
    {
        // console.log(myArray[i].firstName);
        output=output.concat(`
        <div class="emp" onclick="popup(${myArray[i].id})">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3> 
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>`);
        console.log(output);
       document.getElementsByClassName("results_box")[0].innerHTML=output;
    } 
}
// -----------------------------------------------FOR SEARCH OPTION-----------------------------------------------------------------
const search=document.getElementById('search');
search.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    var res=e.target.value;
    var result="";
    for(let i=0;i<myArray.length;i++){
        if(((document.getElementById("slct_option").value)=="FirstName")) 
        {
            var name=myArray[i].firstName.toLowerCase();
            if((name.includes(res)))
          {
        result=result.concat(`
        <div class="emp">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3>
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>
        `);
     
    }
        }
       else if(((document.getElementById("slct_option").value)=="LastName")) 
        {
            var name=myArray[i].lastName.toLowerCase();
            if((name.includes(res)))
      {
        result=result.concat(`
        <div class="emp">
        <img src="${myArray[i].image}" alt="img" class="profilepic"> 
        <div class="card_content">
        <h3 class="prefname">${myArray[i].PreferredName}</h3>
        <p class="jobtitle">${myArray[i].jobTitle}</p>
        <p class="dept">${myArray[i].department}</p>
        <div class="links">
        <i class="bi bi-telephone-fill pe-2 icons"></i>
    <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
    <i class="bi bi-chat-fill pe-2 icons"></i>
    <i class="bi bi-star-fill pe-2 icons"></i>
    <i class="bi bi-heart-fill icons"></i>
    </div>
    </div>
        </div>
        `);
     
    }
        }
        else{
            var name=myArray[i].PreferredName.toLowerCase();
            // if((myArray[i].PreferredName==res)||(myArray[i].firstName==res))
            if(name.includes(res))
            {
              result=result.concat(`
              <div class="emp">
              <img src="${myArray[i].image}" alt="img" class="profilepic"> 
              <div class="card_content">
              <h3 class="prefname">${myArray[i].PreferredName}</h3>
              <p class="jobtitle">${myArray[i].jobTitle}</p>
              <p class="dept">${myArray[i].department}</p>
              <div class="links">
              <i class="bi bi-telephone-fill pe-2 icons"></i>
          <i class="bi bi-chat-left-dots-fill pe-2 icons"> </i>
          <i class="bi bi-chat-fill pe-2 icons"></i>
          <i class="bi bi-star-fill pe-2 icons"></i>
          <i class="bi bi-heart-fill icons"></i>
          </div>
          </div>
              </div>
              `);          
          }
        }  
}
  document.getElementsByClassName("results_box")[0].innerHTML=result;
}  
)
//---------------------------------------------DISPLAYING EMPLOYEE DETAILS ON CLICKING EMPLOYEE CARD----------------------------------------------
function empCard(k)
{
var data="";
var i=k;
data=data.concat(`
<div class="modal-contents" > 
<div id="close">+</div>
<img src="${myArray[i].image}" alt="img" class="profilepic" id="pp">
<div class="card_contents" id="data">
<br>
<h2 id="Prename" > ${myArray[i].PreferredName}</h2>
<table>
<tr><h5 class="title" > <td>Job Title </td> <td>:&emsp;</td><td> <span > ${myArray[i].jobTitle}</span></td> </h5></tr>
<tr> <h5 class="dept"><td> Department </td><td>:&emsp; </td> <td> <span> ${myArray[i].department}</span></td> </h5></tr>
<tr><h5 class="oofc"> <td>Office</td> <td>: &emsp;</td><td><span > ${myArray[i].Office}</span></td> </h5></tr>
<tr> <h5 class="phnno"><td>phone number </td><td>:&emsp; </td> <td><span >  ${myArray[i].PhoneNumber}</span></td> </h5></tr>
<tr>  <h5 class="mail"><td>Email id </td> <td>:&emsp; </td><td><span > ${myArray[i].email}</span></td> </h5></tr>
</table>
 <br>
 <input type="button" value="EDIT" class="btn btn-info " id="edit" onclick="edit(${myArray[i].id}%100)">
</div>
</div>`);
document.getElementById('bg-modal').innerHTML=data;
document.getElementById('bg-modal').style.display='flex';
employees();
}
function popup(j)
{
    console.log(j);
    empCard(j%100);
    employees();
    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('bg-modal').style.display='none';
        
    })
}
function edit(j){
    document.getElementById('data').style.display='none';
    var info="";
    var i=j;
    info=info.concat(`
    <div class="modal-contents" > 
    <div id="close">+</div>
    <img src="${myArray[i].image}" alt="img" class="profilepic" id="pp">
    <div class="card_contents" id="data">
    <br>
    <h3 > <span id="uPre" contenteditable="true">${myArray[i].PreferredName}</span><i class="bi bi-pencil"></i></h3>
    <table>
    <tr><h5 class="title" > <td>Job Title </td> <td>:&emsp;</td><td> <span class="span" contenteditable="true" id="ujobtitle"> ${myArray[i].jobTitle}</span><i class="bi bi-pencil"></i></td> </h5></tr>
    <tr> <h5 class="dept"><td> Department </td><td>:&emsp; </td> <td> <span class="span" contenteditable="true" id="udep"> ${myArray[i].department}</span><i class="bi bi-pencil"></i></td> </h5></tr>
    <tr><h5 class="oofc"> <td>Office</td> <td>: &emsp;</td><td><span class="span" contenteditable="true" id="uoffc"> ${myArray[i].Office}</span><i class="bi bi-pencil"></i></td> </h5></tr>
    <tr> <h5 class="phnno"><td>phone number </td><td>:&emsp; </td> <td><span contenteditable="true" class="span" id="uphn">  ${myArray[i].PhoneNumber}</span><i class="bi bi-pencil"></i></td> </h5></tr>
    <tr>  <h5 class="mail"><td>Email id </td> <td>:&emsp; </td><td><span contenteditable="true" class="span" id="uemail"> ${myArray[i].email}</span><i class="bi bi-pencil"></i></td> </h5></tr>
    </table>
     <br>
     <input type="button" value="UPDATE" class="btn btn-success " id="update" onclick="uempCard(${myArray[i].id}%100)">
    </div>
    </div>`);
    document.getElementById('bg-modal').innerHTML=info;
    document.getElementById('bg-modal').style.display='flex';
    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('bg-modal').style.display='none';
        
    })
}
function uempCard(k)
{
var data="";
var i=k;
myArray[i].PreferredName=document.getElementById('uPre').innerHTML;
myArray[i].jobTitle=document.getElementById('ujobtitle').innerHTML;
myArray[i].department=document.getElementById('udep').innerHTML;
myArray[i].Office=document.getElementById('uoffc').innerHTML;
myArray[i].PhoneNumber=document.getElementById('uphn').innerHTML;
myArray[i].email=document.getElementById('uemail').innerHTML;
data=data.concat(`
<div class="modal-contents" > 
<div id="close">+</div>
<img src="${myArray[i].image}" alt="img" class="profilepic" id="pp">
<div class="card_contents" id="data">
<br>
<h2 >${myArray[i].PreferredName}</h2>
<table>
<tr><h5 class="title" > <td>Job Title </td> <td>:&emsp;</td><td> <span > ${myArray[i].jobTitle}</span></td> </h5></tr>
<tr> <h5 class="dept"><td> Department </td><td>:&emsp; </td> <td> <span> ${myArray[i].department}</span></td> </h5></tr>
<tr><h5 class="oofc"> <td>Office</td> <td>: &emsp;</td><td><span > ${myArray[i].Office}</span></td> </h5></tr>
<tr> <h5 class="phnno"><td>phone number </td><td>:&emsp; </td> <td><span >  ${myArray[i].PhoneNumber}</span></td> </h5></tr>
<tr>  <h5 class="mail"><td>Email id </td> <td>:&emsp; </td><td><span > ${myArray[i].email}</span></td> </h5></tr>
</table>
 <br>
 <input type="button" value="EDIT" class="btn btn-info " id="edit" onclick="edit(${myArray[i].id}%100)">

</div>
</div>`);
document.getElementById('bg-modal').innerHTML=data;
document.getElementById('bg-modal').style.display='flex';
employees();
document.getElementById('close').addEventListener('click',function(){
    document.getElementById('bg-modal').style.display='none';  
})
}
//----------------------------------------------------REFRESH PAGE------------------------------------------------------------------------
function refreshPage()
{    
   filterIt();
   filterHuman();
   filterMd();
   filterUx();
   filterSeattle();
   filterIndia();
   filterSharePoint();
   filterDotNet();
   filterRecruit();
   filterBi();
   filterBa();
   filterSd();
   filterEa();
   filterHr();
   filterQe();
      employees();
}
