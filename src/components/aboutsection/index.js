import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypeWriter from "typewriter-effect";
import './handWave.css'; 
import myprofile from "../../Images/profile.png";
// import HeroBgAnimation from "../HeroBgAnimation";

const AboutBlock = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
    padding: 66px 16px;
    }
    @media (max-width: 640) {
    padding: 32px 16px;
    }
    z-index: 1;
    // this path
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`
// const HeroBg = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: end;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 85.5%;
//   height: 100%;
//   max-width: 1360px;
//   overflow: hidden;
//   padding: 0 30px;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translateX(-50%) translateY(-50%);
//   transform: translateX(-50%) translateY(-50%);

//   @media (max-width: 960px) {
//     justify-content: center;
//     padding: 0 0px;
//   }
// `
const AboutInnerBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const AboutLeftBlock = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const AboutRightBlock = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
    text-align: center;
    }

    @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(219.783, 80%, 55%, 1);
    background: linear-gradient(225deg, hsla(219, 80%, 55%, 1) 0%, hsla(242, 80%, 55%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(219, 80%, 55%, 1) 0%, hsla(242, 80%, 55%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(219, 80%, 55%, 1) 0%, hsla(242, 80%, 55%, 1) 100%);
    box-shadow:  10px 10px 30px rgba(48, 110, 232, 0.2),
             -10px -10px 30px rgba(48, 110, 232, 0.2);
    margin-top: -20px;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #306EE8 ,
    filter: brightness(-100);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
    border-radius: 50%;
    border: 0px solid ${({ theme }) => theme.primary};
    margin-top: -100px;

    @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
    margin-top: 0px;
    }

    @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    margin-top: 0px;
    }
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;

const AboutPage = () => {
    return(
        <div id="about">
            <AboutBlock>
                {/* <HeroBg>
                    <HeroBgAnimation />
                </HeroBg> */}
                <AboutInnerBlock>
                    <AboutLeftBlock>
                        <Title>Hi, I am <br/>{Bio.name}<div className="hand-wave">👋</div></Title>
                        <TextLoop>
                            I am a<span>
                            <StyledText>
                                <TypeWriter
                                    options={{
                                        strings:Bio.roles,
                                        autoStart: true,
                                        loop:true,
                                    }}/>
                                </StyledText>
                                </span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="_blank">Resume</ResumeButton>
                    </AboutLeftBlock>
                    <AboutRightBlock>
                        <Image src={myprofile} alt="Soham" />
                    </AboutRightBlock>
                </AboutInnerBlock>
            </AboutBlock>
        </div> 
    )
}

export default AboutPage
