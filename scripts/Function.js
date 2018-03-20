function JSBinding(Sch) {
  $('.Break').click(function() {
    $(this).toggleClass('Selected', 2000)
  })
  $('.Arrange').click(function() {
    Ara()

  })

  $('td.date').hover(function() {
    $(this).parent().css('line-height', '30px').css('background', '#EFEFEF')
    if ($('.Break.Selected').length > 0)
      $(this).addClass('Hover')
  }, function() {
    $(this).parent().css('line-height', '20px').css('background', 'white')
    $(this).removeClass('Hover')
  }).click(function() {
    if ($('.Break.Selected').length > 0)
      $(this).html(($(this).html() == '@') ? '' : '@')
  })
  console.log(Emp)
}

function Ara() {
  $('tr').each(function() {
      if(parseInt(  $(this).attr('data-r'))>=2){


      }
  })
}


function InitializeArray(Emp) {
  Sch = Array((2 + Emp.length + 4)) //2 name+28 d+ 4 Count
  for (var i = 0; i < Sch.length; i++)
    Sch[i] = Array(33)
}

function Emp_Assemble(Emp) {
  /**
   *  get Previous  cycle  the last sch_type
   */
  //random
  for (var i = 0; i < Emp.Length; i++) {
    var n = Math.floor(Math.random() * (3 - 1 + 1)) + minNum;
    Emp[i].previous = String(n);
  }
  return Emp
}

function Sch_Assemble(Emp) {
  //console.log( start_date.getDate())
  Sch[0][0] = 'Date'
  start_date.setDate(4)
  for (var i = 0; i < 28; i++) {
    Sch[0][i + 1] = start_date.getDate()
    start_date.setDate((start_date.getDate() + 1))
  }
  //先標出例假
  //從avoid 多的人先排
  /**員工資料轉成行事曆class
   * 1.確認前次最後一期 是否為2次以上 否持續 是可老慮換班 >註記
   * 2.
   * 結算時數人力
   */
  innerHtml += '<table class="table table-bordered"><thead><tr><td>20180304~20180328<td></tr></thead><tbody>'
  //Emp = []
  for (var i = 0; i < Sch.length; i++) {
    innerHtml += '<tr Data-R_="' + i + '">'
    for (var j = 0; j < Sch[i].length; j++) {
      if (i == 0)
        innerHtml += (j == 0) ? '<td>date</td>' : '<td>' + Sch[i][j] + '</td>'
      else {
        //innerHtml += (j == 0 && i > 1 ) ? '<td>'+Emp[i-2].Name +'</td>' : innerHtml += '<td>"1"</td>'
        if (j == 0 && i > 1 && i < (Emp.length + 2)) {
          console.log(Emp)
          innerHtml += '<td>' + Emp[i - 2].Name + '</td>'
        } else innerHtml += '<td class="date"></td>'
      }
    }
    innerHtml += '</tr>'
  }
  //Sch.Get
  innerHtml += '</tbody></table>'
  /*
  var s = new EmpSchedule(Sch);
  s.test_cal();*/
}

function Verify(Sch) {
  return true;
}

function Template() {
  $('.container .table-container').html(innerHtml);
}
