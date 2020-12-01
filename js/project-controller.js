function init() {
    createProjects();
    renderProjects();
}

function renderProjects() {
    var projects = getProjects();
    var strHtmls = projects.map(function (project) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item"> 
            <a class="portfolio-link" data-id="${project.id}" data-toggle="modal" href="#portfolioModal" onclick="renderModal(this.dataset.id)"> 
                <div class="portfolio-hover"> 
                    <div class="portfolio-hover-content"> 
                        <i class="fa fa-plus fa-3x"></i> 
                    </div> 
                </div> 
                <img class="img-thumbnail" src="img/portfolio/thumbnails/${project.id}.png">
            </a> 
            <div class="portfolio-caption"> 
                <h4>${project.name}</h4> 
                <p class="text-muted">${project.title}</p> 
            </div> 
        </div>
        `
    })
    console.log(gProjects[0].id)
    console.log(gProjects[0].name)
    $('.projects').html(strHtmls.join(''));
}

function renderModal(projectId) {
    var project = getProjectById(projectId)
    var strHtml = `
        <h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
        <p>${project.desc}</p>
        <ul class="list-inline">
            <li>Date:${project.publishedAt}</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
        <button class="btn btn-success" type="button" onclick="window.open('${project.url}')">
            <i class="fa fa-check"></i>
        Check it out</button>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
        Close Project</button>
        `
    $('.modal-body').html(strHtml)
}

function onContactSubmit(ev) {
    ev.preventDefault();
    var $mail = $('#mailAddress')
    var $subject = $('#mailSubject')
    var $message = $('#mailMessage')
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${$mail.val()}&su=${$subject.val()}&body=${$message.val()}`
    window.open(url,  '_blank' )
}