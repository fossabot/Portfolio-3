import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '../config';

import styled from 'styled-components';
import { theme, media, A } from '../style';

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${theme.colors.lightSlate};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`;
const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.lightSlate};
  }
`;
const EmailLink = styled(A)`
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;

class Email extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 2000);
  }

  render() {
    const { show } = this.state;

    return (
      <EmailContainer>
        <TransitionGroup>
          {show && (
            <CSSTransition timeout={3000} classNames="fade">
              <EmailLinkWrapper>
                <EmailLink href={`mailto:${config.email}`}>{config.email}</EmailLink>
              </EmailLinkWrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
      </EmailContainer>
    );
  }
}

export default Email;
