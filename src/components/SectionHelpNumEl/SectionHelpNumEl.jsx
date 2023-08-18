export default function SectionHelpNumEl({ numHeading, numPara }) {
    return (
        <div>
            <p className="num-heading"><span>{numHeading}</span></p>
            <p className="num-para">{numPara}</p>
        </div>
    );
}