import React, { Component } from 'react'
import { connect } from 'react-redux'
import {IndexWrapper, IndexLeft, IndexRight, BannerImg, BroadWrapper, BroadItem, DownLoadAppWrapper, AdLink, ArticleWrapper, ArticleList, ArticleItem, RecommendAuthorWrapper, ChangeIcon, MoreAuthorBtn} from './style'
import broad1Img from '../../assets/img/broad1.png'
import broad2Img from '../../assets/img/broad2.png'
import broad3Img from '../../assets/img/broad3.png'
import broad4Img from '../../assets/img/broad4.png'
import qrCode from '../../assets/img/qrcode.png'
import articleImg from '../../assets/img/article/13686029-0cf7ba315bd577cc.jpg'
import { AuthorList } from '../../components/header/style'
import AvatarImg from '../../assets/img/avatar/189d69dd-af7c-4290-9e2c-89e98acf3603.webp'
import {getArticleListAction, getAuthorListAction} from '../../store/index/action.creator'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state ={}
    this.changeIcon = null
  }
  render() {
    return (
      <IndexWrapper>
        <IndexLeft>
          <BannerImg />
          <ArticleWrapper>
            <ArticleList>
              {this.renderArticleList()}
            </ArticleList>
          </ArticleWrapper>
        </IndexLeft>
        <IndexRight>
          <BroadWrapper>
            <BroadItem src={broad1Img} />
            <BroadItem src={broad2Img} />
            <BroadItem src={broad3Img} />
            <BroadItem src={broad4Img} />
          </BroadWrapper>
          <DownLoadAppWrapper>
            <img className="qr-code" src={qrCode} alt="简书App" />
            <div className='info'>
              <p className='title'>下载简书手机App &gt;</p>
              <p className='desc'>随时随地发现和创作内容</p>
            </div>
          </DownLoadAppWrapper>
          <AdLink></AdLink>
          <RecommendAuthorWrapper>
            <div className="top">
                <p className="title">推荐作者</p>
                <div className="change-wrapper" onClick={this.handleChange}>
                  <ChangeIcon ref={(el) => {this.changeIcon = el}} className="iconfont icon-icon--" />
                  换一批
                </div>
              </div>
            <AuthorList>
              {this.renderAuthorList()}
            </AuthorList>
          </RecommendAuthorWrapper>
          <MoreAuthorBtn>查看全部 &gt;</MoreAuthorBtn>
        </IndexRight>
      </IndexWrapper>
    )
  }

  componentWillMount() {
    this.props.getArticle()
    this.props.getAuthor()
  }

  handleChange = () => {
    const transform = this.changeIcon.style.transform
    if (transform) {
      let angle = parseInt(transform.substring(transform.indexOf('(')+1, transform.indexOf('deg')))
      angle += 360
      this.changeIcon.style.transform = `rotate(${angle}deg)`
    } else {
      this.changeIcon.style.transform = 'rotate(360deg)'
    }
    // let page = this.props.currentPage + 1 > this.props.totalPage ? 1 : this.props.currentPage + 1
  }

  renderArticleList = () => {
    return this.props.articleList.map((item, index) => {
      return (
        <ArticleItem key={index}>
          <div className="content">
            <a href="/" className="title">
              <h4>{item.title}</h4>
            </a>
            <p className="desc">{item.desc}</p>
            <div className="meta">
              <span className="zuanshi-meta">
                <i className="iconfont icon-zuanshi"></i>
                {item.zuanshiNum}
              </span>
              <span className="author-meta">
                {item.author}
              </span>
              <span className="comment-meta">
                <i className="iconfont icon-liaotianqipaoshixin"></i>
                {item.commentNum}
              </span>
              <span className="collect-meta">
                <i className="iconfont icon-collect-active"></i>
                {item.collectNum}
              </span>
            </div>
          </div>
          <img className="img-wrap" src={articleImg} width="150" height="100" alt="no pic" />
        </ArticleItem>
      )
    })
  }

  renderAuthorList = () => {
    return this.props.authorList.map(item => {
      return (
        <li key={item.id}>
          <div className="img-wrapper">
            <img src={AvatarImg} alt="no pic" />
          </div>
          <div className="main-content">
            <div className="top">
              <p className="left">{item.nickname}</p>
              <p className="right">+关注</p>
            </div>
            <div className="meta">
              <p>写了{item.total_wordage/1000}k字 · {item.total_likes_count/ 1000}k喜欢</p>
            </div>
          </div>
        </li>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['index', 'articleList']),
    authorList: state.getIn(['index', 'authorList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle() {
      const action = getArticleListAction()
      dispatch(action)
    },
    getAuthor() {
      const action = getAuthorListAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
