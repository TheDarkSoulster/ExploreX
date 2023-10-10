// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBSt-89RVn9gzK6aqlyd5sn0234GphPEKY",
    authDomain: "randomnamegenerator-explorex.firebaseapp.com",
    databaseURL: "https://randomnamegenerator-explorex.firebaseio.com",
    projectId: "randomnamegenerator-explorex",
    storageBucket: "randomnamegenerator-explorex.appspot.com",
    messagingSenderId: "625852014663",
    appId: "1:625852014663:web:417933b4705730c7825162"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to Add Group
function addGroup() {
    const groupName = document.getElementById("group-name").value;
    const membersInput = document.getElementById("member-name").value;

    if (groupName && membersInput) {
        const members = membersInput.split(",").map(member => member.trim());

        const groupRef = database.ref('groups/' + groupName);
        groupRef.set({
            members: members
        }).then(() => {
            alert("Group added successfully!");
        }).catch(error => {
            console.error(error);
        });
    } else {
        alert("Please enter group name and member names.");
    }
}

// Function to Delete Group
function deleteGroup() {
    const groupName = document.getElementById("group-name").value;
    const groupRef = database.ref('groups/' + groupName);
    groupRef.remove()
        .then(() => {
            alert("Group deleted successfully!");
        })
        .catch(error => {
            console.error(error);
        });
}

// Function to Delete Member from a Group
function deleteMember() {
    const groupName = document.getElementById("group-name").value;
    const memberId = document.getElementById("delete-member").value;

    if (groupName && memberId) {
        const groupRef = database.ref('groups/' + groupName + '/members/' + memberId);
        groupRef.remove()
            .then(() => {
                alert("Member deleted successfully!");
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        alert("Please enter group name and member name to delete.");
    }
}
