import styled from "styled-components"
import adImg from '../../assets/img/ad.png'

export const IndexWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const IndexLeft = styled.div`
  float: left;
  padding-left: 15px;
  padding-top: 30px;
  width: 640px;
  box-sizing: border-box;
`;

export const IndexRight = styled.div`
  float: right;
  margin-left: 40px;
  padding-top: 30px;
  width: 280px;
  box-sizing: border-box;
`;

export const BannerImg = styled.img.attrs({
  src: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
})`
  width: 625px;
  height: 240px;
`;

export const BroadWrapper = styled.div`
  width: 100%;
`;

export const BroadItem = styled.img`
  width: 100%;
  height: 50px;
  margin-top: -4px;
  margin-bottom: 6px;
  padding-bottom: 4px;
`;

export const DownLoadAppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  padding: 10px 22px;
  height: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  .qr-code {
    width: 60px;
    height: 60px;
  }
  .info {
    width: 143px;
    height: 43px;
    margin: auto 0 auto 7px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const AdLink = styled.a`
  position: relative;
  display: block;
  height: 160px;
  margin: 20px 0;
  background: transparent url(${adImg}) center center no-repeat;
  background-size: contain;
  &::after {
    content: '广告';
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    font-size: 10px;
    padding: 5px;
  }
`;

export const ArticleWrapper = styled.div`
  width: 100%;
`;

export const ArticleList = styled.ul`
  width: 100%;
  height: 100%;
`;

export const ArticleItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 140px;
  margin-bottom: 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .img-wrap {
    width: 150px;
    height: 100px;
    margin: auto 0;
  }
  .content {
    width: 458px;
    margin-right: 10px;
    .title {
      margin: -7px 0 4px;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #000;
    }
    .desc {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      .zuanshi-meta,.author-meta,.comment-meta,.collect-meta {
        margin-right: 10px;
        color: #999;
      }
      .zuanshi-meta {
        color: #ea6f5a;
      }
    }
  }
`;

export const RecommendAuthorWrapper = styled.div`
  margin-top: 20px;
  .top {
    overflow: hidden;
    font-size: 14px;
    color: #969696;
    .title {
      float: left;
    }
    .change-wrapper {
      float: right;
    }
  }
`;

export const ChangeIcon = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  margin-right: 5px;
  transition: all 1s ease-in;
  transform-origin: center center;
`;

export const MoreAuthorBtn = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 7px 7px 7px 12px;
  width: 100%;
  height: 34px;
  line-height: 20px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center; 
`;


