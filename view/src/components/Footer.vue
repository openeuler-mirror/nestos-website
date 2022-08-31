<template>
  <div class="footer">
    <div class="atom">
      <span>{{  $t(`footer.atom_description`)  }}</span>
      <img src="~@/assets/footer/atom-pc.png" alt="atom_logo">
    </div>
    <div class="copyright">
      <div class="option">
        <a href="https://new.openeuler.org/zh/other/brand/" target="_blank" class="link">&emsp;&emsp; {{
           $t(`footer.Trademark`)  }}</a>
        <a href="https://www.openeuler.org/zh/other/privacy/" target="_blank" class="link">{{
           $t(`footer.Policy`)  }}</a>
        <a href="https://www.openeuler.org/zh/other/legal/" target="_blank" class="link">{{
           $t(`footer.Legal`)  }}</a>
        <a href="https://status.openeuler.org/" target="_blank" class="link">{{
           $t(`footer.Service`)  }}</a>
      </div>
      <div class="desc">
        {{  $t(`footer.copyright`)  }}
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~@/styles/color-pick.scss";

.footer {
  position: relative;
  bottom: 0;
  background-color: $foot-back;
  width: 100%;
  height: 200px;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .atom {
    width: 92%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid $foot-border;

    span {
      display: inline-block;
      font-size: 20px;
      text-align: center;
    }

    img {
      display: inline-block;
      width: 12%;
    }
  }

  .copyright {
    width: 100%;
    height: 49%;
    background: url(../assets/footer/footer-bg.png) no-repeat bottom;
    margin: 0 auto;
    font-size: 14px;

    .option {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .link {
        padding: 0 16px;
        text-align: center;
        color: #fff;
        border-right: 1px solid #fff;

        &:last-child {
          border: none;
        }
      }
    }

    .desc {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      padding-left: 1%;
    }
  }
}
</style>