let currentLang = localStorage.getItem("cryptoWorldLang") || "ru";
  let currentPage = "home";

  const uiText = {
    ru: {
      search: "Поиск",
      navHome: "ГЛАВНАЯ",
      navInfo: "СВЕДЕНИЯ О КРИПТОВАЛЮТАХ",
      navCoins: "ПОПУЛЯРНЫЕ МОНЕТЫ",
      navBlockchain: "БЛОКЧЕЙН",
      navBeginnerMaterials: "ПОЛЕЗНЫЕ МАТЕРИАЛЫ НОВИЧКУ",
      dropTerms: "Основные термины",
      dropHistory: "История криптовалют",
      dropTypes: "Виды криптовалют",
      dropUse: "Где используются криптовалюты",
      dropProsCons: "Преимущества и недостатки криптовалют",
      dropStart: "С чего начать",
      dropFirstBuy: "Первая покупка криптовалюты",
      dropMistakes: "Типичные ошибки и безопасность пользователя",
      dropCompare: "Другие монеты",
      dropBlockchainMain: "Что такое блокчейн",
      dropTransactions: "Транзакции",
      dropMining: "Майнинг",
      dropSmart: "Смарт-контракты",
      dropFaq: "Частые вопросы",
      dropArticles: "Мини-статьи",
      dropLinks: "Полезные ссылки",
      footer: "© 2026 CryptoWorld. Учебный сайт о криптовалютах.",
      noResults: "Ничего не найдено"
    },
    en: {
      search: "Search",
      navHome: "HOME",
      navInfo: "ABOUT CRYPTOCURRENCIES",
      navCoins: "POPULAR COINS",
      navBlockchain: "BLOCKCHAIN",
      navBeginnerMaterials: "BEGINNER RESOURCES",
      dropTerms: "Basic terms",
      dropHistory: "History of cryptocurrencies",
      dropTypes: "Types of cryptocurrencies",
      dropUse: "Where cryptocurrencies are used",
      dropProsCons: "Advantages and disadvantages of cryptocurrencies",
      dropStart: "Where to start",
      dropFirstBuy: "First cryptocurrency purchase",
      dropMistakes: "Common mistakes and user safety",
      dropCompare: "Other coins",
      dropBlockchainMain: "What is blockchain",
      dropTransactions: "Transactions",
      dropMining: "Mining",
      dropSmart: "Smart contracts",
      dropFaq: "Частые вопросы",
      dropArticles: "Mini articles",
      dropLinks: "Useful links",
      footer: "© 2026 CryptoWorld. Educational website about cryptocurrencies.",
      noResults: "Nothing found"
    }
  };

  const pages = {
    home: {
      ruTitle: "Главная",
      enTitle: "Home",
      ruDescription: "Главная страница сайта",
      enDescription: "Home page about cryptocurrencies",
      ru: `
        <div class="hero">
          <div class="hero-text">
            <h1>Мир криптовалют</h1>
            <p>
              Учебный сайт о криптовалютах, блокчейне, популярных монетах
              и правилах безопасного использования цифровых активов.
            </p>
          </div>
        </div>

        <div class="home-grid">
          <div class="home-card" onclick="openPage('whatCrypto')">
            <h3>Основные термины</h3>
            <p>Главные понятия о криптовалютах простыми и понятными словами.</p>
          </div>

          <div class="home-card" onclick="openPage('beginnerStart')">
            <h3>Новичку</h3>
            <p>С чего начать изучение криптовалют и что важно знать в первую очередь.</p>
          </div>

          <div class="home-card" onclick="openPage('cryptoTypes')">
            <h3>Виды криптовалют</h3>
            <p>Монеты, токены, стейблкоины, мемкоины и другие виды цифровых активов.</p>
          </div>

          <div class="home-card" onclick="openPage('typicalMistakes')">
            <h3>Типичные ошибки и безопасность пользователя</h3>
            <p>Каких ошибок избегать новичку и как безопасно работать с криптовалютой.</p>
          </div>
        </div>

        <div class="news-section">
          <h2 class="news-title">Актуальные новости криптовалют</h2>
          <div class="news-grid">
            <div class="news-card">
              <span class="news-date">29.05.26</span>
              <h3>Coinbase и Kalshi запускают регулируемые бессрочные криптофьючерсы в США</h3>
              <p>
                Coinbase и Kalshi представили продукт с регулируемыми бессрочными фьючерсами для американских инвесторов.
                Новость показывает, что рынок криптодеривативов продолжает развиваться уже внутри официальной регулируемой среды.
              </p>
              <a class="news-link" href="https://www.reuters.com/legal/government/coinbase-kalshi-bring-regulated-perpetual-crypto-futures-us-investors-2026-05-29/" target="_blank" rel="noopener noreferrer">Источник: Reuters</a>
            </div>

            <div class="news-card">
              <span class="news-date">28.05.26</span>
              <h3>Французский регулятор предупредил криптокомпании без лицензии MiCA</h3>
              <p>
                Во Франции напомнили, что криптокомпании без лицензии по правилам MiCA могут столкнуться с преследованием,
                если продолжат работать без официального разрешения. Это подчёркивает рост роли регулирования крипторынка в Европе.
              </p>
              <a class="news-link" href="https://www.reuters.com/business/finance/crypto-companies-without-eu-licences-face-prosecution-french-regulator-warns-2026-05-28/" target="_blank" rel="noopener noreferrer">Источник: Reuters</a>
            </div>

            <div class="news-card">
              <span class="news-date">25.05.26</span>
              <h3>Tether объявила о запуске стейблкоина GELT при поддержке правительства Грузии</h3>
              <p>
                Компания Tether сообщила о планах запустить цифровой токен GELT, связанный с грузинским лари.
                Проект ориентирован на развитие цифровых платежей, трансграничной торговли и финтех-инфраструктуры.
              </p>
              <a class="news-link" href="https://www.reuters.com/technology/tether-georgia-government-launch-official-stablecoin-georgia-2026-05-25/" target="_blank" rel="noopener noreferrer">Источник: Reuters</a>
            </div>
          </div>
        </div>

        <div class="home-market-section">
          <div class="home-market-updated">Данные обновлены автоматически: <span id="homeMarketUpdated">загрузка...</span></div>
          <div class="home-market-table-wrap">
            <table class="home-market-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Криптовалюта</th>
                  <th>Цена</th>
                  <th>24 часа</th>
                  <th>7 дней</th>
                  <th>Капитализация</th>
                  <th>График</th>
                </tr>
              </thead>
              <tbody id="homeCryptoRatesBody">
                <tr><td colspan="7">Загрузка данных...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      en: `
        <div class="hero">
          <div class="hero-text">
            <h1>World of Cryptocurrencies</h1>
            <p>
              An educational website about cryptocurrencies, blockchain, popular coins
              and the safe use of digital assets.
            </p>
          </div>
        </div>

        <div class="home-grid">
          <div class="home-card" onclick="openPage('whatCrypto')">
            <h3>Basic terms</h3>
            <p>Main cryptocurrency concepts explained in clear and simple language.</p>
          </div>

          <div class="home-card" onclick="openPage('beginnerStart')">
            <h3>For beginners</h3>
            <p>Where to start learning about crypto and what is important to understand first.</p>
          </div>

          <div class="home-card" onclick="openPage('cryptoTypes')">
            <h3>Types of cryptocurrencies</h3>
            <p>Coins, tokens, stablecoins, meme coins and other kinds of digital assets.</p>
          </div>

          <div class="home-card" onclick="openPage('typicalMistakes')">
            <h3>Common mistakes and user safety</h3>
            <p>What mistakes beginners should avoid and how to use cryptocurrency more safely.</p>
          </div>
        </div>

        <div class="news-section">
  
        <section class="home-market-section">
          <div class="home-market-header">
            <div>
              
              <p id="homeMarketStatus">Loading current data...</p>
            </div>
          </div>

          <div class="home-market-table-wrap">
            <table class="home-market-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cryptocurrency</th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>Market cap</th>
                  <th>Chart</th>
                </tr>
              </thead>
              <tbody id="homeCryptoRatesBody">
                <tr>
                  <td colspan="7">Loading top cryptocurrencies...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h2 class="news-title">Latest cryptocurrency news</h2>
          <div class="news-grid">
            <div class="news-card">
              <span class="news-date">29.05.26</span>
              <h3>Coinbase and Kalshi launch regulated perpetual crypto futures in the US</h3>
              <p>
                Coinbase and Kalshi introduced regulated perpetual futures for U.S. investors.
                The update shows how crypto derivatives are moving further into a formal regulated environment.
              </p>
              <a class="news-link" href="https://www.reuters.com/legal/government/coinbase-kalshi-bring-regulated-perpetual-crypto-futures-us-investors-2026-05-29/" target="_blank" rel="noopener noreferrer">Source: Reuters</a>
            </div>

            <div class="news-card">
              <span class="news-date">28.05.26</span>
              <h3>French regulator warns crypto firms operating without MiCA licences</h3>
              <p>
                France warned that crypto firms without MiCA authorisation could face prosecution if they continue operating
                without proper approval, highlighting the growing importance of regulation in the European market.
              </p>
              <a class="news-link" href="https://www.reuters.com/business/finance/crypto-companies-without-eu-licences-face-prosecution-french-regulator-warns-2026-05-28/" target="_blank" rel="noopener noreferrer">Source: Reuters</a>
            </div>

            <div class="news-card">
              <span class="news-date">25.05.26</span>
              <h3>Tether announces GELT stablecoin launch with support from Georgia</h3>
              <p>
                Tether said it plans to launch GELT, a digital token linked to the Georgian lari.
                The project is aimed at digital payments, cross-border trade and fintech growth.
              </p>
              <a class="news-link" href="https://www.reuters.com/technology/tether-georgia-government-launch-official-stablecoin-georgia-2026-05-25/" target="_blank" rel="noopener noreferrer">Source: Reuters</a>
            </div>
          </div>
        </div>
      `
    },

    whatCrypto: {
      ruTitle: "Основные термины",
      enTitle: "Basic terms",
      ruDescription: "Главные понятия криптовалютного рынка простыми словами",
      enDescription: "Basic cryptocurrency terms by categories",
      ru: `
        <h1 class="page-title">Основные термины</h1>
        <div class="content-box terms-panel">
          <section class="term-category">
            <h2>Базовые термины криптовалютного рынка</h2>
            <p class="term-hint">Нажмите на термин, чтобы открыть или скрыть определение.</p>
              <div class="terms-columns">
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Криптовалюта</div>
                  <p>Цифровой актив, который существует в электронном виде и используется для переводов, хранения стоимости и работы с онлайн-сервисами. В отличие от обычных денег, криптовалюта не выпускается единым банком, а обычно работает через распределённую сеть участников.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Seed-фраза</div>
                  <p>Последовательность из нескольких секретных слов, которая используется для восстановления доступа к криптокошельку. Её нужно хранить в безопасном месте, потому что человек, получивший seed-фразу, может получить доступ к средствам.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Токен</div>
                  <p>Цифровой актив, который создаётся на уже существующей криптосети и используется внутри проекта или платформы. Токены могут давать доступ к функциям сервиса, участвовать в голосовании или представлять определённую ценность.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Закрытый ключ</div>
                  <p>Секретная строка символов, которая даёт полный доступ к криптовалюте на кошельке. Если закрытый ключ потерян, доступ к средствам может быть утрачен навсегда; если его узнает посторонний, он сможет вывести активы.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">DAPP</div>
                  <p>Децентрализованное приложение, которое работает не на одном центральном сервере, а через криптосеть и смарт-логику проекта. Пользователь обычно взаимодействует с DAPP через криптокошелёк.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Хардфорк</div>
                  <p>Крупное изменение протокола, которое несовместимо со старыми правилами сети. После хардфорка участникам может потребоваться обновление программного обеспечения, а иногда появляется новая отдельная криптовалюта.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Децентрализация</div>
                  <p>Принцип работы системы без единого центра управления. Решения и хранение данных распределены между множеством участников, что снижает зависимость от одной организации или сервера.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Нода</div>
                  <p>Компьютер или программа, подключённая к криптосети. Ноды хранят копию данных, проверяют операции и помогают поддерживать устойчивость и децентрализованность системы.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Масштабируемость</div>
                  <p>Способность сети обрабатывать больше операций и пользователей без сильного снижения скорости и роста комиссий. Это один из важных вопросов развития современных криптовалютных проектов.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Токенизация</div>
                  <p>Процесс перевода прав на актив или объект в цифровую форму токена. Так можно представить в цифровой среде реальные активы, игровые предметы, документы или другие ценности.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Кошелёк</div>
                  <p>Программное приложение, расширение, онлайн-сервис или аппаратное устройство для хранения доступа к криптовалюте. Важно понимать, что кошелёк хранит не сами монеты, а ключи, с помощью которых пользователь управляет своими средствами.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">DeFi</div>
                  <p>Направление децентрализованных финансов, где финансовые сервисы работают без традиционных банков и посредников. В DeFi пользователи могут обменивать активы, размещать средства, получать доходность и пользоваться сервисами напрямую через криптокошелёк.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Адрес</div>
                  <p>Уникальная строка символов, на которую можно отправлять криптовалюту. Его можно сравнить с номером счёта: адрес разрешено показывать другим людям для получения перевода, но перед отправкой его всегда нужно внимательно проверять.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Частный ключ</div>
                  <p>То же самое, что закрытый ключ: конфиденциальный код, с помощью которого пользователь подтверждает право управлять криптовалютой. Его нельзя отправлять в мессенджерах, хранить в открытом виде или вводить на подозрительных сайтах.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">ICO</div>
                  <p>Первичное размещение монет или токенов, при котором проект привлекает финансирование на развитие. Участники покупают новые токены, рассчитывая, что проект будет развиваться и токен получит применение.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Халвинг</div>
                  <p>Событие, при котором награда за создание новых монет уменьшается в два раза. Халвинг влияет на скорость появления новых монет и часто рассматривается как важный этап в экономической модели криптовалюты.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Консенсус</div>
                  <p>Механизм, с помощью которого участники сети приходят к общему согласию о правильном состоянии данных. Благодаря консенсусу сеть понимает, какие операции считать действительными.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Оракул</div>
                  <p>Сервис, который передаёт внешние данные в криптосистему. Оракулы нужны, когда приложению требуются сведения из реального мира, например цена актива, результат события или курс валюты.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Мемпул</div>
                  <p>Очередь неподтверждённых операций, которые ожидают добавления в сеть. Когда нагрузка высокая, мемпул может расти, из-за чего подтверждение переводов занимает больше времени.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Криптобиржа</div>
                  <p>Онлайн-площадка, где пользователи могут покупать, продавать и обменивать криптовалюты. На биржах доступны торговые пары, графики, рыночные ордера и другие инструменты для работы с цифровыми активами.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">NFT</div>
                  <p>Уникальный цифровой объект, который подтверждает владение конкретным активом в цифровой среде. NFT может быть связан с изображением, коллекционным предметом, игровым объектом, музыкой или другим цифровым контентом.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Открытый ключ</div>
                  <p>Публичная часть криптографической пары ключей. Он может использоваться для проверки цифровых подписей и получения средств, при этом не даёт права распоряжаться криптовалютой без закрытого ключа.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Хеш</div>
                  <p>Короткий цифровой отпечаток данных, полученный с помощью специального алгоритма. Хеш помогает проверять целостность информации: даже небольшое изменение исходных данных приводит к другому результату.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Форк</div>
                  <p>Изменение правил или кода криптопроекта. Иногда форк просто обновляет сеть, а иногда приводит к разделению проекта на две версии, если участники не согласны с новым направлением развития.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Валидатор</div>
                  <p>Участник сети, который проверяет операции и помогает подтверждать новые данные. В некоторых сетях валидатору нужно заблокировать определённое количество монет, чтобы участвовать в поддержании работы системы.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Криптография</div>
                  <p>Область знаний о защите информации с помощью математических методов. В криптовалютах криптография используется для ключей, цифровых подписей, проверки операций и защиты данных пользователей.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Orphan Block</div>
                  <p>Блок, который был создан, но не вошёл в основную цепочку. Такое может случиться, когда почти одновременно появляются разные версии блока, а сеть выбирает другую ветку как основную.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Одноранговая сеть (P2P)</div>
                  <p>Тип сети, где участники взаимодействуют напрямую друг с другом без центрального сервера. Такой подход помогает распределять нагрузку и уменьшает зависимость от одного посредника.</p>
                </div>
                </div>
              </div>
          </section>

          <section class="term-category">
            <h2>Торговля и инвестиции</h2>
            <p class="term-hint">Нажмите на термин, чтобы открыть или скрыть определение.</p>
              <div class="terms-columns">
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Хеджирование</div>
                  <p>Способ управления рисками, при котором инвестор использует дополнительные сделки или инструменты для защиты от возможных потерь. В криптовалюте это особенно важно из-за высокой волатильности рынка.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Рыночный ордер</div>
                  <p>Заявка на немедленную покупку или продажу актива по текущей доступной цене на рынке. Такой ордер исполняется быстро, но итоговая цена может немного отличаться при резком движении рынка.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Стоп-лосс</div>
                  <p>Инструмент ограничения убытков, который автоматически закрывает сделку при достижении заданной цены. Он помогает трейдеру заранее контролировать риск и не держать убыточную позицию слишком долго.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Тейк-профит</div>
                  <p>Заранее заданный уровень цены, при достижении которого сделка автоматически закрывается с прибылью. Этот инструмент помогает фиксировать результат без постоянного наблюдения за графиком.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Ходлинг</div>
                  <p>Стратегия долгосрочного хранения криптовалюты без частых продаж. Смысл ходлинга в том, что пользователь не реагирует на краткосрочные колебания цены и рассчитывает на рост актива в будущем.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Рыночная капитализация</div>
                  <p>Общая стоимость всех монет или токенов проекта в обращении. Обычно рассчитывается как текущая цена актива, умноженная на количество выпущенных или обращающихся монет.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Спот-рынок</div>
                  <p>Рынок, где активы покупаются и продаются с фактическим обменом прямо сейчас. На спот-рынке пользователь приобретает саму криптовалюту, а не контракт на её будущую цену.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Трейдинг-бот</div>
                  <p>Программа, которая автоматически совершает торговые действия по заданным правилам. Бот может реагировать на цену, индикаторы и условия рынка быстрее, чем человек, но всё равно требует настройки и контроля.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Pump and Dump</div>
                  <p>Манипулятивная схема, при которой цену актива искусственно разгоняют за счёт ажиотажа, а затем организаторы быстро продают монеты. После этого цена часто резко падает, и новые покупатели несут убытки.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Стейкинг</div>
                  <p>Блокировка криптовалюты для поддержки работы сети и получения вознаграждения. Стейкинг часто используется в сетях, где подтверждение операций связано с владением и удержанием монет.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Торговая пара</div>
                  <p>Связка двух активов, между которыми происходит обмен на бирже, например BTC/USDT. Первый актив в паре покупают или продают, а второй используется как валюта расчёта.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Технический анализ</div>
                  <p>Метод оценки рынка с помощью графиков, объёмов торгов, свечей и исторических данных. Его используют, чтобы искать возможные точки входа и выхода, но он не гарантирует точный прогноз.</p>
                </div>
                </div>
              </div>
          </section>

          <section class="term-category">
            <h2>Безопасность, хранение и правовые понятия</h2>
            <p class="term-hint">Нажмите на термин, чтобы открыть или скрыть определение.</p>
              <div class="terms-columns">
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Кастодиальный сервис</div>
                  <p>Платформа или компания, которая хранит криптовалюту и управляет приватными ключами от имени пользователя. Это удобно для новичков, но означает зависимость от сервиса и его безопасности.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Цифровая подпись</div>
                  <p>Криптографический способ подтвердить, что действие выполнено владельцем ключа, а данные не были изменены. В криптовалютах цифровая подпись помогает подтверждать операции без раскрытия закрытого ключа.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Двухфакторная аутентификация (2FA)</div>
                  <p>Дополнительный уровень защиты аккаунта, при котором кроме пароля нужен второй фактор подтверждения, например код из приложения. 2FA снижает риск взлома даже при утечке пароля.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Фишинг</div>
                  <p>Мошенничество, при котором злоумышленники создают поддельные сайты, письма или сообщения, чтобы украсть логины, пароли, seed-фразы или ключи. Часто такие страницы внешне похожи на настоящие сервисы.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Шифрование</div>
                  <p>Преобразование информации в защищённый вид, который нельзя прочитать без специального ключа или метода расшифровки. Шифрование помогает защищать данные, кошельки и цифровые операции.</p>
                </div>
                </div>
                <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Холодное хранение</div>
                  <p>Способ хранения криптовалюты без постоянного подключения к интернету. Обычно используется для долгосрочного хранения и считается более безопасным, потому что снижает риск онлайн-взлома.</p>
                </div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)">
                  <div class="term-summary">Юрисдикция</div>
                  <p>Территория или правовая система, в которой действуют определённые законы и правила. Для криптовалют это важно, потому что регулирование, налоги и разрешённые операции могут отличаться в разных странах.</p>
                </div>
                </div>
              </div>
          </section>
        </div>

      `,
      en: `
        <h1 class="page-title">Основные термины</h1>
        <div class="content-box terms-panel">
          <section class="term-category">
            <h2>Basic cryptocurrency market terms</h2>
            <p class="term-hint">Click a term to open or hide its definition.</p>
            <div class="terms-columns">
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Cryptocurrency</div><p>A digital asset that exists in electronic form and is used for transfers, storing value and working with online services. Unlike traditional money, cryptocurrency usually operates through a distributed network rather than a single bank.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Seed phrase</div><p>A sequence of secret words used to restore access to a crypto wallet. It must be stored safely because anyone who gets the seed phrase can access the funds.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Token</div><p>A digital asset created on an existing blockchain and used within a project or platform. Tokens can provide access to services, voting rights or some other utility or value.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Private key</div><p>A secret string of characters that gives full control over cryptocurrency in a wallet. If it is lost, access may be lost forever; if it is stolen, the assets can be withdrawn.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">DApp</div><p>A decentralized application that works through a blockchain network rather than one central server. Users usually interact with a DApp through a crypto wallet.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Hard fork</div><p>A major protocol change that is not compatible with the old network rules. It may require software updates and can sometimes lead to the creation of a separate cryptocurrency.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Decentralization</div><p>A principle where control and data are distributed among many participants instead of one central authority. This reduces dependence on a single company or server.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Node</div><p>A computer or program connected to a crypto network. Nodes store data, verify operations and help keep the system stable and decentralized.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Scalability</div><p>The ability of a network to process more users and transactions without a major drop in speed or a strong increase in fees.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Tokenization</div><p>The process of turning rights to an asset or object into a digital token. This can represent real assets, game items, documents or other forms of value.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Wallet</div><p>An app, extension, online service or hardware device used to manage access to cryptocurrency. A wallet stores the keys, not the coins themselves.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">DeFi</div><p>Decentralized finance, where financial services work without traditional banks or intermediaries. Users can swap assets, lend, borrow and earn yield directly through blockchain applications.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Address</div><p>A unique string of characters used to receive cryptocurrency. It can be compared to an account number and should always be checked carefully before sending funds.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Public key</div><p>The public part of a cryptographic key pair. It can be used to verify digital signatures and receive funds, but it does not allow spending coins without the private key.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">ICO</div><p>An initial coin offering in which a project raises funding by selling new tokens. Participants buy them in the hope that the project will develop and the token will gain use.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Halving</div><p>An event in which the reward for creating new coins is reduced by half. It affects the rate of supply issuance and is often considered an important milestone in a coin's economy.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Consensus</div><p>The mechanism that allows network participants to agree on the correct state of data and which transactions are valid.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Oracle</div><p>A service that delivers external data to a blockchain system. Oracles are used when a smart contract needs prices, exchange rates or other real-world information.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Mempool</div><p>A queue of unconfirmed transactions waiting to be added to the blockchain. When the network is busy, the mempool can grow and transfers may take longer.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Crypto exchange</div><p>An online platform where users can buy, sell and swap cryptocurrencies. Exchanges offer trading pairs, charts, market orders and other tools.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">NFT</div><p>A unique digital object that confirms ownership of a specific asset in digital form. An NFT may be linked to art, a collectible, a game item, music or other content.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Hash</div><p>A short digital fingerprint created from data by a special algorithm. Even a small change in the original data produces a different hash.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Fork</div><p>A change in a crypto project's rules or code. Sometimes it is just an update, and sometimes it splits the project into two versions if participants disagree.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Validator</div><p>A network participant who verifies transactions and helps confirm new data. In some networks validators must lock a certain amount of coins to participate.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Cryptography</div><p>The field of protecting information with mathematical methods. In crypto it is used for keys, digital signatures, transaction verification and data protection.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">P2P network</div><p>A peer-to-peer network where participants interact directly with one another without a central server. This helps distribute the load and reduces dependence on one intermediary.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Orphan block</div><p>A block that was created but did not remain in the main chain. This can happen when competing versions of a block appear almost at the same time.</p></div>
              </div>
            </div>
          </section>
          <section class="term-category">
            <h2>Trading and investment terms</h2>
            <p class="term-hint">Click a term to open or hide its definition.</p>
            <div class="terms-columns">
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Hedging</div><p>A risk-management approach in which an investor uses additional positions or instruments to reduce possible losses. It is especially important in volatile crypto markets.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Market order</div><p>An order to buy or sell an asset immediately at the best available price on the market. It executes quickly, but the final price can vary during strong moves.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Stop-loss</div><p>A tool that closes a trade automatically when a specified price is reached. It helps a trader limit losses and control risk in advance.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Take-profit</div><p>A pre-set price level at which a trade is automatically closed with a profit. It helps lock in results without constant monitoring.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">HODLing</div><p>A long-term strategy of holding cryptocurrency instead of selling often. The idea is to ignore short-term price swings and focus on future growth.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Market capitalization</div><p>The total value of all coins or tokens in circulation. It is usually calculated as the current price multiplied by the circulating supply.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Spot market</div><p>A market where assets are bought and sold for immediate exchange. In spot trading, the user buys the actual cryptocurrency rather than a derivative contract.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Trading bot</div><p>A program that performs trading actions automatically according to set rules. It can react faster than a person, but it still requires configuration and control.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Pump and Dump</div><p>A manipulative scheme in which the price is artificially pushed up by hype and then quickly sold by the organizers. After that, the price often falls sharply and new buyers take losses.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Staking</div><p>Locking cryptocurrency to support a network and receive rewards. Staking is common in networks where transaction validation is linked to holding coins.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Trading pair</div><p>A pair of assets exchanged on an exchange, such as BTC/USDT. The first asset is bought or sold, and the second acts as the quote currency.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Technical analysis</div><p>A method of evaluating the market using charts, volume, candles and historical data. It helps find possible entry and exit points, but it does not guarantee a correct forecast.</p></div>
              </div>
            </div>
          </section>
          <section class="term-category">
            <h2>Security, storage and legal terms</h2>
            <p class="term-hint">Click a term to open or hide its definition.</p>
            <div class="terms-columns">
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Custodial service</div><p>A platform or company that stores cryptocurrency and manages private keys on behalf of the user. It is convenient for beginners, but it means dependence on the service and its security.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Digital signature</div><p>A cryptographic way to confirm that an action was performed by the key owner and that the data was not changed. It allows transactions to be verified without revealing the private key.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Two-factor authentication (2FA)</div><p>An extra layer of account protection in which, besides the password, a second confirmation factor is required, such as a code from an app.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Phishing</div><p>A type of fraud in which attackers create fake websites, emails or messages to steal logins, passwords, seed phrases or keys. Such pages often look very similar to real services.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Encryption</div><p>The conversion of information into a protected form that cannot be read without a special key or decryption method. Encryption helps protect data, wallets and digital operations.</p></div>
              </div>
              <div class="terms-column">
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Cold storage</div><p>A way to store cryptocurrency without a constant internet connection. It is often used for long-term storage and is considered safer because it reduces online attack risk.</p></div>
                <div class="term-box term-toggle" onclick="toggleTerm(this)"><div class="term-summary">Jurisdiction</div><p>The territory or legal system where certain laws and rules apply. For cryptocurrency, this matters because regulation, taxes and allowed operations differ from country to country.</p></div>
              </div>
            </div>
          </section>
        </div>
`
    },

    cryptoHistory: {
      ruTitle: "История криптовалют",
      enTitle: "History of cryptocurrencies",
      ruDescription: "Как появились и развивались криптовалюты",
      enDescription: "How cryptocurrencies appeared and developed",
      ru: `
        <h1 class="page-title">История криптовалют</h1>
        <div class="history-wrap history-story-wrap">

          <div class="history-story-card">
            <div class="history-chapter-label">Глава 1</div>
            <h2>От идеи цифровых денег к появлению Bitcoin</h2>
            <p>
              История криптовалют началась задолго до того, как слово «биткоин» стало известным.
              В конце XX и начале XXI века всё больше людей пользовались интернетом, банковскими картами
              и электронными платёжными системами. Деньги постепенно переходили в цифровую форму, но у таких
              систем оставалась одна важная особенность: почти всегда был посредник. Банк, платёжная компания
              или другой центральный сервис решал, кто может отправлять деньги, какие операции считать правильными
              и кто имеет доступ к счёту.
            </p>
            <p>
              Разработчики, криптографы и сторонники цифровой свободы давно пытались создать систему,
              где пользователь мог бы отправлять деньги напрямую другому человеку через интернет.
              Home проблема заключалась в так называемой двойной трате. Если обычную цифровую информацию
              можно скопировать, то как доказать, что одна и та же цифровая монета не была отправлена дважды?
              В традиционных финансах этот вопрос решает банк, но идея будущих криптовалют заключалась в том,
              чтобы обойтись без такого центра.
            </p>
            <p>
              До Bitcoin существовали разные проекты и идеи электронных денег. Они показали, что цифровые платежи
              могут работать, но часто зависели от компании, сервера или доверенного оператора. Это означало,
              что систему можно было закрыть, ограничить или контролировать. Поэтому настоящим прорывом стала
              не просто идея цифровых денег, а идея децентрализованной сети, где доверие создаётся правилами,
              математикой и участниками сети.
            </p>
            <p>
              В 2008 году человек или группа людей под именем Сатоши Накамото опубликовали документ
              «Bitcoin: A Peer-to-Peer Electronic Cash System». В нём была описана система электронных денег,
              позволяющая отправлять онлайн-платежи напрямую от одного участника к другому без финансового посредника.
              Документ объяснял, как использовать цифровые подписи, цепочку блоков и механизм подтверждения,
              чтобы решить проблему двойной траты без центрального банка.
            </p>
            <p>
              В январе 2009 года сеть Bitcoin была запущена. Первый блок получил название genesis block.
              Он стал символическим началом новой эпохи: теперь цифровые деньги существовали не только как идея
              на бумаге, а как работающая сеть. В этот момент Bitcoin ещё не был массовым активом. Им интересовались
              в основном энтузиасты, программисты и люди, которые понимали значение независимой финансовой системы.
            </p>
            <p>
              На раннем этапе Bitcoin не выглядел как привычный финансовый инструмент. У него не было банковских офисов,
              рекламы, удобных приложений и массового признания. Люди обсуждали его на форумах, запускали программы
              на своих компьютерах, отправляли небольшие суммы и проверяли, сможет ли такая система существовать
              без единого управляющего центра. Именно в этом и была главная идея: сеть работает не потому, что ей
              доверяет банк, а потому что её правила проверяются участниками.
            </p>
          </div>

          <div class="history-story-card">
            <div class="history-chapter-label">Глава 2</div>
            <h2>Первые годы крипторынка: цена, биржи, альтернативные монеты</h2>
            <p>
              После запуска Bitcoin постепенно начал превращаться из технического эксперимента в цифровой актив,
              у которого появилась рыночная цена. Пока монета использовалась только небольшим кругом людей,
              её стоимость была скорее условной. Но когда появились первые обмены, кошельки и биржи, Bitcoin
              стал восприниматься как актив, который можно купить, продать, хранить и передавать.
            </p>
            <p>
              Появление криптобирж стало важным этапом. Если раньше пользователям приходилось договариваться
              напрямую, то теперь появились площадки, где можно было обменивать криптовалюту более удобно.
              Биржи сделали рынок доступнее, но вместе с этим появились новые риски: взломы, потеря доступа
              к аккаунтам, ошибки при переводах и зависимость пользователей от онлайн-сервисов. Так криптовалюты
              с самого начала показали две стороны: свободу и ответственность.
            </p>
            <p>
              По мере роста интереса к Bitcoin разработчики начали задаваться вопросом: можно ли сделать
              другие криптовалюты с иными свойствами? Одни проекты хотели ускорить переводы, другие изменить
              правила выпуска монет, третьи предложить новые алгоритмы или дополнительные функции. Так начали
              появляться альтернативные криптовалюты. Этот этап важен потому, что крипторынок перестал быть
              историей только одной монеты.
            </p>
            <p>
              Альтернативные проекты показали, что криптовалюты могут отличаться назначением. Одни активы
              больше похожи на цифровые деньги, другие используются внутри платформ, третьи создаются для
              стабильных расчётов, четвёртые становятся частью интернет-культуры и сообществ. Позже появились
              токены, стейблкоины, мемкоины, governance-токены, utility-токены и другие категории. Всё это
              превратило криптовалюты в большую экосистему.
            </p>
            <p>
              Вместе с развитием рынка росло и количество пользователей, которые воспринимали криптовалюты
              как способ инвестирования. Цена Bitcoin и других монет могла сильно меняться, что привлекало
              внимание инвесторов и спекулянтов. Однако высокая волатильность делала рынок рискованным.
              Люди могли быстро заработать, но могли так же быстро потерять деньги из-за падения цены,
              мошенничества или собственных ошибок.
            </p>
            <p>
              В этот период стало понятно, что криптовалюты — это не только технология, но и целая культура:
              форумы, сообщества, биржи, кошельки, майнеры, разработчики, инвесторы и обычные пользователи.
              Каждый участник видел в криптовалютах что-то своё: одни — инструмент финансовой независимости,
              другие — новый рынок, третьи — технологическую платформу, четвёртые — эксперимент с будущим интернета.
            </p>
          </div>

          <div class="history-story-card">
            <div class="history-chapter-label">Глава 3</div>
            <h2>Ethereum, DeFi, NFT и превращение криптовалют в цифровую экосистему</h2>
            <p>
              Следующим крупным этапом в истории криптовалют стало появление Ethereum. Если Bitcoin чаще всего
              рассматривается как первая успешная криптовалюта и система цифровых денег, то Ethereum расширил
              идею блокчейна. Он предложил платформу, на которой можно запускать децентрализованные приложения
              и программируемые соглашения. Это изменило восприятие криптовалют: они стали не только способом
              перевода стоимости, но и основой для новых цифровых сервисов.
            </p>
            <p>
              Ethereum был предложен Виталиком Бутериным и другими участниками сообщества, а его сеть была
              запущена в 2015 году. Home идея заключалась в том, что блокчейн может хранить не только записи
              о переводах, но и выполнять код. Благодаря этому появились смарт-контракты — программы, которые
              выполняют условия автоматически. Это открыло путь к токенам, децентрализованным приложениям,
              новым финансовым инструментам и целым онлайн-экосистемам.
            </p>
            <p>
              С развитием Ethereum и других платформ начал активно развиваться DeFi — децентрализованные финансы.
              В таких сервисах пользователи могут обменивать токены, предоставлять ликвидность, брать и выдавать
              займы, получать доходность и пользоваться финансовыми инструментами без традиционного банка.
              Это стало одним из самых заметных направлений криптоиндустрии, потому что показало: финансовые
              сервисы могут быть построены на открытом коде и работать глобально.
            </p>
            <p>
              Другим важным направлением стали NFT. Они привлекли внимание к идее цифровой собственности.
              Если обычный файл можно копировать бесконечно, NFT позволяет подтвердить владение уникальным
              цифровым объектом или записью о нём. NFT начали использовать для изображений, коллекций,
              игровых предметов, билетов, цифрового искусства и других форм контента. Это сделало криптовалюты
              заметными не только среди инвесторов, но и среди художников, геймеров и интернет-сообществ.
            </p>
            <p>
              Постепенно криптовалютная сфера стала включать всё больше направлений: блокчейн-игры, DAO,
              метавселенные, оракулы, стейкинг, решения для масштабирования, мосты между сетями и токенизацию
              активов. Криптовалюты перестали быть одной темой и превратились в набор связанных технологий.
              Одни проекты решают задачу переводов, другие — хранения стоимости, третьи — управления сообществом,
              четвёртые — создания приложений.
            </p>
            <p>
              При этом рост экосистемы усилил и проблемы. Чем больше пользователей и денег приходило в сферу,
              тем больше становилось мошеннических схем, взломов и некачественных проектов. Поэтому современная
              история криптовалют — это не только история инноваций, но и история обучения пользователей:
              как хранить ключи, проверять адреса, не попадаться на фишинг и понимать риски рынка.
            </p>
          </div>

          <div class="history-story-card history-story-final">
            <div class="history-chapter-label">Глава 4</div>
            <h2>Завершительная глава и итог: криптовалюты сегодня</h2>
            <p>
              Сегодня криптовалюты уже нельзя назвать маленьким экспериментом для программистов. Это большая
              международная индустрия, о которой говорят пользователи, компании, инвесторы, государства и
              финансовые организации. Bitcoin всё чаще рассматривают как цифровой актив, Ethereum — как платформу
              для приложений, стейблкоины — как удобный инструмент расчётов, а токены — как способ создавать
              новые модели цифровой экономики.
            </p>
            <p>
              Важным этапом стало постепенное сближение криптовалют с традиционными финансами. Появление
              регулируемых инвестиционных инструментов, связанных с Bitcoin, показало, что крипторынок стал
              заметен крупным игрокам. Одновременно регуляторы разных стран начали активнее обсуждать правила:
              как защищать пользователей, как бороться с мошенничеством, как учитывать налоги и как контролировать
              компании, работающие с цифровыми активами.
            </p>
            <p>
              Но главный смысл истории криптовалют не только в цене монет. Криптовалюты показали, что в интернете
              можно создавать системы, где пользователи владеют цифровыми активами напрямую, отправляют средства
              без посредников, участвуют в управлении проектами и взаимодействуют с приложениями по открытым правилам.
              Это изменило представление о деньгах, собственности, доверии и цифровой идентичности.
            </p>
            <p>
              Для новичка важно понимать: криптовалюты — это не быстрый способ разбогатеть, а сложная и быстро
              развивающаяся сфера. В ней есть технологии, возможности, риски, ошибки и ответственность.
              Чтобы уверенно разбираться в теме, лучше идти постепенно: сначала понять историю и основные термины,
              затем изучить безопасность, потом разобраться в видах криптовалют и только после этого переходить
              к практике.
            </p>
            <p>
              Итог этой истории простой: криптовалюты выросли из идеи независимых цифровых денег в целый мир
              технологий. Они продолжают развиваться, меняться и вызывать споры. Одни считают их будущим финансов,
              другие относятся к ним осторожно. Но уже сейчас ясно, что криптовалюты стали важной частью современной
              цифровой экономики и повлияли на то, как люди думают о деньгах в интернете.
            </p>
          </div>
        </div>

      `,
      en: `
        <h1 class="page-title">History of cryptocurrencies</h1>
        <div class="history-wrap history-story-wrap">

          <div class="history-story-card">
            <div class="history-chapter-label">Chapter 1</div>
            <h2>From the idea of digital money to Bitcoin</h2>
            <p>
              The history of cryptocurrencies began long before Bitcoin became famous. At the end of the twentieth century
              and the beginning of the twenty-first century, people were already using the internet, bank cards and electronic
              payment systems more often. Money was gradually moving into digital form, but almost every digital payment system
              still had one important feature: there was always an intermediary. A bank, payment company or other central service
              decided who could send money, which transactions were valid and who had access to an account.
            </p>
            <p>
              Developers, cryptographers and supporters of digital freedom tried for many years to create a system where a user
              could send money directly to another person through the internet. The main problem was double spending. If digital
              information can be copied, how can a system prove that the same digital coin was not sent twice? In traditional
              finance this is solved by a bank. The future idea of cryptocurrency was to solve it without a single central authority.
            </p>
            <p>
              Before Bitcoin, there were different projects and ideas connected with electronic money. They showed that digital
              payments could work, but many systems still depended on a company, server or trusted operator. This meant that the
              system could be closed, restricted or controlled. The real breakthrough was not simply digital money, but a
              decentralized network where trust is created by rules, mathematics and participants.
            </p>
            <p>
              In 2008, a person or group using the name Satoshi Nakamoto published the document “Bitcoin: A Peer-to-Peer
              Electronic Cash System.” It described electronic money that allowed online payments to be sent directly from one
              participant to another without a financial intermediary. The document explained how digital signatures, a chain of
              blocks and a confirmation mechanism could solve the double-spending problem without a central bank.
            </p>
            <p>
              In January 2009, the Bitcoin network was launched. The first block was called the genesis block. It became a symbolic
              beginning of a new era: digital money now existed not only as an idea on paper, but as a working network. At first,
              Bitcoin was mostly interesting to enthusiasts, programmers and people who understood the importance of an independent
              financial system.
            </p>
            <p>
              In the early years, Bitcoin was used mainly as an experiment. People tested transfers, discussed the code, mined coins
              on ordinary computers and tried to understand whether a decentralized money system could survive. Gradually Bitcoin
              began to gain value, exchanges appeared, and the first real transactions showed that this was not only a technical
              experiment. It was the beginning of a new approach to money, ownership and trust on the internet.
            </p>
          </div>

          <div class="history-story-card">
            <div class="history-chapter-label">Chapter 2</div>
            <h2>The first market, exchanges and alternative coins</h2>
            <p>
              As Bitcoin became more noticeable, a real market started forming around it. At first the value of BTC was mostly
              symbolic, but over time people began to exchange it for goods, services and traditional money. This was an important
              moment because Bitcoin stopped being only a technological idea and began to act like a real digital asset with a
              market price.
            </p>
            <p>
              Cryptocurrency exchanges played a major role in this period. They made it easier to buy and sell Bitcoin, compare
              prices, store balances and trade with other users. At the same time, exchanges created new risks. Users had to learn
              about account security, passwords, two-factor authentication, withdrawal addresses and the danger of storing all
              funds on one platform.
            </p>
            <p>
              The early crypto market was exciting, but also unstable. Prices could rise quickly and fall just as fast. New projects
              appeared constantly, and not all of them were reliable. Some were serious technological experiments, while others were
              weak copies or speculative ideas. This period taught users to look not only at price, but also at security, project
              purpose, developer activity and real use cases.
            </p>
            <p>
              The appearance of a market encouraged developers to create alternative cryptocurrencies. Some projects tried to make
              transfers faster, others experimented with supply rules, privacy, mining algorithms or new technical functions. These
              alternative coins showed that blockchain technology could be adapted for different goals, not only for one digital
              currency.
            </p>
            <p>
              Over time, the idea of cryptocurrency became wider. It was no longer only about sending digital money. People started
              talking about decentralized services, digital property, tokens, stablecoins and new financial tools. The market became
              more complex, and education became more important. A beginner now had to understand not just what Bitcoin is, but also
              wallets, private keys, exchanges, tokens, volatility and blockchain security.
            </p>
            <p>
              The growth of the market also attracted the attention of governments, regulators, companies and investors. Some saw
              cryptocurrency as an innovation, while others saw it as a risk. This attention made the industry more visible and
              pushed crypto into public discussion. From a small community of enthusiasts, it gradually became a global topic
              connected with finance, technology and law.
            </p>
          </div>

          <div class="history-story-card">
            <div class="history-chapter-label">Chapter 3</div>
            <h2>Ethereum, DeFi, NFT and the wider ecosystem</h2>
            <p>
              A major new stage began with Ethereum. While Bitcoin was mainly created as decentralized digital money, Ethereum
              expanded the idea of blockchain and made it possible to build programs directly on the network. These programs are
              called smart contracts. They can automatically perform actions when certain conditions are met, without relying on
              a traditional intermediary.
            </p>
            <p>
              Ethereum was launched in 2015 and became a platform for tokens, decentralized applications and entire digital
              ecosystems. Developers could create their own assets and services on top of the Ethereum network. This changed the
              way people looked at blockchain: it was no longer only a system for recording payments, but also a foundation for
              applications that could work openly and transparently.
            </p>
            <p>
              One of the most important areas that grew from this idea was DeFi, or decentralized finance. DeFi services allowed
              users to exchange tokens, provide liquidity, borrow, lend and use financial tools without a traditional bank. These
              services were built through smart contracts, so the rules were written in code and could be checked by users.
            </p>
            <p>
              Another important direction was NFT. NFTs made it possible to confirm ownership of unique digital objects: images,
              collections, game items, tickets, music and other forms of digital content. Even though the NFT market went through
              hype and corrections, the idea itself showed that blockchain could be used for digital ownership, not only for money.
            </p>
            <p>
              Blockchain games, DAOs, metaverse projects and Web3 applications also became part of the wider ecosystem. In these
              areas, users could own tokens, vote on decisions, collect digital items and interact with services through wallets.
              Crypto began to influence not only finance, but also culture, gaming, online communities and digital identity.
            </p>
            <p>
              At the same time, the ecosystem became harder to understand. Users had to learn about networks, fees, bridges, smart
              contracts, wallet permissions, phishing, fake tokens and project risks. The more opportunities appeared, the more
              important security became. That is why an educational crypto website should explain not only advantages, but also
              common mistakes, risks and safe behavior.
            </p>
          </div>

          <div class="history-story-card history-story-final">
            <div class="history-chapter-label">Chapter 4</div>
            <h2>Final chapter and conclusion</h2>
            <p>
              Today cryptocurrencies are a global industry that combines technology, finance, online communities and digital
              ownership. Bitcoin is often viewed as a digital asset and a symbol of decentralized money. Ethereum is seen as a
              platform for applications and smart contracts. Stablecoins are used for payments, transfers and trading. Tokens are
              used inside projects, games, DeFi services, communities and digital ecosystems.
            </p>
            <p>
              The most important thing to understand is that cryptocurrency is not only about price. Price attracts attention, but
              the real meaning of crypto is wider: it is about how people can own digital assets, transfer value, verify data and
              interact with services without always relying on one central organization. This is why blockchain, wallets, private
              keys and security are so important.
            </p>
            <p>
              Crypto also remains a risky and fast-changing area. Prices can move sharply, projects can fail, scammers can create
              fake websites, and users can lose access to wallets if they do not protect their seed phrases. For this reason,
              beginners should not treat cryptocurrency as an easy way to get rich. It is better to study the topic step by step
              and understand both opportunities and dangers.
            </p>
            <p>
              The conclusion is simple: cryptocurrencies grew from the idea of independent digital money into a whole world of
              technologies. They continue to develop, change and cause debate. Some people see them as the future of finance,
              while others remain cautious. But it is already clear that cryptocurrencies have become an important part of the
              modern digital economy and have changed the way people think about money, ownership and trust on the internet.
            </p>
          </div>
        </div>
`
    },

    cryptoTypes: {
      ruTitle: "Виды криптовалют",
      enTitle: "Types of cryptocurrencies",
      ruDescription: "Монеты, токены, стейблкоины, мемкоины и другие виды цифровых активов",
      enDescription: "Coins, tokens, stablecoins, meme coins and other digital assets",
      ru: `
        <h1 class="page-title">Виды криптовалют</h1>
        <div class="types-wrap">
          <div class="types-grid">
            <div class="crypto-type-card" onclick="openPage('typeCoins')">
              <h3>Монеты</h3>
              <p>Имеют собственный блокчейн и используются как самостоятельные цифровые деньги.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeTokens')">
              <h3>Токены</h3>
              <p>Создаются на готовых блокчейнах и применяются внутри разных проектов.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeStablecoins')">
              <h3>Стейблкоины</h3>
              <p>Стараются сохранять стабильную цену и часто привязаны к доллару.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeMemeCoins')">
              <h3>Мемкоины</h3>
              <p>Популярность таких монет строится вокруг мемов и активности сообщества.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeUtilityTokens')">
              <h3>Utility-токены</h3>
              <p>Дают доступ к функциям платформы, сервисам и возможностям проекта.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeGovernanceTokens')">
              <h3>Governance-токены</h3>
              <p>Нужны для голосования и участия в управлении проектом.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typePrivacyCoins')">
              <h3>Privacy-монеты</h3>
              <p>Ориентированы на повышенную конфиденциальность переводов и данных пользователей.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeExchangeTokens')">
              <h3>Биржевые токены</h3>
              <p>Используются внутри криптобирж для скидок, комиссий и дополнительных функций.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeGameFiTokens')">
              <h3>GameFi-токены</h3>
              <p>Применяются в блокчейн-играх, игровых экономиках и цифровых предметах.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeWrappedTokens')">
              <h3>Wrapped-токены</h3>
              <p>Позволяют использовать актив одной сети внутри другой блокчейн-экосистемы.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeOracleTokens')">
              <h3>Oracle-токены</h3>
              <p>Связаны с сервисами, которые передают внешние данные в децентрализованные приложения.</p>
            </div>

            <div class="crypto-type-card" onclick="openPage('typeMetaverseTokens')">
              <h3>Метавселенские токены</h3>
              <p>Используются в виртуальных мирах, цифровой недвижимости и онлайн-пространствах.</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Types of cryptocurrencies</h1>
        <div class="types-wrap">
          <div class="types-grid">
            <div class="crypto-type-card" onclick="openPage('typeCoins')"><h3>Coins</h3><p>Have their own blockchain and work as independent digital money.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeTokens')"><h3>Tokens</h3><p>Are created on existing blockchains and used inside different projects.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeStablecoins')"><h3>Stablecoins</h3><p>Try to keep a stable price and are often linked to the US dollar.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeMemeCoins')"><h3>Meme coins</h3><p>Their popularity is built around internet memes and an active community.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeUtilityTokens')"><h3>Utility tokens</h3><p>Provide access to platform functions, services and project features.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeGovernanceTokens')"><h3>Governance tokens</h3><p>Used for voting and participation in project management.</p></div>
            <div class="crypto-type-card" onclick="openPage('typePrivacyCoins')"><h3>Privacy coins</h3><p>Focus on stronger transaction confidentiality and user privacy.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeExchangeTokens')"><h3>Exchange tokens</h3><p>Digital assets issued by exchanges for discounts, bonuses and ecosystem functions.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeGameFiTokens')"><h3>GameFi tokens</h3><p>Used in blockchain games, play-to-earn mechanics and gaming economies.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeWrappedTokens')"><h3>Wrapped tokens</h3><p>Represent one asset on another blockchain in a convenient tokenized form.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeOracleTokens')"><h3>Oracle tokens</h3><p>Related to services that deliver external data to blockchains.</p></div>
            <div class="crypto-type-card" onclick="openPage('typeMetaverseTokens')"><h3>Metaverse tokens</h3><p>Used in virtual worlds, digital ownership and metaverse projects.</p></div>
          </div>
        </div>
