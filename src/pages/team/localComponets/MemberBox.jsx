import styled from "styled-components";

export default function MemberBox({image, name, role}){
    return(
        <Container>
            <Image image={image}/>
            <div className="box">
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 405px;
    height: 449px;
    position: relative;
    .box{
        background-color: white;
        position: absolute;
        top: 329px;
        left: 150px;
    }
    h1{
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 28px;
    }
    h2{
        font-family: "Nixie One";
        font-weight: 400;
        font-size: 25px;
    }
`

const Image = styled.div`
    background: url(${(props) => props.image});
    background-size: cover;
    width: 347px;
    height:345px;
`