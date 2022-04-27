<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div ref="customerChart" id="customerChart"></div>
        <chartOne />
      </el-col>
      <el-col :span="16">
        <span class="date">{{ countDown }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <p>可以加我微信，一起沟通学习</p>
        <img src="./1.jpg" alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
const countDown = ref(null)
const customerChart = ref(null)
const myEchart = () => {
  let myChart = proxy.$echarts.init(proxy.$refs.customerChart)

  let options = {
    // backgroundColor: '#0D2753',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: ['张三', '李四', '王二', '小红', '小兰'],
      axisLine: {
        lineStyle: {
          color: 'rgba(66, 192, 255, .3)'
        }
      },
      axisLabel: {
        interval: 0,
        margin: 10,
        color: '#05D5FF',
        textStyle: {
          fontSize: 11
        },
        rotate: '45'
      },
      axisTick: {
        //刻度
        show: false
      }
    },
    yAxis: {
      axisLabel: {
        padding: [3, 0, 0, 0],
        formatter: '{value}',
        color: 'rgba(95, 187, 235, 1)',
        textStyle: {
          fontSize: 11
        }
      },
      axisTick: {
        show: true
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(66, 192, 255, .3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0)'
        }
      }
    },
    series: [
      {
        name: '成绩',
        type: 'bar',
        data: [80, 90, 85, 100, 70],
        barWidth: '10', //设置柱状图宽度
        itemStyle: {
          normal: {
            color: new proxy.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(5, 213, 255, 1)' // 0% 处的颜色
                },
                {
                  offset: 0.98,
                  color: 'rgba(5, 213, 255, 0)' // 100% 处的颜色
                }
              ],
              false
            ),
            shadowColor: 'rgba(5, 213, 255, 1)',
            shadowBlur: 4
          }
        },
        label: {
          normal: {
            show: true,
            lineHeight: 10,
            formatter: '{c}',
            position: 'top',
            textStyle: {
              color: '#fff',
              fontSize: 10
            }
          }
        }
      }
    ]
  }
  myChart.setOption(options)
}

const date = () => {
  countDown.value = proxy.$filters
    .dayjs()
    .locale('zh-cn')
    .format('YYYY-MM-DD dddd HH:mm:ss A')
  // 时间按照秒级进行实时变动
  let timer = null
  if (timer !== null) clearInterval(timer)
  timer = setInterval(() => {
    countDown.value = proxy.$filters
      .dayjs()
      .locale('zh-cn')
      .format('YYYY-MM-DD dddd HH:mm:ss A')
  }, 1000)
}

onMounted(() => {
  myEchart()
  date()
})
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
#customerChart {
  width: 500px;
  height: 400px;
}
.date {
  font-size: 24px;
  color: rgb(101, 119, 128);
  line-height: 60px;
  text-align: right;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
