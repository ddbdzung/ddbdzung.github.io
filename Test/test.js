function Comment(author, body) {
    this.author = author;
    this.body = body;
}

const comment = [
    new Comment("anh Huân đzzz", "lewlew"),
    new Comment("anh Huân đzzz", "lewlew")
];

function Post(title, body, author, views, comments, isLive) {
    if (!new.target) {
        return new Post(title, body, author, views, comments, isLive);
    }
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments
    this.isLive = isLive;
}

const post = new Post("ahihi", "anh Hoàng dzzz", "abc", 100, comment, true)
console.log(post);
