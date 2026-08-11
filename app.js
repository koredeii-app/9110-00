const app = document.getElementById("app");

const historyStack = [];

/*
  メニューアイコン
*/
const icons = {
  child: "icons/menu/child.png",
  question: "icons/menu/question.png",
  disaster: "icons/menu/disaster.png",
  emergency: "icons/menu/emergency.png",
  phone: "icons/menu/phone.png"
};

/*
  画面データ
*/
const screens = {

  /*
    トップ
  */
  start: {

    question:
      "今必要なものを選んでください",

    description:
      "迷っている場合でも、近いものを選んでください。",

    options: [

      {
        text: "子ども",
        description:
          "体調・虐待・家庭の不安",
        color: "#43a047",
        icon: "child",
        next: "children"
      },

      {
        text: "相談・迷った時",
        description:
          "緊急か分からない時",
        color: "#546e7a",
        icon: "question",
        next: "consult"
      },

      {
        text: "災害",
        description:
          "安否確認・災害時の連絡",
        color: "#8e24aa",
        icon: "disaster",
        next: "disaster"
      },

      {
        text: "緊急",
        description:
          "事件・事故・火災など",
        color: "#e53935",
        icon: "emergency",
        next: "emergency"
      },

      {
        text: "その他・お問い合わせ",
        description:
          "電話の故障・電報・NTTへの問い合わせなど",
        color: "#1e88e5",
        icon: "phone",
        next: "practice"
      }

    ]
  },

  /*
    子ども
  */
  children: {

    question:
      "子どもについて",

    description:
      "近い内容を選んでください。",

    options: [

      {
        number: "#8000",
        text: "子どもの体調相談",
        description:
          "夜間・休日の体調相談",
        color: "#26a69a",
        next: "call8000"
      },

      {
        number: "189",
        text: "児童相談所",
        description:
          "虐待・家庭・子育て相談",
        color: "#43a047",
        next: "call189"
      },

      {
        number: "0120-99-7777",
        text: "チャイルドライン",
        description:
          "18歳までの子ども専用電話",
        color: "#29b6f6",
        next: "callchildline"
      },

      {
        number: "0120-0-78310",
        text: "24時間子供SOSダイヤル",
        description:
          "いじめなど子供のSOS全般の相談",
        color: "#ff8f00",
        next: "call78310"
      },

      {
        number: "0120-007-110",
        text: "こどもの人権110番",
        description:
          "いじめ・虐待など人権に関する相談",
        color: "#5d4037",
        next: "callkodomo110"
      }

    ]
  },

/*
  #8000
*/
call8000: {

  question:
    "子ども医療電話相談 #8000",

  description:
    "夜間や休日の子どもの症状について相談できます。\n病院へ行くべきか迷った時にも利用できます。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります",
    "受付時間は地域によって異なります"
  ],

  options: [
    {
      number: "#8000",
      text: "電話する",
      description:
        "子ども医療相談",
      color: "#26a69a",
      tel: "#8000"
    }
  ],

  afterLinks: [
    {
      text: "厚生労働省の公式情報を見る",
      url:
        "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/newpage_55223.html"
    }
  ]
},

