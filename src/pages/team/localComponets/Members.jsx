import styled from "styled-components";

import MemberBox from "./MemberBox";
import teamData from "../localAssets/teamData";

export default function Members(){
    return(
        <Container>
            {
                teamData.map((colab, index)=> (
                    <a key={colab.name} href={colab.social} target="_blank">
                        <MemberBox image={colab.image} name={colab.name} role={colab.role}/>
                    </a>    
                ))
            }  
        </Container>
    )
};

const Container = styled.div`
    padding: 65px;
    width: 1280px;
    background-color: #D9D9D9;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    row-gap: 50px;
    column-gap: 50px;
    @media (max-width: 1280px) {
        width: 360px;
        justify-content: center;
    }
`;