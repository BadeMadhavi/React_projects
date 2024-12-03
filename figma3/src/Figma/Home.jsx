import "./index.css"
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate()
    return(
        <div className="main">
            <img className="homeimg" onClick={() => navigate('/Welcome')}src="Group 18084.png" alt="" />
            <img src="Group 18117.png" alt="name" onClick={() => navigate('/Welcome')}></img>

            <br></br><br></br><br></br><br></br>
    
            <p className="kali">.........................................</p>
       
        </div>
    )
}
export default Home;