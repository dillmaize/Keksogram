import Const from './constants.js';
import { Pictures } from './gallery.js';

const imgContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment-template')
    .content
    .querySelector('.social__comment');
const btnLoadMore = bigPicture.querySelector('.social__loadmore');
const commentCount = bigPicture.querySelector('.social__comment-count .comments-count');

let comments = new Array();
let currentComments = null;
let totalComments = null;

const renderComments = () => {
    let amount = 0;
    if (comments.length === 0) {
        btnLoadMore.classList.add('hidden');
        return;
    } else if (comments.length < Const.LOAD_AMOUNT) {
        amount = comments.length;
        btnLoadMore.classList.add('hidden');
    } else {
        amount = Const.LOAD_AMOUNT;
    }
    for (let i = 0; i < amount; i++) {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = comments[i].avatar;
        commentElement.querySelector('.social__text').textContent = comments[i].message;
        commentsContainer.appendChild(commentElement);
    }
    comments.splice(0,amount);
    currentComments += amount;
    commentCount.innerHTML = `Shown <i>${currentComments}</i> comments out of <i>${totalComments}</i>`;
};

let currentUrl = null;

const renderCommentsHandler = evt => {
    const target = evt.target;
    if (target.className === 'picture__img') {
        Pictures.forEach(picture => {
            if (target.src.includes(picture.url)) {
                if (picture.url !== currentUrl) {
                    commentsContainer.innerHTML = '';
                    currentComments = 0;
                }
                comments = picture.comments;
                totalComments = picture.comments.length;
                currentUrl = picture.url;
                renderComments();
            }
        });
    }
};
imgContainer.addEventListener('click', renderCommentsHandler);
btnLoadMore.addEventListener('click', renderComments);