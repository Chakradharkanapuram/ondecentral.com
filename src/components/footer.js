import React from 'react';
import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';
import { socialMedia } from '../config';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
const { colors_option_b, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors_option_b.darkNavy};
  color: ${colors_option_b.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${colors_option_b.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const GithubLink = styled.a`
  color: ${colors_option_b.slate};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://github.com/decentral-foundation/"
        target="_blank"
        rel="nofollow noopener noreferrer">
        © 2022 Decentral Inc All Rights Reserved
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
