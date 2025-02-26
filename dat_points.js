const points = [
    //готовое
    {
        "name": "Маленькая канистра топлива",
        "description": "Находится в углу на крыше гаража возле одного из бургеров. Имеет 256.0 топлива.",
        "related_images" : ['./images/ru/tools/gascans/tinycan1.jpg', './images/ru/tools/gascans/tinycan2.jpg'],
        "category": "",
        "icon": "./icons/ru/gascan.png",
        "xPos": -15.1,
        "yPos": 12.3
    },
    {
        "name": "Пароль от входной двери",
        "description": "",
        "related_images" : ['./images/ru/notes/base1111.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 1,
        "yPos": 5
    },
    {
        "name": "Пароль от комнаты администратора",
        "description": "Лежит на ящиках в гараже. Комната администратора - переключатели света в коридоре Базы, аптечка, п с котиком.",
        "related_images" : ['./images/ru/notes/base1234.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -15,
        "yPos": 10
    },
    {
        "name": "Предупреждение бункера",
        "description": "",
        "related_images" : ['./images/ru/notes/bunker.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 20,
        "yPos": 22
    },
    {
        "name": "Переработка мусора",
        "description": "Книжка на верстаке в гараже Базы.",
        "related_images" : ['./images/ru/notes/scrap1.jpg', './images/ru/notes/scrap2.jpg', './images/ru/notes/scrap3.jpg', './images/ru/notes/scrap4.jpg', './images/ru/notes/scrap5.jpg', './images/ru/notes/scrap6.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -23,
        "yPos": 11
    },
    {
        "name": "Камни",
        "description": "В шкафу, вываливается вместе с камнями.",
        "related_images" : ['./images/ru/notes/rocks.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -19,
        "yPos": 19
    },
    {
        "name": "Фигура",
        "description": "Записка лежит в вентиляции возле стула, под кучей ИРП.",
        "related_images" : ['./images/ru/notes/vent.jpg', './images/ru/note_figure.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -1,
        "yPos": 26
    },
    {
        "name": "Мясной дождь",
        "description": "\"ЭТО ДОЖДЬ ИЗ ПЛОТИ\" на каждой строке, на всех каждой странице.",
        "related_images" : ['./images/ru/notes/fleshrain.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 651,
        "yPos": -641
    },
    {
        "name": "Походные сапоги",
        "description": "В офисном помещении Трансформатора 3, закидано мусором поверх.<br><br>Позволяет ходить по более крутым поверхностям, частично спасает от урона при падении.",
        "related_images" : ['./images/questwalker/equipment/hikingBoots1_1.png'],
        "category": "Экипировка",
        "icon": "./icons/hiking_boots.png",
        "xPos": -402.4,
        "yPos": -478.67
    },
    {
        "name": "Плита Воздуха",
        "description": "Подсказывает, как получить Руну Воздуха. Стоит на электростолбе у Трансформатора 1, можно добраться с помощью крюка.",
        "related_images" : ['./images/ru/runeplates/plate_air1.jpg', './images/ru/runeplates/plate_air2.jpg'],
        "category": "Рунные Плиты",
        "icon": "./icons/ru/slab.png",
        "xPos": 389,
        "yPos": 197
    },
    {
        "name": "Куча мяса",
        "description": "Используется для получение плюши Эйри. Собирать мусорным пакетом.",
        "related_images" : ['./images/ru/meatpile.jpg'],
        "category": "",
        "icon": "./icons/ru/meat.png",
        "xPos": -548.5,
        "yPos": 229.5
    },
    {
        "name": "Галстук-бабочки",
        "description": "Две штуки лежат поверх ящиков в огорожденной зоне тестовых деревьев.",
        "related_images" : ['./images/ru/equipment/bowties1.jpg', './images/ru/equipment/bowties2.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/bowtie.png",
        "xPos": 518.8,
        "yPos": -212.73
    },
    {
        "name": "Очки",
        "description": "Две пары очков, которые нельзя надеть на себя, но можно надеть на Керфур-О.",
        "related_images" : ['./images/ru/equipment/glasses.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/glasses.png",
        "xPos": 62.23,
        "yPos": 625.34
    },
    {
        "name": "Счётчик Гейгера",
        "description": "Предупреждает о радиоактивных местах.",
        "related_images" : ['./images/ru/equipment/rads.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/rads.png",
        "xPos": 62.99,
        "yPos": 628.3
    },
    {
        "name": "Куртки",
        "description": "Две куртки, лежат под столом. На себя надеть нельзя, но можно надеть на Керфур-О.",
        "related_images" : ['./images/ru/equipment/jackets.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/jacket.png",
        "xPos": -622.54,
        "yPos": -30.01
    },
    {
        "name": "Бейджики",
        "description": "Два бейджика, лежат на столе. На себя надеть нельзя, но можно надеть на Керфур-О.",
        "related_images" : ['./images/ru/equipment/badges.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/badge.png",
        "xPos": -622.54,
        "yPos": -28
    },
    {
        "name": "Ремкомплект",
        "description": "",
        "related_images" : ['./images/ru/toolbox/toolbox_hole.jpg'],
        "category": "Ремкомплекты",
        "icon": "./icons/ru/toolbox.png",
        "xPos": -620.45,
        "yPos": -31.61
    },
    {
        "name": "Ремкомплект",
        "description": "Внутри помещения Трансформатора 1.",
        "related_images" : ['./images/ru/toolbox/toolbox_tr1.jpg'],
        "category": "Ремкомплекты",
        "icon": "./icons/ru/toolbox.png",
        "xPos": 399.31,
        "yPos": 198.55
    },
    {
        "name": "Ремкомплект",
        "description": "В гараже, за деревянными палеттами.",
        "related_images" : ['./images/ru/toolbox/toolbox_garage.jpg'],
        "category": "Ремкомплекты",
        "icon": "./icons/ru/toolbox.png",
        "xPos": -15.85,
        "yPos": 7.86
    },
    {
        "name": "Ремкомплект",
        "description": "",
        "related_images" : ['./images/ru/toolbox/toolbox_bunker.jpg'],
        "category": "Ремкомплекты",
        "icon": "./icons/ru/toolbox.png",
        "xPos": 60.9,
        "yPos": 624.3
    },
    {
        "name": "Мотошлем",
        "description": "Мотошлем уменьшает количество урона головы, что также может снижать количество урона получаемое от падений. Можно попытаться получить шлем аккуратно спускаясь по скале и камням но, лучше, всё-таки использовать крюк.",
        "related_images" : ['./images/questwalker/equipment/helmet1_1.png', './images/questwalker/equipment/helmet1_2.png', './images/questwalker/equipment/helmet1_3.png', './images/ru/equipment/helmet_close.jpg'],
        "category": "Экипировка",
        "icon": "./icons/helmet.png",
        "xPos": -50.6,
        "yPos": 630
    },
    {
        "name": "Бочка с ИРП",
        "description": "Внутри воткнутого в землю огромного бревна у реки. Внутри бочки – 50 ИРП.",
        "related_images" : ['./images/ru/places/barrel1.jpg', './images/ru/places/barrel2.jpg'],
        "category": "",
        "icon": "./icons/barrel.png",
        "xPos": 233.36,
        "yPos": -329.2
    },
    {
        "name": "Тест деревьев",
        "description": "Упоминание тестовых деревьев. Если посмотрите на деревья вокруг себя - заметите, что такие находятся только на данной ограждённой территории.",
        "related_images" : ['./images/ru/notes/wiptrees.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 518,
        "yPos": -211
    },
    {
        "name": "Музыка в лесу",
        "description": "",
        "related_images" : ['./images/ru/notes/music.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 388,
        "yPos": 531
    },
    {
        "name": "Записка рыбака",
        "description": "Перевод записки:<br><br>У меня нет ни семьи, ни друзей, то есть никого, кто был бы готов принять участие в такой жизни, то есть, кто бы это ни был. Я передаю вам право собственности на мое ценное оборудование. Вы можете найти его на 175:-460. удачи. <br>Людвиг Хандшух. ",
        "related_images" : ['./images/ru/notes/fishman.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 58,
         "yPos": 627
    },
    {
        "name": "Прогресс в изучении Дыры",
        "description": "",
        "related_images" : ['./images/ru/notes/hole_progress.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -620,
         "yPos": -29
    },
    {
        "name": "Крипта",
        "description": "Записка находится под кучей мусора.",
        "related_images" : ['./images/ru/notes/crypto.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -394,
        "yPos": -474
    },
    {
        "name": "Радиоактивная капсула",
        "description": "<div style=\"color: red;\">НЕ СТОЙТЕ У НЕЁ, ОНА ДЕЙСТВИТЕЛЬНО РАДИОАКТИВНА!<br><br>ДЛЯ БЕЗОПАСНОГО ИЗВЛЕЧЕНИЯ И ПЕРЕНОСКИ ПОТРЕБУЕТСЯ ПРОТИВОРАДИОЦИОННЫЙ КОСТЮМ!</div>Торчит из земли возле скелета. Для выкапывания потребуется лопата.",
        "related_images" : ['./images/questwalker/tools/radioactiveCapsule1_1.png', './images/questwalker/tools/radioactiveCapsule1_2.png', './images/questwalker/tools/radioactiveCapsule1_3.png'],
        "category": "",
        "icon": "./icons/radioactive_canister.png",
        "xPos": -569.5,
        "yPos": 303.3
    },
    {
        "name": "Детектор ЕМП",
        "description": "Закопана возле упавшего фонаря. Помогает находить аномалии. Сигналы детектора усиливаются, например, в подвале Базы, у Стоунхеджа, в Хижине Охотника.",
        "related_images" : ['./images/questwalker/equipment/emfDetector1_1.png'],
        "category": "Инструменты",
        "icon": "./icons/emf_detector.png",
        "xPos": -623,
        "yPos": -33.8
    },
    {
        "name": "Кирка",
        "description": "Застряла в земле под водой, возле ветки. Желательно иметь при себе подводную маску.",
        "related_images" : ['./images/ru/tools/pickaxe.jpg'],
        "category": "Инструменты",
        "icon": "./icons/pickaxe.png",
        "xPos": 390.8,
        "yPos": -383.5
    },
    {
        "name": "Свеча",
        "description": "Античный подсвечник, который можно выкопать, находясь в бревне, под водой. Пасхалка в честь ютубера <a href=\"https://www.youtube.com/channel/UCnCmb1vpv90EeSX5g7K4UYQ\" target=\"_blank\" rel=\"noopener noreferrer\">The Librarian</a>. Для зажжения используйте зажигалку.",
        "related_images" : ['./images/ru/tools/candle1.jpg', './images/ru/tools/candle2.jpg', './images/ru/tools/candle3.jpg'],
        "category": "Инструменты",
        "icon": "./icons/candle.png",
        "xPos": 378.5,
        "yPos": -461
    },
    {
        "name": "Кружка с Аргемией",
        "description": "Стоит на самом верху электрического столба. Сбить её не получится - поэтому, крюк в дело и вжух-вжух-вжух.<br><br>Декоративный предмет, налить в неё кофе не выйдет<br> :(",
        "related_images" : ['./images/ru/argemcup.jpg'],
        "category": "",
        "icon": "./icons/argemug.png",
        "xPos": -62.2,
        "yPos": -304.58
    },
    {
        "name": "Рыболовные снасти",
        "description": "Закопаны, для раскопки нужна лопата. Для нахождения точного расположения может помочь металлоискатель.<br>Находится справа от воздушной турбины. Внутри коробки - части удочки и снасти. Соедините все части удочки на верстаке, и можете рыбачить.",
        "related_images" : ['./images/questwalker/tools/fishingSupplies1_1.png', './images/ru/tools/fishsupplies.jpg'],
        "category": "Инструменты",
        "icon": "./icons/fishermans_box.png",
        "xPos": 175.8,
        "yPos": -460.6
    },
    {
        "name": "Чертёж - Радиоактивная капсула",
        "description": "Чертёж для создания радиоактивной капсулы.",
        "related_images" : ['./images/ru/blueprint_rads.jpg'],
        "category": "",
        "icon": "./icons/ru/blueprint.png",
        "xPos": 62.75,
        "yPos": 627.19
    },
    {
        "name": "Лампа",
        "description": "Заправляется топливом из канистр.",
        "related_images" : ['./images/ru/tools/lamp1.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/lamp.png",
        "xPos": -620.89,
        "yPos": -31.15
    },
    {
        "name": "Сварочная маска",
        "description": "За ящиками.",
        "related_images" : ['./images/ru/equipment/welder_hole.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/weldingmask.png",
        "xPos": -617.48,
        "yPos": -22.53
    },
    {
        "name": "Сварочная маска",
        "description": "",
        "related_images" : ['./images/ru/equipment/welder_bunker.jpg'],
        "category": "Экипировка",
        "icon": "./icons/ru/weldingmask.png",
        "xPos": 61.9,
        "yPos": 622.97
    },
    {
        "name": "Свинцовая труба",
        "description": "Лежит в вентиляции. Ей можно бить.",
        "related_images" : ['./images/ru/tools/pipe.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/pipe.png",
        "xPos": -5.65,
        "yPos": 18.3
    },
    {
        "name": "Аптечка",
        "description": "В административной комнате Базы. Мгновенно вылечивает весь урон (кроме рака). Одноразовая.",
        "related_images" : ['./images/ru/tools/medkit.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/medkit.png",
        "xPos": -10.13,
        "yPos": 0.03
    },
    {
        "name": "Молотов",
        "description": "Лежит в вентиляции. Чтобы пользоваться, нужно включить \"Экстримальную боёвку\" в Эксперементальной вкладке настроек игры.",
        "related_images" : ['./images/ru/tools/molotov.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/molotov.png",
        "xPos": -8,
        "yPos": 17
    },
    {
        "name": "Газосварочный аппарат",
        "description": "Лежит на бочке. Используется при создании Радиоактивной Капсулы.",
        "related_images" : ['./images/ru/tools/gastool.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/gastool.png",
        "xPos": -620.5,
        "yPos": -23
    },
    {
        "name": "Табличка \"Не работает\"",
        "description": "Не вешается на стену, придётся прибивать гвоздями.",
        "related_images" : ['./images/ru/decor/outoforder1.jpg', './images/ru/decor/outoforder2.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/outoforder1.png",
        "xPos": 56.36,
        "yPos": 622.8
    },
    {
        "name": "Постер \"Hang in there!\"",
        "description": "Висит в администраторской комнате Базы.",
        "related_images" : ['./images/ru/decor/posters/poster_kitty.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/posters.png",
        "xPos": -9.15,
        "yPos": 2
    },
    {
        "name": "Постер карты",
        "description": "В главной комнате Базы.",
        "related_images" : ['./images/ru/decor/posters/poster_map.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/posters.png",
        "xPos": -5.18,
        "yPos": 11.7
    },
    {
        "name": "Постер о кофе",
        "description": "Висит в столовой Базы.",
        "related_images" : ['./images/ru/decor/posters/poster_coffee.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/posters.png",
        "xPos": -17.5,
        "yPos": 16.2
    },
    {
        "name": "Постер о чистке рук",
        "description": "Висит в туалете Базы.",
        "related_images" : ['./images/ru/decor/posters/poster_filth.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/posters.png",
        "xPos": -11.2,
        "yPos": 1.8
    },
    {
        "name": "Постер \"Я верю\"",
        "description": "Висит в спальне-кухне Базы.<br><br>Является отсылкой на сериал \"Секретные Материалы\" - замазаны буквы \"want to\", вместо НЛО - Стрела Ариралов.",
        "related_images" : ['./images/ru/decor/posters/poster_believe.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/posters.png",
        "xPos": -7,
        "yPos": 10.25
    },
    {
        "name": "Крафт молотова",
        "description": "Три отдельные записки в Трансформаторе 1.",
        "related_images" : ['./images/ru/notes/molotov1.jpg', './images/ru/notes/molotov2.jpg', './images/ru/notes/molotov3.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 390.5,
        "yPos": 201.6
    },
    {
        "name": "Крафт самодельной бомбы",
        "description": "",
        "related_images" : ['./images/ru/notes/pipebomb1.jpg', './images/ru/notes/pipebomb2.jpg', './images/ru/notes/pipebomb3.jpg', './images/ru/notes/pipebomb4.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 527.11,
        "yPos": -699.18
    },
    // Satellites
    {
        "name": "Bravo",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/b.png",
        "xPos": -100,
        "yPos": -200
    },
    {
        "name": "Charlie",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/c.png",
        "xPos": 0,
        "yPos": -200
    },
    {
        "name": "Delta",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/d.png",
        "xPos": 100,
        "yPos": -200
    },
    {
        "name": "Echo",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/e.png",
        "xPos": 200,
        "yPos": -100
    },
    {
        "name": "Foxtrot",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/f.png",
        "xPos": 200,
        "yPos": 0
    },
    {
        "name": "Golf",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/g.png",
        "xPos": 200,
        "yPos": 100
    },
    {
        "name": "Hotel",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/h.png",
        "xPos": 100,
        "yPos": 200
    },
    {
        "name": "India",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/i.png",
        "xPos": 0,
        "yPos": 200
    },
    {
        "name": "Juliett",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/j.png",
        "xPos": -100,
        "yPos": 200
    },
    {
        "name": "Kilo",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/k.png",
        "xPos": -200,
        "yPos": 100
    },
    {
        "name": "Lima",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/l.png",
        "xPos": -200,
        "yPos": 0
    },
    {
        "name": "Mike",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/m.png",
        "xPos": -200,
        "yPos": -100
    },
    {
        "name": "November",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/n.png",
        "xPos": -300,
        "yPos": -300
    },
    {
        "name": "Oscar",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/o.png",
        "xPos": 300,
        "yPos": -300
    },
    {
        "name": "Papa",
        "description": "Мама.",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/p.png",
        "xPos": 300,
        "yPos": 300
    },
    {
        "name": "Quebec",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/q.png",
        "xPos": -300,
        "yPos": 300
    },
    {
        "name": "Romeo",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/r.png",
        "xPos": -500,
        "yPos": -500
    },
    {
        "name": "Sierra",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/s.png",
        "xPos": 0,
        "yPos": -500
    },
    {
        "name": "Tango",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/t.png",
        "xPos": 500,
        "yPos": -500
    },
    {
        "name": "Uniform",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/u.png",
        "xPos": 500,
        "yPos": 0
    },
    {
        "name": "Victor",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/v.png",
        "xPos": 500,
        "yPos": 500
    },
    {
        "name": "Whiskey",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/w.png",
        "xPos": 0,
        "yPos": 500
    },
    {
        "name": "Xray",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/x.png",
        "xPos": -500,
        "yPos": 500
    },
    {
        "name": "Yankee",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/y.png",
        "xPos": -500,
        "yPos": 0
    },
    {
        "name": "Zulu",
        "description": "",
        "related_images" : [],
        "category": "Радиотелескопы",
        "icon": "./icons/z.png",
        "xPos": 10000,
        "yPos": 10000
    },
    // Алтарь Фурфура
    {
        "name": "Алтарь Фурфура",
        "description": "В пещере, между стеной пещеры и гнездом.",
        "related_images" : ['./images/furfur1_1.png', './images/furfur1_2.png'],
        "category": "Алтарь Фурфура",
        "icon": "./icons/furfurA_0.png",
        "xPos": -671.8,
        "yPos": -563.7
    },
    {
        "name": "Алтарь Фурфура",
        "description": "У камней возле забора, для выкапывания потребуется лопата.",
        "related_images" : ['./images/furfur2_1.png'],
        "category": "Алтарь Фурфура",
        "icon": "./icons/furfurA_1.png",
        "xPos": 253,
        "yPos": 585.1
    },
    {
        "name": "Алтарь Фурфура",
        "description": "Можно выкопать лопатой возле торчащей ветки в период между 2 и 3 часами ночи. Желательно иметь подводную маску.",
        "related_images" : ['./images/furfur3_1.png'],
        "category": "Алтарь Фурфура",
        "icon": "./icons/furfurA_2.png",
        "xPos": 391.1,
        "yPos": -383.7
    },
    // Metal Tiles
    {
        "name": "Металлическая Плитка #1",
        "description": "Спрятана за колонной “балкона” Базы, можно забраться спрыгнув крыши, или с помощью крюка.",
        "related_images" : ['./images/questwalker/metaltiles/tile1_1.png', './images/questwalker/metaltiles/tile1_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -9,
        "yPos": 3
    },
    {
        "name": "Металлическая Плитка #2",
        "description": "На бревне моста.",
        "related_images" : ['./images/questwalker/metaltiles/tile2_1.png', './images/questwalker/metaltiles/tile2_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -77.3,
        "yPos": 15.1
    },
    {
        "name": "Металлическая Плитка #3",
        "description": "Застряла в основании ствола дерева.",
        "related_images" : ['./images/questwalker/metaltiles/tile3_1.png', './images/questwalker/metaltiles/tile3_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -464.3,
        "yPos": 173.5
    },
    {
        "name": "Металлическая Плитка #4",
        "description": "WIP",
        "related_images" : ['./images/questwalker/metaltiles/tile4_1.png', './images/questwalker/metaltiles/tile4_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -525.3,
        "yPos": -48
    },
    {
        "name": "Металлическая Плитка #5",
        "description": "Спрятана за ящиками у Дыры.",
        "related_images" : ['./images/questwalker/metaltiles/tile5_1.png', './images/questwalker/metaltiles/tile5_2.png', './images/questwalker/metaltiles/tile5_3.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -615,
        "yPos": -23
    },
    {
        "name": "Металлическая Плитка #6",
        "description": "Лежит на крыше будки охранника. Залезть можно прыгая по столбам, или с помощью крюка.",
        "related_images" : ['./images/questwalker/metaltiles/tile6_1.png', './images/ru/metaltiles/tile_guard1.jpg', './images/ru/metaltiles/tile_guard2.jpg'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -372,
        "yPos": 702.6
    },
    {
        "name": "Металлическая Плитка #7",
        "description": "Лежит возле Зелёного шкафа.",
        "related_images" : ['./images/questwalker/metaltiles/tile7_1.png', './images/questwalker/metaltiles/tile7_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 616,
        "yPos": 621
    },
    {
        "name": "Металлическая Плитка #8",
        "description": "Лежит за стеной телескопа Uniform. Просто перелезьте через перила и пройдитесь по выступу.",
        "related_images" : ['./images/questwalker/metaltiles/tile8_1.png', './images/questwalker/metaltiles/tile8_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 500.37,
        "yPos": -2.7
    },
    {
        "name": "Металлическая Плитка #9",
        "description": "Да-да, всё верно, именно там. Нужно будет перелезть через основном забор карты и двигаться к стыку северного и восточного барьеров.",
        "related_images" : ['./images/questwalker/metaltiles/tile9_1.png', './images/questwalker/metaltiles/tile9_2.png', './images/questwalker/metaltiles/tile9_3.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 874,
        "yPos": -874
    },
    // Argemia Plushes
    {
        "name": "Красная Аргемия",
        "description": "Сидит в крутой яме. Выбраться из ямы можно крюком, или телепортировавшись, нажав на пончик.",
        "related_images" : ['./images/questwalker/plush//argemia/redArgemia1_1.png', './images/questwalker/plush//argemia/redArgemia1_2.png', './images/questwalker/plush//argemia/redArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/red_argemia.png",
        "xPos": 626,
        "yPos": -128
    },
    {
        "name": "Зелёная Аргемия",
        "description": "Да, за забором. Сидит на высокой горе, любуясь видом.",
        "related_images" : ['./images/questwalker/plush//argemia/greenArgemia1_1.png', './images/questwalker/plush//argemia/greenArgemia1_2.png', './images/questwalker/plush//argemia/greenArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/green_argemia.png",
        "xPos": 239,
        "yPos": 828
    },
    {
        "name": "Синяя Аргемия",
        "description": "In the river near quebec.",
        "related_images" : ['./images/questwalker/plush//argemia/blueArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/blue_argemia.png",
        "xPos": -315,
        "yPos": 398
    },
    {
        "name": "Голубая Аргемия",
        "description": "Для призыва плюши нужно положить ровно 12 упаковок креветок в мини-бассейн на Базе. После этого нужно совершить взрыв в воде – для этого можно использовать канистру или взрывную бочку.",
        "related_images" : ['./images/questwalker/plush//argemia/cyanArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/cyan_argemia.png",
        "xPos": -8.5,
        "yPos": 23.5
    },
    {
        "name": "Розовая Аргемия",
        "description": "Появляется после получения сигнала <i>“Розовый Луч”</i>.",
        "related_images" : ['./images/questwalker/plush//argemia/magentaArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/magenta_argemia.png",
        "xPos": 637.5,
        "yPos": 46.8
    },
    {
        "name": "Жёлтая Аргемия",
        "description": "The yellow Argemia plush requires a ritual to spawn.<br>- First, place a shrimp pack (or multiple) at each corner of the map's fence.<br>- Next, place a shrimp pack on the sewer drain in the basement.<br>- Then, nearing 12:50 at night, stand in a corner of the basement and face away from the shrimp. Around 00:00, a wooshing sound will play, and you can turn to find the argemia summoned. It might take a couple minutes to spawn, so do not turn until you hear it spawn or at least 00:15.<br><br>You can use a clock/watch to help keep track of time. This ritual can be difficult to preform due to cockroaches or Arirals eating the shrimp you've placed.",
        "related_images" : ['./images/questwalker/plush//argemia/yellowArgemia1_1.png', './images/questwalker/plush//argemia/yellowArgemia1_2.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/yellow_argemia.png",
        "xPos": -11,
        "yPos": 23
    },
    {
        "name": "Ядерная синяя Аргемия",
        "description": "Ты что, кошканутый? Шо ты там делаешь? Самое абсурдное место!<br><br>Сидит на невидимом кубе высоко в небе. Сбить её предметами нельзя, поэтому придётся добираться до неё самостоятельно.<br><br>Можно лезть вверх барьера с помощью крюка, а можно взлететь на стуле, используя воздушные шарики.",
        "related_images" : ['./images/questwalker/plush//argemia/glowingBlueArgemia1_1.png', './images/questwalker/plush//argemia/glowingBlueArgemia1_2.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/glowing_blue_argemia.png",
        "xPos": 872,
        "yPos": -792
    },
    {
        "name": "Ядерная голубая Аргемия",
        "description": "Needs to be dug up using a shovel. You can use a metal detector if you're having any trouble finding it. Be careful to not let the plushie roll down the hill.",
        "related_images" : ['./images/questwalker/plush//argemia/glowingCyanArgemia1_1.png', './images/questwalker/plush//argemia/glowingCyanArgemia1_2.png', './images/questwalker/plush//argemia/glowingCyanArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/glowing_cyan_argemia.png",
        "xPos": -634,
        "yPos": 181.4
    },
    {
        "name": "Ядерная розовая Аргемия",
        "description": "The plush's spawn location is located near the top of the tower. In order for the plush to spawn, something (a piece of trash, a drone, etc.) needs to enter the spawning location's hitbox. The usual method is placing a drone around (35.22, -37.23) and then having the drone fly straight up. You can use a digital map to place the drone accurately.<br>When the plush spawns, it will fall. Make sure to watch the drone's camera and check outside often so you don't miss it.",
        "related_images" : ['./images/questwalker/plush//argemia/glowingMagentaArgemia1_1.png', './images/questwalker/plush//argemia/glowingMagentaArgemia1_2.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/glowing_magenta_argemia.png",
        "xPos": 35.22,
        "yPos": -37.23
    },
    {
        "name": "Плюша Антибризера",
        "description": "Appears in the nest in the antibreather cave at 3:33am in-game. In order for it to spawn, you must be in the cave when the time passes. The plush won't disappear, but the plush only spawns in once, so don't lose it.<br>To open the cave, you need to be in the cave entrance when either wolfgang or the antibreather goes through it.",
        "related_images" : ['./images/antibreatherPlush1_1.png', './images/antibreatherPlush1_2.png'],
        "category": "Другие плюши",
        "icon": "./icons/antibreather_plush.png",
        "xPos": -672.7,
        "yPos": -567
    },
    // Points of interest
    {
        "name": "Прибор Розиталов",
        "description": "Лежит между камней. Активируется при получении сигнала <i>“Розовый Луч”</i>",
        "related_images" : ['./images/rozitalTech1_1.png', './images/rozitalTech1_2.png', './images/rozitalTech1_3.png', './images/rozitalTech1_4.png'],
        "category": "Точки Интереса",
        "icon": "./icons/rozital.png",
        "xPos": 637,
        "yPos": 44
    },
    {
        "name": "Базальтовые столбы",
        "description": "<div style=\"color: red;\">ВНИМАНИЕ: МОГУТ ИСПОРТИТЬ СОХРАНЕНИЕ</div><br>Можно найти с помощью металлодетектора.<br>После раскапывания, начнётся медленный процесс роста первого столба. После завершения роста первого, появится второй, и так они будут расти почти бесконечно, направляясь в сторону игрока.<br>Прекращают рост, если:<br>- Новый столб пытается расти в месте, где уже есть столб<br>- При достижении асфальтовой площадки у Базы.<br>У них большая прочность, но их можно ломать с помощью, например, лома.</u>",
        "related_images" : ['./images/basaltPillars1_1.png', './images/basaltPillars1_2.png'],
        "category": "",
        "icon": "./icons/basalt_pillar.png",
        "xPos": 465.5,
        "yPos": -86.1
    },
    {
        "name": "Зелёный шкаф",
        "description": "Найди все металлические плитки, вставь в шкаф, и жми кнопку!",
        "related_images" : ['./images/greenLocker1_1.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/green_locker.png",
        "xPos": 614.8,
        "yPos": 627.5
    },
    {
        "name": "Хижина охотника",
        "description": "Мурашащяя старая хижина, в которой находятся множество интересных вещей.<br>Также три головы животных и шкура животного, которыми можно украсить свою базу.",
        "related_images" : ['./images/ru/places/hunter.jpg', './images/ru/places/hunter_heads.jpg', './images/ru/places/hunter_skin.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/shack.png",
        "xPos": 408.5,
        "yPos": 24.3
    },
    {
        "name": "Разрушенный дом",
        "description": "",
        "related_images" : ['./images/ru/places/abandoned.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/house.png",
        "xPos": 662.5,
        "yPos": -655.5
    },
    {
        "name": "Колодец",
        "description": "Закрыт досками, которые можно сломать.<br><br>Переносит игрока в отдельную локацию, если в нём уснуть. На дне лежат кости и крюк.",
        "related_images" : ['./images/well1_1.png','./images/well1_2.png', './images/ru/equipment/well_hook.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/well.png",
        "xPos": 564.4,
        "yPos": 265.7
    },
    {
        "name": "Бомбоубежище",
        "description": "Люк не открывается.",
        "related_images" : ['./images/ru/places/bunker.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/bunker.png",
        "xPos": 60.25,
        "yPos": 625.5
    },
    {
        "name": "Пикник",
        "description": "Появляется на 8-ой день.",
        "related_images" : ['./images/ru/events/picnic1.jpg', './images/ru/events/picnic2.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/picnic_blanket.png",
        "xPos": -199,
        "yPos": -483
    },
    {
        "name": "Могильные плиты",
        "description": "Сюда перемещается игрок после выхода из локации Ритуального Алтаря.",
        "related_images" : ['./images/ru/places/graves.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/grave.png",
        "xPos": -347.4,
        "yPos": -565.4
    },
    // Chicken Burgers
    {
        "name": "Бургер #1",
        "description": "Лежит поверх серверов.",
        "related_images" : ["./images/questwalker/burger/burger1_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -8.4,
        "yPos": 27.5
    },
    {
        "name": "Бургер #2",
        "description": "Внутри духовки.",
        "related_images" : ["./images/questwalker/burger/burger2_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -14.7,
        "yPos": 8.8
    },
    {
        "name": "Бургер #3",
        "description": "На унитазе.",
        "related_images" : ["./images/questwalker/burger/burger3_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -12,
        "yPos": -0.1
    },
    {
        "name": "Бургер #4",
        "description": "Наверху радиобашни, на одной из антенн. Можно залезть с помощью крюка.",
        "related_images" : ["./images/questwalker/burger/burger4_1.png", "./images/questwalker/burger/burger4_2.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 21.7,
        "yPos": -29.5
    },
    {
        "name": "Бургер #5",
        "description": "Под лестницей в подвал Базы.",
        "related_images" : ["./images/questwalker/burger/burger5_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -20.4,
        "yPos": 27.1
    },
    {
        "name": "Бургер #6",
        "description": "На крыше, сверху вентиляции.",
        "related_images" : ["./images/questwalker/burger/burger6_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -2.6,
        "yPos": 27.3
    },
    {
        "name": "Бургер #7",
        "description": "Сверху радиопрозрачного купола.",
        "related_images" : ["./images/questwalker/burger/burger7_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -10.8,
        "yPos": 6.4
    },
    {
        "name": "Бургер #8",
        "description": "На крыше гаража, в уголке.",
        "related_images" : ["./images/questwalker/burger/burger8_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -14.8,
        "yPos": 9.7
    },
    {
        "name": "Бургер #9",
        "description": "На одном из камней структуры Стоунхеджа.",
        "related_images" : ['./images/questwalker/burger/burger9_1.png'],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 216,
        "yPos": 541.1
    },
    {
        "name": "Бургер #10",
        "description": "В реке под мостом возле Базы. Мокрый бургер, очень вкусно...",
        "related_images" : ["./images/questwalker/burger/burger10_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -62.9,
        "yPos": 12
    },
    {
        "name": "Бургер #11",
        "description": "Внутри бревна, прячется под кучей камней.",
        "related_images" : ['./images/questwalker/burger/burger11_1.png', './images/questwalker/burger/burger11_2.png'],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 349.1,
        "yPos": -344.5
    },
    {
        "name": "Бургер #12",
        "description": "На ящиках в зоне тестовых деревьев.",
        "related_images" : ["./images/questwalker/burger/burger12_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 518.5,
        "yPos": -213.4
    },
    {
        "name": "Бургер #13",
        "description": "В Хижине Охотника под столами.",
        "related_images" : ["./images/questwalker/burger/burger13_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 408.95,
        "yPos": 24.1
    },
    {
        "name": "Бургер #14",
        "description": "На крыше Трансформатора 2, сидит между стеной и вентиляцией.",
        "related_images" : ["./images/questwalker/burger/burger14_1.png", "./images/questwalker/burger/burger14_2.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -553.4,
        "yPos": 236.6
    },
    {
        "name": "Бургер #15",
        "description": "На металлическом полу Juliett.",
        "related_images" : ["./images/questwalker/burger/burger15_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -100.2,
        "yPos": 203.5
    },
    {
        "name": "Бургер #16",
        "description": "На земле, у генератора.",
        "related_images" : ["./images/questwalker/burger/burger16_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -623,
        "yPos": -25.7
    },
    {
        "name": "Бургер #17",
        "description": "Перед пещерой.",
        "related_images" : ["./images/questwalker/burger/burger17_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -651.1,
        "yPos": -587.6
    },
    {
        "name": "Бургер #18",
        "description": "В пещере, среди грибов",
        "related_images" : ["./images/questwalker/burger/burger18_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -683.7,
        "yPos": -581.8
    },
    {
        "name": "Бургер #19",
        "description": "На земле, возле <i>Прибором Розиталов</i>.",
        "related_images" : ["./images/questwalker/burger/burger19_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 639.2,
        "yPos": 44
    },
    {
        "name": "Бургер #20",
        "description": "Закопан, потребуется лопата. Найти конкретную точку поможет металлодетектор.",
        "related_images" : ["./images/questwalker/burger/burger20_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 157,
        "yPos": -584.7
    },
    {
        "name": "Бургер #21",
        "description": "Среди камней за Whiskey.",
        "related_images" : ["./images/ru/burger/burger21_1.jpg", "./images/ru/burger/burger21_2.jpg", "./images/ru/burger/burger21_3.jpg"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": 18.14,
        "yPos": 529.37
    },
    // Transformers
    {
        "name": "Трансформатор #0",
        "description": "",
        "related_images" : [],
        "category": "Трансформаторы",
        "icon": "./icons/generator.png",
        "xPos": 64,
        "yPos": 64.3
    },
    {
        "name": "Трансформатор #1",
        "description": "Target with <i>sv.target TF_1</i>.<br>Supplies and explosive items are strewn throughout the building. Inside, you can find some partially-filled gas cans and a toolbox, and you can find a lighter and instructions on how to make molotovs on the desk.",
        "related_images" : [],
        "category": "Трансформаторы",
        "icon": "./icons/transformer1.png",
        "xPos": 396.1,
        "yPos": 200
    },
    {
        "name": "Трансформатор #2",
        "description": "Target with <i>sv.target TF_2</i>.<br>Some trash lays around. You can find scrap and some almost-full gas cans inside. There are two benches outside.",
        "related_images" : [],
        "category": "Трансформаторы",
        "icon": "./icons/transformer2.png",
        "xPos": -546,
        "yPos": 234
    },
    {
        "name": "Трансформатор #3",
        "description": "Target with <i>sv.target TF_3</i>.<br>Garbage litters the area and the door is boarded up, which forces you to enter with a carefully-placed crouch jump, a crowbar, or by using the vent on the side of the building. A full gas can and some batteries can be found in the supply room, and there's instructions on how to make a cooler under some of the garbage. A cat bed for Maxwell can be found behind a pallet.",
        "related_images" : [],
        "category": "Трансформаторы",
        "icon": "./icons/transformer3.png",
        "xPos": -396.5,
        "yPos": -480.1
    },
    // Skulls
    {
        "name": "Череп",
        "description": "За ящиками, в подвале Базы.",
        "related_images" : ['./images/ru/skull/skull_basement1.jpg', './images/ru/skull/skull_basement2.jpg'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -7.25,
        "yPos": 19.74
    },
    {
        "name": "Череп",
        "description": "Закопан под <i>Прибором Розиталов</i>.<br>Можно выкопать даже если Технология Розиталов всё ещё на месте - если копнуть в определённом конкретном месте.",
        "related_images" : ['./images/questwalker/skull/skull2_1.png', './images/questwalker/skull/skull2_2.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 637.54,
        "yPos": 44.2
    },
    {
        "name": "Череп",
        "description": "Посреди Стоунхеджа.",
        "related_images" : ['./images/questwalker/skull/skull3_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 212.27,
        "yPos": 541.1
    },
    {
        "name": "Череп",
        "description": "В круге гравия.",
        "related_images" : ['./images/questwalker/skull/skull4_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -352,
        "yPos": 47.4
    },
    {
        "name": "Череп",
        "description": "В закопанной коробке с костями.",
        "related_images" : ['./images/questwalker/skull/boneBox1_3.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 263.6,
        "yPos": -7.3
    },
    {
        "name": "Череп",
        "description": "Возле Радиоактивной капсулы.",
        "related_images" : ['./images/questwalker/skull/skull5_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -570,
        "yPos": 302.76
    },
    {
        "name": "Череп",
        "description": "В пещере.",
        "related_images" : ['./images/questwalker/skull/skull6_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -655.93,
        "yPos": -600.3
    },
    // Items of Interest
    {
        "name": "Лопата",
        "description": "Стоит возле трёх ящиков с припасами возле Стоунхеджа.",
        "related_images" : ['./images/questwalker/tools/shovel/shovel1_1.png'],
        "category": "Инструменты",
        "icon": "./icons/shovel.png",
        "xPos": 209.2,
        "yPos": 535.2
    },
    {
        "name": "Лопата",
        "description": "Стоит у стены возле Красного Куста.",
        "related_images" : ['./images/ru/tools/shovel/shovel_hunter.jpg'],
        "category": "Инструменты",
        "icon": "./icons/shovel.png",
        "xPos": 408.36,
        "yPos": 20.95
    },
    {
        "name": "Лопата",
        "description": "Внутри будки охранника. Дверь будки можно сломать. Например, камнем или ломом.",
        "related_images" : ['./images/ru/tools/shovel/shovel_guard.jpg'],
        "category": "Инструменты",
        "icon": "./icons/shovel.png",
        "xPos": -369.12,
        "yPos": 702.32
    },
    {
        "name": "Лопата",
        "description": "В TR_2.",
        "related_images" : ['./images/questwalker/tools/shovel/shovel4_1.png'],
        "category": "Инструменты",
        "icon": "./icons/shovel.png",
        "xPos": -543.53,
        "yPos": 237.09
    },
    {
        "name": "Лейка",
        "description": "На полке в TR_1.",
        "related_images" : ['./images/tr1_tools.jpg'],
        "category": "Инструменты",
        "icon": "./icons/watering_can.png",
        "xPos": 398.72,
        "yPos": 197.67
    },
    {
        "name": "Лейка",
        "description": "В TR_2.",
        "related_images" : ['./images/questwalker/tools/wateringcan/wateringCan2_1.png'],
        "category": "Инструменты",
        "icon": "./icons/watering_can.png",
        "xPos": -549.13,
        "yPos": 236.71
    },
    {
        "name": "Лейка",
        "description": "В углу TR_3.",
        "related_images" : ['./images/questwalker/tools/wateringcan/wateringCan3_1.png'],
        "category": "Инструменты",
        "icon": "./icons/watering_can.png",
        "xPos": -402.26,
        "yPos": -477.54
    },
    {
        "name": "Топор",
        "description": "В Хижине охотника, под кроватью.",
        "related_images" : ['./images/questwalker/equipment/axe1_1.png'],
        "category": "Инструменты",
        "icon": "./icons/axe.png",
        "xPos": 406.5,
        "yPos": 22.5
    },
    {
        "name": "Какти",
        "description": "Dug up next to the light post",
        "related_images" : ['./images/cacti1_1.png'],
        "category": "",
        "icon": "./icons/cacti.png",
        "xPos": 149.2,
        "yPos": -10.5
    },
    {
        "name": "Коробка с дисками",
        "description": "Коробка с 8 дисками. Можете продать, можете оставить. Но не забудьте просканировать <br>;)",
        "related_images" : ['./images/driveBox1_1.png', './images/ru/drives2.jpg'],
        "category": "",
        "icon": "./icons/drive_box.png",
        "xPos": -118.8,
        "yPos": -42.1
    },
    {
        "name": "Диск",
        "description": "Можно выкопать между Бункером и парковкой. Можете продать, можете оставить. Но не забудьте просканировать <br>;)",
        "related_images" : ['./images/ru/drive1.jpg', './images/ru/drive2.jpg'],
        "category": "",
        "icon": "./icons/drive.png",
        "xPos": 15.9,
        "yPos": 23.5
    },
    {
        "name": "Коробка с костями",
        "description": "Can be dug up next to the boulder in the middle of the grassy circle. An old wooden box containing a some bones and a skull. The box is breakable.",
        "related_images" : ['./images/questwalker/skull/boneBox1_1.png', './images/questwalker/skull/boneBox1_2.png', './images/questwalker/skull/boneBox1_3.png'],
        "category": "",
        "icon": "./icons/old_wooden_box.png",
        "xPos": 263.6,
        "yPos": -7.3
    },
    // KerfurO parts
    {
        "name": "Коленный соединитель",
        "description": "В офисе TR_1, в ведре.",
        "related_images" : ['./images/questwalker/kerfurparts/kneeJoints1_1.png'],
        "category": "Части Керфур-О",
        "icon": "./icons/knee_joint.png",
        "xPos": 390.47,
        "yPos": 198.27
    },
    {
        "name": "Коленный соединитель",
        "description": "В офисе TR_2, на ящике под верстаком.",
        "related_images" : ['./images/questwalker/kerfurparts/kneeJoints2_1.png'],
        "category": "Части Керфур-О",
        "icon": "./icons/knee_joint.png",
        "xPos": -550.22,
        "yPos": 235.5
    },
    {
        "name": "Коленный соединитель",
        "description": "В офисе TR_3, в углу верхней полки шкафа.",
        "related_images" : ['./images/questwalker/kerfurparts/kneeJoints3_1.png'],
        "category": "Части Керфур-О",
        "icon": "./icons/knee_joint.png",
        "xPos": -400.55,
        "yPos": -477.15
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -541.07,
        "yPos": -475.35
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -529.78,
        "yPos": -462.75
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -532.58,
        "yPos": -481.11
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -524.08,
        "yPos": -471.09
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -531.98,
        "yPos": -472.44
    },
    {
        "name": "Закопаные части Керфура",
        "description": "В ящике - 2 шаровых соединителя.",
        "related_images" : ['./images/ru/kerfurparts.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -524.14,
        "yPos": -479.11
    },
    {
        "name": "Сейф",
        "description": "Находится на дне озера. Чтобы достать - иметь при себе подводную маску.<br><br>Открывается, как и настоящие сейфы.<br><br>Взломать сейф - легко.<br>Сначала, наведите курсор на дверь сейфа. Начните медленно поворачивать колёсико мыши в каком-нибудь направлении. Когда услышите щелчёк, который не похож на остальные - начинайте крутить в другую сторону. После нескольких таких успешных щелчков, дверь сейфа откроется.<br><br>Внутри лежит Омега ИИ Модуль, который используется для создания Керфур-О.",
        "related_images" : ['./images/ru/places/safe.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/safe.png",
        "xPos": 404.8,
        "yPos": -406
    },



    {
        "name": "Keljoy",
        "description": "Плюшевый Келджой, лежит в чемодане с которым приехал игрок.",
        "related_images" : ['./images/ru/plush/keljoy1.jpg', './images/ru/plush/keljoy2.jpg'],
        "category": "Другие плюши",
        "icon": "./icons/ru/plush_keljoy.png",
        "xPos": -375.11,
        "yPos": 699.58
    },
    {
        "name": "Эйри",
        "description": "Для получение потребуются лопата, мусорный пакет и куча мяса (лежит возле Трансформатора 2).<br>Положить кучу мяса в мусорный пакет.<br>Закопать пакет возле граффити \"Erie Zone\".<br>Находиться там в полночь.",
        "related_images" : ['./images/ru/plush/erie/erie1.jpg', './images/ru/plush/erie/erie2.jpg', './images/ru/plush/erie/erie3.jpg', './images/ru/plush/erie/erie4.jpg', './images/ru/plush/erie/erie5.jpg'],
        "category": "Другие плюши",
        "icon": "./icons/ru/plush_erie.png",
        "xPos": 10.9,
        "yPos": -511.7
    },
    {
        "name": "Ягнёнок",
        "description": "Собрать 4 Руны, поместить их в нужные места у Ритуальномого Алтаря. Проткнуть себя Ритуальным Ножом.<br>Игрушка появится на ритуальном столе.<br> Отсылка на игру <a href=\"https://ru.wikipedia.org/wiki/Cult_of_the_Lamb\" target=\"_blank\" rel=\"noopener noreferrer\">Cult of the Lamb</a>",
        "related_images" : ['./images/ru/plush_lamb1.jpg', './images/ru/plush_lamb2.jpg'],
        "category": "Другие плюши",
        "icon": "./icons/ru/111111111.png",
        "xPos": 409,
        "yPos": 21
    },
    {
        "name": "Плюша Др. Кел",
        "description": "Появляется на входе Домика на Дереве на 25-ый день при высоком уровне репутации с Ариралами.",
        "related_images" : ['./images/ru/plush/kel.jpg'],
        "category": "Другие плюши",
        "icon": "./icons/ru/plush_kel.png",
        "xPos": 378.5,
        "yPos": 388
    },
    {
        "name": "Плита Огня",
        "description": "Подсказывает, как получить Руну Огня. Находится в локации Ритуального Алтаря, закопана прямо за ритуальным столом, нужна лопата.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Рунные Плиты",
        "icon": "./icons/ru/slab.png",
        "xPos": 1111111111,
        "yPos": 1111111111
    },
    {
        "name": "Плита Земли",
        "description": "Подсказывает, как получить Руну Земли. Закопана в ограждённой локации с тестовыми деревьями, нужна лопата.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Рунные Плиты",
        "icon": "./icons/ru/slab.png",
        "xPos": 538,
        "yPos": -181
    },
    {
        "name": "Плита Воды",
        "description": "Подсказывает, как получить Руну Воды. Закопана на дне озера, откапывать лопатой.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Рунные Плиты",
        "icon": "./icons/ru/slab.png",
        "xPos": 418,
        "yPos": -422
    },

    {
        "name": "Дьявольщина",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : ['./images/ru/notes/latin.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 213,
        "yPos": 541
    },

    {
        "name": "Спуск в Дыру",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : ['./images/ru/notes/hole_fall.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": -351,
        "yPos": 46
    },
    {
        "name": "Взлом сейфа",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : ['./images/ru/notes/safehack.jpg'],
        "category": "Записки",
        "icon": "./icons/ru/note.png",
        "xPos": 1111111111111,
        "yPos": 1111111111111
    },


    {
        "name": "Красный Куст / Ритуальный Алтарь",
        "description": "Находится внутри Хижины Охотника. При заходе в куст в 3:33 ночи, вас переместит в локацию Ритуального Алтаря, с которым связаны несколько других секретных предметов.<br>В самом кусте лежит череп животного.",
        "related_images" : ['./images/ru/places/bush.jpg', './images/ru/places/animal_skull.jpg', './images/ru/places/altar.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/ru/bush.png",
        "xPos": 407.8,
        "yPos": 20.3
    },
    {
        "name": "Домик на Дереве",
        "description": "Домик Ариралов, появляющийся в ночь 16-17 дня.<br>Строится по 21-ый день.<br>Каждый день появляются новые предметы, такие как постеры, ножи, мойки и другое.<br>Воровство из домика понизит репутацию с Ариралами, принос упаковок креветок - повысит.",
        "related_images" : ['./images/ru/events/treehouse.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/ru/treehouse.png",
        "xPos": 370,
        "yPos": 388.3
    },
    {
        "name": "Стоунхедж / Ад",
        "description": "Для начала ритуала, нужно собрать 7 черепов и положить их на выженную землю.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/ru/111111111.png",
        "xPos": 213.47,
        "yPos": 542.05
    },

    {
        "name": "Старая винтовка",
        "description": "Ну давай, давай. Попробуй, стрельни.",
        "related_images" : ['./images/ru/tools/oldgun1.jpg', './images/ru/tools/oldgun2.jpg'],
        "category": "",
        "icon": "./icons/ru/old_rifle.png",
        "xPos": -204,
        "yPos": 4
    },

    {
        "name": "Ритуальный нож",
        "description": "Лежит на столе Ритуального Алтаря. Используется для получения некоторых предметов - но будет больно.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "",
        "icon": "./icons/ru/ritual_knife.png",
        "xPos": 406,
        "yPos": 19
    },
    {
        "name": "Чёрная Аргемия",
        "description": "Нужно зацепиться за что-нибудь крюком (чтобы вас не засосало) и подождать, пока чёрная дыра наберёт достаточную мощь, а затем бросить в неё<br><br>красную, синюю, зелёную, голубую, розовую (порядок не важен) плюши Аргемии.<br><br>После исчезновения портала на его месте появится чёрная плюша Аргемии. Использованные цветные при этом пропадут!",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Плюши Аргемии",
        "icon": "./icons/ru/plush_argemia_black.png",
        "xPos": 212,
        "yPos": 540
    },
    {
        "name": "Белая Аргемия",
        "description": "Компьютер указан потому, что для её получения вам потребуется промышленный 3D принтер.<br>А как конкретно её получать - поищите в интернете, там всё сложно.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Плюши Аргемии",
        "icon": "./icons/ru/plush_argemia_white.png",
        "xPos": 3.33,
        "yPos": 17.8
    },

    {
        "name": "Банка с мёдом",
        "description": "На столбе, можно залезть с помощью крюка.",
        "related_images" : ['./images/ru/tools/honeyjar.jpg'],
        "category": "",
        "icon": "./icons/ru/honeyjar.png",
        "xPos": -352.02,
        "yPos": -438.86
    },
    {
        "name": "Карта от бункера",
        "description": "Карта для открытия входной двери в бункер. Подбирается с помощью крюка через окошко. <br><br>Вторая дверь открывается с помощью сменщика паролей, который можно приобрести в магазине.",
        "related_images" : ['./images/ru/tools/bunkercard1.jpg', './images/ru/tools/bunkercard2.jpg', './images/ru/tools/bunkercard3.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/keycard.png",
        "xPos": 18.9,
        "yPos": 27.8
    },
    {
        "name": "Статуя козла",
        "description": "Статуя козла, которая может перемещаться со своего постамента в другие различные локации.",
        "related_images" : ['./images/ru/places/goat.jpg'],
        "category": "",
        "icon": "./icons/ru/goat.png",
        "xPos": 12.65,
        "yPos": 580.8
    },
    {
        "name": "Радиоактивные бочки",
        "description": "С ними нельзя ничего делать. При нахождении рядом с ними вы можете получить радиоактивное отравление.",
        "related_images" : ['./images/ru/places/radbarrels1.jpg', './images/ru/places/radbarrels2.jpg'],
        "category": "Точки Интереса",
        "icon": "./icons/ru/rad_barrels.png",
        "xPos": 571,
        "yPos": -518
    },

    {
        "name": "Зелёный камень",
        "description": "Появляется если потушить Зелёный костёр с помощью огнетушителя. Костёр появляется в период 00:00 до 01:00 ночи.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "",
        "icon": "./icons/ru/green_rock.png",
        "xPos": 684,
        "yPos": -575
    },
    {
        "name": "Зелёный костёр",
        "description": "Появляется в период 00:00 - 01:00 ночи.",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "",
        "icon": "./icons/ru/111111111.png",
        "xPos": 680,
        "yPos": -575
    },
    
    {
        "name": "Постеры Ариралов",
        "description": "1111111111111",
        "related_images" : ['./images/ru/decor/posters/poster_arirals.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },

    {
        "name": "Камера",
        "description": "Камера, которая доступна в самом начале игры (но её нужно активировать) и имеет уникальную модель.",
        "related_images" : ['./images/ru/tools/basecam.jpg'],
        "category": "",
        "icon": "./icons/ru/basecam.png",
        "xPos": 1.7,
        "yPos": 9.8
    },
    {
        "name": "\"Керфур Омега\" полная инструкция",
        "description": "Книга, которая обязательна при создании Керфур-О. Находится в бункере возле Базы, в углу комнаты, за ящиками.",
        "related_images" : ['./images/ru/kerfurparts/omegabook1.jpg', './images/ru/kerfurparts/omegabook2.jpg'],
        "category": "Части Керфур-О",
        "icon": "./icons/ru/kerfurbook.png",
        "xPos": 21,
        "yPos": 27
    },
    {
        "name": "Дыра в заборе",
        "description": "1111111111111",
        "related_images" : ['./images/ru/places/fence.jpg'],
        "category": "",
        "icon": "./icons/ru/111111111.png",
        "xPos": -697,
        "yPos": -80
    },
    {
        "name": "Осиное гнездо",
        "description": "Если находиться к нему близко, то из него вылетают злые осы, которые могут вас убить!<br>Осы пропадают, если взять улей в инвентарь.<br>Вероятно, будут использоваться в улье для фермы мёда.<br>есле ты сломаеш гнездо то смерд жестоко очен смерд будит понел",
        "related_images" : ['./images/ru/bees.jpg'],
        "category": "",
        "icon": "./icons/ru/waspnest.png",
        "xPos": 420,
        "yPos": 265
    },
    {
        "name": "Известняковый блок",
        "description": "Просто огромный бесполезный блок.",
        "related_images" : ['./images/ru/concrete.jpg'],
        "category": "",
        "icon": "./icons/ru/concrete.png",
        "xPos": 567,
        "yPos": 237
    },



    {
        "name": "Декор в TR_1",
        "description": "3 мусорки<br>Стол<br>4 стула<br>Стол<br>Монитор<br>Клавиатура<br>Комп. мышь<br>Комп. блок<br>Тумбочка<br>Подушка<br>2 горшка",
        "related_images" : ['./images/ru/decor/tr1_decor1.jpg', './images/ru/decor/tr1_decor2.jpg', './images/ru/decor/tr1_decor3.jpg', './images/ru/decor/tr1_decor4.jpg', ],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": 396.1,
        "yPos": 200
    },
    {
        "name": "Декор в TR_2",
        "description": "2 скамейки<br>Бочка, 2 таблички \"мокрый пол\"<br>3 дорожных конуса<br>Стол<br>Стул<br>Монитор<br>Комп. блок<br>Клавиатура<br>Мусорка",
        "related_images" : ['./images/ru/decor/tr2_decor1.jpg', './images/ru/decor/tr2_decor2.jpg', './images/ru/decor/tr2_decor3.jpg', './images/ru/decor/tr2_decor4.jpg', './images/ru/decor/tr2_decor5.jpg', './images/ru/decor/tr2_decor6.jpg', ],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": -546,
        "yPos": 234
    },
    {
        "name": "Декор в TR_3",
        "description": "Мусорка<br>Бочка<br>Медицинский столик<br>Мед. принадлежности<br>Осциллограф<br>Раковина<br>Кроватка для кошечки<br>Табличка \"мокрый пол\"<br>Ящик<br>Покрышка<br>Пластиковый стул<br>Табличка \"не работает\"<br>Монитор<br>3 комп. мыши<br>2 комп. блока",
        "related_images" : ['./images/ru/decor/tr3_decor1.jpg', './images/ru/decor/tr3_decor2.jpg', './images/ru/decor/tr3_decor3.jpg', './images/ru/decor/tr3_decor4.jpg', './images/ru/decor/tr3_decor5.jpg', './images/ru/catbed.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": -396.5,
        "yPos": -480.1
    },
    {
        "name": "Возле Tango",
        "description": "5 мусорок",
        "related_images" : ['./images/ru/decor/decor_right1.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": 514.4,
        "yPos": -417
    },
    {
        "name": "Возле Tango",
        "description": "5 скамеек<br>2 мусорки",
        "related_images" : ['./images/ru/decor/decor_right2.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": 487.6,
        "yPos": -410.6
    },
    {
        "name": "11111111",
        "description": "тут штучки возле козла",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Декор Дыры",
        "description": "4 фонаря<br>2 стола<br>3 мусорки<br>5 стульев<br>бочка",
        "related_images" : ['./images/ru/hole_decor1.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/decor.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Декор возле построек у Дыры",
        "description": "4 мусорки",
        "related_images" : ['./images/ru/hole_decor2.jpg'],
        "category": "Декор",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },

    {
        "name": "Костюм служанки",
        "description": "В версии игры 0.8.2-b. В закопанном сейфе. На себя надеть нельзя, но можно надеть на Керфур-О.",
        "related_images" : ['./images/ru/kermaid1.jpg', './images/ru/kermaid2.jpg', './images/ru/111111111.jpg', ],
        "category": "Экипировка",
        "icon": "./icons/ru/111111111.png",
        "xPos": -358,
        "yPos": -490
    },

    {
        "name": "Инструменты на Базе",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },

    {
        "name": "Инструменты в TR_1",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Инструменты в TR_2",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Инструменты в TR_3",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Инструменты в Дыре",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Инструменты",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Канистры на Базе",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Канистры с топливом",
        "icon": "./icons/ru/gascan.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Канистры в TR_1",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Канистры с топливом",
        "icon": "./icons/ru/gascan.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Канистры TR_2",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Канистры с топливом",
        "icon": "./icons/ru/gascan.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Канистры TR_3",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Канистры с топливом",
        "icon": "./icons/ru/gascan.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Канистры в Дыре",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "Канистры с топливом",
        "icon": "./icons/ru/gascan.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "11111111",
        "description": "1111111111111",
        "related_images" : ['./images/ru/111111111.jpg'],
        "category": "",
        "icon": "./icons/ru/111111111.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
]
