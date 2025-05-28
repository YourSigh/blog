import styled, { keyframes } from "styled-components";
import naXiDaScan from '@src/assets/纳西妲扫描.png';
import scan from '@src/assets/扫描.png';

const fadeOutAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: scale(4);
        opacity: 0;
    }
`;

const BuerWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    animation: ${fadeOutAnimation} 3s ease-in forwards;
    
    .img-buer {
        width: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        object-fit: cover;
    }

    .img-scan {
        width: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
`

export default function Buer() {
    return (
        <BuerWrapper>
            <img 
                src={naXiDaScan} 
                alt="纳西妲" 
                className="img-buer"
            />
            <img
                src={scan}
                alt="扫描"
                className="img-scan"
            />
        </BuerWrapper>
    );
}