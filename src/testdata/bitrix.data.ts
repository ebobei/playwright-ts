// config.js
  const bitrixData = [
    {
      testName: "Проверка страницы личного кабинета",
      url: "personal/",
    },
    {
      testName: 'Проверка страницы "Моя корзина"',
      url: "personal/cart/",
    },
    {
      testName: 'Проверка страницы "Кабинет врача"',
      url: "personal/doctor/",
    },
    {
      testName: 'Проверка страницы "Избранное"',
      url: "personal/favourite/",
    },
    {
      testName: 'Проверка страницы личного кабинета "Обратная связь"',
      url: "personal/feedback/",
    },
    {
      testName: 'Проверка страницы "История заказов"',
      url: "personal/order/",
    },
    {
      testName: 'Проверка страницы "Что с моим заказом"',
      url: "personal/order/status.php",
    },
    {
      testName: 'Проверка страницы "Профиль"',
      url: "personal/profile/",
    },
    {
      testName: "Проверка главной страницы",
      url: "",
    },
    {
      testName: 'Проверка страницы "Доставка"',
      url: "company/delivery/",
    },
    {
      testName: "Проверка страницы доставки для конкретного города",
      url: "company/delivery/arkhangelskoe/",
    },
    {
      testName: 'Проверка страницы "Самовывоз"',
      url: "company/pickup/",
    },
    {
      testName: "Проверка страницы самовывоза для конкретной локации",
      url: "company/pickup/baumanskaya/",
    },
    {
      testName: 'Проверка страницы "Скидки и акции в аптеке"',
      url: "company/stock/",
    },
    {
      testName: 'Проверка страницы "ВАУ-скидки аптеке"',
      url: "company/stock/wow-sales/",
    },
    {
      testName: 'Проверка страницы "Профилактика инфекций"',
      url: "meta/profilaktika-infektsiy/",
    },
    {
      testName:
        'Проверка страницы "Профилактика инфекций" -> Антибактериальные средства для дома',
      url: "meta/profilaktika-infektsiy/antibakterialnye-sredstva-dlya-doma/",
    },
    {
      testName: 'Проверка страницы "Статьи"',
      url: "articles/",
    },
    {
      testName: "Проверка страницы конкретной статьи",
      url: "articles/health/koronavirus_kak_ne_zabolet_i_ne_poddatsya_panike/",
    },
    {
      testName: "Проверка страницы конкретного лендинга",
      url: "landing/flebodia/",
    },
    {
      testName: 'Проверка страницы "О компании"',
      url: "landing/about/",
    },
    {
      testName: 'Проверка страницы "Реклама на сайте"',
      url: "company/advertising/",
    },
    {
      testName: 'Проверка страницы "Контакты"',
      url: "company/contacts/",
    },
    {
      testName: 'Проверка страницы "Пользовательское соглашение"',
      url: "company/contract/",
    },
    {
      testName: 'Проверка страницы компании "Обратная связь"',
      url: "company/feedback/",
    },
    {
      testName: 'Проверка страницы "Франшиза"',
      url: "company/franchise/",
    },
    {
      testName: 'Проверка страницы "Как купить"',
      url: "company/howto/",
    },
    {
      testName: 'Проверка страницы "Наша лицензия"',
      url: "company/license/",
    },
    {
      testName: 'Проверка страницы "Наша миссия"',
      url: "company/mission/",
    },
    {
      testName: 'Проверка страницы "Новости"',
      url: "company/news/",
    },
    {
      testName: 'Проверка страницы "Лекарства оптом"',
      url: "company/opt/",
    },
    {
      testName: 'Проверка страницы "Наши партнеры"',
      url: "company/partners/",
    },
    {
      testName: 'Проверка страницы "Способы оплаты"',
      url: "landing/payment/",
    },
    {
      testName: 'Проверка страницы "Политика конфиденциальности"',
      url: "company/policy/",
    },
    {
      testName: 'Проверка страницы "Отзывы о работе еаптеки"',
      url: "company/reviews_site/",
    },
    {
      testName: 'Проверка страницы "Наши поставщики"',
      url: "company/supplier/",
    },
    {
      testName: 'Проверка страницы "Вакансии"',
      url: "landing/vacancy/",
    },
    {
      testName: 'Проверка страницы "Медицинский справочник"',
      url: "medspravochnik/",
    },
    {
      testName: "Проверка корневой страницы поиска",
      url: "search/",
    },
    {
      testName: "Проверка страницы результатов поиска",
      url: "search/?q=%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD",
    },
    {
      testName: "Проверка страницы лекарств",
      url: "goods/",
    },
    {
      testName: "Проверка страницы конкретного лекарства",
      url: "goods/id100177/",
    },
    {
      testName: "Проверка перехода в лекарство из каталога",
      url: "goods/id205185/?utm_referrer=https%3a%2f%2fwww.eapteka.ru%2fgoods%2fmedical%2f",
    },
    {
      testName: "Проверка перехода в лекарство с главной",
      url: "goods/adapter_beurer_setevoy_dlya_tonometra_bm70_07129_b/",
    },
    {
      testName: "Проверка страницы поиска по действующему веществу",
      url: "goods/active_ingredient/abakavir/",
    },
    {
      testName: "Проверка страницы поиска по бренду",
      url: "goods/brand/akku_chek/",
    },
    {
      testName: 'Проверка страницы "Средства для гигиены и красоты"',
      url: "goods/beauty/",
    },
    {
      testName: 'Проверка страницы "Косметика для загара"',
      url: "goods/beauty/kosmetika_dlya_zagara/",
    },
    {
      testName: 'Проверка страницы "Автозагары"',
      url: "goods/beauty/kosmetika_dlya_zagara/sredstva_dlya_avtozagara/",
    },
    {
      testName:
        'Проверка страницы "Автозагары" с выставленным фильтром по бренду',
      url: "goods/beauty/kosmetika_dlya_zagara/sredstva_dlya_avtozagara/?b=aven",
    },
  ];
export default bitrixData;
