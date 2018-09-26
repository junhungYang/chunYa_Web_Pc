<template>
    <!-- slider容器 -->
  <div class="slider" ref="slider">
      <!-- 滚动条 -->
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <!-- 下标小圆点 -->
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :class="{active:currentPageIndex == index}"></span>
    </div>

    <div class="control">
        <img src="../../../assets/img/leftClick.png" @click.stop="clickPrev">
        <img src="../../../assets/img/rightClick.png" @click.stop="clickNext">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { addClass } from './dom'
import BScroll from 'better-scroll'
export default {
    name: 'slider',
    // 从父级模块传入规定是否loop,autoplay,以及每一页所呈现的时间
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 4000
        }
    },
    data() {
        return {
            dots: [],
            currentPageIndex: 0,
            allWidth:''
        }
    },
    mounted() {
        setTimeout(() => {
            this._setSliderWidth()
            this._initDots()
            this._initSlider()
            if (this.autoPlay) {
                this._play()
            }
        }, 20)
        window.addEventListener('resize', () => {
            if (!this.slider) {
                return;
            }
            this._setSliderWidth(true)
            this.slider.refresh()
        })
    },
    activated() {
        if (this.autoPlay) {
            this._play()
        }
    },
    deactivated() {
        clearTimeout(this.timer)
    },
    beforeDestroy() {
        clearTimeout(this.timer)
    },
    methods: {
        clickPrev() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.slider.x === -(this.$refs.slider.offsetWidth) ? '' : this.slider.prev()
            }, 800);
        },
        clickNext() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.slider.x === -this.factWidth ? '' : this.slider.next()
            }, 800);
        },
        _setSliderWidth(isResize) {
            // 获取sliderGroup的子元素
            this.children = this.$refs.sliderGroup.children;
            console.log(this.$refs.sliderGroup)
            //获取容器长度
            let sliderWidth = this.$refs.slider.clientWidth
            // 遍历sliderGrop的每一个子元素获取总长度
            let width = 0
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                //通过addClass组件，给每一页动态添加类名'slider-item'
                addClass(child, 'slider-item')
                //设置每一页的宽度应该是容器的宽度
                child.style.width = sliderWidth + 'px'
                //把每一页的宽度加进width内获取总宽度
                width += sliderWidth
            }
            if (this.loop && !isResize) {
                //判断是否存在自动播放，假如存在自动播放应该给总宽再加上两个容器宽度
                //原因：在1页前面加上最后一页，在最后一页加上1页才能实现无缝切换
                width += 2 * sliderWidth
            }
            //把总宽赋值给sliderGroup
            this.$refs.sliderGroup.style.width = width + 'px'
        },
        _initSlider() {
            this.slider = new BScroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: true,//针对轮播图所使用的属性
                snap: {
                    loop: true,
                    threshold: 0.3,
                    speed: 400
                },
                click: true
            })
            this.factWidth = this.slider.scrollerWidth - this.slider.wrapperWidth*2
            console.log(this.factWidth)
            this.slider.on('scrollEnd', () => {
                //getCurrentPage可获得当前页的索引，该索引值用于对下标小圆点进行active样式的变换
                let pageIndex = this.slider.getCurrentPage().pageX
                this.currentPageIndex = pageIndex
                if (this.autoPlay) {
                    //滑动事件触发时应执行this.play,由于this.slider.next会触发scrollEnd事件
                    //scrollEnd的回调里又会执行this.play，所以这里形成一个递归
                    this._play()
                }
            })

        },
        _initDots() {
            //获取总页数赋值于下标，以通过v-for动态渲染下标的个数
            this.dots = new Array(this.children.length)
        },
        _play() {
            //清楚上一次的计时器，从新开启一个计时器，该计时器与每一页的展示时间相配合
            //它所延迟的时间应该是上一页索要展示的事件
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.slider.next()
            }, this.interval)
        }
    }
}
</script>
<style lang="less" scoped>
.slider {
  min-height: 1px;
  position: relative;
  height: 100%;
}
.slider-group {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
}
.slider-item {
  float: left;
  box-sizing: border-box;
  height: 100%;
}

.slider-item a {
  display: block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
}

.control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    img {
        position: absolute;
    }
    @media screen and (min-width: 1920px){
        img:nth-of-type(1) {
            left: 260px;
        }
        img:nth-of-type(2) {
            right: 260px;
        }
    }
    @media screen and (min-width: 1599px) and (max-width:1920px){
        img:nth-of-type(1) {
            left: 130px;
        }
        img:nth-of-type(2) {
            right: 130px;
        }
    }
    @media screen and (min-width: 1400px) and (max-width:1955){
        img:nth-of-type(1) {
            left: 70px;
        }
        img:nth-of-type(2) {
            right: 70px;
        }
    }
    @media screen and (max-width:1400px) {
        img:nth-of-type(1) {
            left: 40px;
        }
        img:nth-of-type(2) {
            right: 40px;
        }
    }
}
</style>

