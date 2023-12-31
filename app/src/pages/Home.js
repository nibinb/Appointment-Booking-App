import React, {useState, useEffect} from "react";
import { H2 } from "@leafygreen-ui/typography";
import PostSummary from "../components/PostSummary";
import { baseUrl } from "../config";

export default function App() {
  let [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      let results = await fetch(`${baseUrl}/doctors/getAll`).then(resp => resp.json());
      setDoctors(results);
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