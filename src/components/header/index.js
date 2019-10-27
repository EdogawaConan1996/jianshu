import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavIcon, SearchWrapper, SearchInput, SearchIcon, BtnWrapper, Btn } from './style';
import { CSSTransition } from 'react-transition-group';
import { changeInputFocusAction } from '../../store/action.creator';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="header">
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem float="left">
              <NavIcon className="iconfont icon-zhinanzhen" />
              首页
            </NavItem>
            <NavItem float="left">
              <NavIcon className="iconfont icon-shouji" />
              下载App
            </NavItem>
            <NavItem float="right">
              <NavIcon className="iconfont icon-Aa" />
            </NavItem>
            <NavItem float="right">
              <NavIcon className="iconfont icon-zuanshi" />
              <NavIcon className="iconfont icon-beta" />
            </NavItem>
              <SearchWrapper>
                <CSSTransition in={this.props.focused} timeout={500} classNames="slide">
                  <SearchInput onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.props.focused ? 'focused' : ''}/>
                </CSSTransition>
                <SearchIcon className={this.props.focused ? 'iconfont icon-search focused' : 'iconfont icon-search'} />
              </SearchWrapper>
          </Nav>
          <BtnWrapper>
            <Btn type="text">登录</Btn>
            <Btn>注册</Btn>
            <Btn type="primary">
              <i className="iconfont icon-bi" />
              写文章
            </Btn>
          </BtnWrapper>
        </HeaderWrapper>
      </div>
    )
  }

  handleInputFocus = () => {
    this.props.changeInputFocus()
  }

  handleInputBlur = () => {
    this.props.changeInputFocus()
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputFocus() {
      const action = changeInputFocusAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);