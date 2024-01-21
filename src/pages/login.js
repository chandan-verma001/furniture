import React, { useRef, useState } from "react";
const Login = ()=>{
    let defaultset = useRef();
    let initialForm = {
        email : "",
        password : ""
    }
    let [userdata,setuserdata]=useState(initialForm);
    let [userform,setuserform]=useState("");
    let getuser = (e)=>{
        setuserdata((values)=>({...values,[e.target.name]:e.target.value}));
    }
    console.log(userdata);
    let userlogin = (e)=>{
        e.preventDefault();
        if(userdata.email==="")
        {
            setuserform("check your email")
            return
        };
        if(userdata.password===""){
            setuserform("check your password")
            return
        };
        var requestOptions = {
            method : "POST",
            headers :{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userdata)
        };
        let request = fetch("http://localhost:3500/productss/get",requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                defaultset.current && defaultset.current.reset();
                setuserdata(initialForm)
                alert(result.message);
            });
    };
    return(
        <>
        {userform}
         <div className="container">
            <div className="login_box_wraper">
                <form action="" onSubmit={(e)=>{userlogin(e)}} ref={defaultset}>
                    <input onChange={(e)=>getuser(e)} name="email" type="text" placeholder="Username/Email"/>
                    <br />
                    <br />
                    <input onChange={(e)=>getuser(e)} name="password" type="password" placeholder="Password"/>
                    <br />
                    <br />
                    <button type="submit" className="sub_button" >Log In</button>
                    <br />
                    <br />
                    <p>Don't have account? <a href="/register">Register</a></p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login