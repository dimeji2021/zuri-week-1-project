import styled from "styled-components";

export const MainProfileWrapper = styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 0px;
    gap: 24px;
    isolation: isolate;
    width: 100%;
    height: 142px;
    position: relative;
    #ImageStyle{
        width: 88px;
        height: 88px;
        border-radius: 275px;    
        }
    #sharedButton{
        width: 20px;
        }
    `
export const TitleStyle = styled.div`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
/* Gray/900 */
color: #101828;
z-index: 1;
`
export const SharedButton = styled.button`
        position: absolute;
        width: 40px;
        height: 40px;
        top: -1.2rem;
        right: 15%;
        background: transparent;
        border: 2px dotted lightgray;
        border-radius: 100%;
        z-index: -2;
        cursor: pointer;
`