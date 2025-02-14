const points = [
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
        "category": "Satellite Dishes",
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
    // Алтарь Фурфураs
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
        "related_images" : ['./images/tile1_1.png', './images/tile1_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -9,
        "yPos": 3
    },
    {
        "name": "Металлическая Плитка #2",
        "description": "На бревне моста.",
        "related_images" : ['./images/tile2_1.png', './images/tile2_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -77.3,
        "yPos": 15.1
    },
    {
        "name": "Металлическая Плитка #3",
        "description": "Застряла в основании ствола дерева.",
        "related_images" : ['./images/tile3_1.png', './images/tile3_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -464.3,
        "yPos": 173.5
    },
    {
        "name": "Металлическая Плитка #4",
        "description": "WIP",
        "related_images" : ['./images/tile4_1.png', './images/tile4_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -525.3,
        "yPos": -48
    },
    {
        "name": "Металлическая Плитка #5",
        "description": "Спрятана за ящиками у Дыры",
        "related_images" : ['./images/tile5_1.png', './images/tile5_2.png', './images/tile5_3.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -615,
        "yPos": -23
    },
    {
        "name": "Металлическая Плитка #6",
        "description": "Лежит на крыше будки охранника. Залезть можно прыгая по столбам, или с помощью крюка.",
        "related_images" : ['./images/tile6_1.png', './images/tile6_2.png', './images/tile6_3.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": -372,
        "yPos": 702.6
    },
    {
        "name": "Металлическая Плитка #7",
        "description": "Лежит возле Зелёного шкафа.",
        "related_images" : ['./images/tile7_1.png', './images/tile7_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 616,
        "yPos": 621
    },
    {
        "name": "Metal Tile #8",
        "description": "Лежит за стеной телескопа Uniform. Просто перелезьте через перила и пройдитесь по выступу.",
        "related_images" : ['./images/tile8_1.png', './images/tile8_2.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 500.37,
        "yPos": -2.7
    },
    {
        "name": "Metal Tile #9",
        "description": "Да-да, всё верно, именно там. Нужно будет перелезть через основном забор карты и двигаться к стыку северного и восточного барьеров.",
        "related_images" : ['./images/tile9_1.png', './images/tile9_2.png', './images/tile9_3.png'],
        "category": "Металлические Плитки",
        "icon": "./icons/metal_tile.png",
        "xPos": 874,
        "yPos": -874
    },
    // Argemia Plushes
    {
        "name": "Красная Аргемия",
        "description": "Сидит в крутой яме. Выбраться из ямы можно крюком, или телепортировавшись, нажав на пончик.",
        "related_images" : ['./images/redArgemia1_1.png', './images/redArgemia1_2.png', './images/redArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/red_argemia.png",
        "xPos": 626,
        "yPos": -128
    },
    {
        "name": "Зелёная Аргемия",
        "description": "Да, за забором. Сидит на высокой горе, любуясь видом.",
        "related_images" : ['./images/greenArgemia1_1.png', './images/greenArgemia1_2.png', './images/greenArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/green_argemia.png",
        "xPos": 239,
        "yPos": 828
    },
    {
        "name": "Синяя Аргемия",
        "description": "In the river near quebec.",
        "related_images" : ['./images/blueArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/blue_argemia.png",
        "xPos": -315,
        "yPos": 398
    },
    {
        "name": "Голубая Аргемия",
        "description": "Для призыва плюши нужно положить ровно 12 упаковок креветок в мини-бассейн на Базе. После этого нужно совершить взрыв в воде – для этого можно использовать канистру или взрывную бочку.",
        "related_images" : ['./images/cyanArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/cyan_argemia.png",
        "xPos": -8.5,
        "yPos": 23.5
    },
    {
        "name": "Розовая Аргемия",
        "description": "Появляется после получения сигнала “Розовый Луч”.",
        "related_images" : ['./images/magentaArgemia1_1.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/magenta_argemia.png",
        "xPos": 637.5,
        "yPos": 46.8
    },
    {
        "name": "Жёлтая Аргемия",
        "description": "The yellow Argemia plush requires a ritual to spawn.<br>- First, place a shrimp pack (or multiple) at each corner of the map's fence.<br>- Next, place a shrimp pack on the sewer drain in the basement.<br>- Then, nearing 12:50 at night, stand in a corner of the basement and face away from the shrimp. Around 00:00, a wooshing sound will play, and you can turn to find the argemia summoned. It might take a couple minutes to spawn, so do not turn until you hear it spawn or at least 00:15.<br><br>You can use a clock/watch to help keep track of time. This ritual can be difficult to preform due to cockroaches or Arirals eating the shrimp you've placed.",
        "related_images" : ['./images/yellowArgemia1_1.png', './images/yellowArgemia1_2.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/yellow_argemia.png",
        "xPos": -11,
        "yPos": 23
    },
    {
        "name": "Ядерная синяя Аргемия",
        "description": "Ты что, кошканутый? Шо ты там делаешь? Самое абсурдное место!<br><br>Сидит на невидимом кубе высоко в небе. Сбить её предметами нельзя, поэтому придётся добираться до неё самостоятельно.<br><br>Можно лезть вверх барьера с помощью крюка, а можно взлететь на стуле, используя воздушные шарики.",
        "related_images" : ['./images/glowingBlueArgemia1_1.png', './images/glowingBlueArgemia1_2.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/glowing_blue_argemia.png",
        "xPos": 872,
        "yPos": -792
    },
    {
        "name": "Ядерная голубая Аргемия",
        "description": "Needs to be dug up using a shovel. You can use a metal detector if you're having any trouble finding it. Be careful to not let the plushie roll down the hill.",
        "related_images" : ['./images/glowingCyanArgemia1_1.png', './images/glowingCyanArgemia1_2.png', './images/glowingCyanArgemia1_3.png'],
        "category": "Плюши Аргемии",
        "icon": "./icons/glowing_cyan_argemia.png",
        "xPos": -634,
        "yPos": 181.4
    },
    {
        "name": "Ядерная розовая Аргемия",
        "description": "The plush's spawn location is located near the top of the tower. In order for the plush to spawn, something (a piece of trash, a drone, etc.) needs to enter the spawning location's hitbox. The usual method is placing a drone around (35.22, -37.23) and then having the drone fly straight up. You can use a digital map to place the drone accurately.<br>When the plush spawns, it will fall. Make sure to watch the drone's camera and check outside often so you don't miss it.",
        "related_images" : ['./images/glowingMagentaArgemia1_1.png', './images/glowingMagentaArgemia1_2.png'],
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
        "description": "Found situated between two rocks, and will do nothing until you discover a certain signal.",
        "related_images" : ['./images/rozitalTech1_1.png', './images/rozitalTech1_2.png', './images/rozitalTech1_3.png', './images/rozitalTech1_4.png'],
        "category": "Точки Интереса",
        "icon": "./icons/rozital.png",
        "xPos": 637,
        "yPos": 44
    },
    {
        "name": "Базальтовые столбы",
        "description": "<div style=\"color: red;\">WARNING: THIS CAN RUIN YOUR SAVE</div><br>Can be found with the metal detector. Once dug up, it'll slowly grow out of the ground and start spreading. They will slowly spread in your direction. <u>The pillars have high durability, but they can be destroyed with a crowbar or shovel.</u>",
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
        "description": "Мурашащяя старая хижина, в которой находятся множество интересных вещей.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/shack.png",
        "xPos": 408.5,
        "yPos": 24.3
    },
    {
        "name": "WIP Abandoned House",
        "description": "",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/house.png",
        "xPos": 662.5,
        "yPos": -655.5
    },
    {
        "name": "Колодец",
        "description": "Закрыт досками, которые можно сломать.<br><br>Переносит игрока в отдельную локацию, если в нём уснуть. На дне лежат кости и крюк.",
        "related_images" : ['./images/well1_1.png','./images/well1_2.png'],
        "category": "Точки Интереса",
        "icon": "./icons/well.png",
        "xPos": 564.4,
        "yPos": 265.7
    },
    {
        "name": "Бомбоубежище",
        "description": "",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/bunker.png",
        "xPos": 60.25,
        "yPos": 625.5
    },
    {
        "name": "Пикник",
        "description": "Appears on day 8",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/picnic_blanket.png",
        "xPos": -199,
        "yPos": -483
    },
    {
        "name": "Могильные плиты",
        "description": "Сюда перемещается игрок после выхода из локации Ритуального Алтаря.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/grave.png",
        "xPos": -347.4,
        "yPos": -565.4
    },
    // Chicken Burgers
    {
        "name": "Бургер #1",
        "description": "On top of the servers.",
        "related_images" : ["./images/burger1_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -8.4,
        "yPos": 27.5
    },
    {
        "name": "Бургер #2",
        "description": "Внутри духовки.",
        "related_images" : ["./images/burger2_1.png"],
        "category": "Бургеры",
        "icon": "./icons/burger.png",
        "xPos": -14.7,
        "yPos": 8.8
    },
    {
        "name": "Бургер #3",
        "description": "On top of the toilet.",
        "related_images" : ["./images/burger3_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -12,
        "yPos": -0.1
    },
    {
        "name": "Бургер #4",
        "description": "On the radio tower of top of one of the antennas. You can climb the pole with a hook to reach it.",
        "related_images" : ["./images/burger4_1.png", "./images/burger4_2.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 21.7,
        "yPos": -29.5
    },
    {
        "name": "Бургер #5",
        "description": "Under the basement stairs.",
        "related_images" : ["./images/burger5_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -20.4,
        "yPos": 27.1
    },
    {
        "name": "Бургер #6",
        "description": "On the roof, on top of the air conditioning system.",
        "related_images" : ["./images/burger6_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -2.6,
        "yPos": 27.3
    },
    {
        "name": "Бургер #7",
        "description": "On top of the Radome.",
        "related_images" : ["./images/burger7_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -10.8,
        "yPos": 6.4
    },
    {
        "name": "Бургер #8",
        "description": "On the roof of the garage in a corner.",
        "related_images" : ["./images/burger8_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -14.8,
        "yPos": 9.7
    },
    {
        "name": "Бургер #9",
        "description": "On top of one of the stone arches.",
        "related_images" : ['./images/burger9_1.png'],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 216,
        "yPos": 541.1
    },
    {
        "name": "Бургер #10",
        "description": "Under the bridge near the base.",
        "related_images" : ["./images/burger10_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -62.9,
        "yPos": 12
    },
    {
        "name": "Бургер #11",
        "description": "Inside the large log under some rocks.",
        "related_images" : ['./images/burger11_1.png', './images/burger11_2.png'],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 349.1,
        "yPos": -344.5
    },
    {
        "name": "Бургер #12",
        "description": "On top of some supply crates in the poly testing area.",
        "related_images" : ["./images/burger12_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 518.5,
        "yPos": -213.4
    },
    {
        "name": "Бургер #13",
        "description": "Inside the old shack, in a corner under a table.",
        "related_images" : ["./images/burger13_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 408.95,
        "yPos": 24.1
    },
    {
        "name": "Бургер #14",
        "description": "Behind transformer 2, on the roof. Crammed between the wall and some machinery.",
        "related_images" : ["./images/burger14_1.png", "./images/burger14_2.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -553.4,
        "yPos": 236.6
    },
    {
        "name": "Бургер #15",
        "description": "Located on the metal walkways that go around Juliett.",
        "related_images" : ["./images/burger15_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -100.2,
        "yPos": 203.5
    },
    {
        "name": "Бургер #16",
        "description": "On the ground under the generator.",
        "related_images" : ["./images/burger16_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -623,
        "yPos": -25.7
    },
    {
        "name": "Бургер #17",
        "description": "On the ground outside of the cave.",
        "related_images" : ["./images/burger17_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -651.1,
        "yPos": -587.6
    },
    {
        "name": "Бургер #18",
        "description": "Inside the cave, in the middle of a pile of mushrooms.",
        "related_images" : ["./images/burger18_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": -683.7,
        "yPos": -581.8
    },
    {
        "name": "Бургер #19",
        "description": "On the ground next to the <i>Unknown Rozital Technology</i>.",
        "related_images" : ["./images/burger19_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 639.2,
        "yPos": 44
    },
    {
        "name": "Бургер #20",
        "description": "Needs to be dug up with a shovel. A metal detector can help in finding it.",
        "related_images" : ["./images/burger20_1.png"],
        "category": "Бургеры,
        "icon": "./icons/burger.png",
        "xPos": 157,
        "yPos": -584.7
    },
    {
        "name": "Бургер #21",
        "description": "In a group of rocks behind Wiskey.",
        "related_images" : ["./images/burger21_1.png"],
        "category": "Бургеры,
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
        "description": "Behind the boxes in the corner of the basement.",
        "related_images" : ['./images/skull1_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -7.25,
        "yPos": 19.74
    },
    {
        "name": "Череп",
        "description": "Dug up from under the Unknown Rozital Technology.<br>It can also be dug up while the Technology is still there if you shovel a specific point",
        "related_images" : ['./images/skull2_1.png', './images/skull2_2.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 637.54,
        "yPos": 44.2
    },
    {
        "name": "Череп",
        "description": "Посреди Стоунхеджа.",
        "related_images" : ['./images/skull3_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 212.27,
        "yPos": 541.1
    },
    {
        "name": "Череп",
        "description": "Inside the gravel circle.",
        "related_images" : ['./images/skull4_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -352,
        "yPos": 47.4
    },
    {
        "name": "Череп",
        "description": "Inside the Box of Bones.",
        "related_images" : ['./images/boneBox1_3.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": 263.6,
        "yPos": -7.3
    },
    {
        "name": "Череп",
        "description": "Возле Радиоактивной капсулы.",
        "related_images" : ['./images/skull5_1.png'],
        "category": "Черепа",
        "icon": "./icons/skull.png",
        "xPos": -570,
        "yPos": 302.76
    },
    {
        "name": "Череп",
        "description": "В пещере.",
        "related_images" : ['./images/skull6_1.png'],
        "category": "Skulls",
        "icon": "./icons/skull.png",
        "xPos": -655.93,
        "yPos": -600.3
    },
    // Items of Interest
    {
        "name": "Shovel",
        "description": "Found leaning on 3 supply boxes next to stonehenge.",
        "related_images" : ['./images/shovel1_1.png'],
        "category": "",
        "icon": "./icons/shovel.png",
        "xPos": 209.2,
        "yPos": 535.2
    },
    {
        "name": "Shovel",
        "description": "Стоит у стены возле Красного Куста.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/shovel.png",
        "xPos": 408.36,
        "yPos": 20.95
    },
    {
        "name": "Лопата",
        "description": "Внутри будки охранника. Дверь будки можно сломать. Например, камнем или ломом.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/shovel.png",
        "xPos": -369.12,
        "yPos": 702.32
    },
    {
        "name": "Лопата",
        "description": "Found up in TR_2.",
        "related_images" : ['./images/shovel4_1.png'],
        "category": "",
        "icon": "./icons/shovel.png",
        "xPos": -543.53,
        "yPos": 237.09
    },
    {
        "name": "Лейка",
        "description": "Found on a shelf in TR_1.",
        "related_images" : ['./images/wateringCan1_1.png'],
        "category": "",
        "icon": "./icons/watering_can.png",
        "xPos": 398.72,
        "yPos": 197.67
    },
    {
        "name": "Лейка",
        "description": "Found up in TR_2.",
        "related_images" : ['./images/wateringCan2_1.png'],
        "category": "",
        "icon": "./icons/watering_can.png",
        "xPos": -549.13,
        "yPos": 236.71
    },
    {
        "name": "Лейка",
        "description": "Found in the corner of TR_3.",
        "related_images" : ['./images/wateringCan3_1.png'],
        "category": "",
        "icon": "./icons/watering_can.png",
        "xPos": -402.26,
        "yPos": -477.54
    },
    {
        "name": "Топор",
        "description": "В Хижине охотника, под кроватью.",
        "related_images" : ['./images/axe1_1.png'],
        "category": "",
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
        "name": "Box of Drives",
        "description": "A box containing 8 drives with level 3 signals can be dug up near the pole in the middle of the grassy circle. You can send the drives off for some points or you can keep them, but make sure to check them out on your console at some point :)",
        "related_images" : ['./images/driveBox1_1.png'],
        "category": "",
        "icon": "./icons/drive_box.png",
        "xPos": -118.8,
        "yPos": -42.1
    },
    {
        "name": "Drive",
        "description": "Can be dug up on the gravel between the bunker and the parking lot.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/drive.png",
        "xPos": 15.9,
        "yPos": 23.5
    },
    {
        "name": "Коробка с костями",
        "description": "Can be dug up next to the boulder in the middle of the grassy circle. An old wooden box containing a some bones and a skull. The box is breakable.",
        "related_images" : ['./images/boneBox1_1.png', './images/boneBox1_2.png', './images/boneBox1_3.png'],
        "category": "",
        "icon": "./icons/old_wooden_box.png",
        "xPos": 263.6,
        "yPos": -7.3
    },
    {
        "name": "Радиоактивная капсула",
        "description": "<div style=\"color: red;\">НЕ СТОЙТЕ У НЕЁ, ОНА ДЕЙСТВИТЕЛЬНО РАДИОАКТИВНА!<br><br>ДЛЯ БЕЗОПАСНОГО ИЗВЛЕЧЕНИЯ И ПЕРЕНОСКИ ПОТРЕБУЕТСЯ ПРОТИВОРАДИОЦИОННЫЙ КОСТЮМ!</div>Торчит из земли возле скелета. Для выкапывания потребуется лопата.",
        "related_images" : ['./images/radioactiveCapsule1_1.png', './images/radioactiveCapsule1_2.png', './images/radioactiveCapsule1_3.png'],
        "category": "",
        "icon": "./icons/radioactive_canister.png",
        "xPos": -569.5,
        "yPos": 303.3
    },
    {
        "name": "Детектор ЕМП",
        "description": "Закопана возле упавшего фонаря. Помогает находить аномалии. Сигналы детектора усиливаются, например, в подвале Базы, у Стоунхеджа, в Хижине Охотника.",
        "related_images" : ['./images/emfDetector1_1.png'],
        "category": "",
        "icon": "./icons/emf_detector.png",
        "xPos": -623,
        "yPos": -33.8
    },
    {
        "name": "Кирка",
        "description": "Застряла в земле под водой, возле ветки. Желательно иметь при себе подводную маску.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/pickaxe.png",
        "xPos": 390.8,
        "yPos": -383.5
    },
    {
        "name": "Свеча",
        "description": "Античный подсвечник, который можно выкопать, находясь в бревне, под водой. Пасхалка в честь ютубера <a href=\"https://www.youtube.com/channel/UCnCmb1vpv90EeSX5g7K4UYQ\" target=\"_blank\" rel=\"noopener noreferrer\">The Librarian</a>. Для зажжения используйте зажигалку.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/candle.png",
        "xPos": 378.5,
        "yPos": -461
    },
    {
        "name": "Кружка с Аргемией",
        "description": "Стоит на самом верху электрического столба. Сбить её не получится - поэтому, крюк в дело и вжух-вжух-вжух.<br><br>Декоративный предмет, налить в неё кофе не выйдет :(",
        "related_images" : [],
        "category": "",
        "icon": "./icons/argemug.png",
        "xPos": -62.2,
        "yPos": -304.58
    },
    {
        "name": "Рыболовные снасти",
        "description": "Закопаны, для раскопки нужна лопата.<br>Находится справа от воздушной турбины. Внутри коробки - части удочки и снасти. Соедините все части удочки на верстаке, и можете рыбачить.",
        "related_images" : ['./images/fishingSupplies1_1.png'],
        "category": "",
        "icon": "./icons/fishermans_box.png",
        "xPos": 175.8,
        "yPos": -460.6
    },
    {
        "name": "Мотошлем",
        "description": "Мотошлем уменьшает количество урона головы, что также может снижать количество урона получаемое от падений. Можно попытаться получить шлем аккуратно спускаясь по скале и камням но, лучше, всё-таки использовать крюк.",
        "related_images" : ['./images/helmet1_1.png', './images/helmet1_2.png', './images/helmet1_3.png'],
        "category": "",
        "icon": "./icons/helmet.png",
        "xPos": -50.6,
        "yPos": 630
    },
    {
        "name": "Походные сапоги",
        "description": "Found in the corner of TR_3.<br>Wearing them allows you to walk up steeper surfaces without slipping and allows you to fall farther distances without collapsing or taking damage.",
        "related_images" : ['./images/hikingBoots1_1.png'],
        "category": "",
        "icon": "./icons/hiking_boots.png",
        "xPos": -402.4,
        "yPos": -478.67
    },
    {
        "name": "Бочка с ИРП",
        "description": "Внутри воткнутого в землю огромного бревна у реки. Внутри бочки – 50 ИРП.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/barrel.png",
        "xPos": 233.36,
        "yPos": -329.2
    },
    // KerfurO parts
    {
        "name": "Knee Joints",
        "description": "Found in TR_1. In the office, inside a bucket.",
        "related_images" : ['./images/kneeJoints1_1.png'],
        "category": "Части Керфура",
        "icon": "./icons/knee_joint.png",
        "xPos": 390.47,
        "yPos": 198.27
    },
    {
        "name": "Knee Joints",
        "description": "Found in TR_2. In the office, on a box under a workbench.",
        "related_images" : ['./images/kneeJoints2_1.png'],
        "category": "Части Керфура",
        "icon": "./icons/knee_joint.png",
        "xPos": -550.22,
        "yPos": 235.5
    },
    {
        "name": "Knee Joints",
        "description": "Found in TR_3. In the office corner on the shelf.",
        "related_images" : ['./images/kneeJoints3_1.png'],
        "category": "Части Керфура",
        "icon": "./icons/knee_joint.png",
        "xPos": -400.55,
        "yPos": -477.15
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -541.07,
        "yPos": -475.35
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -529.78,
        "yPos": -462.75
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -532.58,
        "yPos": -481.11
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -524.08,
        "yPos": -471.09
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -531.98,
        "yPos": -472.44
    },
    {
        "name": "Закопаные части Керфура",
        "description": "Contains two ball joints.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/old_wooden_box.png",
        "xPos": -524.14,
        "yPos": -479.11
    },
    {
        "name": "Сейф",
        "description": "Находится на дне озера. Чтобы достать - иметь при себе подводную маску.<br><br>Открывается, как и настоящие сейфы.<br><br>Взломать сейф - легко.<br>Сначала, наведите курсор на дверь сейфа. Начните медленно поворачивать колёсико мыши в каком-нибудь направлении. Когда услышите щелчёк, который не похож на остальные - начинайте крутить в другую сторону. После нескольких таких успешных щелчков, дверь сейфа откроется.<br><br>Внутри лежит Омега ИИ Модуль, который используется для создания Керфур-О.",
        "related_images" : [],
        "category": "Части Керфура",
        "icon": "./icons/safe.png",
        "xPos": 404.8,
        "yPos": -406
    },



    {
        "name": "Keljoy",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Другие плюши",
        "icon": "./icons/plush_keljoy.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Эйри",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Другие плюши",
        "icon": "./icons/plush_erie.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Ягнёнок",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Другие плюши",
        "icon": "./icons/plush_lamb.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Др. Кел",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Другие плюши",
        "icon": "./icons/plush_kel.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Плита Воздуха",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Рунные Плиты",
        "icon": "./icons/slab.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Плита Огня",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Рунные Плиты",
        "icon": "./icons/slab.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Плита Земли",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Рунные Плиты",
        "icon": "./icons/slab.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Плита Воды",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Рунные Плиты",
        "icon": "./icons/slab.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Зелёный камень",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/note.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Маленькая канистра топлива",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/note.png",
        "xPos": 400,
        "yPos": -406
    },
    {
        "name": "Пароль от входной двери",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/safe.png",
        "xPos": 1,
        "yPos": 5
    },
    {
        "name": "Пароль от комнаты администратора",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -15,
        "yPos": 10
    },
    {
        "name": "Предупреждение бункера",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 20,
        "yPos": 22
    },
    {
        "name": "Переработка мусора",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -23,
        "yPos": 11
    },
    {
        "name": "Камни",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -19,
        "yPos": 19
    },
    {
        "name": "Фигура",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -1,
        "yPos": 26
    },
    {
        "name": "Мясной дождь",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 651,
        "yPos": -641
    },
    {
        "name": "Тест деревьев",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 518,
        "yPos": -211
    },
    {
        "name": "Музыка в лесу",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 388,
        "yPos": 531
    },
    {
        "name": "Дьявольщина",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 213,
        "yPos": 541
    },
    {
        "name": "Записка рыбака",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 58,
         "yPos": 627
    },
    {
        "name": "Прогресс в изучении Дыры",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -620,
         "yPos": -29
    },
    {
        "name": "Спуск в Дыру",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -351,
        "yPos": 46
    },
    {
        "name": "Крипта",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": -394,
        "yPos": -474
    },
       {
        "name": "Взлом сейфа",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Записки",
        "icon": "./icons/note.png",
        "xPos": 1111111111111,
        "yPos": 1111111111111
    },

    {
        "name": "Красный Куст",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/note.png",
        "xPos": 1111111111111,
        "yPos": 1111111111111
    },
    {
        "name": "Домик на Дереве",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/note.png",
        "xPos": 1111111111111,
        "yPos": 1111111111111
    },
    {
        "name": "Стоунхедж / Ад",
        "description": "Для начала ритуала, нужно собрать 7 черепов и положить их на выженную землю.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/note.png",
        "xPos": 215,
        "yPos": 541.1
    },
    {
        "name": "Тестовые деревья",
        "description": "Описание.<br><br>Строка2<br><br>Строка3<b>bold</b><u>underline</u>.",
        "related_images" : [],
        "category": "Точки Интереса",
        "icon": "./icons/note.png",
        "xPos": 1111111111111,
        "yPos": 1111111111111
    },

    {
        "name": "Старая винтовка",
        "description": "Ну давай, давай. Попробуй, стрельни.",
        "related_images" : [],
        "category": "",
        "icon": "./icons/note.png",
        "xPos": -204,
        "yPos": 4
    },

    {
        "name": "Ритуальный нож",
        "description": "",
        "related_images" : [],
        "category": "",
        "icon": "./icons/note.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
    {
        "name": "Чёрная Аргемия",
        "description": "Нужно зацепиться за что-нибудь крюком (чтобы вас не засосало) и подождать, пока чёрная дыра наберёт достаточную мощь, а затем бросить в неё<br><br>красную, синюю, зелёную, голубую, розовую (порядок не важен) плюши Аргемии.<br><br>После исчезновения портала на его месте появится чёрная плюша Аргемии. Использованные цветные при этом пропадут!",
        "related_images" : [],
        "category": "Плюши Аргемии",
        "icon": "./icons/note.png",
        "xPos": 111111111,
        "yPos": 111111111
    },
]
