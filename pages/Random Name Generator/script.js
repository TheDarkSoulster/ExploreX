// Firebase Configuration
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

// Event Listener for Button Click
document.getElementById('pickButton').addEventListener('click', function () {
    var group = document.getElementById("group").value;
    var names = [];

    if (group === "group1") {
        names = ["Alice", "Bob"];
    } else if (group === "group2") {
        names = ["Charlie", "David"];
    }
    // Add more groups and names as needed

    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex];
    var resultBox = document.getElementById("random-name");
    resultBox.textContent = "Random Name: " + randomName;
    resultBox.style.display = "block";
});

// Event Listener for Firebase Group Data
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
