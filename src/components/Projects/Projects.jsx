import styled from "styled-components";
import DisneyPlusImage from "../../assets/images/projects/disney-plus.png";
import FinnImage from "../../assets/images/projects/finn.png";
import WinterImage from "../../assets/images/projects/winter.png";
import TheWitcher3Image from "../../assets/images/projects/the-witcher-3.png";
import GetCofeeImage from "../../assets/images/projects/get-coffee.png";
import FantastikaImage from "../../assets/images/projects/fantastika.png";
import NumberCounterReactImage from "../../assets/images/projects/number-counter-react.png";
import HalloweenImage from "../../assets/images/projects/halloween.png";
import PinkOctoberImage from "../../assets/images/projects/pink-october.png";
import CalculatorReactImage from "../../assets/images/projects/calculator-react.png";

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const SectionStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;

    @media screen and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: nowrap;
    }
`;

const SectionProjectStyle = styled.section`
    width: 45%;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 569px) and (max-width: 767px) {
        width: 100%;
        height: 1000px;
    }

    @media screen and (max-width: 568px) {
        width: 100%;
        height: 1200px;
    }
`;

const SectionProjectInfoStyle = styled.section`
    width: 100%;
    height: 200px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid white;
    overflow-y: auto;

    @media screen and (max-width: 767px) {
        height: auto;
        text-align: center;
    }
`;

const H2Style = styled.h2`
    font-size: 36px;
    text-decoration: underline;
    font-weight: bold;
    color: white;
    text-align: center;
`;

const SectionAnchorsStyle = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 568px) {
        flex-direction: column;
        height: 200px;
    }
`;

const AStyle = styled.a`
    font-size: 24px;
    color: white;
    border: 5px solid white;
    padding: 15px;
    border-radius: 20px;
    text-decoration: none;
`;

const PStyle = styled.p`
    color: white;
    font-size: 20px;
    line-height: 1.5;
`;

const FigureStyle = styled.figure`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgStyle = styled.img`
    width: 100%;
    height: 300px;
    border: 5px solid white;
    border-radius: 25px;
`;

const FigureIconsStyle = styled.figure`
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ImgIconStyle = styled.img`
    width: 64px;
    height: 64px;
`;

