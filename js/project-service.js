var gProjects = [
    createProjects('Minesweeper', 'Try improved classic game!', 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.', ['matrix', 'vanila JS']), 
    createProjects('Book-Shop', 'Run your Book shop!', 'Book Shop desc2', ['matrix2', 'vanila JS2']), 
    createProjects('Pacman', 'Try nice version of the famous game!', 'Pacman desc2', ['matrix2', 'vanila JS2']), 
    createProjects('Ball-Board', 'Collect all balls!', 'Ball Board desc2', ['matrix2', 'vanila JS2']), 
    createProjects('Touch-Nums', 'How speed are you?', 'Touch Nums desc2', ['matrix2', 'vanila JS2']),
]

function createProjects(name, title, desc, labels) {
    return {
        id: name,
        name: name,
        title: title,
        desc: desc,
        url: `https://viktoriagordeeva.github.io/${name}/`,
        publishedAt: Date.now(),
        labels: labels
    }
}


function getProjects() {
    return gProjects;
}

function getProjectById(projectId) {
    var project = gProjects.find(function (project) {
        return project.id === projectId;
    });
    return project;
}

