import React from "react";
import {
    HeaderButton,
    HeaderImg,
    HeaderSubTitle,
    HeaderTexts,
    HeaderTitle,
    NewArrival,
} from "./style";

const Header = () => {
    return (
        <div>
            <HeaderImg>
                <HeaderTexts>
                    <NewArrival>New Arrival</NewArrival>
                    <HeaderTitle>
                        Discover Our <br /> New Collection
                    </HeaderTitle>

                    <HeaderSubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis.
                    </HeaderSubTitle>

                    <HeaderButton>BUY Now</HeaderButton>
                </HeaderTexts>
            </HeaderImg>
        </div>
    );
};

export default Header;
