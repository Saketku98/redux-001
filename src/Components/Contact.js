import { useSelector } from 'react-redux';
import Navbar from "./Navbar";
import '../App.css';
const Contact =_=>{
    const isLight = useSelector((state)=>state.isLight)
    return(
<>
<div className={isLight?'light':'dark'}>
<Navbar/>

<h1>Contact me at helpline@geekster.in</h1>
</div>
</>

    )
}
export default Contact;