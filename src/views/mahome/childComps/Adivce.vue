<template>
  <div>
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class=".nav-center">资讯</div>
    </nav-bar>
    <div class="document">
      <p>
        水电构造属于隐蔽工程，埋藏在墙体内的管线一般不会无端损坏，问题主要出现在外部构造与设备上,维修的主要内容是更换水阀门、软管与开关插座面板.
      </p>
      <p>
        (1)更换水阀门与软管
        水阀门与软管是外露的主要水路构件，水阀门主要包括普通水龙头、混水阀、三角阀三种，软管则包括钢丝软管和不锈钢波纹管两种,
        这些构件使用频率过高或过低都会造成不同程度的损坏，经常使用会造成构件松动，很少使用又会造成内部橡胶老化，两种情况都会导致漏水。更换水阀门与软管比较简单，关键在于购买优质且型号相符的新产品，且更换时理清操作顺序即可。首先，关闭入户水管总阀门，将水管中的余水排尽，使用扳手将损坏的水阀门或软管向逆时针方向旋扭下来。
        然后，对照相应尺寸购买新的产品，水阀门的螺口要使用专用生料带将其缠绕紧密。最后，使用扳手将水龙头向正时针方向拧紧扶正。如果住宅小区的供水水压长期高低不均，还会造成软管破裂，如果更换频繁则应该考虑使用不锈钢波纹管，成本虽高，但是更加坚固耐用。
      </p>

      <p>
        (2)更换开关插座面板家装电线一般埋在墙体或吊顶内，加上空气开关的保护，一般情况下是不会断裂和烧毁的，如果发生故障，大多缘于开关插座面板的磨损。更换开关插座面板要注意安全，不能带电操作,一定要将入户电箱中的空气开关关闭。
        首先，更换电器灯头或插头，仔细检查开关插座面板，确认已经损坏后关闭该线路上的空气开关，并用试电笔检测确认无电。然后，使用平头螺丝刀将面板拆卸下来。使用
        字头螺丝刀将基层板拆卸下来，
        松开电线插口。接着，使用平头螺丝刀将坏的开关插座模块用力撬出，注意不要损坏基层板上的卡槽，将新模块安装上去。
        最后，将零线、火线分别固定到新模块的插孔内，将电线还原至暗盒内，安装还原即可。如果没有十足把握。可以在安装面板之前，打开空气开关通电检测，无任何问题后再安装面板。经过多次检测，如果断定是埋藏在墙体内的线路发生故障，也可以分为两种情况分别修理。
        1)更换电线。同时拆除开关插座面板内的线头和该线另一端接头，从面板这头将电线用力向外拉，如果能拉动则说明该线管内比较空。再将电线的另一端绑上新电线，从这端用力向外拉，可以将整条损坏的电线抽出，同时将绑定的新电线置入线管内，这样就完成了电线的整体更换。
        这种方法适用于穿接硬质PVC管的单股电线，最好在装修时预埋金属穿线管，如果中途转折过多，则很难将电线拉出，造成维修困难。
        2)并联电线。将损坏的线路并联到正常的线路上，让一个开关控制两个灯具或电器，或让一条线路分出两个插座。
        但是要注意，不能超负荷连接，避免再次损坏。普通1．5mm2的电线一般只能负荷l500W以下的电器，2．5mm2的电线不要超过2500W，至于空调线路还是应该单独分列，不能与其他电器共用。
      </p>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Adivce",
  components: {
    NavBar
  },
  methods: {
    navBack() {
      this.$router.replace("/home");
      this.$store.commit("showMainBar");
    }
  }
};
</script>
<style scoped>
.nav-left {
  margin: 0;
  height: 44px;
  line-height: 44px;
  text-align: left;
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}
.document {
  margin: 14px;
  margin-top: 55px;
}
p {
  font: 14px "微软雅黑";
  text-indent: 2em;
  line-height: 2em;
}
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
}
.nav-left {
  margin: 0;
  height: 44px;
  line-height: 44px;
  text-align: left;
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}
</style>
