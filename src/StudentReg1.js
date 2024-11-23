import React from "react";
import "./StudentReg1.css";
import { useState } from "react";

function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}

var STUDENT = {
  firstName: "Roshan",
  lastName: "Horo",
};

function StudentReg1() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setlastName] = useState("");
  const [lastNameError, setlastNameError] = useState(false);

  const [Age, setAge] = useState("");
  const [AgeError, setAgeError] = useState(false);

  const [Gender, setGender] = useState("");
  const [GenderError, setGenderError] = useState(false);

  const [Class, setClass] = useState("");
  const [ClassError, setClassError] = useState(false);

  const [Roll, setRoll] = useState("");
  const [RollError, setRollError] = useState(false);

  const [Address, setAddress] = useState("");
  const [AddressError, setAddressError] = useState(false);

  const [State, setState] = useState("");
  const [StateError, setStateError] = useState(false);

  const [Pin, setPin] = useState("");
  const [PinError, setPinError] = useState(false);

  function submit() {
    if (firstName === "" || firstName === undefined) {
      setFirstNameError(true);
    } else if (lastName === "" || lastName === undefined) {
      setlastNameError(true);
    } else if (Age === "" || Age === undefined) {
      setAgeError(true);
    } else if (Gender === "" || Gender === undefined) {
      setClassError(true);
    } else if (Class === "" || Class === undefined) {
      setClassError(true);
    } else if (Roll === "" || Roll === undefined) {
      setClassError(true);
    } else if (Address === "" || Address === undefined) {
      setClassError(true);
    } else if (State === "" || State === undefined) {
      setClassError(true);
    } else if (Pin === "" || Pin === undefined) {
      setClassError(true);
    }
  }

  return (
    <div className="container1">
      <div className="header1">
        <div>
          <h1>
            Student Registration 1
            <button className="mode" onclick="darkMode()">
              Darkmode
            </button>
            <button className="mode" onclick="lightMode()">
              LightMode
            </button>
          </h1>
          <hr></hr>

          <div className="row">
            <label>
              First Name : <sup> * </sup>
            </label>
            <input
              type="text"
              id="myText"
              placeholder="Enter First Name"
              onChange={(event) => setFirstName(event.target.value)}
              onFocus={() => setFirstNameError(false)}
            ></input>
            {firstNameError && <small> First Name required</small>}
          </div>
          <div className="row">
            <label>
              Last Name : <sup> * </sup>
            </label>
            <input
              type="text"
              id="myText"
              placeholder="Enter Last Name"
              onChange={(event) => setlastName(event.target.value)}
              onFocus={() => setlastNameError(false)}
            ></input>
            {lastNameError && <small> Last Name required</small>}
          </div>
          <div className="row">
            <label>
              Age : <sup> * </sup>
            </label>
            <input
              type="text"
              id="myText"
              placeholder="Enter Age"
              onChange={(event) => setAge(event.target.value)}
              onFocus={() => setAgeError(false)}
            ></input>
            {AgeError && <small> Age required</small>}
          </div>
          <div className="row">
            <label>
              Gender : <sup> * </sup>
            </label>
            <input
              type="radio"
              id="male"
              name="Gender"
              value="male"
              onChange={(event) => setGender(event.target.value)}
              onFocus={() => setGenderError(false)}
            ></input>
            <label for="male">Male</label>
            <input
              type="radio"
              id="female"
              name="Gender"
              value="female"
              onChange={(event) => setGender(event.target.value)}
              onFocus={() => setGenderError(false)}
            ></input>
            <label for="female">Female</label>
            {GenderError && <small> Gender required</small>}
          </div>
          <div className="row">
            <label>
              Class : <sup> * </sup>
            </label>
            <select name="Class" id="class">
              <input
                type="text"
                id="myText"
                placeholder="Enter Class"
                onChange={(event) => setClass(event.target.value)}
                onFocus={() => setClassError(false)}
              ></input>
              {ClassError && <small> Class required</small>}
              <option disabled selected value="none"></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
          <div className="row">
            <label>
              Roll no : <sup> * </sup>
              <input
                type="text"
                id="myText"
                placeholder="Enter Roll no"
                onChange={(event) => setRoll(event.target.value)}
                onFocus={() => setRollError(false)}
              ></input>
              {RollError && <small> Roll no required</small>}
            </label>
          </div>
          <div className="row">
            <label>
              Address : <sup> * </sup>
              <textarea
                name=""
                id="address"
                cols="30"
                rows="0"
                placeholder="Enter Address"
                onfocus="removeErrorFN()"
                onChange={(event) => setAddress(event.target.value)}
                onFocus={() => setAddressError(false)}
              ></textarea>
              {AddressError && <small> Address required </small>}
            </label>
          </div>
          <div className="row">
            <label>
              State: <sup> * </sup>
            </label>
            <select name="Class" id="class">
              <input
                type="text"
                id="myText"
                placeholder="Enter State"
                onChange={(event) => setState(event.target.value)}
                onFocus={() => setStateError(false)}
              ></input>

              <option disabled selected value="none"></option>
              <option value="1">Ranchi</option>
              <option value="2">Khunti</option>
              <option value="3">Jharkhand</option>
              <option value="4">Bihar</option>
              {StateError && <small> State required</small>}
            </select>
          </div>

          <div className="row">
            <label>
              Pin: <sup> * </sup>
              <input
                type="text"
                id="myText"
                placeholder="Enter pin"
                onChange={(event) => setPin(event.target.value)}
                onFocus={() => setPinError(false)}
              ></input>
              {PinError && <small> Pin required</small>}
            </label>
          </div>

          <div className="buttonGroup">
            <button className="submit" onClick={submit}>
              Submit{" "}
            </button>
            <button className="reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentReg1;
