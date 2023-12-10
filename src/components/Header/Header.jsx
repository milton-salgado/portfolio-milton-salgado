import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Beginning from "../Beginning/Beginning";

const HeaderStyle = styled.header`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
        height: auto;
    }
`;

const HeaderNavStyle = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderNavUnorderedListStyle = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 600px;

    @media screen and (max-width: 767px) {
        height: 200px;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

const HeaderNavUnorderedListItemStyle = styled.li`
    @media screen and (max-width: 767px) {
        width: 100%;
        text-align: center;
        border-top: 5px solid white;
        padding: 10px;

        &:last-child {
            border-bottom: 5px solid white;
        }
    }
`;

const LinkStyle = styled(Link)`
    color: white;
    font-size: 36px;
    text-decoration: none;
`;

function Header() {
    return (
        <>
            <BrowserRouter>
                <HeaderStyle>
                    <HeaderNavStyle>
                        <HeaderNavUnorderedListStyle>
                            <HeaderNavUnorderedListItemStyle>
                                <LinkStyle to="/">INÍCIO</LinkStyle>
                            </HeaderNavUnorderedListItemStyle>
                            <HeaderNavUnorderedListItemStyle>
                                <LinkStyle to="/About">SOBRE</LinkStyle>
                            </HeaderNavUnorderedListItemStyle>
                            <HeaderNavUnorderedListItemStyle>
                                <LinkStyle to="/Projects">PROJETOS</LinkStyle>
                            </HeaderNavUnorderedListItemStyle>
                        </HeaderNavUnorderedListStyle>
                    </HeaderNavStyle>
                </HeaderStyle>

                <Routes>
                    <Route path="/" element={<Beginning />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Header;
