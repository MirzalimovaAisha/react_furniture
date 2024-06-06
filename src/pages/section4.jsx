import React from "react";
import {
    ImgWrapper,
    ItemNumber,
    ItemNumberContainer,
    SecBox,
    SecItemImg,
    SecSubTitle,
    SecTitle,
    Section4ItemName,
    SectionContainer,
    SectionItemName,
    SectionItemSubName,
    SectionItems,
    SectionTitles,
} from "./style";
import secImg1 from "../assets/sec4_img1.png";
import secImg2 from "../assets/sec4_img2.png";
import secImg3 from "../assets/sec4_img3.png";

const Section4 = () => {
    return (
        <div>
            <SectionContainer>
                <div>
                    <SectionTitles>
                        <SecTitle>How It Works</SecTitle>
                        <SecSubTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </SecSubTitle>
                    </SectionTitles>

                    <SecBox>
                        <Section4ItemName>
                            <SecItemImg>
                                <ImgWrapper src={secImg1} />
                                <ItemNumberContainer>
                                    <ItemNumber>1.</ItemNumber>
                                </ItemNumberContainer>
                            </SecItemImg>

                            <div>
                                <SectionItemName>
                                    Purchase Securely
                                </SectionItemName>
                                <SectionItemSubName>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </SectionItemSubName>
                            </div>
                        </Section4ItemName>

                        <Section4ItemName>
                            <SecItemImg>
                                <ImgWrapper src={secImg2} />
                                <ItemNumberContainer>
                                    <ItemNumber>2.</ItemNumber>
                                </ItemNumberContainer>
                            </SecItemImg>

                            <div>
                                <SectionItemName>
                                    Ships From Warehouse
                                </SectionItemName>
                                <SectionItemSubName>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </SectionItemSubName>
                            </div>
                        </Section4ItemName>

                        <Section4ItemName>
                            <SecItemImg>
                                <ImgWrapper src={secImg3} />
                                <ItemNumberContainer>
                                    <ItemNumber>3.</ItemNumber>
                                </ItemNumberContainer>
                            </SecItemImg>

                            <div>
                                <SectionItemName>
                                    Style Your Room
                                </SectionItemName>
                                <SectionItemSubName>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </SectionItemSubName>
                            </div>
                        </Section4ItemName>
                    </SecBox>
                </div>
            </SectionContainer>
        </div>
    );
};

export default Section4;
