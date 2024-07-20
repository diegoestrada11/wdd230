document.addEventListener('DOMContentLoaded', function() {
    const memberDirectory = document.getElementById('member-directory');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    // Fetch member data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
        });

    // Function to display members
    function displayMembers(members) {
        memberDirectory.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                
            `;
            memberDirectory.appendChild(memberCard);
        });
    }

    // Toggle grid view
    gridViewBtn.addEventListener('click', () => {
        memberDirectory.classList.add('grid-view');
        memberDirectory.classList.remove('list-view');
    });

    // Toggle list view
    listViewBtn.addEventListener('click', () => {
        memberDirectory.classList.add('list-view');
        memberDirectory.classList.remove('grid-view');
    });
});

getDirectoryData();

