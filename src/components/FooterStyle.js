import styled from "styled-components";


export const FooterStyle = styled.div`

box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 32px 0px 0px;
gap: 32px;

width: 1152px;
height: 64px;
border: 1px solid red;

/* Gray/200 */

border-top: 1px solid #EAECF0;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`