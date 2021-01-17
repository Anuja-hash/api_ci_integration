import * as React from "react"
import Ptype from 'prop-types'

function Info(props) {
 
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Mobile No: {props.mobile}</h1>
      <h2>Gender:{props.gender}</h2>
    </div>
  );
}
Info.propTypes={
name: Ptype.string.isRequired,
mobile: Ptype.number.isRequired,

};
Info.defaultProps={
gender: "Female"
};
export default Info;