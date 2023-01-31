<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="showList" @mouseleave="hideList">
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="" v-for="item in commodityList">{{ item }}</a>
      </nav>
      <!-- 三级联动 -->
      <transition name="sort">
        <div class="sort" v-show="show">
        <div class="all-sort-list2" @click="goSearch">
          <div
            class="item"
            v-for="item in categoryList"
            :key="item.categoryId"
            :class="{ 'item-hover': item.categoryId == currentIndex }"
            @mouseenter="mouseover(item.categoryId)"
            @mouseleave="currentIndex = -1"
          >
            <!-- 一级菜单 -->
            <h3>
              <a
                :data-categoryName="item.categoryName"
                :data-category1id="item.categoryId"
                >{{ item.categoryName }}</a
              >
            </h3>
            <!-- 二级菜单、三级菜单 -->
            <div
              class="item-list clearfix"
              v-show="item.categoryId == currentIndex"
            >
              <div
                class="subitem"
                v-for="item1 in item.categoryChild"
                :key="item1.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="item1.categoryName"
                      :data-category2id="item1.categoryId"
                      >{{ item1.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="item2 in item1.categoryChild"
                      :key="item2.categoryId"
                    >
                      <a
                        :data-categoryName="item2.categoryName"
                        :data-category3id="item2.categoryId"
                        >{{ item2.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { throttle } from "lodash";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  methods: {
    // 鼠标移入三级联动组件节流
    mouseover: throttle(function (index) {
      this.show = true
      this.currentIndex = index;
    }, 10),
    // 跳转到search页
    goSearch(event) {
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      if (categoryname) {
        const location = { name: "search" };
        const query = { categoryName: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        if(this.$route.params){
          location.query = query
          location.params = this.$route.params
          this.$router.push(location);
        }
      }
    },
    // 鼠标移入显示三级联动组件
    showList() {
      this.show = true;
    }, 
    hideList() {
      if (this.$route.name == "search") {
        this.currentIndex = -1
        this.show = false;
      }
    }
  },
  mounted() {
    if (this.$route.name == "search") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
      commodityList: (state) => state.home.commodityList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .item-hover {
          background-color: skyblue;
        }
      }
    }
    .sort-enter{
      height: 0px;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .2s linear;
    }
  }
}
a {
  cursor: pointer;
}
</style>
