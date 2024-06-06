import React from "react";
import {
    GreenCircle,
    HeaderButton,
    ImgWrapper,
    Sec2Container,
    SecSubTitle,
    SecTitle,
} from "./style";
import sec2Img from "../assets/sec2_img.png";

const Section2 = () => {
    return (
        <Sec2Container>
            <div>
                <SecTitle>Beautify Your Space</SecTitle>
                <SecSubTitle>
                    Do eiusmod tempor incididunt ut labore et <br /> dolore
                    magna aliqua. Ut enim ad minim veniam,
                    <br /> quis nostrud exercitation ullamco laboris.
                </SecSubTitle>
                <HeaderButton>Learn More</HeaderButton>
            </div>
            <div style={{position:"relative"}}>
                <ImgWrapper src={sec2Img}  style={{zIndex:"1", position:"relative"}}/>
                <GreenCircle></GreenCircle>
            </div>
        </Sec2Container>
    );
};

export default Section2;
