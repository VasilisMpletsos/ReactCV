import React from "react";
import { Title, TitleLetter } from "./styles";

function mapWord(word){
    return(
        <Title>
            {Array.from(word).map ( letter => {
                console.log(letter);
                return <TitleLetter>{letter}</TitleLetter>
            })}
        </Title>
    )
}

export default mapWord;