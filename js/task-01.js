const categoryCount = document.querySelectorAll('.item');
console.log('Number of categories:', categoryCount.length);
categoryCount.forEach(function (item) {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});
    
