"use strict"
const $ = function (selector) {
    return document.querySelector(selector)
}

const $a = function (selector) {
    return document.querySelectorAll(selector)
}

const create = function (tagName, className, textContent) {
    const newElement = document.createElement(tagName);
    newElement.setAttribute('class', className);
    newElement.innerHTML = textContent;
    return newElement
}