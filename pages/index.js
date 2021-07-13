import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
    AlurakutMenu,
    AlurakutProfileSidebarMenuDefault,
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
            <hr />
            <p>
                <a
                    className="boxLink"
                    href={`https://github.com/${propriedades.githubUsername}`}
                >
                    @{propriedades.githubUsername}
                </a>
            </p>

            <hr />

            <AlurakutProfileSidebarMenuDefault />
        </Box>
    );
}

export default function Home() {
    const [comunidades, setComunidades] = React.useState([
        {
            id: new Date().toISOString,
            title: "Eu odeio acordar cedo",
            image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
        },
    ]);
    const githubUsername = "reisdima";
    const pessoasFavoritas = ["juunegreiros", "peas", "rafaballerini"];

    return (
        <>
            <AlurakutMenu />
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
                    <Box>
                        <h2 className="subTitle">O que você deseja fazer?</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const dadosDoFormulario = new FormData(
                                    e.target
                                );
                                console.log(
                                    "Campo: " + dadosDoFormulario.get("title")
                                );
                                console.log(
                                    "Campo: " + dadosDoFormulario.get("image")
                                );
                                const comunidade = {
                                    id: new Date().toISOString(),
                                    title: dadosDoFormulario.get("title"),
                                    image: dadosDoFormulario.get("image"),
                                };
                                setComunidades([...comunidades, comunidade]);
                            }}
                        >
                            <div>
                                <input
                                    placeholder="Qual vai ser o nome da sua comunidade?"
                                    name="title"
                                    aria-label="Qual vai ser o nome da sua comunidade?"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Coloque uma URL para usarmos de capa"
                                    name="image"
                                    aria-label="Coloque uma URL para usarmos de capa"
                                />
                            </div>
                            <button>Criar comunidade</button>
                        </form>
                    </Box>
                </div>
                <div
                    className="profileRelationsArea"
                    style={{ gridArea: "profileRelationsArea" }}
                >
                    <ProfileRelationsBoxWrapper>
                        <ul>
                            {comunidades.map((itemAtual) => {
                                return (
                                    <li key={itemAtual.id}>
                                        <a href={`/users/${itemAtual.title}`}>
                                            <img src={itemAtual.image} />
                                            <span>{itemAtual.title}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
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
