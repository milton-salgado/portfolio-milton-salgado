import styled from "styled-components";
import BannerImage from "../../assets/images/banner-milton-salgado.gif";

const MainStyle = styled.main``;

const SectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    padding: 2%;

    @media screen and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const H1Style = styled.h1`
    font-size: 42px;
    color: white;
    text-align: center;

    @media screen and (max-width: 1023px) {
        font-size: 36px;
    }
`;

const FigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgStyle = styled.img`
    width: 1200px;
    border: 5px solid white;
    border-radius: 25px;

    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

function Beginning() {
    return (
        <>
            <MainStyle>
                <SectionStyle>
                    <FigureStyle>
                        <ImgStyle src={BannerImage} />
                    </FigureStyle>
                    <H1Style>
                        Olá! Seja muito bem vindo(a) ao meu Portfólio!
                    </H1Style>
                </SectionStyle>
            </MainStyle>
        </>
    );
}

export default Beginning;
