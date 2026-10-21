export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  tag: string;
  isPopular?: boolean;
  description: string;
  features: string[];
}

export interface AddonItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nude' | 'french' | 'art' | 'pedicure';
  imageUrl: string;
  shade: string;
  duration: string;
  description: string;
}

export interface SterilizationStep {
  number: string;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  standard: string;
  iconName: string;
  details: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'complex-all-inclusive',
    name: 'Комплекс «Все включено»',
    price: 3200,
    duration: '1 ч 30 мин',
    tag: 'Выбор 85% гостей',
    isPopular: true,
    description: 'Полный комплекс для безупречных рук: снятие предыдущего покрытия, атравматичный комбинированный маникюр, архитектурное укрепление и премиальный гель-лак Luxio.',
    features: [
      'Безопасное снятие фрезой без пропилов',
      'Аппаратно-препаратная обработка кутикулы',
      'Выравнивание и укрепление пудрой / гелем',
      'Покрытие под кутикулу оттенком Luxio / Beautix',
      'Массаж рук с сухим молекулярным маслом и сывороткой'
    ]
  },
  {
    id: 'smart-pedicure',
    name: 'Smart-педикюр эстетика',
    price: 3800,
    duration: '1 ч 30 мин',
    tag: 'Мембранная гладкость',
    isPopular: false,
    description: 'Инновационная обработка стоп умными дисками разной абразивности с молекулярным маслом. Зеркальная гладкость кожи до 5 недель без шелушений.',
    features: [
      'Обработка стоп дисками Smart без распаривания',
      'Шлифовка трещинок и устранение омозолелостей',
      'Идеальная обработка пальчиков и околоногтевых валиков',
      'Стойкое тонкое покрытие гель-лаком',
      'Полировка по маслу с эффектом шелковых пяток'
    ]
  },
  {
    id: 'modeling-extension',
    name: 'Моделирование & Наращивание',
    price: 4500,
    duration: '2 ч 15 мин',
    tag: 'Архитектурный каркас',
    isPopular: false,
    description: 'Исправление скрученных и клюющих ногтей, моделирование идеальной формы миндаля, овала или четкого квадрата на гелевые типсы или полигель.',
    features: [
      'Исправление анатомических дефектов роста',
      'Любая желаемая длина без утяжеления',
      'Ультратонкий торцевой край высокой прочности',
      'Премиальный однотонный глянец или молочный градиент',
      'Стойкость без отслоек от 4 недель'
    ]
  },
  {
    id: 'author-design',
    name: 'Авторский дизайн & Френч',
    price: 1200,
    duration: 'от 30 мин',
    tag: 'Ручная роспись',
    isPopular: false,
    description: 'Ювелирный микро-френч, трендовый градиент беби-бумер, минималистичный стемпинг, геометрические тонкие линии или инкрустация кристаллами Swarovski.',
    features: [
      'Идеальная улыбка классического или цветного френча',
      'Глубокий градиент аэропуффингом',
      'Жемчужные втирки и корейский стеклянный глянец',
      'Стойкая фиксация декора двойным топом',
      'Индивидуальный подбор эскиза под ваш стиль'
    ]
  }
];

export const ADDONS: AddonItem[] = [
  {
    id: 'addon-removal',
    name: 'Снятие покрытия другого мастера',
    price: 400,
    duration: '+15 мин',
    description: 'Бережное снятие чужого материала без истончения ногтевой пластины'
  },
  {
    id: 'addon-repair',
    name: 'Ремонт / донаращивание (1 ноготь)',
    price: 250,
    duration: '+10 мин',
    description: 'Восстановление сломанного уголка или трещины акригелем'
  },
  {
    id: 'addon-strengthening',
    name: 'Глубокое армирование гелем',
    price: 600,
    duration: '+20 мин',
    description: 'Для тонких, гнущихся и склонных к отслойкам ногтей'
  },
  {
    id: 'addon-french',
    name: 'Изящный классический френч',
    price: 700,
    duration: '+25 мин',
    description: 'Выверенные пропорции улыбки на всех 10 пальчиках'
  },
  {
    id: 'addon-rubbing',
    name: 'Жемчужная / лунная втирка',
    price: 500,
    duration: '+15 мин',
    description: 'Мягкое атласное сияние с эффектом глазированных ногтей'
  },
  {
    id: 'addon-spa',
    name: 'Горячий SPA-парафин и скраб',
    price: 800,
    duration: '+20 мин',
    description: 'Интенсивное питание кожи рук натуральными восками и маслами'
  }
];

