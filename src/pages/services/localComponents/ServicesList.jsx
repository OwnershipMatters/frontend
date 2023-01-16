import styled from "styled-components";

import img1 from "./../localAssets/image1.png";
import img2 from "./../localAssets/image2.png";
import img3 from "./../localAssets/image3.png";
import img4 from "./../localAssets/image4.png";
import img5 from "./../localAssets/image5.png";
import img6 from "./../localAssets/image6.png";

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
    width: 980px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    column-gap: 50px;
    row-gap: 50px;
    img{
        width: 280px;
    }
    @media (max-width: 1280px) {
        width: 360px;
        img{
            width: 360px;
        }
    }
`