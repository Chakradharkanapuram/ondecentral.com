import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const { colors_option_b, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors_option_b.vanillaOffWhite};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors_option_b.vanillaLeetcode};
    &:hover,
    &:focus,
    &:active {
      color: ${colors_option_b.green};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors_option_b.blueGrey};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    color: ${colors_option_b.leetcode};
    background-color: transparent;
    border: 1px solid ${colors_option_b.leetcode};
    border-radius: ${theme.borderRadius};
    padding: 12px 17px;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors_option_b.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors_option_b.leetcode};
    background-color: transparent;
    border: 1px solid ${colors_option_b.leetcode};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors_option_b.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,
};

export default mixins;
