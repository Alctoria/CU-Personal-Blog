const blogFormEl = $('#blog-form');

blogFormEl.on('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Retrieve existing blogs
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Get references to the input fields
    const [usernameEl, titleEl, contentEl] = [
        blogFormEl.find('input[name=username]'),
        blogFormEl.find('input[name=title]'),
        blogFormEl.find('textarea[name=content]')
    ];

    if (!usernameEl || !titleEl || !contentEl) { return; }

    const formData = {
        username: usernameEl.val().trim(),
        title: titleEl.val().trim(),
        content: contentEl.val().trim()
    };

    // Ensure all fields are filled
    if (formData.username === '' || formData.title  === '' || formData.content === '') {
        return alert('Please fill out all fields before submitting');
    }

    // Reset the values of the input after one submission is made
    usernameEl.val('');
    titleEl.val('');
    contentEl.val('');

    // Add the current form data to the addlist
    blogs.push(formData);
    
    // Save the updated list of blogs to localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
    // Navigate to the blog page
    window.location.assign("blog.html");
});