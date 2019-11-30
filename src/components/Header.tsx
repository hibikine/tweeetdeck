import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTab, removeTab } from '../actions/tabs';

type Props = { addNewTab(): void; removeTab(): void };
const Header = ({ addNewTab, removeTab }: Props) => (
  <HeaderWrapper>
    <Button type="button" onClick={addNewTab}>
      +タブ追加
    </Button>
    <Button type="button" onClick={removeTab}>
      -タブ削除
    </Button>
  </HeaderWrapper>
);
export const headerHeight = '50px';
const HeaderWrapper = styled.div`
  display: flex;
  height: ${headerHeight};
`;
const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  background: lightskyblue;
  margin: 2px;
  border: 0;
  border-radius: 3px;
  padding: 0 30px;
  font-size: 1rem;
`;
export default connect(null, dispatch => ({
  addNewTab: () => dispatch(addTab()),
  removeTab: () => dispatch(removeTab()),
}))(Header);
