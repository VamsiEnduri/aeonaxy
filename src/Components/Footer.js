import React from "react";
import logo from "../assets/logo.jpg";
import yt from "../assets/yt.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import pintrest from "../assets/pinterest.png";

const Footer = () => {
  const footers = [
    {
      heading: "PRODUCT",
      links: [
        "Templates",
        "Explore",
        "Features",
        "Webiste Builder",
        "Web Accessibility",
        "velo",
        "Wix Playground",
        "My Plans",
        "Premium Plans",
        "Wix CE0",
        "Logo Maker",
        "Create A Blog",
        "Online Store",
        "Wix Bookings",
        "Resturants",
        "Api Markets",
        "Domains",
        "Bussiness Email",
        "Web Hosting",
        "Developers",
        "Enterprise",
        "Email Marketing",
        "Website Design",
        "Professional Tools",
      ],
    },
    {
      heading: "COMPANY",
      links: [
        "About Wix",
        "Press Room",
        "Investor Realtions",
        "Wix Jobs",
        "Design Assets",
        "Terms of Use",
        "App Market Terms",
        "Privacy Policy",
        "Privacy and Security Hub",
        "Aceesibility Statement",
        "Abuse",
        "Affiliates",
        "Wix Capitals",
        "Updates & Releases",
        "Contact Us",
        "Ptaent Notice",
        "Sitemap",
      ],
    },
    {
      heading: "COMMUNITY",
      links: [
        "Wix Blog",
        "Wix Marketplace",
        "Student Website",
        "Wix Encyclopedia",
        "Partenr Community",
      ],
    },
    {
      heading: "SUPPORT",
      links: [
        "Suppoer Center",
        "Fetting Started Guide",
        "Wix Learn",
        "Status Page",
      ],
    },
  ];
  const socialIcons = [fb, twitter, yt, pintrest, insta, linkedin];
  return (
    <>
      <footer className="flex-col md:flex md:flex-row flex  m-10 justify-between gap-5 p-7">
        {footers.map((item) => {
          return (
            <div className="mt-3">
              <h5 className="text-md mb-2 font-medium">{item.heading}</h5>
              {item.links.map((link) => {
                return (
                  <ul className="text-sm p-1">
                    <span>{link}</span>
                  </ul>
                );
              })}
            </div>
          );
        })}
        <div className="w-[250px]">
          <img src={logo} alt="footer-logo" width="100px" />
          <p>
            The Wix website builder offers a complete solution from
            enterprise-grade infrastrcture and business features to advanced SEO
            and markering tools-enabling anyone to create and grow online
          </p>
          <span> &copy; 2006-2022 Wix.com , Inc</span>
          <div className="flex gap-2 mt-3">
            {socialIcons.map((icon) => {
              return <img src={icon} alt="" className="w-[20px] rounded-lg" />;
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
