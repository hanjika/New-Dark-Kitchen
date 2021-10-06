function prevSiblings(target) {
    var siblings = [],
        n = target;
    while ((n = n.previousElementSibling)) siblings.push(n);
    return siblings;
}

function nextSiblings(target) {
    var siblings = [],
        n = target;
    while ((n = n.nextElementSibling)) siblings.push(n);
    return siblings;
}

export function getSiblings(target) {
    var prev = prevSiblings(target) || [],
        next = nextSiblings(target) || [];
    return prev.concat(next);
}