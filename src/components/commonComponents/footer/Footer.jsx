import Container from 'react-bootstrap/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

export default function Footer() {
  const iconColor = "#f58220";
  return (
    <>
      <div className="footer-main-container">
        <Container>
          <div className="footer-sub-main-container">
            <div className="footer-sub-main-left-section">
              <h1 className='footer-sub-main-left-section-title'>HmmEngineering</h1>
              <p className='footer-sub-main-left-section-content'>Fancy and Luxurious street poles</p>
              <div className="footer-left-section-social-media-icons">
                <span className="footer-social-media-icon">
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                </span>
                <span className="footer-social-media-icon">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                </span>
                <span className="footer-social-media-icon">
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><YouTubeIcon /></a>
                </span>
              </div>
            </div>
            <div className="footer-sub-main-right-section">
              <div className="footer-right-section-content-main-container">
                <div className="footer-right-section-content-sub-main-container">
                  
                  <div className="footer-right-section-content-sub-main-container-item">
                    <span className='footer-right-content-item-icon'>
                      <LocationOnIcon style={{color: iconColor}}/>
                    </span>
                    <span className='footer-right-content-item-content'>
                      <p>Do moriya pul</p>
                    </span>
                  </div>

                  <div className="footer-right-section-content-sub-main-container-item">
                    <span className='footer-right-content-item-icon'>
                      <LocalPhoneIcon style={{color: iconColor}}/>
                    </span>
                    <span className='footer-right-content-item-content'>
                      <p>0321-1234567</p>
                    </span>
                  </div>

                  <div className="footer-right-section-content-sub-main-container-item">
                    <span className='footer-right-content-item-icon'>
                      <WhatsAppIcon style={{color: iconColor}}/>
                    </span>
                    <span className='footer-right-content-item-content'>
                      <p>0321-1234567</p>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
