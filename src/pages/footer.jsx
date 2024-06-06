import React from "react";
import {
    FooterContainer,
    FooterImgs,
    FooterLatter2,
    FooterLetter1,
    ImgWrapper,
} from "./style";
import footerImg1 from "../assets/footer_img1.jpg";
import footerImg2 from "../assets/footer_img2.jpg";
import footerImg3 from "../assets/footer_img3.jpg";
import footerImg4 from "../assets/footer_img4.jpg";

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <FooterLetter1>Beauty Care</FooterLetter1>
                <FooterLatter2>
                    Do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                </FooterLatter2>
                <FooterLetter1>Follow Us</FooterLetter1>
            </div>
            <div>
                <FooterLetter1>Instagram Shop</FooterLetter1>
                <FooterImgs>
                    <ImgWrapper src={footerImg1} />
                    <ImgWrapper src={footerImg2} />
                    <ImgWrapper src={footerImg3} />
                    <ImgWrapper src={footerImg4} />
                </FooterImgs>
            </div>
        </FooterContainer>
    );
};

export default Footer;
