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
  let [ name, setName ] = useState("");
  let [ tokensPerDay, setTokensPerDay ] = useState("");
  let [ qualification, setQualification ] = useState("");
  let [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = async () => {
    await fetch(`${baseUrl}/doctors/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name, qualification, tokensPerDay
      })
    }).then(resp => resp.json());
    setName("");
    setTokensPerDay("");
    setQualification("");
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 3000);
  }

  return (
    <React.Fragment>
      <H2>Add a doctor</H2>
      <form className={formStyle}>
        <TextInput
          label="Author"
          description="Enter doctors name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <TextInput
          label="Author"
          description="Enter doctors qualification"
          onChange={e => setQualification(e.target.value)}
          value={qualification}
        />
        <TextInput
          label="Author"
          type="number"
          description="Enter doctors tokens per Day"
          onChange={e => setTokensPerDay(e.target.value)}
          value={tokensPerDay}
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