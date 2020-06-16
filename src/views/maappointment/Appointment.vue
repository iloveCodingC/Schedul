<template>
  <div class="home">
    <nav-bar class="nav-bar-one"><div slot="left" >维修预约</div></nav-bar>
    <div class="head">
      <form>
        <div class="appoint">
          <nav-bar style="box-shadow:0px 5px 0px #34495e"
            ><div slot="center">请填写预约信息</div></nav-bar
          >
          <div class="nav-two">
            <div class="form-class">
              <span>名字:</span>
              <input type="text" />
            </div>
            <div class="form-class">
              <span>学号:</span>
              <input type="text" class="form-class" />
            </div>
            <div class="form-class">
              <span>地址:</span>
              <input type="text" class="form-class" />
            </div>
            <div class="title">维修理由(150字以内)：</div>
            <textarea rows="5" />
            <div class="title">备注(20字以内)：</div>
            <textarea rows="3" />
          </div>
        </div>
        <div class="honer">
          <input type="checkbox" name="checked" class="check-one" />
          <span>我已阅读并同意维修预约说明协议</span>
        </div>
        <button type="submit">确认预约</button>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Appointment",
  components: {
    NavBar
  }
};
</script>
<style scoped>
.home{
  height: 100%;
  background-image: url('~assets/img/home/open.jpg');

}
.nav-bar-one {
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  font: 16px "微软雅黑";
}
.nav-bar-one  div {
  text-align: center;
  line-height: 44px;
}
.head {
  margin: 54px 10px 0 10px;
  overflow: scroll;
  min-height: 800px;

}
.appoint {
  border-radius: 5px;
  border: 1px solid #34495e;
}

.nav-two {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.honer {
  line-height: 20px;
  text-align: center;
}
.check-one {
  margin-top: 4px;
  font-size: 14px;
  margin-left: 20px;
}
.honer span {
  font-size: 14px;
  margin-left: 2px;
  color: #34495e;
}
button {
  margin: auto;
  margin-top: 10px;
  border: 0px;
  outline: none;
  width: 200px;
  display: block;
  padding: 3% 0;
  background: #ffffff;
  font-size: 1em;
  font-family: "Microsoft YaHei";
  color: #fff;
  box-shadow: #95a5a6 0px 0px 10px;
  border-radius: 3px;
  background-color: #7f8c8d;
}
textarea,
input {
  border: 0;
  outline: none;
  font: 18px "华文宋体";
  flex: 1;
  letter-spacing: 1px;
  padding: 5px;
  border: 0.5px solid #95a5a6;
  border-radius: 5px;
  margin: 5px;
}
.form-class {
  width: auto;
  text-align: left;
}
.form-class span {
  display: inline-block;

  margin-left: 5px;
  margin-right: 5px;
  letter-spacing: 0.2em;
}
.form-class input {
  width: 77%;
  max-width: 80%;
}
.title {
  margin: 5px 0 0 5px;
  letter-spacing: 0.2em;
}
</style>
