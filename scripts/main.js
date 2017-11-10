/*region Array of the page content*/
let pages = [
    {
        name: 'page-1',
        centralImages: [
            {
                onePerson: "./images/main-area-pic-1pers_v2.png",
                twoPeople: "./images/main-area-pic-2pers_v2.png",
                threePeople: "./images/main-area-pic-3pers-rounded_v2.png"
            },
        ],
        steps: [
            {
                image: 1,
                tooltip: {
                    caption: "Hallo, Ich bin...",
                    buttons: [
                        "männlich",
                        "weiblich"
                    ]
                }
            },
            {
                image: 0,
                tooltip: {
                    caption: "Ich bin...",
                    buttons: [
                        "Jünger oder gleich 30",
                        "Zwischen 30 und 50",
                        "Älter 50"
                    ]
                }
            },
            {
                image: 0,
                tooltip: {
                    caption: "Ich bin...",
                    buttons: [
                        "Ledig",
                        "Paar",
                        "Verheiratet"
                    ]
                }
            },
            {
                image: 1,
                tooltip: {
                    caption: "Ich habe...",
                    buttons: [
                        "0 Kinder",
                        "1 Kind",
                        "Mehr als 1 Kind"
                    ]
                }
            },
            {
                image: 3,
                tooltip: {
                    caption: "Ich wohne...",
                    buttons: [
                        "zur Miete",
                        "Eigenheim",
                        "Eltern/ WG/ Studentenwohnheim",
                    ]
                }
            }
        ],

    },

    {
        name: 'page-2',
        centralImages: [
            {
                threePeople: "./images/main-area-pic-3pers_v2.png"
            },
        ],
        steps: [
            {
                image: 2,
                tooltip: {
                    caption: "Ich bin...",
                    buttons: [
                        "Angestellter",
                        "Angestellter im öffentlichen Dienst",
                        "Beamter",
                        "Selbständiger",
                        "Freiberufler mit Versorgungswerk",
                        "Geschäftsführender Gesellschafter",
                        "Student",
                        "Azubi",
                        "Arbeitsuchend",
                        "im Ruhestand",
                        "Sonstiges"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich arbeite in folgender Branche...",
                    buttons: [
                        "IT",
                        "Dienstleistungen",
                        "Tourismus",
                        "Logistik",
                        "Öffentliche Einrichtung",
                        "Gesundheit",
                        "Automobil",
                        "Elektroindustrie",
                        "Banken & Versicherungen",
                        "Energie",
                        "Lebensmittel",
                        "Sonstige"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Mein monatliches Nettoeinkommen liegt...",
                    buttons: [
                        "unter 1.500 €",
                        "zwischen 1.500 - 2.300 €",
                        "zwischen 2.301 - 3.600 €",
                        "über 3.600 €"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich bin Krankenversichert.",
                    buttons: [
                        "Ja, privat",
                        "Ja, gesetzlich",
                        "Nein"
                    ]
                }
            },
        ],
    },

    {
        name: 'page-3',
        centralImages: [
            {
                threePeople: "./images/main-area-pic-3pers_v2.png"
            },
        ],
        steps: [
            {
                image: 2,
                tooltip: {
                    caption: "Ich habe einen Notgroschen bzw. Ersparnisse...",
                    buttons: [
                        "weniger als 100 €",
                        "bis 2.000 €",
                        "bis 5.000 €",
                        "mehr als 5.000 €"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich habe ein Fahrzeug...",
                    buttons: [
                        "Nein",
                        "Ja, jünger 3 Jahre",
                        "Ja, älter 3 Jahre"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich habe Schulden, Kredite oder andere Verbindlichkeiten.",
                    buttons: [
                        "Ja",
                        "Nein",
                        "Ich möchte einen Kredit"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Nach meinen Ausgaben bleiben mir monatlich zum Sparen ca....",
                    buttons: [
                        "0 €",
                        "bis zu 100 €",
                        "bis zu 200 €",
                        "mehr als 200 €"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "In welches Risikoprofil würdest Du Dich einordnen, wenn es um Geldanlage geht?",
                    buttons: [
                        "Sicherheitsorientiert",
                        "Mischung aus Sicherheit & Chance",
                        "Risikobereit"
                    ]
                }
            }
        ],
    },

    {
        name: 'page-4',
        centralImages: [
            {
                threePeople: "./images/main-area-pic-3pers_v2.png"
            },
        ],
        steps: [
            {
                image: 2,
                tooltip: {
                    caption: "Ich Reise viel.",
                    buttons: [
                        "Ja",
                        "Nein"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich treibe Sport.",
                    buttons: [
                        "Ja",
                        "Nein"
                    ]
                }
            },
            {
                image: 2,
                tooltip: {
                    caption: "Ich habe...",
                    buttons: [
                        "keine Tiere",
                        "Hund/e",
                        "Pferd/e",
                        "Hund/e und Pferd/e"
                    ]
                }

            },
            {
                image: 2,
                tooltip: {
                    caption: "Super, vielen Dank!",
                    buttons: [
                        "Weiter zu Schritt 2"
                    ]
                }
            },
        ],
    }
];
/*endregion Array of the page content*/

/*region Main code*/

let currentPage = 0; //the initial value of the page counter
let currentStep = 0; //the initial value of the step counter

renderPage(currentPage);

/*Main function that renders content of the page*/
function renderPage(pageIndex) {
    setActiveTab(pageIndex);
    clearSteps();
    renderSteps(pageIndex, currentStep);
    showImage();
}

/*the function remove all survey steps after setting the active page*/
function clearSteps() {
    let steps = document.getElementsByClassName('surveyAreaStep');
    for (let i = steps.length; i--;) {
        steps[i].remove();
    }
}

/*the function renders all survey steps depending on the current page*/
function renderSteps(pageIndex, currentStep) {
    let stepsWrap = document.getElementsByClassName('surveyArea')[0];
    let steps = pages[pageIndex].steps;
    for (let i = 0; i < steps.length; i++) {
        let step = document.createElement('div');
        step.id = 'step-' + i;
        step.classList.add('surveyAreaStep');

        if (i === currentStep) {
            step.classList.add('active');
        }
        stepsWrap.appendChild(step);
        renderTooltip(pageIndex, i);
        showTooltip(currentStep);
    }
}

/*Updating steps function. The step value after the update depends on whether the step is active or passed*/
function updateSteps(currentStep) {
    let steps = document.getElementsByClassName('surveyAreaStep');
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.remove('active');
        steps[i].classList.remove('passedQuestion');
        if (i === currentStep) {
            steps[i].classList.add('active');
        } else if (i < currentStep) {
            steps[i].classList.add('passedQuestion');
        }
    }
    showImage();
    updateToolTips(currentStep);
}

/*setting/removing the 'active' value of the page function*/
function setActiveTab(pageIndex) {
    const tabs = document.getElementsByClassName('singleTheme');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    tabs[pageIndex].classList.add('active');
}

/*tooltips rendering function*/
function renderTooltip(currentPage, currentStep) {
    let tooltip = pages[currentPage].steps[currentStep].tooltip;
    let step = document.getElementById('step-' + currentStep);
    let tooltipDom = document.createElement('div');
    tooltipDom.classList.add('tooltip');
    tooltipDom.classList.remove('active');
    step.appendChild(tooltipDom);
    renderCaption(tooltip, tooltipDom);
    renderButtons(tooltip, tooltipDom, currentStep);
}

/*caption rendering function*/
function renderCaption(tooltip, tooltipDom) {
    let caption = document.createElement('span');
    caption.classList.add('tooltipCaption');
    caption.textContent = tooltip.caption;
    tooltipDom.appendChild(caption);
}

/*buttons rendering function*/
function renderButtons(tooltip, tooltipDom, currentStep) {
    for (let i = 0; i < tooltip.buttons.length; i++) {
        let button = document.createElement('button');
        button.classList.add('tooltipButton');
        button.type = 'button';
        button.onclick = goNextStep;
        button.textContent = tooltip.buttons[i];
        // This condition checks this button is the last one
        if (currentPage === (pages.length - 1) && currentStep === (pages[currentPage].steps.length - 1)) {
            button.classList.add('finishButton');
        }
        tooltipDom.appendChild(button);
    }
}

function goNextStep() {
    currentStep++;
    checkCurrentStep();
}

/*shows/hides the central picture (showing/hiding the picture is organized for the correct animation procedure)*/
function showImage() {
    let index = pages[currentPage].steps[currentStep].image;
    let images = document.getElementsByClassName('mainAreaImg');
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    images[index].classList.add('active');
}


function goPassedStep(index) {
    currentStep = index;
    checkCurrentStep();
}

document.querySelector('body').addEventListener('click', function (event) {
    if (event.target.classList[1] === 'passedQuestion') {
        let id = +event.target.id.replace('step-', '');
        goPassedStep(id);
    }
});


/*Updating tooltips function. The tooltip value after the update depends on whether the step is active or it's the final tooltip*/
function updateToolTips(currentStep) {
    let tooltips = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltips.length; i++) {
        if (i === currentStep) {
            tooltips[i].classList.add('active');
            tooltips[i].classList.remove('lastTooltip');
        }
        else {
            tooltips[i].classList.remove('active');
            tooltips[i].classList.remove('lastTooltip');

        }
        if (currentPage === (pages.length - 1) && currentStep === (pages[currentPage].steps.length - 1)) {
            tooltips[i].classList.add('lastTooltip');
        }
    }
}

/*Displays the current tooltip, depending on the current step */
function showTooltip(currentStep) {
    let tooltips = document.getElementsByClassName('tooltip');
    tooltips[currentStep].classList.add('active');
}

/*Checking of the next step. If the step is last on the page - the counters are updated*/
function checkCurrentStep() {
    let stepsLength = pages[currentPage].steps.length;
    if (currentStep >= stepsLength) {
        currentPage++;
        currentStep = 0;
        renderPage(currentPage, currentStep);
    } else {
        updateSteps(currentStep);
    }
}
/*endregion Main code*/