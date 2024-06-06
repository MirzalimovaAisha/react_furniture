import styled from "styled-components";
import hdImg from "../assets/header_img.png";

export const NavbarContainer = styled.div`
    height: 122px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0px 120px; */
    gap: 466px;
`;
export const NavbarLogo = styled.div`
    color: #054c73;
    font-size: 34px;
    font-weight: 700;
`;
export const NavbarMenu = styled.div`
    color: #333;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    gap: 73px;
`;
export const HeaderImg = styled.div`
    background-image: url(${hdImg});
    background-size: cover;
    width: 100%;
    height: 749px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeaderTexts = styled.div`
    margin-left: 600px;
    border-radius: 10px;
    background: #dfe9f4;
    padding: 40px;
`;
export const NewArrival = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 3px;
`;
export const HeaderTitle = styled.div`
    color: #054c73;
    font-size: 52px;
    font-weight: 700;
    line-height: 65px;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const HeaderSubTitle = styled.div`
    color: #333;
    font-size: 18px;
    font-weight: 500;
    line-height: 39px;
    width: 546px;
`;
export const HeaderButton = styled.button`
    padding: 25px;
    width: 229px;
    border-radius: 50px;
    background: #054c73;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 30px;
    border: none;
    cursor: pointer;
`;
export const UnderHeaderContainer = styled.div`
    background: #f2f5ff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 124px;
    height: 150px;
`;
export const UnderHeaderItems = styled.div`
    display: flex;
    align-items: center;
    gap: 27px;
`;
export const ImgWrapper = styled.img``;
export const HeaderTitleText = styled.div`
    color: #333;
    font-size: 24px;
    font-weight: 600;
`;
export const HeaderSubText = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: 400;
`;
export const Section1Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
`;
export const SecTitle = styled.div`
    margin-bottom: 20px;
    color: var(--Font-Color, #333);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const SecSubTitle = styled.div`
    color: var(--Font-Color1, #666);
    font-size: 20px;
    font-weight: 400;
    line-height: 39px;
`;
export const Sec1Box = styled.div`
    margin-top: 88px;
    display: flex;
    gap: 40px;
`;
export const Sec2Container = styled.div`
    display: flex;
    margin-top: 60px;
    padding: 60px;
    justify-content: center;
    align-items: center;
    gap: 62px;
    background: #f2f5ff;
`;
export const GreenCircle = styled.div`
    position: absolute;
    width: 372px;
    height: 372px;
    background: #09513b;
    border-radius: 50%;
    bottom: 200px;
    left: 210px;
`;
export const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
`;
export const SecBox = styled.div`
    display: flex;
    gap: 20px;
`;
export const SectionItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const SectionItemName = styled.div`
    color: var(--Font-Color, #333);
    font-size: 24px;
    font-weight: 600;
`;
export const SectionTitles = styled.div`
    margin-bottom: 50px;
`;
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #d7d6d6;
    margin-top: 60px;
`;
export const SecItemImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const SectionItemSubName = styled.div`
    margin-top: 18px;
    color: var(--Font-Color1, #666);
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    width: 381px;
`;
export const ItemNumber = styled.div`
    width: 60px;
    height: 60px;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
`;
export const ItemNumberContainer = styled.div`
    width: 90px;
    height: 90px;
    background: #fcfcfc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 40px;
`;
export const Section4ItemName = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Section5Container = styled.div`
    margin-top: 197px;
    padding: 60px;
    display: flex;
    text-align: center;
    justify-content: center;
    background: #f2f5ff;
`;
export const SectionInput = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-radius: 3px;
    border: 1px solid var(--Primary-color, #054c73);
    background: #fff;
    width: 486px;
`;
export const TextGmail = styled.div`
    padding: 25px;
    color: #011c42;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.3;
`;
export const SubmitButton = styled.div`
    border-radius: 3px;
    border: 1px solid #011c42;
    background: var(--Primary-color, #054c73);
    padding: 26px 45px;

    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const FooterContainer = styled.div`
    background: #03344f;
    padding: 60px 90px;
    display: flex;
    justify-content: center;
    color: #fff;
    gap: 23px;
`;
export const FooterLetter1 = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 23px;
`;
export const FooterLatter2 = styled.div`
    font-weight: 400;
    line-height: 35px;
    width: 400px;
    margin-bottom: 21px;
`;
export const FooterImgs = styled.div`
    display: flex;
    gap: 21px;
`;