/*
  189
*/
call189: {

  question:
    "児童相談所虐待対応ダイヤル 189",

  description:
    "子どもに関する悩みや虐待について相談できます。\n匿名でも相談可能です。\n整理できていなくても相談できます。",

  notes: [
    "24時間対応",
    "通話料無料"
  ],

  options: [
    {
      number: "189",
      text: "電話する",
      description:
        "児童相談所へつながります",
      color: "#43a047",
      tel: "189"
    }
  ],

  afterLinks: [
    {
      text: "こども家庭庁の公式情報を見る",
      url:
        "https://www.cfa.go.jp/policies/jidougyakutai/gyakutai-taiou-dial"
    }
  ]
},

  /*
    相談・迷った時
  */
  consult: {

    question:
      "相談・迷った時",

    description:
      "緊急か分からない場合の相談先です。",

    options: [

      {
        number: "#7119",
        text: "救急相談",
        description:
          "救急車を呼ぶか迷った時",
        color: "#ef5350",
        next: "call7119"
      },

      {
        number: "#9110",
        text: "警察相談",
        description:
          "緊急ではない、事件か分からない時など",
        color: "#546e7a",
        next: "call9110"
      },

      {
        number: "#8103",
        text: "警察相談",
        description:
          "性犯罪被害相談電話",
        color: "#546e7a",
        next: "call8103"
      },

      {
        number: "#8891",
        text: "医療・支援",
        description:
          "性犯罪・性暴力被害者のためのワンストップ支援センター",
        color: "#6FA8DC",
        next: "call8891"
      },

      {
        number: "#8008",
        text: "DV相談ナビ",
        description:
          "配偶者・パートナーからの暴力の相談",
        color: "#ab47bc",
        next: "call8008"
      },

      {
        number: "188",
        text: "消費者トラブル",
        description:
          "契約・詐欺・悪質商法",
        color: "#fb8c00",
        next: "call188"
      },

      {
        number: "0120-061-338",
        text: "＃いのちSOS",
        description:
          "死にたい気持ちの相談",
        color: "#5c6bc0",
        next: "callinochisos"
      },

      {
        number: "0120-279-338",
        text: "よりそいホットライン",
        description:
          "暮らしの悩み全般の相談（外国語対応も）",
        color: "#00acc1",
        next: "callyorisoi"
      },

      {
        number: "0120-783-556",
        text: "いのちの電話",
        description:
          "つらい気持ちの相談（全国ネットワーク）",
        color: "#8d6e63",
        next: "callinochinodenwa"
      },

      {
        number: "0570-064-556",
        text: "こころの健康相談統一ダイヤル",
        description:
          "最寄りの公的相談窓口に自動接続",
        color: "#7cb342",
        next: "callkokoro556"
      }

    ]
  },

/*
  #7119
*/
call7119: {

  question:
    "救急相談センター #7119",

  description:
    "救急車を呼ぶべきか迷った時に相談できます。\n急病やケガの相談も可能です。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります",
    "一部地域では未対応です"
  ],

  options: [
    {
      number: "#7119",
      text: "電話する",
      description:
        "救急相談センター",
      color: "#ef5350",
      tel: "#7119"
    }
  ],

  afterLinks: [
    {
      text: "総務省消防庁の公式情報を見る",
      url:
        "https://www.fdma.go.jp/mission/enrichment/appropriate/appropriate007.html"
    }
  ]
},

/*
  #9110
*/
call9110: {

  question:
    "警察相談専用電話 #9110",

  description:
    "緊急ではない不安やトラブルを相談できます。\n事件か分からない場合でも相談可能です。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります",
    "受付時間は地域によって異なります"
  ],

  options: [
    {
      number: "#9110",
      text: "電話する",
      description:
        "警察相談専用電話",
      color: "#546e7a",
      tel: "#9110"
    }
  ],

  afterLinks: [
    {
      text: "警視庁の公式情報を見る",
      url:
        "https://www.keishicho.metro.tokyo.lg.jp/jiken_jiko/110/110_9110.html"
    }
  ]
},

/*
  #8891
*/
call8891: {

  question:
    "性犯罪・性暴力被害者 ワンストップ支援センター",

  description:
    "性犯罪・性暴力被害者が医療的支援・相談・法的支援を受けられます。\n年齢性別問わず相談できます。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります",
    "受付時間は地域によって異なります"
  ],

  options: [
    {
      number: "#8891",
      text: "電話する",
      description:
        "ワンストップ支援センター",
      color: "#6a1b9a",
      tel: "#8891"
    }
  ],

  afterLinks: [
    {
      text: "全国共通の電話番号",
      url:
        "https://www.gender.go.jp/policy/no_violence/seibouryoku/consult.html"
    }
  ]

},

