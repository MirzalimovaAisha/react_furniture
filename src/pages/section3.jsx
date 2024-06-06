import React from "react";
import {
    ImgWrapper,
    Line,
    SecBox,
    SecSubTitle,
    SecTitle,
    SectionContainer,
    SectionItemName,
    SectionItems,
    SectionTitles,
} from "./style";
import img1 from "../assets/sec3_img1.png";
import img2 from "../assets/sec3_img2.png";
import img3 from "../assets/sec3_img3.png";

const Section3 = () => {
    return (
        <div>
            <SectionContainer>
                <div>
                    <SectionTitles>
                        <SecTitle>Browse The Range</SecTitle>
                        <SecSubTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </SecSubTitle>
                    </SectionTitles>

                    <SecBox>
                        <SectionItems>
                            <ImgWrapper src={img1} />
                            <SectionItemName>Living</SectionItemName>
                        </SectionItems>

                        <SectionItems>
                            <ImgWrapper src={img2} />
                            <SectionItemName>Bedroom</SectionItemName>
                        </SectionItems>

                        <SectionItems>
                            <ImgWrapper src={img3} />
                            <SectionItemName>Dining</SectionItemName>
                        </SectionItems>
                    </SecBox>
                </div>
            </SectionContainer>
            <Line></Line>
        </div>
    );
};

export default Section3;
