import Vue from "vue";
import VueRouter from "vue-router";
//首页
const Home = () => import("../views/mahome/Home");
const Gengeral = () => import("../views/mahome/childComps/Gengeral");
const Explain = () => import("../views/mahome/childComps/Explain");
const Adivce = () => import("../views/mahome/childComps/Adivce");

//预约
const Appointment = () => import("../views/maappointment/Appointment");

//消息
const News = () => import("../views/manews/News");
const Person = () => import("../views/manews/childnews/Person");

//预约历史
const Order = () => import("../views/maorder/Order");

//个人中心
const Profile = () => import("../views/maprofile/Profile");
const SetProfile = () => import("../views/maprofile/childprofile/SetProfile");
const User = () => import("../views/maprofile/childprofile/User");
const Service = () => import("../views/maprofile/childprofile/Service");
const RecommendPerson = () => import("../views/maprofile/childprofile/RecommendPerson");

//登录/注册/修改密码
const Login = () => import("../views/login/Login");
const Register = () => import("../views/login/Register");
const ForgetPassword = () => import("../views/login/ForgetPassword");

//404界面
const NotFound = () => import("../components/common/NotFound");

Vue.use(VueRouter);

const routes = [
  //默认开始界面
  {
    path: "",
    redirect: "/login"
  },
  //找不到界面的时候
  { 
    path: "*", 
    component: NotFound 
  },
  //首页
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/home/gengeral",
    name: "gengeral",
    component: Gengeral
  },
  {
    path: "/home/explain",
    name: "explain",
    component: Explain
  },
  {
    path: "/home/adivce",
    name: "adivce",
    component: Adivce
  },
  //历史预约
  {
    path: "/order",
    name: "order",
    component: Order
  },
  //消息
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/person",
    name: "person",
    component: Person
  },
  //预约
  {
    path: "/appointment",
    name: "appointment",
    component: Appointment
  },
  //个人中心
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/profile/user",
    name: "user",
    component: User
  },
  {
    path:'/profile/recommend',
    name:'recommendPserson',
    component:RecommendPerson
  },
  {
    path: "/profile/service",
    name: "service",
    component: Service
  },
  {
    path: "/profile/set",
    name: "set",
    component: SetProfile
  },

  //登录/注册/修改密码
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: ForgetPassword
  }
];


const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  
  const token =localStorage.token
  if (to.meta.requiresAuth) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;

