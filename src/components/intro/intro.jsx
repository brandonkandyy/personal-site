import "./intro.css"
import Headshot from "../../images/head.jpg"

const Intro = () => {
    return(
        <div className="base">
            <div className="left">
                <div className="wrapper">
                    <div className="name-intro">Howdy, I'm </div>
                    <h1 className="name">Brandon Kandarapally</h1>
                    <div className="title-intro"> and I am a...</div>
                    <div className="titles">
                        <div className="title-wrapper">
                            <div className="title-item"> Software Engineer </div>
                            <div className="title-item"> Backend Developer </div>
                            <div className="title-item"> Frontend Developer </div>
                            <div className="title-item"> Code Wrangler 🤠 </div>
                            <div className="title-item"> Video Editor </div>
                            <div className="title-item"> Karaoke King </div>
                        </div>
                    </div> 
                    <div className="title-intro">based out of Milwaukee, WI.</div>
                </div>
            </div>
            <div className="right">
                <img src={Headshot} alt="Headshot" className="headshot"/>
            </div>
        </div>
    )
}

export default Intro