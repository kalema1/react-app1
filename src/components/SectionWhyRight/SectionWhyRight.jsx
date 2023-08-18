import SectionWhyRightItem from "../SectionWhyRightItem/SectionWhyRightItem";

export default function SectionWhyRight() {
    return (
        <div className="sec-why-right-box">
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/education1.png"
                    heading="Course Accessibility"
                    para="Select a suitable course from the vast area of other courses."
                />
            </div>
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/equal.png"
                    heading="Schedule Learning"
                    para="Learn at whatever at your suitable time and place."
                />
            </div>
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/maths.png"
                    heading="Expert Instructions"
                    para="Hold the opportunity to learn from the industry's experts."
                />
            </div>
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/exam.png"
                    heading="Scholarship"
                    para="To encourage talent, we give upto 100% aid to those young learners."
                />
            </div>
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/maths2.png"
                    heading="Recorded Sessions"
                    para="Don't worry about it, access to every session on the chosen course."
                />
            </div>
            <div>
                <SectionWhyRightItem 
                    image="./src/assets/images/virtual.png"
                    heading="Pratical Learning"
                    para="Interact yourself with the real-world while doing the real-world projects."
                />
            </div>
        </div>
    );
}