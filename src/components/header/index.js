import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavIcon,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  BtnWrapper,
  Btn,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  ChangeIcon
} from './style';
import { CSSTransition } from 'react-transition-group';
import { changeInputFocusAction, getSearchInfoListAction, setCurrentPageAction } from '../../store/header/action.creator';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSearchInfo: false,
      infoList: []
    }
    this.changeIcon = null
  }

  componentDidMount () {
    this.props.getSearchInfoList()
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
                <SearchInfo style={{display: this.state.showSearchInfo ? 'block' : 'none'}} onMouseLeave={this.hideSearchInfo}>
                  <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={this.handleChangeIcon}>
                      <ChangeIcon ref={(el) => {this.changeIcon = el}} className="iconfont icon-icon--" />
                      换一批
                    </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <div>
                    {this.renderSearchInfoList()}
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

  renderSearchInfoList = () => {
    return this.props.searchInfoList.map((item,index) => {
      return (
        <SearchInfoItem key={index}>{item}</SearchInfoItem>
      )
    })
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
  handleChangeIcon = () => {
    const transform = this.changeIcon.style.transform
    if (transform) {
      let angle = parseInt(transform.substring(transform.indexOf('(')+1, transform.indexOf('deg')))
      angle += 360
      this.changeIcon.style.transform = `rotate(${angle}deg)`
    } else {
      this.changeIcon.style.transform = 'rotate(360deg)'
    }
    let page = this.props.currentPage + 1 > this.props.totalPage ? 1 : this.props.currentPage + 1
    this.props.changeCurrentPage(page)
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchInfoList: state.getIn(['header','searchInfoList']),
    totalPage: state.getIn(['header', 'totalPage']),
    currentPage: state.getIn(['header', 'currentPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputFocus() {
      const action = changeInputFocusAction()
      dispatch(action)
    },
    getSearchInfoList () {
      const action = getSearchInfoListAction()
      dispatch(action)
    },
    changeCurrentPage (page) {
      const action = setCurrentPageAction(page)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
