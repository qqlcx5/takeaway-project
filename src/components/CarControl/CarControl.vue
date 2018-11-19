<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-minus-circle"
           v-if="food.count"
           @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count"
         v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-plus-circle"
         @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  name: 'CarControl',
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
  .move-leave-active, .move-enter-active
    transition all 0.3s
  .move-leave-to, .move-enter
    opacity 0
    transform translateX(15px) rotate(180deg)
  .icon-minus-circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
  .icon-plus-circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
</style>
