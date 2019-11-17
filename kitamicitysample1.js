//本日、カレンダーの開始日、終了日と、曜日のテキストを用意します
var date_now = new Date();
var date_start = new Date(date_now.getFullYear(), date_now.getMonth(), 1);
var date_end = new Date(date_now.getFullYear(), date_now.getMonth(), 1);
var days = ["日", "月", "火", "水", "木", "金", "土"];
date_end.setMonth(date_end.getMonth()+12);

document.addEventListener("DOMContentLoaded", function() {

  //FullCalendarを生成します
  var calendar = new FullCalendar.Calendar(document.getElementById("calendar"), {

    //プラグインを読み込みます
    plugins: ["dayGrid"],

    //ヘッダー内の配置を、左に前月ボタン、中央にタイトル、右に次月ボタンに設定します
    header: {
      left: "prev",
      center: "title",
      right:" next"
    },

    //ボタンのテキストを書き換えます
    buttonText: {
      prev: "前の月",
      next: "次の月"
    },

    //デフォルト日を本日に設定します
    defaultDate: date_now,

    //有効期間を当月1日から12ヶ月後（1年後）に設定します。
		validRange: {
      start: date_start,
      end: date_end
    },


    //イベント情報をJSONファイルから読み込みます
		events: 'https://gist.githubusercontent.com/SWED1120/be72d1653c4faf679bdaadb7a10be7dc/raw/a782d44bfd083db19733be4fe0126e9473bea97f/events.json',
    //タイトルを書き換えます（2019年8月）
    titleFormat: function(obj) {
      return obj.date.year+"年"+(obj.date.month+1)+"月";
    },

    //曜日のテキストを書き換えます（日〜土）
    columnHeaderText: function(obj) {
      return days[obj.getDay()];
    },

    //イベントのクリック時の処理を加えます
    eventClick: function(obj) {
      alert(obj.event.title);
    }
  });
  calendar.render();
});



var headerHeight = $('.container').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
    return false;
});