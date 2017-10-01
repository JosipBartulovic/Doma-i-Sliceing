function localStorageSetup(localStorageService) {
    if (!localStorageService.get("posts")) {
        var postsForStorage = [];
        _.forEach(getAllPosts(), function (data) {
            postsForStorage.push({ id: data.id, favourite: false });
        });
        localStorageService.set("posts", postsForStorage);
    }
}

function getLocalStorage(localStorageService) {
    return localStorageService.get("posts");
}

function setLocalStorage(localStorageService, array) {
    return localStorageService.set("posts", array);
}

function favourite(localStorageService, id) {
    var localStorage = getLocalStorage(localStorageService);
    _.forEach(localStorage, function (data) {
        if (data.id === id) {
            data.favourite = true;
        }
    });
    setLocalStorage(localStorageService, localStorage);
}

function unfavourite(localStorageService, id) {
    var localStorage = getLocalStorage(localStorageService);
    _.forEach(localStorage, function (data) {
        if (data.id === id) {
            data.favourite = false;
        }
    });
    setLocalStorage(localStorageService, localStorage);
}

function getFavouritePosts(localStorageService) {
    var favouritePosts = [];
    var posts = getAllPosts();
    var localStorage = getLocalStorage(localStorageService)
    console.log(posts);
    _.forEach(localStorage, function (data) {
        if (data.favourite == true) {
            favouritePosts.push(posts[data.id]);
        }
    });
    return favouritePosts;
}

function isFavourite(localStorageService, id) {
    var fav;
    _.forEach(getLocalStorage(localStorageService), function (data) {
        if (data.id === id) {
            fav = data.favourite;
        }
    });
    return fav;
}
