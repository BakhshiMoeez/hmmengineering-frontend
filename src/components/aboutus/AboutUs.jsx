import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './AboutUs.css';

export default function AboutUs() {
  const staffPics = ['/assets/AboutUsImage/me.png'];
  const clientPics = ['/assets/Logo/compart.png','/assets/Logo/niblock.jpeg', '/assets/Logo/steel_track.jpeg'];
  const images = ['/assets/AboutUsImage/aboutImage1.jpg', '/assets/AboutUsImage/aboutImage2.jpg',
    '/assets/AboutUsImage/aboutImage3.jpg', '/assets/AboutUsImage/aboutImage4.jpg',
    '/assets/AboutUsImage/aboutImage5.jpg', '/assets/AboutUsImage/aboutImage6.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 3000);
    return () => clearInterval(interval);
  }, [])


  return (
    <div className='aboutus-main-container'>
      <div className="about-us-hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0)), url(${images[currentImageIndex]})` }}>
        <div className="about-us-hero-section-content" >
          <Container>
          <div className="about-us-hero-section-content-inner-wrapper">
            <h1 className='about-us-hero-section-heading'>About Us</h1>
            <p className='about-us-hero-section-paragraph'>
              Driven by a vision of prosperity and progress, Pakistani Iron & Steel Mill continues to be a driving force in shaping the nation's industrial landscape. With a steadfast focus
              on innovation, efficiency, and customer satisfaction, we remain dedicated to forging a brighter future for Pakistan
              and beyond. Join us on our journey as we continue to set new benchmarks in the steel industry, forging partnerships,
              and building bridges towards a stronger, more resilient tomorrow.</p>
          </div>
          </Container>
        </div>
      </div>
      <Container>
      <div className="about-us-content-section">
        <h2 className='about-us-content-section-heading-common'>Our Company</h2>
        <p className='about-us-content-section-paragraph-common'>
          Our steel manufacturing venture began back in 1970 from steel trading in Lahore.
          However, it was not until 1978 that we began manufacturing steel in Islamabad with a capacity of 38,000 – 40,000 TPA.
          Our growth has been proportional with that of the needs of the industry and the local market.
          We now have a capacity of 400,000 MTA and manufacturing plants in Islamabad and Faisalabad, respectively.
          We have built a bond of trust with our clients by following the international industry standards and the passing
          years have mirrored our promise of reliability and longevity of products.
          Our future endeavors include an increase in our current capacity to 1,000,000 MTA by beginning the operations
          of a re-rolling mill on land spread over 32 acres in Faisalabad and setting up a power generation plant to
          bear the majority of the electrical needs of the manufacturing plants.
        </p>

        <h2 className='about-us-content-section-heading-common'>Our Products</h2>
        <p className='about-us-content-section-paragraph-common'>
          Hmm Steel currently manufactures Grade 40 and Grade 60 products that are a fine depiction of durability, strength,
          and life-long investment. Following the international quality standards while manufacturing our products has
          guaranteed our sales all across Pakistan. Whether it is the construction of a state-of-the-art, high rise monuments,
          or related infrastructure, our products will fit your needs.
        </p>

        <div className="about-us-staff-intro-section">
          <div className="about-us-staff-heading-container">
            <h2 className='about-us-staff-heading'>
              Our Staff
            </h2>
          </div>
          <div className="about-us-staff-intro-section-inner-container">
            <div className="about-us-staff-intro-section-inner-container-left">
              <div className="about-us-image-container">
                <img src={staffPics[0]} alt="Chairman" />
                <div className="about-us-image-container-text">
                  <strong>Sheikh Abdullah Nazim</strong>
                  <small>Founder/Chairman</small>
                </div>
              </div>
            </div>
            <div className="about-us-staff-intro-section-inner-container-right">
              <p className='about-us-staff-content'>
                Sheikh Abdullah Nazim graduated from Government College in 1974-1975.
                His family owned a steel trading business but Mr. Abdullah had bigger plans.
                Hence, he became the founder of the pioneer re-rolling mill in Islamabad in 1978.
                Mr. Abdullah did not stop exploring new ventures and went on to own  Landmark Associates which is a real estate venture.
                He is a celebrated local industrialist who held the positions of President of Islamabad Chamber of Commerce and Industry
                in 1995, and later became the Chairman of Founder’s Group in 2008-2009 and again 2016-2017.
                Chairman Pakistan steel re-rolling mills association
              </p>
            </div>
          </div>
        </div>
      

        <div className="about-us-clients-intro-section">
          <h2 className='about-us-clients-heading'>
            Our Clients
          </h2>
          <div className="about-us-image-container">
            <img src={clientPics[0]} alt="comparte" style={{ width: "20rem" }} />
            <strong style={{marginBottom: "4rem"}}>Compartee</strong>
            {/* <small> Founder/Chairman</small> */}
          </div>
          <div className="about-us-image-container">
            <img src={clientPics[1]} alt="Niblock" style={{ width: "20rem"}} />
            <strong style={{marginBottom: "4rem"}}>Niblock</strong>
            {/* <small> Founder/Chairman</small> */}
          </div>
          <div className="about-us-image-container">
            <img src={clientPics[2]} alt="Steel Track" style={{ width: "20rem"}} />
            <strong style={{marginBottom: "4rem"}}>Steel Track</strong>
            {/* <small> Founder/Chairman</small> */}
          </div>
        </div>

      </div>
      </Container>
    </div>
  )
}