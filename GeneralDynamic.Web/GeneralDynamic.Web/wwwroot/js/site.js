
$(function() {

    GetNotificationsByUser();

});

$(function() {
   
    var countEle = $('.notification-count');
    countEle.on('click',function() {

        countEle.hide();

        // send request here to set seen tru
        var request = DataService.SetNotificationSeen();
        request
            .done(function () {
               
            })
            .fail(function (data) {
                //log alert user
            });

    });


});


// set the navigation to notification page
$(function () {
    switch (window.location.hash) {
        case '#JwtTokenRelated':
            $('html,body').animate({
                    scrollTop: $(".JwtTokenRelated").offset().top
                },
                2000);
        break;
       

        default:
          
    }
});













//Highlights  active page in the navigation bar

$(function () {
   
        
   

    $('ul.nav li a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
            $(this).parents('li').addClass('active');
        }
    });
});
$(function () {

    var today = new Date();
    $('#StartDate').datetimepicker({
        useCurrent: false,
        format: 'MM/DD/YYYY HH:mm:ss'

    });
    $('#EndDate').datetimepicker({
        useCurrent: false,
        format: 'MM/DD/YYYY HH:mm:ss'
    });

    $("#StartDate").on("dp.change", function (e) {

        $('#EndDate').data("DateTimePicker").minDate(e.date);
        if (Date.parse($('#StartDate').val()) > Date.parse(today)) {
            NiceAlert.showErrorNotification('top', 'center', 'Start date cannot be in future');
            $('#StartDate').data("DateTimePicker").clear();
        }
        if ($('#StartDate').val() !== "") {
            $(".form-group:has(#StartDate)").removeClass('is-empty');
        }
        else {
            $(".form-group:has(#StartDate)").addClass('is-empty');
        }

    });
    $("#EndDate").on("dp.change", function (e) {

        $('#StartDate').data("DateTimePicker").maxDate(e.date);


        if ($('#EndDate').val() !== "") {
            $(".form-group:has(#EndDate)").removeClass('is-empty');
        }
        else {
            $(".form-group:has(#EndDate)").addClass('is-empty');
        }

    });

});
// pop up settings
type = ['', 'info', 'success', 'warning', 'danger'];


NiceAlert = {
    showSuccess: function (from, align, msg) {


        $.notify({
                icon: "<i class=\"fa fa-bell\" aria-hidden=\"true\"></i>",
                message: msg

            },
            {
                type: type[1],
                z_index: 2000,
                timer: 300,
                placement: {
                    from: from,
                    align: align
                }
            });
    },


    showError: function (from, align, msg) {


        $.notify({
                icon: "<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>",
                message: msg

            },
            {
                type: type[4],
                z_index: 2000,
                timer: 300,
                placement: {
                    from: from,
                    align: align
                }
            });
    }

};


// convert datetime from ISO to readable
function convertDate(dt) {
    var createdDate = new Date(dt);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = createdDate.getFullYear();
    var month = months[createdDate.getMonth()];
    var date = createdDate.getDate();
    var hour = createdDate.getHours();
    var min = createdDate.getMinutes();
    var sec = createdDate.getSeconds();
    var time = month + '/' + date + '/ ' + year + ' ' + hour + ':' + min + ':' + sec;
    var toConvert = new Date(time).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)(:[\d]{2})/, "$1$3");
    return month + '/' + date + '/' + year + " " + toConvert;
};



function GetNotificationsByUser() {

      
    var countEle = $('.notification-count');
    var listEle = $('.notification-list');
    countEle.text('');
    listEle.html('');
    var request = DataService.GetNotificationsByUser();
    request
        .done(function (notifications) {
            if (notifications.length > 0) {
                var notiHtml = '';
                var counter = 0;
                $.each(notifications, function (i, notification) {
                    notiHtml += '<li><a href="/#' + notification.notificationType+'"><i class="fa fa-caret-right  fa-fw"></i> ' + notification.message + ' </a></li>';
                    if (notification.seen == false) {
                        counter++;
                    }
                });
                if (counter > 0) {
                    countEle.show();
                    countEle.text(counter);
                }
                listEle.append(notiHtml);
            } else {
                listEle.hide();
            }

           
        })
        .fail(function (error) {
            //alert
            listEle.hide();
        });

  
}
