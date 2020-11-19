$(function(){
  //必須項目チェック
  $(".required").blur(function(){
    if($(this).val() == ""){
        $(this).siblings('span.error_required').text("※入力必須項目です");
        $(this).addClass("errored");
    } else {
        $(this).siblings('span.error_required').text("");
        $(this).removeClass("errored");
    }
  });

  //文字数チェック
  $("[class*='max']").blur(function(){
      var count = $(this).val().length;
      var r=$(this).prop('className').match(/(?:^| )max([0-9]+)(?: |$)/);

      if(count > r[1]){
        $(this).siblings('span.error_num').text("※" + r[1] + "文字以内にしてください");
        $(this).addClass("errored");
    } else {
        $(this).siblings('span.error_num').text("");
        $(this).removeClass("errored");
    }
  });

  //ひらがな入力チェック
  $(".kana").blur(function(){
    if(!$(this).val().match(/^[ぁ-んー]*$/)){
        $(this).siblings('span.error_kana').text("※ひらがなで入力してください");
        $(this).addClass("errored");
    } else {
        $(this).siblings('span.error_kana').text("");
        $(this).removeClass("errored");
    }
  });

  //電話番号入力チェック
  $(".phone").blur(function(){
    if(!$(this).val().match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
        $(this).siblings('span.error_phone').text("※正しく入力してください");
        $(this).addClass("errored");
    } else {
        $(this).siblings('span.error_phone').text("");
        $(this).removeClass("errored");
    }
  });

  //メールアドレス入力チェック
  $(".email").blur(function(){
    if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
        $(this).siblings('span.error_email').text("※メールアドレスの形式で入力してください");
        $(this).addClass("errored");
    } else {
        $(this).siblings('span.error_email').text("");
        $(this).removeClass("errored");
    }
  });

  //送信時の必須項目入力チェック
  $("#add-user-form-submit").on('click',function(){
    $(".required").each(function(){
        if($(this).val() == ""){
            $(this).siblings('span.error_required').text("※入力必須項目です");
            $(this).addClass("errored");
        }
    });

    if($(".errored").length){
        $(this).addClass("errored");
        return false;
    } else {
        $(this).removeClass("errored");
    }
  });
});