import React from "react";
import {
    HeaderSubText,
    HeaderTitleText,
    ImgWrapper,
    UnderHeaderContainer,
    UnderHeaderItems,
} from "./style";
import headerIcon1 from "../assets/underHeader_icon1.svg";
import headerIcon2 from "../assets/underHeader_icon2.svg";
import headerIcon3 from "../assets/underHeader_icon3.png";

const UnderHeader = () => {
    return (
        <UnderHeaderContainer>
            <UnderHeaderItems>
                <div>
                    <ImgWrapper src={headerIcon1} />
                </div>
                <div>
                    <HeaderTitleText>Free Delivery</HeaderTitleText>
                    <HeaderSubText>Lorem ipsum dolor sit amet.</HeaderSubText>
                </div>
            </UnderHeaderItems>

            <UnderHeaderItems>
                <div>
                    <ImgWrapper src={headerIcon2} />
                </div>
                <div>
                    <HeaderTitleText>Free Delivery</HeaderTitleText>
                    <HeaderSubText>Lorem ipsum dolor sit amet.</HeaderSubText>
                </div>
            </UnderHeaderItems>

            <UnderHeaderItems>
                <div>
                    <ImgWrapper src={headerIcon3} />
                </div>
                <div>
                    <HeaderTitleText>Free Delivery</HeaderTitleText>
                    <HeaderSubText>Lorem ipsum dolor sit amet.</HeaderSubText>
                </div>
            </UnderHeaderItems>
        </UnderHeaderContainer>
    );
};

export default UnderHeader;
