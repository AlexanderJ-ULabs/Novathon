
//var notificationCount = 0;


//$(function () {
//    $('#LicenseMessage').hide();
//    CheckLicenseValidity();

//});


//$(function () {
//    $(".modal").draggable({
//        handle: ".modal-header"
//    });

//});

//$('.notificationBlock').on('click', function() {


//    $('.notificationCount').hide();

//});
//$(function () {
//    if (window.location.hash == '#ComputerNotification') {
//        $('html,body').animate({
//                scrollTop: $("#computerTable").offset().top
//            },
//            2000);
//    }
//    if (window.location.hash == '#SoftwareNotification') {
//        $('html,body').animate({
//                scrollTop: $("#softwareSection").offset().top
//            },
//            2000);
//    }
    
//});


//$(function() {
//    $('.selectpicker').selectpicker({
//        iconBase: 'fa fa-check',
//        tickIcon: ''
//    });
//});
//$(function () {
   
//    $('ul.nav li a').each(function () {
//        if ($(this).prop('href') == window.location.href) {


//            $(this).addClass('active'); $(this).parents('li').addClass('active');
//        }
//    });
//});



//$(function () {
//    $(document).on('keyup', "#searchbox", function () {
//        $('#GkSearchableTable').DataTable()
//            .search($("#searchbox").val())
//            .draw();
//    });
//});




////$(function () {
   
////    var today = new Date();
////    $('#StartDate').datetimepicker({
////        useCurrent: false,
////        format: 'MM/DD/YYYY HH:mm:ss'

////    });
////    $('#EndDate').datetimepicker({
////        useCurrent: false,
////        format: 'MM/DD/YYYY HH:mm:ss'
////    });

////    $("#StartDate").on("dp.change", function (e) {

////        $('#EndDate').data("DateTimePicker").minDate(e.date);
////        if (Date.parse($('#StartDate').val()) > Date.parse(today)) {
////           NiceAlert.showErrorNotification('top', 'center', 'Start date cannot be in future');
////            $('#StartDate').data("DateTimePicker").clear();
////        }
////        if ($('#StartDate').val() !== "") {
////            $(".form-group:has(#StartDate)").removeClass('is-empty');
////        }
////        else {
////            $(".form-group:has(#StartDate)").addClass('is-empty');
////        }

////    });
////    $("#EndDate").on("dp.change", function (e) {

////        $('#StartDate').data("DateTimePicker").maxDate(e.date);


////        if ($('#EndDate').val() !== "") {
////            $(".form-group:has(#EndDate)").removeClass('is-empty');
////        }
////        else {
////            $(".form-group:has(#EndDate)").addClass('is-empty');
////        }

////    });

////});

//// pop up settings
////type = ['','info','success','warning','danger'];


////NiceAlert = {
////    showSuccessNotification: function(from, align, msg) {


////        $.notify({
////                icon: "<i class=\"fa fa-bell\" aria-hidden=\"true\"></i>",
////                message: msg

////            },
////            {
////                type: type[1],
////                z_index: 2000,
////                timer: 300,
////                placement: {
////                    from: from,
////                    align: align
////                }
////            });
////    },


////    showErrorNotification: function(from, align, msg) {


////        $.notify({
////            icon: "<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>",
////                message: msg

////            },
////            {
////                type: type[4],
////                z_index: 2000,
////                timer: 300,
////                placement: {
////                    from: from,
////                    align: align
////                }
////            });
////    }

////};


//// convert datetime from ISO to readable
////function convertDate(dt) {
////    var createdDate = new Date(dt);
////    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
////    var year = createdDate.getFullYear();
////    var month = months[createdDate.getMonth()];
////    var date = createdDate.getDate();
////    var hour = createdDate.getHours();
////    var min = createdDate.getMinutes();
////    var sec = createdDate.getSeconds();
////    var time = month + '/' + date + '/ ' + year + ' ' + hour + ':' + min + ':' + sec;
////    var toConvert = new Date(time).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)(:[\d]{2})/, "$1$3");
////    return month + '/' + date + '/' + year + " " + toConvert;
////};

////function convertDateOnly(dt) {
////    var createdDate = new Date(dt);
////    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
////    var year = createdDate.getFullYear();
////    var month = months[createdDate.getMonth()];
////    var date = createdDate.getDate();
////    var hour = createdDate.getHours();
////    var min = createdDate.getMinutes();
////    var sec = createdDate.getSeconds();
////    var time = month + '/' + date + '/ ' + year + ' ' + hour + ':' + min + ':' + sec;

////    return month + '/' + date + '/' + year;
////};

////function convertTimeOnly(dt) {
////    var createdDate = new Date(dt);
////    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
////    var year = createdDate.getFullYear();
////    var month = months[createdDate.getMonth()];
////    var date = createdDate.getDate();
////    var hour = createdDate.getHours();
////    var min = createdDate.getMinutes();
////    var sec = createdDate.getSeconds();
////    var time = month + '/' + date + '/ ' + year + ' ' + hour + ':' + min + ':' + sec;
////    var toConvert = new Date(time).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)(:[\d]{2})/, "$1$3");
////    return toConvert;
////};

////// Gets computers with reset flag
////$(function() {

////    $.ajax({
////        url: "/dashboard/ResetRequestedComputers",
////        type: "GET",
////        contentType: "application/json;charset=utf-8",
////        dataType: "json",

