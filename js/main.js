var main = function () {
    'use strict';
    var $AddComment = function() {
        var $commentText = $(".comment-input input").val(),
        $newComment;
        if ($commentText !== "") {
            $newComment = $("<p>");
            $newComment.text($commentText);
            $newComment.hide();
            $(".comments").append($newComment);
            $newComment.fadeIn("slow");
            $commentText = $(".comment-input input").val("");
        }
    };
    $(".comment-input button").on("click", function(event) {
        $AddComment();
    });
    $(".comment-input input").on("keypress", function(){
        if (event.keyCode===13){
         $AddComment();
        }
    });
};

$(document).ready(main);