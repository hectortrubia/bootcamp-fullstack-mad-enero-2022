
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Info from "../info"


function Details() {

    const location = useLocation()
    const { from } = location.state
    console.log(location)
    
    console.log(location)
        
        return (
            <div >
                <Link to='info' element={<Info></Info>}>
    
                    <div >
            
                       <img src={location.state.from.img} alt="" />   
    
                        </div>
                   
                </Link>
            </div>
        )
    }

    export default Details