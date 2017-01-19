// ==UserScript==
// @name         Wes Bos Courses Duration
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Prints course duration on console
// @author       xaxim
// @match        https://javascript30.com/account/access/*
// @match        https://es6.io/account/access/*
// @match        https://reactforbeginners.com/account/access/*
// @match        https://sublimetextbook.com/account/access/*
// @match        https://flexbox.io/account/access/*
// @match        https://commandlinepoweruser.com/account/access/*
// @match        https://learnredux.com/account/access/*
// @match        https://masteringmarkdown.com/account/access/*
// @match        https://*/account/access/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const timeNodes = Array.from(document.querySelectorAll('.duration'));

    const seconds = timeNodes
    .map(node => node.textContent)
    .map(timeStr => {
        const [mins, secs] = timeStr.split(':').map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce((total, current) => total + current);

    const minsPerHour = 60;
    const secsPerHour = minsPerHour * 60;

    let secondsLeft = seconds;

    const hours = Math.floor(secondsLeft / secsPerHour);
    secondsLeft = secondsLeft % secsPerHour;

    const minutes = Math.floor(secondsLeft / minsPerHour);
    secondsLeft = secondsLeft % minsPerHour;

    console.log(`Duration of this course: ${hours} hours ${minutes} minutes and ${secondsLeft} seconds`);
})();