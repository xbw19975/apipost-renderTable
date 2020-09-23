  var showParamsChecked = document.getElementById("showParams");
  var params = document.getElementById("params");
  var sendHeader = document.getElementById("sendHeader");
  var showSendHeaderChecked = document.getElementById("showSendHeader");


  function showParams() {
    if (showParamsChecked.checked) {
      params.style.display = "block";
    } else {
      params.style.display = "none";
    }
  }

  function showSendHeader() {
    if (showSendHeaderChecked.checked) {
      sendHeader.style.display = "block";
    } else {
      sendHeader.style.display = "none";
    }
  }

  function sendRequest() {
    var requestType = document.getElementById("requestType");
    var index = requestType.selectedIndex;
    var type = requestType.options[index].value;
    var inputUrl = document.getElementById("input_1");
    var url = inputUrl.value;
    let arr = [];
    let arr1 = [];
    let data = {};
    let headers = {};
    $("#paramsTable input").each(function () {
      arr.push($(this).val());
    });
    for (let i = 0; i < arr.length; i = i + 2) {
      data[arr[i]] = arr[i + 1];
    }
    $("#paramsHeader input").each(function () {
      arr1.push($(this).val());
    });
    for (let i = 0; i < arr1.length; i = i + 2) {
      headers[arr1[i]] = arr1[i + 1];
    }
    var callback = new Function();
    ajax(type, url, data, headers);
  }

  function addParams() {
    var paramsTable = document.getElementById("paramsTable");
    var li = document.createElement("li");
    li.innerHTML =
      "<input type='text' value='参数名称'><input type='text' value='参数数值'><button>删除参数</button>";
    paramsTable.appendChild(li);
  }

  function addHeader() {
    var paramsTable = document.getElementById("paramsHeader");
    var li = document.createElement("li");
    li.innerHTML =
      "<input type='text' value='参数名称'><input type='text' value='参数数值'><button>删除参数</button>";
    paramsTable.appendChild(li);
  }
  //tab 切换
  mainMethod.tabList();