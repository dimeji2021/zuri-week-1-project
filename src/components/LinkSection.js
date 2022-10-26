import React from 'react'
import { HoverStyle, LinkSectionStyle } from './LinkSectionStyles'

export const LinkSection = () => {

  const links = [
    {
      name: "Twitter Link",
      url: "https://www.twitter.com"
    },
    {
      name: "Zuri Team",
      url: ""
    },
    {
      name: "Zuri Books",
      url: ""
    },
    {
      name: "Python Books",
      url: ""
    },
    {
      name: "Background Check for Coders",
      url: ""
    },
    {
      name: "Design Books",
      url: ""
    },
  ];
  return (
    <HoverStyle>
      {
        links.map((i) =>{
          return <a href={i.url}><LinkSectionStyle>{i.name}</LinkSectionStyle></a> 
        })
      }
    </HoverStyle>
  )
}
