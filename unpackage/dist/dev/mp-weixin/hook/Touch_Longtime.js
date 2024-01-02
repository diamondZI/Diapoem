"use strict";
class Touch {
  constructor(start, end) {
    //长按  
    //双指放大
    //双指缩小
    //滑动
    //如果诗的题目过长则显示前几位后用...省略
    //用户指南 使用指导 分步骤
    //原创诗集排行帮,每周前几名加入到名家出版作品
    //建立讨论和建议社群 微信群/b站推广
    //学习广告盈利方式
    //取消自定义主题,设置 暗夜/白天/护眼/大字主题
    //收藏的话需要判断是否为原创诗词还是名家出版作品
    //加入大量动画效果
    this.touchNumber = 0;
    this.start = {
      x: 0,
      y: 0
    };
    this.end = {
      x: 0,
      y: 0
    };
    this.touchStarts = {};
    this.touchends = {};
    this.start = start;
    this.end = end;
  }
  getOrigin(e) {
    console.log(e.touches);
    const org = {
      x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      distance: Math.sqrt(Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) + Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2))
    };
    return org;
  }
  touchStart(e) {
    if (e.touches.length === 2) {
      this.touchStarts = this.getOrigin(e);
      console.log("双指开始");
    } else if (e.touches.length === 1) {
      this.start = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    }
    console.log(e);
  }
  AngleMount() {
    var _X = this.end.x - this.start.x, _Y = this.end.y - this.start.y;
    return Math.floor(360 * Math.atan(_Y / _X) / (2 * Math.PI));
  }
  Scale() {
  }
  TouchMove(e, Rfn, Ufn, Dfn) {
    if (e.touches.length === 1) {
      this.end = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
      const angle = this.AngleMount();
      if (this.end.x - this.start.x > 100 && angle < 30 && angle > -30 || this.end.x - this.start.x < -100 && angle < 30 && angle > -30) {
        Rfn(Math.floor(this.end.x - this.start.x));
      }
    } else if (e.touches.length === 2) {
      console.log("话", e);
      this.touchends = this.getOrigin(e);
      if (this.touchends.distance > this.touchStarts.distance) {
        console.log("放大");
      } else {
        console.log("缩小");
      }
    }
  }
  TouchEnd(e, FN) {
    e.touches.length = 0;
    this.end = {};
    this.start = {};
    FN(this.end.x - this.start.x);
  }
}
exports.Touch = Touch;
