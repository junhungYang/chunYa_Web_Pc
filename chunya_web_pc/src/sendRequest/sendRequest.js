import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "http://www.chunyajkkj.com/ch";

//轮播广告
function spreadList () {
    return axios.post("/api/index/spreadList",qs.stringify({
        id:1
    }))
}

// 关于我们、联系我们
// id
// 1 - 公司介绍, 4 - 品牌介绍, 5 - 企业文化, 2 - 招商合作, 6 - 招贤纳士, 7 - 联系我们
function commonArticle (dataObj) {
    return axios.post("/api/official/commonArticle",qs.stringify(dataObj))
}


//产品预览 / 产品预览
function previewGoodsList() {
    axios.post("/api/official/previewGoodsList",qs.stringify({
        id: 3
    }));
}

//公司动态 / 新闻快讯、活动资讯、健康分享
function newsList(dataObj) {
    axios.post("/api/official/newsList", qs.stringify(dataObj));
}

//公司动态 / 宣传视频
function videoList(dataObj) {
    axios.post("/api/official/videoList", qs.stringify(dataObj));
}

//公司动态 / 视频详情
function videoDetail() {
    axios.post("/api/official/videoDetail",qs.stringify({
        id: 4
    }));
}

//公司动态 / 资讯详情
function newsDetail() {
    axios.post("/api/official/newsDetail", qs.stringify({
        id: 3
    }));
}


export {
    spreadList,
    commonArticleCompany,
    commonArticleBrand
}