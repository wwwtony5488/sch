
//test slack=git



function JSBinding(Sch_E, Emp) {
    $('.Emp-Config > span').click(function () {
        $(this).toggleClass('unfold');
    })


    $('.mark-type').click(function () {
        $(this).toggleClass('Selected').siblings().removeClass('Selected');
    })
    $('.Arrange').click(function () {
        Arrange(Sch_E, Emp)
    })
    $('td.date').mousedown(function () {
        $(this).addClass('Selected').addClass('Changed');
        $('td.date').hover(function () {
            if ($('.mark-type.Selected').length > 0)
                $(this).addClass('Selected').addClass('Changed');;
            //$(this).html(($('.mark-type.Selected').html() == '休') ? '' : $('.mark-type.Selected').html())
        })
    }).mouseup(function () {
        $('td.date').unbind('mouseenter').unbind('mouseleave')
        if ($('td.Selected').length > 0) {
            var c = false
            if ($('td.Selected').length > 1)
                c = confirm('確認此次的範圍編輯?')
            if (c || $('td.Selected').length == 1)
                //$('td.Selected').html(($('.mark-type.Selected').html() == '休') ? '' : $('.mark-type.Selected').html())
                $('.mark-type.Selected').html())
    $('td.Selected').removeClass('Selected')
    Renew(Sch_E, Emp.length);
}
    }).dblclick(function () {
    $(this).addClass('Changed')
    if ($('.mark-type.Selected').length > 0)
        return;
    var tddate = $(this)
    tddate.html(' <input  class="" type="text"  value="' + $(this).text() + '"/>')
    $('td input').focus();
    $('td input').blur(function () {
        tddate.html($(this).val());

        Renew(Sch_E, Emp.length);
    })

})
}
function Arrange(Sch_E, Emp) {
    //以前次最後一筆  填滿空格
    console.log(Sch_E.sch)
    var El = Emp.length
    for (var i = 0; i < El; i++)
        for (var j = 0; j < 28; j++)
            Sch_E.sch[2 + i][j + 1] = Emp[i].previous;
    $('tr').each(function () {
        if (parseInt($(this).attr('data-r')) >= 2) {
            for (var i = 0; i < 28; i++) {
                if ($(this).find('td').eq(i + 1).html() != '')
                    Sch_E.sch[$('tr').index($(this)) - 1][i + 1] = $(this).find('td').eq(i + 1).html();
            }
        }
    })
    console.log(Sch_E)


    //Sch_E= new EmpSchedule(Sch);
    //Sch.sum_Date(28, 14);

    console.log(Sch_E)
    Renew(Sch_E, El);
}
function Renew(Sch_E, El) {
    //Bind Sch

    for (var i = 0; i < El + 4; i++)
        for (var j = 0; j < (32); j++) {
            var seltor = $('table tr ').eq(i + 3).find('td').eq(j + 1)
            if (seltor.hasClass('Changed'))
                Sch_E.sch[i + 2][j + 1] = seltor.text();
        }
    //ReCalculate
    Sch_E.sum_Date(28, El);
    Sch_E.sum_AllHours(28, El);

    //Renew(Sch_E, El);


    //Display Sch
    for (var i = 0; i < El + 4; i++)
        for (var j = 0; j < (32); j++)
            $('table tr ').eq(i + 3).find('td').eq(j + 1).text(Sch_E.sch[i + 2][j + 1]);
    //Alert 
    $('.Changed').removeClass('Changed');
    console.log('RN');
}

function InitializeArray(Emp) {
    var Sch = Array((2 + Emp.length + 4)) //2 name+28 d+ 4 Count
    for (var i = 0; i < Sch.length; i++)
        Sch[i] = Array(33)
    return Sch;
}

function Emp_Assemble(Emp) {

    for (var k = 0; k < Emp.length; k++) {
        var n = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        Emp[k].previous = String(n);
    }
    return Emp
}

function Template_Assemble(Emp, Sch) {
    //console.log( start_date.getDate())
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
        innerHtml += '<tr Data-R="' + i + '">'
        for (var j = 0; j < Sch[i].length; j++) {
            if (i == 0) {
                if (j == 0)
                    innerHtml += '<td>date</td>'
                else if (j < 29)
                    innerHtml += '<td>' + Sch[i][j] + '</td>'
                else {
                    innerHtml += '<td>例假</td><td>休假</td><td>工時</td><td>國假</td>';
                    break;
                }
            }
            else if (i == 1) {
                innerHtml += '<td></td>'
                for (var k = 0; k < 4; k++)
                    innerHtml += '<td class="weekend">日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td class="weekend">六</td>';
                break;
            }
            else {
                //innerHtml += (j == 0 && i > 1 ) ? '<td>'+Emp[i-2].Name +'</td>' : innerHtml += '<td>"1"</td>'
                if (j == 0) {
                    if (i > 1 && i < (Emp.length + 2))
                        innerHtml += '<td>' + Emp[i - 2].Name + '</td>'
                    if (i == Emp.length + 2)
                        innerHtml += '<td>總人力</td>'; if (i == Emp.length + 3)
                        innerHtml += '<td>人力1</td>'; if (i == Emp.length + 4)
                        innerHtml += '<td>總人力2</td>'; if (i == Emp.length + 5)
                        innerHtml += '<td>總人力3</td>'
                }


                else innerHtml += '<td class="date"></td>'
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


function Emp_Set() {

}
function Emp_Template(Emp, PA, NC) {
    console.log(Emp)
    for (let i = 0; i < Emp.length; i++) {
        let iH = '<div><span>' + Emp[i].Name + '</span><div>群組: ' + NC + ' , 偏好:' + PA + ' , 避開:' + PA + '</div></div>';
        $('.Emp-Config .list  ').append(iH)
        $('.Emp-Config .list  > div').eq(i).find('select').eq(0).find('option').each(function () {
            if ($(this).text() == Emp[i].Class)
                $(this).attr('selected', 'selected')
        })
        $('.Emp-Config .list  > div').eq(i).find('select').eq(1).find('option').each(function () {
            if ($(this).text() == Emp[i].Prefer)
                $(this).attr('selected', 'selected')
        })
        $('.Emp-Config .list  > div').eq(i).find('select').eq(2).find('option').each(function () {
            if ($(this).text() == Emp[i].Avoid)
                $(this).attr('selected', 'selected')
        })

        //Emp[i].Name
    }
}


function Verify(Sch) {
    return true;
}

function Template() {
    $('.container .table-container').html(innerHtml);
}
