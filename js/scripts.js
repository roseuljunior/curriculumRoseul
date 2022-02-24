function loadingPage(event, slug) {
    event.preventDefault();
    showContent(slug);
}

const myCurriculum = {
    professionalsObject: `
                        <div>
                            <p>Trabalhar como desenvolvedor web full stack.
                            </p>
                            <p>Estar sempre atento a novas tecnologias, me aperfeiçoando sempre.
                            </p>
                            <p>Trabalhar em empresas que se preocupam com o crescimento do seu colaborador, e assim cresçamos juntos.
                            </p>
                        </div>
                    `,
    professionalsExperience: `
                        <div>
                            <h2>Almoxarife</h2>
                            <h3>Viação União Santa Cruz | Dezembro 2012 - Março 2014</h3>
                                <ul>
                                    <li class="expe-profess-style">Coordenação de estoque de peças para ônibus e caminhões</li>
                                    <li>Responsável pelo recebimento e compra de combustível</li>
                                </ul><hr>
                            <h2>Sócio Proprietàrio</h2>
                            <h3>Mega Montagem | Janeiro/Dezembro 2015</h3>
                                <ul>
                                    <li>Montagem e manutenção de elevadores residenciais e prediais</li>
                                    <li>Montagem e manutenção de elevadores para teatro</li>
                                </ul><hr>
                            <h2>Sócio Proprietário</h2>
                            <h3>Bicho Lindo Pet Shop | Maio 2014 - Junho 2017</h3>
                                <ul>
                                    <li>Higienização em cães e gatos</li>
                                    <li>Comércio de produtos para pet shop</li>
                                </ul><hr>
                            <h2>Proprietário</h2>
                            <h3>CSL Telecomunicações | Setembro 2017 - Dezembro 2021</h3>
                            <ul>
                                <li>Montagem e manutenção de torres para internet</li>
                                <li>Serviços de zeladoria e manutenção em torres de telecomunicações</li>
                            </ul>    
                    </div>
                `,
    educational: ` 
                    <div>
                        <h2>Escola Estadual de Ensino Médio Dr. Ruy Coelho Gonçalves</h2>
                        <h3>Ensino Médio | 2004</h3><hr>
                        <h2>Escola de Idiomas Yázigi Internexus</h2>
                        <h3>Inglês Pré-Avançado | 2012</h3><hr>
                        <h2>Aulas Personalizadas de Inglês</h2>
                        <h3>Professora Victória Solano | 2022 </h3><hr>
                        <h2>Programa Starter Web Full Stack</h2>
                        <h3>GrowDev | Novembro 2021 - Outubro 2022</h3>
                    </div>
                `       
}

function showContent(slug) {
    const about = document.getElementById('curriculum')
   
    switch (slug) {
        case 'professionals-object':
            about.innerHTML = myCurriculum.professionalsObject
            break
        case 'professionals-experience':
            about.innerHTML = myCurriculum.professionalsExperience
            break
        case 'educational':
            about.innerHTML = myCurriculum.educational
            break
    }
}

showContent('professionals-object');

function saveNameComents(event) {
    event.preventDefault()

    const nameComents = document.getElementById('name').value
    document.getElementById('name').value=''
    console.log(nameComents)
}

function saveComents(event) {
    event.preventDefault()

    const coments = document.getElementById('coments').value
    document.getElementById('coments').value=''
    console.log(coments)
}

function saveName(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    document.getElementById('name').value=''
    console.log(name)
}

function saveEmail(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    document.getElementById('email').value=''
    console.log(email)
}

function savePhoneNumber(event) {
    event.preventDefault()

    const phoneNumber = document.getElementById('phoneNumber').value
    document.getElementById('phoneNumber').value=''
    console.log(phoneNumber)
}

function goBackPage() {
    window.history.back()
}

goBackPage()

