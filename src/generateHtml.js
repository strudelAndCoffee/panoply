// generates each profile's card
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
        other = `<a href='https://github.com/${obj.github}' target='_blank'>${obj.github}</a>`;
    }
    else if (role == "Intern") {
        otherTag = "School";
        other = obj.school;
    }

return `
<div class="box column is-narrow mx-2 has-background-light">
<div class="pb-5">
    <h2 class="title is-2">${name}</h2>
    <h3 class="title is-3">${role}</h3>
</div>
<div class="box columns">
    <div class="column is-narrow is-flex is-flex-direction-column is-align-items-flex-end">
        <span class="tag is-info has-text-weight-semibold">ID</span>
        <br />
        <span class="tag is-info has-text-weight-semibold">Email</span>
        <br />
        <span class="tag is-info has-text-weight-semibold">${otherTag}</span>
    </div>
    <div class="column is-flex is-flex-direction-column is-align-items-flex-start is-justify-content-space-between">
        <p class="mb-4">${id}</p>
        <p class="mb-4"><a href='mailto:${email}'>${email}</a></p>
        <p>${other}</p>
    </div>
</div>
</div>
`
};

// adds profile cards to main page
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
<header class="section has-background-success">
<h1 class="title is-1 has-text-light has-text-centered">My Team</h1>
</header>

<main class="section columns is-flex is-flex-wrap-wrap is-justify-content-center">
${cardsHtml}
</main>
</body>
</html>
`
};

module.exports = pageLayout;