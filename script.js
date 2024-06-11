document.getElementById('more-btn').addEventListener('click', function() {
    var moreMenu = document.getElementById('more-menu');
    moreMenu.classList.toggle('open');
});

var searchModal = document.getElementById('search-modal');
var searchBtn = document.getElementById('search-btn');
var searchClose = searchModal.getElementsByClassName('close')[0];

searchBtn.onclick = function() {
    searchModal.classList.add('show');
}

searchClose.onclick = function() {
    searchModal.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == searchModal) {
        searchModal.classList.remove('show');
    }
}

var notificationsModal = document.getElementById('notifications-modal');
var notificationsBtn = document.getElementById('notifications-btn');
var notificationsClose = notificationsModal.getElementsByClassName('close')[0];

notificationsBtn.onclick = function() {
    notificationsModal.classList.add('show');
}

notificationsClose.onclick = function() {
    notificationsModal.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == notificationsModal) {
        notificationsModal.classList.remove('show');
    }
}





document.addEventListener('DOMContentLoaded', function() {
    const likeIcon = document.querySelector('.actions .bx-heart');
    const commentInput = document.getElementById('comment-input');
    const postButton = document.getElementById('post-button');
    const commentsList = document.getElementById('comments-list');
    let liked = false;

    likeIcon.addEventListener('click', function() {
        if (!liked) {
            likeIcon.classList.add('liked');
            liked = true;
        } else {
            likeIcon.classList.remove('liked');
            liked = false;
        }
    });

    postButton.addEventListener('click', function() {
        const commentText = commentInput.value;
        if (commentText) {
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const likeIcon = document.querySelector('.actions .bx-heart');
    let liked = false;

    likeIcon.addEventListener('click', function() {
        if (!liked) {
            likeIcon.classList.add('liked');
            liked = true;
        } else {
            likeIcon.classList.remove('liked');
            liked = false;
        }
    });
});



window.addEventListener('load', function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        preloader.style.display = 'none';

        var content = document.querySelector('.content');
        content.style.display = 'block';
    }, 3000); // 3000 milliseconds = 3 seconds
});

