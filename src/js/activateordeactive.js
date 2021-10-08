import { getSiblings } from './getsiblings';

function activateSection(section) {
  section.classList.remove('inactive');
  section.classList.add('active');
  section.style.background = 'hsl(229, 100%, 76%)';
  section.style.color = 'white';
}

function deactivateSection(section) {
  section.classList.remove('active');
  section.classList.add('inactive');
  section.style.background = 'inherit';
  section.style.color = 'inherit';
}

function deactivateSiblingSectionsOfParent(section) {
  const allUnselectedParents = getSiblings(section.parentNode);

  for (const unselectedParent of allUnselectedParents) {
    if (unselectedParent.firstChild.classList.contains('active')) {
      deactivateSection(unselectedParent.firstChild);
    }
  }
}

function removeActiveClassFromUnselectedSiblings(selectedElement) {
  const allNotSelected = getSiblings(selectedElement);

  for (const notSelected of allNotSelected) {
    if (notSelected.classList.contains('active')) {
      notSelected.classList.remove('active');
    }
  }
}

export function activateOrDeactivateCourses(e) {
  const type = e.target.classList[0];
  const selected = document.getElementsByClassName(`${type}Section`)[0];

  if (e.target.classList.contains('inactive')) {
    activateSection(e.target);
    selected.classList.add('active');
  } else if (e.target.classList.contains('active')) {
    deactivateSection(e.target);
    selected.classList.remove('active');
  }
  removeActiveClassFromUnselectedSiblings(selected);
  deactivateSiblingSectionsOfParent(e.target);
}

function removeTypeFromArray(arr, type) {
  const arrWithoutType = arr.slice();

  for (let i = 0; i < arrWithoutType.length; i++) {
    if (arrWithoutType[i] === type) {
      arrWithoutType.splice(i, 1);
    }
  }
  return arrWithoutType;
}

export function activateOrDeactivateAdditionalFilters(e) {
  const type = e.target.classList[0];
  const selected = document.getElementsByClassName(type);

  if (e.target.classList.contains('inactive')) {
    activateSection(e.target);
    for (const select of selected) {
      if (select.classList.contains('food')) {
        select.classList.add('active');
      }
    }
  } else if (e.target.classList.contains('active')) {
    deactivateSection(e.target);
    for (const select of selected) {
      if (select.classList.contains('food')) {
        select.classList.remove('active');
      }
    }
  }

  const arr = ['Vegetarian', 'Spicy', 'Comfort'];
  const arrWithoutSelectedType = removeTypeFromArray(arr, type);

  for (const unselectedType of arrWithoutSelectedType) {
    articles = document.querySelectorAll('.food');
    for (const article of articles) {
      if (article.classList.contains(unselectedType)) {
        article.classList.toggle('active');
      }
    }
  }
  deactivateSiblingSectionsOfParent(e.target);
}
