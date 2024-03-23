import "./ContactUs.css";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import ContactUsForm from "./contactUsChildern/ContactUsForm";
import Container from "react-bootstrap/Container";

export default function ContactUs() {
  const images = ["/assets/ContactUs/contact-us.jpg"];
  const officeLocation = { lat: 40.712776, lng: -74.005974 };
  return (
    <div className="contact-us-main-container">
      <div
        className="contact-us-hero-section-gradient"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" +
            images[0] +
            ")",
        }}
      ></div>
      <Container>
        <section className="contact-us-content-main-container">
          <div className="contact-us-heading">
            <h3>Let's Start a Conversation</h3>
          </div>
          <div className="contact-us-body-section">
            <div className="contact-us-body-section-content">
              <h3>Ask how we can help you</h3>
              <h4>See our platform in action</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                eligendi odit ad nisi tempore iusto nostrum magnam pariatur
                natus cupiditate animi ea porro nam ipsa similique, dolorum
                facere expedita asperiores.
              </p>
              <strong></strong>
            </div>
            <div className="contact-us-body-section-form">
              <ContactUsForm />
            </div>
          </div>
          <div
            className="contact-us-get-in-touch"
            style={{ marginTop: "3rem", marginLeft: "5rem" }}
          >
            <h3>Get in Touch With Us</h3>
            <small>
              You can contact us through a phone call, an email, or simply leave
              us a message and we will get back to you.{" "}
            </small>
            <div className="contact-us-info">
              <div className="animated-gradient-border-container">
                <div className="contact-us-info-address">
                  <div className="contact-us-info-address-icon">
                    <BusinessRoundedIcon
                      style={{ color: "orange", fontSize: "2rem" }}
                    />
                  </div>
                  <div className="contact-us-info-address-content">
                    <div className="contact-us-info-address-content-heading">
                      <strong>Address</strong>
                    </div>
                    <div className="contact-us-info-address-content-body">
                      <small>
                        Do Moriya pul, Lahore, Punjab, Pakistan, World, Milky
                        Way Galaxy, Universe
                      </small>
                    </div>
                  </div>
                </div>

                <div className="contact-us-info-phone">
                  <div className="contact-us-info-phone-icon">
                    <PhoneInTalkRoundedIcon
                      style={{ color: "orange", fontSize: "2rem" }}
                    />
                  </div>
                  <div className="contact-us-info-phone-content">
                    <div className="contact-us-info-phone-content-heading">
                      <strong>Phone</strong>
                    </div>
                    <div className="contact-us-info-phone-content-body">
                      <small>0321-1234567</small>
                    </div>
                  </div>
                </div>

                <div className="contact-us-info-email">
                  <div className="contact-us-info-email-icon">
                    <MarkEmailUnreadRoundedIcon
                      style={{ color: "orange", fontSize: "2rem" }}
                    />
                  </div>
                  <div className="contact-us-info-email-content">
                    <div className="contact-us-info-email-content-heading">
                      <strong>Email</strong>
                    </div>
                    <div className="contact-us-info-email-content-body">
                      <small>hmmengineering@gmail.com</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