/*
  #8008
*/
call8008: {

  question:
    "DV相談ナビ #8008",

  description:
    "配偶者やパートナーからの暴力について相談できます。\n電話番号から最寄りの都道府県の相談機関に自動転送されます。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります",
    "受付時間は相談機関によって異なります"
  ],

  options: [
    {
      number: "#8008",
      text: "電話する",
      description:
        "DV相談ナビ",
      color: "#ab47bc",
      tel: "#8008"
    }
  ],

  afterLinks: [
    {
      text: "内閣府男女共同参画局の公式情報を見る",
      url:
        "https://www.gender.go.jp/policy/no_violence/dv_navi/index.html"
    }
  ]

},

/*
  #8103
*/
call8103: {

  question:
    "性犯罪被害相談電話 #8103",

  description:
    "性犯罪被害について警察に相談できます。\n年齢性別問わず相談できます。\n整理できていなくても相談できます。",

  notes: [
    "24時間対応",
    "通話料がかかります"
  ],

  options: [
    {
      number: "#8103",
      text: "電話する",
      description:
        "性犯罪被害相談電話",
      color: "#546e7a",
      tel: "#8103"
    }
  ],

  afterLinks: [
    {
      text: "警察庁の公式情報を見る",
      url:
        "https://www.npa.go.jp/higaisya/seihanzai/seihanzai.html"
    }
  ]
},

/*
  188
*/
call188: {

  question:
    "消費者ホットライン 188",

  description:
    "契約トラブルや悪質商法などを相談できます。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります"
  ],

  options: [
    {
      number: "188",
      text: "電話する",
      description:
        "消費生活相談窓口",
      color: "#fb8c00",
      tel: "188"
    }
  ],

  afterLinks: [
    {
      text: "消費者庁の公式情報を見る",
      url:
        "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/"
    }
  ]
},

/*
  ＃いのちSOS
*/
callinochisos: {

  question:
    "＃いのちSOS",

  description:
    "「死にたい」「消えたい」「生きることに疲れた」といった気持ちを、専門相談員が受け止めます。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料",
    "対応時間は曜日によって異なります（詳細は公式サイト参照）"
  ],

  options: [
    {
      number: "0120-061-338",
      text: "電話する",
      description:
        "＃いのちSOS",
      color: "#5c6bc0",
      tel: "0120-061-338"
    }
  ],

  afterLinks: [
    {
      text: "NPO法人ライフリンクの公式情報を見る",
      url:
        "https://www.lifelink.or.jp/inochisos/"
    }
  ]
},

/*
  よりそいホットライン
*/
callyorisoi: {

  question:
    "よりそいホットライン",

  description:
    "暮らしの中のさまざまな悩みを相談できます。DV・性暴力、外国語相談、性的指向や性自認の相談などにも対応しています。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料",
    "24時間対応",
    "福島県は0120-279-226"
  ],

  options: [
    {
      number: "0120-279-338",
      text: "電話する",
      description:
        "よりそいホットライン",
      color: "#00acc1",
      tel: "0120-279-338"
    }
  ],

  afterLinks: [
    {
      text: "社会的包摂サポートセンターの公式情報を見る",
      url:
        "https://www.since2011.net/yorisoi/"
    }
  ]
},

/*
  いのちの電話
*/
callinochinodenwa: {

  question:
    "いのちの電話",

  description:
    "つらい気持ちや孤独感などを相談できます。全国の「いのちの電話」ネットワークが対応します。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料（フリーダイヤル）",
    "毎日16時〜21時",
    "毎月10日は8時〜翌日8時"
  ],

  options: [
    {
      number: "0120-783-556",
      text: "電話する",
      description:
        "いのちの電話",
      color: "#8d6e63",
      tel: "0120-783-556"
    }
  ],

  afterLinks: [
    {
      text: "日本いのちの電話連盟の公式情報を見る",
      url:
        "https://inochinodenwa.org/"
    }
  ]
},

