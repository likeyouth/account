<template>
  <div class="main">
    <el-row><h2>月消费统计</h2></el-row>
    <el-row>
      <el-col :span="12">
         <h1>每月收入支出情况</h1>
         <div id="myChart" style="width: 100%;height: 400px;"></div>
      </el-col>
      <el-col :span="12" style="padding-left: 20px;padding-top: 10px;">
        <h1>支出分类统计</h1>
        <el-select placeholder="请选择月份" v-model="value" style="margin-bottom: 10px;">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
        <div id="myPieChart" style="width: 100%;height: 340px;"></div>
      </el-col>
      </el>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'monthStatistic',
    data(){
      return{
        value: '',
        options: [{
                 value: '选项1',
                 label: '一月份'
               }, {
                 value: '选项2',
                 label: '2月份'
               }, {
                 value: '选项3',
                 label: '3月份'
               }, {
                 value: '选项4',
                 label: '4月份'
               }, {
                 value: '选项5',
                 label: '5月份'
               }, {
                 value: '选项6',
                 label: '6月份'
               }, {
                 value: '选项7',
                 label: '7月份'
               }, {
                 value: '选项8',
                 label: '8月份'
               }, {
                 value: '选项9',
                 label: '9月份'
               }, {
                 value: '选项10',
                 label: '10月份'
               }, {
                 value: '选项11',
                 label: '11月份'
               }, {
                 value: '选项12',
                 label: '12月份'
               }]

      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine(){
        //绘制柱状图
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let  option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['剩余', '支出', '收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            series : [
                {
                    name:'剩余',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name:'收入',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'支出',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
    }
      myChart.setOption(option);

      //绘制饼图
      let myPieChart = this.$echarts.init(document.getElementById('myPieChart'))
      let option2 ={
        tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['生活日用','教育缴费','娱乐消费','交通出行','物流业务']
            },
            series: [
                {
                    name:'支出类型',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'生活日用'},
                        {value:310, name:'教育缴费'},
                        {value:234, name:'娱乐消费'},
                        {value:135, name:'交通出行'},
                        {value:1548, name:'物流业务'}
                    ]
                }
            ]
      }
      myPieChart.setOption(option2)

      }
    }
  }
</script>

<style >
</style>
