export const hourTopOption = {
  title: {
    text: "24小时新增确诊国家TOP6",
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: string | any[]) {
      var relVal = params[0].name;
      for (var i = 0; i < params.length; i++) {
        relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '万'
      }
      return relVal
    }
  },
  xAxis: {
    type: 'category',
    data: ['美国', '巴西', '印度', '阿根廷', '中国', '土耳其', '法国']
  },
  yAxis: {
    type: 'value',
    axisLabel: {  
      show: true,  
      interval: 'auto',  
      formatter: '{value}万'  
    },  
    show: true  
  },
  series: [
    {
      name: "确诊人数",
      data: [
        120,
        200,
        // {
        //   value: 200,
        //   itemStyle: {
        //     color: ''
        //   }
        // },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
    }
  ]
};

export const confirmedOption =  {
  title: {
    text: "各州累计确诊人数",
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '2',
    padding: [8, 60, 0, 20],
    x: "right"
  },
  series: [
    {
      name: '各州累计确诊人数',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '北美洲' },
        { value: 735, name: '南美洲' },
        { value: 580, name: '亚洲' },
        { value: 484, name: '欧洲' },
        { value: 300, name: '非洲' },
        { value: 300, name: '大洋洲' }
      ]
    }
  ]
};