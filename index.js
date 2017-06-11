$(document).ready(function() {
    $("#add-new-todo-button").click(function(){
        // When Add New Todo button is clicked, do this... 

        var todoBlock =$(this).closest("#new-todo-block")
        var description = todoBlock.find("#new-todo-description")
        
        $("ul").append("<li><span><input type='checkbox' class='textbackground'> " + description.val() + "</span></li>")
        
        description.val("")
    })
})