/*
  こころの健康相談統一ダイヤル
*/
callkokoro556: {

  question:
    "こころの健康相談統一ダイヤル",

  description:
    "全国共通の電話番号から、お住まいの都道府県・政令指定都市の心の健康相談窓口につながります。\n整理できていなくても相談できます。",

  notes: [
    "通話料がかかります（ナビダイヤル）",
    "平日9時〜21時、土日祝10時〜16時",
    "年末年始（12/29〜1/3）を除く"
  ],

  options: [
    {
      number: "0570-064-556",
      text: "電話する",
      description:
        "こころの健康相談統一ダイヤル",
      color: "#7cb342",
      tel: "0570-064-556"
    }
  ],

  afterLinks: [
    {
      text: "厚生労働省「まもろうよ こころ」を見る",
      url:
        "https://www.mhlw.go.jp/mamorouyokokoro/"
    }
  ]
},

/*
  チャイルドライン
*/
callchildline: {

  question:
    "チャイルドライン",

  description:
    "18歳までの子どもが、どんなことでも相談できる電話です。名前は言わなくても大丈夫です。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料",
    "毎日16時〜21時",
    "18歳までの子ども専用"
  ],

  options: [
    {
      number: "0120-99-7777",
      text: "電話する",
      description:
        "チャイルドライン",
      color: "#29b6f6",
      tel: "0120-99-7777"
    }
  ],

  afterLinks: [
    {
      text: "チャイルドラインの公式情報を見る",
      url:
        "https://childline.or.jp/tel"
    }
  ]
},

/*
  24時間子供SOSダイヤル
*/
call78310: {

  question:
    "24時間子供SOSダイヤル",

  description:
    "いじめなど、子供のSOS全般について24時間いつでも相談できます。都道府県・指定都市教育委員会が運営しています。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料",
    "24時間対応",
    "匿名で相談可能"
  ],

  options: [
    {
      number: "0120-0-78310",
      text: "電話する",
      description:
        "24時間子供SOSダイヤル",
      color: "#ff8f00",
      tel: "0120-0-78310"
    }
  ],

  afterLinks: [
    {
      text: "文部科学省の公式情報を見る",
      url:
        "https://www.mext.go.jp/ijime/detail/dial.htm"
    }
  ]
},

/*
  こどもの人権110番
*/
callkodomo110: {

  question:
    "こどもの人権110番",

  description:
    "いじめや体罰、暴言、家庭内の虐待など、子どもの人権に関する相談ができます。子どもだけでなく、子どものことで悩む大人からの相談もできます。\n整理できていなくても相談できます。",

  notes: [
    "通話料無料",
    "平日8:30〜17:15",
    "法務局・人権擁護委員が対応"
  ],

  options: [
    {
      number: "0120-007-110",
      text: "電話する",
      description:
        "こどもの人権110番",
      color: "#5d4037",
      tel: "0120-007-110"
    }
  ],

  afterLinks: [
    {
      text: "法務省の公式情報を見る",
      url:
        "https://www.moj.go.jp/JINKEN/jinken112.html"
    }
  ]
},

  /*
    災害
  */
  disaster: {

    question:
      "災害",

    description:
      "災害時の連絡や安否確認です。",

    options: [

      {
        number: "171",
        text: "災害用伝言ダイヤル",
        description:
          "安否確認",
        color: "#8e24aa",
        next: "call171"
      }

    ]
  },

  /*
    171
  */
