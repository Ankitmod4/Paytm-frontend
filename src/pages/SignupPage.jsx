
import { useState } from "react";
import { Button } from "../components/ButtonCompo";
import { ButtonWarn } from "../components/ButtonWarningCompo";
import { Heading } from "../components/HeadingCompo";
import { InputBox } from "../components/InputBoxCompo";
import { SubHeading } from "../components/SubHeadingCompo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignupPage(){
    const [firstname , setFirstName] = useState("")
    const [lastname , setLastName] = useState("") 
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox onChange={e=>{
                    setFirstName(e.target.value)
                }} label={"First Name"} placeholder={"John"} value={firstname}> </InputBox>
                <InputBox onChange={e=>{
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Doe"} value={lastname}></InputBox>
                <InputBox onChange={e=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"Div1234@gmail.com"} value={username}></InputBox>
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"r63r6383"} value={password}></InputBox> 
                <div className="pt-4">
                <Button onClick={async () => {
    try {
        const response = await axios.post("https://paytm-project-backend.vercel.app/api/v1/user/Signup", {
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password
        });
        setUsername('');
        setFirstName('');
        setLastName(''); 
        setPassword('');
        console.log(username);
        if(response.data.message=== "User created Succesfully"){
            navigate("/dashboard")
        }
        localStorage.setItem("token", response.data.token);
    } catch (error) {
        console.error("Signup failed:", error);
        alert("Signup failed. Please try again.");
    }
}} label={"Sign up"}></Button>
                </div>
                <ButtonWarn label={"Already have an account?"} buttontext={"Signin"} to={"/signin"}></ButtonWarn>
            </div>

        </div>

    </div>
}