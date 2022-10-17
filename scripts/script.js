var myArray = [
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
       "SkypeId":"anthonymorris@skype.com"
    },
    {    "id":101,
         "image":"../assets/emp2.jpg",
        "firstName":"Helen",
        "lastName":"Zimmerman ",
        "PreferredName" : "Helen Zimmerman",
        "email":"helenzimmerma@gmail.com ",
        "jobTitle":".Net developement",
        "Office":"India",
        "department":"IT Department",
        "PhoneNumber":"9362565567",
         "SkypeId":"helenzimmerma@skype.com"
      }
      ,
          {
            "id":102,
            "image":"../assets/emp3.jpg",
            "firstName":"Jonathon",
            "lastName":"Smith",
            "PreferredName" : "Jonathon Smith",
            "email":"jonathonsmith@gmail.com ",
            "jobTitle":"Executive Assistant",
            "Office":"Seattle",
            "department":"MD",
            "PhoneNumber":"8925555236",
             "SkypeId":"jonathonsmith@skype.com"
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
             "SkypeId":"tamihopkins@skype.com"
          }
          ,
          { "id":104,
            "image":"../assets/emp5.jpg",
            "firstName":"Franklin",
            "lastName":"Humark",
            "PreferredName" : "Franklin Humark",
            "email":"franklinhumark@gmail.com ",
            "jobTitle":"Recruiting Expert",
            "Office":"Seattle",
            "department":"IT Department",
            "PhoneNumber":"9517536842",
             "SkypeId":"franklinhumark@skype.com"
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
             "SkypeId":"angelabailey@skype.com"
          }
          ,
          {
            "id":106,
            "image":"../assets/emp7.jpg",
            "firstName":"Robert",
            "lastName":"Mitchell",
            "PreferredName" : "Robert Mitchell",
            "email":"robertmitchell@gmail.com ",
            "jobTitle":"HR manager",
            "Office":"India",
            "department":"IT Department",
            "PhoneNumber":"9637415820",
             "SkypeId":"robertmitchell@skype.com"
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
             "SkypeId":"olivawatson@skype.com"
          }
];
var departmentArray=["IT Department","Human resource","MD","UX department"];
var jsonObj=JSON.stringify(myArray);
console.log(localStorage.length)

if(localStorage.length==0)
{
localStorage.setItem("myArray",jsonObj);
}
else{

    myArray = JSON.parse(localStorage.getItem("myArray"));
}
const str=localStorage.getItem("myArray");
const parsedStr=JSON.parse(str);

