import type { Phonics } from "./types";

export const SHORT_VOWEL_LIST: Phonics[] = [
  {
    phoneme: "æd",
    grapheme: "ad",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 122,
        word: "dad",
        pronunciation: [["dad"]],
        chinese_meanings: "爸爸，爹爹",
      },
      {
        rank: 138,
        word: "bad",
        pronunciation: [["bad"]],
        chinese_meanings: "坏的，不好的，严重的，不舒服的，低劣的，有害的",
      },
      {
        rank: 496,
        word: "glad",
        pronunciation: [["glad"]],
        chinese_meanings:
          "高兴的，乐意的，令人高兴的，使人愉快的，（风光）明媚的，（景色）美丽的，充满欢乐的，兴高采烈的",
      },
      {
        rank: 582,
        word: "mad",
        pronunciation: [["mad"]],
        chinese_meanings: "疯狂的，猛烈的，着迷的，〔口语〕愤怒的，生气的",
      },
      {
        rank: 724,
        word: "sad",
        pronunciation: [["sad"]],
        chinese_meanings: "悲哀的，糟糕的，可悲的，令人遗憾的",
      },
      {
        rank: 1030,
        word: "madam",
        pronunciation: [
          [
            { style: "bold", text: "mad" },
            "-",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "女士，小姐，喜欢指使他人的年轻妇女，（妓院的）鸨母",
      },
      {
        rank: 1136,
        word: "add",
        pronunciation: [["ad"]],
        chinese_meanings: "增加，补充，附带说明，把…包括在内",
      },
      {
        rank: 1191,
        word: "advice",
        pronunciation: [["ad-", { style: "bold", text: "vahys" }]],
        chinese_meanings:
          "劝告，忠告，（商业）通知，建议，（政治，外交上的）报导，报告",
      },
      {
        rank: 1203,
        word: "adult",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "duhlt" },
          ],
          [{ style: "bold", text: "ad" }, "-uhlt"],
        ],
        chinese_meanings:
          "成熟的，（智力、思想、行为）成熟的，成年人的，成年的",
      },
      {
        rank: 1503,
        word: "adventure",
        pronunciation: [["ad-", { style: "bold", text: "ven" }, "-cher"]],
        chinese_meanings: "冒险活动，冒险经历，奇遇",
      },
    ],
  },
  {
    phoneme: "æɡ",
    grapheme: "ag",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 553,
        word: "bag",
        pronunciation: [["bag"]],
        chinese_meanings:
          "袋，囊，枕套，钱包，手提皮包，财富，〈英俚〉大量，很多",
      },
      {
        rank: 947,
        word: "magazine",
        pronunciation: [
          [
            "mag-",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "zeen" },
          ],
          [
            { style: "bold", text: "mag" },
            "-",
            { style: "italic", text: "uh" },
            "-zeen",
          ],
        ],
        chinese_meanings: "弹药库，杂志，弹仓，胶卷盒",
      },
      {
        rank: 1244,
        word: "flag",
        pronunciation: [["flag"]],
        chinese_meanings: "旗，旗帜，信号旗，菖蒲",
      },
      {
        rank: 1578,
        word: "drag",
        pronunciation: [["drag"]],
        chinese_meanings: "拖拽，吃力地往前拉，拖地而行",
      },
      {
        rank: 1795,
        word: "tag",
        pronunciation: [["tag"]],
        chinese_meanings: "加标签于，附加，起诉，紧跟",
      },
      {
        rank: 2940,
        word: "dragon",
        pronunciation: [
          [
            { style: "bold", text: "drag" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "龙，龙船，D-天文学天龙（星座），口语、贬义脾气暴躁的人",
      },
      {
        rank: 3126,
        word: "wagon",
        pronunciation: [
          [
            { style: "bold", text: "wag" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "四轮的运货马车，<英>铁路货车，<美>小手推车，囚车",
      },
      {
        rank: 3641,
        word: "magnificent",
        pronunciation: [
          [
            "mag-",
            { style: "bold", text: "nif" },
            "-",
            { style: "italic", text: "uh" },
            "-s",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "壮丽的，伟大的，高尚的，华丽的，高贵的，瑰丽的",
      },
      {
        rank: 3703,
        word: "brag",
        pronunciation: [["brag"]],
        chinese_meanings: "自大，吹嘘，自夸，夸口说",
      },
      {
        rank: 3804,
        word: "nag",
        pronunciation: [["nag"]],
        chinese_meanings: "不断找岔，抱怨，困扰，折磨",
      },
    ],
  },
  {
    phoneme: "æt",
    grapheme: "at",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 9,
        word: "that",
        pronunciation: [[{ style: "italic", text: "th" }, "at"]],
        chinese_meanings: "那个，那",
      },
      {
        rank: 48,
        word: "at",
        pronunciation: [["at"]],
        chinese_meanings: "（表示位置）在，在（某时间或时刻），以，达，向，朝",
      },
      {
        rank: 404,
        word: "fat",
        pronunciation: [["fat"]],
        chinese_meanings: "肥的，胖的，厚的，大量的",
      },
      {
        rank: 426,
        word: "catch",
        pronunciation: [["kach"]],
        chinese_meanings: "赶上，接住，引起，看见",
      },
      {
        rank: 504,
        word: "matter",
        pronunciation: [[{ style: "bold", text: "mat" }, "-er"]],
        chinese_meanings: "事件，（讨论、考虑等的）问题，重要性，物质",
      },
      {
        rank: 506,
        word: "cat",
        pronunciation: [["kat"]],
        chinese_meanings: "猫，猫科动物，狠毒的女人，爵士乐爱好者",
      },
      {
        rank: 509,
        word: "hat",
        pronunciation: [["hat"]],
        chinese_meanings: "帽子，（帽子所表示的）职位，职务",
      },
      {
        rank: 763,
        word: "Saturday",
        pronunciation: [[{ style: "bold", text: "sat" }, "-er-dey"], ["-dee"]],
      },
      {
        rank: 801,
        word: "congratulations",
        chinese_meanings: "祝贺，贺词，祝词",
      },
      {
        rank: 1162,
        word: "rat",
        pronunciation: [["rat"]],
        chinese_meanings: "大老鼠，似鼠动物，<非正式>鼠辈，卑鄙小人",
      },
    ],
  },
  {
    phoneme: "æm",
    grapheme: "am",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 239,
        word: "family",
        pronunciation: [
          [
            { style: "bold", text: "fam" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "fam" }, "-lee"],
        ],
        chinese_meanings: "家庭，家族，孩子，祖先",
      },
      {
        rank: 1330,
        word: "damn",
        pronunciation: [["dam"]],
        chinese_meanings: "非常，（表示厌烦）该死，讨厌，十足",
      },
      {
        rank: 886,
        word: "camera",
        pronunciation: [
          [
            { style: "bold", text: "kam" },
            "-er-",
            { style: "italic", text: "uh" },
          ],
          [
            { style: "bold", text: "kam" },
            "-r",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "照相机，摄影机",
      },
      {
        rank: 2795,
        word: "camp",
        pronunciation: [["kamp"]],
        chinese_meanings:
          "营地，工地宿舍，阵营（指观点相同且与持不同观点者对立的集团），兵营，（度假者、旅游者，尤指青少年的）野营地",
      },
      {
        rank: 3430,
        word: "program",
        pronunciation: [
          [{ style: "bold", text: "proh" }, "-gram"],
          ["-gr", { style: "italic", text: "uh" }, "m"],
        ],
        chinese_meanings: "程序，节目，节目单，计划，安排",
      },
      {
        rank: 1514,
        word: "example",
        pronunciation: [
          [
            "ig-",
            { style: "bold", text: "zam" },
            "-p",
            { style: "italic", text: "uh" },
            "l",
          ],
          ["-", { style: "bold", text: "zahm" }, "-"],
        ],
        chinese_meanings: "例子，榜样，范例，先例",
      },
      {
        rank: 1734,
        word: "vampire",
        pronunciation: [
          [
            { style: "bold", text: "vam" },
            "-pahy",
            { style: "italic", text: "uh" },
            "r",
          ],
        ],
        chinese_meanings: "吸血鬼，吸血蝙蝠，敲诈勒索者，高利贷者",
      },
      {
        rank: 1902,
        word: "champion",
        pronunciation: [
          [
            { style: "bold", text: "cham" },
            "-pee-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "冠军，捍卫者，拥护者，战士",
      },
      {
        rank: 1969,
        word: "champagne",
        pronunciation: [["sham-", { style: "bold", text: "peyn" }]],
        chinese_meanings: "香槟酒，香槟酒色，平原，平野",
      },
      {
        rank: 2353,
        word: "stamp",
        pronunciation: [["stamp"]],
        chinese_meanings: "邮票，标志，印记，跺脚，特征",
      },
    ],
  },
  {
    phoneme: "æn",
    grapheme: "an",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 10,
        word: "and",
        pronunciation: [["and"]],
        chinese_meanings: "和，与，而且，于是，然后，因此",
      },
      {
        rank: 23,
        word: "can",
        pronunciation: [["kan"]],
        chinese_meanings: "能，能够，可以，可能",
      },
      {
        rank: 86,
        word: "man",
        pronunciation: [["man"]],
        chinese_meanings: "男人，人类，男子汉，雇工",
      },
      {
        rank: 163,
        word: "than",
        pronunciation: [
          [{ style: "italic", text: "th" }, "an"],
          [{ style: "italic", text: "th" }, "en"],
        ],
        chinese_meanings: "比（用于比较级），宁愿…而不愿，除…以外，一…就",
      },
      {
        rank: 277,
        word: "understand",
        pronunciation: [["uhn-der-", { style: "bold", text: "stand" }]],
        chinese_meanings: "懂，理解",
      },
      {
        rank: 334,
        word: "stand",
        pronunciation: [["stand"]],
        chinese_meanings: "台，看台，立场，停止，抵抗",
      },
      {
        rank: 538,
        word: "hand",
        pronunciation: [["hand"]],
        chinese_meanings: "手，协助，帮助，（工具等的）把，柄，掌管",
      },
      {
        rank: 444,
        word: "dance",
        pronunciation: [["dans"], ["dahns"]],
        chinese_meanings: "跳舞，舞会，舞蹈艺术，舞曲",
      },
      {
        rank: 450,
        word: "chance",
        pronunciation: [["chans"], ["chahns"]],
        chinese_meanings: "机会，机遇，概率，可能性，偶然，运气",
      },
      { rank: 493, word: "pants", pronunciation: [["pants"]] },
    ],
  },
  {
    phoneme: "æp",
    grapheme: "ap",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 134,
        word: "happen",
        pronunciation: [
          [
            { style: "bold", text: "hap" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "发生，碰巧，出现，偶然遇到",
      },
      {
        rank: 224,
        word: "happy",
        pronunciation: [[{ style: "bold", text: "hap" }, "-ee"]],
        chinese_meanings: "幸福的，快乐的，巧妙的，〈口〉有点醉意的",
      },
      {
        rank: 943,
        word: "crap",
        pronunciation: [["krap"]],
        chinese_meanings: "废物，废话，排泄，排泄物",
      },
      {
        rank: 773,
        word: "perhaps",
        pronunciation: [["per-", { style: "bold", text: "haps" }]],
        chinese_meanings:
          "或许，（表示不确定）也许，（用于粗略的估计）或许，（表示勉强同意或其实不赞成）也许",
      },
      {
        rank: 799,
        word: "captain",
        pronunciation: [
          [
            { style: "bold", text: "kap" },
            "-t",
            { style: "italic", text: "uh" },
            "n",
          ],
          ["-tin"],
        ],
        chinese_meanings:
          "船长，机长，领袖，首领，上尉，（美国警察局的）副巡长",
      },
      {
        rank: 1193,
        word: "apple",
        pronunciation: [
          [
            { style: "bold", text: "ap" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "苹果，苹果树，苹果公司",
      },
      {
        rank: 1390,
        word: "wrap",
        pronunciation: [["rap"]],
        chinese_meanings: "包，缠绕，用…包裹（或包扎、覆盖等），掩护",
      },
      {
        rank: 1436,
        word: "trap",
        pronunciation: [["trap"]],
        chinese_meanings: "诱骗，使受限制，困住，使（水与气体等）分离",
      },
      {
        rank: 1497,
        word: "slap",
        pronunciation: [["slap"]],
        chinese_meanings: "掌掴，掌掴声，侮辱",
      },
      {
        rank: 1787,
        word: "nap",
        pronunciation: [["nap"]],
        chinese_meanings: "小睡，打盹，一种牌戏，绒毛，孤注一掷",
      },
    ],
  },
  {
    phoneme: "ɛd",
    grapheme: "ed",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 415,
        word: "wedding",
        pronunciation: [[{ style: "bold", text: "wed" }, "-ing"]],
        chinese_meanings: "婚礼，婚宴，结婚纪念日，结合",
      },
      {
        rank: 423,
        word: "bed",
        pronunciation: [["bed"]],
        chinese_meanings: "床，苗圃，河床，（地下由黏土、岩石等构成的）地层",
      },
      {
        rank: 574,
        word: "red",
        pronunciation: [["red"]],
        chinese_meanings: "红色的，（脸）涨红的，烧红的，红头发的",
      },
      {
        rank: 893,
        word: "credit",
        pronunciation: [[{ style: "bold", text: "kred" }, "-it"]],
        chinese_meanings: "信誉，信用，金融贷款，荣誉，学分",
      },
      {
        rank: 1225,
        word: "incredible",
        pronunciation: [
          [
            "in-",
            { style: "bold", text: "kred" },
            "-",
            { style: "italic", text: "uh" },
            "-b",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "不可思议的，惊人的，难以置信的，未必可能的",
      },
      {
        rank: 1624,
        word: "medical",
        pronunciation: [
          [
            { style: "bold", text: "med" },
            "-i-k",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "医学的，医药的，医疗的，内科的",
      },
      {
        rank: 1625,
        word: "medicine",
        pronunciation: [
          [
            { style: "bold", text: "med" },
            "-",
            { style: "italic", text: "uh" },
            "-sin",
          ],
          [
            { style: "bold", text: "med" },
            "-s",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "医学，药物，有功效的东西，良药",
      },
      {
        rank: 2972,
        word: "schedule",
        pronunciation: [
          [{ style: "bold", text: "skej" }, "-ool"],
          ["-", { style: "italic", text: "oo" }, "l"],
          ["-oo-", { style: "italic", text: "uh" }, "l"],
        ],
        chinese_meanings: "时刻表，进度表，清单，明细表，预定计划，目录",
      },
      {
        rank: 2048,
        word: "incredibly",
        pronunciation: [
          [
            "in-",
            { style: "bold", text: "kred" },
            "-",
            { style: "italic", text: "uh" },
            "-blee",
          ],
        ],
        chinese_meanings: "难以置信地，很，极为",
      },
      {
        rank: 2330,
        word: "education",
        pronunciation: [
          [
            "ej-",
            { style: "italic", text: "oo" },
            "-",
            { style: "bold", text: "key" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "教育，教育学，培养，训练",
      },
    ],
  },
  {
    phoneme: "ɛɡ",
    grapheme: "eg",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 643,
        word: "leg",
        pronunciation: [["leg"]],
        chinese_meanings: "腿，支柱，支架，裤腿，一段赛程",
      },
      {
        rank: 762,
        word: "egg",
        pronunciation: [["eg"]],
        chinese_meanings: "鸡蛋，蛋，卵，<俚>家伙",
      },
      {
        rank: 819,
        word: "pregnant",
        pronunciation: [
          [
            { style: "bold", text: "preg" },
            "-n",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "怀孕的，孕育着…的，富于想象的，富于成果的",
      },
      {
        rank: 1183,
        word: "regular",
        pronunciation: [
          [
            { style: "bold", text: "reg" },
            "-y",
            { style: "italic", text: "uh" },
            "-ler",
          ],
        ],
        chinese_meanings: "有规律的，规则，整齐的，不变的，合格的",
      },
      {
        rank: 1311,
        word: "beg",
        pronunciation: [["beg"]],
        chinese_meanings: "乞讨，恳求（原谅），回避（问题）",
      },
      {
        rank: 2360,
        word: "negative",
        pronunciation: [
          [
            { style: "bold", text: "neg" },
            "-",
            { style: "italic", text: "uh" },
            "-tiv",
          ],
        ],
        chinese_meanings: "消极的，否认的，数负的，心反抗性的，无预期结果的",
      },
      {
        rank: 2948,
        word: "pregnancy",
        pronunciation: [
          [
            { style: "bold", text: "preg" },
            "-n",
            { style: "italic", text: "uh" },
            "n-see",
          ],
        ],
        chinese_meanings: "怀孕，妊娠，丰富，多产，意义深长",
      },
      {
        rank: 3759,
        word: "integrity",
        pronunciation: [["in-", { style: "bold", text: "teg" }, "-ri-tee"]],
        chinese_meanings: "正直，诚实，完整，计算机保存，健全",
      },
      {
        rank: 4472,
        word: "vegan",
        pronunciation: [
          [
            { style: "bold", text: "vee" },
            "-g",
            { style: "italic", text: "uh" },
            "n",
          ],
          [{ style: "bold", text: "vey" }, "-"],
        ],
        chinese_meanings: "严格的素食主义者",
      },
    ],
  },
  {
    phoneme: "ɛn",
    grapheme: "en",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 77,
        word: "when",
        pronunciation: [["wen"], ["hwen"]],
        chinese_meanings:
          "什么时候，（用于时间的表达方式之后）在那时，其时，当时",
      },
      {
        rank: 93,
        word: "then",
        pronunciation: [[{ style: "italic", text: "th" }, "en"]],
        chinese_meanings: "那时，然后，那么，话说回来",
      },
      {
        rank: 125,
        word: "friend",
        pronunciation: [["frend"]],
        chinese_meanings: "朋友，友人，资助者，助手，近亲",
      },
      {
        rank: 349,
        word: "spend",
        pronunciation: [["spend"]],
        chinese_meanings: "用钱，花钱",
      },
      {
        rank: 359,
        word: "send",
        pronunciation: [["send"]],
        chinese_meanings: "送，使作出（某种反应），派遣，使进入（某状态）",
      },
      {
        rank: 365,
        word: "ten",
        pronunciation: [["ten"]],
        chinese_meanings: "十，十个，第十",
      },
      {
        rank: 393,
        word: "end",
        pronunciation: [["end"]],
        chinese_meanings: "<正>结果，端，终止，最后部分",
      },
      {
        rank: 442,
        word: "enjoy",
        pronunciation: [["en-", { style: "bold", text: "joi" }]],
        chinese_meanings: "享有，享受，欣赏，喜欢，使过得快活",
      },
      {
        rank: 508,
        word: "girlfriend",
        pronunciation: [[{ style: "bold", text: "gurl" }, "-frend"]],
        chinese_meanings: "女朋友，女性朋友",
      },
      {
        rank: 533,
        word: "twenty",
        pronunciation: [
          [{ style: "bold", text: "twen" }, "-tee"],
          [{ style: "bold", text: "twuhn" }, "-"],
        ],
        chinese_meanings: "二十，二十个，二十多岁，二十年代，许多，大量",
      },
    ],
  },
  {
    phoneme: "ɛt",
    grapheme: "et",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 17,
        word: "get",
        pronunciation: [["get"]],
        chinese_meanings: "得到，抓住，说服，受到（惩罚等）",
      },
      {
        rank: 62,
        word: "let",
        pronunciation: [["let"]],
        chinese_meanings: "允许，任由，让，随，假设，出租",
      },
      {
        rank: 256,
        word: "forget",
        pronunciation: [["fer-", { style: "bold", text: "get" }]],
        chinese_meanings: "忘记，忘却，忽略，疏忽，遗落，忘掉",
      },
      {
        rank: 352,
        word: "yet",
        pronunciation: [["yet"]],
        chinese_meanings: "但是，还，已经，又，再",
      },
      {
        rank: 429,
        word: "set",
        pronunciation: [["set"]],
        chinese_meanings: "放置，安置，使处于某种状况，设置，摆放餐具",
      },
      {
        rank: 471,
        word: "bet",
        pronunciation: [["bet"]],
        chinese_meanings: "打赌，赌博，赌注，被下赌注的对象，可能性",
      },
      {
        rank: 4352,
        word: "upset",
        pronunciation: [["uhp-", { style: "bold", text: "set" }]],
        chinese_meanings: "打翻，弄翻，打乱，打搅",
      },
      {
        rank: 814,
        word: "letter",
        pronunciation: [[{ style: "bold", text: "let" }, "-er"]],
        chinese_meanings: "信，证书，许可证，字母，文字，字面意义",
      },
      {
        rank: 948,
        word: "settle",
        pronunciation: [[{ style: "bold", text: "set" }, "-l"]],
        chinese_meanings: "解决，安排，使定居，使沉淀",
      },
      {
        rank: 964,
        word: "Internet",
        pronunciation: [[{ style: "bold", text: "in" }, "-ter-net"]],
        chinese_meanings: "国际互联网，因特网",
      },
    ],
  },
  {
    phoneme: "ɛɫ",
    grapheme: "ell",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 4245,
        word: "well",
        pronunciation: [["wel"]],
        chinese_meanings: "好，很，好意地，高高兴兴地",
      },
      {
        rank: 67,
        word: "tell",
        pronunciation: [["tel"]],
        chinese_meanings: "告诉，说，辨别，吩咐，讲述",
      },
      {
        rank: 185,
        word: "hell",
        pronunciation: [["hel"]],
        chinese_meanings: "地狱，阴间，训斥，胡闹，见鬼，苦境，罪恶之地",
      },
      {
        rank: 408,
        word: "sell",
        pronunciation: [["sel"]],
        chinese_meanings: "卖，售，使好卖，使接受，使赞成，销售",
      },
      {
        rank: 517,
        word: "smell",
        pronunciation: [["smel"]],
        chinese_meanings: "嗅觉，气味，臭味，发出臭气的人东西",
      },
      {
        rank: 880,
        word: "fella",
        pronunciation: [
          [
            { style: "bold", text: "fel" },
            "-",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "伙伴，伙计，小伙子",
      },
      {
        rank: 920,
        word: "yell",
        pronunciation: [["yel"]],
        chinese_meanings: "叫喊，大声叫，叫喊着说",
      },
      {
        rank: 980,
        word: "cell",
        pronunciation: [["sel"]],
        chinese_meanings: "<生>细胞，小牢房，电池，<诗>墓穴",
      },
      {
        rank: 1367,
        word: "spell",
        pronunciation: [["spel"]],
        chinese_meanings: "拼写，导致，意味着，组成（一个词）的字母是…",
      },
      {
        rank: 1369,
        word: "bell",
        pronunciation: [["bel"]],
        chinese_meanings: "钟，铃，钟声，铃声，钟状物，建圆屋顶",
      },
    ],
  },
  {
    phoneme: "ɛs",
    grapheme: "ess",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 183,
        word: "guess",
        pronunciation: [["ges"]],
        chinese_meanings: "推测，猜测，臆测，猜中，假定，认为",
      },
      {
        rank: 573,
        word: "dress",
        pronunciation: [["dres"]],
        chinese_meanings: "衣服，装饰，连衣裙，礼服",
      },
      {
        rank: 628,
        word: "message",
        pronunciation: [[{ style: "bold", text: "mes" }, "-ij"]],
        chinese_meanings: "信息，消息，要旨，教训",
      },
      {
        rank: 702,
        word: "unless",
        pronunciation: [
          ["uhn-", { style: "bold", text: "les" }],
          [{ style: "italic", text: "uh" }, "n-"],
        ],
        chinese_meanings: "除非，如果不",
      },
      {
        rank: 748,
        word: "less",
        pronunciation: [["les"]],
        chinese_meanings:
          "较少的（little的比较级），较小的，较次的，较劣的，较不重要的",
      },
      {
        rank: 852,
        word: "lesson",
        pronunciation: [
          [
            { style: "bold", text: "les" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "教训，训诫，功课，课程，一堂课，宗日课",
      },
      {
        rank: 870,
        word: "professor",
        pronunciation: [
          [
            "pr",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "fes" },
            "-er",
          ],
        ],
        chinese_meanings: "教授，（大学的）讲师，教员，自称者，宣称者",
      },
      {
        rank: 1110,
        word: "mess",
        pronunciation: [["mes"]],
        chinese_meanings: "混乱，食堂，肮脏，困境",
      },
      {
        rank: 1300,
        word: "princess",
        pronunciation: [
          [{ style: "bold", text: "prin" }, "-sis"],
          ["-ses"],
          ["prin-", { style: "bold", text: "ses" }],
        ],
        chinese_meanings:
          "公主，王妃（王族女性成员），女巨头，女名家，<古>女王",
      },
      {
        rank: 1360,
        word: "press",
        pronunciation: [["pres"]],
        chinese_meanings: "压，按，逼迫，紧抱",
      },
    ],
  },
  {
    phoneme: "ɪɡ",
    grapheme: "ig",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 120,
        word: "big",
        pronunciation: [["big"]],
        chinese_meanings: "大的，重要的，（计划）庞大的，大方的",
      },
      {
        rank: 464,
        word: "figure",
        pronunciation: [[{ style: "bold", text: "fig" }, "-yer"]],
        chinese_meanings: "数字，算术，人物，身材",
      },
      {
        rank: 903,
        word: "pig",
        pronunciation: [["pig"]],
        chinese_meanings: "猪，猪肉，令人不快（或讨厌）的人，金属块（锭）",
      },
      {
        rank: 1185,
        word: "dig",
        pronunciation: [["dig"]],
        chinese_meanings:
          "（如用铲、锨或推土机等）挖掘，探究，发掘，刺，戳，喜欢，欣赏",
      },
      {
        rank: 1312,
        word: "cigarette",
        pronunciation: [
          [
            "sig-",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "ret" },
          ],
          [
            { style: "bold", text: "sig" },
            "-",
            { style: "italic", text: "uh" },
            "-ret",
          ],
        ],
        chinese_meanings: "纸烟，香烟",
      },
      {
        rank: 1419,
        word: "ignore",
        pronunciation: [
          ["ig-", { style: "bold", text: "nawr" }],
          ["-", { style: "bold", text: "nohr" }],
        ],
        chinese_meanings: "忽视，不顾，法律驳回（诉讼）",
      },
      {
        rank: 2164,
        word: "signal",
        pronunciation: [[{ style: "bold", text: "sig" }, "-nl"]],
        chinese_meanings: "信号，暗号，预兆，征象，动机，导火线",
      },
      {
        rank: 2433,
        word: "wig",
        pronunciation: [["wig"]],
        chinese_meanings: "假发，法官帽，〈美俚〉知识分子",
      },
      {
        rank: 2559,
        word: "tiger",
        pronunciation: [[{ style: "bold", text: "tahy" }, "-ger"]],
        chinese_meanings: "老虎，各种猫科动物，凶恶的人，虎狼之徒",
      },
      {
        rank: 2728,
        word: "dignity",
        pronunciation: [[{ style: "bold", text: "dig" }, "-ni-tee"]],
        chinese_meanings: "尊严，高尚，自豪，自尊",
      },
    ],
  },
  {
    phoneme: "ɪn",
    grapheme: "in",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 16,
        word: "in",
        pronunciation: [["in"]],
        chinese_meanings:
          "采用（某种方式），穿着，带着，（表示位置）在…里面，（表示领域，范围）在…以内，（表示品质、能力等）在…之中",
      },
      {
        rank: 128,
        word: "find",
        pronunciation: [["fahynd"]],
        chinese_meanings: "发现，找到，查明，发觉",
      },
      {
        rank: 139,
        word: "into",
        pronunciation: [[{ style: "bold", text: "in" }, "-too"]],
        chinese_meanings:
          "（表示方向）进入…中，（表示所属）输入，（表示状态）进入…状态，（表示时间）持续到",
      },
      {
        rank: 150,
        word: "again",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "gen" },
          ],
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "geyn" },
          ],
        ],
        chinese_meanings: "再一次，再说，此外，不过",
      },
      {
        rank: 2349,
        word: "kind",
        pronunciation: [["kahynd"]],
        chinese_meanings: "〈古〉方式，方法，本质，天性，同类，某类",
      },
      {
        rank: 164,
        word: "fine",
        pronunciation: [["fahyn"]],
        chinese_meanings: "好的，上等的，纤细的，精致的，健康的，晴朗的",
      },
      {
        rank: 299,
        word: "win",
        pronunciation: [["win"]],
        chinese_meanings: "（在…中）获胜，赢，战胜（对手）",
      },
      {
        rank: 330,
        word: "since",
        pronunciation: [["sins"]],
        chinese_meanings: "从…以来，自从…之后，自从",
      },
      {
        rank: 337,
        word: "dinner",
        pronunciation: [[{ style: "bold", text: "din" }, "-er"]],
        chinese_meanings: "正餐，主餐，宴会，晚餐",
      },
      {
        rank: 396,
        word: "finally",
        pronunciation: [[{ style: "bold", text: "fahyn" }, "-l-ee"]],
        chinese_meanings: "最后，终于，总算，末后，结果",
      },
    ],
  },
  {
    phoneme: "ɪb",
    grapheme: "ib",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 1636,
        word: "library",
        pronunciation: [
          [{ style: "bold", text: "lahy" }, "-brer-ee"],
          ["-br", { style: "italic", text: "uh" }, "-ree"],
          ["-bree"],
        ],
        chinese_meanings: "图书馆，藏书楼，藏书，书屋，书斋，图书出租处",
      },
      {
        rank: 1708,
        word: "describe",
        pronunciation: [["dih-", { style: "bold", text: "skrahyb" }]],
        chinese_meanings: "描写，形容，叙述，描绘，作图，（行星等）周转",
      },
      {
        rank: 2001,
        word: "Bible",
        pronunciation: [
          [
            { style: "bold", text: "bahy" },
            "-b",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "圣经，有权威的书",
      },
      {
        rank: 2791,
        word: "rib",
        pronunciation: [["rib"]],
        chinese_meanings:
          "肋骨，（船或屋顶等的）肋拱，肋骨状的东西，（织物的）凸条花纹",
      },
      { rank: 2894, word: "dibs", pronunciation: [["dibz"]] },
      {
        rank: 3207,
        word: "ribbon",
        pronunciation: [
          [
            { style: "bold", text: "rib" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "带，（打印机的）色带，绶带，带状物",
      },
      {
        rank: 3377,
        word: "crib",
        pronunciation: [["krib"]],
        chinese_meanings: "（有栏杆的）小儿床，饲料槽，牛栏，剽窃，偷窃",
      },
      {
        rank: 3507,
        word: "tribe",
        pronunciation: [["trahyb"]],
        chinese_meanings: "部落，部族，生族，一帮，一伙，大群",
      },
      {
        rank: 3674,
        word: "exhibit",
        pronunciation: [["ig-", { style: "bold", text: "zib" }, "-it"]],
        chinese_meanings: "陈列，展览，呈现，证明，法提交证据",
      },
      {
        rank: 3747,
        word: "contribute",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "trib" },
            "-yoot",
          ],
        ],
        chinese_meanings: "贡献出，捐赠（款项），投稿（给杂志等），出力",
      },
    ],
  },
  {
    phoneme: "ɪp",
    grapheme: "ip",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 449,
        word: "relationship",
        pronunciation: [
          [
            "ri-",
            { style: "bold", text: "ley" },
            "-sh",
            { style: "italic", text: "uh" },
            "n-ship",
          ],
        ],
        chinese_meanings: "关系，联系，浪漫关系，血缘关系",
      },
      {
        rank: 3123,
        word: "trip",
        pronunciation: [["trip"]],
        chinese_meanings:
          "旅游，出行，摔倒，绊倒，绊（使某人跌倒的动作），错误，过失",
      },
      {
        rank: 3583,
        word: "ship",
        pronunciation: [["ship"]],
        chinese_meanings: "船，<口>宇宙飞船，（舰船上的）全体船员，运气",
      },
      {
        rank: 2235,
        word: "tip",
        pronunciation: [["tip"]],
        chinese_meanings: "小窍门，小费，末梢",
      },
      {
        rank: 1266,
        word: "rip",
        pronunciation: [["rip"]],
        chinese_meanings: "裂口，废物，美国俚语偷窃，浪子",
      },
      {
        rank: 1349,
        word: "lip",
        pronunciation: [["lip"]],
        chinese_meanings:
          "嘴唇，（杯，壶等的）口，边缘，〈俚〉无理的回答，〈美〉律师",
      },
      {
        rank: 1356,
        word: "slip",
        pronunciation: [["slip"]],
        chinese_meanings:
          "滑，滑脱，犯过失，出错，（时间）不知不觉地过去，（健康状况等）变差",
      },
      {
        rank: 1370,
        word: "friendship",
        pronunciation: [[{ style: "bold", text: "frend" }, "-ship"]],
        chinese_meanings: "友情，友谊，友善的关系，友善，好意",
      },
      {
        rank: 4935,
        word: "chip",
        pronunciation: [["chip"]],
        chinese_meanings: "碎片，缺口，（作赌注用的）筹码，（足球）高球",
      },
      {
        rank: 1576,
        word: "flip",
        pronunciation: [["flip"]],
        chinese_meanings: "轻弹，轻击，按（开关），快速翻转，急挥",
      },
    ],
  },
  {
    phoneme: "ɪd",
    grapheme: "id",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 391,
        word: "kid",
        pronunciation: [["kid"]],
        chinese_meanings: "<口>小孩，小山羊，小山羊皮制品",
      },
      {
        rank: 244,
        word: "stupid",
        pronunciation: [
          [{ style: "bold", text: "stoo" }, "-pid"],
          [{ style: "bold", text: "styoo" }, "‐"],
        ],
        chinese_meanings: "愚蠢的，迟钝的，乏味的，晕眩的，昏迷不醒的",
      },
      {
        rank: 409,
        word: "side",
        pronunciation: [["sahyd"]],
        chinese_meanings: "面，边，方面，侧面，旁边",
      },
      {
        rank: 469,
        word: "decide",
        pronunciation: [["dih-", { style: "bold", text: "sahyd" }]],
        chinese_meanings: "决定，决心，解决，裁决",
      },
      {
        rank: 475,
        word: "afraid",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "freyd" },
          ],
        ],
        chinese_meanings: "害怕的，担心的，恐怕，畏惧，害怕",
      },
      {
        rank: 3088,
        word: "outside",
        pronunciation: [
          [
            { style: "bold", text: "out" },
            "-",
            { style: "bold", text: "sahyd" },
          ],
          ["-sahyd"],
        ],
        chinese_meanings: "在外面，向外面，在户外，露天",
      },
      {
        rank: 597,
        word: "ride",
        pronunciation: [["rahyd"]],
        chinese_meanings: "乘，骑，驾",
      },
      {
        rank: 624,
        word: "president",
        pronunciation: [
          [
            { style: "bold", text: "prez" },
            "-i-d",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "校长，总统，总裁，董事长",
      },
      {
        rank: 663,
        word: "video",
        pronunciation: [[{ style: "bold", text: "vid" }, "-ee-oh"]],
        chinese_meanings: "磁带录像，录像磁带，录像机，电视，（指方法）录像",
      },
      {
        rank: 679,
        word: "hide",
        pronunciation: [["hahyd"]],
        chinese_meanings: "隐藏，躲避，隐匿，躲藏，遮蔽，覆盖",
      },
    ],
  },
  {
    phoneme: "ɪt",
    grapheme: "it",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 7,
        word: "it",
        pronunciation: [["it"]],
        chinese_meanings: "它，他，正好是所需的，事实情况",
      },
      {
        rank: 87,
        word: "little",
        pronunciation: [[{ style: "bold", text: "lit" }, "-l"]],
        chinese_meanings: "小的，琐碎的，娇小的，幼小的",
      },
      {
        rank: 109,
        word: "wait",
        pronunciation: [["weyt"]],
        chinese_meanings: "等候，等待，（尤指长期地）希望，盼望",
      },
      {
        rank: 251,
        word: "sit",
        pronunciation: [["sit"]],
        chinese_meanings: "（使）坐",
      },
      {
        rank: 312,
        word: "write",
        pronunciation: [["rahyt"]],
        chinese_meanings: "写，写信，写作，作曲",
      },
      {
        rank: 351,
        word: "hit",
        pronunciation: [["hit"]],
        chinese_meanings: "打，打击，碰撞",
      },
      {
        rank: 398,
        word: "its",
        pronunciation: [["its"]],
        chinese_meanings: "(it的所有格形式)它的，厥",
      },
      {
        rank: 420,
        word: "bite",
        pronunciation: [["bahyt"]],
        chinese_meanings: "咬，叮",
      },
      {
        rank: 434,
        word: "city",
        pronunciation: [[{ style: "bold", text: "sit" }, "-ee"]],
        chinese_meanings:
          "城市，全市居民，（由国王或女王授予特权，通常有大教堂的）特许市，（由政府授予特权的）特权市",
      },
      {
        rank: 551,
        word: "white",
        pronunciation: [["wahyt"], ["hwahyt"]],
        chinese_meanings: "白色的，纯洁的，无色的，透明的，白衣的，白种人的",
      },
    ],
  },
  {
    phoneme: "ɪks",
    grapheme: "ix",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 428,
        word: "six",
        pronunciation: [["siks"]],
        chinese_meanings: "六，六个，六岁，六点",
      },
      {
        rank: 672,
        word: "fix",
        pronunciation: [["fiks"]],
        chinese_meanings: "固定，准备，修理，使牢固",
      },
      {
        rank: 1341,
        word: "mix",
        pronunciation: [["miks"]],
        chinese_meanings: "混合，（使）结交，相容，平安相处",
      },
      {
        rank: 1544,
        word: "sixty",
        pronunciation: [[{ style: "bold", text: "siks" }, "-tee"]],
        chinese_meanings: "六十",
      },
      {
        rank: 2905,
        word: "sixth",
        pronunciation: [["siksth"]],
        chinese_meanings: "第六，第六感觉，特别感应，直觉",
      },
      {
        rank: 4897,
        word: "mixer",
        pronunciation: [[{ style: "bold", text: "mik" }, "-ser"]],
        chinese_meanings: "搅拌器，混合器，调音师",
      },
    ],
  },
  {
    phoneme: "ɪm",
    grapheme: "im",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 68,
        word: "him",
        pronunciation: [["him"]],
        chinese_meanings: "(he的宾格)他",
      },
      {
        rank: 72,
        word: "time",
        pronunciation: [["tahym"]],
        chinese_meanings: "时间，时刻，时代，次",
      },
      {
        rank: 400,
        word: "important",
        pronunciation: [["im-", { style: "bold", text: "pawr" }, "-tnt"]],
        chinese_meanings: "重要的，权威的，有势力的，有地位的",
      },
      {
        rank: 433,
        word: "sometimes",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-tahymz"]],
        chinese_meanings: "有时，间或，时而",
      },
      {
        rank: 774,
        word: "simple",
        pronunciation: [
          [
            { style: "bold", text: "sim" },
            "-p",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "简单的，单纯的，易受骗的，天真的",
      },
      {
        rank: 777,
        word: "himself",
        pronunciation: [
          ["him-", { style: "bold", text: "self" }, "medially often im-"],
        ],
        chinese_meanings: "（反身代词）他自己，（用以加强语气）他亲自，他本人",
      },
      {
        rank: 1082,
        word: "crime",
        pronunciation: [["krahym"]],
        chinese_meanings: "罪行，犯罪，罪恶",
      },
      {
        rank: 1274,
        word: "impossible",
        pronunciation: [
          [
            "im-",
            { style: "bold", text: "pos" },
            "-",
            { style: "italic", text: "uh" },
            "-b",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings:
          "不可能的，做不到的，难以忍受的，不会有的，不能相信的",
      },
      {
        rank: 1379,
        word: "swim",
        pronunciation: [["swim"]],
        chinese_meanings: "游泳，游动，旋转，眩晕",
      },
      {
        rank: 1446,
        word: "sometime",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-tahym"]],
        chinese_meanings: "将来某个时候，过去某个时候，改天，来日",
      },
    ],
  },
  {
    phoneme: "ɪɫ",
    grapheme: "ill",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 75,
        word: "will",
        pronunciation: [["wil"]],
        chinese_meanings: "愿意，意志（力），法遗嘱",
      },
      {
        rank: 158,
        word: "still",
        pronunciation: [["stil"]],
        chinese_meanings: "仍，仍然，更，还要，静静地，〈诗〉常，不断地",
      },
      {
        rank: 209,
        word: "kill",
        pronunciation: [["kil"]],
        chinese_meanings: "杀死…",
      },
      {
        rank: 632,
        word: "till",
        pronunciation: [["til"]],
        chinese_meanings: "直到…时（为止），在…之前",
      },
      {
        rank: 675,
        word: "million",
        pronunciation: [
          [
            { style: "bold", text: "mil" },
            "-y",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "百万",
      },
      {
        rank: 717,
        word: "fill",
        pronunciation: [["fil"]],
        chinese_meanings: "（使）充满，（使）装满",
      },
      {
        rank: 973,
        word: "bill",
        pronunciation: [["bil"]],
        chinese_meanings: "账单，钞票，清单，广告",
      },
      {
        rank: 1010,
        word: "silly",
        pronunciation: [[{ style: "bold", text: "sil" }, "-ee"]],
        chinese_meanings: "蠢的，糊涂的，不明事理的，没头脑的",
      },
      {
        rank: 1348,
        word: "killer",
        pronunciation: [[{ style: "bold", text: "kil" }, "-er"]],
        chinese_meanings: "凶手，杀人者，止痛药，宰杀的器具，〈俚〉鬼门关",
      },
      {
        rank: 1352,
        word: "pillow",
        pronunciation: [[{ style: "bold", text: "pil" }, "-oh"]],
        chinese_meanings: "枕头，垫子，花边垫子",
      },
    ],
  },
  {
    phoneme: "ɑp",
    grapheme: "op",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 136,
        word: "stop",
        pronunciation: [["stop"]],
        chinese_meanings: "停止，中断，逗留，（使）停止工作",
      },
      {
        rank: 526,
        word: "drop",
        pronunciation: [["drop"]],
        chinese_meanings: "（使）落下，投下，（使）降低，减少",
      },
      {
        rank: 2937,
        word: "top",
        pronunciation: [["top"]],
        chinese_meanings: "顶，顶部，（箱子）盖，（书页等的）上栏，首席，陀螺",
      },
      {
        rank: 892,
        word: "cop",
        pronunciation: [["kop"]],
        chinese_meanings: "〈俚〉警察，管纱，〈英方〉（山）顶",
      },
      {
        rank: 955,
        word: "pop",
        pronunciation: [["pop"]],
        chinese_meanings:
          "（意外地、突然地）出现，突然出现，发出爆裂声，（突然地）行动",
      },
      {
        rank: 1057,
        word: "shop",
        pronunciation: [["shop"]],
        chinese_meanings: "商店，工厂，办事处，购物",
      },
      {
        rank: 1125,
        word: "popular",
        pronunciation: [
          [
            { style: "bold", text: "pop" },
            "-y",
            { style: "italic", text: "uh" },
            "-ler",
          ],
        ],
        chinese_meanings:
          "流行的，大众化的，民众的，大众的，公众的，通俗的，普通的，平易的，〈美俚〉自以为了不得的，骄傲的",
      },
      {
        rank: 1343,
        word: "opportunity",
        pronunciation: [
          ["op-er-", { style: "bold", text: "too" }, "-ni-tee"],
          ["-", { style: "bold", text: "tyoo" }, "-"],
        ],
        chinese_meanings: "机会，适当的时机良机，有利的环境，条件",
      },
      {
        rank: 1630,
        word: "option",
        pronunciation: [
          [
            { style: "bold", text: "op" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "选择（的自由），选项，选择权，选择能力",
      },
      {
        rank: 2072,
        word: "copy",
        pronunciation: [[{ style: "bold", text: "kop" }, "-ee"]],
        chinese_meanings: "复制品，一份，（报刊等的）稿件，准备排印的书面材料",
      },
    ],
  },
  {
    phoneme: "ɑt",
    grapheme: "ot",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 8,
        word: "not",
        pronunciation: [["not"]],
        chinese_meanings:
          "不，用以表示否定、否认、拒绝、禁止等不是，几乎不，未必，没有用于否定后面的词或短语",
      },
      {
        rank: 171,
        word: "lot",
        pronunciation: [["lot"]],
        chinese_meanings: "份额，许多，命运，阄",
      },
      {
        rank: 288,
        word: "hot",
        pronunciation: [["hot"]],
        chinese_meanings: "热的，辣的，激动的，热门的",
      },
      {
        rank: 872,
        word: "bottle",
        pronunciation: [[{ style: "bold", text: "bot" }, "-l"]],
        chinese_meanings: "瓶子，一瓶（的量），（婴儿）奶瓶，酒",
      },
      {
        rank: 905,
        word: "robot",
        pronunciation: [[{ style: "bold", text: "roh" }, "-bot"]],
        chinese_meanings: "机器人，遥控装置，自动机，机械呆板的人",
      },
      {
        rank: 917,
        word: "shot",
        pronunciation: [["shot"]],
        chinese_meanings: "射手，击球，开枪，发射，企图，注射",
      },
      {
        rank: 2607,
        word: "spot",
        pronunciation: [["spot"]],
        chinese_meanings: "地点，场所，斑点，污点，股票现货，职位，职务",
      },
      {
        rank: 1170,
        word: "bottom",
        pronunciation: [
          [
            { style: "bold", text: "bot" },
            "-",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "底部，末端，臀部，尽头",
      },
      {
        rank: 1507,
        word: "pot",
        pronunciation: [["pot"]],
        chinese_meanings: "罐，一罐，（某种用途的）容器，陶盆",
      },
      {
        rank: 2409,
        word: "scotch",
        pronunciation: [["skoch"]],
        chinese_meanings: "扑灭，使…受伤，切开，划开，制止转动",
      },
    ],
  },
  {
    phoneme: "ɑɡ",
    grapheme: "og",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 1948,
        word: "frog",
        pronunciation: [["frog"], ["frawg"]],
        chinese_meanings:
          "青蛙，〈侮辱〉青蛙佬，对法国人的蔑称，交铁路辙叉，饰扣，挂环",
      },
      {
        rank: 3352,
        word: "hog",
        pronunciation: [["hawg"], ["hog"]],
        chinese_meanings:
          "猪，（供食用的）阉公猪，像猪般的人，<口>自私的或贪婪的人",
      },
      {
        rank: 4177,
        word: "photographer",
        pronunciation: [
          [
            "f",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "tog" },
            "-r",
            { style: "italic", text: "uh" },
            "-fer",
          ],
        ],
        chinese_meanings: "摄影师，摄影家，照相师",
      },
      {
        rank: 4384,
        word: "fog",
        pronunciation: [["fog"], ["fawg"]],
        chinese_meanings: "雾，烟雾，迷惑，割后再生的草",
      },
      {
        rank: 4436,
        word: "goggles",
        pronunciation: [
          [
            { style: "bold", text: "gog" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
      },
    ],
  },
  {
    phoneme: "ɑks",
    grapheme: "ox",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 466,
        word: "box",
        pronunciation: [["boks"]],
        chinese_meanings: "盒，箱状物，包厢，哨房",
      },
      {
        rank: 3373,
        word: "toxic",
        pronunciation: [[{ style: "bold", text: "tok" }, "-sik"]],
        chinese_meanings: "有毒的，中毒的，因中毒引起的",
      },
      {
        rank: 3383,
        word: "boxer",
        pronunciation: [[{ style: "bold", text: "bok" }, "-ser"]],
        chinese_meanings: "（尤指职业）拳击手，拳师狗，装箱者，装箱工",
      },
      {
        rank: 3985,
        word: "oxygen",
        pronunciation: [
          [
            { style: "bold", text: "ok" },
            "-si-j",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "化氧，氧气",
      },
      {
        rank: 4075,
        word: "mailbox",
        pronunciation: [[{ style: "bold", text: "meyl" }, "-boks"]],
        chinese_meanings: "邮筒，信箱",
      },
    ],
  },
  {
    phoneme: "ɑd",
    grapheme: "od",
    graphemeType: "ShortVowel+",
    words: [
      { rank: 550, word: "god", pronunciation: [["god"]] },
      {
        rank: 246,
        word: "everybody",
        pronunciation: [
          [{ style: "bold", text: "ev" }, "-ree-bod-ee"],
          ["-buhd-ee"],
        ],
        chinese_meanings: "每人，人人，大伙儿，各位",
      },
      {
        rank: 320,
        word: "somebody",
        pronunciation: [
          [{ style: "bold", text: "suhm" }, "-bod-ee"],
          ["-buhd-ee"],
          ["-b", { style: "italic", text: "uh" }, "-dee"],
        ],
        chinese_meanings: "某人，有人",
      },
      {
        rank: 491,
        word: "body",
        pronunciation: [[{ style: "bold", text: "bod" }, "-ee"]],
        chinese_meanings: "身体，尸体，团体，物体",
      },
      {
        rank: 1053,
        word: "model",
        pronunciation: [[{ style: "bold", text: "mod" }, "-l"]],
        chinese_meanings: "模型，模特儿，模式，典型",
      },
      {
        rank: 1790,
        word: "product",
        pronunciation: [
          [
            { style: "bold", text: "prod" },
            "-",
            { style: "italic", text: "uh" },
            "kt",
          ],
          ["-uhkt"],
        ],
        chinese_meanings: "产品，结果，乘积，作品",
      },
      {
        rank: 1940,
        word: "odd",
        pronunciation: [["od"]],
        chinese_meanings: "古怪的，奇数的，剩余的，临时的",
      },
      {
        rank: 2255,
        word: "odds",
        pronunciation: [["odz"]],
        chinese_meanings: "希望，可能性，几率，胜算，掣肘的事情，逆境",
      },
      {
        rank: 2889,
        word: "vodka",
        pronunciation: [
          [
            { style: "bold", text: "vod" },
            "-k",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "伏特加酒",
      },
      {
        rank: 3061,
        word: "modern",
        pronunciation: [[{ style: "bold", text: "mod" }, "-ern"]],
        chinese_meanings: "现代的，近代的，新式的，当代风格的",
      },
    ],
  },
  {
    phoneme: "ɑb",
    grapheme: "ob",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 227,
        word: "job",
        pronunciation: [["job"]],
        chinese_meanings:
          "（一件）工作，职责，职业，（作为一个单元处理的）作业",
      },
      {
        rank: 229,
        word: "problem",
        pronunciation: [
          [
            { style: "bold", text: "prob" },
            "-l",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "问题，疑难问题，习题，引起麻烦的人",
      },
      {
        rank: 321,
        word: "probably",
        pronunciation: [
          [
            { style: "bold", text: "prob" },
            "-",
            { style: "italic", text: "uh" },
            "-blee",
          ],
        ],
        chinese_meanings: "大概，或许，很可能，备不住",
      },
      { rank: 828, word: "obviously", chinese_meanings: "明显地" },
      {
        rank: 1516,
        word: "obvious",
        pronunciation: [
          [
            { style: "bold", text: "ob" },
            "-vee-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "明显的，显著的，平淡无奇的，自明",
      },
      {
        rank: 1836,
        word: "lobster",
        pronunciation: [[{ style: "bold", text: "lob" }, "-ster"]],
        chinese_meanings: "龙虾，龙虾肉",
      },
      {
        rank: 2163,
        word: "rob",
        pronunciation: [["rob"]],
        chinese_meanings: "抢劫，抢夺，掠夺，非法剥夺，使丧失",
      },
      {
        rank: 4445,
        word: "object",
        pronunciation: [[{ style: "bold", text: "ob" }, "-jikt"], ["-jekt"]],
        chinese_meanings: "物体，目标，宾语，客体，对象",
      },
      {
        rank: 3276,
        word: "mob",
        pronunciation: [["mob"]],
        chinese_meanings:
          "暴徒，犯罪团伙，黑手党，民众，乌合之众，〈美俚〉匪帮，一群罪犯",
      },
      {
        rank: 3316,
        word: "hobby",
        pronunciation: [[{ style: "bold", text: "hob" }, "-ee"]],
        chinese_meanings: "业余爱好，嗜好，兴趣，小马",
      },
    ],
  },
  {
    phoneme: "əb",
    grapheme: "ub",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 515,
        word: "club",
        pronunciation: [["kluhb"]],
        chinese_meanings: "俱乐部，会所，社团，夜总会，（纸牌的）梅花",
      },
      {
        rank: 4351,
        word: "trouble",
        pronunciation: [
          [
            { style: "bold", text: "truhb" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "麻烦，烦恼，故障，动乱",
      },
      {
        rank: 4337,
        word: "public",
        pronunciation: [[{ style: "bold", text: "puhb" }, "-lik"]],
        chinese_meanings: "公众的，公共的，公开的，政府的，人人知道的，知名的",
      },
      {
        rank: 2826,
        word: "double",
        pronunciation: [
          [
            { style: "bold", text: "duhb" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "双的，两倍的，两面派的，双人用的",
      },
      {
        rank: 1527,
        word: "rub",
        pronunciation: [["ruhb"]],
        chinese_meanings: "擦，摩擦，用…擦，触怒，（使）相互磨擦",
      },
      {
        rank: 1594,
        word: "subject",
        pronunciation: [[{ style: "bold", text: "suhb" }, "-jikt"]],
        chinese_meanings: "主题，话题，学科，科目，哲主观",
      },
      {
        rank: 1628,
        word: "tub",
        pronunciation: [["tuhb"]],
        chinese_meanings: "澡盆，桶，矿车",
      },
      {
        rank: 1650,
        word: "bubble",
        pronunciation: [
          [
            { style: "bold", text: "buhb" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings:
          "泡，水泡，冒泡，起泡，泡影，妄想，（欲表达的）一点感情",
      },
      {
        rank: 1944,
        word: "subway",
        pronunciation: [[{ style: "bold", text: "suhb" }, "-wey"]],
        chinese_meanings: "地铁，地下通道",
      },
      {
        rank: 2605,
        word: "publish",
        pronunciation: [[{ style: "bold", text: "puhb" }, "-lish"]],
        chinese_meanings:
          "出版，发行，发表，宣布（结婚等），公布，颁布，出版…的著作",
      },
    ],
  },
  {
    phoneme: "əp",
    grapheme: "up",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 45,
        word: "up",
        pronunciation: [["uhp"]],
        chinese_meanings: "在上面，在高处，起床，起来，向上，由低到高",
      },
      {
        rank: 369,
        word: "couple",
        pronunciation: [
          [
            { style: "bold", text: "kuhp" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "对，双，配偶，夫妻，<口>几个，两三个",
      },
      {
        rank: 4352,
        word: "upset",
        pronunciation: [["uhp-", { style: "bold", text: "set" }]],
        chinese_meanings: "打翻，弄翻，打乱，打搅",
      },
      {
        rank: 884,
        word: "cup",
        pronunciation: [["kuhp"]],
        chinese_meanings: "杯子，一杯（的量），（胸罩的）罩杯，优胜杯",
      },
      {
        rank: 1114,
        word: "upstairs",
        pronunciation: [
          [
            { style: "bold", text: "uhp" },
            "-",
            { style: "bold", text: "stairz" },
          ],
        ],
        chinese_meanings: "在楼上，往楼上，在高空",
      },
      {
        rank: 1635,
        word: "interrupt",
        pronunciation: [
          [
            "in-t",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "ruhpt" },
          ],
        ],
        chinese_meanings: "打断（别人的话等），阻止，截断",
      },
      {
        rank: 1801,
        word: "puppy",
        pronunciation: [[{ style: "bold", text: "puhp" }, "-ee"]],
        chinese_meanings:
          "小狗，幼犬，浅薄自负的年轻男子，狂妄自大的小伙子，呆笨的花花公子，〈美俚〉脚",
      },
      {
        rank: 1888,
        word: "breakup",
        pronunciation: [[{ style: "bold", text: "breyk" }, "-uhp"]],
        chinese_meanings: "（关系、联盟的）终止，解散，别离，瓦解",
      },
      {
        rank: 2223,
        word: "makeup",
        pronunciation: [[{ style: "bold", text: "meyk" }, "-uhp"]],
        chinese_meanings: "化妆，补充，构造，体格",
      },
      {
        rank: 2385,
        word: "ketchup",
        pronunciation: [
          [
            { style: "bold", text: "kech" },
            "-",
            { style: "italic", text: "uh" },
            "p",
          ],
          [{ style: "bold", text: "kach" }, "-"],
        ],
        chinese_meanings: "番茄酱",
      },
    ],
  },
  {
    phoneme: "əd",
    grapheme: "ud",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 476,
        word: "buddy",
        pronunciation: [[{ style: "bold", text: "buhd" }, "-ee"]],
        chinese_meanings: "密友，好友，同伴，搭档，互相帮助的朋友，名巴迪",
      },
      {
        rank: 1099,
        word: "suddenly",
        chinese_meanings: "意外地，忽然地，奄，勃，霍然",
      },
      {
        rank: 1237,
        word: "study",
        pronunciation: [[{ style: "bold", text: "stuhd" }, "-ee"]],
        chinese_meanings: "学习，研究，课题，书房，结论",
      },
      {
        rank: 1430,
        word: "judge",
        pronunciation: [["juhj"]],
        chinese_meanings: "审判，评判，断定",
      },
      {
        rank: 2159,
        word: "fudge",
        pronunciation: [["fuhj"]],
        chinese_meanings: "梦话，胡言，软糖",
      },
      {
        rank: 2397,
        word: "budget",
        pronunciation: [[{ style: "bold", text: "buhj" }, "-it"]],
        chinese_meanings: "预算，预算案，预算拨款，一束",
      },
      {
        rank: 2495,
        word: "judgment",
        pronunciation: [
          [
            { style: "bold", text: "juhj" },
            "-m",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "判断，鉴定，辨别力，判断力，意见，看法，判决书",
      },
      {
        rank: 2696,
        word: "sudden",
        pronunciation: [[{ style: "bold", text: "suhd" }, "-n"]],
        chinese_meanings:
          "突然的，未预见到的，急躁的，仓促的，快的，迅速的，急剧",
      },
      {
        rank: 3259,
        word: "mud",
        pronunciation: [["muhd"]],
        chinese_meanings: "泥，泥淖，没价值的东西，污物，<美俚>咖啡，诽谤的话",
      },
      {
        rank: 3446,
        word: "bud",
        pronunciation: [["buhd"]],
        chinese_meanings:
          "芽，萌芽，蓓蕾，骨朵，未成熟的人，少男少女，〈美〉刚进社交界的姑娘",
      },
    ],
  },
  {
    phoneme: "əm",
    grapheme: "um",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 311,
        word: "number",
        pronunciation: [[{ style: "bold", text: "nuhm" }, "-ber"]],
        chinese_meanings: "数字，数量，号码，编号",
      },
      {
        rank: 760,
        word: "jump",
        pronunciation: [["juhmp"]],
        chinese_meanings:
          "跳，跳过，快速移动，（因吃惊、害怕或激动而）猛地一动",
      },
      {
        rank: 833,
        word: "dumb",
        pronunciation: [["duhm"]],
        chinese_meanings:
          "哑的，无说话能力的，不说话的，无声的，沉默的，无言的，口齿不清的，（在政府中）无代言人的，政治上无发言权的",
      },
      {
        rank: 874,
        word: "summer",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-er"]],
        chinese_meanings:
          "夏，夏天，全盛时期，黄金时代，壮年时期，建大梁，檀条，楣，柱顶石，岁数",
      },
      {
        rank: 1132,
        word: "dump",
        pronunciation: [["duhmp"]],
        chinese_meanings: "倾倒，丢下，卸下，摆脱，扔弃，倾销",
      },
      {
        rank: 1323,
        word: "gum",
        pronunciation: [["guhm"]],
        chinese_meanings: "口香糖，树胶，黏胶，牙龈",
      },
      {
        rank: 1358,
        word: "museum",
        pronunciation: [
          [
            "myoo-",
            { style: "bold", text: "zee" },
            "-",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "博物馆",
      },
      {
        rank: 4484,
        word: "bum",
        pronunciation: [["buhm"]],
        chinese_meanings: "流浪者，屁股，狂欢作乐，笨蛋，废物",
      },
      {
        rank: 1949,
        word: "pumpkin",
        pronunciation: [
          [{ style: "bold", text: "puhmp" }, "-kin"],
          [{ style: "bold", text: "puhng" }, "-kin"],
        ],
        chinese_meanings: "南瓜，南瓜的果肉，南瓜囊，〈俚〉重要人物",
      },
      {
        rank: 2013,
        word: "album",
        pronunciation: [
          [
            { style: "bold", text: "al" },
            "-b",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "相册，集邮簿，签名册，唱片",
      },
    ],
  },
  {
    phoneme: "ən",
    grapheme: "un",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 212,
        word: "run",
        pronunciation: [["ruhn"]],
        chinese_meanings: "跑，移动，（使）流动",
      },
      {
        rank: 1785,
        word: "fun",
        pronunciation: [["fuhn"]],
        chinese_meanings: "乐趣，娱乐活动，嬉戏，嬉闹，有趣的事",
      },
      {
        rank: 265,
        word: "funny",
        pronunciation: [[{ style: "bold", text: "fuhn" }, "-ee"]],
        chinese_meanings:
          "有趣的，好笑的，滑稽的，（口）稀奇的，古怪的，奇异的，有病的，不舒服的，狡猾的，欺骗（性）的，可疑的，不光明的",
      },
      {
        rank: 277,
        word: "understand",
        pronunciation: [["uhn-der-", { style: "bold", text: "stand" }]],
        chinese_meanings: "懂，理解",
      },
      {
        rank: 356,
        word: "until",
        pronunciation: [["uhn-", { style: "bold", text: "til" }]],
        chinese_meanings: "到…为止，在…以前",
      },
      {
        rank: 422,
        word: "under",
        pronunciation: [[{ style: "bold", text: "uhn" }, "-der"]],
        chinese_meanings:
          "在…下面，在表面之下，在…的假定表面或掩饰下，少于，小于，在…情况下",
      },
      {
        rank: 472,
        word: "lunch",
        pronunciation: [["luhnch"]],
        chinese_meanings: "午餐",
      },
      {
        rank: 559,
        word: "country",
        pronunciation: [[{ style: "bold", text: "kuhn" }, "-tree"]],
        chinese_meanings: "国家，国民，乡下，地区",
      },
      {
        rank: 650,
        word: "gun",
        pronunciation: [["guhn"]],
        chinese_meanings: "枪，发令枪声，受雇杀人的枪手，喷射器",
      },
      {
        rank: 671,
        word: "hundred",
        pronunciation: [[{ style: "bold", text: "huhn" }, "-drid"]],
        chinese_meanings: "一百，许多，100到999间的数目，某个世纪的年代",
      },
    ],
  },
  {
    phoneme: "əɫ",
    grapheme: "ull",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 2640,
        word: "skull",
        pronunciation: [["skuhl"]],
        chinese_meanings: "颅骨，头盖骨，脑袋，脑子，冶渣壳，熔铁上的浮渣",
      },
      {
        rank: 2681,
        word: "awfully",
        pronunciation: [
          [
            { style: "bold", text: "aw" },
            "-f",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "awf" }, "-lee"],
        ],
        chinese_meanings: "非常，极其，令人畏惧地，恶劣地",
      },
      {
        rank: 2703,
        word: "carefully",
        pronunciation: [
          [
            { style: "bold", text: "kair" },
            "-f",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "小心谨慎地，警惕地，仔细地，周密地",
      },
      {
        rank: 2924,
        word: "hopefully",
        pronunciation: [
          [
            { style: "bold", text: "hohp" },
            "-f",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "有希望地，有前途地，抱有希望地",
      },
      {
        rank: 4382,
        word: "dull",
        pronunciation: [["duhl"]],
        chinese_meanings: "钝的，迟钝的，呆滞的，阴暗的",
      },
    ],
  },
  {
    phoneme: "əɡ",
    grapheme: "ug",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 678,
        word: "ugh",
        pronunciation: [
          [
            { style: "italic", text: "oo" },
            { style: "small-caps", text: "kh" },
          ],
          ["uh", { style: "small-caps", text: "kh" }],
          ["uh"],
          [{ style: "italic", text: "oo" }],
        ],
        chinese_meanings: "（表示厌恶等）呸，啊，嘿",
      },
      {
        rank: 794,
        word: "drug",
        pronunciation: [["druhg"]],
        chinese_meanings: "药物，药剂，麻醉药，毒品",
      },
      {
        rank: 961,
        word: "ugly",
        pronunciation: [[{ style: "bold", text: "uhg" }, "-lee"]],
        chinese_meanings: "难看的，丑陋的，有敌意的，不祥的",
      },
      {
        rank: 1604,
        word: "hug",
        pronunciation: [["huhg"]],
        chinese_meanings: "热烈地拥抱，抱住，紧抱",
      },
      {
        rank: 3913,
        word: "bug",
        pronunciation: [["buhg"]],
        chinese_meanings: "昆虫，陷，瑕疵，细菌，病菌，窃听器",
      },
      {
        rank: 3764,
        word: "mug",
        pronunciation: [["muhg"]],
        chinese_meanings:
          "马克杯，杯子，<口>容易受骗的人，<俚>脸，一缸子（的量）",
      },
      {
        rank: 3267,
        word: "rug",
        pronunciation: [["ruhg"]],
        chinese_meanings:
          "小块地毯，〈英〉（围盖膝的）围毯，车毯，〈美俚男子假发",
      },
      {
        rank: 3438,
        word: "smug",
        pronunciation: [["smuhg"]],
        chinese_meanings: "自鸣得意的，自以为是的，整洁的，体面的",
      },
      {
        rank: 3472,
        word: "plug",
        pronunciation: [["pluhg"]],
        chinese_meanings: "塞子，插头，消防栓，（内燃机的）火花塞",
      },
      {
        rank: 3900,
        word: "struggle",
        pronunciation: [
          [
            { style: "bold", text: "struhg" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "搏斗，奋斗，努力，争取",
      },
    ],
  },
  {
    phoneme: "ət",
    grapheme: "ut",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 35,
        word: "but",
        pronunciation: [["buht"]],
        chinese_meanings: "但是，而是，除了，只因为",
      },
      {
        rank: 344,
        word: "shut",
        pronunciation: [["shuht"]],
        chinese_meanings: "关闭，合上，打烊，闭上",
      },
      {
        rank: 414,
        word: "cut",
        pronunciation: [["kuht"]],
        chinese_meanings: "将（某物）切开（或分割）",
      },
      {
        rank: 699,
        word: "butt",
        pronunciation: [["buht"]],
        chinese_meanings:
          "烟蒂，屁股，笑柄，（武器或工具的）粗大的一端，大酒桶",
      },
      {
        rank: 1023,
        word: "button",
        pronunciation: [[{ style: "bold", text: "buht" }, "-n"]],
        chinese_meanings: "按钮，电钮，纽扣，扣子，扣状物，植芽",
      },
      {
        rank: 1117,
        word: "nuts",
        pronunciation: [["nuhts"]],
        chinese_meanings: "<俚>发疯的，傻的，<美俚>热爱的，迷恋的",
      },
      {
        rank: 1232,
        word: "butter",
        pronunciation: [[{ style: "bold", text: "buht" }, "-er"]],
        chinese_meanings: "黄油，黄油状的食品，奉承话，焊膏",
      },
      {
        rank: 1320,
        word: "peanut",
        pronunciation: [
          [{ style: "bold", text: "pee" }, "-nuht"],
          ["-n", { style: "italic", text: "uh" }, "t"],
        ],
        chinese_meanings: "花生，微不足道的人，小人物，很少的钱",
      },
      {
        rank: 1466,
        word: "nut",
        pronunciation: [["nuht"]],
        chinese_meanings: "螺母，螺帽，坚果，坚果果仁，难对付的人，乐弓根",
      },
      {
        rank: 1610,
        word: "doughnut",
        pronunciation: [
          [
            { style: "bold", text: "doh" },
            "-n",
            { style: "italic", text: "uh" },
            "t",
          ],
          ["-nuht"],
        ],
        chinese_meanings: "炸面圈，圈饼，汽车轮胎，环状物，电子回旋加速室",
      },
    ],
  },
  {
    phoneme: "əs",
    grapheme: "us",
    graphemeType: "ShortVowel+",
    words: [
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      {
        rank: 90,
        word: "us",
        pronunciation: [["uhs"]],
        chinese_meanings: "我们",
      },
      {
        rank: 233,
        word: "must",
        pronunciation: [["muhst"]],
        chinese_meanings: "必须，必然要，（做出逻辑推断），（表示坚持）",
      },
      {
        rank: 367,
        word: "business",
        pronunciation: [[{ style: "bold", text: "biz" }, "-nis"]],
        chinese_meanings: "商业，交易，生意，事务，业务，职业，行业",
      },
      {
        rank: 519,
        word: "serious",
        pronunciation: [
          [
            { style: "bold", text: "seer" },
            "-ee-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "严肃的，严重的，认真的，庄重的，重要的，危险的",
      },
      {
        rank: 558,
        word: "seriously",
        pronunciation: [
          [
            { style: "bold", text: "seer" },
            "-ee-",
            { style: "italic", text: "uh" },
            "s-lee",
          ],
        ],
        chinese_meanings: "认真地，严肃地，严重地",
      },
      {
        rank: 641,
        word: "trust",
        pronunciation: [["truhst"]],
        chinese_meanings: "信任，信托，照管，受托基金机构",
      },
      {
        rank: 720,
        word: "ridiculous",
        pronunciation: [
          [
            "ri-",
            { style: "bold", text: "dik" },
            "-y",
            { style: "italic", text: "uh" },
            "-l",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "可笑的，荒谬的，荒唐的，愚蠢的，胡枝扯叶",
      },
      {
        rank: 775,
        word: "bus",
        pronunciation: [["buhs"]],
        chinese_meanings:
          "公共汽车，巴士，客机，（口）汽车，机器脚踏车，飞机，计（电脑的）总线，电信息转移通路，悔流条，母线",
      },
      { rank: 828, word: "obviously", chinese_meanings: "明显地" },
    ],
  },
];
