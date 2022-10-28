import React from "react";
import { HoverStyle, LinkSectionStyle } from "./LinkSectionStyles";

export const LinkSection = () => {
  const links = [
    {
      name: "Twitter Link",
      url: "https://twitter.com/KehindeDimeji",
      id: "twitter",
    },
    {
      name: "Zuri Team",
      url: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      name: "Zuri Books",
      url: "http://books.zuri.team/",
      id: "books",
    },
    {
      name: "Python Books",
      url: "https://books.zuri.team/",
      id: "book__python",
    },
    {
      name: "Background Check for Coders",
      url: "https://background.zuri.team/",
      id: "pitch",
    },
    {
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <HoverStyle>
      {links.map((i) => (
        <a href={i.url}>
          <LinkSectionStyle>{i.name}</LinkSectionStyle>
        </a>
      ))}
    </HoverStyle>
  );
};
