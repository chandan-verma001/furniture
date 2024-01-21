import React, { useState, useRef } from "react";

const Superform = () => {
  const formtable = useRef();

  let initialFormtable = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

   let [deleteme,setdeleteme] = useState("")
  const [list, setList] = useState([]);
  let [formtabledata, setformtabledata] = useState(initialFormtable);
  let [restableMsg, setrestableMsg] = useState("");

  let onchangesetdatainput = (e) => {
    setformtabledata((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  let updateAction = (any) => {
  };

  let formSubmit = async (e) => {
    e.preventDefault();
    if (formtabledata.name === "") {
      setrestableMsg("Please enter your name.");
      return;
    }
    if (formtabledata.email === "") {
      setrestableMsg("Please enter your email.");
      return;
    }
    if (formtabledata.phone === "") {
      setrestableMsg("Please enter your phone number.");
      return;
    }
    var requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formtabledata),
    };

    let request = fetch("http://localhost:3500/products/findone", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        formtable.current && formtable.current.reset(); // reset form data
        setformtabledata(initialFormtable);
        alert(result.message);
      });
  };
  let getapi = async (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let request = await fetch(
      "http://localhost:3500/products/findall",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setList(result?.data);
      });
  };
  
  let deleteAction = async (email) => {
    var requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let request = await fetch(
      "http://localhost:3500//products/destroygetdata"+email,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setdeleteme(alert(result.message));
      });
    };

    
    
    return ( 
    <>
      {restableMsg}
      <div className="container" >
        <form className="register_box_wraper" action=""  ref={formtable} onSubmit={(e) => formSubmit(e)}>
          <div className="register_form">
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={(e) => onchangesetdatainput(e)}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={(e) => onchangesetdatainput(e)}/>
            <input
              type="text"
              placeholder="phone"
              name="phone"
              onChange={(e) => onchangesetdatainput(e)}/>
            <input
              type="text"
              placeholder="password"
              name="password"
              onChange={(e) => onchangesetdatainput(e)}
            />
            <br />
            <br /> 
            <button type="submit" className="sub_button">
              submit
            </button>
          </div>
          
        </form>
        <button
            onClick={(e) => getapi(e)}
            type="button"
            className="sub_button">
            getdata
          </button>
          <table className="table" border="2px solid black">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.password}</td>
                    <td>
                      <button
                        type="button"
                        className="login_register"
                        onClick={() => updateAction(item.id)}
                      >
                        update
                      </button>

                      <button
                        type="button"
                        className="login_register"
                        onClick={() => deleteAction(item.email)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>name</th>
                <th>class</th>
                <th>number</th>
                <th>email</th>
              </tr>
            </tfoot>
          </table>
      </div>
    </>
  );
};

export default Superform;