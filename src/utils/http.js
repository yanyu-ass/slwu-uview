const baseURL = "https://slwl-api.itheima.net";
const request = {
  invoke(config) {
    // 1、请求之前触发的钩子函数
    /**
     * 请求拦截器
     * @param {UniApp.RequestOptions} config
     */
    console.log("haha", config);
    // 2、提示加载中
    uni.showLoading({
      title: "加载中",
    });
    // 3、如果你的请求的url 不是以http开头，那么我就帮你补全url
    if (!config.url.startsWith("http")) {
      config.url = baseURL + config.url;
    }
    config.timeout = 10000; // 超时时间
    // 4、添加小程序客户端标识，方便后端识别
    config.header = {
      ...config.header,
      "source-client": "miniapp", // 添加小程序端调用标识
    };
  },
  complete(res) {
    // 5、请求完成的时候关闭loading效果
    uni.hideLoading();
  },
};
uni.addInterceptor("request", request);
uni.addInterceptor("uploadFile", request);

const http = (options) => {
  return new Promise((resolve, reject) => {
    console.log("op", options);
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
          uni.showToast({
            icon: "none",
            title: res.data || "请求错误",
          });
        }
      },
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误吗，请重试",
        });
        reject(err);
      },
    });
  });
};
const methodList=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
methodList.forEach((method)=>{
  http[method.toLowerCase()] = function(url, data){
    console.log(data);
    return http({
      method,
      url,
      data
    })
  }
})
export default http;
