const firebaseConfig = {
    apiKey: "AIzaSyBSt-89RVn9gzK6aqlyd5sn0234GphPEKY",
    authDomain: "randomnamegenerator-explorex.firebaseapp.com",
    databaseURL: "https://randomnamegenerator-explorex.firebaseio.com",
    projectId: "randomnamegenerator-explorex",
    storageBucket: "randomnamegenerator-explorex.appspot.com",
    messagingSenderId: "625852014663",
    appId: "1:625852014663:web:417933b4705730c7825162"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function addGroup() {
    const groupName = document.getElementById("group-name").value;
    const memberName = document.getElementById("member-name").value;

    if (groupName && memberName) {
        const groupRef = database.ref('groups/' + groupName);
        groupRef.push().set({
            member: memberName
        }).then(() => {
            alert("Member added successfully!");
        }).catch(error => {
            console.error(error);
        });
    } else {
        alert("Please enter group name and member name.");
    }
}

function displayGroups() {
    const groupList = document.getElementById("group-list");
    const groupsRef = database.ref('groups');
    groupsRef.on('value', snapshot => {
        groupList.innerHTML = '';
        snapshot.forEach(group => {
            const groupName = group.key;
            const members = group.val();
            const listItem = document.createElement('li');
            listItem.textContent = `${groupName}: ${Object.values(members).map(member => member.member).join(", ")}`;
            groupList.appendChild(listItem);
        });
    });
}

displayGroups();