import {
    withRouter,useHistory
  } from "react-router-dom";
  import { useState } from "react";
function Edit(props)
{
    const [Id,setId] = useState("")
    const [lastname,setlastname] = useState("")
    const [firstname,setfirstname] = useState("")
    const history=useHistory();
// 
async function  onSubmit()
    {
        // return false;
        console.log(props.match.params.id);
        let id=props.match.params.id;
        let details={fist_name:firstname,last_name:lastname,id}
        console.warn(details);
        
        let url="http://localhost/my_api/index.php/api/update/";
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
       let apiResult=await  fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept':'application/json'
            },
            body:formBody
          });
        //   .then((response)=>{
        //       response.json().then((resp)=>{
        //           console.warn("resp",resp)
        //           history.push("/home")
        //       })
        //   })
        apiResult=await apiResult.json();
        if(apiResult)
        {
            history.push("/home")
        }
         
    }
    // 
    return(
        <div>
       <div>
         <h1>Enter your details</h1>
         <input type="text" name="firstname" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/><br/><br/>
         <input type="text" name="Lastname" value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/><br/><br/>
         <button type="button" onClick={onSubmit}>Save</button>
        
     </div>
      
    </div>
    )
}
export default withRouter(Edit);