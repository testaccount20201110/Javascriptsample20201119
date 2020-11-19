$(function(){
    var setArea = $('#loadarea');
    $.ajax({
        url: 'dist/js/include.json',
        dataType: 'json',
        success : function(data){
            var dataLengh = data.length;
            for (var i=0; i<dataLengh; i++) {
                $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
            }
        }
    });

    $("#sorting-clear").on('click',function(){
        setArea.empty();

        $.ajax({
            url: 'dist/js/include.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length;
                for (var i=0; i<dataLengh; i++) {
                    $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                }
            }
        });
    });

    $("#sorting-name").on('click',function(){
        setArea.empty();

        $.ajax({
            url: 'dist/js/include.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length;

                data.sort(function(val1, val2) {
                    return ( val1.lastKana > val2.lastKana ? 1 : -1);
                });

                for (var i=0; i<dataLengh; i++) {
                    $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                }
            }
        });
    });

    $("#sorting-hireday").on('click',function(){
        setArea.empty();

        $.ajax({
            url: 'dist/js/include.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length;

                data.sort(function(val1, val2) {
                    return ( val1.hireday > val2.hireday ? 1 : -1);
                });

                for (var i=0; i<dataLengh; i++) {
                    $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                }
            }
        });
    });

    $("#sorting-birthday").on('click',function(){
        setArea.empty();

        $.ajax({
            url: 'dist/js/include.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length;

                data.sort(function(val1, val2) {
                    return ( val1.birthday > val2.birthday ? 1 : -1);
                });

                for (var i=0; i<dataLengh; i++) {
                    $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                }
            }
        });
    });

    $("#query-division").on('change',function(){
        var val = $(this).val();
        setArea.empty();

        $.ajax({
            url: 'dist/js/include.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length;

                for (var i=0; i<dataLengh; i++) {
                    if(val == ""){
                        $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                    } else {
                        if (data[i].division == val){
                            $('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + data[i].lastName + data[i].firstName +'</div><div class="user-division">' + data[i].division + '</div><div class="user-position">' + data[i].position + '</div><div class="text-center"></div></div></li>').fadeIn(700).appendTo(setArea);
                        }
                    }
                }
            }
        });
    });
});