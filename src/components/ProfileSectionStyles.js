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
        position: absolute;
        width: 40px;
        height: 40px;
        top: -20px;
        right: 208px;
        background: #FFFFFF;
        border: 1px dashed #D0D5DD;
        border-radius: 20px;
        z-index: 2;
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
