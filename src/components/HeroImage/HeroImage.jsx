import FreeCourses from "../FreeCourses/FreeCourses";
import SmCirclEle from "../SmCirclEle/SmCirclEle";
import HeroCrownEle from "../HeroCrownEle/HeroCrownEle";
import AwardEle from "../AwardEle/AwardEle";
import StudentEnroll from "../StudentEnroll/StudentEnroll";

export default function HeroImage () {
    return (
        <div className="hero-image-container">
            <div className="hero-image-box">
                <img className="hero-image" src="./src/assets/images/img2.png" alt="student with books" />
            </div>
            <FreeCourses />
            <SmCirclEle smallCircleClass="hero-sm-circle" />
            <HeroCrownEle />
            <AwardEle AwardEleClass="hero-award-ele"/>
            <StudentEnroll />
        </div>
    );
}