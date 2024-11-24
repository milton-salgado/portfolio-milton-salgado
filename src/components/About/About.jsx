import styled from "styled-components";
import profileImage from "../../assets/images/perfil-milton-salgado.jpg";

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    padding: 20px 0;

    @media screen and (max-width: 1023px) {
        width: 100%;
        flex-direction: column;
    }
`;

const FigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgStyle = styled.img`
    width: 400px;
    height: 500px;
    border: 5px solid white;
    border-radius: 25px;

    @media screen and (max-width: 1023px) {
        height: auto;
    }
`;

const SectionTextStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    overflow-y: auto;
    height: 500px;

    @media screen and (max-width: 1023px) {
        height: auto;
    }
`;

const H1Style = styled.h1`
    font-size: 42px;
    color: white;
    text-align: center;
    text-decoration: underline;
`;

const SectionTextParagraphsStyle = styled.section`
    display: flex;
    flex-direction: column;
`;

const PStyle = styled.p`
    font-size: 20px;
    color: white;
    line-height: 1.5;
    margin-top: 20px;

    @media screen and (max-width: 1023px) {
        text-align: center;
    }
`;

function About() {
    return (
        <>
            <StyledMain>
                <SectionStyle>
                    <FigureStyle>
                        <ImgStyle src={profileImage} />
                    </FigureStyle>
                    <SectionTextStyle>
                        <H1Style>Sobre mim</H1Style>
                        <SectionTextParagraphsStyle>
                            <PStyle>
                                Técnico em Desenvolvimento de Sistemas pelo
                                CPII, cursei um período em Bacharelado em
                                Sistemas de Informação pela UNIRIO e atualmente
                                estou graduando em Bacharelado em Ciência da
                                Computação pela UFRJ.
                            </PStyle>
                            <PStyle>
                                Atualmente, sou bolsista de Iniciação Científica
                                em Tecnologia de Informação no Pontão da ECO da
                                UFRJ e sou aluno dos cursos de front-end e
                                back-end no Vai na Web.
                            </PStyle>
                            <PStyle>
                                Tenho bastante interesse pelas áreas de
                                desenvolvimento front-end, desenvolvimento
                                back-end, experiência do usuário e servidores
                                web. Como desenvolvedor, sempre priorizei boas
                                práticas no desenvolvimento de sites e
                                aplicações, como a análise, otimização,
                                manutenção e atualização do escopo, e também na
                                utilização de ferramentas e IDES atualizadas,
                                como o Visual Studio Code, o Visual Studio 2022,
                                o Git e o Google Dev Tools.
                            </PStyle>
                            <PStyle>
                                Eis algumas palavras-chave que fazem parte da
                                minha rotina como estudante e desenvolvedor de
                                sistemas: semântica, SCRUM, HTML, CSS, JS,
                                React, PHP, C, C++, C#, MySQL, SQL Server,
                                versionamento com Git, documentação, liderança.
                            </PStyle>
                        </SectionTextParagraphsStyle>
                    </SectionTextStyle>
                </SectionStyle>
            </StyledMain>
        </>
    );
}

export default About;
