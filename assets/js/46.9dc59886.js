(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{325:function(t,s,e){"use strict";e.r(s);var a=e(13),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"пользователи"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#пользователи"}},[t._v("#")]),t._v(" Пользователи")]),t._v(" "),s("p",[t._v("Сервер позволяет создавать неограниченное количество пользователей с разными правами и допусками. У каждого пользователя будет своя история чтения")]),t._v(" "),s("h2",{attrs:{id:"управление-пользователями"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#управление-пользователями"}},[t._v("#")]),t._v(" Управление пользователями")]),t._v(" "),s("p",[t._v("Для открытия окна управления пользователями (создание/редактирование/удаление) необходимо нажать "),s("MaterialIcon",{attrs:{icon:"person"}}),t._v(" на панели "),s("a",{attrs:{href:"https://github.com/AtsumeruDev/AtsumeruManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atsumeru Manager"),s("OutboundLink")],1),t._v(" "),s("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/windows.png"}}),t._v(" "),s("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/penguin.png"}}),t._v(" "),s("img",{staticStyle:{position:"relative",top:"6px"},attrs:{width:"24",height:"24",src:"/assets/media/icons/apple.png"}}),t._v(".")],1),t._v(" "),s("p",[t._v("В данном окне можно как изменить/удалить пользователей, так и создать новых")]),t._v(" "),s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/assets/media/ru/guides/users-list.png"}}),t._v(" "),s("p",{staticStyle:{"text-align":"center","font-size":"75%"}},[t._v("Интерфейс управления пользователями")]),t._v(" "),s("h3",{attrs:{id:"создание"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#создание"}},[t._v("#")]),t._v(" Создание")]),t._v(" "),s("p",[t._v("Для добавления нового пользователя необходимо нажать на кнопку "),s("code",[t._v("Добавить пользователя")]),t._v(". В открывшемся окне необходимо указать:")]),t._v(" "),s("ul",[s("li",[t._v("Имя пользователя")]),t._v(" "),s("li",[t._v("Пароль")]),t._v(" "),s("li",[t._v("Роли:\n"),s("ul",[s("li",[s("code",[t._v("ADMIN")]),t._v(" ("),s("em",[t._v("нет никаких ограничений. Игнорирование Допусков")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("USER")]),t._v(" ("),s("em",[t._v("дополнительные права на основе Допусков")]),t._v(")")])])]),t._v(" "),s("li",[t._v("Допуски "),s("Badge",{attrs:{vertical:"medium",text:"опционально"}}),t._v(" :\n"),s("ul",[s("li",[s("code",[t._v("IMPORTER")]),t._v(" ("),s("em",[t._v("позволяет управлять импортером")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("UPLOADER")]),t._v(" ("),s("em",[t._v("позволяет загружать новые файлы на сервера")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("METADATA_UPDATER")]),t._v(" ("),s("em",[t._v("позволяет редактировать метаданные")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("DOWNLOAD_FILES")]),t._v(" ("),s("em",[t._v("позволяет скачивать оригинальные файлы")]),t._v(")")])])],1),t._v(" "),s("li",[t._v("Доступ к категориям "),s("Badge",{attrs:{vertical:"medium",text:"опционально"}}),t._v(" ("),s("em",[t._v("ограничение доступа к отдельным "),s("RouterLink",{attrs:{to:"/ru/guides/library.html#категории"}},[t._v("Категориям")]),t._v(". Ограничения не применяются, если ничего не выбрано")],1),t._v(")")],1),t._v(" "),s("li",[t._v("Запрещенные жанры "),s("Badge",{attrs:{vertical:"medium",text:"опционально"}}),t._v(" ("),s("em",[t._v("ограничение доступа к контенту с определенными "),s("RouterLink",{attrs:{to:"/ru/glossary/genres.html"}},[t._v("Жанрами")])],1),t._v(")")],1),t._v(" "),s("li",[t._v("Запрещенные теги "),s("Badge",{attrs:{vertical:"medium",text:"опционально"}}),t._v(" ("),s("em",[t._v("ограничение доступа к контенту с определенными тегами")]),t._v(")")],1)]),t._v(" "),s("p",[t._v("Нажатие на "),s("MaterialIcon",{attrs:{icon:"save"}}),t._v(" "),s("code",[t._v("Сохранить")]),t._v(" создаст нового пользователя на сервере")],1),t._v(" "),s("div",{staticClass:"custom-block c-warning"},[s("h4",{staticClass:"c-title"}),s("p",[t._v("Список "),s("RouterLink",{attrs:{to:"/ru/glossary/genres.html"}},[t._v("Жанров")]),t._v(" заранее предопределен и ограничения можно установить на этом этапе")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ru/guides/library.html#категории"}},[t._v("Категории")]),t._v(" создаются Администратором или "),s("RouterLink",{attrs:{to:"/ru/guides/import.html"}},[t._v("Импортером")]),t._v(". Список тегов собирается из "),s("RouterLink",{attrs:{to:"/ru/guides/metadata.html"}},[t._v("Метаданных")]),t._v(" уже импортированного контента. При изменении этих наборов данных необходимо отредактировать созданных ранее пользователей для установки им новых ограничений, если в этом есть необходимость")],1)]),s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/assets/media/ru/guides/users-add.png"}}),t._v(" "),s("p",{staticStyle:{"text-align":"center","font-size":"75%"}},[t._v("Интерфейс создания пользователя")]),t._v(" "),s("h3",{attrs:{id:"редактирование"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#редактирование"}},[t._v("#")]),t._v(" Редактирование")]),t._v(" "),s("p",[t._v("Редактирование пользователя ничем не отличается от создания. Для редактирования необходимо нажать на соответствующую иконку возле пользователя. Откроется аналогичное окно, как при создании, но уже с заполненными данными, которые можно изменить и сохранить изменения")]),t._v(" "),s("div",{staticClass:"custom-block c-tip"},[s("h4",{staticClass:"c-title"}),s("p",[t._v("Допускается менять "),s("code",[t._v("Имя пользователя")]),t._v(". История чтения не потеряется, но при подключении к серверу нужно будет использовать новое имя")])]),s("h3",{attrs:{id:"удаление"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#удаление"}},[t._v("#")]),t._v(" Удаление")]),t._v(" "),s("p",[t._v("Для удаления пользователя нажмите на соответствующую иконку возле пользователя")]),t._v(" "),s("div",{staticClass:"custom-block c-warning"},[s("h4",{staticClass:"c-title"}),s("p",[t._v("Текущего пользователя удалить нельзя")])])])}),[],!1,null,null,null);s.default=v.exports}}]);