`
    },

    cryptoUse: {
      ruTitle: "Где используются криптовалюты",
      enTitle: "Where cryptocurrencies are used",
      ruDescription: "Основные сферы применения криптовалют",
      enDescription: "Main areas where cryptocurrencies are used",
      ru: `
        <h1 class="page-title">Где используются криптовалюты</h1>
        <div class="use-wrap clickable-info-wrap">
          <p class="clickable-info-hint">Нажмите на карточку, чтобы открыть или скрыть подробную информацию.</p>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Платежи, переводы и международные расчёты</h3>
              <span>Подробнее</span>
            </div>
            <div class="click-info-content">
              <p>
                Одно из самых понятных применений криптовалют — перевод средств между людьми и компаниями через интернет.
                Пользователь может отправить цифровой актив на адрес другого кошелька без привычного банковского перевода.
                Особенно часто в таких сценариях обсуждаются стейблкоины, потому что их цена обычно привязана к обычной валюте,
                например к доллару США. Это делает их удобнее для расчётов, чем волатильные монеты, цена которых может резко меняться.
              </p>
              <p>
                В международных переводах криптовалюты и стейблкоины интересны тем, что могут работать быстрее традиционных цепочек
                банков-корреспондентов. Такие переводы могут использоваться для расчётов между странами, выплат удалённым сотрудникам,
                переводов семье, оплаты услуг или движения средств между разными платформами. Но пользователю всё равно важно проверять
                адрес, сеть перевода, комиссии и правила своей страны.
              </p>
            </div>
          </div>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Децентрализованные финансы и цифровые сервисы</h3>
              <span>Подробнее</span>
            </div>
            <div class="click-info-content">
              <p>
                Криптовалюты активно применяются в DeFi — децентрализованных финансовых сервисах. В таких сервисах пользователи могут
                обменивать токены, предоставлять ликвидность, брать и выдавать займы, использовать стейкинг и другие инструменты без
                обычного банка. В основе DeFi часто лежат смарт-контракты: они автоматически выполняют условия операции, если правила
                заранее прописаны в коде.
              </p>
              <p>
                Это направление интересно тем, что создаёт альтернативу части традиционных финансовых услуг. Например, человек может
                взаимодействовать с протоколом напрямую через кошелёк, а не через банковское отделение. Но вместе с возможностями
                появляются и риски: ошибки в смарт-контрактах, фишинговые сайты, ненадёжные проекты, резкие изменения цены активов
                и потеря доступа к кошельку. Поэтому DeFi требует особенно внимательного отношения к безопасности.
              </p>
            </div>
          </div>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Цифровая собственность, игры, NFT и сообщества</h3>
              <span>Подробнее</span>
            </div>
            <div class="click-info-content">
              <p>
                Криптовалюты используются не только для переводов и инвестиций. Они стали частью цифровой собственности и интернет-сообществ.
                NFT применяются для подтверждения владения уникальными цифровыми объектами: изображениями, коллекциями, игровыми предметами,
                билетами или другими активами. В блокчейн-играх токены могут быть связаны с персонажами, предметами, наградами и внутренней
                экономикой проекта.
              </p>
              <p>
                Также токены могут использоваться в сообществах и проектах для голосований, доступа к функциям платформы, участия в событиях
                или получения бонусов. Такой подход показывает, что криптовалюты — это не только деньги в интернете, но и инструмент для
                создания новых форм владения, управления и взаимодействия между пользователями. Именно поэтому криптовалюты постепенно
                переходят из узкой финансовой темы в более широкую цифровую культуру.
              </p>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Where cryptocurrencies are used</h1>
        <div class="use-wrap clickable-info-wrap">
          <p class="clickable-info-hint">Click a card to open or hide detailed information.</p>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Payments, transfers and international settlement</h3>
              <span>Details</span>
            </div>
            <div class="click-info-content">
              <p>
                One of the clearest use cases for cryptocurrencies is sending value online between people and companies.
                Stablecoins are often discussed in this area because their value is usually linked to a fiat currency,
                which makes them more practical for payments than highly volatile coins.
              </p>
              <p>
                Crypto and stablecoins can be useful for cross-border payments, remote work payouts, remittances and online services.
                Users still need to check wallet addresses, networks, fees and local rules.
              </p>
            </div>
          </div>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>DeFi and digital financial services</h3>
              <span>Details</span>
            </div>
            <div class="click-info-content">
              <p>
                Cryptocurrencies are widely used in decentralized finance. DeFi services allow users to exchange tokens,
                provide liquidity, borrow, lend and use staking without a traditional bank.
              </p>
              <p>
                These tools can be useful, but they also involve risks such as phishing, smart contract bugs,
                unreliable projects and loss of wallet access.
              </p>
            </div>
          </div>

          <div class="click-info-card use-click-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Digital ownership, games, NFT and communities</h3>
              <span>Details</span>
            </div>
            <div class="click-info-content">
              <p>
                Crypto is also used for digital ownership, NFT collections, blockchain games, virtual items and online communities.
                Tokens can represent access, voting rights, rewards or assets inside a platform.
              </p>
              <p>
                This shows that cryptocurrencies are not only about money, but also about new ways of owning and interacting
                with digital objects and communities.
              </p>
            </div>
          </div>
        </div>
      `
    },

        cryptoProsCons: {
      ruTitle: "Преимущества и недостатки криптовалют",
      enTitle: "Advantages and disadvantages of cryptocurrencies",
      ruDescription: "Плюсы и минусы криптовалют",
      enDescription: "Pros and cons of cryptocurrencies",
      ru: `
        <h1 class="page-title">Преимущества и недостатки криптовалют</h1>
        <div class="content-box clickable-info-wrap">
          <p class="clickable-info-hint">Нажмите на карточку, чтобы открыть или скрыть подробности.</p>

          <div class="click-info-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Преимущества</h3>
              <span>Подробнее</span>
            </div>
            <div class="click-info-content">
              <p>
                Криптовалюты открывают новые возможности для работы с цифровыми активами. Они позволяют быстро переводить средства,
                пользоваться современными онлайн-сервисами и взаимодействовать с финансовыми инструментами через интернет.
              </p>
              <ul>
                <li>Быстрые переводы между пользователями.</li>
                <li>Доступность из разных стран и через интернет.</li>
                <li>Прозрачность многих операций в блокчейне.</li>
                <li>Возможность использовать новые цифровые сервисы.</li>
              </ul>
            </div>
          </div>

          <div class="click-info-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Недостатки</h3>
              <span>Подробнее</span>
            </div>
            <div class="click-info-content">
              <p>
                Несмотря на преимущества, криптовалюты связаны с определёнными рисками. Новичку важно понимать,
                что рынок может быть нестабильным, а ошибки при работе с кошельками и переводами часто нельзя отменить.
              </p>
              <ul>
                <li>Цена криптовалют может быстро и резко меняться.</li>
                <li>Есть риск мошенничества и фальшивых проектов.</li>
                <li>Ошибочную транзакцию обычно нельзя отменить.</li>
                <li>Потеря доступа к кошельку может привести к потере средств.</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Advantages and disadvantages of cryptocurrencies</h1>
        <div class="content-box clickable-info-wrap">
          <p class="clickable-info-hint">Click a card to open or hide details.</p>

          <div class="click-info-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Advantages</h3>
              <span>Details</span>
            </div>
            <div class="click-info-content">
              <p>
                Cryptocurrencies create new ways to work with digital assets, send value online and use modern financial services.
              </p>
              <ul>
                <li>Fast transfers between users.</li>
                <li>Access from different countries through the internet.</li>
                <li>Transparency of many blockchain operations.</li>
                <li>Ability to use new digital services.</li>
              </ul>
            </div>
          </div>

          <div class="click-info-card" onclick="toggleInfoCard(this)">
            <div class="click-info-title">
              <h3>Disadvantages</h3>
              <span>Details</span>
            </div>
            <div class="click-info-content">
              <p>
                Cryptocurrencies also involve risks. Beginners should remember that prices can be unstable and mistakes are often irreversible.
              </p>
              <ul>
                <li>Prices can change quickly and sharply.</li>
                <li>There is a risk of scams and fake projects.</li>
                <li>Wrong transactions usually cannot be cancelled.</li>
                <li>Losing wallet access can lead to losing funds.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },

        beginnerStart: {
      ruTitle: "С чего начать",
      enTitle: "Where to start",
      ruDescription: "Материалы для новичков",
      enDescription: "Materials for beginners",
      ru: `<h1 class="page-title">С чего начать</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>Разберитесь с базовыми понятиями</h3>
            <p>
              Для начала изучите, что такое криптовалюта, токен, кошелёк, биржа, адрес и seed-фраза.
              Эти понятия встречаются почти в каждом разделе крипторынка. Если их не понимать, можно легко ошибиться
              при переводе средств, выборе платформы или хранении доступа к кошельку.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>Поймите разницу между хранением и торговлей</h3>
            <p>
              Хранение криптовалюты означает, что пользователь покупает актив и держит его длительное время.
              Торговля — это более активная работа с покупкой и продажей, где нужно следить за ценой, рисками
              и комиссиями. Новичку лучше сначала понять хранение и безопасность, а уже потом переходить к торговле.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>Начинайте с небольшой суммы</h3>
            <p>
              Первая сумма должна быть такой, которую не страшно потерять во время обучения. Это поможет спокойно
              разобраться с интерфейсом биржи, переводами, комиссиями и кошельком без лишнего стресса.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>Изучите правила безопасности</h3>
            <p>
              Никому не отправляйте seed-фразу, закрытый ключ, коды подтверждения и пароли. Проверяйте адрес сайта,
              включайте двухфакторную аутентификацию и не переходите по подозрительным ссылкам из сообщений.
              В криптовалюте пользователь сам отвечает за сохранность своих средств.
            </p></article>
        </div></div>`,
      en: `<h1 class="page-title">Where to start</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>Learn the basic concepts</h3>
            <p>
              First learn what cryptocurrency, a token, a wallet, an exchange, an address and a seed phrase are. These concepts appear in almost every part of the crypto market. If you do not understand them, it is easy to make mistakes when transferring funds, choosing a platform or storing access to a wallet.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>Understand the difference between holding and trading</h3>
            <p>
              Holding cryptocurrency means buying an asset and keeping it for a long time. Trading is more active work with buying and selling, where you need to watch the price, risks and fees. A beginner should first understand storage and safety, and only after that move on to trading.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>Start with a small amount</h3>
            <p>
              The first amount should be something you are not afraid to lose while learning. This helps you calmly understand the exchange interface, transfers, fees and wallets without unnecessary stress.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>Study the safety rules</h3>
            <p>
              Never send your seed phrase, private key, confirmation codes or passwords to anyone. Check the website address, enable two-factor authentication and do not open suspicious links from messages. In cryptocurrency, the user is responsible for keeping their funds safe.
            </p></article>
        </div></div>`
    },

    firstBuy: {
      ruTitle: "Первая покупка криптовалюты",
      enTitle: "First cryptocurrency purchase",
      ruDescription: "Что нужно знать перед первой покупкой",
      enDescription: "What to know before the first purchase",
      ru: `<h1 class="page-title">Первая покупка криптовалюты</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>1. Выберите понятную платформу</h3>
            <p>
              Для первого опыта лучше выбирать известную криптобиржу или сервис с понятным интерфейсом.
              Перед регистрацией проверьте адрес сайта, условия работы, способы пополнения и наличие защиты аккаунта.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>2. Определитесь с монетой</h3>
            <p>
              Не покупайте актив только потому, что о нём говорят в интернете. Изучите, для чего нужна монета,
              насколько она известна, есть ли у проекта понятная цель и какие риски связаны с её ценой.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>3. Проверьте комиссии</h3>
            <p>
              При покупке, продаже и переводе криптовалюты могут быть комиссии. Иногда они небольшие,
              а иногда заметно влияют на итоговую сумму, особенно если покупка маленькая.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>4. Сохраните доступ к аккаунту</h3>
            <p>
              После регистрации включите двухфакторную аутентификацию, используйте сложный пароль и не храните его
              в открытом виде. Если используете отдельный кошелёк, обязательно сохраните seed-фразу офлайн.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">05</span><h3>5. Сделайте пробную операцию</h3>
            <p>
              Перед крупным переводом лучше отправить небольшую сумму и убедиться, что адрес, сеть и платформа выбраны правильно.
              Это помогает избежать ошибок, которые невозможно отменить.
            </p></article>
        
        <article class="beginner-card"><span class="beginner-card-index">06</span><h3>6. Проверьте результат после покупки</h3>
            <p>
              После покупки убедитесь, что монета появилась на балансе, посмотрите историю операции и сохраните важные данные.
              Если планируете выводить криптовалюту на кошелёк, сначала ещё раз проверьте сеть, адрес и комиссию.
            </p></article></div></div>`,
      en: `<h1 class="page-title">First cryptocurrency purchase</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>1. Choose a clear platform</h3>
            <p>
              For the first experience, it is better to choose a well-known crypto exchange or service with a clear interface. Before registration, check the website address, working conditions, deposit methods and account protection options.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>2. Decide on a coin</h3>
            <p>
              Do not buy an asset only because people talk about it on the internet. Study what the coin is needed for, how well known it is, whether the project has a clear goal and what risks are connected with its price.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>3. Check the fees</h3>
            <p>
              There may be fees when buying, selling and transferring cryptocurrency. Sometimes they are small, and sometimes they noticeably affect the final amount, especially if the purchase is small.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>4. Secure access to your account</h3>
            <p>
              After registration, enable two-factor authentication, use a strong password and do not store it openly. If you use a separate wallet, be sure to save the seed phrase offline.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">05</span><h3>5. Make a test transaction</h3>
            <p>
              Before a large transfer, it is better to send a small amount and make sure that the address, network and platform are selected correctly. This helps avoid mistakes that cannot be reversed.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">06</span><h3>6. Check the result after purchase</h3>
            <p>
              After buying, make sure the coin appears on your balance, check the operation history and save important details. If you plan to withdraw cryptocurrency to a wallet, check the network, address and fee one more time first.
            </p></article>
        </div></div>`
    },

    
    typicalMistakes: {
      ruTitle: "Типичные ошибки и безопасность пользователя",
      enTitle: "Common mistakes and user safety",
      ruDescription: "Подробный разбор ошибок новичков при работе с криптовалютой",
      enDescription: "Detailed overview of common beginner mistakes in crypto",
      ru: `<h1 class="page-title">Типичные ошибки и безопасность пользователя</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>Передача seed-фразы или закрытого ключа</h3>
            <p>
              Seed-фраза и закрытый ключ дают полный доступ к кошельку. Их нельзя отправлять друзьям,
              «поддержке», администраторам чатов, менеджерам бирж или вводить на непроверенных сайтах.
              Если эти данные узнает посторонний человек, он сможет забрать средства.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>Переход по фишинговым ссылкам</h3>
            <p>
              Мошенники часто создают сайты, похожие на настоящие биржи, кошельки или обменники.
              Отличаться может всего одна буква в адресе. Перед входом нужно проверять ссылку в браузере,
              не переходить по подозрительным сообщениям и лучше сохранять важные сайты в закладках.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>Отправка криптовалюты в неправильную сеть</h3>
            <p>
              Одна и та же монета может работать в разных сетях. Если при переводе выбрать неправильную сеть,
              деньги могут не дойти или их будет очень сложно вернуть. Перед отправкой всегда проверяйте сеть,
              адрес получателя и название актива.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>Отсутствие пробного перевода</h3>
            <p>
              Новички иногда сразу отправляют крупную сумму. Безопаснее сначала сделать маленький тестовый перевод
              и убедиться, что адрес, сеть и платформа выбраны правильно. Только после успешной проверки можно
              переводить основную сумму.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">05</span><h3>Покупка монет из-за хайпа</h3>
            <p>
              Быстрый рост цены, реклама у блогеров и громкие обещания могут создать ощущение, что нужно срочно покупать.
              Но после резкого роста часто бывает падение. Перед покупкой нужно изучить проект, его назначение,
              риски и не принимать решения только из-за эмоций.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">06</span><h3>Вера в гарантированную прибыль</h3>
            <p>
              На крипторынке никто не может честно гарантировать доход. Обещания «удвоить депозит»,
              «заработать без риска» или «дать секретную схему» чаще всего являются признаком мошенничества.
              Чем выше обещанная прибыль, тем внимательнее нужно проверять информацию.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">07</span><h3>Игнорирование комиссий</h3>
            <p>
              Комиссии могут быть при покупке, продаже, обмене и выводе средств. Иногда комиссия кажется небольшой,
              но при маленькой сумме она может заметно уменьшить итоговый результат. Перед любой операцией нужно смотреть,
              сколько реально будет списано и сколько придёт на счёт.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">08</span><h3>Хранение всех средств на бирже</h3>
            <p>
              Биржа удобна для покупки и обмена, но хранить там все средства постоянно не всегда безопасно.
              Аккаунт могут взломать, доступ можно потерять, а сама платформа может ограничить операции.
              Для долгого хранения лучше изучить отдельные кошельки и способы защиты доступа.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">09</span><h3>Слабые пароли и отсутствие 2FA</h3>
            <p>
              Простой пароль легко подобрать или украсть. Для биржи и почты нужен сложный уникальный пароль,
              а также двухфакторная аутентификация. Особенно важно защищать почту, потому что через неё часто
              восстанавливают доступ к аккаунтам.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">10</span><h3>Хранение паролей и seed-фразы в телефоне</h3>
            <p>
              Скриншоты, заметки, фотографии и файлы в облаке могут быть украдены при взломе устройства или аккаунта.
              Seed-фразу лучше хранить офлайн: записать на бумаге и убрать в безопасное место, где к ней нет доступа
              у посторонних.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">11</span><h3>Непонимание волатильности</h3>
            <p>
              Цена криптовалюты может резко меняться за короткое время. Новички часто пугаются падений или покупают
              на самом пике роста. Нужно заранее понимать, что рынок нестабилен, и не вкладывать деньги,
              потеря которых станет серьёзной проблемой.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">12</span><h3>Отсутствие личного плана</h3>
            <p>
              Перед покупкой полезно определить цель: зачем покупается актив, на какую сумму, где он будет храниться,
              при каких условиях его продавать и какой риск допустим. Без плана человек чаще действует эмоционально
              и совершает необдуманные сделки.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">13</span><h3>Доверие случайным советам из чатов</h3>
            <p>
              В Telegram, Discord и социальных сетях часто дают советы купить «перспективную монету».
              Но такие советы могут быть выгодны не новичку, а тем, кто уже купил актив раньше и хочет продать его дороже.
              Любую информацию нужно проверять самостоятельно.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">14</span><h3>Использование непроверенных обменников</h3>
            <p>
              Не каждый обменник безопасен. Перед использованием нужно проверять репутацию сервиса, условия обмена,
              комиссии и адрес сайта. Лучше не отправлять крупную сумму через площадку, о которой почти нет информации.
            </p></article>
        </div></div>`,
      en: `<h1 class="page-title">Common mistakes and user safety</h1>
        <div class="beginner-shell">
        <div class="beginner-grid">
        <article class="beginner-card"><span class="beginner-card-index">01</span><h3>Sharing a seed phrase or private key</h3>
            <p>
              A seed phrase and a private key give full access to a wallet. They must not be sent to friends, “support”, chat administrators, exchange managers or entered on unverified websites. If another person gets this data, they can take the funds.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">02</span><h3>Opening phishing links</h3>
            <p>
              Scammers often create websites that look like real exchanges, wallets or swap services. The address may differ by only one letter. Before logging in, check the link in the browser, do not follow suspicious messages and save important websites in bookmarks.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">03</span><h3>Sending cryptocurrency through the wrong network</h3>
            <p>
              The same coin can work on different networks. If the wrong network is selected during a transfer, the money may not arrive or may be very difficult to recover. Always check the network, recipient address and asset name before sending.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">04</span><h3>No test transfer</h3>
            <p>
              Beginners sometimes send a large amount immediately. It is safer to make a small test transfer first and make sure that the address, network and platform are selected correctly. Only after a successful check should you send the main amount.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">05</span><h3>Buying coins because of hype</h3>
            <p>
              Fast price growth, advertising from bloggers and loud promises can create the feeling that you need to buy urgently. But after a sharp rise, a fall often happens. Before buying, study the project, its purpose and risks, and do not make decisions only because of emotions.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">06</span><h3>Believing in guaranteed profit</h3>
            <p>
              No one can honestly guarantee income in the crypto market. Promises to “double a deposit”, “earn without risk” or “give a secret scheme” are usually signs of fraud. The higher the promised profit, the more carefully the information should be checked.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">07</span><h3>Ignoring fees</h3>
            <p>
              Fees may appear when buying, selling, swapping and withdrawing funds. Sometimes a fee looks small, but with a small amount it can noticeably reduce the final result. Before any operation, check how much will actually be charged and how much will arrive.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">08</span><h3>Keeping all funds on an exchange</h3>
            <p>
              An exchange is convenient for buying and swapping, but keeping all funds there permanently is not always safe. An account can be hacked, access can be lost, or the platform can restrict operations. For long-term storage, it is better to study separate wallets and access protection methods.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">09</span><h3>Weak passwords and no 2FA</h3>
            <p>
              A simple password can be guessed or stolen. For an exchange and email account, use a strong unique password and two-factor authentication. Email security is especially important because it is often used to restore access to accounts.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">10</span><h3>Storing passwords and a seed phrase on a phone</h3>
            <p>
              Screenshots, notes, photos and cloud files can be stolen if a device or account is hacked. It is better to store a seed phrase offline: write it on paper and keep it in a safe place where strangers cannot access it.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">11</span><h3>Not understanding volatility</h3>
            <p>
              The price of cryptocurrency can change sharply in a short time. Beginners often panic during drops or buy at the very top of a rally. It is important to understand in advance that the market is unstable and not invest money whose loss would become a serious problem.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">12</span><h3>Having no personal plan</h3>
            <p>
              Before buying, it is useful to define the goal: why the asset is being bought, for what amount, where it will be stored, under what conditions it will be sold and what risk is acceptable. Without a plan, a person is more likely to act emotionally and make careless trades.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">13</span><h3>Trusting random advice from chats</h3>
            <p>
              In Telegram, Discord and social networks, people often advise buying a “promising coin”. But such advice may benefit not the beginner, but those who bought the asset earlier and want to sell it at a higher price. Any information should be checked independently.
            </p></article>
        <article class="beginner-card"><span class="beginner-card-index">14</span><h3>Using unverified exchangers</h3>
            <p>
              Not every exchanger is safe. Before using one, check the service reputation, exchange conditions, fees and website address. It is better not to send a large amount through a platform that has almost no information available.
            </p></article>
        </div></div>`
    },

    bitcoin: {
      ruTitle: "Bitcoin",
      enTitle: "Bitcoin",
      ruDescription: "Первая и самая известная криптовалюта",
      enDescription: "The first and most famous cryptocurrency",
      ru: `<h1 class="page-title">Bitcoin</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">BTC • цифровое золото</span>
        <h2>Bitcoin</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Bitcoin — первая криптовалюта, созданная как цифровые деньги для переводов без банка и центрального посредника. Его идея заключается в том, что пользователь может владеть своими средствами напрямую и отправлять их по всему миру через блокчейн.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item">
      <h3>Что делает её особенной</h3>
      <p>Home особенность Bitcoin — ограниченная эмиссия: всего может существовать 21 миллион BTC. Из-за этого его часто сравнивают с золотом, только в цифровой форме. Сеть Bitcoin децентрализована, поэтому она не принадлежит одной компании или государству.</p>
    </div>

    <div class="coin-info-item">
      <h3>Для чего используется</h3>
      <p>Bitcoin используют для долгосрочного хранения стоимости, переводов между пользователями, инвестиций и знакомства с криптовалютным рынком. Для многих людей это первая монета, с которой начинается изучение цифровых активов.</p>
    </div>

    <div class="coin-info-item">
      <h3>Где используется</h3>
      <p>BTC встречается на криптобиржах, в криптокошельках, инвестиционных сервисах и некоторых платёжных системах. Также Bitcoin часто используют как базовый актив для сравнения с другими криптовалютами.</p>
    </div>

    <div class="coin-info-item coin-fact-item">
      <h3>Чем известна</h3>
      <p>Bitcoin известен тем, что именно он запустил современную эпоху криптовалют и стал главным символом независимых цифровых денег.</p>
    </div>
  </div>

  <div class="coin-bottom-note">
    <strong>Примеры использования:</strong> хранение стоимости, международные переводы, инвестиции, изучение крипторынка.
  </div>
</div>
      `,
      en: `<h1 class="page-title">Bitcoin</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">BTC • digital gold</span>
        <h2>Bitcoin</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>The first cryptocurrency created as digital money for transfers without a bank or a central intermediary. Its main idea is that a user can directly own and send funds through a blockchain network.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item"><h3>What makes it special</h3><p>Bitcoin has a limited supply: only 21 million BTC can ever exist. Because of this scarcity, it is often compared to gold, but in digital form. The Bitcoin network is decentralized, so it does not belong to one company or government.</p></div>
    <div class="coin-info-item"><h3>What it is used for</h3><p>Bitcoin is used for long-term value storage, transfers between users, investments and learning about the cryptocurrency market. For many people, it is the first coin through which they discover digital assets.</p></div>
    <div class="coin-info-item"><h3>Where it is used</h3><p>BTC is found on exchanges, in wallets, investment services and some payment systems. It is also often used as a benchmark asset for comparing the wider crypto market.</p></div>
    <div class="coin-info-item coin-fact-item"><h3>What it is known for</h3><p>Bitcoin is best known for launching the modern era of cryptocurrencies and becoming the main symbol of independent digital money.</p></div>
  </div>

  <div class="coin-bottom-note">
    <strong>Use examples:</strong> store of value, international transfers, investments, learning about the crypto market.
  </div>
</div>`
    },

    
    ethereum: {
      ruTitle: "Ethereum",
      enTitle: "Ethereum",
      ruDescription: "Платформа для смарт-контрактов и децентрализованных приложений",
      enDescription: "A platform for smart contracts and decentralized applications",
      ru: `<h1 class="page-title">Ethereum</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">ETH • смарт-контракты</span>
        <h2>Ethereum</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Ethereum — это блокчейн-платформа, на которой можно создавать токены, смарт-контракты и децентрализованные приложения. Его внутренняя монета называется Ether или ETH и используется для оплаты операций в сети.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item">
      <h3>Что делает её особенной</h3>
      <p>Ethereum стал известен благодаря смарт-контрактам. Это программы, которые автоматически выполняют условия, записанные в коде. Благодаря этому Ethereum превратился не просто в криптовалюту, а в основу для множества цифровых сервисов.</p>
    </div>

    <div class="coin-info-item">
      <h3>Для чего используется</h3>
      <p>ETH используется для оплаты комиссий, запуска токенов, работы DeFi-сервисов, NFT, DAO, блокчейн-игр и других Web3-проектов. Сеть Ethereum часто выбирают разработчики, которым нужны гибкие возможности для создания приложений.</p>
    </div>

    <div class="coin-info-item">
      <h3>Где используется</h3>
      <p>Ethereum применяется в децентрализованных биржах, NFT-маркетплейсах, криптокошельках, DeFi-протоколах и сервисах, работающих со смарт-контрактами.</p>
    </div>

    <div class="coin-info-item coin-fact-item">
      <h3>Чем известна</h3>
      <p>Ethereum известен как главная платформа для смарт-контрактов и один из самых важных проектов после Bitcoin.</p>
    </div>
  </div>

  <div class="coin-bottom-note">
    <strong>Примеры использования:</strong> DeFi, NFT, DAO, токены, Web3-приложения, оплата комиссий.
  </div>
</div>
      `,
      en: `<h1 class="page-title">Ethereum</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">ETH • smart contracts</span>
        <h2>Ethereum</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Ethereum is a blockchain platform that allows not only transfers, but also smart contracts and decentralized applications. It became the foundation for DeFi, NFT, DAO and many Web3 services.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item"><h3>What makes it special</h3><p>Its main feature is smart contracts: code that automatically executes programmed conditions. This made Ethereum a base layer for thousands of tokens and blockchain applications.</p></div>
    <div class="coin-info-item"><h3>What it is used for</h3><p>Ethereum is used to create decentralized applications, launch tokens, work with NFT projects, transfer value and interact with DeFi services.</p></div>
    <div class="coin-info-item"><h3>Where it is used</h3><p>ETH is used on exchanges, in wallets, DeFi protocols, NFT marketplaces, Web3 apps and blockchain-based services all over the world.</p></div>
    <div class="coin-info-item coin-fact-item"><h3>What it is known for</h3><p>Ethereum is known as the leading platform for smart contracts and as one of the most important ecosystems in the crypto industry.</p></div>
  </div>

  <div class="coin-bottom-note">
    <strong>Use examples:</strong> DeFi, NFT, DAO, tokens, Web3 applications, paying network fees.
  </div>
</div>`
    },

    
    usdt: {
      ruTitle: "USDT",
      enTitle: "USDT",
      ruDescription: "Популярный стейблкоин, привязанный к доллару",
      enDescription: "A popular stablecoin linked to the US dollar",
      ru: `<h1 class="page-title">USDT</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">USDT • стейблкоин</span>
        <h2>USDT</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>USDT — один из самых популярных стейблкоинов. Его цена обычно стремится быть близкой к одному доллару США, поэтому он используется как более стабильный цифровой актив внутри криптовалютного рынка.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item">
      <h3>Что делает её особенной</h3>
      <p>USDT отличается от обычных криптовалют тем, что не рассчитан на сильный рост цены. Его основная задача — сохранять относительную стабильность и быть удобным цифровым аналогом доллара.</p>
    </div>

    <div class="coin-info-item">
      <h3>Для чего используется</h3>
      <p>USDT используют для торговли, переводов, фиксации прибыли, хранения средств во время нестабильного рынка и международных расчётов. Он удобен, когда нужно временно выйти из волатильных активов, не переводя деньги в обычную валюту.</p>
    </div>

    <div class="coin-info-item">
      <h3>Где используется</h3>
      <p>USDT применяется на криптобиржах, в кошельках, обменниках, DeFi-сервисах и при переводах между пользователями. Он существует в разных блокчейн-сетях, поэтому при переводе важно выбирать правильную сеть.</p>
    </div>

    <div class="coin-info-item coin-fact-item">
      <h3>Чем известна</h3>
      <p>USDT известен как один из самых используемых стейблкоинов в мире и важный инструмент для торговли на крипторынке.</p>
    </div>
  </div>

  <div class="coin-bottom-note">
    <strong>Примеры использования:</strong> торговля, переводы, фиксация прибыли, DeFi, международные расчёты.
  </div>
</div>
      `,
      en: `<h1 class="page-title">USDT</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">USDT • stable value</span>
        <h2>USDT</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>USDT is a stablecoin designed to keep a value close to 1 US dollar. It is used as a convenient digital equivalent of the dollar for transfers, trading and capital preservation inside the crypto market.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item"><h3>What makes it special</h3><p>Its main feature is price stability. Unlike many cryptocurrencies, USDT does not aim for strong growth, but for staying close to one dollar, which makes it more predictable for everyday use.</p></div>
    <div class="coin-info-item"><h3>What it is used for</h3><p>USDT is used for trading, transferring funds, fixing profits, protecting capital from volatility and working inside DeFi and exchange services.</p></div>
    <div class="coin-info-item"><h3>Where it is used</h3><p>It is widely used on exchanges, in wallets, peer-to-peer transfers, payment solutions and international settlements where quick digital dollar transfers are needed.</p></div>
    <div class="coin-info-item coin-fact-item"><h3>What it is known for</h3><p>USDT is known as one of the most popular stablecoins and as a core tool for liquidity in the crypto market.</p></div>
  </div>

  <div class="coin-bottom-note">
    <strong>Use examples:</strong> trading, transfers, locking in profit, DeFi, international settlements.
  </div>
</div>`
    },

    
    solana: {
      ruTitle: "Solana",
      enTitle: "Solana",
      ruDescription: "Быстрая блокчейн-сеть с низкими комиссиями",
      enDescription: "A fast blockchain network with low fees",
      ru: `<h1 class="page-title">Solana</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">SOL • быстрая сеть</span>
        <h2>Solana</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Solana — блокчейн-платформа, известная высокой скоростью обработки операций и низкими комиссиями. Её внутренняя монета называется SOL и используется для оплаты операций внутри сети.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item">
      <h3>Что делает её особенной</h3>
      <p>Solana интересна высокой пропускной способностью. Она рассчитана на большое количество быстрых транзакций, поэтому подходит для приложений, где пользователи часто совершают операции.</p>
    </div>

    <div class="coin-info-item">
      <h3>Для чего используется</h3>
      <p>Solana используют для переводов, выпуска токенов, DeFi-сервисов, NFT, блокчейн-игр, мемкоинов и других Web3-проектов. Низкие комиссии делают её удобной для активных пользователей.</p>
    </div>

    <div class="coin-info-item">
      <h3>Где используется</h3>
      <p>Solana применяется в криптокошельках, децентрализованных приложениях, NFT-маркетплейсах, игровых проектах и биржевых сервисах.</p>
    </div>

    <div class="coin-info-item coin-fact-item">
      <h3>Чем известна</h3>
      <p>Solana известна своей скоростью, низкими комиссиями и активной экосистемой, где быстро появляются новые проекты.</p>
    </div>
  </div>

  <div class="coin-bottom-note">
    <strong>Примеры использования:</strong> переводы, NFT, DeFi, игры, мемкоины, Web3-сервисы.
  </div>
</div>
      `,
      en: `<h1 class="page-title">Solana</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">SOL • speed and scale</span>
        <h2>Solana</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Solana is a blockchain known for high speed and low transaction costs. It is designed for scalable applications and is often used in DeFi, NFT, payments and various Web3 products.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item"><h3>What makes it special</h3><p>Its main strengths are fast processing and relatively low fees. This makes the network attractive for applications that need many operations and a smooth user experience.</p></div>
    <div class="coin-info-item"><h3>What it is used for</h3><p>Solana is used for transfers, decentralized finance, NFT collections, blockchain games, meme coins and other Web3 applications.</p></div>
    <div class="coin-info-item"><h3>Where it is used</h3><p>SOL is used on exchanges, in wallets, DeFi protocols, NFT marketplaces, blockchain games and services built on the Solana ecosystem.</p></div>
    <div class="coin-info-item coin-fact-item"><h3>What it is known for</h3><p>Solana is known as one of the fastest major blockchains and as an ecosystem that supports active development of new crypto products.</p></div>
  </div>

  <div class="coin-bottom-note">
    <strong>Use examples:</strong> transfers, NFT, DeFi, games, meme coins, Web3 services.
  </div>
</div>`
    },

    
    coinCompare: {
      ruTitle: "Другие монеты",
      enTitle: "Other coins",
      ruDescription: "Дополнительные популярные криптовалюты",
      enDescription: "Additional popular cryptocurrencies",
      ru: `<h1 class="page-title">Другие монеты</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">Дополнительные монеты</span>
        <h2>Другие популярные криптовалюты</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Помимо Bitcoin, Ethereum, USDT и Solana, на крипторынке есть много других известных монет. Каждая из них отличается своей задачей, экосистемой и способом применения.</p>
  </div>

  <div class="other-coins-grid">
    <div class="other-coin-card">
      <h3>BNB</h3>
      <p>BNB связана с экосистемой Binance и сетью BNB Chain. Она используется для оплаты комиссий, участия в сервисах платформы, работы с токенами и децентрализованными приложениями. Монета известна тем, что вокруг неё создана большая биржевая и блокчейн-экосистема.</p>
    </div>

    <div class="other-coin-card">
      <h3>XRP</h3>
      <p>XRP ориентирован на быстрые переводы и расчёты. Его используют там, где важны скорость операций и относительно низкие комиссии. Монета известна обсуждениями вокруг международных платежей и быстрых финансовых переводов.</p>
    </div>

    <div class="other-coin-card">
      <h3>Dogecoin</h3>
      <p>Dogecoin появился как шуточная криптовалюта, но стал одним из самых известных мемкоинов. Его популярность связана с интернет-культурой, активным сообществом и тем, как мемы могут влиять на крипторынок.</p>
    </div>

    <div class="other-coin-card">
      <h3>Cardano</h3>
      <p>Cardano — блокчейн-платформа для смарт-контрактов и децентрализованных приложений. Её монета ADA используется внутри экосистемы. Проект известен постепенным развитием, исследовательским подходом и вниманием к надёжности технологии.</p>
    </div>
  </div>
</div>
      `,
      en: `<h1 class="page-title">Other coins</h1>
<div class="coin-detail-page">
  <div class="coin-hero-card">
    <div class="coin-hero-top">
      <div>
        <span class="coin-tag">Popular alternatives</span>
        <h2>Other coins</h2>
      </div>
      <div class="coin-badge">✦</div>
    </div>
    <p>Besides Bitcoin, Ethereum, USDT and Solana, the market includes many other popular coins. Each project solves its own tasks: some focus on payments, some on infrastructure, and others on exchanges or speed.</p>
  </div>

  <div class="coin-info-grid">
    <div class="coin-info-item"><h3>BNB</h3><p>BNB is tied to the BNB Chain ecosystem and is used for fees, services and activities inside that network and related platforms.</p></div>
    <div class="coin-info-item"><h3>XRP</h3><p>XRP is known for fast and inexpensive transfers and is often discussed in the context of cross-border payments.</p></div>
    <div class="coin-info-item"><h3>USDC</h3><p>USDC is another major stablecoin linked to the US dollar and widely used for settlements, exchanges and DeFi services.</p></div>
    <div class="coin-info-item coin-fact-item"><h3>How to compare them</h3><p>When comparing coins, it is useful to look at their purpose, ecosystem, stability, transaction speed, popularity and where they are actually used.</p></div>
  </div>

  <div class="coin-bottom-note">
    <strong>Helpful note:</strong> always study the purpose of the project, how the asset is used and what risks are involved before interacting with any coin.
  </div>
</div>`
    },
    blockchainMain: {
      ruTitle: "Что такое блокчейн",
      enTitle: "What is blockchain",
      ruDescription: "Что такое блокчейн и почему он важен",
      enDescription: "Detailed explanation of blockchain technology",
      ru: `<h1 class="page-title">Что такое блокчейн</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Основа криптовалютной инфраструктуры</div>
        <h2>Блокчейн</h2>
      </div>
</div>
    <p>
      Блокчейн — это технология хранения и передачи данных, при которой информация записывается не в одном центральном месте,
      а распределяется между множеством участников сети. Проще говоря, блокчейн можно представить как цифровой журнал записей,
      где каждая новая запись добавляется в специальный блок, а блоки соединяются друг с другом в последовательную цепочку.
      Именно поэтому технология и получила название «blockchain», то есть «цепочка блоков».
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item">
      <h3>Как устроены блоки</h3>
      <p>
        В каждом блоке содержится информация о совершённых операциях. В криптовалютах это могут быть данные о переводах:
        кто отправил средства, на какой адрес они были отправлены, когда была выполнена операция и какие условия были соблюдены.
        После добавления блока в цепочку изменить старую запись становится крайне сложно, потому что она связана с предыдущими
        блоками и проверяется участниками сети.
      </p>
      <p>
        Внутри блока также есть служебные данные: порядковый номер, отметка времени, хэш текущего блока и ссылка на предыдущий.
        Благодаря этому сеть может быстро понять, на своём ли месте находится каждый блок и не была ли нарушена вся структура цепочки.
      </p>
    </div>

    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Почему технологии доверяют</h3>
      <p>
        Home идея блокчейна заключается в том, что системе не обязательно доверять одному банку, серверу или компании.
        Доверие создаётся за счёт правил сети, криптографии и согласия участников. Если один участник попытается изменить данные,
        остальные узлы сети смогут заметить несоответствие. Благодаря этому блокчейн считается устойчивой и прозрачной технологией.
      </p>
      <p>
        Такой принцип особенно ценен в цифровой среде, где пользователи хотят быть уверены, что история операций хранится честно,
        а важные записи нельзя незаметно изменить по решению одной организации.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Как это работает</h3>
      <p>
        Когда пользователь выполняет новую операцию, она сначала отправляется в сеть. После этого участники сети проверяют,
        соответствует ли операция правилам: достаточно ли средств на кошельке, правильно ли указана подпись, не была ли эта
        операция уже выполнена раньше. Только после проверки операция может попасть в новый блок.
      </p>
      <p>
        Блок содержит набор операций и специальную криптографическую связь с предыдущим блоком. Эта связь создаётся с помощью
        хэша — короткого цифрового отпечатка данных. Если изменить хотя бы один символ в старом блоке, его хэш изменится,
        а значит нарушится вся последующая цепочка.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Почему блокчейн важен</h3>
      <p>
        Blockchain важен потому, что он позволяет хранить данные без единого центрального управляющего сервера. В традиционных системах
        обычно есть организация, которая контролирует базу данных и может менять правила доступа. В блокчейне данные распределены,
        а правила заранее определены алгоритмом. Это повышает прозрачность и снижает зависимость от одного посредника.
      </p>
      <p>
        Ещё одна важная особенность блокчейна — неизменяемость записей. Если операция уже подтверждена и добавлена в цепочку,
        её очень сложно удалить или изменить задним числом. Для финансовых систем это особенно важно, потому что пользователи
        могут проверять историю операций и видеть, что данные не были незаметно подделаны.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Где используется блокчейн</h3>
      <p>
        Самая известная сфера применения блокчейна — криптовалюты. В Bitcoin, Ethereum и других сетях блокчейн используется
        для хранения истории переводов и подтверждения операций. Он позволяет участникам сети видеть, какие операции были выполнены,
        и проверять, что одна и та же монета не была потрачена дважды.
      </p>
      <p>
        Также блокчейн используется в смарт-контрактах и децентрализованных приложениях. Например, в DeFi-сервисах он помогает
        автоматически выполнять обмены, займы, стейкинг и другие операции.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Почему это важно для новичка</h3>
      <p>
        Для начинающего пользователя тема блокчейна важна потому, что без неё сложно понять, как работают переводы, кошельки,
        майнинг, смарт-контракты и другие разделы криптовалютного мира. Blockchain выступает основой всей системы и связывает
        между собой разные технологии.
      </p>
      <p>
        Понимание принципов блокчейна помогает не просто запоминать термины, а реально разбираться в том, почему криптовалюты
        считаются децентрализованными и чем они отличаются от обычных цифровых сервисов.
      </p>
    </div>
  </div>
</div>` ,
      en: `<h1 class="page-title">What is blockchain</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Foundation of crypto infrastructure</div>
        <h2>Blockchain</h2>
      </div>
</div>
    <p> 
      Blockchain is a technology for storing and transferring data where information is not kept in one central place
      but is distributed among many network participants. In simple terms, blockchain can be imagined as a digital record book
      where each new entry is added to a special block and blocks are connected into a consistent chain.
      This is why the technology is called a blockchain — a chain of blocks.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item">
      <h3>How blocks are structured</h3>
      <p>
        Each block contains information about completed operations. In cryptocurrencies this can include transfer data:
        who sent the funds, to which address they were sent, when the transaction happened and what conditions were met.
        After a block is added to the chain, changing an old record becomes extremely difficult because it is linked with previous blocks
        and checked by network participants.
      </p>
      <p>
        A block may also store service data such as its number, creation time, current hash and the reference to the previous block.
        These elements make the whole structure consistent and help the network detect whether the chain has been changed.
      </p>
    </div>

    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Why people trust it</h3>
      <p>
        The main idea of blockchain is that the system does not need one bank, server or company to be trusted.
        Trust is created through network rules, cryptography and agreement between participants. If one participant tries to change data,
        other nodes can notice the mismatch. Because of this, blockchain is considered a resilient and transparent technology.
      </p>
      <p>
        This approach is especially useful in digital environments where users want confidence that transaction history is stored honestly
        and does not depend on the decision of one platform owner.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>How it works</h3>
      <p>
        When a user creates a new operation, it is first sent to the network. After that, participants verify whether
        the operation follows the rules: whether there are enough funds in the wallet, whether the signature is correct,
        and whether the same operation has not already been used before. Only after verification can it be added to a new block.
      </p>
      <p>
        A block contains a set of operations and a cryptographic link to the previous block. This link is created using
        a hash — a short digital fingerprint of the data. If even one symbol in an old block is changed, its hash changes,
        which breaks the following chain.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why blockchain matters</h3>
      <p>
        Blockchain matters because it allows data to be stored without one central controlling server. In traditional systems,
        there is usually an organization that controls the database and can change access rules. In blockchain, data is distributed,
        and the rules are defined by the algorithm. This increases transparency and reduces dependence on one intermediary.
      </p>
      <p>
        Another important feature is immutability. If a transaction has already been confirmed and added to the chain,
        it is very difficult to delete or change it later. For financial systems this is especially important because users
        can verify transaction history and see that the data has not been secretly altered.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Where blockchain is used</h3>
      <p>
        The best-known use of blockchain is cryptocurrency. In Bitcoin, Ethereum and other networks, blockchain is used
        to store transfer history and confirm operations. It allows network participants to see which transactions took place
        and verify that the same coin was not spent twice.
      </p>
      <p>
        Blockchain is also used in smart contracts and decentralized applications. For example, in DeFi services it helps
        automatically perform swaps, loans, staking and other operations.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why it matters for beginners</h3>
      <p>
        For a beginner, blockchain is important because without it, it is difficult to understand how transfers, wallets,
        mining, smart contracts and many other parts of the crypto world work. Blockchain is the basic layer that connects these technologies.
      </p>
      <p>
        Understanding blockchain helps a person not only memorize terms but also understand why cryptocurrencies are considered decentralized
        and how they differ from ordinary digital services.
      </p>
    </div>
  </div>
</div>`
    },
    transactions: {
      ruTitle: "Транзакции",
      enTitle: "Transactions",
      ruDescription: "Как проходят операции в блокчейне",
      enDescription: "How blockchain operations work",
      ru: `<h1 class="page-title">Транзакции в блокчейне</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Движение средств внутри сети</div>
        <h2>Транзакции</h2>
      </div>
</div>
    <p>
      Транзакция в блокчейне — это операция, при которой пользователь передаёт цифровой актив или информацию другому пользователю,
      смарт-контракту или сервису. В криптовалютах транзакцией чаще всего называют перевод монет или токенов с одного адреса
      на другой. Каждая такая операция имеет свои данные: адрес отправителя, адрес получателя, сумму, комиссию и цифровую подпись.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Чем отличается от банковского перевода</h3>
      <p>
        Важно понимать, что транзакция в блокчейне отличается от обычного банковского перевода. В банке операцию обрабатывает
        финансовая организация, а в блокчейне её проверяет сеть участников. После подтверждения транзакция попадает в блок,
        а затем становится частью общей истории сети.
      </p>
      <p>
        Ещё одно отличие состоит в уровне контроля. В банковской системе у клиента есть служба поддержки и посредник,
        который может временно остановить перевод или проверить спорную операцию. В блокчейне пользователь действует напрямую,
        поэтому ответственность за точность реквизитов и выбор сети лежит на нём самом.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Как проходит транзакция</h3>
      <p>
        Сначала пользователь создаёт перевод в криптокошельке. Кошелёк формирует данные операции и подписывает их закрытым ключом.
        Цифровая подпись доказывает, что владелец адреса действительно разрешил отправку средств. После этого транзакция отправляется
        в сеть и ожидает проверки.
      </p>
      <p>
        Пока транзакция не подтверждена, она может находиться в мемпуле — списке ожидающих операций. Участники сети выбирают операции,
        проверяют их корректность и добавляют в новый блок. Чем выше комиссия, тем быстрее транзакция может быть обработана,
        особенно если сеть перегружена.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Подтверждение и завершение операции</h3>
      <p>
        После включения транзакции в блок она получает подтверждение. В некоторых сетях для надёжности ждут несколько подтверждений,
        потому что каждый следующий блок делает операцию более устойчивой к отмене. После достаточного количества подтверждений
        транзакция считается завершённой.
      </p>
      <p>
        Количество подтверждений зависит от сети и уровня требований к безопасности. Для небольших переводов иногда достаточно
        одного подтверждения, а для крупных операций пользователи и сервисы могут ждать больше, чтобы снизить риск ошибки или сбоя.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Комиссия и скорость</h3>
      <p>
        Скорость обработки транзакции нередко зависит от комиссии. В популярных сетях пользователи как бы соревнуются за место
        в следующем блоке, поэтому операции с более высокой комиссией могут быть подтверждены быстрее. Это особенно заметно
        в периоды перегрузки сети.
      </p>
      <p>
        Именно поэтому перед отправкой важно не только ввести адрес получателя, но и оценить текущую загруженность сети.
        Такой подход помогает выбрать подходящую комиссию и избежать слишком долгого ожидания подтверждения.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Почему важно быть внимательным</h3>
      <p>
        Большинство транзакций в блокчейне нельзя просто отменить, как ошибочный платёж в обычном банке. Если пользователь отправил
        криптовалюту на неправильный адрес или выбрал не ту сеть перевода, вернуть средства может быть невозможно. Поэтому перед
        отправкой всегда нужно проверять адрес, сеть, сумму и комиссию.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Практический совет по безопасности</h3>
      <p>
        Также важно помнить о мошеннических схемах. Иногда злоумышленники подменяют адреса, создают фальшивые сайты или просят
        отправить средства под видом инвестиций. Понимание того, как работают транзакции, помогает пользователю безопаснее
        пользоваться криптовалютами.
      </p>
      <p>
        На практике полезно сначала отправлять небольшую тестовую сумму, а уже потом переводить основной объём средств.
        Такой простой шаг часто помогает избежать неприятных ошибок при работе с новыми кошельками, биржами или сетями.
      </p>
    </div>
  </div>
</div>` ,
      en: `<h1 class="page-title">Blockchain transactions</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Movement of funds inside the network</div>
        <h2>Transactions</h2>
      </div>
</div>
    <p>
      A blockchain transaction is an operation in which a user transfers a digital asset or information to another user,
      a smart contract or a service. In cryptocurrency, a transaction most often means sending coins or tokens from one address
      to another. Each transaction has its own data: sender address, receiver address, amount, fee and digital signature.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>How it differs from a bank transfer</h3>
      <p>
        It is important to understand that a blockchain transaction differs from a normal bank transfer. In a bank,
        a financial institution processes the operation, while in blockchain it is checked by a network of participants.
        After confirmation, the transaction is included in a block and becomes part of the network history.
      </p>
      <p>
        Another difference is the level of control. In a bank there is usually customer support and an intermediary that can investigate
        a disputed payment. In blockchain the user works directly with the network, so responsibility for the address, the chosen network
        and the transfer details belongs to the sender.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>How a transaction happens</h3>
      <p>
        First, the user creates a transfer in a crypto wallet. The wallet forms the operation data and signs it with a private key.
        The digital signature proves that the owner of the address really approved the transfer. After that, the transaction is sent
        to the network and waits for verification.
      </p>
      <p>
        While the transaction is not yet confirmed, it may stay in the mempool — a list of pending operations. Network participants select transactions,
        check them and add them to a new block. The higher the fee, the faster the transaction can usually be processed,
        especially when the network is congested.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Confirmation and finalization</h3>
      <p>
        After a transaction is included in a block, it receives confirmation. In some networks several confirmations are expected for extra reliability,
        because each next block makes the transaction harder to reverse. After enough confirmations,
        the transaction is considered complete.
      </p>
      <p>
        The number of confirmations depends on the network and the required level of safety. Small transfers may need only one confirmation,
        while larger payments often wait for more before they are treated as fully final.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Fee and speed</h3>
      <p>
        The speed of a transaction often depends on the fee. In busy networks, users compete for space in the next block,
        so operations with a higher fee may be processed faster. This is especially noticeable when the network is overloaded.
      </p>
      <p>
        That is why it is useful to check the current network load before sending funds. This helps choose a reasonable fee and avoid unnecessary waiting.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why you must be careful</h3>
      <p>
        Most blockchain transactions cannot simply be canceled like a mistaken bank payment. If a user sends cryptocurrency
        to the wrong address or chooses the wrong network, recovering the funds may be impossible. That is why it is important
        to check the address, network, amount and fee before sending.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Practical safety tip</h3>
      <p>
        It is also important to remember fraud schemes. Sometimes attackers replace addresses, create fake websites or ask for funds
        under the guise of investment opportunities. Understanding how transactions work helps users stay safer in crypto.
      </p>
      <p>
        In practice, it is often wise to send a small test amount first and only then transfer the main sum. This simple habit can prevent mistakes
        when working with new wallets, exchanges or networks.
      </p>
    </div>
  </div>
</div>`
    },
    mining: {
      ruTitle: "Майнинг",
      enTitle: "Mining",
      ruDescription: "Как работает майнинг и зачем он нужен",
      enDescription: "How mining works and why it is needed",
      ru: `<h1 class="page-title">Майнинг</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Подтверждение блоков через вычисления</div>
        <h2>Майнинг</h2>
      </div>
</div>
    <p>
      Майнинг — это процесс, с помощью которого в некоторых блокчейн-сетях подтверждаются транзакции и создаются новые блоки.
      Самый известный пример майнинга связан с Bitcoin. Участники сети, которых называют майнерами, используют вычислительное
      оборудование, чтобы решать сложные математические задачи и добавлять новые блоки в цепочку.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Роль майнеров</h3>
      <p>
        Майнинг нужен не только для выпуска новых монет. Его главная роль — защита сети и проверка операций. Майнеры соревнуются
        между собой за право добавить следующий блок. Тот, кто первым находит подходящее решение, получает вознаграждение:
        новые монеты и комиссии за транзакции, включённые в блок.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Как работает майнинг</h3>
      <p>
        Когда в сети появляются новые транзакции, они собираются в блок. Майнеры пытаются найти специальное значение, которое
        сделает хэш блока подходящим под правила сети. Этот процесс требует большого количества вычислений, поэтому для майнинга
        используются мощные видеокарты или специализированные устройства.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Проверка и награда</h3>
      <p>
        После нахождения правильного решения блок отправляется в сеть. Остальные участники проверяют, действительно ли решение
        соответствует правилам. Если всё верно, блок добавляется в блокчейн, а майнер получает награду. Благодаря такому механизму
        злоумышленнику сложно подделать историю операций, потому что для этого потребовались бы огромные вычислительные ресурсы.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Зачем нужен майнинг</h3>
      <p>
        Майнинг поддерживает работу сетей, использующих механизм Proof of Work. Он помогает защищать блокчейн от подделки,
        подтверждает транзакции и делает выпуск новых монет предсказуемым. В Bitcoin майнинг также связан с халвингом:
        примерно раз в несколько лет награда за блок уменьшается, что влияет на скорость появления новых BTC.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Сложности и недостатки</h3>
      <p>
        Однако майнинг имеет и недостатки. Он требует дорогого оборудования, электричества и технических знаний. Из-за большого
        потребления энергии майнинг часто обсуждается в контексте экологии и затрат. Поэтому некоторые современные блокчейны
        используют другие механизмы подтверждения, например Proof of Stake.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Где используется майнинг</h3>
      <p>
        Майнинг используется в Bitcoin и других криптовалютах, которые работают на Proof of Work. Он применяется там, где сеть
        должна быть защищена через вычислительную работу участников.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Что важно понимать пользователю</h3>
      <p>
        Для обычного пользователя важно понимать майнинг хотя бы на базовом уровне, потому что он объясняет, как появляются новые блоки,
        откуда берётся защита сети и почему некоторые криптовалюты могут работать без единого центра управления.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>С чем связан майнинг на практике</h3>
      <p>
        На практике майнинг связан не только с вычислениями, но и с экономикой сети: майнер оценивает стоимость оборудования,
        электроэнергии и размер награды. Именно поэтому тема майнинга часто рассматривается как сочетание технологии,
        безопасности и финансовой мотивации участников.
      </p>
    </div>
  </div>
</div>` ,
      en: `<h1 class="page-title">Mining</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Block confirmation through computation</div>
        <h2>Mining</h2>
      </div>
</div>
    <p>
      Mining is the process by which some blockchain networks confirm transactions and create new blocks.
      The best-known example of mining is Bitcoin. Network participants called miners use computing hardware
      to solve difficult mathematical tasks and add new blocks to the chain.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>The role of miners</h3>
      <p>
        Mining is not only for issuing new coins. Its main role is protecting the network and validating operations.
        Miners compete for the right to add the next block. Whoever first finds the correct solution receives a reward:
        newly issued coins and transaction fees included in the block.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>How mining works</h3>
      <p>
        When new transactions appear in the network, they are collected into a block. Miners try to find a special value
        that makes the block hash satisfy the network rules. This process requires many computations, so mining uses powerful GPUs
        or specialized devices.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Verification and reward</h3>
      <p>
        After finding the correct solution, the block is sent to the network. Other participants verify whether the solution
        follows the rules. If everything is valid, the block is added to the blockchain and the miner receives a reward.
        This mechanism makes it difficult for attackers to rewrite transaction history because it would require enormous computing power.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why mining is needed</h3>
      <p>
        Mining supports networks that use the Proof of Work mechanism. It helps protect the blockchain from forgery,
        confirms transactions and makes coin issuance predictable. In Bitcoin, mining is also connected with halving:
        every few years the block reward is reduced, which affects the rate at which new BTC enters circulation.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Challenges and drawbacks</h3>
      <p>
        Mining also has disadvantages. It requires expensive hardware, electricity and technical knowledge. Because of its high
        energy consumption, mining is often discussed in relation to ecology and costs. That is why some newer blockchains
        use other validation methods, such as Proof of Stake.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Where mining is used</h3>
      <p>
        Mining is used in Bitcoin and other cryptocurrencies that operate on Proof of Work. It is applied where the network
        must be secured through computational work.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>What the user should understand</h3>
      <p>
        For a regular user, understanding mining at least at a basic level is important because it explains how new blocks appear,
        where network security comes from and why some cryptocurrencies can function without a single central authority.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Mining in practice</h3>
      <p>
        In practice, mining is connected not only with computation but also with network economics: miners consider hardware costs,
        electricity expenses and possible rewards. That is why mining is often studied as a combination of technology,
        security and financial motivation.
      </p>
    </div>
  </div>
</div>`
    },
    smartContracts: {
      ruTitle: "Смарт-контракты",
      enTitle: "Smart contracts",
      ruDescription: "Что такое смарт-контракты и где они используются",
      enDescription: "What smart contracts are and where they are used",
      ru: `<h1 class="page-title">Смарт-контракты</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Автоматическое выполнение условий</div>
        <h2>Смарт-контракты</h2>
      </div>
</div>
    <p>
      Смарт-контракт — это программа, которая хранится в блокчейне и автоматически выполняет определённые условия.
      Его можно представить как цифровое соглашение: если заранее прописанное условие выполнено, программа сама выполняет действие.
      Например, может отправить токены, обменять активы или выдать доступ к услуге.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Почему о них часто говорят</h3>
      <p>
        Смарт-контракты стали особенно известны благодаря Ethereum. Они позволяют создавать приложения, которые работают без
        обычных посредников. Пользователь взаимодействует не с компанией напрямую, а с кодом, который выполняет правила,
        записанные в блокчейне.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Как они работают</h3>
      <p>
        Разработчик создаёт код смарт-контракта и размещает его в блокчейне. После этого пользователи могут обращаться к этому
        контракту через кошелёк или приложение. Когда пользователь выполняет действие, смарт-контракт проверяет условия и,
        если всё правильно, автоматически выполняет операцию.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Примеры применения</h3>
      <p>
        Например, в децентрализованной бирже смарт-контракт может обменять один токен на другой. В NFT-проекте он может подтвердить
        владение цифровым объектом. В DeFi-сервисе он может управлять займом, ликвидностью или начислением вознаграждения.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Почему смарт-контракты важны</h3>
      <p>
        Смарт-контракты важны потому, что они позволяют автоматизировать цифровые соглашения. Если правила записаны в коде,
        пользователю не нужно доверять посреднику, который вручную выполнит условия. Всё происходит автоматически и прозрачно.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Осторожность и риски</h3>
      <p>
        При этом смарт-контракты требуют осторожности. Если в коде есть ошибка, она может привести к потере средств или взлому
        проекта. Поэтому надёжные проекты проводят проверки, аудит кода и тестирование перед запуском.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Где используются смарт-контракты</h3>
      <p>
        Смарт-контракты используются в DeFi, NFT, DAO, блокчейн-играх, токенизации активов, децентрализованных биржах и других
        Web3-приложениях.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Роль в экосистеме</h3>
      <p>
        Именно смарт-контракты стали одной из главных причин, почему блокчейн начал использоваться не только для переводов,
        но и для создания целых цифровых экосистем, где разные сервисы могут работать автоматически и без централизованного управления.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Почему тема важна для новичка</h3>
      <p>
        Понимание смарт-контрактов помогает лучше разбираться в современных криптопроектах, потому что через них работают обменники,
        игровые платформы, NFT-сервисы и многие другие инструменты Web3, с которыми пользователь может столкнуться на практике.
      </p>
    </div>
  </div>
</div>` ,
      en: `<h1 class="page-title">Smart contracts</h1>
<div class="blockchain-detail-page">
  <div class="blockchain-hero-card">
    <div class="blockchain-hero-top">
      <div>
        <div class="blockchain-tag">Automatic execution of conditions</div>
        <h2>Smart contracts</h2>
      </div>
</div>
    <p>
      A smart contract is a program stored in the blockchain that automatically performs certain conditions.
      It can be imagined as a digital agreement: if a predefined condition is met, the program performs the action on its own.
      For example, it may send tokens, exchange assets or give access to a service.
    </p>
  </div>

  <div class="blockchain-info-grid">
    <div class="blockchain-info-item blockchain-accent-item">
      <h3>Why they are often discussed</h3>
      <p>
        Smart contracts became especially famous thanks to Ethereum. They allow developers to create applications that work without
        ordinary intermediaries. The user interacts not with a company directly, but with code that executes the rules
        written into the blockchain.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>How they work</h3>
      <p>
        A developer writes the smart contract code and deploys it to the blockchain. After that, users can interact with it
        through a wallet or application. When a user performs an action, the smart contract checks the conditions and,
        if everything is correct, executes the operation automatically.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Examples of use</h3>
      <p>
        For example, in a decentralized exchange a smart contract can swap one token for another. In an NFT project it can confirm
        ownership of a digital object. In a DeFi service it can manage a loan, liquidity or reward distribution.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why smart contracts matter</h3>
      <p>
        Smart contracts matter because they automate digital agreements. If the rules are written in code,
        the user does not need to trust an intermediary to carry out the conditions manually. Everything happens automatically and transparently.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Caution and risks</h3>
      <p>
        At the same time, smart contracts require caution. If there is an error in the code, it can lead to loss of funds or a project hack.
        That is why reliable projects conduct code reviews, audits and testing before launch.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Where smart contracts are used</h3>
      <p>
        Smart contracts are used in DeFi, NFTs, DAOs, blockchain games, tokenized assets, decentralized exchanges and other Web3 applications.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Role in the ecosystem</h3>
      <p>
        Smart contracts are one of the main reasons why blockchain is used not only for transfers but also for complete digital ecosystems,
        where different services can work automatically and without centralized control.
      </p>
    </div>

    <div class="blockchain-info-item">
      <h3>Why this matters for beginners</h3>
      <p>
        Understanding smart contracts helps beginners understand modern crypto projects better, because exchanges, gaming platforms,
        NFT services and many other Web3 tools depend on them in practice.
      </p>
    </div>
  </div>
</div>`
    },

    links: {
      ruTitle: "Полезные ссылки",
      enTitle: "Useful links",
      ruDescription: "CoinMarketCap, CoinGecko, Etherscan, Bitcoin.org, Ethereum.org и другие ресурсы",
      enDescription: "CoinMarketCap, CoinGecko, Etherscan, Bitcoin.org, Ethereum.org and other resources",
      ru: `<h1 class="page-title">Полезные ссылки</h1>
        <div class="beginner-shell">
        <div class="beginner-intro"><p>
            Ниже собраны полезные ресурсы, которые могут пригодиться при изучении криптовалют.
          </p></div>
        <div class="beginner-grid">
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">01</span><h3>CoinMarketCap</h3>
            <p>
              Сайт для просмотра информации о криптовалютах: цены, капитализация, графики и популярные монеты.
              <br />
              <a href="https://coinmarketcap.com/" target="_blank">Перейти на CoinMarketCap</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">02</span><h3>CoinGecko</h3>
            <p>
              Сервис для отслеживания курсов криптовалют, рейтингов монет, графиков и бирж.
              <br />
              <a href="https://www.coingecko.com/" target="_blank">Перейти на CoinGecko</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">03</span><h3>Blockchain.com Explorer</h3>
            <p>
              Обозреватель блокчейна для просмотра информации о транзакциях, блоках и адресах.
              <br />
              <a href="https://www.blockchain.com/explorer" target="_blank">Перейти в Blockchain Explorer</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">04</span><h3>Etherscan</h3>
            <p>
              Популярный обозреватель сети Ethereum.
              <br />
              <a href="https://etherscan.io/" target="_blank">Перейти на Etherscan</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">05</span><h3>Bitcoin.org</h3>
            <p>
              Информационный сайт о Bitcoin.
              <br />
              <a href="https://bitcoin.org/ru/" target="_blank">Перейти на Bitcoin.org</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">06</span><h3>Ethereum.org</h3>
            <p>
              Официальный информационный сайт Ethereum.
              <br />
              <a href="https://ethereum.org/ru/" target="_blank">Перейти на Ethereum.org</a>
            </p></article>
        </div></div>`,
      en: `<h1 class="page-title">Useful links</h1>
        <div class="beginner-shell">
        <div class="beginner-intro"><p>
            Below are useful resources that may help when studying cryptocurrencies.
          </p></div>
        <div class="beginner-grid">
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">01</span><h3>CoinMarketCap</h3>
            <p>
              A website for viewing cryptocurrency information: prices, market capitalization, charts and popular coins. <br /> <a href="https://coinmarketcap.com/" target="_blank">Go to CoinMarketCap</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">02</span><h3>CoinGecko</h3>
            <p>
              A service for tracking cryptocurrency prices, coin rankings, charts and exchanges. <br /> <a href="https://www.coingecko.com/" target="_blank">Go to CoinGecko</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">03</span><h3>Blockchain.com Explorer</h3>
            <p>
              A blockchain explorer for viewing information about transactions, blocks and addresses. <br /> <a href="https://www.blockchain.com/explorer" target="_blank">Go to Blockchain Explorer</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">04</span><h3>Etherscan</h3>
            <p>
              A popular explorer for the Ethereum network. <br /> <a href="https://etherscan.io/" target="_blank">Go to Etherscan</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">05</span><h3>Bitcoin.org</h3>
            <p>
              An informational website about Bitcoin. <br /> <a href="https://bitcoin.org/en/" target="_blank">Go to Bitcoin.org</a>
            </p></article>
        <article class="beginner-card beginner-link-card"><span class="beginner-card-index">06</span><h3>Ethereum.org</h3>
            <p>
              The official informational website of Ethereum. <br /> <a href="https://ethereum.org/en/" target="_blank">Go to Ethereum.org</a>
            </p></article>
        </div></div>`
    },
  };

  const typePages = {
    typeCoins: {
      ruTitle: "Монеты",
      enTitle: "Coins",
      ruDescription: "Имеют собственный блокчейн и используются как самостоятельные цифровые деньги.",
      enDescription: "Have their own blockchain and are used as independent digital money.",
      ru: `
        <h1 class="page-title">Монеты</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Монеты</h2>
            <p>Монеты — это криптовалюты, которые работают в собственной сети и не зависят от чужого блокчейна. Они являются основой своей экосистемы: через них оплачиваются комиссии, выполняются переводы и поддерживается работа сети.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются для переводов, оплаты комиссий, хранения стоимости, работы с приложениями внутри своей сети и участия в развитии экосистемы.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность монет в том, что у них есть собственный блокчейн. Это отличает их от токенов, которые создаются поверх уже существующей сети.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны как базовая единица внутри блокчейн-сети: без них невозможно нормально оплачивать операции и поддерживать экономику проекта.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь хранит монеты в кошельке, отправляет их на адреса других пользователей, оплачивает комиссии или использует в сервисах сети.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Монеты интересны тем, что часто являются фундаментом целой криптоэкосистемы и показывают, насколько сильна сама сеть.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>Bitcoin, Ethereum, Solana, Litecoin.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Coins</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Coins</h2>
            <p>Coins are cryptocurrencies that run on their own network and do not depend on another blockchain. They are the foundation of their ecosystem: they are used to pay fees, make transfers and support the operation of the network.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used for transfers, paying fees, storing value, interacting with applications inside their own network and participating in ecosystem growth.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>The main feature of coins is that they have their own blockchain. This distinguishes them from tokens, which are created on top of an existing network.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They act as the basic unit inside a blockchain network: without them it is impossible to pay for operations properly and support the project economy.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user stores coins in a wallet, sends them to other users, pays fees or uses them in the network’s services.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Coins are interesting because they often form the foundation of an entire crypto ecosystem and show how strong the network itself is.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>Bitcoin, Ethereum, Solana, Litecoin.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeTokens: {
      ruTitle: "Токены",
      enTitle: "Tokens",
      ruDescription: "Создаются на готовых блокчейнах и применяются внутри разных проектов.",
      enDescription: "Created on ready-made blockchains and used in different projects.",
      ru: `
        <h1 class="page-title">Токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Токены</h2>
            <p>Токены — это цифровые активы, которые создаются на уже существующих блокчейнах. Они могут давать доступ к сервису, использоваться в игре, представлять долю участия или служить внутренней валютой проекта.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в DeFi, играх, приложениях, биржах, платформах, сообществах и проектах, которым нужен собственный цифровой актив.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Токену не нужен собственный блокчейн. Он использует готовую инфраструктуру другой сети, например Ethereum, BNB Chain или Solana.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Токены нужны проектам, чтобы создавать внутреннюю экономику, поощрять пользователей, открывать доступ к функциям и управлять сообществом.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь получает или покупает токен, хранит его в кошельке и использует внутри сервиса: для оплаты, голосования, обмена или доступа к функциям.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Токены интересны гибкостью: один токен может быть связан с финансами, другой — с игрой, третий — с управлением проектом.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>UNI, LINK, AAVE, MATIC.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Tokens</h2>
            <p>Tokens are digital assets created on existing blockchains. They can provide access to a service, be used in a game, represent participation rights or work as the internal currency of a project.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in DeFi, games, applications, exchanges, platforms, communities and projects that need their own digital asset.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>A token does not need its own blockchain. It uses the ready-made infrastructure of another network, such as Ethereum, BNB Chain or Solana.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>Tokens help projects build an internal economy, reward users, unlock features and manage a community.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user receives or buys a token, stores it in a wallet and uses it inside a service for payments, voting, exchanging or access to functions.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Tokens are flexible: one token may be linked to finance, another to gaming, and a third to project governance.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>UNI, LINK, AAVE, MATIC.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeStablecoins: {
      ruTitle: "Стейблкоины",
      enTitle: "Stablecoins",
      ruDescription: "Стараются сохранять стабильную цену и часто привязаны к доллару.",
      enDescription: "Aim to maintain a stable price and are often pegged to the dollar.",
      ru: `
        <h1 class="page-title">Стейблкоины</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Стейблкоины</h2>
            <p>Стейблкоины — это криптовалюты, которые стараются сохранять стабильную стоимость. Чаще всего они привязаны к доллару США, поэтому удобны для расчётов и хранения средств без сильных колебаний цены.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются для переводов, торговли на биржах, фиксации прибыли, международных расчётов и работы в DeFi-сервисах.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — стремление сохранять цену около определённого актива, например 1 доллар. Это делает их более предсказуемыми по сравнению с обычными криптовалютами.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны, чтобы пользователи могли быстро переходить из волатильных монет в более стабильный цифровой актив, не выводя деньги в обычную валюту.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь может хранить стейблкоины в кошельке, переводить их другим людям, использовать на бирже или применять в DeFi.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Стейблкоины интересны тем, что соединяют удобство криптовалют с привычной стабильностью обычных валют.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>USDT, USDC, DAI.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Stablecoins</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Stablecoins</h2>
            <p>Stablecoins are cryptocurrencies designed to keep a stable value. They are most often linked to the US dollar, which makes them convenient for payments and storing funds without large price swings.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used for transfers, trading on exchanges, locking in profits, international settlements and work in DeFi services.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>Their main feature is the goal of keeping the price close to a chosen asset, for example 1 US dollar. This makes them more predictable than many other cryptocurrencies.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They allow users to move from volatile coins into a more stable digital asset without withdrawing money into traditional fiat currency.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user can store stablecoins in a wallet, send them to other people, use them on an exchange or put them to work in DeFi.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Stablecoins combine the convenience of crypto with the familiar stability of traditional currencies.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>USDT, USDC, DAI.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeMemeCoins: {
      ruTitle: "Мемкоины",
      enTitle: "Meme coins",
      ruDescription: "Популярность таких монет строится вокруг мемов и активности сообщества.",
      enDescription: "Gain popularity through memes, internet culture and community activity.",
      ru: `
        <h1 class="page-title">Мемкоины</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Мемкоины</h2>
            <p>Мемкоины — это криптовалюты, популярность которых часто связана с интернет-мемами, юмором и активностью сообщества. Иногда они создаются как шутка, но могут получать большую известность благодаря поддержке пользователей.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются для спекуляций, участия в интернет-сообществах, небольших переводов, рекламных кампаний и экспериментальных проектов.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Их ценность часто зависит не столько от технологии, сколько от популярности, обсуждений, мемов и активности сообщества.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны как пример того, как интернет-культура может влиять на крипторынок и создавать вокруг монеты большое сообщество.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователи покупают мемкоины на биржах, хранят их в кошельках, обменивают и используют как часть сообщества или спекулятивный актив.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Мемкоины интересны тем, что показывают силу социальных сетей, хайпа и коллективного интереса на финансовом рынке.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>Dogecoin, Shiba Inu, Pepe.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Meme coins</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Meme coins</h2>
            <p>Meme coins are cryptocurrencies whose popularity is often based on humor, internet culture and an active community. They can grow quickly in attention thanks to social networks, trends and loyal supporters.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used mainly for trading, community activity, tipping, experiments and speculative interest.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>Their value is often driven more by attention and community support than by complex technology or a large practical ecosystem.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They show how strongly community sentiment and internet culture can influence the crypto market.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>Users buy, hold and exchange meme coins, participate in community events and follow trends around the project.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Meme coins are interesting because they can spread very quickly and turn from a joke into a widely recognized digital asset.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>Dogecoin, Shiba Inu, Pepe.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeUtilityTokens: {
      ruTitle: "Utility-токены",
      enTitle: "Utility tokens",
      ruDescription: "Дают доступ к функциям платформы, сервисам и возможностям проекта.",
      enDescription: "Provide access to platform tools, services and features.",
      ru: `
        <h1 class="page-title">Utility-токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Utility-токены</h2>
            <p>Utility-токены — это токены, которые дают доступ к функциям, услугам или возможностям определённой платформы. Их смысл заключается не только в цене, а в практическом применении внутри проекта.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются на платформах, в приложениях, играх, сервисах, биржах и проектах, где токен открывает доступ к функциям.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — наличие полезной функции. Такой токен может использоваться как пропуск, средство оплаты или инструмент доступа.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны для работы внутренней экономики проекта и мотивации пользователей пользоваться сервисом.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь применяет utility-токен для оплаты услуг, разблокировки функций, участия в программе или получения преимуществ на платформе.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Они интересны тем, что связывают криптовалюту с реальным применением внутри конкретного продукта.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>BNB, BAT, FIL.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Utility tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Utility tokens</h2>
            <p>Utility tokens are digital assets that give access to specific functions of a platform or project. They can be used to pay for services, unlock features or participate in the internal economy of the product.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in applications, services, exchanges, games, decentralized platforms and ecosystems with their own product logic.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>Their main role is practical use inside a project. They are tied to a service, tool or function, not only to speculation.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They help projects build an economy around their product and motivate users to participate more actively.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user holds the token in a wallet and spends or applies it for access, discounts, payments, rewards or activity inside the service.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Utility tokens are interesting because they directly connect a digital asset to the real functions of a platform.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>BNB, BAT, FIL.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeGovernanceTokens: {
      ruTitle: "Governance-токены",
      enTitle: "Governance tokens",
      ruDescription: "Нужны для голосования и участия в управлении проектом.",
      enDescription: "Needed for voting and participation in project management.",
      ru: `
        <h1 class="page-title">Governance-токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Governance-токены</h2>
            <p>Governance-токены дают пользователям возможность участвовать в управлении проектом. Владельцы таких токенов могут голосовать за изменения, новые функции, распределение средств или правила развития платформы.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в DAO, DeFi-проектах, протоколах и сообществах, где решения принимаются участниками.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — право голоса. Чем больше токенов у пользователя, тем больше влияние на решения, если так устроены правила проекта.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны, чтобы проект мог развиваться не только по решению команды, но и с участием сообщества.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь подключает кошелёк, выбирает предложение и голосует токенами за один из вариантов.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что позволяют пользователям быть не просто клиентами, а участниками управления цифровым проектом.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>UNI, AAVE, MKR, COMP.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Governance tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Governance tokens</h2>
            <p>Governance tokens are assets that allow holders to vote on project decisions. With them, users can influence the development of a platform, proposals, settings and the distribution of resources.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in DAO projects, DeFi protocols and communities where decisions are made by token holders.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>Their main function is management rather than payment. The token gives a voice in discussions and voting.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They help create a more decentralized model where users can influence the future of the project instead of relying only on a central team.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user keeps governance tokens in a wallet and uses them to vote on proposals, upgrades and changes in the ecosystem.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Governance tokens are interesting because they turn active users into real participants in project management.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>UNI, AAVE, MKR, COMP.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typePrivacyCoins: {
      ruTitle: "Privacy-монеты",
      enTitle: "Privacy coins",
      ruDescription: "Ориентированы на повышенную конфиденциальность переводов и данных пользователей.",
      enDescription: "Focus on stronger confidentiality of transactions and user data.",
      ru: `
        <h1 class="page-title">Privacy-монеты</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Privacy-монеты</h2>
            <p>Privacy-монеты — это криптовалюты, которые делают упор на конфиденциальность. Они могут скрывать данные об отправителе, получателе или сумме перевода, чтобы защитить личную финансовую информацию пользователя.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются там, где важна приватность переводов и защита данных о финансовой активности.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Используют специальные криптографические методы, которые усложняют отслеживание операций в сети.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны для защиты конфиденциальности, потому что обычные блокчейны часто открыты: историю операций можно просматривать публично.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь отправляет монету через кошелёк, а сеть применяет механизмы приватности, скрывающие часть данных операции.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что поднимают важный вопрос: насколько финансовая жизнь человека должна быть открытой в цифровом мире.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>Monero, Zcash, Dash.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Privacy coins</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Privacy coins</h2>
            <p>Privacy coins are cryptocurrencies created to improve confidentiality. They use special technologies that make it harder to track transaction details and user balances.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used where people value higher financial privacy, confidential transfers and reduced on-chain transparency.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>They use privacy-focused mechanisms that hide or complicate the visibility of addresses, amounts or transaction links.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They show that privacy is also an important value in the digital economy, especially for users who do not want all activity to be publicly visible.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user stores and transfers privacy coins like other assets, but benefits from stronger transaction confidentiality built into the network.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Privacy coins are interesting because they combine blockchain technology with stronger protection of personal financial data.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>Monero, Zcash, Dash.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeExchangeTokens: {
      ruTitle: "Биржевые токены",
      enTitle: "Exchange tokens",
      ruDescription: "Используются внутри криптобирж для скидок, комиссий и дополнительных функций.",
      enDescription: "Issued by exchanges and used for discounts, bonuses and ecosystem functions.",
      ru: `
        <h1 class="page-title">Биржевые токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Биржевые токены</h2>
            <p>Биржевые токены выпускаются криптовалютными биржами или торговыми платформами. Они обычно используются внутри экосистемы биржи и дают пользователям дополнительные возможности.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются на криптобиржах для оплаты комиссий, получения скидок, участия в акциях и доступа к специальным функциям.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Их ценность часто связана с популярностью биржи, количеством пользователей и полезностью внутри платформы.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны биржам для развития собственной экосистемы, а пользователям — для бонусов и удобной работы на платформе.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь покупает или получает биржевой токен и применяет его для скидок на комиссии, участия в лаунчпадах или внутренних сервисах.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что показывают, как крупные криптоплатформы создают собственную экономику вокруг своих сервисов.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>BNB, OKB, KCS.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Exchange tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Exchange tokens</h2>
            <p>Exchange tokens are digital assets created by cryptocurrency exchanges. They are usually used for trading fee discounts, internal bonuses, launchpad participation or other benefits inside the exchange ecosystem.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used mainly on crypto exchanges for fee discounts, loyalty programs, launchpad access and other platform advantages.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>They are closely linked to a specific exchange and often gain usefulness from the services and audience of that platform.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They help exchanges build their own ecosystem, increase user engagement and create additional value around the platform.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>Users buy and hold exchange tokens in order to reduce fees, join campaigns or use extra features provided by the exchange.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Exchange tokens are interesting because they directly connect a digital asset with the services of a large trading platform.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>BNB, OKB, KCS.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeGameFiTokens: {
      ruTitle: "GameFi-токены",
      enTitle: "GameFi tokens",
      ruDescription: "Применяются в блокчейн-играх, игровых экономиках и цифровых предметах.",
      enDescription: "Used in blockchain games, play-to-earn mechanics and gaming economies.",
      ru: `
        <h1 class="page-title">GameFi-токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>GameFi-токены</h2>
            <p>GameFi-токены используются в блокчейн-играх и игровых экономиках. Они могут быть связаны с персонажами, предметами, наградами, внутренними валютами и торговлей между игроками.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в играх, метавселенных, NFT-проектах, игровых маркетплейсах и виртуальных экономиках.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — связь с игровым процессом. Токен может быть не просто активом, а частью механики игры.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны, чтобы игроки могли владеть цифровыми предметами, получать награды и участвовать во внутренней экономике проекта.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Игрок получает или покупает токены, тратит их на предметы, улучшения, персонажей или использует для торговли с другими участниками.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что объединяют игры, цифровую собственность и криптовалюты в одной системе.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>AXS, SAND, GALA, ILV.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">GameFi tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>GameFi tokens</h2>
            <p>GameFi tokens are digital assets used in blockchain games and play-to-earn systems. They can act as in-game currency, a reward tool or part of the economy behind digital items and characters.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in blockchain games, virtual economies, NFT gameplay, reward systems and gaming communities.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>They combine gaming mechanics with blockchain ownership, allowing players to receive and use digital assets inside the ecosystem.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They help create game economies in which users do not just play, but also own, trade and use digital assets.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>Players earn, buy or spend GameFi tokens for upgrades, rewards, marketplace actions and participation in the game world.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>GameFi tokens are interesting because they connect entertainment, ownership and the crypto economy in one space.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>AXS, SAND, GALA, ILV.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeWrappedTokens: {
      ruTitle: "Wrapped-токены",
      enTitle: "Wrapped tokens",
      ruDescription: "Позволяют использовать актив одной сети внутри другой блокчейн-экосистемы.",
      enDescription: "Represent one asset on another blockchain in tokenized form.",
      ru: `
        <h1 class="page-title">Wrapped-токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Wrapped-токены</h2>
            <p>Wrapped-токены — это цифровые активы, которые представляют монету или токен из другой сети. Они помогают использовать один актив в экосистеме другого блокчейна.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в DeFi, обменниках, мостах между сетями и сервисах, где нужно перенести ликвидность из одной сети в другую.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Обычно такой токен обеспечен исходным активом. Например, wrapped-версия Bitcoin может использоваться в сети Ethereum.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны для совместимости разных блокчейнов и расширения применения популярных активов.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь блокирует исходный актив через специальный механизм, а в другой сети получает его wrapped-версию.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что помогают разным блокчейнам взаимодействовать между собой, а не существовать полностью отдельно.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>WBTC, WETH.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Wrapped tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Wrapped tokens</h2>
            <p>Wrapped tokens are assets that represent another coin on a different blockchain. They make it possible to use the value of one asset inside another ecosystem in a convenient tokenized form.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in DeFi protocols, exchanges and applications that need an asset from one network to function on another.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>A wrapped token mirrors the value of the original asset, while giving access to another blockchain’s tools and liquidity.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They improve interoperability between ecosystems and make it easier to move value into different applications.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>A user receives or buys a wrapped asset and then uses it on another network for trading, lending, liquidity or other actions.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Wrapped tokens are interesting because they help different blockchains interact more flexibly with one another.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>WBTC, WETH.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeOracleTokens: {
      ruTitle: "Oracle-токены",
      enTitle: "Oracle tokens",
      ruDescription: "Связаны с сервисами, которые передают внешние данные в децентрализованные приложения.",
      enDescription: "Linked to services that deliver external data to blockchains.",
      ru: `
        <h1 class="page-title">Oracle-токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Oracle-токены</h2>
            <p>Oracle-токены связаны с проектами, которые передают внешние данные в децентрализованные приложения. Такие данные могут включать цены активов, результаты событий, курсы валют или другую информацию из реального мира.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в DeFi, страховании, прогнозных рынках, смарт-приложениях и сервисах, которым нужны данные вне блокчейна.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — связь блокчейна с внешним миром. Без оракулов многие приложения не смогли бы автоматически реагировать на реальные события.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны, чтобы децентрализованные приложения могли получать достоверную информацию и выполнять действия на её основе.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Оракул получает данные из внешних источников, проверяет их и передаёт в приложение, а токен может использоваться внутри этой системы.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что делают блокчейн-приложения более полезными и приближают их к реальным задачам.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>Chainlink, Band Protocol, API3.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Oracle tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Oracle tokens</h2>
            <p>Oracle tokens are associated with projects that supply blockchains with information from the outside world. This data may include asset prices, exchange rates, sports results, weather information or API signals.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in DeFi, smart contracts, prediction markets, insurance solutions and applications that need external data.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>They are tied to oracle networks that bridge blockchain systems with real-world information.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>Without oracles, many smart contracts could not respond to prices or events outside the blockchain.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>Developers integrate oracle services into applications, while users interact with products that depend on those trusted data feeds.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Oracle tokens are interesting because they connect blockchains with real-world information and expand what decentralized applications can do.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>Chainlink, Band Protocol, API3.</p></div>
            </div>
          </div>
        </div>
      `
    },

    typeMetaverseTokens: {
      ruTitle: "Метавселенские токены",
      enTitle: "Metaverse tokens",
      ruDescription: "Используются в виртуальных мирах, цифровой недвижимости и онлайн-пространствах.",
      enDescription: "Used in virtual worlds, digital ownership and metaverse projects.",
      ru: `
        <h1 class="page-title">Метавселенские токены</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Метавселенские токены</h2>
            <p>Метавселенские токены используются в виртуальных мирах и онлайн-пространствах. Они могут быть связаны с цифровой землёй, аватарами, предметами, событиями и внутренней экономикой платформы.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Где используются</h3><p>Используются в метавселенных, виртуальных мирах, онлайн-играх, цифровых маркетплейсах и социальных пространствах.</p></div>
              <div class="type-info-card"><h3>Особенности</h3><p>Home особенность — связь с виртуальной средой, где пользователь может владеть цифровыми объектами и участвовать в экономике платформы.</p></div>
              <div class="type-info-card"><h3>Зачем нужны</h3><p>Они нужны для покупки предметов, земли, доступа к событиям, оплаты услуг и развития внутреннего рынка виртуального мира.</p></div>
              <div class="type-info-card"><h3>Как используются</h3><p>Пользователь покупает токен, хранит его в кошельке и применяет внутри виртуальной платформы для покупок или участия в активности.</p></div>
              <div class="type-info-card"><h3>Чем интересны</h3><p>Интересны тем, что показывают, как криптовалюты могут использоваться не только в финансах, но и в развлечениях, общении и цифровой собственности.</p></div>
              <div class="type-info-card type-examples-card"><h3>Примеры</h3><p>MANA, SAND, APE.</p></div>
            </div>
          </div>
        </div>
      `,
      en: `
        <h1 class="page-title">Metaverse tokens</h1>
        <div class="type-detail-wrap">
          <div class="type-detail-box crypto-type-info-box">
            <h2>Metaverse tokens</h2>
            <p>Metaverse tokens are digital assets used in virtual worlds and metaverse ecosystems. They can be related to land, digital items, governance, payments or participation in virtual communities.</p>
            <div class="type-info-grid">
              <div class="type-info-card"><h3>Where they are used</h3><p>Used in virtual worlds, NFT marketplaces, digital ownership systems, online communities and metaverse platforms.</p></div>
              <div class="type-info-card"><h3>Key features</h3><p>They are connected with virtual environments and often support the economy of digital spaces, events and user interaction.</p></div>
              <div class="type-info-card"><h3>Why they matter</h3><p>They help build ownership and economic activity inside online worlds, where users can buy, sell and use digital goods.</p></div>
              <div class="type-info-card"><h3>How they are used</h3><p>Users store metaverse tokens in wallets and spend or apply them for purchases, services, access and participation in virtual projects.</p></div>
              <div class="type-info-card"><h3>Why they are interesting</h3><p>Metaverse tokens are interesting because they combine digital ownership, virtual culture and crypto economics.</p></div>
              <div class="type-info-card type-examples-card"><h3>Examples</h3><p>MANA, SAND, APE.</p></div>
            </div>
          </div>
        </div>
      `
    },

  };

  Object.assign(pages, typePages);

  const pageGroups = [
    {
      name: "About cryptocurrencies",
      pages: ["whatCrypto", "cryptoHistory", "cryptoTypes", "cryptoUse", "cryptoProsCons"]
    },
    {
      name: "Types of cryptocurrencies",
      pages: ["typeCoins", "typeTokens", "typeStablecoins", "typeMemeCoins", "typeUtilityTokens", "typeGovernanceTokens", "typePrivacyCoins", "typeExchangeTokens", "typeGameFiTokens", "typeWrappedTokens", "typeOracleTokens", "typeMetaverseTokens"]
    },
    {
      name: "Новичку",
      pages: ["beginnerStart", "firstBuy"]
    },
    {
      name: "Popular coins",
      pages: ["bitcoin", "ethereum", "usdt", "solana", "coinCompare"]
    },
    {
      name: "Blockchain",
      pages: ["blockchainMain", "transactions", "mining", "smartContracts"]
    },
    {
      name: "Безопасность",
      pages: ["securityMain", "scam", "passwords", "safeStorage"]
    },
    {
      name: "Полезные материалы",
      pages: ["links"]
    }
  ];


  const newsFallback = {
    ru: [
      {
        title: "Рынок криптовалют продолжает активно развиваться",
        body: "Если онлайн-новости временно недоступны, сайт показывает резервные карточки. При наличии интернета раздел автоматически загрузит свежие материалы.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000)
      },
      {
        title: "Bitcoin, Ethereum и другие монеты остаются в центре внимания",
        body: "Пользователи всё чаще интересуются цифровыми активами, блокчейном, безопасностью и практическим применением криптовалют.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000) - 3600
      },
      {
        title: "Безопасность остаётся важной темой для новичков",
        body: "Перед работой с криптовалютами важно проверять адреса сайтов, защищать seed-фразу и не переходить по подозрительным ссылкам.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000) - 7200
      }
    ],
    en: [
      {
        title: "The cryptocurrency market continues to develop",
        body: "If online news is temporarily unavailable, the website shows backup cards. With an internet connection, this section loads fresh articles automatically.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000)
      },
      {
        title: "Bitcoin, Ethereum and other coins remain in focus",
        body: "Users are increasingly interested in digital assets, blockchain, security and practical cryptocurrency use cases.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000) - 3600
      },
      {
        title: "Security remains important for beginners",
        body: "Before using cryptocurrencies, it is important to check website addresses, protect seed phrases and avoid suspicious links.",
        url: "https://www.cryptocompare.com/",
        published_on: Math.floor(Date.now() / 1000) - 7200
      }
    ]
  };

  function formatNewsDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function cleanNewsText(text, limit = 170) {
    const div = document.createElement("div");
    div.innerHTML = text || "";
    const clean = div.textContent.replace(/\s+/g, " ").trim();
    if (clean.length <= limit) return clean;
    return clean.slice(0, limit).trim() + "...";
  }

  function renderCryptoNews(newsList) {
    const newsGrid = document.getElementById("cryptoNewsGrid");
    if (!newsGrid) return;

    newsGrid.innerHTML = "";

    newsList.slice(0, 3).forEach(item => {
      const card = document.createElement("div");
      card.className = "news-card";

      const title = cleanNewsText(item.title, 90);
      const body = cleanNewsText(item.body || item.description || item.summary, 175);
      const date = formatNewsDate(item.published_on || Math.floor(Date.now() / 1000));
      const url = item.url || "https://www.cryptocompare.com/";

      card.innerHTML = `
        <span class="news-date">${date}</span>
        <h3>${title}</h3>
        <p>${body}</p>
        <a class="news-link" href="${url}" target="_blank" rel="noopener noreferrer">
          ${currentLang === "ru" ? "Читать источник" : "Read source"}
        </a>
      `;

      newsGrid.appendChild(card);
    });
  }

  async function loadCryptoNews() {
    const newsGrid = document.getElementById("cryptoNewsGrid");
    if (!newsGrid) return;

    const lang = currentLang === "ru" ? "EN" : "EN";
    const apiUrl = `https://min-api.cryptocompare.com/data/v2/news/?lang=${lang}`;

    try {
      const response = await fetch(apiUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("News request failed");

      const data = await response.json();
      const news = Array.isArray(data.Data) ? data.Data : [];
      if (news.length === 0) throw new Error("Empty news list");

      renderCryptoNews(news);
    } catch (error) {
      renderCryptoNews(newsFallback[currentLang]);
    }
  }

  function applyLanguageToStaticText() {
    const t = uiText[currentLang];

    document.getElementById("searchInput").placeholder = t.search;
    document.getElementById("footerText").textContent = t.footer;

    const ids = [
      "navHome", "navInfo", "navCoins", "navBlockchain", "navBeginnerMaterials",
      "dropTerms", "dropHistory", "dropTypes", "dropUse", "dropProsCons",
      "dropStart", "dropFirstBuy", "dropMistakes", "dropCompare",
      "dropBlockchainMain", "dropTransactions", "dropMining", "dropSmart",
      "dropLinks"
    ];

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element && t[id]) {
        element.textContent = t[id];
      }
    });
  }

  
  function toggleInfoCard(card) {
    if (!card) return;
    card.classList.toggle("active");
    const label = card.querySelector(".click-info-title span");
    if (label) {
      if (card.classList.contains("active")) {
        label.textContent = currentLang === "ru" ? "Скрыть" : "Hide";
      } else {
        label.textContent = currentLang === "ru" ? "Подробнее" : "Details";
      }
    }
  }


  const homeCryptoFallbackData = [
    { market_cap_rank: 1, name: "Bitcoin", symbol: "btc", current_price: 77022.33, price_change_percentage_24h: 3.17, price_change_percentage_7d_in_currency: -1.85, market_cap: 1543044799561, image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", sparkline_in_7d: { price: [73500,74200,74800,75100,76000,75500,77022] } },
    { market_cap_rank: 2, name: "Ethereum", symbol: "eth", current_price: 2118.70, price_change_percentage_24h: 4.49, price_change_percentage_7d_in_currency: -3.47, market_cap: 255696748563, image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", sparkline_in_7d: { price: [2050,2070,2060,2100,2140,2110,2118] } },
    { market_cap_rank: 3, name: "Tether", symbol: "usdt", current_price: 0.9987, price_change_percentage_24h: -0.01, price_change_percentage_7d_in_currency: -0.10, market_cap: 189478645864, image: "https://assets.coingecko.com/coins/images/325/large/Tether.png", sparkline_in_7d: { price: [1,0.999,1.001,0.998,0.999,1,0.9988] } },
    { market_cap_rank: 4, name: "BNB", symbol: "bnb", current_price: 659.78, price_change_percentage_24h: 3.28, price_change_percentage_7d_in_currency: 0.81, market_cap: 88928778403, image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png", sparkline_in_7d: { price: [635,642,650,648,655,661,659] } },
    { market_cap_rank: 5, name: "XRP", symbol: "xrp", current_price: 1.36, price_change_percentage_24h: 3.62, price_change_percentage_7d_in_currency: -4.13, market_cap: 84468137046, image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", sparkline_in_7d: { price: [1.42,1.39,1.38,1.35,1.37,1.34,1.36] } },
    { market_cap_rank: 6, name: "Solana", symbol: "sol", current_price: 86.27, price_change_percentage_24h: 4.96, price_change_percentage_7d_in_currency: -0.96, market_cap: 49877014228, image: "https://assets.coingecko.com/coins/images/4128/large/solana.png", sparkline_in_7d: { price: [84,86,85,88,87,85,86.27] } }
  ];

  function homeFormatCurrency(value) {
    if (value === null || value === undefined || isNaN(value)) return "—";
    return new Intl.NumberFormat(currentLang === "ru" ? "ru-RU" : "en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: value < 1 ? 4 : 2
    }).format(value);
  }

  function homeFormatMarketCap(value) {
    if (value === null || value === undefined || isNaN(value)) return "—";
    return "$" + Math.round(value).toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US");
  }

  function homeFormatPercent(value) {
    if (value === null || value === undefined || isNaN(value)) return '<span class="home-market-neutral">0.0%</span>';
    const cls = value >= 0 ? "home-market-up" : "home-market-down";
    const sign = value >= 0 ? "▲" : "▼";
    return `<span class="${cls}">${sign} ${Math.abs(value).toFixed(2)}%</span>`;
  }

  
  function buildHomeSparkline(points, change) {
    if (!points || !points.length) {
      return '<div class="home-sparkline-empty">—</div>';
    }

    const clean = points.filter((value) => typeof value === "number" && !isNaN(value));
    if (clean.length < 2) {
      return '<div class="home-sparkline-empty">—</div>';
    }

    const width = 120;
    const height = 38;
    const min = Math.min(...clean);
    const max = Math.max(...clean);
    const range = max - min || 1;

    const coords = clean.map((value, index) => {
      const x = (index / (clean.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 6) - 3;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");

    const cls = change >= 0 ? "home-sparkline-up" : "home-sparkline-down";

    return `
      <svg class="home-sparkline ${cls}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="price chart">
        <polyline points="${coords}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
      </svg>
    `;
  }


function renderHomeCryptoRates(data, isFallback = false) {
    const body = document.getElementById("homeCryptoRatesBody");
    const status = document.getElementById("homeMarketStatus");
    if (!body) return;

    body.innerHTML = data.slice(0, 6).map((coin) => `
      <tr>
        <td>${coin.market_cap_rank || "—"}</td>
        <td>
          <div class="home-market-coin">
            <img src="${coin.image}" alt="${coin.name}">
            <div>
              <strong>${coin.name}</strong>
              <span>${String(coin.symbol || "").toUpperCase()}</span>
            </div>
          </div>
        </td>
        <td>${homeFormatCurrency(coin.current_price)}</td>
        <td>${homeFormatPercent(coin.price_change_percentage_24h)}</td>
        <td>${homeFormatPercent(coin.price_change_percentage_7d_in_currency)}</td>
        <td>${homeFormatMarketCap(coin.market_cap)}</td>
        <td>${buildHomeSparkline(coin.sparkline_in_7d && coin.sparkline_in_7d.price, coin.price_change_percentage_7d_in_currency)}</td>
      </tr>
    `).join("");

    if (status) {
      const now = new Date().toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      status.textContent = isFallback
        ? (currentLang === "ru" ? `Демо-данные, если API недоступен. Попытка обновления: ${now}` : `Demo data if API is unavailable. Update attempt: ${now}`)
        : (currentLang === "ru" ? `Данные обновлены автоматически: ${now}` : `Data updated automatically: ${now}`);
    }
  }

  async function loadHomeCryptoRates() {
    const body = document.getElementById("homeCryptoRatesBody");
    if (body) {
      body.innerHTML = `<tr><td colspan="7">${currentLang === "ru" ? "Загрузка топа криптовалют..." : "Loading top cryptocurrencies..."}</td></tr>`;
    }

    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=true&price_change_percentage=24h,7d");
      if (!response.ok) throw new Error("CoinGecko API error");
      const data = await response.json();
      renderHomeCryptoRates(data, false);
    } catch (error) {
      renderHomeCryptoRates(homeCryptoFallbackData, true);
    }
  }



  function startHomeCryptoRatesAutoload() {
    let attempts = 0;

    function tryLoadRates() {
      const body = document.getElementById("homeCryptoRatesBody");
      if (body && typeof loadHomeCryptoRates === "function") {
        loadHomeCryptoRates();
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        setTimeout(tryLoadRates, 200);
      }
    }

    setTimeout(tryLoadRates, 150);
  }

  document.addEventListener("DOMContentLoaded", function () {
    startHomeCryptoRatesAutoload();
  });

  window.addEventListener("load", function () {
    startHomeCryptoRatesAutoload();
  });



  let homeCryptoRatesInterval = null;

  function startHomeCryptoRatesRealtime() {
    if (homeCryptoRatesInterval) return;

    scheduleHomeCryptoRatesLoad();
    startHomeCryptoRatesRealtime();

    homeCryptoRatesInterval = setInterval(function () {
      if (document.getElementById("homeCryptoRatesBody") && typeof loadHomeCryptoRates === "function") {
        loadHomeCryptoRates();
      }
    }, 60000);
  }

  function stopHomeCryptoRatesRealtime() {
    if (homeCryptoRatesInterval) {
      clearInterval(homeCryptoRatesInterval);
      homeCryptoRatesInterval = null;
    }
  }


function openPage(pageId) {
    const app = document.getElementById("app");

    if (!pages[pageId]) {
      pageId = "home";
    }

    currentPage = pageId;
    app.innerHTML = pages[pageId][currentLang];
    if ((typeof pageName !== "undefined" && pageName === "home") || (typeof pageId !== "undefined" && pageId === "home")) startHomeCryptoRatesAutoload();

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.value = "";
    searchResults.style.display = "none";
    searchResults.innerHTML = "";

    updatePageSwitcher(pageId);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updatePageSwitcher(pageId) {
    const switcher = document.getElementById("pageSwitcher");

    if (pageId === "home") {
      switcher.style.display = "none";
      switcher.innerHTML = "";
      return;
    }

    let currentGroup = null;

    for (let i = 0; i < pageGroups.length; i++) {
      if (pageGroups[i].pages.includes(pageId)) {
        currentGroup = pageGroups[i];
        break;
      }
    }

    if (!currentGroup) {
      switcher.style.display = "none";
      switcher.innerHTML = "";
      return;
    }

    const currentIndex = currentGroup.pages.indexOf(pageId);
    const prevPage = currentGroup.pages[currentIndex - 1];
    const nextPage = currentGroup.pages[currentIndex + 1];

    switcher.style.display = "flex";

    switcher.innerHTML = `
      <button class="switch-btn" ${prevPage ? `onclick="openPage('${prevPage}')"` : "disabled"}>←</button>
      <button class="switch-btn" ${nextPage ? `onclick="openPage('${nextPage}')"` : "disabled"}>→</button>
    `;
  }

  function searchPages() {
    const input = document.getElementById("searchInput");
    const resultsBox = document.getElementById("searchResults");
    const query = input.value.toLowerCase().trim();
    const t = uiText[currentLang];

    resultsBox.innerHTML = "";

    if (query.length === 0) {
      resultsBox.style.display = "none";
      return;
    }

    function stripHtml(value) {
      return String(value || "")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    const menuAliases = {
      whatCrypto: ["Основные термины", "Basic terms", "термины", "terms"],
      cryptoHistory: ["История криптовалют", "History of cryptocurrencies", "история"],
      cryptoTypes: ["Виды криптовалют", "Types of cryptocurrencies", "виды"],
      cryptoUse: ["Где используются криптовалюты", "Where cryptocurrencies are used", "использование"],
      cryptoProsCons: ["Преимущества и недостатки криптовалют", "Advantages and disadvantages of cryptocurrencies", "преимущества", "недостатки"],
      beginnerStart: ["С чего начать", "Where to start", "новичку"],
      firstBuy: ["Первая покупка криптовалюты", "First cryptocurrency purchase", "покупка"],
      typicalMistakes: ["Типичные ошибки и безопасность пользователя", "Common mistakes and user safety", "безопасность", "ошибки"],
      links: ["Полезные ссылки", "Useful links", "ссылки"],
      coinCompare: ["Другие монеты", "Other coins"],
      blockchainMain: ["Что такое блокчейн", "Блокчейн", "What is blockchain", "Blockchain"],
      transactions: ["Транзакции", "Transactions"],
      mining: ["Майнинг", "Mining"],
      smartContracts: ["Смарт-контракты", "Smart contracts"],
      bitcoin: ["Bitcoin", "Биткоин"],
      ethereum: ["Ethereum", "Эфириум"],
      usdt: ["USDT", "Tether"],
      solana: ["Solana", "Солана"]
    };

    const results = Object.keys(pages)
      .map(id => {
        const title = pages[id][currentLang + "Title"] || "";
        const description = pages[id][currentLang + "Description"] || "";
        const content = stripHtml(pages[id][currentLang] || "");
        const aliases = (menuAliases[id] || []).join(" ");
        const titleText = `${title} ${aliases}`.toLowerCase();
        const descText = String(description || "").toLowerCase();
        const contentText = String(content || "").toLowerCase();

        let score = 0;
        if (titleText === query) score += 1000;
        if (titleText.includes(query)) score += 600;
        if (descText.includes(query)) score += 220;
        if (contentText.includes(query)) score += 80;

        const words = query.split(/\s+/).filter(Boolean);
        words.forEach(word => {
          if (titleText.includes(word)) score += 60;
          if (descText.includes(word)) score += 25;
          if (contentText.includes(word)) score += 8;
        });

        return { id, title, description, score };
      })
      .filter(page => page.score > 0)
      .sort((a, b) => b.score - a.score);

    resultsBox.style.display = "block";

    if (results.length === 0) {
      resultsBox.innerHTML = `<div class="no-results">${t.noResults}</div>`;
      return;
    }

    results.slice(0, 12).forEach(page => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <h4>${page.title}</h4>
        <p>${page.description}</p>
      `;
      item.onclick = function() {
        openPage(page.id);
        resultsBox.style.display = "none";
        input.value = "";
      };
      resultsBox.appendChild(item);
    });
  }

  function toggleTerm(element) {
    if (!element || !element.classList.contains("term-toggle")) return;
    element.classList.toggle("active");
  }

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      localStorage.setItem("cryptoWorldTheme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("cryptoWorldTheme", "light");
    }
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem("cryptoWorldTheme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("cryptoWorldLang", lang);
    document.documentElement.lang = lang;
    applyLanguageToStaticText();
    openPage(currentPage);
  }

  document.addEventListener("click", function(event) {
    const searchBox = document.querySelector(".search-box");
    const resultsBox = document.getElementById("searchResults");

    if (!searchBox.contains(event.target)) {
      resultsBox.style.display = "none";
    }
  });

  loadTheme();
  applyLanguageToStaticText();
  openPage("home");
