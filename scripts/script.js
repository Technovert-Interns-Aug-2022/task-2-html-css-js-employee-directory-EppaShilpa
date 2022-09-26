const myArray = [
    {
        "image":"../assets/emp1.jpg",
      "firstName":"Anthony",
      "lastName":"Morris",
      "PreferredName" : "Anthony Morris",
      "email":"anthonymorris@gmail.com ",
      "jobTitle":"SharePoint practice head",
      "Office":"Saketha",
      "department":" IT Department",
      "PhoneNumber":"9562562567",
       "SkypeId":" "
    },
    { "image":"../assets/emp2.jpg",
        "firstName":"Helen ",
        "lastName":"Zimmerman ",
        "PreferredName" : "Helen Zimmerman",
        "email":"helenzimmerma@gmail.com ",
        "jobTitle":"Operations manager",
        "Office":"Saketha",
        "department":" IT Department",
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
            "Office":"Saketha",
            "department":" IT Department",
            "PhoneNumber":"8925555236",
             "SkypeId":" "
          },
          {
            "image":"../assets/emp4.jpg",
            "firstName":"Tami",
            "lastName":"Hopkins",
            "PreferredName" : "Tami Hopkins",
            "email":"tamihopkins@gmail.com ",
            "jobTitle":"Lead Developer- Dot Net",
            "Office":"Saketha",
            "department":" IT Department",
            "PhoneNumber":"9632587415",
             "SkypeId":" "
          }
          
];
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
