// Select the unordered list element where blogs will be displayed
const blogsListEl = $('#blogs-list');
let blogs = [];


function renderSavedPosts() {
    // Retrieve saved posts
    const savedPosts = JSON.parse(localStorage.getItem('blogs'));

    // If there are no saved posts, stop here
    if (!savedPosts && savedPosts.length < 1) { return; }

    for (const blog of savedPosts) {
        const blogItem = $('<li>');

        const blogTitle = $('<h2>').text(blog.title);
        const blogContent = $('<p>').text(blog.content);
        const blogAuthor = $('<small>').text(`Posted By: ${blog.username}`);

        blogItem.append(blogTitle, blogContent, blogAuthor);
        blogsListEl.append(blogItem);
    }
}

$('#go-back').on('click', () => {
    window.history.back();
});

// Render saved posts on page load
renderSavedPosts();