const teams = [
    {
        icon: `<i class="fa fa-pencil" aria-hidden="true"></i>`,
        teamName: "Designing team"
    },
    {
        icon: `<i class="fa fa-volume-up" aria-hidden="true"></i>`,
        teamName: "Marketing team"
    },
    {
        icon: `<>`,
        teamName: "Development team"
    },
];
function navBar() {
    const sideBar = document.getElementById('sideBar');
    const listItems = teams.map(team => {
        return `<li class="teamList">${team.icon} ${team.teamName}</li>`;

    });

    sideBar.innerHTML = `<ul>${listItems.join('')}</ul>`;
}
navBar();

// function addMore() {
//     const newTeam = { icon: 'new_team_icon.png', team: 'New Team' };
//     teams.push(newTeam);
//     populateDivWithTeams(); // Re-populate the div with updated teams
// }


const folders = ["Products", "Sales","Design", "Office", "Legal"]

function foldersList() {
    const folder = document.getElementById('folder');
    const listItems = folders.map(folder => {
        return `<li class="folderList"><i class="fa fa-folder-o" aria-hidden="true"></i> ${folder}</li>`;

    });

    folder.innerHTML = `<ul>${listItems.join('')}</ul>`;
}
foldersList();