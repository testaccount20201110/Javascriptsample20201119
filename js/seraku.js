//slide------------------------------------------------------------

$(function(){


//（１）ページの概念・初期ページを設定
var page=0;

//（２）イメージの数を最後のページ数として変数化
var lastPage =parseInt($("#graphic img").length-1);

//（３）最初に全部のイメージを一旦非表示にします
     $("#graphic img").css("display","none");

//（４）初期ページを表示
          $("#graphic img").eq(page).css("display","block");

//（５）ページ切換用、自作関数作成
function changePage(){
                         $("#graphic img").fadeOut(1000);
                         $("#graphic img").eq(page).fadeIn(1000);
};

//（６）～秒間隔でイメージ切換の発火設定
var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },5000);
}
//（７）～秒間隔でイメージ切換の停止設定
function stopTimer(){
clearInterval(Timer);
}

//（８）タイマースタート
startTimer();

/*オプションを足す場合はここへ--------------------------*/

    $("#change1 a").click(function() {

    //タイマー停止＆スタート（クリックした時点から～秒とする為）
    stopTimer(); 
    startTimer();
        if(page == 2){
            page = page - 2;
            changePage();
        }else if(page == 1){
            page --;
            changePage();
        }
    });

    $("#change2 a").click(function() {

    //タイマー停止＆スタート（クリックした時点から～秒とする為）
    stopTimer();
    startTimer();
        if(page == 2){
            page --;
            changePage();
        }else if(page == 0){
            page ++;
            changePage();
        }
    });

    $("#change3 a").click(function() {

    //タイマー停止＆スタート（クリックした時点から～秒とする為）
    stopTimer();
    startTimer();
        if(page == 0){
            page = page + 2;
            changePage();
        }else if(page == 1){
            page ++;
            changePage();
        }
    });
    
});

//---------------------------------------------------------------

$(function() {

//クリックしたときのファンクションをまとめて指定

    $('.tab li').click(function() {
        
        //.index()を使いクリックされたタブが何番目かを調べ、
        //indexという変数に代入します。
        var index = $('.tab li').index(this);
        
        //コンテンツを一度すべて非表示にし、
        $('.content li').css('display','none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.content li').eq(index).css('display','block');

        //一度タブについているクラスselectを消し、
        $('.tab li').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select')

    });

});

//textSize-------------------------------------------------------

function fontSize(x){
    
		var thisSize = x;
		if(thisSize == 'syou') {
			$('html').css('font-size', '90%');
		}else if(thisSize == 'tyuu') {
			$('html').css('font-size', '100%');
		}else if(thisSize == 'dai') {
			$('html').css('font-size', '110%');
		}
    console.log(x);
	}