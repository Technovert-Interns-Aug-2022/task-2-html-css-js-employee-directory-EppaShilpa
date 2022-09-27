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
       "SkypeId":" "
    },
    { "image":"../assets/emp2.jpg",
        "firstName":"Helen ",
        "lastName":"Zimmerman ",
        "PreferredName" : "Helen Zimmerman",
        "email":"helenzimmerma@gmail.com ",
        "jobTitle":"Operations manager",
        "Office":"India",
        "department":"IT Department",
        "PhoneNumber":"9362565567",
         "SkypeId":" "
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
             "SkypeId":" "
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
             "SkypeId":" "
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
             "SkypeId":" "
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
             "SkypeId":" "
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
             "SkypeId":" "
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
             "SkypeId":" "
          }


];

function added()
{
    var fname=document.getElementById("input_fname").value;
    console.log(fname);
}
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
    <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
    <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
    <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
    <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
    <span class="	glyphicon glyphicon-heart glyicon" ></span>
</div>
</div>
    </div>`);
    console.log(output);
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
function filtersharePoint(){
    console.log("filter sharepoint");
    var count=0;
    for(let i=0;i<myArray.length;i++){
        if(myArray[i].jobTitle=="SharePoint practice head"){
            count=count+1;
        }
    }
    document.getElementById("sharepoint").innerHTML= "SharePoint practice head"+"("+ count+ ")";

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
filtersharePoint();
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
        <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
        <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
        <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
        <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
        <span class="	glyphicon glyphicon-heart glyicon" ></span>
    </div>
    </div>
        </div>
        `);

      }
    }
    console.log(result);
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
        <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
        <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
        <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
        <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
        <span class="	glyphicon glyphicon-heart glyicon" ></span>
    </div>
    </div>
        </div>
        `);
     console.log(result);
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
        <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
        <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
        <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
        <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
        <span class="	glyphicon glyphicon-heart glyicon" ></span>
    </div>
    </div>
        </div>
        `);

    }
}
console.log(result);
  document.getElementsByClassName("results_box")[0].innerHTML=result;
   }

function alphabet(letter)
{
    var result="";
    for(let i=0;i<myArray.length;i++)
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
            <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
            <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
            <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
            <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
            <span class="	glyphicon glyphicon-heart glyicon" ></span>
        </div>
        </div>
            </div>
            `);

         }
    }
    filterIt();
    console.log(result);
    document.getElementsByClassName("results_box")[0].innerHTML=result;
}
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
        <span class="glyphicon glyphicon-earphone glyicon" ></span> &nbsp;
        <span class="	glyphicon glyphicon-envelope glyicon " ></span>&nbsp;
        <span class="	glyphicon glyphicon-send glyicon " ></span>&nbsp;
        <span class="glyphicon glyphicon-star glyicon" ></span>&nbsp;
        <span class="	glyphicon glyphicon-heart glyicon" ></span>
    </div>
    </div>
        </div>`);
        console.log(output);
       document.getElementsByClassName("results_box")[0].innerHTML=output;
    }
}
