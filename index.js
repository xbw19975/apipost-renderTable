function index(data) {
  this.data = data.data
  this.init = function () {
    let that = this
    that.templateInitKey(that.data)
    that.proxyDom();
  }
  this.template = function (data) {
    $('.response_editor').html(JSON.stringify(this.data))
  }.bind(this)
  this.templateInitKey = function (data) {
    Object.keys(data).forEach(item => {
      if (typeof data[item] !== 'object') {
        $('#container').append(`
              <tr>
        <td>+</td>
        <td>${item}</td>
        <td>${typeof data[item]}</td>
        <td>生成规则</td>
        <td><input v-model=${item} type='text' value=${data[item]}></td>
      </tr>
           `)
      } else {
        $('#container').append(`
              <tr>
        <td>+</td>
        <td>${item}</td>
        <td>${Array.isArray(data[item])?'Array':data[item]}</td>
        <td>生成规则</td>
        <td><input v-model=${item} type='text'></td>
      </tr>
           `)
      }
    })
  }
  this.proxyDom = function () {
    let that = this
    Array.from(document.getElementsByTagName("input"))
      .filter(item => {
        return item.getAttribute("v-model")
      })
      .forEach(item => {
        let name = item.getAttribute("v-model");
        item.value = that.data[name];
        item.oninput = function () {
          that.data[name] = this.value;
        }
      })
    that.template(that.data)
  }
  this.init()

}
let data = new Proxy({
  "code": 200,
  "result": [{
      "menu_id": "001",
      "pid": "000",
      "name": "系统管理",
      "children": [{
          "menu_id": "002",
          "pid": "001",
          "name": "菜单管理",
          "children": null
        },
        {
          "menu_id": "003",
          "pid": "001",
          "name": "配置管理",
          "children": [{
            "menu_id": "005",
            "pid": "003",
            "name": "规则列表",
            "children": null
          }]
        }
      ]
    },
    {
      "menu_id": "006",
      "pid": "000",
      "name": "业务受理",
      "children": [{
        "menu_id": "007",
        "pid": "006",
        "name": "移动故障单录入",
        "children": null
      }]
    }
  ]
}, {
  set(obj, name, value) {
    obj[name] = value;
    indexs.proxyDom();

  }
})
let indexs = new index({
  data: data
})