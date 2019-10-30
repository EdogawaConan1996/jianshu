import styled from 'styled-components';
import LogoPic from '../../assets/img/logo.png';

const btn = {
  default: {
    color: '#ea6f5a',
    backgroundColor: '#fff',
    border: '1px solid #ea6f5a'
  },
  text: {
    color: '#333',
    backgroundColor: '#fff',
    border: 'none'
  },
  primary: {
    color: '#fff',
    backgroundColor: '#ea6f5a',
    border: 'none'
  }
}

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: transparent url(${LogoPic}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const NavItem = styled.a`
  float: ${props => props.float ? props.float : ''};
  margin-right: 10px;
  height: 56px;
  line-height: 56px;
  font-size: 17px;
  color: #666;
`;

export const NavIcon = styled.i`
  font-size: 17px;
  margin-right: 5px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 38px;
  margin: 9px 0;
  background-color: #ccc;
  border-radius: 19px;
  padding: 0 40px 0 20px;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '搜索'
})`
  width: 160px;
  height: 100%;
  border: none;
  outline: none;
  background-color: #ccc;
  box-sizing: border-box;
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.5s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.5s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 6px;
  top: 6px;
  height: 26px;
  width: 26px;
  border-radius: 13px;
  line-height: 26px;
  text-align: center;
  color: #999;
  &.focused {
    background-color: #999;
    color: #fff;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
`;

export const Btn = styled.div`
  display: inline-block;
  height: 38px;
  line-height: 24px;
  margin: 9px 0;
  border: ${props => props.type ? btn[props.type].border : btn['default'].border};
  background-color: ${props => props.type ? btn[props.type].backgroundColor : btn['default'].backgroundColor};
  color: ${props => props.type ? btn[props.type].color : btn['default'].color};
  box-sizing: border-box;
  border-radius: 19px;
  padding: 6px 12px;
  margin-left: 20px;
  cursor: pointer;
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  overflow: hidden;
  padding: 0 20px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  &::hover {
    color: #333;
  }
`;

export const  RefreshIcon = styled.div.attrs({
  ref: 'changeIcon'
})`
  display: inline-block;
  line-height: 20px;
  color: #ccc;
  margin-right: 5px;
  font-size: 13px;
  font-weight: 700;
  transform-origin: center center;
  transform: rotate(0deg);
  transition: all 0.5s ease-out;
`;