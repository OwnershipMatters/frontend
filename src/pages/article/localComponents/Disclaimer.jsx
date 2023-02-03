import styled from "styled-components"

export default function Disclaimer(){
    return(
        <Container>
            <h1>Disclaimer: The content of Ownership Matters is for informational purposes only. Such information should not be construed as legal, tax, investment, financial, or other advice. Nothing contained in these materials constitutes a solicitation, recommendation, or offer to buy, or a solicitation of an offer to sell, any securities. Readers agree not to hold the authors, their affiliates or any third-party service provider liable for any possible claim for damages arising from any decision made based on information published here.</h1>
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    h1{
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }
    @media (max-width: 1280px) {
        width: 360px;
        margin-top: 30px;
    }
`