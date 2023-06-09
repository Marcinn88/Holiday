import {
  getMoviesByArrayOfIds,
  getMoviesByTitle,
  getPopularMovies,
} from '../fetching/fetch-movies';

// Pagination config:
const perPage = 20;
const visiblePages = 5;
const prevPage = document.querySelector('.tui-prev');
const nextPage = document.querySelector('.tui-next');
const indexButton = document.querySelector('.header-nav__home-page-btn');
indexButton.addEventListener('click', () => {
  const popularParameter = 1;
  renderPagination();
});

export const getWatchedFromStorage = () => {
  const watched = localStorage.getItem('watched');
  const parsedWatched = JSON.parse(watched);
  return parsedWatched;
};

export const getQueueFromStorage = () => {
  const queue = localStorage.getItem('queue');
  const parsedQueue = JSON.parse(queue);
  return parsedQueue;
};

export const getFactorFromStorage = () => {
  const factor = localStorage.getItem('factor');
  return factor;
};

export const saveTotalPageToStorage = d => {
  const totalPages = d.total_pages;
  localStorage.setItem('totalPagesArray', JSON.stringify(totalPages));
};

export const saveTotalResultsToStorage = d => {
  const totalResults = d.total_results;
  localStorage.setItem('totalResultsArray', JSON.stringify(totalResults));
};

export const saveCurrentPageToStorage = d => {
  const currentPage = d.page;
  localStorage.setItem('currentPageArray', JSON.stringify(currentPage));
};
export const setPopularParameterToStorage = isItPopular => {
  const isItPopularParameter = isItPopular;
  localStorage.setItem('isItPopular', JSON.stringify(isItPopularParameter));
};
export const getPopularParameterFromStorage = () => {
  const popularParameter = localStorage.getItem('isItPopular');
  const parsedPopularParameter = JSON.parse(popularParameter);
  return parsedPopularParameter;
};

export const getTotalPagesFromStorage = () => {
  const totalPages = localStorage.getItem('totalPagesArray');
  const parsedTotalPages = JSON.parse(totalPages);
  return parsedTotalPages;
};

export const getTotalResultsFromStorage = () => {
  const totalResults = localStorage.getItem('totalResultsArray');
  const parsedTotalResults = JSON.parse(totalResults);
  return parsedTotalResults;
};
export const getCurrentPageFromStorage = () => {
  const currentPage = localStorage.getItem('currentPageArray');
  const parsedCurrentPage = JSON.parse(currentPage);
  return parsedCurrentPage;
};
export const saveFactorToLocalStorage = value => {
  let factor = value;
  localStorage.setItem('factor', JSON.stringify(factor));
};

export const createArrayOfCurrentPageForWatched = (factor = 1) => {
  const popularParameter = getPopularParameterFromStorage();
  const multiplier = 20 * (factor - 1);
  if (popularParameter == 3) {
    const array = getWatchedFromStorage();
    const arrayOfCurrentPage = array.slice(0 + multiplier, 20 + multiplier);
    getMoviesByArrayOfIds(arrayOfCurrentPage);
  } else if (popularParameter == 4) {
    const array = getQueueFromStorage();
    const arrayOfCurrentPage = array.slice(0 + multiplier, 20 + multiplier);
    getMoviesByArrayOfIds(arrayOfCurrentPage);
  }
  saveFactorToLocalStorage(factor);
};

export const renderPagination = data => {
  const paginationType = getPopularParameterFromStorage();
  if (paginationType == 1 || paginationType == 2) {
    const options = {
      totalItems: getTotalResultsFromStorage(),
      itemsPerPage: 20,
      visiblePages: 5,
      page: getCurrentPageFromStorage(),
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn tui-mid-button" id="{{page}}">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
    const pagination = new Pagination('pagination', options);
  } else if (paginationType == 3) {
    const options = {
      totalItems: getWatchedFromStorage().length,
      itemsPerPage: 20,
      visiblePages: 5,
      page: getCurrentPageFromStorage(),
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn tui-mid-button" id="{{page}}">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
    const pagination = new Pagination('pagination', options);
  } else if (paginationType == 4) {
    const options = {
      totalItems: getQueueFromStorage().length,
      itemsPerPage: 20,
      visiblePages: 5,
      page: getCurrentPageFromStorage(),
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn tui-mid-button" id="{{page}}">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected" id="{{page}}">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
    const pagination = new Pagination('pagination', options);
  }
};

document.addEventListener('click', e => {
  const target = e.target.closest('.tui-mid-button');
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == 1) {
    if (target) {
      const targetPage = target.id;
      getPopularMovies(targetPage);
    }
  } else if (popularParameter == 2) {
    if (target) {
      const targetPage = target.id;
      const searchMovieBox = document.querySelector('.header-input__text-box');
      const searchMovie = searchMovieBox.value;
      getMoviesByTitle(searchMovie, targetPage);
    }
  } else if (popularParameter == 3) {
    if (target) {
      const factor = parseInt(target.id);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  } else if (popularParameter == 4) {
    if (target) {
      const factor = parseInt(target.id);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  }
});

document.addEventListener('click', e => {
  const target = e.target.closest('.tui-prev');
  const selectedTarget = document.querySelector('.tui-is-selected');
  const selectedPage = selectedTarget.id;
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == 1) {
    if (target) {
      const targetPage = selectedPage;
      getPopularMovies(targetPage);
    }
  } else if (popularParameter == 2) {
    if (target) {
      const searchMovieBox = document.querySelector('.header-input__text-box');
      const searchMovie = searchMovieBox.value;
      getMoviesByTitle(searchMovie, selectedPage);
    }
  } else if (popularParameter == 3) {
    if (target) {
      const factor = parseInt(selectedPage);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  } else if (popularParameter == 4) {
    if (target) {
      const factor = parseInt(selectedPage);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  }
});

document.addEventListener('click', e => {
  const target = e.target.closest('.tui-prev');
  const selectedTarget = document.querySelector('.tui-is-selected');
  const selectedPage = selectedTarget.id;
  const popularParameter = getPopularParameterFromStorage();
  if (popularParameter == 1) {
    if (target) {
      getPopularMovies(selectedPage);
    }
  } else if (popularParameter == 2) {
    if (target) {
      const searchMovieBox = document.querySelector('.header-input__text-box');
      const searchMovie = searchMovieBox.value;
      getMoviesByTitle(searchMovie, selectedPage);
    }
  } else if (popularParameter == 3) {
    if (target) {
      const factor = parseInt(selectedPage);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  } else if (popularParameter == 4) {
    if (target) {
      const factor = parseInt(selectedPage);
      createArrayOfCurrentPageForWatched(factor);
      saveFactorToLocalStorage(factor);
    }
  }
});