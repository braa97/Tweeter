const tweeter = Tweeter()
const renderer = Renderer()

const post = function() {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}

const postElementId = function(reference) {
    return reference.closest(".post").data().id
}

const commentElementId = function(reference) {
    return reference
}


$("#posts").on("click", ".delete", function() {
    let postId = postElementId($(this))
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".add-comment-btn", function() {
    let postId = postElementId($(this))
    let commentInput = $(this).siblings("input").val()
    tweeter.addComment(postId, commentInput)
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".delete-comment", function() {
    let postId = postElementId($(this))
    let commentId = $(this).closest(".single-comment").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})



renderer.renderPosts(tweeter.getPosts())

