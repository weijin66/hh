import jQuery from 'jquery';
import _ from 'lodash';
import { a } from '@/script/app';
import '@/style/index.less';
import '@/index.css';

console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
jQuery(() => {
  console.log(123);
});
jQuery.ajax({
  url: '/api/abc',
});
jQuery.ajax({
  url: '/api1/abc1',
});
console.log(_);

console.log('测试gitee -> github同步功能！');
console.log('npm_package_config_port', npm_package_config_port);
// 测试git revert
// feat-10
