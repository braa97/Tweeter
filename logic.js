const Tweeter  = function() {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 3
    let commentIdCounter  = 7

    const getPosts = () => _posts

    const addPost = function(post) {
        _posts.push({text: post, id: "p" + postIdCounter, comments: []})
        postIdCounter ++
    }

    const removePost = function(postId) {
        for ([index, currentPost] of _posts.entries()) {
            if (currentPost.id === postId) {
                _posts.splice(index, 1)
            }
        }
    }

    const addComment = function(postId, comment) {
        for (currentPost of _posts) {
            if (currentPost.id === postId) {
                currentPost.comments.push({id: "c" + commentIdCounter, text: comment})
                commentIdCounter ++
            }
        }
    }

    const removeComment = function(postId, commentID ) {
        for (currentPost of _posts) {
            if (currentPost.id === postId) {
                for ([index, comment] of currentPost.comments.entries()) {
                    if (comment.id === commentID) {
                        currentPost.comments.splice(index, 1)
                    }
                }
            }
            
        }
    }
    
    return {
        getPosts: getPosts,
        addPost: addPost, 
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment 
    }
}















