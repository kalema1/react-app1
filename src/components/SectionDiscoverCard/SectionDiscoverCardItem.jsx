export default function SectionDiscoverCarditem({ disImage, disHeading, disPara, disRating1, disRating2, disRating3, disPrice, grayEmoji }) {
    return (
        <div className="sec-dis-card-box">
            <div className="dis-card-img-box">
                <img className="dis-card-img" src={disImage} alt="card image" />
            </div>
            <h3 className="heading-tertiary">{disHeading}</h3>
            <p className="sub-sec-para">{disPara}</p>
            <div className="dis-card-rating-box">
                <p className="dis-card-rating-item1">{disRating1}</p>
                <p className="dis-card-rating-item2">{disRating2}<span className="emoji-span">{grayEmoji}</span></p>
                <p className="dis-card-rating-item3">{disRating3}</p>
            </div>
            <p className="dis-price">{disPrice}</p>
        </div>
    );
}