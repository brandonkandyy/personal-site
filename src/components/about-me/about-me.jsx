import "./about-me.css"
import Graduation from "../../images/Graduation.jpg"

const AboutMe = () => {
    return(
        <div className="base">
            <div className="left">
            <img src={Graduation} alt="Graduation Pic" className="headshot"/>
            </div>
            <div className="right">
                I am a pretty cool guy
            </div>
        </div>
    )
}

export default AboutMe