call171: {

  question:
    "171 災害用伝言ダイヤル",

  description:
    "災害時に安否確認ができるサービスです。\n体験利用日には操作確認も可能です。",

  notes: [
    "通話料がかかります",
    "体験利用日あり"
  ],

  links: [

    {
      text: "171の使い方を見る",
      url:
        "https://www.ntt-east.co.jp/saigai/voice171/index.html"
    },

    {
      text: "171 体験利用日を見る",
      url:
        "https://www.ntt-east.co.jp/saigai/voice171s/howto.html"
    },

    {
      text: "web171 災害用伝言板",
      url:
        "https://group.ntt/jp/disaster/service/web171.html"
    }

  ],

  options: [
    {
      number: "171",
      text: "電話する",
      description:
        "災害用伝言ダイヤル",
      color: "#8e24aa",
      tel: "171"
    }
  ]
},

  /*
    緊急
  */
  emergency: {

    question:
      "緊急通報",

    description:
      "命の危険、火災、事故、犯罪進行中など。",

    options: [

      {
        number: "110",
        text: "警察",
        description:
          "事件・事故・犯罪",
        color: "#e53935",
        next: "call110"
      },

      {
        number: "119",
        text: "救急・火災",
        description:
          "火災・救急車",
        color: "#d81b60",
        next: "call119"
      },

      {
        number: "118",
        text: "海上保安庁",
        description:
          "海での事件・事故",
        color: "#00897b",
        next: "call118"
      }

    ]
  },

  /*
    110
  */
  call110: {

    question:
      "110 警察への緊急通報",

    description:
      "犯罪、事故、危険が迫っている場合に使用します。",

    notes: [
      "24時間対応",
      "通話料無料"
    ],

    options: [
      {
        number: "110",
        text: "電話する",
        description:
          "警察へ緊急通報",
        color: "#e53935",
        tel: "110"
      }
    ],

    afterLinks: [
      {
        text: "警視庁の公式情報を見る",
        url:
          "https://www.keishicho.metro.tokyo.lg.jp/jiken_jiko/110/110_110.html"
      }
    ]
  },

  /*
    119
  */
  call119: {

    question:
      "119 救急・火災",

    description:
      "火災、重大な怪我、意識がない場合などに使用します。",

    notes: [
      "24時間対応",
      "通話料無料"
    ],

    options: [
      {
        number: "119",
        text: "電話する",
        description:
          "救急・火災",
        color: "#d81b60",
        tel: "119"
      }
    ],

    afterLinks: [
      {
        text: "総務省消防庁の公式情報を見る",
        url:
          "https://www.fdma.go.jp/mission/enrichment/kyukyumusen_kinkyutuhou/119.html"
      }
    ]
  },

  /*
    118
  */
  call118: {

    question:
      "118 海上保安庁",

    description:
      "海での事故、転落、漂流、海上事件などの緊急通報です。",

    notes: [
      "24時間対応",
      "通話料無料"
    ],

    options: [
      {
        number: "118",
        text: "電話する",
        description:
          "海上保安庁",
        color: "#00897b",
        tel: "118"
      }
    ],

    afterLinks: [
      {
        text: "海上保安庁の公式情報を見る",
        url:
          "https://www.kaiho.mlit.go.jp/doc/tel118.html"
      }
    ]
  },

  /*
    その他・お問い合わせ
  */
  practice: {

    question:
      "その他・お問い合わせ",

    description:
      "電話に関する各種お問い合わせ番号です。",

    options: [

      {
        number: "113",
        text: "電話の故障受付",
        description:
          "固定電話・ひかり電話の故障",
        color: "#1e88e5",
        next: "call113"
      },

      {
        number: "115",
        text: "電報の申し込み",
        description:
          "祝電・弔電などの電報",
        color: "#1e88e5",
        next: "call115"
      },

      {
        number: "116",
        text: "NTTお問い合わせ",
        description:
          "電話の新設・移転などの相談",
        color: "#1e88e5",
        next: "call116"
      },

      {
        number: "117",
        text: "時報",
        description:
          "現在時刻の音声案内",
        color: "#1e88e5",
        next: "call117"
      }

    ]
  },

  /*
    113
  */
  call113: {

    question:
      "113 電話の故障受付",

    description:
      "固定電話・ひかり電話の故障やトラブルを受け付けています。\n24時間365日つながります。",

    notes: [
      "通話料無料",
      "携帯電話からは0120-444-113"
    ],

    options: [
      {
        number: "113",
        text: "電話する",
        description:
          "電話の故障受付",
        color: "#1e88e5",
        tel: "0120-444-113"
      }
    ],

    afterLinks: [
      {
        text: "NTT東日本の公式情報を見る",
        url:
          "https://web113.ntt-east.co.jp/"
      }
    ]
  },

  /*
    115
  */
  call115: {

    question:
      "115 電報の申し込み",

    description:
      "祝電・弔電などの電報を電話で申し込めます。",

    notes: [
      "通話料・電報料金がかかります",
      "受付時間は8時から19時までです"
    ],

    options: [
      {
        number: "115",
        text: "電話する",
        description:
          "電報の申し込み",
        color: "#1e88e5",
        tel: "115"
      }
    ],

    afterLinks: [
      {
        text: "NTT東日本の公式情報を見る",
        url:
          "https://flets.com/denwa/3number/"
      }
    ]
  },

  /*
    116
  */
  call116: {

    question:
      "116 NTTお問い合わせ",

    description:
      "電話の新設・移転や各種サービスについて相談できます。",

    notes: [
      "通話料無料（市外局番なしでご利用可能）",
      "受付時間は平日9時から17時までです（年末年始を除く）"
    ],

    options: [
      {
        number: "116",
        text: "電話する",
        description:
          "NTTお問い合わせ",
        color: "#1e88e5",
        tel: "116"
      }
    ],

    afterLinks: [
      {
        text: "NTT東日本の公式情報を見る",
        url:
          "https://web116.jp/contact/tel_phone.html"
      }
    ]
  },

  /*
    117
  */
  call117: {

    question:
      "117 時報",

    description:
      "現在時刻を音声で確認できます。\n電話発信の練習にも使えます。",

    notes: [
      "通話料がかかります"
    ],

    options: [
      {
        number: "117",
        text: "電話する",
        description:
          "時刻音声案内",
        color: "#1e88e5",
        tel: "117"
      }
    ],

    afterLinks: [
      {
        text: "NTT東日本の公式情報を見る",
        url:
          "https://flets.com/denwa/3number/"
      }
    ]
  }

};

