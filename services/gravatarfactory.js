angular.module('myApp').factory("gravatar", function GravatarFacotry(){
    var avatarSize = 80; // Default size
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    return function(email){
            return avatarUrl + CryptoJS.MD5(email).toString() + "?size" + avatarSize.toString(); 
        }
    
});
 