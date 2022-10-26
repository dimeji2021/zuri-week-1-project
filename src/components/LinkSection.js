import React from 'react'
import { LinkSectionStyle } from './LinkSectionStyles'

export const LinkSection = () => {

  const links = [
    {
      name: "Twitter Link",
      url: ""
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
    <div>
      {
        links.map((i) =>{
          return <LinkSectionStyle>{i.name}</LinkSectionStyle>
        })
      }
    </div>
  )
}
