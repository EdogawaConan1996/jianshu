import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavIcon, 
  NavSearchWrapper, 
  Addition, 
  Btn, 
  SearchInput, 
  SearchIcon } from './style'
import { CSSTransition } from 'react-transition-group'

import {changeInputFocusAction} from '../../store/action.creator'

class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentItem: 'index',
      inputValue: ''
    }
  }

  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem pull="left" active={this.state.currentItem === 'index'} onClick={() => {this.handleClickItem('index')}}>
            <NavIcon className="iconfont icon-zhinanzhen" />
            <span>首页</span>
          </NavItem>
          <NavItem pull="left" active={this.state.currentItem === 'download-app'} onClick={() => {this.handleClickItem('download-app')}}>
            <NavIcon className="iconfont icon-shouji" />
            <span>下载app</span>
          </NavItem>
          <NavItem pull="right" active={this.state.currentItem === 'a'} onClick={() => {this.handleClickItem('a')}}>
            <NavIcon className="iconfont icon-Aa" />
          </NavItem>
          <NavItem pull="right" active={this.state.currentItem === 'vip'} onClick={() => {this.handleClickItem('vip')}}>
            <NavIcon className="iconfont icon-zuanshi" />
            <NavIcon className="iconfont icon-beta" />
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition in={this.props.focused} timeout={500} classNames="slide">
              <SearchInput className={this.props.focused ? 'focused' : ''} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}/>
            </CSSTransition>
            <SearchIcon className={this.props.focused ? 'focused iconfont icon-search' : 'iconfont icon-search'} />
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Btn className="default">注册</Btn>
          <Btn className="primary">
            <i className="iconfont icon-bi" />
            写文章
          </Btn>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleClickItem = (item) => {
    this.setState(() =>({
      currentItem: item
    }))
  }

  handleInputFocus = () => {    
    this.props.changeInputfocus()
  }

  handleInputBlur = () => {
    this.props.changeInputfocus()
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputfocus () {

      const action = changeInputFocusAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)