//---------------------------------------------------ADD EMPLOYEE BUTTON---------------------------------------------------------------------
function added()
{

   if(validateForm()) {
    console.log("form validated");
    var profile=window.pat;
    var fname=document.getElementById("input_fname").value;
    var lname=document.getElementById("input_lname").value;
    var pname=document.getElementById("input_pname").value;
    var email=document.getElementById("input_email").value;
    var job=document.getElementById("input_job_title").value;
    var deptval=document.getElementById("input_department").value;
    var number=document.getElementById("input_number").value;
    var skype=document.getElementById("input_skype").value;
    var loc=document.getElementById("input_office").value;
    myArray.push({
            "id":myArray.length+100,
            "image": window.imageUrl,
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
   console.log(myArray);
   localStorage.setItem("myArray",JSON.stringify(myArray));
refreshPage();
clear_form_data();
   $('#EmplyeeModal').modal('hide');
}
else{
    $('EmplyeeModal').modal('show');
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
    document.getElementById('input_office').value="";
    document.getElementById('input_fname').style.border="1px solid grey";
    document.getElementById('input_lname').style.border="1px solid grey";
    document.getElementById('input_pname').style.border="1px solid grey";
    document.getElementById('input_email').style.border="1px solid grey";
    document.getElementById('input_job_title').style.border="1px solid grey";
    document.getElementById('input_department').style.border="1px solid grey";
    document.getElementById('input_number').style.border="1px solid grey";
    document.getElementById('input_skype').style.border="1px solid grey";
    document.getElementById('input_office').style.border="1px solid grey";
    document.getElementById('mailerror').innerHTML="";
    document.getElementById('pnerror').innerHTML="";
    document.getElementById('phnerror').innerHTML="";
    document.getElementById('skyperror').innerHTML="";
    document.getElementById('File1').value="";

}

//-----------------------------------------FORM VALIDATION------------------------------------------------------------------
function validateForm()
{

    var fname=document.getElementById("input_fname").value.trim();
    var lname=document.getElementById("input_lname").value.trim();
    var Pname=document.getElementById("input_pname").value.trim();
    var mail=document.getElementById("input_email").value.trim();
    var jtitle=document.getElementById('input_job_title').value.trim();
    var dep=document.getElementById('input_department').value.trim();
    var tel=document.getElementById('input_number').value.trim();
    var sky=document.getElementById('input_skype').value.trim();
    var ofc=document.getElementById('input_office').value;
    var regx=/([a-zA-Z0-9\.-]+)@([a-z]+).([a-z]{2,10})/;
    var namepat=/^([a-zA-Z]+)$/;
    var numregx=/^[6-9][0-9]{9}$/;
    var fullname=fname+" "+lname;
    if(!(namepat.test(fname)))
    {
        document.getElementById('input_fname').style.border="3px solid red";
        document.getElementById('fnerror').innerHTML="enter valid name";
    }
    else{
        document.getElementById('input_fname').style.border="3px solid green";
        if(!(namepat.test(lname))||(Pname!=fullname))
        {   if(!(namepat.test(lname))){
           document.getElementById('input_lname').style.border="3px solid red";
           document.getElementById('lnerror').innerHTML="enter valid name(length should not exceed more than 12)";
             }
             if((Pname!=fullname)){
                document.getElementById('input_pname').style.border="3px solid red";
                document.getElementById('pnerror').innerHTML="full name=first name+ last name";
                  }

        }
        else{
            document.getElementById('input_lname').style.border="3px solid green";
            document.getElementById('input_pname').style.border="3px solid green";
            if(regx.test(mail)){
                document.getElementById('input_email').style.border="3px solid green";
                document.getElementById('mailerror').innerHTML="";
                if(jtitle=='SharePoint practice head'||jtitle=='Operations manager'||jtitle=='Product manager'||jtitle=='.Net developement'||jtitle=='Network Engineer'||jtitle=='Business Analyst'||jtitle=='Software Engineer'||jtitle=='Software Developer')
                {
                    document.getElementById('input_job_title').style.border="3px solid green";
                    if(dep=='IT Department'||dep=='Human resource'||dep=='UX department'||dep=='MD'||dep=='Accounting')
                    {
                        document.getElementById('input_department').style.border="3px solid green";
                       if(numregx.test(tel))
                       {
                          document.getElementById('input_number').style.border="3px solid green";
                          if(regx.test(sky))
                          {
                            document.getElementById('input_skype').style.border="3px solid green";

                            if(ofc=="India"||ofc=="Seattle"||ofc=="US"||ofc=="Germany")
                            {
                                document.getElementById('input_office').style.border="3px solid green";
                                return true;
                            }
                          }
                          else{

                        document.getElementById('input_skype').style.border="3px solid red";
                        document.getElementById('skyperror').innerHTML="Enter valid skype ";
                        return false;
                          }
                       }
                       else{
                        document.getElementById('input_number').style.border="3px solid red";
                        document.getElementById('phnerror').innerHTML="Enter valid phone number";
                        return false;
                       }

                    }
                    else{
                        document.getElementById('input_department').style.border="3px solid red";
                        return false;
                    }

                }
                else{

                    document.getElementById('input_job_title').style.border="3px solid red";
                    return false;
                }

            }
            else{
                document.getElementById('input_email').style.border="3px solid red";
                document.getElementById('mailerror').innerHTML="Please fill valid email ";
                return false;
            }

        }
    }

}

// -----------------------------------DISPLAYING DATA INTO HTML PAGE--------------------------------------------------------------
refreshPage();
leftFilter();
allFilters();
function alpEmp(){
    employees();
}
function clearEmp(){
    employees();
}
// ----------------------------------------FUNCTION FOR ALPHABETICAL SEARCH--------------------------------------------------
function alphabet(letter)
{
    var result="";
    for(let i=0;i<myArray.length;i++)
    {
        if(((document.getElementById("slct_option").value)=="FirstName"))
      {

         if(myArray[i].firstName.charAt(0).toLowerCase()==letter.toLowerCase())
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
        if(myArray[i].lastName.charAt(0).toLowerCase()==letter.toLowerCase())
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
        if(myArray[i].firstName.charAt(0).toLowerCase()==letter.toLowerCase())
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
            var resname=res.toLowerCase();
            if((name.includes(resname)))
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
            var resname=res.toLowerCase();
            if((name.includes(resname)))
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
            var resname=res.toLowerCase();
            if(name.includes(resname))
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
<hr style="height:2px;color:black;width:300px;">
<table>
<tr><h5 class="title" > <td>Job Title </td> <td>:&emsp;</td><td> <span > ${myArray[i].jobTitle}</span></td> </h5></tr>
<tr> <h5 class="dept"><td> Department </td><td>:&emsp; </td> <td> <span> ${myArray[i].department}</span></td> </h5></tr>
<tr><h5 class="oofc"> <td>Office</td> <td>: &emsp;</td><td><span > ${myArray[i].Office}</span></td> </h5></tr>
<tr> <h5 class="phnno"><td>phone number </td><td>:&emsp; </td> <td><span >  ${myArray[i].PhoneNumber}</span></td> </h5></tr>
<tr>  <h5 class="mail"><td>Email id </td> <td>:&emsp; </td><td><span > ${myArray[i].email}</span></td> </h5></tr>
<tr>  <h5 class="skypeid"><td>Skype id </td> <td>:&emsp; </td><td><span > ${myArray[i].SkypeId}</span></td> </h5></tr>
</table>
 <br>
 <input type="button" value="EDIT" class="btn btn-info " id="edit" onclick="edit(${myArray[i].id}%100)">
</div>
</div>`);
document.getElementById('bg-modal').innerHTML=data;
document.getElementById('bg-modal').style.display='flex';
refreshPage();
}
function popup(j)
{

    console.log(j);
    empCard(j%100);
   refreshPage();
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
    <form action="" >
    <img src="${myArray[i].image}" alt="img" class="profilepic newprofile" id="pp" id="coverPreview" alt="">
    <input type="file" id="cover" />
  </form>
    <div class="card_contents" id="data">
    <br>
    <h3 class="name" ><input type="text" value="${myArray[i].PreferredName}" id="uPre" contenteditable="true" onchange="updateEnable()" style="border:none;" > </h3>
    <table class="editdata">
    <tr><td class="title">Job Title</td> <td>:</td> <td><input type="text" value="${myArray[i].jobTitle}" id="ujobtitle" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
        <tr><td class="dept"> Department</td> <td>:</td> <td><input type="text" value="${myArray[i].department}" id="udep" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
        <tr><td class="oofc">Office</td> <td>:</td> <td><input type="text" value="${myArray[i].Office}" id="uoffc" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
        <tr><td class="phnno">phone number </td> <td>:</td> <td><input type="text" value="${myArray[i].PhoneNumber}" id="uphn" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
        <tr><td class="mail">Email id </td> <td>:</td> <td><input type="text" value="${myArray[i].email}" id="uemail" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
        <tr><td class="skypeid">Skype id </td> <td>:</td> <td><input type="text" value="${myArray[i].SkypeId}" id="uskype" class="span" contenteditable="true" onchange="updateEnable()"></td></tr>
    </table>
     <br>
     <button class="btn btn-success" id="update" onclick="uempCard(${myArray[i].id}%100)" disabled>UPDATE</button>

    </div>
    </div>`);
    document.getElementById('bg-modal').innerHTML=info;
    document.getElementById('bg-modal').style.display='flex';
    refreshPage();
    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('bg-modal').style.display='none';

    })
}
function updateEnable()
{

    document.getElementById('update').disabled=false;

}
function uempCard(k)
{
var data="";
var i=k;
// myArray[i].image=window.imageUrlnew;
myArray[i].PreferredName=document.getElementById('uPre').value;
myArray[i].jobTitle=document.getElementById('ujobtitle').value;
myArray[i].department=document.getElementById('udep').value;
myArray[i].Office=document.getElementById('uoffc').value;
myArray[i].PhoneNumber=document.getElementById('uphn').value;
myArray[i].email=document.getElementById('uemail').value;
myArray[i].SkypeId=document.getElementById('uskype').value;
data=data.concat(`
<div class="modal-contents" >
<div id="close">+</div>
<img src="${myArray[i].image}" alt="img" class="profilepic" id="pp">
<div class="card_contents" id="data">
<br>
<h2 id="Prename" >${myArray[i].PreferredName}</h2>
<table>
<tr><h5 class="title" > <td>Job Title </td> <td>:&emsp;</td><td> <span > ${myArray[i].jobTitle}</span></td> </h5></tr>
<tr> <h5 class="dept"><td> Department </td><td>:&emsp; </td> <td> <span> ${myArray[i].department}</span></td> </h5></tr>
<tr><h5 class="oofc"> <td>Office</td> <td>: &emsp;</td><td><span > ${myArray[i].Office}</span></td> </h5></tr>
<tr> <h5 class="phnno"><td>phone number </td><td>:&emsp; </td> <td><span >  ${myArray[i].PhoneNumber}</span></td> </h5></tr>
<tr>  <h5 class="mail"><td>Email id </td> <td>:&emsp; </td><td><span > ${myArray[i].email}</span></td> </h5></tr>
<tr>  <h5 class="skypeid"><td>Skype id </td> <td>:&emsp; </td><td><span > ${myArray[i].SkypeId}</span></td> </h5></tr>
</table>
 <br>
 <input type="button" value="EDIT" class="btn btn-info " id="edit" onclick="edit(${myArray[i].id}%100)">
</div>
</div>`);
document.getElementById('bg-modal').innerHTML=data;
document.getElementById('bg-modal').style.display='flex';
refreshPage();
document.getElementById('close').addEventListener('click',function(){
    document.getElementById('bg-modal').style.display='none';

})
}
//----------------------------------------------------REFRESH PAGE------------------------------------------------------------------------
function refreshPage()
{
leftFilter();
allFilters();
   employees();
   localStorage.setItem("myArray",JSON.stringify(myArray));
}
function SORT()
{
    myArray.sort(function(a,b){
        if(a.firstName.toLowerCase()<b.firstName.toLowerCase())  return -1;
        if(a.firstName.toLowerCase()>b.firstName.toLowerCase())  return 1;
        return 0;
    });
    employees();
}
function revSORT()
{

    myArray.sort(function(a,b){
        if(a.firstName.toLowerCase()<b.firstName.toLowerCase())  return 1;
        if(a.firstName.toLowerCase()>b.firstName.toLowerCase())  return -1;
        return 0;
    });
    employees();
}
const fileInput = document.getElementById('File1');
var imageUrl;
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        window.reader = new FileReader();
        window.reader.onloadend = () => {
             imageUrl=reader.result;
            console.log(reader.result);
        };
        window.reader.readAsDataURL(file);
    });

