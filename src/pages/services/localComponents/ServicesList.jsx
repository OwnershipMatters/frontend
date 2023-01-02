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
    width: 1280px;
    img{
        width: 1280px;
    }
`