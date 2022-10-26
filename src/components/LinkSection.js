import React from 'react'
import { HoverStyle, LinkSectionStyle } from './LinkSectionStyles'

export const LinkSection = () => {

  const links = [
    {
      name: "Twitter Link",
      url: "https://twitter.com/KehindeDimeji"
    },
    {
      name: "Zuri Team",
      url: "https://training.zuri.team/"
    },
    {
      name: "Zuri Books",
      url: "http://books.zuri.team/"
    },
    {
      name: "Python Books",
      url: "https://books.zuri.team/"
    },
    {
      name: "Background Check for Coders",
      url: "https://background.zuri.team/"
    },
    {
      name: "Design Books",
      url: "https://books.zuri.team/design-rules"
    },
  ];
  return (
    <HoverStyle>
      {
        links.map((i) =><a href={i.url}><LinkSectionStyle>{i.name}</LinkSectionStyle></a>)
      }
    </HoverStyle>
  )
}
