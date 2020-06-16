import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    userpofile: {
        username: "",
        pwd: ""
      },
    set: true,
    done: true,
    chatdata: [
      {
        id: 0,
        message:
          "一起出去玩，一起来(｡･∀･)ﾉﾞ嗨,一起出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨出去玩，一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨一起来(｡･∀･)ﾉﾞ嗨一起出去玩，一起来(｡･∀･)ﾉﾞ嗨",
        image: require("assets/img/news/1.jpg")
      },
      {
        id: 1,
        message: "一起出去玩，一起来(｡･∀･)ﾉﾞ嗨",
        image: require("assets/img/news/1.jpg")
      },
      {
        id: 0,
        message: "一起出去玩，一起来(｡･∀･)ﾉﾞ嗨",
        image: require("assets/img/news/1.jpg")
      },
      {
        id: 1,
        message: "一起出去玩，一起来(｡･∀･)ﾉﾞ嗨",
        image: require("assets/img/news/1.jpg")
      }
    ]
  },
  mutations: {
    //登录注册
    loginCommit(state, data) {
      localStorage.token = data;
      state.token = data;
    },
    loginOut(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
    //记录本地用户数据{
    adduser(state, user) {
      state.userpofile.username = user.username;
      state.userpofile.pwd = user.pwd;
    },

    //隐藏主控件
    hiddenMainBar(state) {
      state.set = false;
    },
    showMainBar(state) {
      state.set = true;
    },
    //订单状态
    orderDone(state) {
      state.done = false;
    },
    orderDo(state) {
      state.done = true;
    }
  },
  actions: {},
  getters: {}
});

export default store;
