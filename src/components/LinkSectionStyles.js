import styled from "styled-components";


export const LinkSectionStyle = styled.p`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 32px;
gap: 8px;
font-weight: 600;

width: 100%;
height: 76px;
background: #EAECF0;
border: 1px solid #EAECF0;
border-radius: 8px;
`

export const HoverStyle = styled.div`
p:hover{
    background: #d0d5dd;
    color: #101828;
    border-radius: 16px;
}
a:link{
    text-decoration: none;
    color: #101828;
}
a:visited{
    text-decoration: none;
    color: #101828;
}
a:hover{
    text-decoration: none;
    color: #101828;
}
a:active{
    text-decoration: none;
    color: #101828;
}
`