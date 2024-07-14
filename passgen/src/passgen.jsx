import { useState } from "react";
const passgen = () => {
  const [password, setPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const generatepass = (checkboxdata, ln) => {
    let charset = "",
      generatedPassword = "";
    const selectedoption = checkboxdata.filter((checkbox) => checkbox.state);
    selectedoption.forEach((option) => {
      switch (option.tittle) {
        case "Include uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });
    for(let i=0;i<ln;i++)
    {
        const randomindex =Math.floor(Math.random()*charset.length)
        generatedPassword +=charset[randomindex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };
  return { password, errormessage, generatepass };
};
export default passgen;
