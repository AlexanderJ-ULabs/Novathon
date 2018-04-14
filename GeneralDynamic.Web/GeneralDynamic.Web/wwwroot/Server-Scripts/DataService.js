var DataService = {
    
    GetAllServerUsers: function () {

        return $.ajax({
            url: "/Account/GetAllServerUsers",
            method: "GET",
            dataType: "json"
        });
    },
    AddNewUser: function(user) {

        return $.ajax({
            url: "/Account/RegisterUserForAdmin",
            method: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: user
        });
    },

    DeleteUser: function(userId) {

        return $.ajax({
            url: "/Account/DeleteApplicationUser/" + userId,
            method: "Delete"
        });
    },
    GetNotificationsByUser: function () {

        return $.ajax({
            url: "/Account/GetNotificationsByUser",
            method: "GET",
            dataType: "json"
        });

    },
    SetNotificationSeen: function () {

        return $.ajax({
            url: "/Account/SetNotificationSeen",
            method: "PUT"
            
           
        });
    },


    

}