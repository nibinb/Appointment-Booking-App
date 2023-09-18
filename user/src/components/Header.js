import { H1 } from '@leafygreen-ui/typography';
import { MongoDBLogoMark } from '@leafygreen-ui/logo';
import { useNavigate } from "react-router-dom"

export default function Header(props) {
  const navigate = useNavigate();
  let wrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
  
  let logoSize = 48;

  let logoStyle = { 
    width: `${logoSize}px`, 
    marginRight: `${logoSize/2}px`
  };

  const logout = () => {
    localStorage.clear("authenticated");
    navigate("/");
  }
  
  return(
    <div style={wrapperStyle}>
      <H1>{props.title}</H1>
      <button title="Logout" onClick={() => {logout()}}>Logout</button>
    </div>
  )
}