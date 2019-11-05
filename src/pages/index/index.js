import React, { Component } from 'react'
import {IndexWrapper, IndexLeft, IndexRight, BannerImg, BroadWrapper, BroadItem, DownLoadAppWrapper, AdLink, ArticleWrapper, ArticleList, ArticleItem} from './style'
import broad1Img from '../../assets/img/broad1.png'
import broad2Img from '../../assets/img/broad2.png'
import broad3Img from '../../assets/img/broad3.png'
import broad4Img from '../../assets/img/broad4.png'
import qrCode from '../../assets/img/qrcode.png'
import articleImg from '../../assets/img/article/13686029-0cf7ba315bd577cc.jpg'

class IndexPage extends Component {
  render() {
    return (
      <IndexWrapper>
        <IndexLeft>
          <BannerImg />
          <ArticleWrapper>
            <ArticleList>
              <ArticleItem>
                <div className="content">
                  <a href="/" className="title">
                    <h4>浙大学霸作息表曝光：世界本不公平，你有多努力，就有多特殊</h4>
                  </a>
                  <p class="desc">头等舱可以优先登机， 银行VIP可以免排队， 演唱会最贵的门票位置最好， ...... 这个世界，似乎从来不平等。 但是，你有多努力，就有多特殊...</p>
                  <div className="meta">
                    <span className="zuanshi-meta">
                      <i class="iconfont icon-zuanshi"></i>
                      89.6
                    </span>
                    <span className="author-meta">
                      多哥朵妹
                    </span>
                    <span className="comment-meta">
                      <i className="iconfont icon-liaotianqipaoshixin"></i>
                      123
                    </span>
                    <span className="collect-meta">
                      <i className="iconfont icon-collect-active"></i>
                      1422
                    </span>
                  </div>
                </div>
                <img className="img-wrap" src={articleImg} width="150" height="100" alt="no pic" />
              </ArticleItem>
              <ArticleItem>
                <div className="content">
                  <a href="/" className="title">
                    <h4>浙大学霸作息表曝光：世界本不公平，你有多努力，就有多特殊</h4>
                  </a>
                  <p class="desc">头等舱可以优先登机， 银行VIP可以免排队， 演唱会最贵的门票位置最好， ...... 这个世界，似乎从来不平等。 但是，你有多努力，就有多特殊...</p>
                  <div className="meta">
                    <span className="zuanshi-meta">
                      <i class="iconfont icon-zuanshi"></i>
                      89.6
                    </span>
                    <span className="author-meta">
                      多哥朵妹
                    </span>
                    <span className="comment-meta">
                      <i className="iconfont icon-liaotianqipaoshixin"></i>
                      123
                    </span>
                    <span className="collect-meta">
                      <i className="iconfont icon-collect-active"></i>
                      1422
                    </span>
                  </div>
                </div>
                <img className="img-wrap" src={articleImg} width="150" height="100" alt="no pic" />
              </ArticleItem>
              <ArticleItem>
                <div className="content">
                  <a href="/" className="title">
                    <h4>浙大学霸作息表曝光：世界本不公平，你有多努力，就有多特殊</h4>
                  </a>
                  <p class="desc">头等舱可以优先登机， 银行VIP可以免排队， 演唱会最贵的门票位置最好， ...... 这个世界，似乎从来不平等。 但是，你有多努力，就有多特殊...</p>
                  <div className="meta">
                    <span className="zuanshi-meta">
                      <i class="iconfont icon-zuanshi"></i>
                      89.6
                    </span>
                    <span className="author-meta">
                      多哥朵妹
                    </span>
                    <span className="comment-meta">
                      <i className="iconfont icon-liaotianqipaoshixin"></i>
                      123
                    </span>
                    <span className="collect-meta">
                      <i className="iconfont icon-collect-active"></i>
                      1422
                    </span>
                  </div>
                </div>
                <img className="img-wrap" src={articleImg} width="150" height="100" alt="no pic" />
              </ArticleItem>
              <ArticleItem>
                <div className="content">
                  <a href="/" className="title">
                    <h4>浙大学霸作息表曝光：世界本不公平，你有多努力，就有多特殊</h4>
                  </a>
                  <p class="desc">头等舱可以优先登机， 银行VIP可以免排队， 演唱会最贵的门票位置最好， ...... 这个世界，似乎从来不平等。 但是，你有多努力，就有多特殊...</p>
                  <div className="meta">
                    <span className="zuanshi-meta">
                      <i class="iconfont icon-zuanshi"></i>
                      89.6
                    </span>
                    <span className="author-meta">
                      多哥朵妹
                    </span>
                    <span className="comment-meta">
                      <i className="iconfont icon-liaotianqipaoshixin"></i>
                      123
                    </span>
                    <span className="collect-meta">
                      <i className="iconfont icon-collect-active"></i>
                      1422
                    </span>
                  </div>
                </div>
                <img className="img-wrap" src={articleImg} width="150" height="100" alt="no pic" />
              </ArticleItem>
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
        </IndexRight>
      </IndexWrapper>
    )
  }
}

export default IndexPage;
