$.ajaxSetup({
    async: false
});

function getAllPosts() {
    var posts
    $.getJSON("Scripts/app/data/novosti.json", function (data) {
        posts = data["novosti"];
    });
    return posts
}

function* getPosts() {
    var posts
    $.getJSON("Scripts/app/data/novosti.json", function (data) {
        posts = data["novosti"];
    });
    var size = posts.length;
    var index = 0;
    while (index < size) {
        yield posts[index];
        index++;
    }
}


function getPostById(id) {
    var id = parseInt(id);
    var posts = getAllPosts();
    var post;
    _.forEach(posts, function (data) {
        if (data.id === id) {
            post = data;
        }
    });
    return post;
}

function getPostComments(id) {
    var post = getPostById(id);
    if (post.Komentari.length > 2) {
        return [post.Komentari[0], post.Komentari[1]];
    }else{
            return post.Komentari
    }
}