import React,{useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SignUpForm() {
    const [registrationNumber,setWeekday] = useState("");
    function handleChange(event) {
         setWeekday(event.target.value);
        }
        
        
  return (
    <Row  className="responsiveForm">
        <Col md={6} sm={12}> 
            <label>Full Name</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{backgroundColor:"transparent"}}>Dr</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
        </Col>

        <Col md={6} sm={12}> 
            <label>Speciality</label>
            <input type="text" className="form-control" placeholder="Enter speciality" />
        </Col>

        <Col md={6} sm={12} style={{marginTop:"13px"}}> 
            <label>Practice Location</label>
            <input type="text" className="form-control" placeholder="Enter practice location" />
        </Col>

        <Col md={6} sm={12} style={{marginTop:"13px"}}>
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter email address" />
        </Col>
        <Col md={6} sm={12} style={{marginTop:"13px"}}>
        <label>Mobile Number</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{backgroundColor:"transparent"}}>+91</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter Mobile number" />
            </div>
        </Col>
        <Col md={6} sm={12} style={{marginTop:"13px"}}> </Col>
        <Col md={12} sm={12} style={{marginTop:"13px",marginBottom:"13px"}}>
            <label>Registration Number</label><br />
            <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="registration_number" value="MRN" onChange={(event) => handleChange(event)} />Medical Registration number(MRN)
            </label>
            </div>
            <div className="form-check-inline">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="registration_number" value="MCI" onChange={(event) => handleChange(event)}/>Medical Council of India(MCI)
            </label>
            </div>
            <div className="form-check-inline disabled">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="registration_number" value="OTHER" onChange={(event) => handleChange(event)}/>Others
            </label>
            </div>
        </Col>
    { registrationNumber === "MRN" &&
        <React.Fragment>
            <Col md={6} sm={12}>
            <select className="form-control">
              <option>Select State</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
        </Col>
        <Col md={6} sm={12}>
            <input type="text" className="form-control" placeholder="Enter MRN"/>
        </Col>
        </React.Fragment>
    }

{ registrationNumber === "MCI" &&
        <Col md={12} sm={12}>
            <input type="text" className="form-control" placeholder="Enter MCR Registration Number" />
        </Col>
}



{ registrationNumber === "OTHER" &&
        <Col md={12} sm={12}>
            <input type="text" className="form-control" placeholder="Enter Registration Number" />
        </Col>
}
    </Row>
  );
}
export default SignUpForm;