import React from "react";
import {
    ImgWrapper,
    Sec1Box,
    SecSubTitle,
    SecTitle,
    Section1Container,
} from "./style";
import SecImg1 from "../assets/sec1_img1.png";
import SecImg2 from "../assets/sec1_img2.png";
import SecImg3 from "../assets/sec1_img3.png";

const Section1 = () => {
    return (
        <Section1Container>
            <div>
                <SecTitle>Inspiration Collection</SecTitle>
                <SecSubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SecSubTitle>
                <Sec1Box>
                    <ImgWrapper src={SecImg1}/>
                    <ImgWrapper src={SecImg2} style={{bottom:"38px", position:"relative"}}/>
                    <ImgWrapper src={SecImg3}/>
                </Sec1Box>
            </div>
        </Section1Container>
    );
};

export default Section1;
