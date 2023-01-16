import styled from "styled-components";

export default function AnOpenInvitation(){
    return(
        <Container>
            <h1>An Open Invitation</h1>
            <h2><span>Love</span>,<span> freedom</span>, <span>dignity</span>, <span>solidarity</span>, and <span>cooperation</span> are deeply rooted in humankind. Yet, these concepts hardly ever remind us of economic drives. The values that resonate in our philosophies, lyrics, and creeds across ages, the values taught to our children, seem far from the current production system. The abyss between finances, politics, education, community life, and personal pursuits is manufactured as a product of modern life. We experience a fragmented reality guided by greed.</h2>
            <h2>Over the last few years, billion-dollar fortunes and monopolist trends skyrocketed, literally in some cases, while human lives were lost or left in misery. The marvelous technological advancements came largely unaccompanied by improvements in other aspects of social development. The hunt for unicorn businesses or life on Mars is real, while an economy driven by cooperation and freedom feels like a fairy tale.</h2>
            <h2>What if we tell you it is possible to restore our unity and overcome the artificial segregation between economic and community life? What if we remind you that we are more than data, statistics, consumers, products, and financial metrics?</h2>
            <h3>Join us in this democratic-driven ecosystem to build the next economy.</h3>
        </Container>
    )
}

const Container = styled.div`
    width: 1280px;
    background-color:#D9D9D9;
    padding: 30px 50px;
    h1{
        text-align: center;
        font-family: "Playfair Display";
        font-style: bold;
        color: var(--theme-color);
        font-size: 70px;
    }
    h2{
        margin-top: 30px;
        margin-left: 60px;
        margin-right: 60px;
        text-align: justify;
        font-family: "Inter";
        font-weight: 400;
        font-size: 25px;
        span{
            font-weight: 700;
        }
    }
    h3{
        margin: 60px;
        text-align: center;
        font-family: "Inter";
        font-weight: 700;
        font-size: 25px;

    }
    @media (max-width: 1280px) {
        width: 360px;
        padding: 30px 5px;
        h1{
            font-size: 35px;
        }
        h2{
            font-size: 18px;
            margin: 25px 5px;
        }
        h3{
            margin: 15px;
        }
    }
`