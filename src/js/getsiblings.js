export function getSiblings(elem) {
  // create an empty array
  const siblings = [];
  const parent = elem.parentNode;

  // if no parent, return empty list
  if (!parent) {
    return siblings;
  }

  // first child of the parent node
  let sibling = parent.firstElementChild;

  // loop through next siblings until `null`
  do {
    // push sibling to array
    if (sibling !== elem) {
      siblings.push(sibling);
    }
  } while ((sibling = sibling.nextElementSibling));

  return siblings;
}
