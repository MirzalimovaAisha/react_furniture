import React from "react";
import {
    SecSubTitle,
    SecTitle,
    Section5Container,
    SectionInput,
    SubmitButton,
    TextGmail,
} from "./style";

const Section5 = () => {
    return (
        <Section5Container>
            <div>
                <div>
                    <SecTitle>Join Our Mailing List</SecTitle>
                    <SecSubTitle>
                        Sign up to receive inspiration, product updates, <br /> and
                        special offers from our team.
                    </SecSubTitle>
                </div>
                <SectionInput>
                    <TextGmail>example@gmail.com</TextGmail>
                    <SubmitButton>Submit</SubmitButton>
                </SectionInput>
            </div>
        </Section5Container>
    );
};

export default Section5;
