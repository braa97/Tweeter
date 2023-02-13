const Renderer = function() {
    
    const renderPosts = function(posts) {
        $("#posts").empty()
        for (renderPost of posts) {
            $("#posts").append(
                `<div class='post' data-id=${renderPost.id}>
                    <div class='post-text'>${renderPost.text}</div>
                    <div class='comments'></div>
                    <div class='comment-input'>
                        <input type=text placeholder='Got something to say?'>
                        <button class=add-comment-btn>comment</button>
                    </div>
                    <button class=delete>Delete Post</button>
                </div>`)
            
            for (comment of renderPost.comments) {
                 $(`[data-id=${renderPost.id}] > .comments`).append(
                    `<div class=single-comment data-id=${comment.id}>
                        <span class=delete-comment>X</span>
                        ${comment.text}
                     </div>`
                    )
            }
        }
    }

    return {renderPosts}
}