import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { baseUrl } from "../config";
import Toast from "@leafygreen-ui/toast";



export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  let [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/login`,{
        method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username, password
      })}).then((response) => {
        if (response.status === 401) {
            setToastOpen(true);
            setTimeout(() => setToastOpen(false), 3000);
        } else{
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }
    }).catch((error) => {
        console.log(error);
    })

  };
  return (
    <div style={{backgroundColor: 'red'}}>
      <form onSubmit={handleSubmit}>
 <input
 type="text"
 name="Username"
 value={username}
 onChange={(e) => setusername(e.target.value)}
 />
 <input
 type="password"
 name="Password"
 onChange={(e) => setpassword(e.target.value)}
 />
 <input type="submit" value="Login" />
 </form>
 <Toast
        variant="warning"
        title="Fail"
        body="Fail."
        open={toastOpen}
        close={() => setToastOpen(false)}
      />
    </div>
  );
};