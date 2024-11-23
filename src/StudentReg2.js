import React from "react";
import "./StudentReg2.css";
import { useState } from "react";

var STUDENT = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  class: "",
  rollNo: "",
  address: "",
  state: "",
  pin: "",
  submit: "",
  reset: "",
};
function StudentReg2() {
  const [student, setStudent] = useState(STUDENT);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const Class = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
  const State = [
    { label: "Khunti", value: "Khunti" },
    { label: "Ranchi", value: "Ranchi" },
    { label: "Torpa", value: "Torpa" },
  ];

  function handleOnChange(event) {
    console.log(event.target.value);
    setStudent({ ...student, [event.target.name]: event.target.value });
  }
  function handleSubmit() {
    setIsFormSubmit(true);
  }
  return (
    <div className="container2">
      <div className="header2">
        <h1>Student Registration 2</h1>
      </div>

      <div class="row">
        <div className="lable">
          <label>
            First Name :<sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="firstName"
            className={
              isFormSubmit && student.firstName == "" ? "invalidInput" : ""
            }
            value={student.firstName}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="First Name"
          />
          <br />
          {isFormSubmit && student.firstName == "" && (
            <small> First name required</small>
          )}
        </div>
      </div>

      <div class="row">
        <div className="lable">
          <label>
            Last Name : <sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="lastName"
            className={
              isFormSubmit && student.lastName == "" ? "invalidInput" : ""
            }
            value={student.lastName}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="last Name"
          />
          <br />
          {isFormSubmit && student.lastName == "" && (
            <small> last name required</small>
          )}
        </div>
      </div>
      <div class="row">
        <div className="lable">
          <label>
            Age : <sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="age"
            className={isFormSubmit && student.age == "" ? "invalidInput" : ""}
            value={student.age}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="Age"
          />
          <br />
          {isFormSubmit && student.age == "" && <small> Age required</small>}
        </div>
      </div>

      <div class="row">
        <div className="lable">
          <label>
            Gender : <sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="radio"
            name="gender"
            value="male"
            className={
              isFormSubmit && student.gender == "" ? "invalidInput" : ""
            }
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
          />
          <label>Female</label>
          <br />
          {isFormSubmit && student.gender == "" && (
            <small> Gender required</small>
          )}
        </div>
      </div>
      <div class="row">
        <div className="lable">
          <label>
            Class : <sup> * </sup>
          </label>
        </div>
        <div className="input">
          <select
            name="class"
            className={
              isFormSubmit && student.class == "" ? "invalidInput" : ""
            }
            value={student.class}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="select">
            <option>None</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <br />{" "}
          {isFormSubmit && student.class == "" && (
            <small> Class required</small>
          )}
        </div>
      </div>
      <div className="row">
        <div className="lable">
          <label>
            Roll No : <sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="rollNo"
            className={
              isFormSubmit && student.rollNo == "" ? "invalidInput" : ""
            }
            value={student.rollNo}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="roll no"
          />
          <br />
          {isFormSubmit && student.rollNo == "" && (
            <small> Roll required</small>
          )}
        </div>
      </div>

      <div class="row">
        <div className="lable">
          <label>
            Address : <sup> * </sup>{" "}
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="address"
            className={
              isFormSubmit && student.address == "" ? "invalidInput" : ""
            }
            value={student.address}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="Address"
          />
          <br />
          {isFormSubmit && student.address == "" && (
            <small> Adderss required</small>
          )}
        </div>
      </div>
      <div class="row">
        <div className="lable">
          <label>
            State : <sup> * </sup>{" "}
          </label>
        </div>
        <div className="input">
          <select
            name="state"
            className={
              isFormSubmit && student.state == "" ? "invalidInput" : ""
            }
            value={student.state}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}>
            {State.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <br />
          {isFormSubmit && student.state == "" && (
            <small> State required</small>
          )}
        </div>
      </div>

      <div class="row">
        <div className="lable">
          <label>
            Pin :<sup> * </sup>
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            name="pin"
            className={isFormSubmit && student.pin == "" ? "invalidInput" : ""}
            value={student.pin}
            onChange={handleOnChange}
            onFocus={() => setIsFormSubmit(false)}
            placeholder="Pin"
          />
          <br />
          {isFormSubmit && student.pin == "" && <small> Pin required</small>}
        </div>
      </div>
      <div class="button">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

        <button type="reset" onClick={handleOnChange}>
          Reset
        </button>
      </div>
      <div className="details">
        {student.firstName && (
          <div>
            <h3>Students details</h3>
            <h6>First Name : {student.firstName}</h6>
          </div>
        )}

        {student.lastName && (
          <div>
            <h6>Last Name : {student.lastName}</h6>
          </div>
        )}

        {student.age && (
          <div>
            <h6>Age : {student.age}</h6>
          </div>
        )}

        {student.gender && (
          <div>
            <h6>Gender : {student.gender}</h6>
          </div>
        )}

        {student.class && (
          <div>
            <h6>Class : {student.class}</h6>
          </div>
        )}

        {student.rollNo && (
          <div>
            <h6>Roll No : {student.rollNo}</h6>
          </div>
        )}
        {student.address && (
          <div>
            <h6>Address : {student.address}</h6>
          </div>
        )}
        {student.state && (
          <div>
            <h6>State : {student.state}</h6>
          </div>
        )}

        {student.pin && (
          <div>
            <h6>Pin : {student.pin}</h6>
          </div>
        )}
      </div>
    </div>
  );
}
export default StudentReg2;
