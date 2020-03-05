import Vue from "vue";
import Router from "vue-router";
// pages
import home from "@/pages/home/home";
import order from "@/pages/order/order";
import profile from "@/pages/profile/profile";
import search from "@/pages/search/search";
import login from "@/pages/login/login";
import userinfo from "@/pages/profile/userinfo";
import shop from "@/pages/shop/shop";

// import shopGoods from '@/pages/shop/shopGoods/shopGoods'
// import shopRatings from '@/pages/shop/shopRatings/shopRatings'
// import shopInfo from '@/pages/shop/shopInfo/shopInfo'
const shopGoods = () => import("@/pages/shop/shopGoods/shopGoods");
const shopRatings = () => import("@/pages/shop/shopRatings/shopRatings");
const shopInfo = () => import("@/pages/shop/shopInfo/shopInfo");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      name: "order",
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      name: "search",
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: userinfo
    },
    {
      // 商家详情的页面
      path: "/shop",
      // name: 'shop',
      component: shop,
      children: [
        {
          path: "/shop/goods",
          name: "shopGoods",
          component: shopGoods
        },
        {
          path: "/shop/ratings",
          name: "shopRatings",
          component: shopRatings
        },
        {
          path: "/shop/info",
          name: "shopInfo",
          component: shopInfo
        },
        {
          path: "/",
          redirect: "/shop/goods"
        }
      ]
    }
  ]
});
