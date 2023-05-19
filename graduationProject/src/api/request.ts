export const sendHttpRequest = (url: string, method: string, body?: string) => {
  // 新建一个 XMLHttpRequest 对象
  const xhr = new XMLHttpRequest();
  // 进行请求
  xhr.open(method, url, true);
  xhr.setRequestHeader("Authorization", "Bearer <token>");
  xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
  xhr.send(body);
  // 等待服务器的响应
  xhr.onreadystatechange = function () {
    // 该函数会被调用四次， 因此需要判断状态是否是4
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("请求数据成功：", JSON.parse(xhr.responseText));
        return JSON.parse(xhr.responseText);
      } else {
        console.log("请求数据失败：", xhr.statusText);
        return JSON.parse(xhr.responseText);
      }
    }
  }
}