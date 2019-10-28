import styled from 'styled-components'
import LogoPic from '../../assets/img/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background-image: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const NavItem = styled.a`
  float: ${props => props.pull ? props.pull : 'none'};
  display: ${props => props.pull ? 'block' : 'inline-block'};
  height: 56px;
  padding: 15px;
  line-height: 26px;
  box-sizing: border-box;
  color: ${props => props.active ? '#ea6f5a' : '#666'};
  cursor: pointer;
`

export const NavIcon = styled.i `
  font-size: 20px !important;
  margin-right: 5px;
`;

export const NavSearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 38px;
  line-height: 38px;
  margin: 9px 0 9px 20px;
  border-radius: 19px;
  box-sizing: border-box;
  background-color: #eee;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '搜索'
}) `
  width: 160px;
  height: 100%;
  padding: 0 20px;
  margin-right: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  &::placeholder {
    font-size: 15px;
    color: #ccc;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }

`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Btn = styled.div `
  display: inline-block;
  margin: 9px 10px;
  width: 80px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  text-align: center;
  &.default {
    border: 2px solid #ea6f5a;
    color: #ea6f5a;
    box-sizing: border-box;
  }
  &.primary {
    background-color: #ea6f5a;
    color: #fff;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  right: 6px;
  height: 20px;
  width: 20px;
  font-size: 15px !important;
  float: right;
  border-radius: 15px;
  line-height: 20px;
  margin: 4px 0;
  padding: 5px;
  text-align: center;
  color: #333;
  font-weight: 700;
  &.focused {
    background-color: #666;
    color: #fff;
  }
`