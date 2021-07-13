import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
    AlurakutMenu,
    OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(propriedades) {
    return (
        <Box>
            <img
                src={`https://github.com/${propriedades.githubUsername}.png`}
                style={{ borderRadius: "8px" }}
            />
        </Box>
    );
}

export default function Home() {
    const githubUsername = "reisdima";
    const pessoasFavoritas = ["juunegreiros", "peas", "rafaballerini"];

    return (
        <>
            <MainGrid>
                <div
                    className="profileArea"
                    style={{ gridArea: "profileArea" }}
                >
                    <ProfileSidebar githubUsername={githubUsername} />
                </div>
                <div
                    className="welcomeArea"
                    style={{ gridArea: "welcomeArea" }}
                >
                    <Box>
                        <h1 className="title">Bem vindo</h1>
                        <OrkutNostalgicIconSet />
                    </Box>
                </div>
                <div
                    className="profileRelationsArea"
                    style={{ gridArea: "profileRelationsArea" }}
                >
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Pessoas da comunidade ({pessoasFavoritas.length})
                        </h2>

                        <ul>
                            {pessoasFavoritas.map((itemAtual) => {
                                return (
                                    <li key={itemAtual}>
                                        <a href={`/users/${itemAtual}`}>
                                            <img
                                                src={`https://github.com/${itemAtual}.png`}
                                            />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
                    <Box>Comunidades</Box>
                </div>
            </MainGrid>
        </>
    );
}