////        success: function(result) {
////            if (result.length > 0) {

////                var notiHtml = '';

////                $.each(result,
////                    function(key, item) {

////                        if (item.resetRequested === true) {
////                            notificationCount++;
////                            notiHtml += '<li><a href="/#ComputerNotification">' +
////                                '<i class="fa fa-external-link fa-fw" aria-hidden="true"></i>  ' +
////                                item.machineName +
////                                "  needs reset" +
////                                '</a></li>';
////                        }

////                    });

////                if (notificationCount > 0) {
////                    $('.notificationList').show();
////                    $('.notificationCount').show();
////                    $('.notificationCount').text(notificationCount);
////                    $('.notificationList').append(notiHtml);

////                }

////            } else {
////                $('.notificationList').hide();
////                $('.notificationCount').hide();
////            }

////        },
////        error: function(errormessage) {

////            NiceAlert.showNotificationError('top', 'center', 'Error Occured, Please try again');

////        }
////    });
////});


////$(function () {

////    $.ajax({
////        url: "/Dashboard/GetLocalSofwareVersion",
////        type: "GET",
////        contentType: "application/json;charset=utf-8",
////        dataType: "json",

////        success: function (result) {

////            if (result.length > 0) {
////                var count = 0;
////                $.each(result,
////                    function (key, item) {
////                        if (item.softwareType === "Client" && item.architecture === "x86") {

////                            $('#clientVersion32').text(item.localVersion);

////                            $('#clientVersion32Link').attr('href', '' + item.webLink + '');
////                            if (item.alertAdmin === true) {
////                                $(' <a id="' +
////                                        item.id +
////                                        '" onclick="DownloadDismissed(\'' +
////                                        item.id +
////                                        '\')" class="btn btn-default  btn-sm pull-right"">Dismiss</a >')
////                                    .appendTo('.ClientModule32');
////                                count++;

////                            }
////                        }
////                        if (item.softwareType === "Client" && item.architecture === "x64") {

////                            $('#clientVersion64').text(item.localVersion);

////                            $('#clientVersion64Link').attr('href', '' + item.webLink + '');
////                            if (item.alertAdmin === true) {
////                                $(' <a id="' +
////                                        item.id +
////                                        '" onclick="DownloadDismissed(\'' +
////                                        item.id +
////                                        '\')" class="btn btn-default btn-sm pull-right">Dismiss</a >')
////                                    .appendTo('.ClientModule64');
////                                count++;
////                            }
////                        }
////                    });
////                if (count > 0) {

////                    $('.notificationCount').show();
////                    $('.notificationCount').text(notificationCount + count);
////                    $('.notificationList').append('<li><a href="/#SoftwareNotification"><i class="fa fa-external-link fa-fw" aria-hidden="true"></i>  ' +
////                        'Software Update</a></li>');
////                    $('.notificationList').show();
////                }
////            }
////            else {

////                $('#clientVersion32').text('Not Available');

////                $('#clientVersion32Link').attr('href', '#');

////                $('#clientVersion64').text('Not Available');

////                $('#clientVersion64Link').attr('href', '#');
////            }
////        },
////        error: function (errormessage) {
////            $('#clientVersion32').text('Not Available');

////            $('#clientVersion32Link').attr('href', '#');

////            $('#clientVersion64').text('Not Available');

////            $('#clientVersion64Link').attr('href', '#');
////        }
////    });

////});
//////Checks License Validity
////function CheckLicenseValidity() {

////    $.ajax({
////        url: "/GkAccounts/LicenseValidity",
////        typr: "GET",
////        async: true,
////        contentType: "application/json;charset=UTF-8",
////        dataType: "json",
////        success: function (license) {

////            $('#LicenseMessage').hide();

////            if (license.timeLeft < 31) {
////                if (license.timeLeft == 1) {

////                    $('#LicenseMessage').text("License expires in " + license.timeLeft + "  day");
////                    $('#LicenseMessage').show();
////                }
////                if (license.timeLeft == 0) {

////                    $('#LicenseMessage').text("License expires today");
////                    $('#LicenseMessage').show();
////                }
////                if (license.timeLeft > 1 && license.timeLeft < 31) {

////                    $('#LicenseMessage').text("License expires in " + license.timeLeft + "  days");
////                    $('#LicenseMessage').show();
////                }


////            }
////            else if (license.timeLeft == "No License") {
////                $('#LicenseMessage').text("No Valid License Found");
////                $('#LicenseMessage').show();

////            } else {

////                $('#LicenseMessage').hide();
////            }


////        },
////        error: function (errormessage) {
////            NiceAlert.showNotificationError('top', 'center', 'Error Occured, Please try again');
////            $('#LicenseMessage').hide();
////        }
////    });
   
////}

////function IsBrowserOk() {
////    var isChromium = window.chrome,
////        winNav = window.navigator,
////        vendorName = winNav.vendor,
////        isOpera = winNav.userAgent.indexOf("OPR") > -1,
////        isIEedge = winNav.userAgent.indexOf("Edge") > -1,
////        isIOSChrome = winNav.userAgent.match("CriOS");

////    if (isIOSChrome) {
////        return true;
////    } else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
////        return true;
////    } else {
////        return false;
////    }
////}
