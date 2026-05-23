import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          {/* Contact Section */}
          <Fade bottom duration={1000} distance="40px">
            <div
              className="contact-heading-div"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              {/* Contact Text */}
              <div
                className="contact-heading-text-div"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData.description}
                </p>

                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>

          {/* Address Section */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              {/* Address Image */}
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>

              {/* Address Details */}
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection.subtitle}
                </p>

                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection.title}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection.subtitle}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
