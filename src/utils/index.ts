/**
 * 等待某个内容 等到之后进行处理
 * @param flag 监听的待获取内容
 * @param cb 获取内容后的处理方法
 */
export function waitUntil(flag: () => any, cb: (f: any) => void) {
  let count = 20;
  let timer = setInterval(() => {
    if (flag()) {
      cb(flag());
      clearInterval(timer);
    } else {
      count--;
      console.log('waiting for sth...');
    }
    if (count < 0) {
      clearInterval(timer);
      console.log('stop waiting.');
    }
  }, 1000);
}

