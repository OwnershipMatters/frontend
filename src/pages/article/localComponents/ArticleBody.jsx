import styled from "styled-components";

const content = [`In Defiant Geographies: Race and Urban Space in 1920s Rio de Janeiro, Lorraine Leu explores how the urban reform initiatives of 1920s Rio de Janeiro were underpinned by racial displacement and how black and poor white immigrant communities sought to defiantly resist these processes. This is a welcome and accessible contribution to Brazil’s anti-racist urban theory and will be a fundamental read for anyone interested in race, urban space, urban renewal and displacement.`,

`After the abolition of slavery, 60 percent of Brazil’s population was black. Over 70 percent of black Brazilians lived in self-constructed, mostly informal housing by the 21st century. Racial segregation in Brazil occurred through urban reform initiatives and not through explicit segregation laws. The Brazilian state’s vision of modernization from the early twentieth century onwards did not include black urban spaces. Instead it supported European immigration, urban renewal projects that implemented a European-inspired modern ideology and a national construction of the "Brazilian race" that worked to invisibilize the black population.`,

`Lorraine Leu’s book, Defiant Geographies: Race and Urban Space in 1920s Rio de Janeiro, is about how ‘race makes space’ (5) in a country where the culture of racial intermix, racial harmony, racial democracy and color blindness has prevailed over decades despite evident structural racism and racial segregation.`]

export default function ArticleBody(){
    return (
        <Container>
            {content.map((paragraph, index) => (
                <h1 key={index}>{paragraph}</h1>
            ))}
        </Container>
    )
};

const Container = styled.div`
    width: 1280px;
    padding: 50px;
    h1{
        font-family: "Playfair Display";
        font-weight: 400;
        font-size: 35px;
        text-align: justify;
        margin-bottom: 30px;
    }
`