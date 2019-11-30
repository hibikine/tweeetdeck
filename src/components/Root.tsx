import * as React from 'react';
import styled from 'styled-components';
import Header, { headerHeight } from './Header';
import { connect } from 'react-redux';
import { State } from '../reducers/index';
import TwitterView from './TwitterView';

export default connect(({ tabs: { tabs } }: State) => ({ tabs }))(
  ({ tabs }) => {
    return (
      <Wrapper>
        <Header />
        <FlexDiv>
          {new Array(tabs).fill(0).map((_, i) => (
            <TwitterView index={i} />
          ))}
        </FlexDiv>
      </Wrapper>
    );
  }
);
const scrollbarHeight = '30px';
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  & webview {
    flex-grow: 1;
    height: calc(100vh - ${headerHeight} - 30px);
    min-width: 500px;
  }
  &::-webkit-scrollbar {
    height: ${scrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    border-radius: calc(${scrollbarHeight} / 2);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 50, 0.5);
    border-radius: calc(${scrollbarHeight} / 2);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
