let data = [
    {
        name: 'Buddy',
        age: '8'
    },
    {
        name: 'Shrimp',
        age: '2'
    },
    {
        name: 'Luna',
        age: '4'
    },
    {
        name: 'Max',
        age: '1'
    },
    {
        name: 'Coco',
        age: '12'
    },
    {
        name: 'Ivy',
        age: '1'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');