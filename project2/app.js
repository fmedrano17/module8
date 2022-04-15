let data = [
    {
        name: 'Buddy (M)',
        age: '8',
        breed: 'Maltese'
    },
    {
        name: 'Shrimp (M)',
        age: '2',
        breed: 'Chihuahua'
    },
    {
        name: 'Luna (F)',
        age: '4',
        breed: 'Beagle'
    },
    {
        name: 'Max (M)',
        age: '1',
        breed: 'Mastiff'
    },
    {
        name: 'Coco (F)',
        age: '12',
        breed: 'German Shepherd'
    },
    {
        name: 'Ivy (F)',
        age: '1',
        breed: 'Labrador Retriever'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' is a ' + item.age + ' year(s) old ' + item.breed + '</div>';
});

info.innerHTML = details.join('\n');