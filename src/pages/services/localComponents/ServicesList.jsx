import styled from "styled-components";

import img from "./../localAssets/servicesListImg.png";

export default function ServiceList(){
    return(
        <Container>
            <img src={img} alt="List of services"/>
        </Container>
    )
};

const Container = styled.div`
    width: 980px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    img{
        width: 1280px;
    }
`