function Projects() {
    const projetos = [
        {
            id: 1,
            name: "Disney Plus",
            image: DisneyPlusImage,
            description:
                'Este é um projeto de uma "landing page" da plataforma de streaming "Disney Plus". Esse projeto foi o desafio 02 do módulo 01 do curso de front-end do "Vai na Web", e tinha como proposta reforçar o conteúdo de semântica com HTML e aplicar uma melhor estilização com CSS, com espaçamentos internos e externos (padding e margin). O modelo a ser seguido foi apresentado na plataforma de design "Figma". Após aprendermos o conteúdo de flexbox, decidi atualizar o projeto utilizando esse conceito (2.0).',
            accessLink: "https://milton-salgado.github.io/disney-plus/",
            repositoryLink: "https://github.com/milton-salgado/disney-plus.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 2,
            name: "Finn",
            image: FinnImage,
            description:
                'Este é um projeto de um formulário personalizado com a face do personagem "Finn", do desenho animado "Hora de Aventura". Esse projeto foi disponibilizado na primeira aula prática de position do módulo 01 do curso de front-end do "Vai na Web" e tinha como proposta a utilização do position junto com todas as outras técnicas aprendidas para aplicar posicionamentos, espaçamentos e dimensões únicas. O modelo a ser seguido foi apresentado na plataforma de design "Figma".',
            accessLink: "https://milton-salgado.github.io/finn/",
            repositoryLink: "https://github.com/milton-salgado/finn.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 3,
            name: "Winter",
            image: WinterImage,
            description:
                'Este é um projeto de uma "landing page" sobre o inverno. Esse projeto foi disponibilizado na segunda aula prática de flexbox do módulo 01 do curso de front-end do "Vai na Web" e também foi lançado como o desafio 03, e tinha como proposta a utilização do flexbox como a única ferramenta de espaçamento dos elementos de uma página em HTML, sem a utilização de nenhum outro mecanismo de espaçamento, como "padding" e "margin". O modelo a ser seguido foi apresentado na plataforma de design "Figma".',
            accessLink: "https://milton-salgado.github.io/winter/",
            repositoryLink: "https://github.com/milton-salgado/winter.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 4,
            name: "The Witcher 3",
            image: TheWitcher3Image,
            description:
                'Este é um projeto de uma "landing page" do jogo "The Witcher 3: Wild Hunt". Esse projeto foi disponibilizado na aula prática de flexbox do módulo 01 do curso de front-end do "Vai na Web", e tinha como proposta a utilização do flexbox como ferramenta de espaçamento dos elementos de uma página em HTML. O modelo a ser seguido foi apresentado na plataforma de design "Adobe XD".',
            accessLink: "https://milton-salgado.github.io/the-witcher-3/",
            repositoryLink:
                "https://github.com/milton-salgado/the-witcher-3.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 5,
            name: "Get Coffee",
            image: GetCofeeImage,
            description:
                'Este é um projeto de uma "landing page" de uma rede de cafeterias fictícia chamada "Get Coffee". Esse projeto foi proposto na última aula prática do módulo 01 do curso de front-end do "Vai na Web", cujo tema principal era a introdução ao conceito de responsividade com @media em CSS, com auxílio das propriedades de flexbox e position. O modelo a ser seguido foi apresentado na plataforma de design "Figma".',
            accessLink: "https://milton-salgado.github.io/get-coffee/",
            repositoryLink: "https://github.com/milton-salgado/get-coffee.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 6,
            name: "Fantastika",
            image: FantastikaImage,
            description:
                'Este é um projeto de uma "landing page" de uma rede de pet shops fictícia chamada "Fantastika". Esse projeto foi lançado como o desafio 04 do módulo 01 do curso de front-end do "Vai na Web", e também foi desafio final do módulo 01. Sua principal proposta era colocar todos os conhecimentos repassados ao longo do módulo para a construção de uma página web com HTML5 e CSS3 simples, eficiente, atrativa e responsiva. O modelo a ser seguido foi apresentado na plataforma de design "Adobe XD".',
            accessLink: "https://milton-salgado.github.io/fantastika/",
            repositoryLink: "https://github.com/milton-salgado/fantastika.git",
            technologies: ["HTML 5", "CSS 3"],
        },
        {
            id: 7,
            name: "Number Counter React",
            image: NumberCounterReactImage,
            description:
                'Este é um projeto de um contador de números de 0 a 10. Esse projeto foi lançado como o desafio 02 do módulo 02 do curso de front-end do "Vai na Web". Sua principal proposta era colocar os conhecimento de lógica de programação com a linguagem JavaScript e a biblioteca React JavaScript. O modelo a ser seguido foi apresentado em aula. O contador em questão possui 10 como o limite superior de incrementação e 0 como o limite inferior de decrementação.',
            accessLink:
                "https://milton-salgado.github.io/number-counter-react/",
            repositoryLink:
                "https://github.com/milton-salgado/number-counter-react.git",
            technologies: ["HTML 5", "CSS 3", "JavaScript", "React JavaScript"],
        },
        {
            id: 8,
            name: "Halloween",
            image: HalloweenImage,
            description:
                'Este é um projeto de uma "landing page" com o tema "Halloween". Esse projeto foi apresentado na terceira aula prática do módulo 02 do curso de front-end do "Vai na Web". Sua principal proposta era colocar em prática os conhecimentos em estilização com "Styled Components" e lógica de programação. O modelo a ser seguido foi apresentado na plataforma de design "Figma".',
            accessLink: "https://milton-salgado.github.io/halloween/",
            repositoryLink: "https://github.com/milton-salgado/halloween.git",
            technologies: ["HTML 5", "CSS 3", "JavaScript", "React JavaScript"],
        },
        {
            id: 9,
            name: "Pink October",
            image: PinkOctoberImage,
            description:
                'Este é um projeto de uma "landing page" com o tema "outubro rosa". Esse projeto foi apresentado na segunda aula prática do módulo 02 do curso de front-end do "Vai na Web". Sua principal proposta era revisar o conceito de componentização com a biblioteca React JavaScript, utilização de mecanismos como hooks para a programação e a biblioteca "Styled Components" para a estilização. O modelo a ser seguido foi apresentado na plataforma de design "Figma".',
            accessLink: "https://milton-salgado.github.io/pink-october/",
            repositoryLink:
                "https://github.com/milton-salgado/pink-october.git",
            technologies: ["HTML 5", "CSS 3", "JavaScript", "React JavaScript"],
        },
        {
            id: 10,
            name: "Calculator React",
            image: CalculatorReactImage,
            description:
                'Este é um projeto de uma calculadora. Esse projeto foi lançado como o desafio 03 do módulo 02 do curso de front-end do "Vai na Web". Sua principal proposta era colocar os conhecimento de lógica de programação com a linguagem JavaScript e a biblioteca React JavaScript em prática, utilizando todos os recursos aprendidos ao longo das aulas. O modelo a ser seguido foi apresentado em aula.',
            accessLink: "https://milton-salgado.github.io/calculator-react/",
            repositoryLink:
                "https://github.com/milton-salgado/calculator-react.git",
            technologies: ["HTML 5", "CSS 3", "JavaScript", "React JavaScript"],
        },
    ];

    const technologies = [
        {
            id: 1,
            name: "HTML 5",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            id: 2,
            name: "CSS 3",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            id: 3,
            name: "JavaScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            id: 4,
            name: "React JavaScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
    ];

    const encontrarIconeTecnologia = (nameTecnologia) => {
        const tecnologia = technologies.find(
            (tecnologia) => tecnologia.name === nameTecnologia
        );
        return tecnologia.image;
    };

    return (
        <>
            <MainStyle>
                <SectionStyle>
                    {projetos.map((projeto) => (
                        <SectionProjectStyle key={projeto.id}>
                            <H2Style>{projeto.name}</H2Style>
                            <SectionAnchorsStyle>
                                <AStyle href={projeto.accessLink}>
                                    Acessar
                                </AStyle>
                                <AStyle href={projeto.repositoryLink}>
                                    Repositório
                                </AStyle>
                            </SectionAnchorsStyle>
                            <FigureStyle>
                                <ImgStyle src={projeto.image} />
                            </FigureStyle>
                            <SectionProjectInfoStyle>
                                <PStyle>{projeto.description}</PStyle>
                            </SectionProjectInfoStyle>
                            <PStyle>Tecnologias utilizadas:</PStyle>
                            <FigureIconsStyle>
                                {projeto.technologies.map((tecnologia) => (
                                    <ImgIconStyle
                                        src={encontrarIconeTecnologia(
                                            tecnologia
                                        )}
                                    />
                                ))}
                            </FigureIconsStyle>
                        </SectionProjectStyle>
                    ))}
                </SectionStyle>
            </MainStyle>
        </>
    );
}

export default Projects;
