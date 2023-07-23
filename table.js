window.onload = addRowHandlers();
window.onload = addRowHandlers_mouseOver();

function addRowHandlers() {
  var table = document.getElementById("tableId");//抓table
  if (!table)
    return;
  var rows = table.getElementsByTagName("tr");//collect tr
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = //event function
      function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          //var id = cell.id;
          //alert("id:" + id);
          var index = $("table tr").index(this);//count index
          //console.log(index-1);
          highLightModel(index - 1);

          return index - 1;//回傳row之index值
        };
      };
    currentRow.onclick = createClickHandler(currentRow);//點擊
    currentRow.onmouseover = createClickHandler(currentRow);//mouseover 

    var createMouseLeaveHandler =
      function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          //var id = cell.id;
          //alert("id:" + id);
          var index = $("table tr").index(this);//count index

          return index - 1;
        };
      };


  }
}


function addRowHandlers_mouseOver() {
  var table = document.getElementById("tableId");//抓table
  if (!table)
    return;
  var rows = table.getElementsByTagName("tr");//collect tr
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createMouseOverHandler = //event function
      function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          //var id = cell.id;
          //alert("id:" + id);
          var index = $("table tr").index(this);//count index
          //console.log(index-1);
          highLightModel(-1);
          return index - 1;//回傳row之index值
        };
      };
    currentRow.onmouseleave = createMouseOverHandler(currentRow);//點擊
  }
}


var temp = -1;
function showrow(index) {

  if (index == 0) {
    //clearRowsBgColor();
    //return;
  }
  var table = document.getElementById("tableId");//抓table
  var rows = table.getElementsByTagName("tr");
  if (index < 1) {
    clearRowsBgColor();

    return;
  }

  if (temp != index + 1) {
    clearRowsBgColor();
  }

  temp = index + 1;
  if (rows[index + 1]) {
    if (index + 1 == 30 && rows[index + 1]) {
      // console.log("index:", index);
      rows[index + 1].style.backgroundColor = "orange";
      // rows[index + 2].style.backgroundColor = "orange";
      // rows[index + 3].style.backgroundColor = "orange";
    }
    else {
      rows[index + 1].style.backgroundColor = "orange";
      // console.log("index:", index);
    }

  }


  //rows[i].style.backgroundColor="blue";
}

function clearRowsBgColor() {
  var table = document.getElementById("tableId");//抓table
  var rows = table.getElementsByTagName("tr");
  var i = -1;
  for (i = 0; i < rows.length; i++) {
    rows[i].style.backgroundColor = "white";
  }
}
