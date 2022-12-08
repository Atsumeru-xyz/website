(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{327:function(t,e,r){"use strict";r.r(e);var a=r(13),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),e("p",[t._v("При необходимости открыть доступ к "),e("code",[t._v("Atsumeru")]),t._v(" серверу вне локальной сети, категорически рекомендуется защитить к нему запросы с помощью "),e("code",[t._v("https")]),t._v(" (особенно ввиду того, что основной способ авторизации - "),e("code",[t._v("Basic")]),t._v(")")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://spring.io/projects/spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot"),e("OutboundLink")],1),t._v(", который является сердцем сервера, поддерживает "),e("code",[t._v("https")]),t._v(" из коробки, но его необходимо настраивать самому, а self-signed сертификаты не поддерживаются (например, "),e("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("h2",{attrs:{id:"reverse-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy"}},[t._v("#")]),t._v(" Reverse Proxy")]),t._v(" "),e("p",[t._v("Оптимальным вариантом является использование "),e("RouterLink",{attrs:{to:"/ru/installation/https.html#cloudflare-reverse-proxy"}},[t._v("CloudFlare Reverse Proxy")]),t._v(", "),e("RouterLink",{attrs:{to:"/ru/installation/https.html#cloudflare-tunnel"}},[t._v("CloudFlare Tunnel")]),t._v(" или "),e("RouterLink",{attrs:{to:"/ru/installation/https.html#caddy"}},[t._v("Caddy")])],1),t._v(" "),e("div",{staticClass:"custom-block c-danger"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Для любого из указанных методов потребуется наличие собственного доменного имени с возможностью смены "),e("code",[t._v("NS-сервера")])])]),e("h3",{attrs:{id:"cloudflare-reverse-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-reverse-proxy"}},[t._v("#")]),t._v(" CloudFlare Reverse Proxy")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[e("code",[t._v("HTTPS")]),t._v(" сертификат предоставляется бесплатно и автоматически")])]),e("div",{staticClass:"custom-block c-danger"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Данный метод работает только при наличии статического/белого IP и с портами "),e("code",[t._v("80")]),t._v(", "),e("code",[t._v("8080")]),t._v(" или "),e("code",[t._v("443")]),t._v(". Если ваш сервер находится за "),e("code",[t._v("NAT")]),t._v(" или вы хотите использовать иной порт, воспользуйтесь "),e("RouterLink",{attrs:{to:"/ru/installation/https.html#cloudflare-tunnel"}},[t._v("CloudFlare Tunnel")])],1)]),e("ul",[e("li",[t._v("Необходимо зарегистрироваться в "),e("a",{attrs:{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Нажать на кнопку "),e("code",[t._v("Add Site")]),t._v(" на панели быстрого доступа")]),t._v(" "),e("li",[t._v("Следовать инструкции по добавлению и настройке своего домена")]),t._v(" "),e("li",[t._v("Открыть панель управления доменом")]),t._v(" "),e("li",[t._v("Перейти в раздел "),e("code",[t._v("DNS")])]),t._v(" "),e("li",[t._v("Настроить редирект на актуальный адрес сервера")])]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("Также, можно (и предпочтительно) включить проксирование запросов для кеширования их в "),e("code",[t._v("CloudFlare")]),t._v(" и сокрытия реального IP/адреса сервера")])]),e("h3",{attrs:{id:"cloudflare-tunnel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-tunnel"}},[t._v("#")]),t._v(" CloudFlare Tunnel")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[e("code",[t._v("HTTPS")]),t._v(" сертификат предоставляется бесплатно и автоматически")])]),e("ul",[e("li",[t._v("Необходимо зарегистрироваться в "),e("a",{attrs:{href:"https://one.dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare Zero Trust"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Открыть раздел "),e("code",[t._v("Access")])]),t._v(" "),e("li",[t._v("Открыть подраздел "),e("code",[t._v("Tunnel")])]),t._v(" "),e("li",[t._v("Нажать на "),e("code",[t._v("Create a tunnel")]),t._v(" и следовать инструкции по созданию туннеля")]),t._v(" "),e("li",[t._v("После создания туннеля и активации коннектора, открыть созданный туннель в панели управления")]),t._v(" "),e("li",[t._v("Во вкладке "),e("code",[t._v("Public Hostnames")]),t._v(" добавить свой домен с указанием IP/адреса сервера и его порта")])]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[t._v("При необходимости, во вкладке "),e("code",[t._v("Public Hostnames")]),t._v(" можно добавить поддомены для своего домена с указанием иного IP/адреса сервера или порта")])]),e("h3",{attrs:{id:"caddy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caddy"}},[t._v("#")]),t._v(" Caddy")]),t._v(" "),e("div",{staticClass:"custom-block c-tip"},[e("h4",{staticClass:"c-title"}),e("p",[e("a",{attrs:{href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Caddy"),e("OutboundLink")],1),t._v(" поддерживает автоматическую генерацию "),e("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),e("OutboundLink")],1),t._v(" сертификатов")])]),e("p",[t._v("Необходимо установить "),e("a",{attrs:{href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Caddy"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Примеры конфигурации:")]),t._v(" "),e("h4",{attrs:{id:"caddy-v1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caddy-v1"}},[t._v("#")]),t._v(" Caddy (v1):")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<свой домен> {\n  proxy / http://<ip/адрес сервера>:<порт> {\n    transparent\n  }\n}\n")])])]),e("h4",{attrs:{id:"caddy-v2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caddy-v2"}},[t._v("#")]),t._v(" Caddy (v2):")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<свой домен> {\n  reverse_proxy http://<ip/адрес сервера>:<порт>\n}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);