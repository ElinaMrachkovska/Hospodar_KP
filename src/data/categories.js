export const contact = {
  brand: 'ГОСПОДАР',
  tagline: "Кам'янця-Подільського",
  fullName: "Господар Кам'янця-Подільського",
  region: "Кам'янець-Подільський та область",
phones: [
  { raw: '380671202640', display: '067 120 26 40', icon: 'phone' },
  { raw: '380977464986', display: '097 746 49 86', icon: 'viber' },
],
messengers: [
  { name: 'Viber', icon: 'viber', url: 'viber://chat?number=%2B380671202640' },
  { name: 'Telegram', icon: 'telegram', url: 'https://t.me/+380977464986' },
  { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/380977464986' },
],
  social: [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/gavriliuk6217?igsh=eDM4dG8xcXA5bXhw' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1BEQRD9NRh/' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@user7905053631961?_r=1&_t=ZS-97o3ODcJOw1' },
  ],
}

export const categories = [
  {
    slug: 'sad-ta-landshaft',
    icon: 'tree',
    title: 'Сад та ландшафт',
    short: 'Обрізка, покіс, формування, ландшафтні роботи та оренда садової техніки.',
    intro:
      'Доглядаю за ділянкою від першої весняної обрізки до осіннього прибирання. Працюю зі своїм інструментом і технікою — нічого орендувати додатково.',
    hasSeasonStrip: true,
    media: {
      photos: [
        'media/sad/sad-1.jpg',
        'media/sad/sad-8.jpg',
        'media/sad/sad-10.jpg',
        'media/sad/sad-9.jpg',
        'media/sad/sad-11.jpg',
        'media/sad/sad-2.jpg',
        'media/sad/sad-5.jpg',
        'media/sad/sad-7.jpg',
        'media/sad/sad-3.jpg',
        'media/sad/sad-4.jpg',
        'media/sad/sad-12.jpg',
        'media/sad/sad-13.jpg',
        'media/sad/sad-14.jpg',
        'media/sad/sad-15.jpg',
        'media/sad/sad-16.jpg',
        'media/sad/vyviz-1.jpg',
        'media/sad/sad-17.jpg',
        'media/sad/sad-18.jpg',
        'media/sad/sad-19.jpg',
        'media/sad/sad-20.jpg',
        'media/sad/sad-21.jpg',
        'media/sad/sad-22.jpg',
        'media/sad/sad-23.jpg',
        'media/sad/sad-24.jpg',
        'media/sad/sad-25.jpg',
        'media/sad/sad-26.jpg',
        'media/sad/sad-27.jpg',
        'media/sad/sad-28.jpg',
        'media/sad/sad-29.jpg',
        'media/sad/sad-30.jpg',
        'media/sad/sad-31.jpg',
        'media/sad/sad-32.jpg',
        'media/sad/sad-33.jpg',
        'media/sad/sad-34.jpg',
        'media/sad/sad-35.jpg',
        'media/sad/sad-36.jpg',

      ],
      videos: [
        { src: 'media/videos/sad-video-1.mp4', poster: 'media/videos/sad-video-1-poster.jpg' },
        { src: 'media/videos/sad-video-2.mp4', poster: 'media/videos/sad-video-2-poster.jpg' },
        { src: 'media/videos/sad-video-3.mp4', poster: 'media/videos/sad-video-3-poster.jpg' },
        { src: 'media/videos/sad-video-4.mp4', poster: 'media/videos/sad-video-4-poster.jpg' },
  ],
    },
    services: [
      {
        id: 'obrizka-sadu',
        title: 'Обрізка саду',
        short: 'Формувальна та санітарна обрізка плодових і декоративних дерев.',
        season: 'Лютий – квітень',
        icon: 'shears',
        description:
          'Обрізаю плодові та декоративні дерева так, щоб вони давали більше врожаю і менше хворіли. Прибираю сухі, хворі та зустрічні гілки, формую крону, відкриваю дерево світлу. Роблю це до початку активного соку — тоді дерево переносить обрізку найлегше.',
      },
      {
        id: 'problemni-dereva',
        title: 'Зрізання проблемних дерев',
        short: 'Демонтаж аварійних, хворих або дерев, що заважають будівлям.',
        season: 'Цілий рік',
        icon: 'tree',
        description:
          'Знімаю дерева, які нахилилися до будинку чи паркану, засохли або стали небезпечними після негоди. Працюю акуратно, з подрібненням гілок на місці, щоб на ділянці не лишалося завалів.',
      },
      {
        id: 'skoshuvannya-travy',
        title: 'Скошування трави',
        short: 'Покіс газону та зарослих, занедбаних ділянок.',
        season: 'Травень – вересень',
        icon: 'grass',
        description:
          'Скошую як доглянутий газон, так і ділянки, що заросли по пояс — після зими, при купівлі нової землі чи просто коли руки не доходили. Прибираю скошене, щоб трава не задушила молоду поросль знизу.',
      },
      {
        id: 'chagarnyky',
        title: 'Зрізання чагарників',
        short: 'Стрижка та проріджування кущів будь-якої форми.',
        season: 'Квітень – серпень',
        icon: 'bush',
        description:
          'Стрижу живоплоти й окремі кущі — надаю форму, проріджую загущені зарості, прибираю те, що вже відцвіло чи засохло. Ділянка одразу виглядає доглянутою.',
      },
      {
        id: 'tui-samshyt',
        title: 'Формування туй і самшиту',
        short: 'Чистка, стрижка та надання форми хвойним і самшиту.',
        season: 'Травень – липень',
        icon: 'conifer',
        description:
          'Туї та самшит потребують окремого підходу — неправильна стрижка залишає проплішини на роки. Чищу середину крони від сухих гілок, формую рівний контур, слідкую, щоб рослина не втратила декоративність.',
      },
      {
        id: 'landshaftni-roboty',
        title: 'Ландшафтні роботи',
        short: 'Впорядкування ділянки: посадка, планування, догляд.',
        season: 'Квітень – жовтень',
        icon: 'landscape',
        description:
          'Допомагаю впорядкувати ділянку — від планування посадок до фізичної роботи в землі. Підбираю рішення, які реально приживуться і не потребуватимуть щорічного перероблення.',
      },
      {
        id: 'rozchyshchennya',
        title: 'Розчищення ділянок',
        short: 'Приведення до ладу занедбаних, заростих ділянок під ключ.',
        season: 'Квітень – жовтень',
        icon: 'landscape',
        description:
          'Розчищаю ділянки, якими давно не займалися — від чагарникових заростей до старих завалів гілля. Після мене ділянка готова до подальшого планування чи посадок.',
      },
      {
        id: 'korchuvannya',
        title: 'Корчування пнів вручну',
        short: 'Видалення пнів і коріння там, де техніка не проїде.',
        season: 'Цілий рік',
        icon: 'stump',
        description:
          'Корчую пні та коріння вручну — там, де важка техніка не пройде або зайва вібрація небажана: біля фундаменту, паркану, комунікацій.',
      },
      {
        id: 'oprysk-gerbicydom',
        title: 'Оприскування гербіцидом',
        short: 'Обробка ділянки від бур\u2019яну та небажаної порослі.',
        season: 'Квітень – серпень',
        icon: 'sprayer',
        description:
          'Обробляю ділянку гербіцидом там, де бур\u2019ян узяв гору — доріжки, паркани, занедбані клумби. Підбираю засіб і дозування під конкретну рослинність.',
      },
      {
        id: 'orenda-drobarky',
        title: 'Оренда садової дробарки',
        short: 'Подрібнення гілок після обрізки чи спилу дерев.',
        season: 'Цілий рік',
        icon: 'chipper',
        description:
          'Після обрізки чи спилювання лишається купа гілок — дробарка перетворює її на тріску за лічені хвилини. Можу приїхати зі своїм обладнанням і одразу прибрати ділянку після робіт.',
      },
      {
        id: 'orenda-katka',
        title: 'Оренда садового котка',
        short: 'Прикочування газону після посіву чи для вирівнювання дернини.',
        season: 'Квітень – вересень',
        icon: 'roller',
        description:
          'Садовий коток притискає ґрунт після посіву газону і вирівнює дернину на нерівних ділянках — газон сходить рівніше і густіше.',
      },
    ],
  },
  {
    slug: 'skupka',
    icon: 'recycle',
    title: 'Скупка металобрухту та радіодеталей',
    short: 'Куплю дорого: техніку, радіодеталі, метал і прилади часів СРСР.',
    intro:
      'Куплю дорого стару електроніку, радіодеталі, метал і техніку, яка вже не працює. Заберу сам, розрахуюсь на місці.',
    hasSeasonStrip: false,
    media: {
      photos: [
        'media/skupka/skupka-1.jpg',
        'media/skupka/skupka-2.jpg',
        'media/skupka/skupka-5.jpg',
        'media/skupka/skupka-6.jpg',
        'media/skupka/skupka-3.jpg',
        'media/skupka/skupka-4.jpg',
      ],
      videos: [],
    },
    services: [
      {
        id: 'tv-magnitofony',
        title: 'Телевізори та магнітофони',
        short: 'Стара побутова аудіо- та відеотехніка, робоча й ні.',
        icon: 'tv',
        description:
          'Куплю старі телевізори, магнітофони та іншу побутову аудіо- й відеотехніку — незалежно від того, чи вона працює.',
      },
      {
        id: 'platy-radiodetali',
        title: 'Плати та радіодеталі',
        short: 'Радіодеталі, мікросхеми, плати з будь-якої техніки.',
        icon: 'circuit',
        description:
          'Приймаю плати, мікросхеми та радіодеталі з будь-якої техніки — від побутової електроніки до промислового обладнання.',
      },
      {
        id: 'srsr-prylady',
        title: 'Прилади та роз\u2019єми СРСР',
        short: 'Автомати, перемикачі, прилади, роз\u2019єми радянських часів.',
        icon: 'switch',
        description:
          'Куплю автомати, перемикачі, прилади та роз\u2019єми радянського виробництва — цінність мають навіть непрацюючі одиниці.',
      },
      {
        id: 'metalobrukht',
        title: 'Металобрухт і непрацююча техніка',
        short: 'Будь-який металобрухт та побутова техніка, що вийшла з ладу.',
        icon: 'scrap',
        description:
          'Заберу металобрухт і непрацюючу побутову техніку будь-якого стану — з квартири, гаража чи подвір\u2019я.',
      },
      {
        id: 'mid-alyuminiy',
        title: 'Мідь, алюміній, старі ізоляції',
        short: 'Кольоровий метал і кабельні залишки.',
        icon: 'copper',
        description:
          'Куплю мідь, алюміній та старі ізоляції з кабелю — за вагою, дорого і без зайвих запитань.',
      },
      {
        id: 'utylizaciya-srsr',
        title: 'Утилізація приладів СРСР, плат і радіодеталей',
        short: 'Екологічна переробка старої електроніки та обладнання.',
        icon: 'recycle',
        description:
          'Займаюсь утилізацією та переробкою приладів радянського виробництва, плат і радіодеталей — не звалище, а вторинна переробка.',
      },
    ],
  },
  {
    slug: 'demontazh',
    icon: 'hammer',
    title: 'Демонтажні роботи',
    short: 'Демонтаж будівель і конструкцій, зачищення приміщень.',
    intro:
      'Розбираю будівлі, дерев\u2019яні та металеві конструкції, зачищаю приміщення перед ремонтом чи продажем — з вивозом сміття, якщо потрібно.',
    hasSeasonStrip: false,
    media: {
      photos: [
        'https://images.unsplash.com/photo-1742715342246-7e144228f9f1?auto=format&fit=crop&w=900&q=75',
        'https://images.unsplash.com/photo-1584786454449-ecc77738684c?auto=format&fit=crop&w=900&q=75',
        'https://images.unsplash.com/photo-1709831917664-804b57448953?auto=format&fit=crop&w=900&q=75',
      'media/vyviz/demontage.webp',
      ],
      videos: [],
    },
    services: [
      {
        id: 'demontazh-budynkiv',
        title: 'Демонтаж будинків',
        short: 'Повний або частковий знос старих будівель.',
        icon: 'hammer',
        description:
          'Виконую повний або частковий демонтаж старих будинків і господарських споруд, які вже відслужили своє.',
      },
      {
        id: 'derevyani-konstrukcii',
        title: 'Демонтаж дерев\u2019яних конструкцій',
        short: 'Сараї, хлівки, старі прибудови, паркани.',
        icon: 'woodbeam',
        description:
          'Розбираю дерев\u2019яні сараї, хлівки, старі прибудови та паркани — з вивозом деревини чи розпилом на дрова, за домовленістю.',
      },
      {
        id: 'metalevi-konstrukcii',
        title: 'Демонтаж металевих конструкцій',
        short: 'Гаражі, навіси, старі металоконструкції.',
        icon: 'metalbeam',
        description:
          'Демонтую металеві гаражі, навіси та інші конструкції з подальшим вивозом металобрухту.',
      },
      {
        id: 'zachyshchennya',
        title: 'Зачищення будинків, гаражів, квартир',
        short: 'Повне звільнення приміщення від старих речей і сміття.',
        icon: 'broom',
        description:
          'Звільняю будинки, гаражі та квартири від старих речей, меблів і будівельного сміття — приміщення залишається порожнім і готовим до ремонту чи продажу.',
      },
    ],
  },
  {
    slug: 'vyviz-ta-drova',
    icon: 'truck',
    title: 'Вивіз сміття та продаж дров',
    short: 'Вивезу сміття, меблі й техніку; продам дрова, щепу та гілля.',
    intro:
      'Вивожу і утилізую сміття, стару техніку та меблі. З того, що лишається після робіт у саду й на демонтажі, продаю дрова, щепу та гілля.',
    hasSeasonStrip: false,
    media: {
      photos: [
        'media/vyviz/dubovyie-drova2.jpg',
        'media/vyviz/images.jpeg',
        'media/vyviz/0566.jpg',
        'https://images.unsplash.com/photo-1713730060332-2e478ce2e318?auto=format&fit=crop&w=900&q=75',
      ],
      videos: [],
    },
    services: [
      {
        id: 'vyviz-smittya',
        title: 'Вивіз та утилізація сміття',
        short: 'Будівельне й побутове сміття будь-якого обсягу.',
        icon: 'truck',
        description:
          'Вивожу будівельне та побутове сміття після ремонту, демонтажу чи прибирання ділянки — з подальшою утилізацією.',
      },
      {
        id: 'vyviz-tekhniky',
        title: 'Вивіз побутової техніки',
        short: 'Стара непотрібна техніка — забираю і вивожу.',
        icon: 'truck',
        description:
          'Забираю стару непрацюючу побутову техніку, яка просто займає місце, і вивожу на утилізацію.',
      },
      {
        id: 'vyviz-mebliv',
        title: 'Вивіз меблів та деревини',
        short: 'Старі меблі, дошки, залишки деревини.',
        icon: 'sofa',
        description:
          'Вивожу старі меблі, дошки та інші залишки деревини — звільняю простір швидко й акуратно.',
      },
      {
        id: 'prodazh-drov',
        title: 'Продаж дров',
        short: 'Сухі дрова, нарубані та готові до використання.',
        icon: 'firewood',
        description:
          'Продаю дрова з розбирання дерев\u2019яних конструкцій і обрізки саду — сухі, нарубані, готові до топки.',
      },
      {
        id: 'prodazh-shchepy',
        title: 'Продаж щепи',
        short: 'Деревна тріска для мульчування чи опалення.',
        icon: 'woodchips',
        description:
          'Продаю деревну тріску, отриману дробаркою, — підходить для мульчування ділянки чи як паливо.',
      },
      {
        id: 'prodazh-gillya',
        title: 'Продаж гілля',
        short: 'Гілки для розпалу, декору чи господарських потреб.',
        icon: 'branch',
        description:
          'Продаю гілля — для розпалу, господарських потреб чи декоративного використання.',
      },
    ],
  },
]

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug)
}
