import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavIcon, SearchWrapper, SearchInput, SearchIcon, BtnWrapper, Btn, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, RefreshIcon } from './style';
import { CSSTransition } from 'react-transition-group';
import { changeInputFocusAction } from '../../store/header/action.creator';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSearchInfo: false
    }
    this.changeIcon = null
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
                <SearchInfo onMouseLeave={this.hideSearchInfo} style={{display: this.state.showSearchInfo ? 'block' : 'none'}}>
                  <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                      <RefreshIcon className="iconfont icon-icon--" onClick={this.handleChangeInfo}/>
                      换一批
                    </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                  </div>
                </SearchInfo>
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
    this.setState(() => ({
      showSearchInfo: true
    }))
  }

  handleInputBlur = () => {
    this.props.changeInputFocus()
  }

  hideSearchInfo = () => {
    this.setState(() => ({
      showSearchInfo: false
    }))
  }

  handleChangeInfo = () => {
    if (this.refs.changeIcon.style.transform) {
      const str = this.refs.changeIcon.style.transform
      const deg = str.substr(0, str.indexOf('deg'))
      console.log(deg)
    } else {
      this.refs.changeIcon.style.transform = `360deg`;
      console.log(this.refs.changeIcon.style.transform)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
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