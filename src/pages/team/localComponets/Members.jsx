import styled from "styled-components";

import MemberBox from "./MemberBox";
import teamData from "../localAssets/teamData";

export default function Members(){
    return(
        <Container>
            {
                teamData.map((colab, index)=> (
                    <MemberBox key={index} image={colab.image} name={colab.name} role={colab.role}/>
                ))
            }  
        </Container>
    )
};

const Container = styled.div`
    padding: 30px;
    width: 1280px;
    background-color: #D9D9D9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 1280px) {
        width: 360px;
    }
`;