/*
  画面表示
*/
function renderScreen(screenKey) {

  const screen = screens[screenKey];

  app.innerHTML = "";

  const card =
    document.createElement("div");

  card.className = "card";

  /*
    タイトル
  */
  const question =
    document.createElement("div");

  question.className = "question";

  question.textContent =
    screen.question;

  card.appendChild(question);

  /*
    説明
  */
  if (screen.description) {

    const description =
      document.createElement("p");

    description.textContent =
      screen.description;

    description.style.whiteSpace =
      "pre-line";

    description.style.lineHeight =
      "1.7";

    description.style.marginBottom =
      "20px";

    card.appendChild(description);

  }

  /*
    補足
  */
  if (screen.notes) {

    const notes =
      document.createElement("div");

    notes.style.fontSize = "13px";
    notes.style.opacity = "0.8";
    notes.style.marginBottom = "20px";
    notes.style.lineHeight = "1.7";

    screen.notes.forEach(note => {

      const item =
        document.createElement("div");

      item.textContent = "・" + note;

      notes.appendChild(item);

    });

    card.appendChild(notes);
/*
  リンク
*/
if (screen.links) {

  const links =
    document.createElement("div");

  links.style.marginBottom =
    "20px";

  screen.links.forEach(link => {

    const a =
      document.createElement("a");

    a.href = link.url;

    a.target = "_blank";

    a.textContent = link.text;

    a.style.display = "block";

    a.style.marginBottom = "10px";

    a.style.color = "#1976d2";

    a.style.textDecoration =
      "none";

    links.appendChild(a);

  });

  card.appendChild(links);

}

  }

  /*
    ボタン
  */
  screen.options.forEach(option => {

    const button =
      document.createElement("button");

    button.className = "button";

    /*
      色
    */
    if (option.color) {
      button.style.background =
        option.color;
    }

    /*
      横並び
    */
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.textAlign = "left";
    button.style.gap = "16px";

    /*
      番号 / アイコン
    */
    const number =
      document.createElement("div");

    if (option.icon && icons[option.icon]) {

      const img =
        document.createElement("img");

      img.src = icons[option.icon];

      img.alt = "";

      img.style.width = "54px";
      img.style.height = "54px";
      img.style.minWidth = "54px";
      img.style.borderRadius = "14px";
      img.style.display = "block";

      number.appendChild(img);

    } else {

      const numberText =
        option.number || "";

      const dashIndex =
        numberText.indexOf("-");

      if (dashIndex === -1) {

        number.textContent =
          numberText;

      } else {

        number.textContent =
          numberText.slice(0, dashIndex + 1);

        number.appendChild(
          document.createElement("br")
        );

        number.appendChild(
          document.createTextNode(
            numberText.slice(dashIndex + 1)
          )
        );

      }

      number.style.fontSize = "28px";
      number.style.fontWeight = "bold";
      number.style.minWidth = "90px";

    }

    /*
      右側
    */
    const right =
      document.createElement("div");

    /*
      タイトル
    */
    const title =
      document.createElement("div");

    title.textContent =
      option.text;

    title.style.fontSize = "18px";
    title.style.fontWeight = "bold";

    /*
      説明
    */
    const small =
      document.createElement("div");

    small.textContent =
      option.description || "";

    small.style.fontSize =
      "13px";

    small.style.marginTop =
      "4px";

    small.style.opacity =
      "0.9";

    right.appendChild(title);
    right.appendChild(small);

    button.appendChild(number);
    button.appendChild(right);

    /*
      クリック
    */
    button.onclick = () => {

      /*
        次画面
      */
      if (option.next) {

        historyStack.push(screenKey);

        renderScreen(option.next);

      }

      /*
        電話
      */
      if (option.tel) {

        const ok = confirm(
          option.tel + " に電話しますか？"
        );

        if (ok) {

          window.location.href =
            "tel:" + option.tel;

        }

      }

    };

    card.appendChild(button);

  });

  /*
    ボタン後リンク
  */
  if (screen.afterLinks) {

    const afterLinks =
      document.createElement("div");

    afterLinks.style.marginTop =
      "4px";

    afterLinks.style.marginBottom =
      "16px";

    screen.afterLinks.forEach(link => {

      const a =
        document.createElement("a");

      a.href = link.url;

      a.target = "_blank";

      a.textContent = link.text;

      a.style.display = "block";

      a.style.marginBottom = "10px";

      afterLinks.appendChild(a);

    });

    card.appendChild(afterLinks);

  }

  /*
    戻る
  */
  if (historyStack.length > 0) {

    const backButton =
      document.createElement("button");

    backButton.textContent =
      "戻る";

    backButton.className =
      "button back-button";

    backButton.onclick = () => {

      const previous =
        historyStack.pop();

      renderScreen(previous);

    };

    card.appendChild(backButton);

  }

  app.appendChild(card);

}

/*
  Android実機の戻るボタン用
*/
window.handleAndroidBack = function () {

  if (historyStack.length > 0) {

    const previous =
      historyStack.pop();

    renderScreen(previous);

    return true;

  }

  return false;

};

/*
  初期表示
*/
renderScreen("start");

/*
  Service Worker
*/
if ("serviceWorker" in navigator) {

  window.addEventListener("load", async () => {

    try {

      await navigator.serviceWorker.register(
        "service-worker.js"
      );

      console.log("Service Worker Registered");

    } catch (error) {

      console.log(error);

    }

  });

}