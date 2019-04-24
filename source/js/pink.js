    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var pageHeaderClear = document.querySelector('.page-header');
    var downloads = document.querySelector('.downloads');
    var pageMainHeader = document.querySelector('.page-main__header');
    /*var pageMainTitle = document.querySelector('.page-main__title');*/
    var pageHeaderLine = document.querySelector('.page-header__line');

    navMain.classList.remove('main-nav--nojs');
    pageHeaderClear.classList.add('page-header--clear');
    if (downloads) { downloads.classList.add('downloads--clear'); }
    if (pageHeaderLine) { pageHeaderLine.classList.add('page-header__line--clear'); }
    if (pageMainHeader) { pageMainHeader.classList.add('page-main__header--clear'); }
    /* if (pageMainTitle) { pageMainTitle.classList.add('page-main__title--clear'); }*/
    if (pageHeaderLine) { pageHeaderLine.classList.add('page-header__line--clear'); }

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        pageHeaderClear.classList.remove('page-header--clear');
        if (downloads) { downloads.classList.remove('downloads--clear'); }
        if (pageHeaderLine) { pageHeaderLine.classList.remove('page-header__line--clear'); }
        if (pageMainHeader) { pageMainHeader.classList.remove('page-main__header--clear'); }
        /*if (pageMainTitle) { pageMainTitle.classList.remove('page-main__title--clear'); }*/
        if (pageHeaderLine) { pageHeaderLine.classList.remove('page-header__line--clear'); }
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        pageHeaderClear.classList.add('page-header--clear');
        if (downloads) { downloads.classList.add('downloads--clear'); }
        if (pageHeaderLine) { pageHeaderLine.classList.add('page-header__line--clear'); }
        if (pageMainHeader) { pageMainHeader.classList.add('page-main__header--clear'); }
        /* if (pageMainTitle) { pageMainTitle.classList.add('page-main__title--clear'); }*/
        if (pageHeaderLine) { pageHeaderLine.classList.add('page-header__line--clear'); }
      }
    });
