import Container from 'react-bootstrap/Container';  
import './HeroSection.css';

export default function HeroSection() {
  return (
    <>
      <div className="hero-section-main-container">
        <div className="hero-section-main-container-image">
          <img src="/assets/Heropage/heropagepic.jpg" alt="hero-page-main-pic" />
        </div>
        <div className='hero-section-main-container-image-cover'>
          <Container>
              <div className="hero-section-main-container-main-content-section">
                <div className="hero-section-main-container-main-content-section-title">
                  <h1>Welcome to HmmEngineering</h1>
                </div>
                <div className="hero-section-main-container-main-content-section-description">
                  <p>We provide you with Fancy, Luxurious and Affordable Street poles brimming with elegance.</p>
                </div>
              </div>
          </Container>
        </div>
      </div>
    </>
  )
}
