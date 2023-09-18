import React, {useState} from "react";
import { H2 } from "@leafygreen-ui/typography";
import TextInput from '@leafygreen-ui/text-input';
import FormFooter from "@leafygreen-ui/form-footer";
import Toast from "@leafygreen-ui/toast";
import { css } from "@leafygreen-ui/emotion";
import { baseUrl } from "../config";

const formStyle = css`
  height: 100vh;
  min-width: 767px;
  margin: 10px;

  input {
    margin-bottom: 20px;
  }
`

export default function App() {
  let [ userName, setUserName ] = useState("");
  let [ password, setPassword ] = useState("");
  let [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = async () => {
    await fetch(`${baseUrl}/patients/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ userName, password })
    }).then(resp => resp.json());
    setUserName("");
    setPassword("");
    setTimeout(() => setToastOpen(false), 3000);
  }

  return (
    <React.Fragment>
      <H2>Add a doctor</H2>
      <form className={formStyle}>
        <TextInput
          label="Username"
          description="Enter doctors name"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <TextInput
          label="Author"
          description="Enter doctors qualification"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <FormFooter
          primaryButton={{
            text: 'Add doctor',
            onClick: handleSubmit
          }}
        />
      </form>

      <Toast
        variant="success"
        title="Doctor Added"
        body="Doctor added successfully."
        open={toastOpen}
        close={() => setToastOpen(false)}
      />
    </React.Fragment>
  )
}