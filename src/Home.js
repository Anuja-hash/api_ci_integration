//import * as React from "react"
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
function Home()
{
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users,setUsers] = useState([])
  React.useEffect(()=>{
      console.warn("__________________");
    let url="http://localhost/my_api/index.php/api/fetch/";
    fetch(url,{
      method:'POST'
    }).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
		 setUsers(result)
      })
       console.log(response);
    })
  },[])

  function delete_data(id)
    {
        let details={id}
    console.warn(id)
    let url="http://localhost/my_api/index.php/api/delete/";
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept':'application/json'
        },
        body:formBody
      }).then((response)=>{
          response.json().then((resp)=>{
              console.warn("resp",resp)
          })
      })
    
    
    }
    return(
        <div>
             <Modal show={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
            <div className="container">
            <br />
            <h3 align="center">User Details</h3>
            <br />
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="panel-title">User Deatils</h3>
                        </div>
                        <div className="col-md-6" align="right">
                            <button type="button" id="add_button" className="btn btn-info btn-xs" onClick={handleShow}>ADD</button>
                            
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <span id="success_message"></span>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Id</th>
                                <th>Last Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
               users.map((item,idx)=>
                   <tbody>
                   <tr>
                   <td>{item.id}</td>
                     <td>{item.fist_name}</td>
                     <td>{item.last_name}</td>
                     <td><button type="button" name="edit" className="btn btn-warning btn-xs edit"> <Link to={"Edit/"+item.id}>Edit</Link></button></td>
					<td><button type="button" name="delete" className="btn btn-danger btn-xs delete" onClick={()=>delete_data(item.id)}>Delete</button></td>
                     
                   </tr>
                   </tbody>
                
      
               
                
               )
            }
                    </table>
                </div>
            </div>
        </div>
        
    </div>


    );

}
export default Home