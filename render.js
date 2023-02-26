const Renderer = function() {
    const renderPosts = function(posts) {
        renderPost(posts)
    }

    return {renderPosts}
}

const renderPost = function(posts) {
    $("#posts").empty()
    for (thisPost of posts) {
        $("#posts").append(
            `<div class='post' data-id=${thisPost.id}>
                <div class='post-text'>${thisPost.text}</div>
                <div class='comments'></div>
                <div class='comment-input'>
                    <input type=text placeholder='Got something to say?'>
                    <button class=add-comment-btn>comment</button>
                </div>
                <button class=delete>Delete Post</button>
            </div>`)
            renderComment(thisPost)
    } 
}

const renderComment = function(post) {
    for (comment of post.comments) {
        $(`[data-id=${post.id}] > .comments`).append(
           `<div class=single-comment data-id=${comment.id}>
               <span class=delete-comment>X</span>
               ${comment.text}
            </div>`
           )
        }
    }

