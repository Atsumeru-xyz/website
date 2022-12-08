(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{353:function(t,e,s){"use strict";s.r(e);var a=s(13),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"налаштування-сервера"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-сервера"}},[t._v("#")]),t._v(" Налаштування сервера")]),t._v(" "),e("h2",{attrs:{id:"зміна-порту"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#зміна-порту"}},[t._v("#")]),t._v(" Зміна порту")]),t._v(" "),e("p",[t._v("За замовчуванням  "),e("code",[t._v("Atsumeru")]),t._v(" запускається на порту "),e("code",[t._v("31337")]),t._v(", але іноді його потрібно змінити (порт зайнятий, не підходить, потрібен запуск декількох серверів). Для зміни порту необхідно додати аргумент "),e("code",[t._v("-Dserver.port=<порт>")]),t._v(" до команди запуску сервера, де "),e("code",[t._v("<порт>")]),t._v(" - бажаний порт. Наприклад:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("java -Dserver.port=<порт> -jar Atsumeru-x.y.z.jar\n")])])]),e("h2",{attrs:{id:"налаштування-додаткових-функціи"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-додаткових-функціи"}},[t._v("#")]),t._v(" Налаштування додаткових функцій")]),t._v(" "),e("p",[t._v("Усі налаштування сервера здійснюються або через інтерфейс налаштування у "),e("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru Manager"),e("OutboundLink")],1),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/windows.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/penguin.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/apple.png"}}),t._v(" або через ручне редагування файлу конфігурації "),e("code",[t._v("atsumeru.properties")]),t._v(", який знаходиться біля "),e("code",[t._v("jar")]),t._v(" файла")]),t._v(" "),e("div",{staticClass:"custom-block c-danger"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Ручне редагування файлу конфігурації вимагає перезапуску сервера для застосування налаштувань. Зміна налаштувань через "),e("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru Manager"),e("OutboundLink")],1),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/windows.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/penguin.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/apple.png"}}),t._v(" проводиться моментально")])]),e("h2",{attrs:{id:"налаштування-за-допомогою-atsumeru-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-за-допомогою-atsumeru-manager"}},[t._v("#")]),t._v(" Налаштування за допомогою Atsumeru Manager")]),t._v(" "),e("p",[t._v("Для налаштування сервера достатньо підключитися до нього через "),e("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru Manager"),e("OutboundLink")],1),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/windows.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/penguin.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/apple.png"}}),t._v(" и натиснути "),e("MaterialIcon",{attrs:{icon:"settings"}}),t._v(" на нижній панелі додатку, щоб відкрити вікно з доступними налаштуваннями, приклад якого показано нижче")],1),t._v(" "),e("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/assets/media/ru/installation/server-settings.png"}}),t._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"75%"}},[t._v("Інтерфейс редагування налаштувань через  Atsumeru Manager")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Детальніші описи кожного налаштування доступні в розділі "),e("RouterLink",{attrs:{to:"/ua/installation/server-settings.html#налаштування-за-допомогою-фаилу-конфігураціі"}},[t._v("Налаштування за допомогою файлу конфігурації")])],1)]),e("h2",{attrs:{id:"налаштування-за-допомогою-фаилу-конфігураціі"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#налаштування-за-допомогою-фаилу-конфігураціі"}},[t._v("#")]),t._v(" Налаштування за допомогою файлу конфігурації")]),t._v(" "),e("p",[t._v("Нижче описані доступні ключі та їхні можливі значення, які можна змінювати у файлі конфігурації "),e("code",[t._v("atsumeru.properties")]),t._v(" по формулі "),e("code",[t._v("<ключ>=<значення>")]),t._v(". Кожна пара має бути з нового рядка")]),t._v(" "),e("h4",{attrs:{id:"allow-loading-list-with-volumes-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-loading-list-with-volumes-true-false"}},[t._v("#")]),t._v(" allow_loading_list_with_volumes "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Дозволяє вивантаження списків томів разом з історією читання для поточного користувача у відповідях "),e("code",[t._v("REST API")])]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Функція використовується в додатках "),e("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru Manager"),e("OutboundLink")],1),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/windows.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/penguin.png"}}),t._v(" "),e("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/apple.png"}}),t._v(", "),e("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruAndroid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru"),e("OutboundLink")],1),t._v(" "),e("MaterialIcon",{attrs:{icon:"android"}}),t._v(" і "),e("a",{attrs:{href:"https://github.com/CrazyXacker/anilabx",target:"_blank",rel:"noopener noreferrer"}},[t._v("AniLabX"),e("OutboundLink")],1),t._v(" "),e("MaterialIcon",{attrs:{icon:"android"}}),t._v(" для відображення кількості томів і прогресу читання поточного користувача на картках у списках "),e("code",[t._v("Серій")])],1)]),e("p",[t._v("За замовчуванням: "),e("code",[t._v("true")])]),t._v(" "),e("h4",{attrs:{id:"allow-loading-list-with-chapters-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-loading-list-with-chapters-true-false"}},[t._v("#")]),t._v(" allow_loading_list_with_chapters "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Дозволяє вивантаження списків глав разом з історією читання для поточного користувача у відповідях "),e("code",[t._v("REST API")])]),t._v(" "),e("div",{staticClass:"custom-block c-danger"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Працює тільки з увімкненим "),e("RouterLink",{attrs:{to:"/ua/installation/server-settings.html#allow-loading-list-with-volumes-true-false"}},[t._v("allow_loading_list_with_volumes")])],1)]),e("p",[t._v("За замовчуванням: "),e("code",[t._v("true")])]),t._v(" "),e("h4",{attrs:{id:"disable-chapters-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-chapters-true-false"}},[t._v("#")]),t._v(" disable_chapters "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Повністю відключає читання та імпорт списків глав з архівів під час імпорту. У такому режимі сервер працює тільки з "),e("code",[t._v("Архівами")]),t._v(" і "),e("code",[t._v("Серіями")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Вимкнення імпорту глав істотно прискорює імпортування, активуючи багатопотоковий імпорт")])]),e("p",[t._v("За замовчуванням: "),e("code",[t._v("false")])]),t._v(" "),e("h4",{attrs:{id:"disable-request-logging-into-console-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-request-logging-into-console-true-false"}},[t._v("#")]),t._v(" disable_request_logging_into_console "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Повністю відключає логгування запитів до "),e("code",[t._v("REST API")]),t._v(" в консоль і залишає тільки логгування в лог-файл "),e("code",[t._v("requests.log")])]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Прогрес імпортування та кешування обкладинок продовжить відображатися в консолі")])]),e("p",[t._v("За замовчуванням: "),e("code",[t._v("false")])]),t._v(" "),e("h4",{attrs:{id:"disable-bonjour-service-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-bonjour-service-true-false"}},[t._v("#")]),t._v(" disable_bonjour_service "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Повністю відключає сервіс виявлення сервера за допомогою "),e("code",[t._v("Bonjour/Zeroconf")]),t._v(" протоколу ("),e("a",{attrs:{href:"https://github.com/mannodermaus/RxBonjour",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bonjour"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Коли сервіс увімкнено, підтримувані "),e("code",[t._v("Atsumeru")]),t._v(" додатки зможуть (за наявності реалізації) виявляти сервер у локальній мережі для швидкого підключення")])]),e("p",[t._v("За замовчуванням: "),e("code",[t._v("false")])]),t._v(" "),e("h4",{attrs:{id:"disable-watch-for-modified-files-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-watch-for-modified-files-true-false"}},[t._v("#")]),t._v(" disable_watch_for_modified_files "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Вимикає спостереження за змінами імпортованих файлів у файловій системі за допомогою "),e("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FileSystemWatcher"),e("OutboundLink")],1),t._v(". У такому разі автоматичний "),e("code",[t._v("Пошук нових архівів")]),t._v(" буде запущено тільки після видалення або додавання нових файлів")]),t._v(" "),e("p",[t._v("За замовчуванням: "),e("code",[t._v("false")])]),t._v(" "),e("h4",{attrs:{id:"disable-file-watcher-true-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-file-watcher-true-false"}},[t._v("#")]),t._v(" disable_file_watcher "),e("code",[t._v("<true/false>")])]),t._v(" "),e("p",[t._v("Повністю відключає сервіс спостереження за змінами імпортованих файлів у файловій системі за допомогою "),e("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FileSystemWatcher"),e("OutboundLink")],1),t._v(". У такому разі "),e("code",[t._v("Пошук нових архівів")]),t._v(" потрібно буде запускати вручну після внесення змін")]),t._v(" "),e("p",[t._v("За замовчуванням: "),e("code",[t._v("false")])])])}),[],!1,null,null,null);e.default=r.exports}}]);