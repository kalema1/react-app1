export default function SectionWhyRightItem({ image, heading, para }) {
    return (
        <div>
            <div className="sec-why-ryt-img-box"><img src={image} className="sec-why-ryt-img" alt="accessbility"/></div>
            <h2 className="heading-tertiary">{heading}</h2>
            <p className="sub-sec-para mgn-bt-0">{para}</p>
        </div>
    )
}