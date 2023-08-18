import Navigation from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Login from "./components/Login/Login";
import HeroDescription from "./components/HeroDescrption/HeroDescription";
import HeroImage from "./components/HeroImage/HeroImage";
import SectionWhyLeft from "./components/SectionWhyLeft/SectionWhyLeft";
import SectionWhyRight from "./components/SectionWhyRight/SectionWhyRight";
import SectionHelpLeft from "./components/SectionHelpLeft/SectionHelpLeft";
import SectionHelpRight from "./components/SectionHelpRight/SectionHelpRight";
import ArrowEl from "./components/ArrowEl/ArrowEl";
import SectionDiscoverCard from "./components/SectionDiscoverCard/SectionDiscoverCard";
import SectionWhat from "./components/SectionWhat/SectionWhat";
import SectionStart from "./components/SectionStart/SectionStart";
import Footer from "./components/Footer/Footer";

export default function MyApp() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Logo />
          <Navigation />
          <Login />
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="container grid grid--2-col align-items-v">
            <div><HeroDescription /></div>
            <div className="hero-img-container"><HeroImage /></div>
          </div>  
        </section>
        <section className="section-why">
          <div className="container section-why-grid">
            <div><SectionWhyLeft /></div>
            <div><SectionWhyRight /></div>
          </div>
        </section>
        <section className="section-help">
          <div className="container grid grid--2-col align-items-v">
            <SectionHelpLeft />
            <SectionHelpRight />
          </div>
        </section>
        <section className="section-discover">
          <div className="container">
            <div className="sec-dis-heading-box">
              <div className="headg-box"><h2 className="heading-secondary mgn-btm-0">Discover The Variety of <span>Courses Here</span></h2></div>
              <div className="sec-dis-arrow-box"><ArrowEl /></div>
            </div>
            <SectionDiscoverCard />
          </div>
        </section>
        <section className="section-what">
          <div className="container">
            <SectionWhat />
          </div>
        </section>
        <section>
          <SectionStart />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}