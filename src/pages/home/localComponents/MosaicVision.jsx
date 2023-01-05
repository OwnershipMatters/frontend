import styled from "styled-components";
import { Link } from "react-router-dom";

import TextBox from "../../../components/TextBox"

export default function MosaicVision(){
    return(
        <Container>
            <h1>Mosaic Vision</h1>
            <div className="preview-texts">
                <Link to={`/article/0`}>
                    <TextBox/>
                </Link>
                <TextBox/>
                <TextBox/>
                <TextBox/>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 1150px;
    margin-top: 46px;
    h1{
        font-family: "Work Sans";
        font-weight: 400;
        font-size: 60px;
    }
    .preview-texts{
        display: flex;
        flex-wrap: wrap;
        column-gap: 45px;
        row-gap: 45px;
    }
`