import ArrowEl from "../ArrowEl/ArrowEl";

export default function SectionWhat() {
    return (
        <div className="grid grid--2-col">
            <div className="sec-what-l">
                <div className="sec-what-l-img-box">
                    <img className="sec-what-l-img" src="./src/assets/images/img2.png" alt="student" />
                </div>
            </div>
            <div className="sec-what-r">
                <h2 className="heading-secondary">What Our Student <span>Saying</span></h2>
                <p className="sec-para">
                    "I believe in lifelong learning and Unicoach is a great place to learn frm experts. 
                    I work in project in project management and joine Unicoach because I get great courses for less. 
                    The instructors are fantastic, interesting and helpful. i plan to use them for a long time"
                </p>
                <div className="sec-what-stdt-container">
                    <div>
                        <p className="sec-what-stdt-hdg">Maksin Alex</p>
                        <p className="sec-what-stdt-para">Student</p>
                    </div>
                    <ArrowEl />
                </div>
            </div>
        </div>
    );
}