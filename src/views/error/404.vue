<template>
  <el-row class="not-found" type="flex" justify="center" align="middle">
    <el-col :span="6">
      <svg
        class="icon-wrap"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <path
            id="Polygon-1"
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            stroke="#007FB2"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-2"
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            stroke="#EF4A5B"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-3"
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            stroke="#795D9C"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-4"
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            stroke="#F2773F"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-5"
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            stroke="#36B455"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
        </g>
      </svg>
    </el-col>
    <el-col :span="6" :offset="2">
      <div class="text-wrap">
        <h3 class="title">404</h3>
        <p class="desc">真是抱歉哦，找不到页面</p>
      </div>
      <div class="btn-wrap">
        <el-button type="primary" @click="goBackHandler">
          返回上一页
        </el-button>
        <el-button type="primary" @click="goHomeHandler"> 返回首页 </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBackHandler = () => {
  router.back()
}

const goHomeHandler = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.not-found {
  height: 60vh;
  .text-wrap {
    .title {
      font-size: 60px;
    }
    .desc {
      line-height: 2;
      font-size: 15px;
      font-weight: bold;
    }
  }
  .btn-wrap {
    margin-top: 20px;
  }
}
#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  animation-delay: 0.2s;
}
#Polygon-3 {
  animation-delay: 0.4s;
}
#Polygon-4 {
  animation-delay: 0.6s;
}
#Polygon-5 {
  animation-delay: 0.8s;
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}
</style>
