import styled from "styled-components";

import img1 from "./../localAssets/1.png";
import img2 from "./../localAssets/2.png";
import img3 from "./../localAssets/3.png";
import img4 from "./../localAssets/4.png";
import img5 from "./../localAssets/5.png";
import img6 from "./../localAssets/6.png";

const list = [img1, img2, img3, img4, img5, img6];

export default function ServiceList(){
    return(
        <Container>
            {
                list.map((element, index) => (
                    <div className="box" key={index}>
                        <img src={element} alt="Ownership Matters Service"/>
                    </div>
                ))
            }
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    column-gap: 20px;
    row-gap: 40px;
    img{
        width: 620px;
    }
    @media (max-width: 1280px) {
        width: 360px;
        img{
            width: 360px;
        }
    }
`