export const STERILIZATION_STEPS: SterilizationStep[] = [
  {
    number: '01',
    title: 'Ультразвуковая дезинфекция',
    subtitle: 'Раствор «Оптимакс Про» 3%',
    time: '15 минут экспозиции',
    description: 'Инструменты погружаются в сертифицированный дезинфицирующий раствор в ультразвуковую ванну Codyson. УЗ-кавитация выбивает микрочастицы даже из труднодоступных шарнирных соединений кусачек.',
    standard: 'СанПиН 2.1.3678-20 п. 8.2.31',
    iconName: 'Waves',
    details: [
      'Полное уничтожение вирусов, бактерий и грибковых спор',
      'Контроль концентрации раствора тест-полосками',
      'Электронный таймер ультразвуковой кавитации'
    ]
  },
  {
    number: '02',
    title: 'ПСО и азопирамовая проба',
    subtitle: 'Очистка и химический тест',
    time: 'Контроль чистоты',
    description: 'Инструменты промываются под проточной дистиллированной водой, очищаются нейлоновыми щетками и высушиваются. Каждая партия проходит обязательную азопирамовую пробу на скрытые следы крови и белка.',
    standard: 'ГОСТ Р 58151.1-2018',
    iconName: 'Sparkles',
    details: [
      'Отсутствие сине-фиолетового окрашивания пробы',
      'Полная сушка перед упаковкой в пакет',
      'Визуальный контроль заточки под микроскопом'
    ]
  },
  {
    number: '03',
    title: 'Сухожаровой шкаф ГП-10',
    subtitle: 'Воздушная стерилизация при 180°C',
    time: '60 минут в камере',
    description: 'Инструменты запаиваются в индивидуальный медицинский крафт-пакет и помещаются в медицинский стерилизатор ГП-10. Горячий сухой воздух уничтожает 100% патогенных микроорганизмов.',
    standard: 'Минздрав РФ № 80/01-2021',
    iconName: 'ShieldCheck',
    details: [
      'Регистрационное удостоверение медицинского изделия',
      'Температурный датчик и журнал учета стерилизации',
      'Вскрытие пакета строго при клиенте'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Шелковый нюд с чистым бликом',
    category: 'nude',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    shade: 'Luxio Coy + жемчужный топ',
    duration: '1 ч 40 мин',
    description: 'Атравматичный аппаратный маникюр, укрепление каучуковой базой и благородный нюдовый оттенок с идеальной непрерывной линией отражения.'
  },
  {
    id: 'gal-2',
    title: 'Классический микро-френч',
    category: 'french',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    shade: 'Камуфляж Luxio Innocent + ультрабелый пигмент',
    duration: '2 ч 00 мин',
    description: 'Изящный французский маникюр с глубокой аркой и тончайшей четкой улыбкой на форме мягкий квадрат.'
  },
  {
    id: 'gal-3',
    title: 'Глазированный жемчуг (Glazed Pearl)',
    category: 'nude',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    shade: 'Молочная база + втирка Aurora Pearl',
    duration: '1 ч 50 мин',
    description: 'Культовый сияющий эффект с многомерным перламутровым переливом на натуральной укрепленной пластине.'
  },
  {
    id: 'gal-4',
    title: 'Шелковый жемчуг & Перламутр',
    category: 'art',
    imageUrl: '/hero-nails.png',
    shade: 'Жемчужно-молочный шелк Luxio',
    duration: '1 ч 30 мин',
    description: 'Изящный авторский перламутровый дизайн с текстурой натурального белого шелка и идеальной геометрией мягкого квадрата.'
  },
  {
    id: 'gal-5',
    title: 'Smart-педикюр в оттенке Бордо',
    category: 'pedicure',
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
    shade: 'Luxio Vamp + мембранная полировка',
    duration: '1 ч 30 мин',
    description: 'Идеальная эстетика стоп со smart-шлифовкой дисками, обработкой околоногтевых валиков и глубоким винным покрытием.'
  },
  {
    id: 'gal-6',
    title: 'Архитектурный молочный миндаль',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
    shade: 'Молочный полигель + серебряный шиммер',
    duration: '2 ч 10 мин',
    description: 'Моделирование правильных параллелей салонного миндаля с аквариумным рассеянным мерцанием.'
  },
  {
    id: 'gal-7',
    title: 'Нежный персиковый кашемир',
    category: 'nude',
    imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80',
    shade: 'Luxio Haven + сатиновый финиш',
    duration: '1 ч 45 мин',
    description: 'Уютный бархатистый матовый топ на натуральной длине без единого затека под кутикулу.'
  },
  {
    id: 'gal-8',
    title: 'Градиент Беби-Бумер',
    category: 'french',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    shade: 'Плавный переход камуфляж / фарфор',
    duration: '2 ч 05 мин',
    description: 'Аэропуффинг с идеальной растушевкой без видимых полос и границ перехода цвета.'
  },
  {
    id: 'gal-9',
    title: 'Smart-педикюр Эстетичный Нюд',
    category: 'pedicure',
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    shade: 'Luxio Pure + полировка Smart-маслом',
    duration: '1 ч 25 мин',
    description: 'Атравматичная дисковая обработка стоп и пальцев с натуральным полупрозрачным глянцем.'
  }
];

export const TIME_SLOTS = [
  { time: '9:00', label: 'Утро (первый слот)' },
  { time: '10:30', label: 'Утро' },
  { time: '12:00', label: 'День' },
  { time: '13:30', label: 'День (кофейная пауза)' },
  { time: '15:00', label: 'День' },
  { time: '16:30', label: 'Вечер' }
];
