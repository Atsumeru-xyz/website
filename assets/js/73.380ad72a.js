(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{354:function(t,r,a){"use strict";a.r(r);var e=a(13),v=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"запуск-у-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#запуск-у-docker"}},[t._v("#")]),t._v(" Запуск у Docker")]),t._v(" "),r("h2",{attrs:{id:"регістри"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#регістри"}},[t._v("#")]),t._v(" Регістри")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),r("OutboundLink")],1),t._v(" образи опубліковано в таких регістрах:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/atsumerudev/atsumeru",target:"_blank",rel:"noopener noreferrer"}},[t._v("DockerHub"),r("OutboundLink")],1)])]),t._v(" "),r("div",{staticClass:"custom-block c-danger"},[r("h4",{staticClass:"c-title"}),r("p",[t._v("Образи підтримують архітектури "),r("code",[t._v("linux/arm/v7")]),t._v(" та "),r("code",[t._v("linux/arm64")]),t._v(" для запуску, наприклад, на "),r("code",[t._v("Raspberry Pi")]),t._v(", але в такому режимі підтримується тільки читання "),r("code",[t._v("ZIP")]),t._v(" архівів!")])]),r("h2",{attrs:{id:"теги-версіи"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#теги-версіи"}},[t._v("#")]),t._v(" Теги версій")]),t._v(" "),r("p",[t._v("Образ поставляється в різних версіях, які позначені тегами:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("latest")]),t._v(": найсвіжіший образ")]),t._v(" "),r("li",[r("code",[t._v("x.y.z")]),t._v(": образ із зазначеною версією "),r("code",[t._v("Atsumeru")]),t._v(" (наприклад, "),r("code",[t._v("1.0.2")]),t._v(")")])]),t._v(" "),r("h2",{attrs:{id:"використання"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#використання"}},[t._v("#")]),t._v(" Використання")]),t._v(" "),r("p",[t._v("Нижче наведено приклади сніпетів із поясненнями про те, як створити свій контейнер:")]),t._v(" "),r("h3",{attrs:{id:"за-допомогою-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#за-допомогою-docker"}},[t._v("#")]),t._v(" За допомогою "),r("code",[t._v("Docker")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker run -d \\\n    --name=atsumeru \\\n    -p 31337:31337 \\\n    -v /path/to/your/library:/library \\\n    -v /path/to/your/config:/app/config \\\n    -v /path/to/your/db:/app/database \\\n    -v /path/to/your/cache:/app/cache \\\n    -v /path/to/your/logs:/app/logs \\\n    --restart unless-stopped \\\n    atsumerudev/atsumeru:latest\n")])])]),r("p",[t._v("Після запуску контейнера виконайте команду")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("docker logs atsumeru\n")])])]),r("p",[t._v("для того, щоб дізнатися створений пароль для користувача "),r("code",[t._v("Admin")])]),t._v(" "),r("h2",{attrs:{id:"конфигурация"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#конфигурация"}},[t._v("#")]),t._v(" Конфигурация")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Параметр")]),t._v(" "),r("th",[t._v("Функція")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("--name=atsumeru")])]),t._v(" "),r("td",[t._v("Назва контейнера")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-p 31337")])]),t._v(" "),r("td",[t._v("Порт для доступу до сервера")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-v /path/to/your/library")])]),t._v(" "),r("td",[t._v("Шлях до файлів бібліотеки (архівів)")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-v /path/to/your/db")])]),t._v(" "),r("td",[t._v("Директорія, де сервер зберігатиме свої бази даних")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-v /path/to/your/config")])]),t._v(" "),r("td",[t._v("Директорія, де сервер зберігатиме свої файли конфігурації")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-v /path/to/your/cache")])]),t._v(" "),r("td",[t._v("Директорія, де сервер зберігатиме свій кеш обкладинок")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("-v /path/to/your/logs")])]),t._v(" "),r("td",[t._v("Директорія, де сервер зберігатиме свої логи")])])])]),t._v(" "),r("div",{staticClass:"custom-block c-tip"},[r("h4",{staticClass:"c-title"}),r("p",[t._v("За необхідності запустити відразу кілька серверів, створюйте для кожного контейнер з новою назвою і параметрами")])]),r("h2",{attrs:{id:"оновлення-контеинера"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#оновлення-контеинера"}},[t._v("#")]),t._v(" Оновлення контейнера")]),t._v(" "),r("h3",{attrs:{id:"за-допомогою-docker-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#за-допомогою-docker-2"}},[t._v("#")]),t._v(" За допомогою "),r("code",[t._v("Docker")])]),t._v(" "),r("ul",[r("li",[t._v("оновіть образ: "),r("code",[t._v("docker pull atsumerudev/atsumeru")])]),t._v(" "),r("li",[t._v("зупиніть запущений контейнер: "),r("code",[t._v("docker stop atsumeru")])]),t._v(" "),r("li",[t._v("видаліть старий контейнер: "),r("code",[t._v("docker rm atsumeru")])]),t._v(" "),r("li",[t._v("перестворіть контейнер, використовуючи ті ж параметри, які були використані раніше для створення старого контейнера")]),t._v(" "),r("li",[t._v("запустіть новий контейнер: "),r("code",[t._v("docker start atsumeru")])])]),t._v(" "),r("div",{staticClass:"custom-block c-tip"},[r("h4",{staticClass:"c-title"}),r("p",[t._v("Після оновлення контейнера також можна видалити старі образи командою"),r("br"),t._v(" "),r("code",[t._v("docker image prune")])])]),r("h3",{attrs:{id:"автоматичне-оновлення"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#автоматичне-оновлення"}},[t._v("#")]),t._v(" Автоматичне оновлення")]),t._v(" "),r("p",[t._v("Можна використовувати "),r("a",{attrs:{href:"https://github.com/containrrr/watchtower",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watchtower"),r("OutboundLink")],1),t._v(" для автоматичного оновлення "),r("code",[t._v("Docker")]),t._v(" контейнерів")])])}),[],!1,null,null,null);r.default=v.exports}}]);