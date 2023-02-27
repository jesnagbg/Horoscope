import styled from "styled-components";
import ZodiacDropdown from "./DropDown";
import MoonStar from '/assets/moonstar.png';
import Stars from '/assets/treStars.png';
import { device } from './Breakpoints';

function HeaderDailyHoroscope() {
    return (
        <Container>
            <TitelsContainer>
                <Title1>Hello, here's your</Title1> 
                <Title2>LIBRA HOROSCOPE</Title2>
            </TitelsContainer>
            <DropDownAndStarsImgContainer>
                <StarsImg src={Stars} alt="stars" />
                <DropDownContainer>
                    <ZodiacDropdown />
                </DropDownContainer>
            </DropDownAndStarsImgContainer>
            <MoonStarContainer>
                <MoonStarImg src={MoonStar} alt="moonstar" />
            </MoonStarContainer>
        </Container>
    );
}

// STYLING
const Container = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-bottom: 1.8rem;

    @media ${device.mobileXL} {
      flex-direction: column;
      align-items: center;
    }  
`;

const DropDownAndStarsImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    @media ${device.mobileXL} {
      align-items: center;
      gap: 1rem;
      flex-direction: row-reverse;
      justify-content: center;
    }  

    @media ${device.mobileL} {
      gap: 1rem;
    }  
`;

const DropDownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 2.4rem;

    @media ${device.laptop} {
      padding-bottom: 0.6rem;
    }
    
    @media ${device.tablet} {
      padding-bottom: 0.1rem;
    } 
    
    @media ${device.mobileXL} {
      justify-content: center;
      width: fit-content;
      padding-left: 5rem;
    } 
`;

const StarsImg = styled.img`
    width: 60%;

    @media ${device.tabletXXL} {
      width: 45%;
    }   

    @media ${device.tablet} {
      width: 35%;
    }  

    @media ${device.mobileXL} {
      width: 20%;
      padding-top: 0.8rem;
      padding-bottom: 0.7rem;
    }  

    @media ${device.mobileL} {
      width: 20%;
      padding-bottom: 0.7rem;
    }  
`;

const MoonStarContainer = styled.div`
    display: flex;
    width: 15%;

    @media ${device.tablet} {
      display: none;
    }  
`;

const MoonStarImg = styled.img`
    width: 90%;

    @media ${device.laptop} {
      width: 100%;
    }   
`;

const TitelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${device.mobileXL} {
      padding-left: 1rem;
    }  
`;

const Title1 = styled.h1`
    font-family: 'Monsieur La Doulaise';
    font-size: 4rem;
    font-weight: 400;
    margin: 0;

    @media ${device.tabletXXL} {
      font-size: 3.5rem;
    }   

    @media ${device.tabletXXL} {
      font-size: 3.2rem;
    } 

    @media ${device.tablet} {
      font-size: 3rem;
    }  

    @media ${device.tablet} {
      font-size: 2.5rem;
    }  

    @media ${device.mobileXL} {
      font-size: 2.8rem;
    }  
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    padding-left: 4rem;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;

    @media ${device.tabletXXL} {
      font-size: 2.5rem;
    } 

    @media ${device.tabletXXL} {
      font-size: 2.2rem;
    }  

    @media ${device.tablet} {
      font-size: 1.7rem;
      padding-left: 0rem;
    }  

    @media ${device.mobileXL} {
      font-size: 2rem;
    }  

    @media ${device.mobileL} {
      font-size: 1.9rem;
    }  
`;

export default HeaderDailyHoroscope;