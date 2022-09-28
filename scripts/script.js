const myArray = [
    {
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
    { "image":"../assets/emp2.jpg",
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
          {
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
          {
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
            "image":"../assets/emp8.jpg",
            "firstName":"Oliva",
            "lastName":"Watson",
            "PreferredName" : "Oliva Watson",
            "email":"olivawatson@gmail.com ",
            "jobTitle":"UI Designer",
            "Office":"Seattle",
            "department":"UX department",
            "PhoneNumber":"9637419520",
             "SkypeId":"+91+9637419520"
          }


];
//-----------------------------------------------------------------ADDING NEW EMPLOYEE--------------------------------------------------------
function added()
{   var profile="../assets/emp7.jpg";
    var fname=document.getElementById("input_fname").value;
    var lname=document.getElementById("input_lname").value;
    var pname=document.getElementById("input_pname").value;
    var email=document.getElementById("input_email").value;
    var job=document.getElementById("input_job_title").value;
    var deptval=document.getElementById("input_department").value;
    var number=document.getElementById("input_number").value;
    var skype=document.getElementById("input_skype").value;
    var loc=document.getElementsByName("location").value;
    console.log(profile);
   myArray.push({
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
   employees();
console.log(myArray.length);
console.log(myArray);
}

// ---------------------------------------------DISPLAYING DATA INTO HTML PAGE----------------------------------------------------------------
var output="";
for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i].firstName);
    output=output.concat(`
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
    </div>`);
    console.log(output);
   document.getElementsByClassName("results_box")[0].innerHTML=output;
}
// ----------------------------------------------FILTERS FOR COUNT------------------------------------------------------------------
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
function filterHr(){
    console.log("filterHr");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].department=="Human resource"){
            count=count+1;
        }
    }
    document.getElementById("hr").innerHTML= "Human resource"+"("+ count+ ")";

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
filterIt();
filterHr();
filterMd();
filterUx();
filterSeattle();
filterIndia();
filterSharePoint();
filterDotNet();
filterRecruit();
filterBi();
filterBa();

function alpEmp(){
    employees();
}
function clearEmp(){
    employees();

}
// ------------------------------------------DEPARTMENT FILTER FOR EMPLOYEE DATA------------------------------------------------------
function dept(Dept){
    var result="";
    for(let i=0;i<myArray.length;i++){
      if(myArray[i].department==Dept)
      {
        console.log(myArray[i].PreferredName);
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
    console.log(result);
    document.getElementsByClassName("results_box")[0].innerHTML=result;
}
// ------------------------------------------office FILTER FOR EMPLOYEE DATA------------------------------------------------------
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
     console.log(result);
     document.getElementsByClassName("results_box")[0].innerHTML=result;
      }
    }
}
//------------------------------------------JOB TITLE FILTER FOR EMPLOYEE DATA------------------------------------------------------
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
console.log(result);
  document.getElementsByClassName("results_box")[0].innerHTML=result;
   }
  // ------------------------------------------ALPHABETICAL SEARCH FOR EMPLOYEE DATA------------------------------------------------------
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
       console.log(result);
       document.getElementsByClassName("results_box")[0].innerHTML=result;
   }
  // ------------------------------------------EMPLOYEE LIST FUNCTION-----------------------------------------------------
function employees()
{
    var output="";
    for(let i=0;i<myArray.length;i++)
    {
        console.log(myArray[i].firstName);
        output=output.concat(`
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
        </div>`);
        console.log(output);
       document.getElementsByClassName("results_box")[0].innerHTML=output;
    }
}
//------------------------------------------SEARCHING  FOR EMPLOYEE ------------------------------------------------------
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
console.log(result);
  document.getElementsByClassName("results_box")[0].innerHTML=result;
}
)
