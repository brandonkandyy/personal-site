import "./about-me.css"
import Youngin from "../../images/Youngin.jpg"
import ClassicMode from "../../images/2006Mode.gif"

const AboutMe = () => {
    return(
        <div className="base">
            <div className="color">
            <img src={Youngin} alt="Me as a kid gutting pumpkins with my Mom and Brother" className="picture"/>
            </div>
            <div className="text">
               <h1 className="title">About Me</h1>
               <h4 className="humble">(On my own site? How humble.)</h4>
               <br/>
               <div className="paragraph"> I was born and raised in Milwaukee. I'm originally from the north side, but I currently live on the east side on Brady St.
                My first interest in software started in high school when I would mess around with the inspect element tool on my high school's website to add stupid pictures to the homepage.
                I went on and teach myself HTML and CSS using basic notepad as I had no idea IDE or code editors in general existed. 
                I then attend school at the Milwaukee School of Engineering where I learned new skills <b>(like that code editors exist)</b> and refined my talents to work on industry level projects.</div>
                <div/>
                <br/>
                <div className="paragraph"> Outside of software, I love video games and video editing. The two coexist as I only got into video editing to make youtube videos of me playing games in middle school.
                I also love all music. I go to shows almost weekly, big or small.  I'm also teaching myself guitar as I would like to make my own music one day. I refine my singing skills by attending the weekly karaoke night at my favorite bar where you can hear me do renditions of early 2000's pop punk classics. 
                </div>
                <br></br>
                <div className="paragraph"> While I am fine with making clean sites like this one, I love old 2006 frontend design (or the lack there of) of sites like GeoCities and MySpace where people just threw styling at their site how they pleased.
                I added a 2006 mode to this site if you are interested in seeing what it would look like:
                </div>

                <img className="button-of-2006" src={ClassicMode}></img>
            </div>
        </div>
    )
}

export default AboutMe