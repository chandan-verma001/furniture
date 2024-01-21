import React, { useState, useRef } from "react";
const Register = () => {
  const formEl = useRef();
  const [img, setImg] = useState("");

  let initialForm = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    profile: "",
  };

  let [formData, setFormData] = useState(initialForm);
  let [resMsg, setresMsg] = useState("");

  // capture data when user input
  let setdata = (e) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  console.log(formData);

  // data post to server
  let formSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "") {
      setresMsg("Please enter your name.");
      return;
    }
    if (formData.email === "") {
      setresMsg("Please enter your email.");
      return;
    }
    if (formData.password === "") {
      setresMsg("Please enter your password.");
      return;
    }
    if (formData.phone === "") {
      setresMsg("Please enter your mobile.");
      return;
    }
    if (formData.gender === "") {
      setresMsg("Select your gender.");
      return;
    }

    const data = new FormData();
    console.log();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("phone", formData.phone);
    data.append("gender", formData.gender);
    data.append("profile", img);

    var requestOptions = {
      method: "POST",
      body: data,
    };

    let request = fetch(
      "http://localhost:3500/productss/create",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        formEl.current && formEl.current.reset(); // reset form data
        setFormData(initialForm);
        setresMsg("Your aacount has been successfully created");
      })
      .catch((error) => {
        setresMsg("Opps! something went wrong..");
      });
  };

  return (
    <>
      {resMsg}
      <div className="container">
        <div className="register_box_wraper">
          <form
            method="post"
            ref={formEl}
            action=""
            className="register_form"
            onSubmit={(e) => formSubmit(e)}
          >
            <label htmlFor="">Profile Photo :</label>
            <br />
            <input
              name="profile"
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
            />
            <label htmlFor="">Name :</label>
            <br />
            <input
              name="name"
              onChange={(e) => setdata(e)}
              type="text"
              placeholder="Enter your name here"
            />
            <br />
            <br />
            <label htmlFor="">E-Mail :</label>
            <br />
            <input
              name="email"
              onChange={(e) => setdata(e)}
              type="text"
              placeholder="Enter your email here"
            />
            <br />
            <br />
            <label htmlFor="">Phone.NO :</label>
            <br />
            <input
              name="phone"
              onChange={(e) => setdata(e)}
              type="text"
              placeholder="Enter phone number"
            />
            <br />
            <br />
            <label htmlFor="">Gender :</label>
            <br />
            <input
              onChange={(e) => setdata(e)}
              type="radio"
              name="gender"
              value="MALE"
              id=""
            />
            <label htmlFor="">Male</label>
            <br />
            <input
              onChange={(e) => setdata(e)}
              type="radio"
              name="gender"
              value="FEMALE"
              id=""
            />
            <label htmlFor="">Female</label>
            <br />
            <input
              onChange={(e) => setdata(e)}
              type="radio"
              name="gender"
              value="OTHER"
              id=""
            />
            <label htmlFor="">Other</label>
            <br />
            <br />
            <label htmlFor="">Password :</label>
            <br />
            <input
              name="password"
              onChange={(e) => setdata(e)}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <button type="submit" className="sub_button">
              Register
            </button>
            <br />
            <br />
            <p>
              Alredy have an acoount? <a href="/login">Log In</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
