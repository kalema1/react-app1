import SectionHelpNumEl from "../SectionHelpNumEl/SectionHelpNumEl";

export default function SectionHelpRight() {
    return (
        <div>
            <div className="sec-help-ryt-hdg-box">
                <h2 className="heading-secondary">
                    We <span>Help Students</span> Grow Their Career
                </h2>
                <p className="sec-para">Quisque lorem tortor fringilla sed, vestibulum id, elefend justo vella ipsum dolar lacus</p>
            </div>
            
            <div className="sec-help-num-box">
                <div><SectionHelpNumEl numHeading="23k" numPara="Students"/></div>
                <div><SectionHelpNumEl numHeading="2k+" numPara="Courses"/></div>
                <div><SectionHelpNumEl numHeading="130k" numPara="Countries"/></div>
            </div>
        </div>
    );
}