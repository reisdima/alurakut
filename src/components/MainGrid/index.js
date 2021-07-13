import styled from "styled-components";

const MainGrid = styled.main`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    padding: 16px;
    grid-gap: 10px;

    .porfileArea {
        display: grid;
        @media (min-width: 860px) {
            display: block;
        }
    }

    @media (min-width: 860px) {
        max-width: 1110px;
        display: grid;
        grid-template-columns: 160px 1fr 312px;
        grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    }
`;

export default MainGrid;
