const addSection = obj => {

    let role = obj.getRole();
    let name = obj.name;
    let id = obj.id;
    let email = obj.email;
    let other = "";
    let otherTag = "";

    if (role == "Manager") {
        otherTag = "Office Number";
        other = obj.officeNumber;
    }
    else if (role == "Engineer") {
        otherTag = "GitHub";
        other = obj.github;
    }
    else if (role == "Intern") {
        otherTag = "School";
        other = obj.school;
    }

return `
<div class="box column has-background-light is-3 mx-3 is-flex-grow-0 is-flex-shrink-0">
    <div class="pb-4">
        <h2 class="title is-2">${name}</h2>
        <h3 class="title is-3">${role}</h3>
    </div>
    <div class="box">
        <p class="is-outlined has-text-centered">
            <span class="tag is-info has-text-weight-semibold is-medium mb-4">ID</span>
            <span>${id}</span>
        </p>
        <p class="is-outlined has-text-centered">
            <span class="tag is-info has-text-weight-semibold is-medium mb-4">Email</span>
            <a href='${email}' target='_blank'>${email}</a>
        </p>
        <p class="is-outlined has-text-centered">
            <span class="tag is-info has-text-weight-semibold is-medium">${otherTag}</span>
            <a href='https://github.com/${other}' target='_blank'>${other}</a>
        </p>
    </div>
</div>
`
};

const pageLayout = profilesArr => {
    
    let cardsHtml = "";

    for (let i = 0; i < profilesArr.length; i++) {
        cardsHtml += addSection(profilesArr[i]);
    };

return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Panoply</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<link rel="stylesheet" href="./src/style.css">
</head>

<body>
<div class="container">
<header class="section has-background-success">
<h1 class="title is-1 has-text-light has-text-centered">My Team</h1>
</header>
<main class="section is-flex is-flex-wrap-wrap is-justify-content-center columns">
${cardsHtml}
</main>
</div>
</body>
</html>
`
};

module.exports = pageLayout;