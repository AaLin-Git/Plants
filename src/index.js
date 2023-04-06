console.log(
  "1. Вёрстка валидная +10 \n2. Вёрстка семантическая +20:\n--<header>, <main>, <footer> +3\n--пять элементов <section> (по количеству секций) +3\n--только один заголовок <h1> +3\n--четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n--один элемент <nav> (панель навигации) +3\n--два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n--пять кнопок <button> +2\n3.Вёрстка соответствует макету +48\n--блок <header> +6\n--секция welcome +7\n--секция about +7\n--секция service +7\n--секция prices +7\n--секция contacts +7\n--блок <footer> +7\n4. Требования к css + 12\n--для построения сетки используются флексы или гриды +2\n--при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n--фоновый цвет тянется на всю ширину страницы +2\n--иконки добавлены в формате .svg +2\n--изображения добавлены в формате .jpg или .png +2\n--есть favicon +2\n5. Интерактивность, реализуемая через css +20\n--плавная прокрутка по якорям +5\n--cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n--интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n--обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n\n\nScore 110/110"
);

console.log(
  "1. Вёрстка соответствует макету. Ширина экрана 768px +24\n--блок <header> +2\n--секция welcome +3\n--секция about +4\n--секция service +4\n--секция prices +4\n--секция contacts +4\n--блок <footer> + 3\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n--блок <header> +2\n--секция welcome +3\n--секция about +4\n--секция service +4\n--секция prices +4\n--секция contacts +4\n--блок <footer> + 3\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n--нет полосы прокрутки при ширине страницы от 1440рх до 380px +7\n--нет полосы прокрутки при ширине страницы от 380px до 320рх +8\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n--при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\n--при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n--адаптивное меню соответствует цветовой схеме макета +4\n--при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n--ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n--при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n\nScore: 85/85"
);

console.log(
  "1.При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n--При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n--Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20\n--Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n--При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n--Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25\n3.В разделе contacts реализован select с выбором городов +25\n--В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n--При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10\n\nScore: 125/125"
);

/* Burger menu */

const burgerButton = document.querySelector("#burger-icon");
const burgerMenu = document.querySelector("#hidden-nav");
const body = document.querySelector(".container");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const showBurgerMenu = () => {
  burgerMenu.classList.toggle("visible");
  burgerButton.classList.toggle("cross-icon");
  main.classList.toggle("moving-main");
  footer.classList.toggle("moving-main");
  body.classList.toggle("bigger-container");
  if (burgerMenu.classList.contains("visible")) {
    burgerMenu.closest(".container").addEventListener("click", hideBurgerMenu);
  }
};

const hideBurgerMenu = () => {
  burgerMenu.classList.remove("visible");
  burgerButton.classList.remove("cross-icon");
  body.classList.remove("bigger-container");
  main.classList.remove("moving-main");
  footer.classList.remove("moving-main");
};

burgerButton.addEventListener("click", showBurgerMenu);
burgerMenu.addEventListener("click", showBurgerMenu);

/* Service cards */

const gardensButton = document.querySelector("#gardens-button");
const lawnButton = document.querySelector("#lawn-button");
const plantingButton = document.querySelector("#planting-button");

const bluredGardens = document.querySelectorAll("#gardens");
const bluredLawn = document.querySelectorAll("#lawn");
const bluredPlanting = document.querySelectorAll("#planting");

const pressedGardens = gardensButton.classList.contains("active-button");
const pressedLawn = lawnButton.classList.contains("active-button");
const pressedPlanting = plantingButton.classList.contains("active-button");

