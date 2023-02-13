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

    const addPost = function(newPostText) {
        _posts.push({text: newPostText, id: "p" + postIdCounter, comments: []})
        postIdCounter ++
    }

    const removePost = function(postId) {
        let count = 0
        for (currentPost of _posts) {
            if (currentPost.id === postId) {
                _posts.splice(count, 1)
            }
            count ++
        }
    }

    const addComment = function(postId, newCommentText) {
        for (currentPost of _posts) {
            if (currentPost.id === postId) {
                currentPost.comments.push({id: "c" + commentIdCounter, text: newCommentText})
                commentIdCounter ++
            }
        }
    }

    const removeComment = function(postId, commentID ) {
        for (currentPost of _posts) {
            if (currentPost.id === postId) {
                let count = 0
                for (comment of currentPost.comments) {
                    if (comment.id === commentID) {
                        currentPost.comments.splice(count, 1)
                    }
                    count ++
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


// const tweeter = Tweeter ()
// tweeter.addComment("p2", "Yaawzaaaaaaaaaaaaaaaaa")
// const posts = tweeter.getPosts()
// console.log(...posts)


















