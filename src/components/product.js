import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
import { srConfig } from '../config';
const { colors_option_b, fontSizes, fonts } = theme;

const ProductContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  margin-left: 20px;
  margin-right: 20px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors_option_b.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${props => (props.isActive ? colors_option_b.green : colors_option_b.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors_option_b.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors_option_b.shadowNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors_option_b.red};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-right: 20px;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    text-align: center;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * (theme.tabWidth + 40) : 0)}px
    );
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.25s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors_option_b.red};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
const JobTitle = styled.h4`
  color: ${colors_option_b.white};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const Company = styled.span`
  color: ${colors_option_b.green};
`;
const JobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${colors_option_b.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

class Product extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(this.product, srConfig());
    });
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => this.setState({ activeTabId });

  render() {
    const { activeTabId } = this.state;
    const { data } = this.props;

    return (
      <ProductContainer id="product" ref={el => (this.product = el)}>
        <Heading>We're hiring</Heading>
        <TabsContainer>
          <Tabs role="tablist">
            {data &&
              data.map(({ node }, i) => {
                const { company } = node.frontmatter;
                return (
                  <Tab
                    key={i}
                    isActive={this.isActive(i)}
                    onClick={e => this.setActiveTab(i, e)}
                    role="tab"
                    aria-selected={this.isActive(i) ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={this.isActive(i) ? '0' : '-1'}>
                    <span>{company}</span>
                  </Tab>
                );
              })}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {data &&
              data.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title, url, company, range } = frontmatter;
                return (
                  <TabContent
                    key={i}
                    isActive={this.isActive(i)}
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`job${i}`}
                    aria-hidden={!this.isActive(i)}>
                    <JobTitle>
                      <span>{title}</span>
                      <Company>
                        &nbsp;&nbsp;
                        <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                          {company}
                        </a>
                      </Company>
                    </JobTitle>
                    <JobDetails>
                      <span>{range}</span>
                    </JobDetails>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </TabContent>
                );
              })}
          </ContentContainer>
        </TabsContainer>
      </ProductContainer>
    );
  }
}

export default Product;