const focusGardens = () => {
  if (
    gardensButton.classList.contains("active-button") &&
    lawnButton.classList.contains("active-button")
  ) {
    bluredPlanting.forEach((item) => item.classList.add("blur"));
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
  } else if (
    gardensButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    bluredLawn.forEach((item) => item.classList.add("blur"));
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    gardensButton.classList.contains("active-button") &&
    !lawnButton.classList.contains("active-button") &&
    !plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.add("blur"));
    bluredPlanting.forEach((item) => item.classList.add("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    !lawnButton.classList.contains("active-button") &&
    !plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    (lawnButton.classList.contains("active-button") ||
      plantingButton.classList.contains("active-button"))
  ) {
    bluredGardens.forEach((item) => item.classList.add("blur"));
  }
};

const focusLawn = () => {
  if (
    gardensButton.classList.contains("active-button") &&
    lawnButton.classList.contains("active-button")
  ) {
    bluredPlanting.forEach((item) => item.classList.add("blur"));
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
  } else if (
    lawnButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    bluredLawn.forEach((item) => item.classList.remove("blur"));
    bluredGardens.forEach((item) => item.classList.add("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    lawnButton.classList.contains("active-button") &&
    !plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.add("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.add("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    !lawnButton.classList.contains("active-button") &&
    !plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !lawnButton.classList.contains("active-button") &&
    (gardensButton.classList.contains("active-button") ||
      plantingButton.classList.contains("active-button"))
  ) {
    bluredLawn.forEach((item) => item.classList.add("blur"));
  }
};

const focusPlanting = () => {
  if (
    plantingButton.classList.contains("active-button") &&
    lawnButton.classList.contains("active-button")
  ) {
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
    bluredGardens.forEach((item) => item.classList.add("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
  } else if (
    gardensButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    bluredLawn.forEach((item) => item.classList.add("blur"));
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    !lawnButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.add("blur"));
    bluredLawn.forEach((item) => item.classList.add("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !gardensButton.classList.contains("active-button") &&
    !lawnButton.classList.contains("active-button") &&
    !plantingButton.classList.contains("active-button")
  ) {
    bluredGardens.forEach((item) => item.classList.remove("blur"));
    bluredLawn.forEach((item) => item.classList.remove("blur"));
    bluredPlanting.forEach((item) => item.classList.remove("blur"));
  } else if (
    !plantingButton.classList.contains("active-button") &&
    (lawnButton.classList.contains("active-button") ||
      gardensButton.classList.contains("active-button"))
  ) {
    bluredPlanting.forEach((item) => item.classList.add("blur"));
  }
};

gardensButton.addEventListener("click", () => {
  if (
    lawnButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    return false;
  } else {
    gardensButton.classList.toggle("active-button");
    focusGardens();
  }
});
lawnButton.addEventListener("click", () => {
  if (
    gardensButton.classList.contains("active-button") &&
    plantingButton.classList.contains("active-button")
  ) {
    return false;
  } else {
    lawnButton.classList.toggle("active-button");
    focusLawn();
  }
});
plantingButton.addEventListener("click", () => {
  if (
    lawnButton.classList.contains("active-button") &&
    gardensButton.classList.contains("active-button")
  ) {
    return false;
  } else {
    plantingButton.classList.toggle("active-button");
    focusPlanting();
  }
});

/* Prices accordion */

const selectBasics = document.querySelector("#prices-option-basics");
const selectStandard = document.querySelector("#prices-option-standard");
const selectProcare = document.querySelector("#prices-option-procare");

const openedBasics = document.querySelector("#prices-hidden-basics");
const openedStandard = document.querySelector("#prices-hidden-standard");
const openedProcare = document.querySelector("#prices-hidden-procare");

const basicsButton = document.querySelector("#basics-button");
const standardButton = document.querySelector("#standard-button");
const procareButton = document.querySelector("#procare-button");

const pricesBody = document.querySelector(".prices-div");

const showBasics = () => {
  openedBasics.classList.add("visible-basics");
  selectBasics.classList.add("prices-option-hide");
  pricesBody.classList.add("prices-div-opened");
};

const showStandard = () => {
  openedStandard.classList.add("visible-standard");
  selectStandard.classList.add("prices-option-hide");
  pricesBody.classList.add("prices-div-opened");
};

const showProcare = () => {
  openedProcare.classList.add("visible-procare");
  selectProcare.classList.add("prices-option-hide");
  pricesBody.classList.add("prices-div-opened");
};

const hideBasics = () => {
  openedBasics.classList.remove("visible-basics");
  selectBasics.classList.remove("prices-option-hide");
  //pricesBody.classList.remove("prices-div-opened");
};

const hideStandard = () => {
  openedStandard.classList.remove("visible-standard");
  selectStandard.classList.remove("prices-option-hide");
  //pricesBody.classList.remove("prices-div-opened");
};

const hideProcare = () => {
  openedProcare.classList.remove("visible-procare");
  selectProcare.classList.remove("prices-option-hide");
  //pricesBody.classList.remove("prices-div-opened");
};

selectBasics.addEventListener("click", () => {
  showBasics();
  hideStandard();
  hideProcare();
});
selectStandard.addEventListener("click", () => {
  showStandard();
  hideBasics();
  hideProcare();
});
selectProcare.addEventListener("click", () => {
  showProcare();
  hideBasics();
  hideStandard();
});

basicsButton.addEventListener("click", () => {
  hideBasics();
  pricesBody.classList.remove("prices-div-opened");
});
standardButton.addEventListener("click", () => {
  hideStandard();
  pricesBody.classList.remove("prices-div-opened");
});
procareButton.addEventListener("click", () => {
  hideProcare();
  pricesBody.classList.remove("prices-div-opened");
});

/* Contacts menu */

const contactButton = document.querySelector("#contacts-option");
const openedContacts = document.querySelector("#contacts-option-hidden");
const contactsBody = document.querySelector("#contacts");

const showContacts = () => {
  openedContacts.classList.toggle("contacts-option-visible");
  contactButton.classList.add("contacts-option-pressed");
  contactsBody.classList.add("contacts-open");
  if (
    !canandaiguaSection.classList.contains("chosen-contact-visible") &&
    !newYorkSection.classList.contains("chosen-contact-visible") &&
    !yonkersSection.classList.contains("chosen-contact-visible") &&
    !sherrillSection.classList.contains("chosen-contact-visible") &&
    !openedContacts.classList.contains("contacts-option-visible")
  ) {
    contactButton.classList.remove("contacts-option-pressed");
    contactsBody.classList.remove("contacts-open");
  }
};

contactButton.addEventListener("click", () => {
  //contactsBody.classList.toggle("contacts-open");
  showContacts();
  hideContactSection();
});

const canandaiguaButton = document.querySelector("#canandaigua-item");
const newYorkButton = document.querySelector("#new-york-item");
const yonkersButton = document.querySelector("#yonkers-item");
const sherrillButton = document.querySelector("#sherrill-item");

const canandaiguaSection = document.querySelector("#chosen-canandaigua");
const newYorkSection = document.querySelector("#chosen-new-york");
const yonkersSection = document.querySelector("#chosen-yonkers");
const sherrillSection = document.querySelector("#chosen-sherrill");
const allContactSection = document.querySelectorAll("#chosen-contact-wrapper");

//contactsBody.classList.add("contacts-open");

const showCanandaigua = () => {
  canandaiguaSection.classList.add("chosen-contact-visible");
  openedContacts.classList.remove("contacts-option-visible");
};

const showNewYork = () => {
  newYorkSection.classList.add("chosen-contact-visible");
  openedContacts.classList.remove("contacts-option-visible");
};

const showYonkers = () => {
  yonkersSection.classList.add("chosen-contact-visible");
  openedContacts.classList.remove("contacts-option-visible");
};

const showSherrill = () => {
  sherrillSection.classList.add("chosen-contact-visible");
  openedContacts.classList.remove("contacts-option-visible");
};

const hideContactSection = () => {
  canandaiguaSection.classList.remove("chosen-contact-visible");
  newYorkSection.classList.remove("chosen-contact-visible");
  yonkersSection.classList.remove("chosen-contact-visible");
  sherrillSection.classList.remove("chosen-contact-visible");
};

canandaiguaButton.addEventListener("click", showCanandaigua);
newYorkButton.addEventListener("click", showNewYork);
yonkersButton.addEventListener("click", showYonkers);
sherrillButton.addEventListener("click", showSherrill);

if (
  !canandaiguaSection.classList.contains("chosen-contact-visible") &&
  !newYorkSection.classList.contains("chosen-contact-visible") &&
  !yonkersSection.classList.contains("chosen-contact-visible") &&
  !sherrillSection.classList.contains("chosen-contact-visible") &&
  !openedContacts.classList.contains("contacts-option-visible")
) {
  contactButton.classList.remove("contacts-option-pressed");
}
