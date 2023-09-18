import React, {useState, useEffect} from "react";
import { H2 } from "@leafygreen-ui/typography";
import PostSummary from "../components/PostSummary";
import { baseUrl } from "../config";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [authenticated, setauthenticated] = useState(null);
  let [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const getDoctors = async () => {
      let results = await fetch(`${baseUrl}/doctors/getAll`).then(resp => resp.json());
      setDoctors(results);
    }
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    } else {
      navigate("/");
    }
    getDoctors();

    return () => {
      getDoctors();
    }
  }, []);
    return (
      <React.Fragment>
        <H2>Doctors</H2>
        <div>
          {doctors.map(doctor => {
            return(
              <PostSummary {...doctor} key={doctor._id} />
            )
          })}
        </div>
      </React.Fragment>
    )

  
}