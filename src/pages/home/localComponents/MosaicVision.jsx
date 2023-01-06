import styled from "styled-components";
import { Link } from "react-router-dom";

import TextBox from "../../../components/TextBox"

export default function MosaicVision({posts}){
    return(
        <Container>
            <h1>Mosaic Vision</h1>
            <div className="preview-texts">
                {
                    posts.map((post, index)=> (
                        <Link key={index} to={`/article/${post.id}`}>
                            <TextBox post={post}/>
                        </Link>
                    ))
                }
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
    @media (max-width: 1280px) {
        width: 360px;
        h1{
            font-size: 40px;
            text-align: center;
        }
        .preview-texts{
            display: flex;
            justify-content: center;
            row-gap: 20px;
        }
    }
`   