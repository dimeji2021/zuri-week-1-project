import styled from "styled-components";


export const FooterStyle = styled.div`

box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100%;
height: 64px;
border-top: 1px solid #EAECF0;

@media only screen and (max-width: 600px){
    display:none;
`
export const FooterWrapper = styled.div`
padding: 50px 8%;
`
export const FooterText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

text-align: center;

/* Gray/500 */

color: #667085;
`