function leftFilter()
{
    departmentMap=new Map();
    jobTitleMap=new Map();
    officeMap=new Map();
    departmentArr=[];
    officeArr=[];
    jobTitleArr=[];
    depCount=[];
    officeCount=[];
    jobTitleCount=[];
    for(var i=0;i<myArray.length;i++)
    {
        if(departmentMap.has(myArray[i].department)){
            departmentMap.set(myArray[i].department,departmentMap.get(myArray[i].department)+1);
        }
        else{
            departmentArr.push(myArray[i].department);
            departmentMap.set(myArray[i].department,1)
        }
        if(jobTitleMap.has(myArray[i].jobTitle)){
            jobTitleMap.set(myArray[i].jobTitle,jobTitleMap.get(myArray[i].jobTitle)+1)
        }
        else{
            jobTitleArr.push(myArray[i].jobTitle);
            jobTitleMap.set(myArray[i].jobTitle,1);
        }
        if(officeMap.has(myArray[i].Office)){
           officeMap.set(myArray[i].Office,officeMap.get(myArray[i].Office)+1);
        }
        else{
            officeArr.push(myArray[i].Office);
            officeMap.set(myArray[i].Office,1);
        }

    }

    for(var i=0;i<departmentArr.length;i++)
    {
        depCount[i]=departmentMap.get(departmentArr[i]);
    }
    for(var i=0;i<officeArr.length;i++)
    {
       officeCount[i]=officeMap.get(officeArr[i]);
    }
    for(var i=0;i<jobTitleArr.length;i++)
    {
        jobTitleCount[i]=jobTitleMap.get(jobTitleArr[i]);
    }
}
function allFilters()
{
oneFilter(depCount,departmentArr,'depId');
oneFilter(officeCount,officeArr,'officeId');
oneFilter(jobTitleCount,jobTitleArr,'jobtitleId')
}
var list1;
var list2;
function oneFilter(filcount,filArr,filid)
{
 list1="";
list2="";
if(filArr.length<5){
    for(var j=0;j<filArr.length;j++)
       {
         list1=list1.concat(`<li><a href="#" class="text-decoration-none link-dark size" onclick="filterClick('${filArr[j]}')">${filArr[j]}(${filcount[j]})</a></li>`);
       }
     document.getElementById(filid).innerHTML=list1;
}
else{
    var reading=0;
    for(var j=0;j<filArr.length;j++)
{
    reading++;
    if(reading<=5){
        list1=list1.concat(`<li><a href="#" class="text-decoration-none link-dark size" onclick="filterClick('${filArr[j]}')">${filArr[j]}(${filcount[j]})</a></li>`);
    }
    else{
list1=list1.concat(`<a href="#" onclick="viewmore()" class="text-decoration-none" id="more">view more</a>`);
for(j=5;j<filArr.length;j++)
{
    list2=list2.concat(`<li><a href="#" class="text-decoration-none link-dark size" onclick="filterClick('${filArr[j]}')">${filArr[j]}(${filcount[j]})</a></li>`);

}
break;
    }

}
document.getElementById(filid).innerHTML=list1;
}
}
function viewmore()
{
    console.log(window.list2);
    document.getElementById('more').innerHTML=window.list2;
    var x = window.matchMedia("(max-width: 580px)");
    myfun(x);
    window.list2="";

}
function myfun(x){
    if(x.matches){
            document.getElementById('search').style.top="-1890px";
    document.getElementsByClassName('searchClass')[0].style.top="-1890px";
    document.getElementsByClassName('slct')[0].style.top="-1890px";
    document.getElementsByClassName('filterClass')[0].style.top="-1890px";
    }
}
function filterClick(value)
{

    if(departmentArr.includes(value))
    {
        var result="";
        for(let i=0;i<myArray.length;i++){
          if(myArray[i].department==value)
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
    else if(officeArr.includes(value))
    {
        var result="";
        for(let i=0;i<myArray.length;i++){
          if(myArray[i].Office==value)
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
    else if(jobTitleArr.includes(value))
    {
        var result="";
        for(let i=0;i<myArray.length;i++){
          if(myArray[i].jobTitle==value)
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
}
