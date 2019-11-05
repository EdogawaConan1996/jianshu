import styled from "styled-components";

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
  padding: 10px 22px;
  height: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  .qr-code {
    width: 60px;
    height: 60px;
  }
  .info {
    display: inline-block;
    width: 143px;
    height: 43px;
    margin-left: 7px;
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
