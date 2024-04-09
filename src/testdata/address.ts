// config.js
const adressPage = [
    {
        cityName: "Москва и область",
        url: "",
        diliveryAdress: "г Москва, Красная пл, д 1",
      },
      {
        cityName: "Санкт-Петербург",
        url: "spb/",
        diliveryAdress: "г Санкт-Петербург, пр-кт Елизарова, д 3",
      },
      {
        cityName: "Тверь",
        url: "tver/",
        diliveryAdress: "г Тверь, пр-кт Ленина, д 2",
      },
      {
        cityName: "Уфа",
        url: "ufa/",
        diliveryAdress: "г Уфа, ул Ленина, д 5/1",
      },
      {
        cityName: "Воронеж",
        url: "voronezh/",
        diliveryAdress: "г Воронеж, ул Ленина, д 12",
      },
      {
        cityName: "Омск",
        url: "omsk/",
        diliveryAdress: "г Омск, ул Ленина, д 2",
      },
      {
        cityName: "Йошкар-Ола",
        url: "yoshkar-ola/",
        diliveryAdress: "",
      },
      // {
      //   cityName: "Красноярск",
      //   url: "krasnoyarsk/",
      //   diliveryAdress: "г Красноярск, ул Ленина, д 122",
      // },
      {
        cityName: "Лениногорск",
        url: "city-leninogorsk/",
        diliveryAdress: "",
      },
      {
        cityName: "Бийск",
        url: "city-biysk/",
        diliveryAdress: "",
      },
      {
        cityName: "Казань",
        url: "kazan/",
        diliveryAdress: "Мира, д 2",
      },
      // {
      //   cityName: "Нижний Новгород",
      //   url: "nn/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Краснодар",
      //   url: "krasnodar/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Новосибирск",
      //   url: "novosibirsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Ростов-на-Дону",
      //   url: "rostov-na-donu/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Самара",
      //   url: "samara/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Екатеринбург",
      //   url: "ekb/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Саратов",
      //   url: "saratov/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Волгоград",
      //   url: "volgograd/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Курск",
      //   url: "kursk/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Петрозаводск",
      //   url: "petrozavodsk/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Рязань",
      //   url: "ryazan/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Белгород",
      //   url: "belgorod/",
      //   diliveryAdress: "г Белгород, ул Мирная, д 10",
      // },
      // {
      //   cityName: "Тула",
      //   url: "tula/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Липецк",
      //   url: "lipetsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Иваново",
      //   url: "ivanovo/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Смоленск",
      //   url: "smolensk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Ставрополь",
      //   url: "stavropol/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Челябинск",
      //   url: "chelyabinsk/",
      //   diliveryAdress: "г Челябинск, ул Мира, д 2",
      // },
      // {
      //   cityName: "Калуга",
      //   url: "kaluga/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Орел",
      //   url: "orel/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Пермь",
      //   url: "perm/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Астрахань",
      //   url: "astrakhan/",
      //   diliveryAdress: "г Астрахань, ул Мира, д 2",
      // },
      // {
      //   cityName: "Пенза",
      //   url: "penza/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Брянск",
      //   url: "briansk/",
      //   diliveryAdress: "г Брянск, ул Мира, д 2",
      // },
      // {
      //   cityName: "Ульяновск",
      //   url: "ulyanovsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Чебоксары",
      //   url: "cheboksary/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Ярославль",
      //   url: "yaroslavl/",
      //   diliveryAdress: "г Ярославль, пр-кт Ленина, д 1а",
      // },
      // {
      //   cityName: "Тюмень",
      //   url: "tyumen/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Иркутск",
      //   url: "irkutsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Кемерово",
      //   url: "kemerovo/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Киров",
      //   url: "kirov/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Барнаул",
      //   url: "barnaul/",
      //   diliveryAdress: "г Барнаул, ул Мира, д 2",
      // },
      // {
      //   cityName: "Хабаровск",
      //   url: "khabarovsk/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Обнинск",
      //   url: "obninsk/",
      //   diliveryAdress: "",
      // },
      // {
      //   cityName: "Ижевск",
      //   url: "izhevsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Дзержинск",
      //   url: "city-dzerzhnisk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Вологда",
      //   url: "vologda/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Тольятти",
      //   url: "tolyatti/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Сочи",
      //   url: "sochi/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Тамбов",
      //   url: "tambov/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Томск",
      //   url: "tomsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Псков",
      //   url: "pskov/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Пятигорск",
      //   url: "pyatigorsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Оренбург",
      //   url: "orenburg/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Энгельс",
      //   url: "city-engels/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Владимир",
      //   url: "vladimir/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Кострома",
      //   url: "kostroma/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Владивосток",
      //   url: "vladivostok/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Саранск",
      //   url: "saransk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Калининград",
      //   url: "kaliningrad/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Новокузнецк",
      //   url: "novokuznetsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Курган",
      //   url: "kurgan/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Набережные Челны",
      //   url: "naberezhnye-chelny/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Абакан",
      //   url: "abakan/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Магнитогорск",
      //   url: "magnitogorsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Новороссийск",
      //   url: "novorossiysk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Якутск",
      //   url: "yakutsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Сургут",
      //   url: "surgut/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Сыктывкар",
      //   url: "city-syktyvkar/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Чита",
      //   url: "chita/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Нижневартовск",
      //   url: "nizhnevartovsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Череповец",
      //   url: "city-cherepovec/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Улан-Удэ",
      //   url: "ulan-udeh/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Альметьевск",
      //   url: "city-almetevsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Нижнекамск",
      //   url: "city-nizhnekamsk/",
      //   diliveryAdress: "Мира, д 2",
      // },
      // {
      //   cityName: "Благовещенск",
      //   url: "city-blagoveshensk/",
      //   diliveryAdress: "Мира, д 2",
      // },
    ];


export default adressPage;
