$(document).ready(function () {
    //LoadDashboardCounts();
    //SetMonthYear();
    //LoadComputersUsage($("#txtComputersUsageDate").val());
    //LoadUsersUsage($("#txtUsersUsageDate").val());
  
    

//    // Trigger ajax calls on data change for Computer Usage and Users Usage
//    $(".date-pickerComputersUsage").datetimepicker({
//        useCurrent: true,
//        format: 'MM/YYYY'
//    }).on("dp.change", function (e) {

//        LoadComputersUsage($("#txtComputersUsageDate").val());
//    });

//    $(".date-pickerUsersUsage").datetimepicker({
//        useCurrent: true,
//        format: 'MM/YYYY'
//    }).on("dp.change", function (e) {

//        LoadUsersUsage($("#txtUsersUsageDate").val());
//    });
});

//function LoadDashboardCounts() {
//    var request = DataService.GetDashboardCounts();
//    request
//        .done(function (data) {
//            $(".computersCount").text(data.computerCount);
//            $(".usersCount").text(data.usersCount);
//            $(".lockscount").text(data.sessionLocksCount);
//            $(".unlocksCount").text(data.sessionUnlocksCount);
         
//        })
//        .fail(function (data) {

//            if (data.status == 400) {
//                NiceAlert.showErrorNotification('top', 'center',"Sorry, Server could not process the request");
//            }
//        });
//}

//function RealTimeEvents() {   
    
//    var request = DataService.GetRealTimeEvents();
//    var realTimeEvents = [];
//    request
//        .done(function(logs) {

//            $(".tblRealTimeEvents").DataTable().clear();

//            $.each(logs, function (i, log) {
//                realTimeEvents.push([log.dateTime, log.computerName, log.gateKeeperUserName, log.credentialUsed, log.deviceUsed, log.eventType]);
//            });
//            $(".tblRealTimeEvents").DataTable()
//                .rows.add(realTimeEvents)
//                .draw();
           

//            $(".tblRealTimeEvents td:contains(SessionUnlock)").closest("tr").css({ "color": "rgb(0, 146, 7)", "font-weight": "bold" });

//            $(".tblRealTimeEvents td:contains(SessionLogon)").closest("tr").css({ "color": "rgb(0, 146, 7)", "font-weight": "bold" });

//            $(".tblRealTimeEvents td:contains(SessionLock)").closest("tr").css({ "color": "rgb(255, 29, 24)", "font-weight": "bold" });
//            $(".tblRealTimeEvents td:contains(SessionLogoff)").closest("tr").css({ "color": "rgb(255, 29, 24)", "font-weight": "bold" });


//        })
//        .fail(function() {

//        });






//}
//function SetMonthYear (){
    
//    if ($('#txtComputersUsageDate').val() !== "") {
//        $(".form-group:has(#txtComputersUsageDate)").removeClass('is-empty');
//    }
//    else {
//        $(".form-group:has(#txtComputersUsageDate)").addClass('is-empty');
//    }
//    if ($('#txtUsersUsageDate').val() !== "") {
//        $(".form-group:has(#txtUsersUsageDate)").removeClass('is-empty');
//    }
//    else {
//        $(".form-group:has(#txtUsersUsageDate)").addClass('is-empty');
//    }

//    var dt = new Date();
//    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
//    var currentMonth = months[dt.getMonth()] + '/' + dt.getFullYear();

//    $("#txtComputersUsageDate").val(currentMonth);
//    $("#txtUsersUsageDate").val(currentMonth);
//};
//function LoadComputersUsage(monthYear) {

//    $('.tblComputerUsage').DataTable().clear();
   
//    var request = DataService.GetComputerUsage(monthYear);

//    request.done(function (data) {
//        var computerUsage = [];
//        $.each(data, function (i, item) {
//                computerUsage.push([item.machineName, item.numberOfUsers, item.locks, item.unlocks]);
//            });
//            $('.tblComputerUsage').DataTable()
//                .rows.add(computerUsage).draw();
//        })
//        .fail(function () {
//            //alert
//        });
   
//}
//function LoadUsersUsage(monthYear) {

//    $('.tblUsersUsage').DataTable().clear();
   
//    var request = DataService.GetCredentialUsage(monthYear);
//    request .done(function (data) {
//            var credentialsUsage = [];
//            $.each(data, function (i, item) {
//                credentialsUsage.push([item.gateKeeperUserName, item.numberOfComputers, item.locks, item.unlocks]);
//            });
//            $('.tblUsersUsage').DataTable()
//                .rows.add(credentialsUsage).draw();
           
//        })
//        .fail(function () {
//          //alert
//        });
//}
//function LoadWeeklyChart(selector,data,type) {
//    /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */
//  var chart=  $(selector).highcharts({
//        credits: {
//            enabled: false
//        },
//        chart: {
//            type: 'bar',         
                    
//        },
//        title: {
//            text: ''
//        },
//      xAxis: {
//          reversed: false,
//            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//        },
//        yAxis: {
//            title: {
//                text: ''
//            }            
//        },        
//        tooltip: {
//            valueSuffix: type
//        },
//        series: [           
//            {
//               name: type,
//                data: data
//            }
//        ]
//    });
   
//}
//function LoadSoftwareUpdate() {
//    var request = DataService.GetClientSoftware();
//    request.done(function (data) {
//        $('#clientVersion32Link').attr('href', '' + data.clientWebUrl32 + '');
//            $('#clientVersion64Link').attr('href', '' + data.clientWebUrl64 + '');
//            $('.clientVersion').text(data.webClientVersion);

//        })
//        .fail(function () {
//            //alert
//        });
   
//}

//$(function () {

//    var requestLocks = DataService.GetCurrentWeekSessions("SessionLock");
//    requestLocks
//        .done(function (data) {

//            LoadWeeklyChart('.Weekly-Locks-Chart', data, ' Locks');

//        })
//        .fail(function () {

//        });
//    var requestUnlocks = DataService.GetCurrentWeekSessions("SessionUnlock");
//    requestUnlocks
//        .done(function (data) {

//            LoadWeeklyChart('.Weekly-Unlocks-Chart', data, ' Unlocks');

//        })
//        .fail(function () {

//        });
//});
$(function () {
    //$('.tblComputersAlert').DataTable({
    //    responsive: true,
    //    destroy: true,
    //    "bFilter": false,
    //    dom: 'Bfrtip',
    //    "pageLength": 5,
    //    "ordering": true,
    //    "info": true,
    //    "processing": true,
    //    buttons: []
    //});
    $('#SignatureTable').DataTable({
        destroy: true,
        "bFilter": false,
        dom: 'Bfrtip',
        "pageLength": 5,
        "ordering": true,
        "info": true,
        "processing": true,
        buttons: []

    });
    $('#txtSignatureSearch').on('keyup', function () {
        //$("#SignatureTable").DataTable()

        //    .search($('#txtSignatureSearch').val())
        //    .draw();

        NiceAlert.showSuccess('top','center','hey')

    });
});
