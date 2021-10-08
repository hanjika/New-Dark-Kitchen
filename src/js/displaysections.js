import {
  activateOrDeactivateCourses,
  activateOrDeactivateAdditionalFilters,
} from './activateordeactive';
import { displayNoResults } from './noresults';

export function displayCourseSection(e) {
  activateOrDeactivateCourses(e);

  const type = e.target.classList[0];
  const articles = document.querySelectorAll('.food');
  const filters = document.querySelectorAll('li a');

  if (e.target.classList.contains('active')) {
    for (const article of articles) {
      const articleParent = article.parentNode;
      if (articleParent.classList.contains(`${type}Section`)) {
        if (
          filters[4].classList.contains('inactive') &&
          filters[5].classList.contains('inactive') &&
          filters[6].classList.contains('inactive')
        ) {
          article.style.display = 'flex';
        } else if (article.classList.contains('active')) {
          article.style.display = 'flex';
        } else {
          article.style.display = 'none';
        }
      } else {
        article.style.display = 'none';
      }
    }
  } else {
    for (const article of articles) {
      const articleParent = article.parentNode;
      if (articleParent.classList.contains(`${type}Section`)) {
        article.style.display = 'none';
      }
    }
  }
  displayNoResults();
}

// ------- DISPLAY WITH FILTERS (VEGGIE, SPICY, COMFORT FOOD) -----------

export function displayFilteredDishes(e) {
  activateOrDeactivateAdditionalFilters(e);

  const filter = e.target.classList[0];
  const articles = document.querySelectorAll('.food');

  if (e.target.classList.contains('active')) {
    for (const article of articles) {
      const articleParent = article.parentNode;
      if (
        articleParent.classList.contains('active') &&
        article.classList.contains(filter)
      ) {
        article.style.display = 'flex';
      } else {
        article.style.display = 'none';
      }
    }
  } else {
    const filters = document.querySelectorAll('li a');
    if (
      filters[4].classList.contains('inactive') &&
      filters[5].classList.contains('inactive') &&
      filters[6].classList.contains('inactive')
    ) {
      for (const article of articles) {
        const articleParent = article.parentNode;
        if (articleParent.classList.contains('active')) {
          article.style.display = 'flex';
        }
      }
    }
  }

  displayNoResults();
}
