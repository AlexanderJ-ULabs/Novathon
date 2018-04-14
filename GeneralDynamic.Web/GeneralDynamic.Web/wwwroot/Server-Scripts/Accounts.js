$(document).ready(function () {
    GetAllServerUsers();
 
    
    $('#RegisterServerUser').on('click',
        function (event) {
            event.preventDefault();

            var form = $("#UserRegistrationForm");           
            if (!form.valid()) {
                userRegistrationvalidator.focusInvalid();
                return false;
            }
            var userDataArray = form.serializeArray();
                var user = {};
                $.each(userDataArray, function () {
                    user[this.name] = this.value || '';
                });
               var request = DataService.AddNewUser(JSON.stringify(user));

                    request
                        .done(function (user) {
                            NiceAlert.showSuccess('top', 'center', 'User Added Successfully');
                            $('.tblServerUsers').DataTable()
                                .row.add([user.userName, user.email,
                                    user.role, user.fullName, user.addedOn, user.phoneNumber,
                                    '<a id="'+user.id+'"  href="#link" onclick="DeleteUser(\'' + user.id + '\')"><i style="color:red" ' +
                                    'title="Delete User" class="fa fa-trash-o" aria-hidden="true"></i></a> '])
                                .draw(false);
                            ClearRegisterModel();
                        })
                        .fail(function (error) {
                            //alert
                            NiceAlert.showError('top', 'center', error.responseText);
                        });
        });


// Register form Validator
    var userRegistrationvalidator = $('#UserRegistrationForm').validate({

        rules: {
            Email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            FullName: "required",
            PhoneNumber: "required",
            Secret: "required",
            UserName: "required",
            Password: {
                required: true,
                minlength: 10
              
            },
            ConfirmPassword: {
                required: true,
                minlength: 10,
                equalTo: "#Password"
              
            }
        },
        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');

        }

    });

});

function GetAllServerUsers() {
    
    $('.tblServerUsers').DataTable().clear();
    
    var request = DataService.GetAllServerUsers();
    request
        .done(function (data) {
            var users = [];
            $.each(data, function (i, user) {

                users.push([user.userName, user.email,
                    user.role, user.fullName, user.addedOn, user.phone,
                    '<a id="'+user.id+'"  href="#link" onclick="DeleteUser(\'' + user.id + '\')"><i style="color:red" ' +
                    'title="Delete User" class="fa fa-trash-o" aria-hidden="true"></i></a> ']);
            });
            $('.tblServerUsers').DataTable()
                .rows.add(users).draw();
        })
        .fail(function () {
            //alert
            $('.tblServerUsers').DataTable()
                .rows.add([]).draw();
         });
}

function DeleteUser(userId) {
    swal({
        title: 'Are you sure?',
        text: "you want to delete this user?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00bcd4',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete'
    }).then(function () {
        var request = DataService.DeleteUser(userId);
        request
            .done(function () {
                swal({
                    title: "Deleted Successfully",
                    text: "User was deleted  and will not be able to access this application",
                    type: "success",
                    timer: 3000
                });


            })
            .fail(function (error) {
                //alert
                NiceAlert.showError('top', 'center', error.responseText);
            });
       
       

    });

    
}



function ClearRegisterModel() {

    $('#Email').val("");
    $('#FullName').val("");
    $('#PhoneNumber').val("");
    $('#Secret').val("");
    $('#UserName').val("");
    $('#Password').val("");
    $('#ConfirmPassword').val("");
    $('#GkRole').prop('selectedIndex', 0).trigger("change");
    $('#AddUserModel').modal('hide');
}

$(function () {

    $('.tblServerUsers').DataTable({
        responsive: true,
        destroy: true,
        "bFilter": false,
        dom: 'Bfrtip',
        "pageLength": 10,
        "ordering": true,
        "info": true,
        "processing": true,
        buttons: [],
        "order": [[4, "desc"]]

    });
    










    
})