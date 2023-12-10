import styled from "styled-components";
import GitHubImage from "../../assets/images/github-icone.png";
import LinkedInImage from "../../assets/images/linkedin-icone.png";
import InstagramImage from "../../assets/images/instagram-icone.png";
import EmailImage from "../../assets/images/email-icone.png";

const FooterStyle = styled.footer`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterNavStyle = styled.nav`
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

const FooterNavUnorderedListStyle = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 600px;

    @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: space-evenly;
    }
`;

const FooterNavUnorderedListItemStyle = styled.li``;

const AStyle = styled.a`
    color: white;
    font-size: 36px;
    text-decoration: none;
`;

const FigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgStyle = styled.img`
    width: 56px;
    height: 56px;
`;

function Footer() {
    const contacts = [
        {
            name: "GitHub",
            url: "https://github.com/milton-salgado",
            image: "",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/milton-salgado-leandro/",
            image: "",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/milton.salgado.9406/",
            image: "",
        },
        {
            name: "Email",
            url: "mailto:miltonsalgadoleandro@gmail.com",
            image: "",
        },
    ];

    return (
        <>
            <FooterStyle>
                <FooterNavStyle>
                    <FooterNavUnorderedListStyle>
                        {contacts.map((contact, index) => (
                            <FooterNavUnorderedListItemStyle key={index}>
                                <AStyle href={contact.url} target="_blank">
                                    <FigureStyle>
                                        <ImgStyle
                                            src={
                                                contact.name === "GitHub"
                                                    ? GitHubImage
                                                    : contact.name ===
                                                      "LinkedIn"
                                                    ? LinkedInImage
                                                    : contact.name ===
                                                      "Instagram"
                                                    ? InstagramImage
                                                    : contact.name === "Email"
                                                    ? EmailImage
                                                    : ""
                                            }
                                        />
                                    </FigureStyle>
                                </AStyle>
                            </FooterNavUnorderedListItemStyle>
                        ))}
                    </FooterNavUnorderedListStyle>
                </FooterNavStyle>
            </FooterStyle>
        </>
    );
}

export default Footer;
