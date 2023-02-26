const tweeter = Tweeter()
const renderer = Renderer()

const render = function() {
    renderer.renderPosts(tweeter.getPosts())
}

render()

const post = function() {
    tweeter.addPost($("#input").val())
    render()
    $("#input").val("")
}

const postElementId = function(reference) {
    return reference.closest(".post").data().id
}

$("#posts").on("click", ".delete", function() {
    let postId = postElementId($(this))
    tweeter.removePost(postId)
    render()
})


$("#posts").on("click", ".add-comment-btn", function() {
    let commentInput = $(this).siblings("input").val()
    if (commentInput != "") {
        let postId = postElementId($(this))
        tweeter.addComment(postId, commentInput)
        render()
    }
    else {
        alert("Angl3 alsde fade ya ahbl")
    }

})


$("#posts").on("click", ".delete-comment", function() {
    let postId = postElementId($(this))
    let commentId = $(this).closest(".single-comment").data().id
    tweeter.removeComment(postId, commentId)
    render()
})





