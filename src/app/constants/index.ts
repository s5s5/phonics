export type Word = {
  rank: number;
  word: string;
  pronunciation?: (string | { style: string; text: string })[][];
  chinese_meanings?: string;
};

export type Phonics = {
  phoneme: string;
  grapheme: string;
  graphemeType: string;
  pronunciation?: string;
  tips?: string;
  words: Word[];
};

export const PHONICS_LIST: Phonics[] = [
  {
    phoneme: "æ",
    grapheme: "a",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 9,
        word: "that",
        pronunciation: [[{ style: "italic", text: "th" }, "at"]],
        chinese_meanings: "那个，那",
      },
      {
        rank: 10,
        word: "and",
        pronunciation: [["and"]],
        chinese_meanings: "和，与，而且，于是，然后，因此",
      },
      {
        rank: 13,
        word: "have",
        pronunciation: [["hav"]],
        chinese_meanings: "用以构成完成式及完成式的不定式，表示已经…",
      },
      {
        rank: 23,
        word: "can",
        pronunciation: [["kan"]],
        chinese_meanings: "能，能够，可以，可能",
      },
      {
        rank: 36,
        word: "yeah",
        pronunciation: [["yai"]],
        chinese_meanings:
          "(yes的俗音)，（用于表示对后说的话不相信），（用于作出回应）哦，是",
      },
      {
        rank: 48,
        word: "at",
        pronunciation: [["at"]],
        chinese_meanings: "（表示位置）在，在（某时间或时刻），以，达，向，朝",
      },
      {
        rank: 78,
        word: "as",
        pronunciation: [["az"]],
        chinese_meanings: "同样地，一样地，例如",
      },
      {
        rank: 4481,
        word: "back",
        pronunciation: [["bak"]],
        chinese_meanings: "背，背部，背面，反面，后面，后部，（椅子等的）靠背",
      },
      {
        rank: 86,
        word: "man",
        pronunciation: [["man"]],
        chinese_meanings: "男人，人类，男子汉，雇工",
      },
      {
        rank: 94,
        word: "shall",
        pronunciation: [["shal"]],
        chinese_meanings: "将要，必须，可以，应该",
      },
    ],
  },
  {
    phoneme: "b",
    grapheme: "b",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 1,
        word: "be",
        pronunciation: [["bee"]],
        chinese_meanings: "是，有，存在，做，成为，发生",
      },
      {
        rank: 35,
        word: "but",
        pronunciation: [["buht"]],
        chinese_meanings: "但是，而是，除了，只因为",
      },
      {
        rank: 42,
        word: "about",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "bout" },
          ],
        ],
        chinese_meanings: "关于，大约，在…周围",
      },
      {
        rank: 79,
        word: "because",
        pronunciation: [
          ["bih-", { style: "bold", text: "kawz" }],
          ["-", { style: "bold", text: "koz" }],
          ["-", { style: "bold", text: "kuhz" }],
        ],
        chinese_meanings: "因为",
      },
      {
        rank: 4481,
        word: "back",
        pronunciation: [["bak"]],
        chinese_meanings: "背，背部，背面，反面，后面，后部，（椅子等的）靠背",
      },
      {
        rank: 105,
        word: "by",
        pronunciation: [["bahy"]],
        chinese_meanings: "在…旁边，表示方式，由于，经过",
      },
      {
        rank: 120,
        word: "big",
        pronunciation: [["big"]],
        chinese_meanings: "大的，重要的，（计划）庞大的，大方的",
      },
      {
        rank: 123,
        word: "maybe",
        pronunciation: [[{ style: "bold", text: "mey" }, "-bee"]],
        chinese_meanings: "也许，可能，大概",
      },
      {
        rank: 131,
        word: "boy",
        pronunciation: [["boi"]],
        chinese_meanings: "男孩，少年，儿子，小伙子，家伙，服务员",
      },
      {
        rank: 138,
        word: "bad",
        pronunciation: [["bad"]],
        chinese_meanings: "坏的，不好的，严重的，不舒服的，低劣的，有害的",
      },
    ],
  },
  {
    phoneme: "k",
    grapheme: "c",
    graphemeType: "Alphabet",
    pronunciation: "k",
    tips: "c 在单词开头",
    words: [
      {
        rank: 23,
        word: "can",
        pronunciation: [["kan"]],
        chinese_meanings: "能，能够，可以，可能",
      },
      {
        rank: 44,
        word: "come",
        pronunciation: [["kuhm"]],
        chinese_meanings: "来，开始，出现，发生",
      },
      {
        rank: 79,
        word: "because",
        pronunciation: [
          ["bih-", { style: "bold", text: "kawz" }],
          ["-", { style: "bold", text: "koz" }],
          ["-", { style: "bold", text: "kuhz" }],
        ],
        chinese_meanings: "因为",
      },
      {
        rank: 4481,
        word: "back",
        pronunciation: [["bak"]],
        chinese_meanings: "背，背部，背面，反面，后面，后部，（椅子等的）靠背",
      },
      {
        rank: 103,
        word: "call",
        pronunciation: [["kawl"]],
        chinese_meanings: "呼唤，喊叫，召唤，叫来，召集，下令，命令，打电话给",
      },
      {
        rank: 193,
        word: "actually",
        pronunciation: [
          [
            { style: "bold", text: "ak" },
            "-choo-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "实际上，事实上，确实，竟",
      },
      {
        rank: 210,
        word: "school",
        pronunciation: [["skool"]],
        chinese_meanings: "学校，上学，学院，群",
      },
      {
        rank: 214,
        word: "care",
        pronunciation: [["kair"]],
        chinese_meanings: "关心，担心，照顾，喜爱",
      },
      {
        rank: 215,
        word: "car",
        pronunciation: [["kahr"]],
        chinese_meanings: "汽车，车厢，轿车",
      },
      {
        rank: 252,
        word: "course",
        pronunciation: [["kawrs"], ["kohrs"]],
        chinese_meanings: "课程，航线，行动方向，一道菜",
      },
    ],
  },
  {
    phoneme: "d",
    grapheme: "d",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 10,
        word: "and",
        pronunciation: [["and"]],
        chinese_meanings: "和，与，而且，于是，然后，因此",
      },
      {
        rank: 12,
        word: "do",
        pronunciation: [["doo"]],
        chinese_meanings: "构成疑问句和否定句，代替动词，用于加强语气",
      },
      {
        rank: 43,
        word: "good",
        pronunciation: [["g", { style: "italic", text: "oo" }, "d"]],
        chinese_meanings: "好的，优秀的，有益的，漂亮的，健全的",
      },
      {
        rank: 92,
        word: "need",
        pronunciation: [["need"]],
        chinese_meanings: "需要，必须",
      },
      {
        rank: 111,
        word: "down",
        pronunciation: [["doun"]],
        chinese_meanings:
          "（坐、倒、躺）下，向下，（表示范围或顺序的限度）下至",
      },
      {
        rank: 112,
        word: "day",
        pronunciation: [["dey"]],
        chinese_meanings: "一天，白天，时期，节日",
      },
      { rank: 550, word: "god", pronunciation: [["god"]] },
      {
        rank: 122,
        word: "dad",
        pronunciation: [["dad"]],
        chinese_meanings: "爸爸，爹爹",
      },
      {
        rank: 125,
        word: "friend",
        pronunciation: [["frend"]],
        chinese_meanings: "朋友，友人，资助者，助手，近亲",
      },
      {
        rank: 128,
        word: "find",
        pronunciation: [["fahynd"]],
        chinese_meanings: "发现，找到，查明，发觉",
      },
    ],
  },
  {
    phoneme: "ɛ",
    grapheme: "e",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 17,
        word: "get",
        pronunciation: [["get"]],
        chinese_meanings: "得到，抓住，说服，受到（惩罚等）",
      },
      {
        rank: 4245,
        word: "well",
        pronunciation: [["wel"]],
        chinese_meanings: "好，很，好意地，高高兴兴地",
      },
      {
        rank: 62,
        word: "let",
        pronunciation: [["let"]],
        chinese_meanings: "允许，任由，让，随，假设，出租",
      },
      {
        rank: 67,
        word: "tell",
        pronunciation: [["tel"]],
        chinese_meanings: "告诉，说，辨别，吩咐，讲述",
      },
      {
        rank: 70,
        word: "there",
        pronunciation: [[{ style: "italic", text: "th" }, "air"]],
        chinese_meanings: "在那里，那里，在那一点上",
      },
      {
        rank: 77,
        word: "when",
        pronunciation: [["wen"], ["hwen"]],
        chinese_meanings:
          "什么时候，（用于时间的表达方式之后）在那时，其时，当时",
      },
      {
        rank: 82,
        word: "yes",
        pronunciation: [["yes"]],
        chinese_meanings:
          "是，（表示刚想起某事）哦，（表示不相信某人所言）真的吗，（鼓励某人继续讲）往下说",
      },
      {
        rank: 91,
        word: "them",
        pronunciation: [[{ style: "italic", text: "th" }, "em"]],
        chinese_meanings: "他们，她们，它们",
      },
      {
        rank: 93,
        word: "then",
        pronunciation: [[{ style: "italic", text: "th" }, "en"]],
        chinese_meanings: "那时，然后，那么，话说回来",
      },
      {
        rank: 99,
        word: "where",
        pronunciation: [["wair"], ["hwair"]],
        chinese_meanings: "哪里，在哪里，到哪里，某种情势或位置",
      },
    ],
  },
  {
    phoneme: "f",
    grapheme: "f",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 26,
        word: "for",
        pronunciation: [["fawr"]],
        chinese_meanings: "为，为了，倾向于，关于，当作",
      },
      {
        rank: 53,
        word: "if",
        pronunciation: [["if"]],
        chinese_meanings: "如果，倘若，即使，〈口〉是否，假设",
      },
      {
        rank: 74,
        word: "from",
        pronunciation: [["fruhm"], ["from"]],
        chinese_meanings:
          "（表示时间）从…，（表示原因）因为，（表示来源）来自…，（表示分离）与…分离隔开",
      },
      {
        rank: 117,
        word: "off",
        pronunciation: [["awf"], ["of"]],
        chinese_meanings: "从…落下，离开，从…去掉，下班",
      },
      {
        rank: 124,
        word: "feel",
        pronunciation: [["feel"]],
        chinese_meanings: "感觉，认为，触摸，试探",
      },
      {
        rank: 125,
        word: "friend",
        pronunciation: [["frend"]],
        chinese_meanings: "朋友，友人，资助者，助手，近亲",
      },
      {
        rank: 128,
        word: "find",
        pronunciation: [["fahynd"]],
        chinese_meanings: "发现，找到，查明，发觉",
      },
      {
        rank: 143,
        word: "first",
        pronunciation: [["furst"]],
        chinese_meanings: "第一，最初，头等，一号，，乐高音部",
      },
      {
        rank: 155,
        word: "life",
        pronunciation: [["lahyf"]],
        chinese_meanings: "生活，生计，生命，性命，一生，寿命，人生，尘世",
      },
      {
        rank: 164,
        word: "fine",
        pronunciation: [["fahyn"]],
        chinese_meanings: "好的，上等的，纤细的，精致的，健康的，晴朗的",
      },
    ],
  },
  {
    phoneme: "ɡ",
    grapheme: "g",
    graphemeType: "Alphabet",
    pronunciation: "g",
    tips: "g 一般情况",
    words: [
      {
        rank: 17,
        word: "get",
        pronunciation: [["get"]],
        chinese_meanings: "得到，抓住，说服，受到（惩罚等）",
      },
      {
        rank: 21,
        word: "go",
        pronunciation: [["goh"]],
        chinese_meanings: "走，离开，去做，进行",
      },
      {
        rank: 43,
        word: "good",
        pronunciation: [["g", { style: "italic", text: "oo" }, "d"]],
        chinese_meanings: "好的，优秀的，有益的，漂亮的，健全的",
      },
      {
        rank: 60,
        word: "guy",
        pronunciation: [["gahy"]],
        chinese_meanings:
          "家伙，伙计，（架设天线、支撑帐篷等用的）牵索，复数各位，一群男人（或女人）",
      },
      {
        rank: 88,
        word: "give",
        pronunciation: [["giv"]],
        chinese_meanings: "给予，赠送，作出",
      },
      {
        rank: 100,
        word: "great",
        pronunciation: [["greyt"]],
        chinese_meanings: "伟大的，杰出的，优异的，显著的，很多的，重大的",
      },
      { rank: 550, word: "god", pronunciation: [["god"]] },
      {
        rank: 120,
        word: "big",
        pronunciation: [["big"]],
        chinese_meanings: "大的，重要的，（计划）庞大的，大方的",
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
        rank: 167,
        word: "girl",
        pronunciation: [["gurl"]],
        chinese_meanings:
          "女孩，姑娘，未婚女子，女职员，女演员，（男人的）女朋友",
      },
    ],
  },
  {
    phoneme: "h",
    grapheme: "h",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 13,
        word: "have",
        pronunciation: [["hav"]],
        chinese_meanings: "用以构成完成式及完成式的不定式，表示已经…",
      },
      {
        rank: 14,
        word: "what",
        pronunciation: [["wuht"], ["wot"], ["hwuht"], ["hwot"]],
        chinese_meanings: "（用以询问某人或某事物的词）什么，多少，…的事物",
      },
      {
        rank: 34,
        word: "he",
        pronunciation: [["hee"]],
        chinese_meanings: "他，它，一个人",
      },
      {
        rank: 39,
        word: "here",
        pronunciation: [["heer"]],
        chinese_meanings:
          "在这里，这时，在这一点上，（给某人东西或指出某物时说）",
      },
      {
        rank: 50,
        word: "hey",
        pronunciation: [["hey"]],
        chinese_meanings:
          "（用以引起注意，表示惊异或询问）嘿，喂，你好！（表示问候），咳",
      },
      {
        rank: 54,
        word: "how",
        pronunciation: [["hou"]],
        chinese_meanings: "怎样，健康状况如何，到何种地步，以任何方式",
      },
      {
        rank: 65,
        word: "her",
        pronunciation: [["hur"]],
        chinese_meanings:
          "(she的宾格)她，(she的所有格)她的，她，指某个国家，（一艘）船",
      },
      {
        rank: 68,
        word: "him",
        pronunciation: [["him"]],
        chinese_meanings: "(he的宾格)他",
      },
      {
        rank: 69,
        word: "why",
        pronunciation: [["wahy"], ["hwahy"]],
        chinese_meanings:
          "（用于问句）为什么，为何，（反问，表示不必）何必，（说明理由）为什么",
      },
      {
        rank: 71,
        word: "who",
        pronunciation: [["hoo"]],
        chinese_meanings: "谁，什么人，关系代词，有先行词，孰",
      },
    ],
  },
  {
    phoneme: "ɪ",
    grapheme: "i",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 7,
        word: "it",
        pronunciation: [["it"]],
        chinese_meanings: "它，他，正好是所需的，事实情况",
      },
      {
        rank: 16,
        word: "in",
        pronunciation: [["in"]],
        chinese_meanings:
          "采用（某种方式），穿着，带着，（表示位置）在…里面，（表示领域，范围）在…以内，（表示品质、能力等）在…之中",
      },
      {
        rank: 18,
        word: "this",
        pronunciation: [[{ style: "italic", text: "th" }, "is"]],
        chinese_meanings: "这，这个，这事，这人，这时，下面所说的事",
      },
      {
        rank: 33,
        word: "with",
        pronunciation: [["with"], ["wi", { style: "italic", text: "th" }]],
        chinese_meanings: "和，跟，随着，关于，和…一致",
      },
      {
        rank: 38,
        word: "think",
        pronunciation: [["thingk"]],
        chinese_meanings: "想，思索，以为，看待",
      },
      {
        rank: 53,
        word: "if",
        pronunciation: [["if"]],
        chinese_meanings: "如果，倘若，即使，〈口〉是否，假设",
      },
      {
        rank: 55,
        word: "like",
        pronunciation: [["lahyk"]],
        chinese_meanings:
          "喜欢，（与would或should连用表示客气）想，想要，喜欢做",
      },
      {
        rank: 990,
        word: "right",
        pronunciation: [["rahyt"]],
        chinese_meanings: "立刻，马上，向右，右边，恰当地，一直",
      },
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
    ],
  },
  {
    phoneme: "dʒ",
    grapheme: "j",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      {
        rank: 227,
        word: "job",
        pronunciation: [["job"]],
        chinese_meanings:
          "（一件）工作，职责，职业，（作为一个单元处理的）作业",
      },
      {
        rank: 442,
        word: "enjoy",
        pronunciation: [["en-", { style: "bold", text: "joi" }]],
        chinese_meanings: "享有，享受，欣赏，喜欢，使过得快活",
      },
      {
        rank: 1982,
        word: "joke",
        pronunciation: [["johk"]],
        chinese_meanings: "笑话，玩笑，笑柄，笑料",
      },
      {
        rank: 599,
        word: "join",
        pronunciation: [["join"]],
        chinese_meanings: "连接，联结，加入，参加",
      },
      {
        rank: 760,
        word: "jump",
        pronunciation: [["juhmp"]],
        chinese_meanings:
          "跳，跳过，快速移动，（因吃惊、害怕或激动而）猛地一动",
      },
      {
        rank: 808,
        word: "jerk",
        pronunciation: [["jurk"]],
        chinese_meanings: "猛拉，把（牛肉）切成薄片晒干",
      },
      {
        rank: 830,
        word: "jacket",
        pronunciation: [[{ style: "bold", text: "jak" }, "-it"]],
        chinese_meanings: "短上衣，夹克，土豆皮，书籍的护封，文件套，公文夹",
      },
      {
        rank: 1062,
        word: "project",
        pronunciation: [[{ style: "bold", text: "proj" }, "-ekt"], ["-ikt"]],
        chinese_meanings: "放映，计划，发射，展现，使突出",
      },
      {
        rank: 1109,
        word: "jealous",
        pronunciation: [
          [
            { style: "bold", text: "jel" },
            "-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "妒忌的，羡慕的，精心守护的，吃醋的",
      },
    ],
  },
  {
    phoneme: "k",
    grapheme: "k",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 38,
        word: "think",
        pronunciation: [["thingk"]],
        chinese_meanings: "想，思索，以为，看待",
      },
      {
        rank: 55,
        word: "like",
        pronunciation: [["lahyk"]],
        chinese_meanings:
          "喜欢，（与would或should连用表示客气）想，想要，喜欢做",
      },
      {
        rank: 57,
        word: "look",
        pronunciation: [["l", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "看，瞧",
      },
      {
        rank: 58,
        word: "make",
        pronunciation: [["meyk"]],
        chinese_meanings: "做，制造，生产，制定，使成为，使产生",
      },
      {
        rank: 61,
        word: "take",
        pronunciation: [["teyk"]],
        chinese_meanings: "拿，取，采取，接受（礼物等），耗费（时间等）",
      },
      {
        rank: 97,
        word: "okay",
        pronunciation: [
          [{ style: "bold", text: "oh" }, "-", { style: "bold", text: "key" }],
          ["oh-", { style: "bold", text: "key" }],
          [{ style: "bold", text: "oh" }, "-key"],
        ],
        chinese_meanings: "认可，同意",
      },
      {
        rank: 4481,
        word: "back",
        pronunciation: [["bak"]],
        chinese_meanings: "背，背部，背面，反面，后面，后部，（椅子等的）靠背",
      },
      {
        rank: 96,
        word: "talk",
        pronunciation: [["tawk"]],
        chinese_meanings: "说话，讨论，讲，说，说闲话",
      },
      {
        rank: 118,
        word: "work",
        pronunciation: [["wurk"]],
        chinese_meanings: "使工作，使运作，操作，使产生效果",
      },
      {
        rank: 119,
        word: "thank",
        pronunciation: [["thangk"]],
        chinese_meanings: "谢谢，感谢，责怪，把…归于",
      },
    ],
  },
  {
    phoneme: "ɫ",
    grapheme: "l",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 31,
        word: "all",
        pronunciation: [["awl"]],
        chinese_meanings: "全部的，一切的，各种的，极度的，尽量的",
      },
      {
        rank: 4245,
        word: "well",
        pronunciation: [["wel"]],
        chinese_meanings: "好，很，好意地，高高兴兴地",
      },
      {
        rank: 55,
        word: "like",
        pronunciation: [["lahyk"]],
        chinese_meanings:
          "喜欢，（与would或should连用表示客气）想，想要，喜欢做",
      },
      {
        rank: 57,
        word: "look",
        pronunciation: [["l", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "看，瞧",
      },
      {
        rank: 62,
        word: "let",
        pronunciation: [["let"]],
        chinese_meanings: "允许，任由，让，随，假设，出租",
      },
      {
        rank: 63,
        word: "really",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "ree" }, "-lee"],
        ],
        chinese_meanings: "真，真正，实在，果真，实际上，事实上",
      },
      {
        rank: 67,
        word: "tell",
        pronunciation: [["tel"]],
        chinese_meanings: "告诉，说，辨别，吩咐，讲述",
      },
      {
        rank: 75,
        word: "will",
        pronunciation: [["wil"]],
        chinese_meanings: "愿意，意志（力），法遗嘱",
      },
      {
        rank: 87,
        word: "little",
        pronunciation: [[{ style: "bold", text: "lit" }, "-l"]],
        chinese_meanings: "小的，琐碎的，娇小的，幼小的",
      },
      {
        rank: 94,
        word: "shall",
        pronunciation: [["shal"]],
        chinese_meanings: "将要，必须，可以，应该",
      },
    ],
  },
  {
    phoneme: "m",
    grapheme: "m",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 19,
        word: "my",
        pronunciation: [["mahy"]],
        chinese_meanings: "我的(I的所有格形式)",
      },
      {
        rank: 20,
        word: "me",
        pronunciation: [["mee"]],
        chinese_meanings: "（人称代词I的宾格）我",
      },
      {
        rank: 44,
        word: "come",
        pronunciation: [["kuhm"]],
        chinese_meanings: "来，开始，出现，发生",
      },
      {
        rank: 58,
        word: "make",
        pronunciation: [["meyk"]],
        chinese_meanings: "做，制造，生产，制定，使成为，使产生",
      },
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
        rank: 74,
        word: "from",
        pronunciation: [["fruhm"], ["from"]],
        chinese_meanings:
          "（表示时间）从…，（表示原因）因为，（表示来源）来自…，（表示分离）与…分离隔开",
      },
      {
        rank: 80,
        word: "some",
        pronunciation: [["suhm"]],
        chinese_meanings: "一些，某个，大约，相当多的",
      },
      {
        rank: 85,
        word: "mean",
        pronunciation: [["meen"]],
        chinese_meanings: "表示…的意思，意思是，打算，产生…结果",
      },
      {
        rank: 86,
        word: "man",
        pronunciation: [["man"]],
        chinese_meanings: "男人，人类，男子汉，雇工",
      },
    ],
  },
  {
    phoneme: "n",
    grapheme: "n",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 8,
        word: "not",
        pronunciation: [["not"]],
        chinese_meanings:
          "不，用以表示否定、否认、拒绝、禁止等不是，几乎不，未必，没有用于否定后面的词或短语",
      },
      {
        rank: 10,
        word: "and",
        pronunciation: [["and"]],
        chinese_meanings: "和，与，而且，于是，然后，因此",
      },
      {
        rank: 16,
        word: "in",
        pronunciation: [["in"]],
        chinese_meanings:
          "采用（某种方式），穿着，带着，（表示位置）在…里面，（表示领域，范围）在…以内，（表示品质、能力等）在…之中",
      },
      {
        rank: 23,
        word: "can",
        pronunciation: [["kan"]],
        chinese_meanings: "能，能够，可以，可能",
      },
      {
        rank: 24,
        word: "no",
        pronunciation: [["noh"]],
        chinese_meanings: "不，否，一点也没有",
      },
      {
        rank: 25,
        word: "on",
        pronunciation: [["on"], ["awn"]],
        chinese_meanings:
          "（表示方向）向，（表示对象）对，（表示位置）在…上，（表示时间）在…之时",
      },
      {
        rank: 27,
        word: "know",
        pronunciation: [["noh"]],
        chinese_meanings: "知道，了解，认识，确信",
      },
      {
        rank: 40,
        word: "want",
        pronunciation: [["wont"], ["wawnt"]],
        chinese_meanings: "想要，希望，打算，需要…在场",
      },
      {
        rank: 47,
        word: "now",
        pronunciation: [["nou"]],
        chinese_meanings:
          "现在，其时，立刻，（改变话题或要对方做某事前，引起对方注意）喂",
      },
      {
        rank: 49,
        word: "one",
        pronunciation: [["wuhn"]],
        chinese_meanings: "（数字）一，一个，（基数）一，第一",
      },
    ],
  },
  {
    phoneme: "ɑ",
    grapheme: "o",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 8,
        word: "not",
        pronunciation: [["not"]],
        chinese_meanings:
          "不，用以表示否定、否认、拒绝、禁止等不是，几乎不，未必，没有用于否定后面的词或短语",
      },
      {
        rank: 25,
        word: "on",
        pronunciation: [["on"], ["awn"]],
        chinese_meanings:
          "（表示方向）向，（表示对象）对，（表示位置）在…上，（表示时间）在…之时",
      },
      {
        rank: 81,
        word: "our",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "我们的，we的所有格形式，<口>我们家，敝",
      },
      {
        rank: 106,
        word: "sorry",
        pronunciation: [
          [{ style: "bold", text: "sor" }, "-ee"],
          [{ style: "bold", text: "sawr" }, "-ee"],
        ],
        chinese_meanings: "对不起的，无价值的，低等的，遗憾的，感到伤心的",
      },
      { rank: 550, word: "god", pronunciation: [["god"]] },
      {
        rank: 136,
        word: "stop",
        pronunciation: [["stop"]],
        chinese_meanings: "停止，中断，逗留，（使）停止工作",
      },
      {
        rank: 152,
        word: "mom",
        pronunciation: [["mom"]],
        chinese_meanings: "<美>妈妈",
      },
      {
        rank: 171,
        word: "lot",
        pronunciation: [["lot"]],
        chinese_meanings: "份额，许多，命运，阄",
      },
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
    ],
  },
  {
    phoneme: "p",
    grapheme: "p",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 45,
        word: "up",
        pronunciation: [["uhp"]],
        chinese_meanings: "在上面，在高处，起床，起来，向上，由低到高",
      },
      {
        rank: 114,
        word: "people",
        pronunciation: [
          [
            { style: "bold", text: "pee" },
            "-p",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "人，人类，居民，人民，种族",
      },
      {
        rank: 132,
        word: "put",
        pronunciation: [["p", { style: "italic", text: "oo" }, "t"]],
        chinese_meanings:
          "放，表达，给予（重视、信任、价值等），使处于（某种状态）",
      },
      {
        rank: 133,
        word: "please",
        pronunciation: [["pleez"]],
        chinese_meanings: "请",
      },
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
        rank: 136,
        word: "stop",
        pronunciation: [["stop"]],
        chinese_meanings: "停止，中断，逗留，（使）停止工作",
      },
      {
        rank: 166,
        word: "keep",
        pronunciation: [["keep"]],
        chinese_meanings: "保持，保留，遵守，阻止",
      },
      {
        rank: 168,
        word: "help",
        pronunciation: [["help"]],
        chinese_meanings: "帮助，有助于，有利于",
      },
      {
        rank: 172,
        word: "play",
        pronunciation: [["pley"]],
        chinese_meanings: "比赛，游戏，戏剧，赌博",
      },
      {
        rank: 2387,
        word: "place",
        pronunciation: [["pleys"]],
        chinese_meanings: "位，地方，职位，座位",
      },
    ],
  },
  {
    phoneme: "kw",
    grapheme: "q",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 561,
        word: "question",
        pronunciation: [
          [
            { style: "bold", text: "kwes" },
            "-ch",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "问题，疑问，怀疑，议题",
      },
      {
        rank: 563,
        word: "quite",
        pronunciation: [["kwahyt"]],
        chinese_meanings: "相当，很，非常，确实如此",
      },
      {
        rank: 631,
        word: "quick",
        pronunciation: [["kwik"]],
        chinese_meanings: "快的，急速的，聪明的，凌厉的，灵活的，短时间做成的",
      },
      {
        rank: 639,
        word: "quit",
        pronunciation: [["kwit"]],
        chinese_meanings: "离开，放弃，抛弃，停止，中断，偿清",
      },
      {
        rank: 1144,
        word: "quiet",
        pronunciation: [[{ style: "bold", text: "kwahy" }, "-it"]],
        chinese_meanings: "清静的，僻静的，不起眼的，不激动的",
      },
      {
        rank: 1261,
        word: "queen",
        pronunciation: [["kween"]],
        chinese_meanings:
          "女王，王后，杰出女性，（纸牌中的）王后，（国际象棋中的）后",
      },
      {
        rank: 1275,
        word: "square",
        pronunciation: [["skwair"]],
        chinese_meanings: "正方形，广场，平方，方格",
      },
      {
        rank: 1613,
        word: "quarter",
        pronunciation: [[{ style: "bold", text: "kwawr" }, "-ter"]],
        chinese_meanings: "四分之一，一刻钟，地区，（美式足球的）一节",
      },
      {
        rank: 1662,
        word: "quickly",
        pronunciation: [[{ style: "bold", text: "kwik" }, "-lee"]],
        chinese_meanings: "迅速地，立即，马上",
      },
      {
        rank: 1834,
        word: "squeeze",
        pronunciation: [["skweez"]],
        chinese_meanings: "挤，榨，捏，压迫，压榨",
      },
    ],
  },
  {
    phoneme: "ɹ",
    grapheme: "r",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 26,
        word: "for",
        pronunciation: [["fawr"]],
        chinese_meanings: "为，为了，倾向于，关于，当作",
      },
      {
        rank: 29,
        word: "your",
        pronunciation: [
          ["y", { style: "italic", text: "oo" }, "r"],
          ["yawr"],
          ["yohr"],
        ],
        chinese_meanings: "你的，你们的，尊，玉，乃",
      },
      {
        rank: 39,
        word: "here",
        pronunciation: [["heer"]],
        chinese_meanings:
          "在这里，这时，在这一点上，（给某人东西或指出某物时说）",
      },
      {
        rank: 990,
        word: "right",
        pronunciation: [["rahyt"]],
        chinese_meanings: "立刻，马上，向右，右边，恰当地，一直",
      },
      {
        rank: 63,
        word: "really",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "ree" }, "-lee"],
        ],
        chinese_meanings: "真，真正，实在，果真，实际上，事实上",
      },
      {
        rank: 70,
        word: "there",
        pronunciation: [[{ style: "italic", text: "th" }, "air"]],
        chinese_meanings: "在那里，那里，在那一点上",
      },
      {
        rank: 74,
        word: "from",
        pronunciation: [["fruhm"], ["from"]],
        chinese_meanings:
          "（表示时间）从…，（表示原因）因为，（表示来源）来自…，（表示分离）与…分离隔开",
      },
      {
        rank: 81,
        word: "our",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "我们的，we的所有格形式，<口>我们家，敝",
      },
      {
        rank: 95,
        word: "or",
        pronunciation: [["awr"]],
        chinese_meanings: "或，或者，还是，不然，否则，左右",
      },
      {
        rank: 99,
        word: "where",
        pronunciation: [["wair"], ["hwair"]],
        chinese_meanings: "哪里，在哪里，到哪里，某种情势或位置",
      },
    ],
  },
  {
    phoneme: "s",
    grapheme: "s",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 18,
        word: "this",
        pronunciation: [[{ style: "italic", text: "th" }, "is"]],
        chinese_meanings: "这，这个，这事，这人，这时，下面所说的事",
      },
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      { rank: 30, word: "'s", pronunciation: [["es"]] },
      {
        rank: 32,
        word: "so",
        pronunciation: [["soh"]],
        chinese_meanings: "这样，很，（表示程度）这么，同样",
      },
      {
        rank: 46,
        word: "say",
        pronunciation: [["sey"]],
        chinese_meanings: "说，讲，表明，宣称，假设，约莫",
      },
      {
        rank: 52,
        word: "see",
        pronunciation: [["see"]],
        chinese_meanings: "看见，领会，理解，查看，参观",
      },
      {
        rank: 80,
        word: "some",
        pronunciation: [["suhm"]],
        chinese_meanings: "一些，某个，大约，相当多的",
      },
      {
        rank: 82,
        word: "yes",
        pronunciation: [["yes"]],
        chinese_meanings:
          "是，（表示刚想起某事）哦，（表示不相信某人所言）真的吗，（鼓励某人继续讲）往下说",
      },
      {
        rank: 90,
        word: "us",
        pronunciation: [["uhs"]],
        chinese_meanings: "我们",
      },
      {
        rank: 98,
        word: "something",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-thing"]],
        chinese_meanings: "某物，某事，重要的事物人，有一定意义的事物",
      },
    ],
  },
  {
    phoneme: "t",
    grapheme: "t",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 6,
        word: "to",
        pronunciation: [["too"]],
        chinese_meanings: "向，朝着，到，关于，属于",
      },
      {
        rank: 7,
        word: "it",
        pronunciation: [["it"]],
        chinese_meanings: "它，他，正好是所需的，事实情况",
      },
      {
        rank: 8,
        word: "not",
        pronunciation: [["not"]],
        chinese_meanings:
          "不，用以表示否定、否认、拒绝、禁止等不是，几乎不，未必，没有用于否定后面的词或短语",
      },
      {
        rank: 9,
        word: "that",
        pronunciation: [[{ style: "italic", text: "th" }, "at"]],
        chinese_meanings: "那个，那",
      },
      {
        rank: 14,
        word: "what",
        pronunciation: [["wuht"], ["wot"], ["hwuht"], ["hwot"]],
        chinese_meanings: "（用以询问某人或某事物的词）什么，多少，…的事物",
      },
      {
        rank: 17,
        word: "get",
        pronunciation: [["get"]],
        chinese_meanings: "得到，抓住，说服，受到（惩罚等）",
      },
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      {
        rank: 35,
        word: "but",
        pronunciation: [["buht"]],
        chinese_meanings: "但是，而是，除了，只因为",
      },
      {
        rank: 40,
        word: "want",
        pronunciation: [["wont"], ["wawnt"]],
        chinese_meanings: "想要，希望，打算，需要…在场",
      },
      {
        rank: 41,
        word: "out",
        pronunciation: [["out"]],
        chinese_meanings: "出局，在外，在外部，完全，彻底，出版",
      },
    ],
  },
  {
    phoneme: "ə",
    grapheme: "u",
    graphemeType: "Alphabet",
    pronunciation: "uh",
    tips: "u 在 重读（多个元音时，重读的元音） 闭音节（元音字母被辅音字母关起来）",
    words: [
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      {
        rank: 35,
        word: "but",
        pronunciation: [["buht"]],
        chinese_meanings: "但是，而是，除了，只因为",
      },
      {
        rank: 42,
        word: "about",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "bout" },
          ],
        ],
        chinese_meanings: "关于，大约，在…周围",
      },
      {
        rank: 45,
        word: "up",
        pronunciation: [["uhp"]],
        chinese_meanings: "在上面，在高处，起床，起来，向上，由低到高",
      },
      {
        rank: 66,
        word: "uh",
        pronunciation: [["uh"], ["uh", { style: "small-caps", text: "n" }]],
        chinese_meanings: "upperhalf上半部，utilityhelicopter通用直升机",
      },
      {
        rank: 79,
        word: "because",
        pronunciation: [
          ["bih-", { style: "bold", text: "kawz" }],
          ["-", { style: "bold", text: "koz" }],
          ["-", { style: "bold", text: "kuhz" }],
        ],
        chinese_meanings: "因为",
      },
      {
        rank: 90,
        word: "us",
        pronunciation: [["uhs"]],
        chinese_meanings: "我们",
      },
      {
        rank: 135,
        word: "much",
        pronunciation: [["muhch"]],
        chinese_meanings: "非常，差不多，很多地，很大程度上",
      },
      {
        rank: 180,
        word: "huh",
        pronunciation: [["huh"]],
        chinese_meanings: "嘿（表示疑问、惊讶或异议）",
      },
      {
        rank: 193,
        word: "actually",
        pronunciation: [
          [
            { style: "bold", text: "ak" },
            "-choo-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "实际上，事实上，确实，竟",
      },
    ],
  },
  {
    phoneme: "v",
    grapheme: "v",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 13,
        word: "have",
        pronunciation: [["hav"]],
        chinese_meanings: "用以构成完成式及完成式的不定式，表示已经…",
      },
      {
        rank: 88,
        word: "give",
        pronunciation: [["giv"]],
        chinese_meanings: "给予，赠送，作出",
      },
      {
        rank: 102,
        word: "never",
        pronunciation: [[{ style: "bold", text: "nev" }, "-er"]],
        chinese_meanings:
          "从不，从来没有，一点也不，决不，<口>不会…吧，没有，不曾",
      },
      {
        rank: 107,
        word: "over",
        pronunciation: [[{ style: "bold", text: "oh" }, "-ver"]],
        chinese_meanings:
          "（表示方向）越过，（部份或全部覆盖）在…上面，由于，（表示论及）关于",
      },
      {
        rank: 108,
        word: "love",
        pronunciation: [["luhv"]],
        chinese_meanings: "爱，热爱，爱戴，喜欢，赞美，称赞",
      },
      {
        rank: 116,
        word: "very",
        pronunciation: [[{ style: "bold", text: "ver" }, "-ee"]],
        chinese_meanings: "很，非常，恰好是，正是，十足的，特有的",
      },
      {
        rank: 3601,
        word: "even",
        pronunciation: [
          [
            { style: "bold", text: "ee" },
            "-v",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "甚至，更加，即使，恰巧在…时候",
      },
      {
        rank: 144,
        word: "leave",
        pronunciation: [["leev"]],
        chinese_meanings: "离开，遗弃，忘了带，交托",
      },
      {
        rank: 148,
        word: "ever",
        pronunciation: [[{ style: "bold", text: "ev" }, "-er"]],
        chinese_meanings: "永远，曾经，这以前，究竟，到底，可能",
      },
      {
        rank: 169,
        word: "believe",
        pronunciation: [["bih-", { style: "bold", text: "leev" }]],
        chinese_meanings: "信任，料想，笃信宗教",
      },
    ],
  },
  {
    phoneme: "w",
    grapheme: "w",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 14,
        word: "what",
        pronunciation: [["wuht"], ["wot"], ["hwuht"], ["hwot"]],
        chinese_meanings: "（用以询问某人或某事物的词）什么，多少，…的事物",
      },
      {
        rank: 15,
        word: "we",
        pronunciation: [["wee"]],
        chinese_meanings: "我们，咱们，笔者，本人，朕，人们",
      },
      {
        rank: 33,
        word: "with",
        pronunciation: [["with"], ["wi", { style: "italic", text: "th" }]],
        chinese_meanings: "和，跟，随着，关于，和…一致",
      },
      {
        rank: 4245,
        word: "well",
        pronunciation: [["wel"]],
        chinese_meanings: "好，很，好意地，高高兴兴地",
      },
      {
        rank: 40,
        word: "want",
        pronunciation: [["wont"], ["wawnt"]],
        chinese_meanings: "想要，希望，打算，需要…在场",
      },
      {
        rank: 69,
        word: "why",
        pronunciation: [["wahy"], ["hwahy"]],
        chinese_meanings:
          "（用于问句）为什么，为何，（反问，表示不必）何必，（说明理由）为什么",
      },
      {
        rank: 75,
        word: "will",
        pronunciation: [["wil"]],
        chinese_meanings: "愿意，意志（力），法遗嘱",
      },
      {
        rank: 77,
        word: "when",
        pronunciation: [["wen"], ["hwen"]],
        chinese_meanings:
          "什么时候，（用于时间的表达方式之后）在那时，其时，当时",
      },
      {
        rank: 99,
        word: "where",
        pronunciation: [["wair"], ["hwair"]],
        chinese_meanings: "哪里，在哪里，到哪里，某种情势或位置",
      },
      {
        rank: 101,
        word: "way",
        pronunciation: [["wey"]],
        chinese_meanings: "道路，方法，方向，某方面",
      },
    ],
  },
  {
    phoneme: "ks",
    grapheme: "x",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 315,
        word: "next",
        pronunciation: [["nekst"]],
        chinese_meanings: "紧接在后的，次于的，贴近的，紧邻的",
      },
      {
        rank: 428,
        word: "six",
        pronunciation: [["siks"]],
        chinese_meanings: "六，六个，六岁，六点",
      },
      {
        rank: 466,
        word: "box",
        pronunciation: [["boks"]],
        chinese_meanings: "盒，箱状物，包厢，哨房",
      },
      {
        rank: 616,
        word: "relax",
        pronunciation: [["ri-", { style: "bold", text: "laks" }]],
        chinese_meanings: "（使）轻松，（使）松弛，放宽，（使）放松",
      },
      {
        rank: 662,
        word: "explain",
        pronunciation: [["ik-", { style: "bold", text: "spleyn" }]],
        chinese_meanings: "讲解，解释",
      },
      {
        rank: 672,
        word: "fix",
        pronunciation: [["fiks"]],
        chinese_meanings: "固定，准备，修理，使牢固",
      },
      {
        rank: 951,
        word: "excellent",
        pronunciation: [
          [
            { style: "bold", text: "ek" },
            "-s",
            { style: "italic", text: "uh" },
            "-l",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "卓越的，杰出的，优秀的，太好了",
      },
      {
        rank: 968,
        word: "extra",
        pronunciation: [
          [
            { style: "bold", text: "ek" },
            "-str",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "额外的，补充的，附加的，特大的，特别的",
      },
      {
        rank: 1341,
        word: "mix",
        pronunciation: [["miks"]],
        chinese_meanings: "混合，（使）结交，相容，平安相处",
      },
      {
        rank: 1396,
        word: "text",
        pronunciation: [["tekst"]],
        chinese_meanings: "文本，原文，课文，教科书，主题，版本",
      },
    ],
  },
  {
    phoneme: "j",
    grapheme: "y",
    graphemeType: "Alphabet",
    pronunciation: "y",
    tips: "y 在单词的开头",
    words: [
      {
        rank: 3,
        word: "you",
        pronunciation: [["yoo"]],
        chinese_meanings: "你，你们，您们，各位，大家",
      },
      {
        rank: 29,
        word: "your",
        pronunciation: [
          ["y", { style: "italic", text: "oo" }, "r"],
          ["yawr"],
          ["yohr"],
        ],
        chinese_meanings: "你的，你们的，尊，玉，乃",
      },
      {
        rank: 36,
        word: "yeah",
        pronunciation: [["yai"]],
        chinese_meanings:
          "(yes的俗音)，（用于表示对后说的话不相信），（用于作出回应）哦，是",
      },
      {
        rank: 82,
        word: "yes",
        pronunciation: [["yes"]],
        chinese_meanings:
          "是，（表示刚想起某事）哦，（表示不相信某人所言）真的吗，（鼓励某人继续讲）往下说",
      },
      {
        rank: 145,
        word: "year",
        pronunciation: [["yeer"]],
        chinese_meanings: "年，年纪，一年的期间，某年级的学生",
      },
      {
        rank: 296,
        word: "yourself",
        pronunciation: [
          [
            "y",
            { style: "italic", text: "oo" },
            "r-",
            { style: "bold", text: "self" },
          ],
          ["yawr-"],
          ["yohr-"],
          ["yer-"],
        ],
        chinese_meanings: "你自己，（用以加强语气）亲自，你的正常或健康的情况",
      },
      {
        rank: 352,
        word: "yet",
        pronunciation: [["yet"]],
        chinese_meanings: "但是，还，已经，又，再",
      },
      {
        rank: 386,
        word: "young",
        pronunciation: [["yuhng"]],
        chinese_meanings: "年幼的，有朝气的，年轻人的，青年的",
      },
      {
        rank: 569,
        word: "yours",
        pronunciation: [
          ["y", { style: "italic", text: "oo" }, "rz"],
          ["yawrz"],
          ["yohrz"],
        ],
        chinese_meanings: "你（们）的东西，你的责任义务，你的家属，来信，尊函",
      },
      {
        rank: 579,
        word: "yep",
        pronunciation: [["yep"]],
        chinese_meanings: "<俚>是",
      },
    ],
  },
  {
    phoneme: "z",
    grapheme: "z",
    graphemeType: "Alphabet",
    words: [
      {
        rank: 286,
        word: "crazy",
        pronunciation: [[{ style: "bold", text: "krey" }, "-zee"]],
        chinese_meanings: "疯狂的，不理智的，离奇的，生气的",
      },
      {
        rank: 439,
        word: "realize",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "-lahyz",
          ],
        ],
        chinese_meanings: "实现，了解，意识到，（所担心的事）发生，以…价格卖出",
      },
      {
        rank: 516,
        word: "amaze",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "meyz" },
          ],
        ],
        chinese_meanings: "使大为吃惊，使惊奇",
      },
      {
        rank: 525,
        word: "zero",
        pronunciation: [[{ style: "bold", text: "zeer" }, "-oh"]],
        chinese_meanings: "（数字）0，零度",
      },
      {
        rank: 713,
        word: "apologize",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pol" },
            "-",
            { style: "italic", text: "uh" },
            "-jahyz",
          ],
        ],
        chinese_meanings: "道歉，认错，辩解，辩护",
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
        rank: 979,
        word: "size",
        pronunciation: [["sahyz"]],
        chinese_meanings: "大小，尺寸，规模，胶料，浆糊，巨大，大量",
      },
      {
        rank: 1035,
        word: "freeze",
        pronunciation: [["freez"]],
        chinese_meanings: "使结冰，使冻僵，冷藏，吓呆，冻结（存款，工资等）",
      },
      {
        rank: 1245,
        word: "jeez",
        pronunciation: [["jeez"]],
        chinese_meanings: "呀",
      },
      {
        rank: 1251,
        word: "prize",
        pronunciation: [["prahyz"]],
        chinese_meanings: "奖赏，战利品，值得努力争取的东西",
      },
    ],
  },
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
  {
    phoneme: "eɪ",
    grapheme: "a_e",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 58,
        word: "make",
        pronunciation: [["meyk"]],
        chinese_meanings: "做，制造，生产，制定，使成为，使产生",
      },
      {
        rank: 61,
        word: "take",
        pronunciation: [["teyk"]],
        chinese_meanings: "拿，取，采取，接受（礼物等），耗费（时间等）",
      },
      {
        rank: 2387,
        word: "place",
        pronunciation: [["pleys"]],
        chinese_meanings: "位，地方，职位，座位",
      },
      {
        rank: 213,
        word: "late",
        pronunciation: [["leyt"]],
        chinese_meanings:
          "晚的，迟到的，时间不早的，已故的，原来的，之前的，临近终了的",
      },
      {
        rank: 332,
        word: "name",
        pronunciation: [["neym"]],
        chinese_meanings: "名字，名声，有…名称的，著名的人物",
      },
      {
        rank: 255,
        word: "game",
        pronunciation: [["geym"]],
        chinese_meanings: "游戏，运动，比赛，竞赛，诡计，猎物",
      },
      {
        rank: 273,
        word: "hate",
        pronunciation: [["heyt"]],
        chinese_meanings: "仇恨，憎恨，厌恶，对…感到不喜欢或讨厌",
      },
      {
        rank: 295,
        word: "same",
        pronunciation: [["seym"]],
        chinese_meanings: "同一的，相同的，同样的",
      },
      {
        rank: 489,
        word: "date",
        pronunciation: [["deyt"]],
        chinese_meanings:
          "日期，日子，约会，时代，年代，（北非和西亚常见的海枣树的）海枣",
      },
      {
        rank: 353,
        word: "save",
        pronunciation: [["seyv"]],
        chinese_meanings: "节省，保存，储蓄，解救",
      },
    ],
  },
  {
    phoneme: "aɪ",
    grapheme: "i_e",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 55,
        word: "like",
        pronunciation: [["lahyk"]],
        chinese_meanings:
          "喜欢，（与would或should连用表示客气）想，想要，喜欢做",
      },
      {
        rank: 72,
        word: "time",
        pronunciation: [["tahym"]],
        chinese_meanings: "时间，时刻，时代，次",
      },
      {
        rank: 155,
        word: "life",
        pronunciation: [["lahyf"]],
        chinese_meanings: "生活，生计，生命，性命，一生，寿命，人生，尘世",
      },
      {
        rank: 156,
        word: "nice",
        pronunciation: [["nahys"]],
        chinese_meanings: "美好的，愉快的，正派的，友好的，亲切的，细致的",
      },
      {
        rank: 164,
        word: "fine",
        pronunciation: [["fahyn"]],
        chinese_meanings: "好的，上等的，纤细的，精致的，健康的，晴朗的",
      },
      {
        rank: 196,
        word: "live",
        pronunciation: [["liv"]],
        chinese_meanings: "生存，居住，生活，过活，在生活中得到享受",
      },
      {
        rank: 218,
        word: "idea",
        pronunciation: [
          [
            "ahy-",
            { style: "bold", text: "dee" },
            "-",
            { style: "italic", text: "uh" },
          ],
          ["ahy-", { style: "bold", text: "deeuh" }],
        ],
        chinese_meanings: "主意，想法，哲理念，观念，乐乐句，模糊想法",
      },
      {
        rank: 259,
        word: "five",
        pronunciation: [["fahyv"]],
        chinese_meanings: "五，五个，与某人击掌问候（或庆祝胜利），第五",
      },
      {
        rank: 312,
        word: "write",
        pronunciation: [["rahyt"]],
        chinese_meanings: "写，写信，写作，作曲",
      },
      {
        rank: 326,
        word: "drive",
        pronunciation: [["drahyv"]],
        chinese_meanings: "驾驶，开车，驱动，迫使",
      },
    ],
  },
  {
    phoneme: "oʊ",
    grapheme: "o_e",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 107,
        word: "over",
        pronunciation: [[{ style: "bold", text: "oh" }, "-ver"]],
        chinese_meanings:
          "（表示方向）越过，（部份或全部覆盖）在…上面，由于，（表示论及）关于",
      },
      {
        rank: 140,
        word: "those",
        pronunciation: [[{ style: "italic", text: "th" }, "ohz"]],
        chinese_meanings: "that的复数",
      },
      {
        rank: 175,
        word: "home",
        pronunciation: [["hohm"]],
        chinese_meanings: "家，家庭，家庭生活，终点",
      },
      {
        rank: 225,
        word: "whole",
        pronunciation: [["hohl"]],
        chinese_meanings: "全部的，所有的，完整的",
      },
      {
        rank: 274,
        word: "suppose",
        pronunciation: [
          [
            "s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pohz" },
          ],
        ],
        chinese_meanings: "假定，猜想，推测，认为，让（用于祈祷语气）",
      },
      {
        rank: 304,
        word: "hope",
        pronunciation: [["hohp"]],
        chinese_meanings:
          "希望，期望，希望的东西，被寄予希望的人或事物、情况，抱有希望的理由",
      },
      {
        rank: 306,
        word: "open",
        pronunciation: [
          [
            { style: "bold", text: "oh" },
            "-p",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "敞开的，开着的，公开的，公共的，坦率的，有议论余地的",
      },
      {
        rank: 316,
        word: "phone",
        pronunciation: [["fohn"]],
        chinese_meanings: "电话，听筒，（发声或使用声音的）工具，说某种语言的",
      },
      {
        rank: 1982,
        word: "joke",
        pronunciation: [["johk"]],
        chinese_meanings: "笑话，玩笑，笑柄，笑料",
      },
      {
        rank: 627,
        word: "close",
        pronunciation: [["klohz"]],
        chinese_meanings: "紧密的，亲密的，亲近的",
      },
    ],
  },
  {
    phoneme: "ju",
    grapheme: "u_e",
    graphemeType: "LongVowel+",
    pronunciation: "yoo",
    tips: "u_e 一般情况",
    words: [
      {
        rank: 151,
        word: "use",
        pronunciation: [["yooz"], ["yoost"]],
        chinese_meanings: "使用，使用权，功能",
      },
      {
        rank: 290,
        word: "excuse",
        pronunciation: [["ik-", { style: "bold", text: "skyooz" }]],
        chinese_meanings: "原谅，为…申辩，免除，宽免，给…免去",
      },
      {
        rank: 477,
        word: "cute",
        pronunciation: [["kyoot"]],
        chinese_meanings: "漂亮的，娇小可爱的，机灵的，精明的，矫揉造作的",
      },
      {
        rank: 680,
        word: "huge",
        pronunciation: [["hyooj"], ["yooj"]],
        chinese_meanings: "巨大的，庞大的，极大的",
      },
      {
        rank: 795,
        word: "future",
        pronunciation: [[{ style: "bold", text: "fyoo" }, "-cher"]],
        chinese_meanings: "将来的，未来的，语法学将来时的",
      },
      {
        rank: 862,
        word: "computer",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "m-",
            { style: "bold", text: "pyoo" },
            "-ter",
          ],
        ],
        chinese_meanings: "（电子）计算机，电脑",
      },
      {
        rank: 1137,
        word: "confuse",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "fyooz" },
          ],
        ],
        chinese_meanings: "使困窘，使混乱，使困惑，使更难于理解",
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
        rank: 1579,
        word: "funeral",
        pronunciation: [
          [
            { style: "bold", text: "fyoo" },
            "-ner-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings:
          "葬礼，丧礼，〈比喻〉不愉快的事，操心的事，有关系的事",
      },
      {
        rank: 2051,
        word: "refuse",
        pronunciation: [["ri-", { style: "bold", text: "fyooz" }]],
        chinese_meanings: "拒绝，回绝，推却",
      },
    ],
  },
  {
    phoneme: "u",
    grapheme: "u_e",
    graphemeType: "LongVowel+",
    pronunciation: "oo",
    tips: "u_e 在 j , l , r , s 这四个字母后",
    words: [
      {
        rank: 2408,
        word: "rule",
        pronunciation: [["rool"]],
        chinese_meanings: "规则，规定，统治，支配，章程",
      },
      {
        rank: 589,
        word: "absolutely",
        pronunciation: [
          [
            "ab-s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "loot" },
            "-lee",
          ],
          [
            { style: "bold", text: "ab" },
            "-s",
            { style: "italic", text: "uh" },
            "-loot-",
          ],
        ],
        chinese_meanings: "绝对地，完全地，毫无疑问地，语独立地，分离地",
      },
      {
        rank: 1042,
        word: "assume",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "soom" },
          ],
        ],
        chinese_meanings: "假定，认为，承担，装出，呈现",
      },
      {
        rank: 1206,
        word: "super",
        pronunciation: [[{ style: "bold", text: "soo" }, "-per"]],
        chinese_meanings:
          "超级的，极度的，过分的，超等的，极好的，面积的，平方的",
      },
      {
        rank: 1637,
        word: "rude",
        pronunciation: [["rood"]],
        chinese_meanings: "粗鲁的，简陋的，狂暴的，近乎下流的",
      },
      {
        rank: 2096,
        word: "include",
        pronunciation: [["in-", { style: "bold", text: "klood" }]],
        chinese_meanings: "包括，包含，计入，包住",
      },
      {
        rank: 2934,
        word: "superhero",
        pronunciation: [[{ style: "bold", text: "soo" }, "-per-heer-oh"]],
        chinese_meanings: "超级英雄",
      },
      {
        rank: 3252,
        word: "flute",
        pronunciation: [["floot"]],
        chinese_meanings:
          "长笛，长笛吹奏者，细长香槟杯，（柱上的）凹槽，（女服的）管状裙褶",
      },
      {
        rank: 3441,
        word: "supermarket",
        pronunciation: [[{ style: "bold", text: "soo" }, "-per-mahr-kit"]],
        chinese_meanings: "超级市场，自动售货商店",
      },
      {
        rank: 3511,
        word: "absolute",
        pronunciation: [
          [
            { style: "bold", text: "ab" },
            "-s",
            { style: "italic", text: "uh" },
            "-loot",
          ],
          [
            "ab-s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "loot" },
          ],
        ],
        chinese_meanings:
          "绝对的，完全的，不受任何限制约束的，无条件的，有无上权力或权威的",
      },
    ],
  },
  {
    phoneme: "i",
    grapheme: "e_e",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 39,
        word: "here",
        pronunciation: [["heer"]],
        chinese_meanings:
          "在这里，这时，在这一点上，（给某人东西或指出某物时说）",
      },
      {
        rank: 3601,
        word: "even",
        pronunciation: [
          [
            { style: "bold", text: "ee" },
            "-v",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "甚至，更加，即使，恰巧在…时候",
      },
      {
        rank: 130,
        word: "these",
        pronunciation: [[{ style: "italic", text: "th" }, "eez"]],
        chinese_meanings: "这些的",
      },
      {
        rank: 169,
        word: "believe",
        pronunciation: [["bih-", { style: "bold", text: "leev" }]],
        chinese_meanings: "信任，料想，笃信宗教",
      },
      {
        rank: 200,
        word: "every",
        pronunciation: [[{ style: "bold", text: "ev" }, "-ree"]],
        chinese_meanings: "每个，每，所有可能的，充足的",
      },
      {
        rank: 201,
        word: "everything",
        pronunciation: [[{ style: "bold", text: "ev" }, "-ree-thing"]],
        chinese_meanings: "每件事物，最重要的东西，（有关的）一切，万事",
      },
      {
        rank: 206,
        word: "remember",
        pronunciation: [["ri-", { style: "bold", text: "mem" }, "-ber"]],
        chinese_meanings: "记得，牢记",
      },
      {
        rank: 211,
        word: "everyone",
        pronunciation: [
          [{ style: "bold", text: "ev" }, "-ree-wuhn"],
          ["-w", { style: "italic", text: "uh" }, "n"],
        ],
        chinese_meanings: "每人，人人",
      },
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
        rank: 547,
        word: "piece",
        pronunciation: [["pees"]],
        chinese_meanings: "块，片，段，部分，部件，文章，音乐作品",
      },
    ],
  },
  {
    phoneme: "eɪ",
    grapheme: "ai",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 109,
        word: "wait",
        pronunciation: [["weyt"]],
        chinese_meanings: "等候，等待，（尤指长期地）希望，盼望",
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
        rank: 591,
        word: "against",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "genst" },
          ],
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "geynst" },
          ],
        ],
        chinese_meanings: "反对，对…不利，紧靠，以防",
      },
      {
        rank: 662,
        word: "explain",
        pronunciation: [["ik-", { style: "bold", text: "spleyn" }]],
        chinese_meanings: "讲解，解释",
      },
      {
        rank: 664,
        word: "brain",
        pronunciation: [["breyn"]],
        chinese_meanings: "脑，智慧，聪明的人，（群体中）最聪明的人",
      },
      {
        rank: 735,
        word: "raise",
        pronunciation: [["reyz"]],
        chinese_meanings: "提升，增加，养育，筹集",
      },
      {
        rank: 887,
        word: "pain",
        pronunciation: [["peyn"]],
        chinese_meanings: "痛苦，刻苦，令人厌烦的人事物，身体某部分的疼痛不适",
      },
      {
        rank: 1782,
        word: "train",
        pronunciation: [["treyn"]],
        chinese_meanings: "火车，行列，一系列相关的事情，拖裾",
      },
      {
        rank: 995,
        word: "fail",
        pronunciation: [["feyl"]],
        chinese_meanings: "失败，不及格，倒闭，破产，缺乏，衰退",
      },
    ],
  },
  {
    phoneme: "eɪ",
    grapheme: "ay",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 46,
        word: "say",
        pronunciation: [["sey"]],
        chinese_meanings: "说，讲，表明，宣称，假设，约莫",
      },
      {
        rank: 97,
        word: "okay",
        pronunciation: [
          [{ style: "bold", text: "oh" }, "-", { style: "bold", text: "key" }],
          ["oh-", { style: "bold", text: "key" }],
          [{ style: "bold", text: "oh" }, "-key"],
        ],
        chinese_meanings: "认可，同意",
      },
      {
        rank: 101,
        word: "way",
        pronunciation: [["wey"]],
        chinese_meanings: "道路，方法，方向，某方面",
      },
      {
        rank: 112,
        word: "day",
        pronunciation: [["dey"]],
        chinese_meanings: "一天，白天，时期，节日",
      },
      {
        rank: 123,
        word: "maybe",
        pronunciation: [[{ style: "bold", text: "mey" }, "-bee"]],
        chinese_meanings: "也许，可能，大概",
      },
      {
        rank: 153,
        word: "may",
        pronunciation: [["mey"]],
        chinese_meanings: "可以，也许，会，但愿",
      },
      {
        rank: 172,
        word: "play",
        pronunciation: [["pley"]],
        chinese_meanings: "比赛，游戏，戏剧，赌博",
      },
      {
        rank: 187,
        word: "always",
        pronunciation: [[{ style: "bold", text: "awl" }, "-weyz"], ["-weez"]],
        chinese_meanings: "总是，老是，永远，始终，常常，不断地",
      },
      {
        rank: 197,
        word: "away",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "wey" },
          ],
        ],
        chinese_meanings: "离开，远离，在远处，消失",
      },
      {
        rank: 221,
        word: "today",
        pronunciation: [
          [
            "t",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "dey" },
          ],
        ],
        chinese_meanings: "（在）今天，现在，现今，现代，当代",
      },
    ],
  },
  {
    phoneme: "i",
    grapheme: "ee",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 52,
        word: "see",
        pronunciation: [["see"]],
        chinese_meanings: "看见，领会，理解，查看，参观",
      },
      {
        rank: 92,
        word: "need",
        pronunciation: [["need"]],
        chinese_meanings: "需要，必须",
      },
      {
        rank: 124,
        word: "feel",
        pronunciation: [["feel"]],
        chinese_meanings: "感觉，认为，触摸，试探",
      },
      {
        rank: 166,
        word: "keep",
        pronunciation: [["keep"]],
        chinese_meanings: "保持，保留，遵守，阻止",
      },
      {
        rank: 179,
        word: "meet",
        pronunciation: [["meet"]],
        chinese_meanings: "相遇，相识，开会，接触（某物）",
      },
      {
        rank: 188,
        word: "three",
        pronunciation: [["three"]],
        chinese_meanings: "三，三个，第三（章，页等）",
      },
      {
        rank: 226,
        word: "week",
        pronunciation: [["week"]],
        chinese_meanings: "一星期，周，工作周（一个星期中的工作时间）",
      },
      {
        rank: 298,
        word: "seem",
        pronunciation: [["seem"]],
        chinese_meanings: "好像，仿佛，似乎，装作，看来好像",
      },
      {
        rank: 310,
        word: "sleep",
        pronunciation: [["sleep"]],
        chinese_meanings: "&link-",
      },
      {
        rank: 355,
        word: "sweet",
        pronunciation: [["sweet"]],
        chinese_meanings: "甜的，愉快的，快乐的，温柔的，亲切的，芳香的",
      },
    ],
  },
  {
    phoneme: "i",
    grapheme: "ea",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 63,
        word: "really",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "ree" }, "-lee"],
        ],
        chinese_meanings: "真，真正，实在，果真，实际上，事实上",
      },
      {
        rank: 85,
        word: "mean",
        pronunciation: [["meen"]],
        chinese_meanings: "表示…的意思，意思是，打算，产生…结果",
      },
      {
        rank: 133,
        word: "please",
        pronunciation: [["pleez"]],
        chinese_meanings: "请",
      },
      {
        rank: 144,
        word: "leave",
        pronunciation: [["leev"]],
        chinese_meanings: "离开，遗弃，忘了带，交托",
      },
      {
        rank: 146,
        word: "hear",
        pronunciation: [["heer"]],
        chinese_meanings: "听到，听见",
      },
      {
        rank: 194,
        word: "eat",
        pronunciation: [["eet"]],
        chinese_meanings: "吃，喝",
      },
      {
        rank: 218,
        word: "idea",
        pronunciation: [
          [
            "ahy-",
            { style: "bold", text: "dee" },
            "-",
            { style: "italic", text: "uh" },
          ],
          ["ahy-", { style: "bold", text: "deeuh" }],
        ],
        chinese_meanings: "主意，想法，哲理念，观念，乐乐句，模糊想法",
      },
      {
        rank: 223,
        word: "real",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
          ["reel"],
        ],
        chinese_meanings: "真的，真实的，现实的，事实上的，真诚的",
      },
      {
        rank: 297,
        word: "ready",
        pronunciation: [[{ style: "bold", text: "red" }, "-ee"]],
        chinese_meanings: "准备好的，现成的，即时的，敏捷的，情愿的，即将的",
      },
      {
        rank: 303,
        word: "already",
        pronunciation: [["awl-", { style: "bold", text: "red" }, "-ee"]],
        chinese_meanings: "早已，已经，先前",
      },
    ],
  },
  {
    phoneme: "i",
    grapheme: "ey",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 202,
        word: "money",
        pronunciation: [[{ style: "bold", text: "muhn" }, "-ee"]],
        chinese_meanings: "钱，财富，薪水，款项",
      },
      {
        rank: 270,
        word: "honey",
        pronunciation: [[{ style: "bold", text: "huhn" }, "-ee"]],
        chinese_meanings: "蜂蜜，<口>宝贝，可爱的人",
      },
      {
        rank: 571,
        word: "key",
        pronunciation: [["kee"]],
        chinese_meanings:
          "钥匙，（打字机等的）键，关键，线索，秘诀，（音乐的）调",
      },
      {
        rank: 670,
        word: "monkey",
        pronunciation: [[{ style: "bold", text: "muhng" }, "-kee"]],
        chinese_meanings: "猴，猿，淘气鬼，小淘气",
      },
      {
        rank: 1154,
        word: "turkey",
        pronunciation: [[{ style: "bold", text: "tur" }, "-kee"]],
        chinese_meanings: "火鸡，蠢货，失败之作",
      },
      {
        rank: 1598,
        word: "kidney",
        pronunciation: [[{ style: "bold", text: "kid" }, "-nee"]],
        chinese_meanings: "肾，肾脏，（可食用的动物的）腰子，脾气，性格",
      },
      {
        rank: 1989,
        word: "beyond",
        pronunciation: [
          ["bee-", { style: "bold", text: "ond" }],
          ["bih-", { style: "bold", text: "yond" }],
        ],
        chinese_meanings: "超过，越过，那一边，在…较远的一边",
      },
      {
        rank: 2065,
        word: "honeymoon",
        pronunciation: [[{ style: "bold", text: "huhn" }, "-ee-moon"]],
        chinese_meanings: "蜜月，蜜月期，蜜月旅行，短暂的和谐时期",
      },
      {
        rank: 2304,
        word: "hockey",
        pronunciation: [[{ style: "bold", text: "hok" }, "-ee"]],
        chinese_meanings: "曲棍球，冰球",
      },
      {
        rank: 2384,
        word: "journey",
        pronunciation: [[{ style: "bold", text: "jur" }, "-nee"]],
        chinese_meanings: "旅行，旅程行期，历程，过程",
      },
    ],
  },
  {
    phoneme: "i",
    grapheme: "y",
    graphemeType: "LongVowel+",
    pronunciation: "ee",
    tips: "y 在多音节（两个元音+）单词的结尾",
    words: [
      {
        rank: 63,
        word: "really",
        pronunciation: [
          [
            { style: "bold", text: "ree" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
          [{ style: "bold", text: "ree" }, "-lee"],
        ],
        chinese_meanings: "真，真正，实在，果真，实际上，事实上",
      },
      {
        rank: 193,
        word: "actually",
        pronunciation: [
          [
            { style: "bold", text: "ak" },
            "-choo-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "实际上，事实上，确实，竟",
      },
      {
        rank: 200,
        word: "every",
        pronunciation: [[{ style: "bold", text: "ev" }, "-ree"]],
        chinese_meanings: "每个，每，所有可能的，充足的",
      },
      {
        rank: 202,
        word: "money",
        pronunciation: [[{ style: "bold", text: "muhn" }, "-ee"]],
        chinese_meanings: "钱，财富，薪水，款项",
      },
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
        rank: 246,
        word: "everybody",
        pronunciation: [
          [{ style: "bold", text: "ev" }, "-ree-bod-ee"],
          ["-buhd-ee"],
        ],
        chinese_meanings: "每人，人人，大伙儿，各位",
      },
      {
        rank: 270,
        word: "honey",
        pronunciation: [[{ style: "bold", text: "huhn" }, "-ee"]],
        chinese_meanings: "蜂蜜，<口>宝贝，可爱的人",
      },
      {
        rank: 297,
        word: "ready",
        pronunciation: [[{ style: "bold", text: "red" }, "-ee"]],
        chinese_meanings: "准备好的，现成的，即时的，敏捷的，情愿的，即将的",
      },
      {
        rank: 303,
        word: "already",
        pronunciation: [["awl-", { style: "bold", text: "red" }, "-ee"]],
        chinese_meanings: "早已，已经，先前",
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
    ],
  },
  {
    phoneme: "aɪ",
    grapheme: "ie",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 267,
        word: "die",
        pronunciation: [["dahy"]],
        chinese_meanings: "死亡，熄灭，凋零，枯萎，渴望，盼望",
      },
      {
        rank: 384,
        word: "lie",
        pronunciation: [["lahy"]],
        chinese_meanings: "躺，坐落在，处于…状态，说谎",
      },
      {
        rank: 733,
        word: "pie",
        pronunciation: [["pahy"]],
        chinese_meanings:
          "馅饼，派，爱说话的人，动喜鹊，<美俚>容易得到的称心东西，容易的工作",
      },
      {
        rank: 999,
        word: "science",
        pronunciation: [
          [
            { style: "bold", text: "sahy" },
            "-",
            { style: "italic", text: "uh" },
            "ns",
          ],
        ],
        chinese_meanings: "科学，技术，知识，学科，理科",
      },
      {
        rank: 1059,
        word: "client",
        pronunciation: [
          [
            { style: "bold", text: "klahy" },
            "-",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "顾客，当事人，诉讼委托人，计算机客户端",
      },
      {
        rank: 1144,
        word: "quiet",
        pronunciation: [[{ style: "bold", text: "kwahy" }, "-it"]],
        chinese_meanings: "清静的，僻静的，不起眼的，不激动的",
      },
      {
        rank: 1353,
        word: "tie",
        pronunciation: [["tahy"]],
        chinese_meanings: "关系，领带，绳子，平局，束缚，限制",
      },
      {
        rank: 1344,
        word: "society",
        pronunciation: [
          [
            "s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "sahy" },
            "-i-tee",
          ],
        ],
        chinese_meanings: "社会，上流社会，社团，社群",
      },
      {
        rank: 1766,
        word: "scientist",
        pronunciation: [
          [
            { style: "bold", text: "sahy" },
            "-",
            { style: "italic", text: "uh" },
            "n-tist",
          ],
        ],
        chinese_meanings: "科学家，科学工作者",
      },
      {
        rank: 1965,
        word: "diet",
        pronunciation: [[{ style: "bold", text: "dahy" }, "-it"]],
        chinese_meanings: "日常饮食，规定饮食",
      },
    ],
  },
  {
    phoneme: "aɪ",
    grapheme: "igh",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 990,
        word: "right",
        pronunciation: [["rahyt"]],
        chinese_meanings: "立刻，马上，向右，右边，恰当地，一直",
      },
      {
        rank: 137,
        word: "night",
        pronunciation: [["nahyt"]],
        chinese_meanings: "夜，晚上，（举行盛事的）夜晚",
      },
      {
        rank: 249,
        word: "tonight",
        pronunciation: [
          [
            "t",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "nahyt" },
          ],
        ],
        chinese_meanings: "今晚，今夜",
      },
      {
        rank: 360,
        word: "high",
        pronunciation: [["hahy"]],
        chinese_meanings: "高的，高尚的，崇高的，高音调的，高级的，高等的",
      },
      {
        rank: 453,
        word: "fight",
        pronunciation: [["fahyt"]],
        chinese_meanings: "战斗，斗争，打架，吵架",
      },
      {
        rank: 1903,
        word: "light",
        pronunciation: [["lahyt"]],
        chinese_meanings: "光，发光体，电灯，点火器",
      },
      {
        rank: 798,
        word: "alright",
        pronunciation: [["awl-", { style: "bold", text: "rahyt" }]],
        chinese_meanings: "好的，正确，令人满意",
      },
      {
        rank: 1128,
        word: "flight",
        pronunciation: [["flahyt"]],
        chinese_meanings: "（物体的）飞行，航班，飞翔，楼梯的一段",
      },
      {
        rank: 1322,
        word: "tight",
        pronunciation: [["tahyt"]],
        chinese_meanings: "紧的，牢固的，绷紧的，不漏的，密集的，紧凑的",
      },
      {
        rank: 1562,
        word: "sight",
        pronunciation: [["sahyt"]],
        chinese_meanings: "视力，看见，视野，景象",
      },
    ],
  },
  {
    phoneme: "aɪ",
    grapheme: "y",
    graphemeType: "LongVowel+",
    pronunciation: "ahy",
    tips: "y 在单音节（一个元音）单词的结尾",
    words: [
      {
        rank: 19,
        word: "my",
        pronunciation: [["mahy"]],
        chinese_meanings: "我的(I的所有格形式)",
      },
      {
        rank: 60,
        word: "guy",
        pronunciation: [["gahy"]],
        chinese_meanings:
          "家伙，伙计，（架设天线、支撑帐篷等用的）牵索，复数各位，一群男人（或女人）",
      },
      {
        rank: 69,
        word: "why",
        pronunciation: [["wahy"], ["hwahy"]],
        chinese_meanings:
          "（用于问句）为什么，为何，（反问，表示不必）何必，（说明理由）为什么",
      },
      {
        rank: 105,
        word: "by",
        pronunciation: [["bahy"]],
        chinese_meanings: "在…旁边，表示方式，由于，经过",
      },
      {
        rank: 121,
        word: "try",
        pronunciation: [["trahy"]],
        chinese_meanings: "试图，努力，实验，审判，考验",
      },
      {
        rank: 235,
        word: "buy",
        pronunciation: [["bahy"]],
        chinese_meanings: "购买，购得",
      },
      {
        rank: 524,
        word: "cry",
        pronunciation: [["krahy"]],
        chinese_meanings: "哭，喊，叫",
      },
      {
        rank: 612,
        word: "fly",
        pronunciation: [["flahy"]],
        chinese_meanings: "飞，飞行，（旗）飘荡，过得快",
      },
      {
        rank: 1528,
        word: "sky",
        pronunciation: [["skahy"]],
        chinese_meanings: "天（空）",
      },
      {
        rank: 1692,
        word: "dry",
        pronunciation: [["drahy"]],
        chinese_meanings:
          "干的干燥的，干旱的，干旱的，口渴的，干咳的，无趣味的，枯燥的",
      },
    ],
  },
  {
    phoneme: "oʊ",
    grapheme: "oa",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 278,
        word: "whoa",
        pronunciation: [["woh"], ["hwoh"]],
        chinese_meanings: "惊叹声，停止",
      },
      {
        rank: 744,
        word: "boat",
        pronunciation: [["boht"]],
        chinese_meanings: "小船，小艇，轮船",
      },
      {
        rank: 858,
        word: "road",
        pronunciation: [["rohd"]],
        chinese_meanings: "路，通路，途径，方法",
      },
      {
        rank: 1048,
        word: "coat",
        pronunciation: [["koht"]],
        chinese_meanings: "上衣，外套",
      },
      {
        rank: 4598,
        word: "toast",
        pronunciation: [["tohst"]],
        chinese_meanings:
          "干杯，烤面包，接受敬酒的人，（在某领域）广受赞誉的人",
      },
      {
        rank: 3669,
        word: "coach",
        pronunciation: [["kohch"]],
        chinese_meanings: "教练，（铁路）旅客车厢，长途客运汽车，四轮大马车",
      },
      {
        rank: 1804,
        word: "throat",
        pronunciation: [["throht"]],
        chinese_meanings: "咽喉，颈前部，植物学管颈",
      },
      {
        rank: 1959,
        word: "soap",
        pronunciation: [["sohp"]],
        chinese_meanings: "肥皂，肥皂剧，化皂，脂肪酸盐",
      },
      {
        rank: 2064,
        word: "goat",
        pronunciation: [["goht"]],
        chinese_meanings: "山羊，色鬼，替罪羊",
      },
      {
        rank: 2194,
        word: "load",
        pronunciation: [["lohd"]],
        chinese_meanings: "负荷，负担，装载，工作量",
      },
    ],
  },
  {
    phoneme: "oʊ",
    grapheme: "ow",
    graphemeType: "LongVowel+",
    pronunciation: "oh",
    tips: "ow 在单词结尾",
    words: [
      {
        rank: 27,
        word: "know",
        pronunciation: [["noh"]],
        chinese_meanings: "知道，了解，认识，确信",
      },
      {
        rank: 181,
        word: "show",
        pronunciation: [["shoh"]],
        chinese_meanings: "给…看，表现出，显露出，上演",
      },
      {
        rank: 314,
        word: "tomorrow",
        pronunciation: [
          [
            "t",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "mawr" },
            "-oh",
          ],
          ["-", { style: "bold", text: "mor" }, "-oh"],
        ],
        chinese_meanings: "在明天，在明日",
      },
      {
        rank: 331,
        word: "throw",
        pronunciation: [["throh"]],
        chinese_meanings: "投掷，丢，抛",
      },
      { rank: 379, word: "ow", pronunciation: [["ou"]] },
      {
        rank: 500,
        word: "grow",
        pronunciation: [["groh"]],
        chinese_meanings: "种植，扩大，扩展，增加",
      },
      {
        rank: 540,
        word: "blow",
        pronunciation: [["bloh"]],
        chinese_meanings: "殴打，打击，吹风，一阵风，意外的灾害，吹奏（声）",
      },
      {
        rank: 585,
        word: "follow",
        pronunciation: [[{ style: "bold", text: "fol" }, "-oh"]],
        chinese_meanings: "跟随，接着",
      },
      {
        rank: 729,
        word: "window",
        pronunciation: [[{ style: "bold", text: "win" }, "-doh"]],
        chinese_meanings: "窗，窗户，窗口，〈美俚〉眼镜",
      },
      {
        rank: 1145,
        word: "low",
        pronunciation: [["loh"]],
        chinese_meanings: "低的，矮小的，楼下的，低洼的，沮丧的，下贱的",
      },
    ],
  },
  {
    phoneme: "ju",
    grapheme: "ew",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 157,
        word: "new",
        pronunciation: [["noo"], ["nyoo"]],
        chinese_meanings:
          "新的，崭新的，新鲜的，新到的，现代的，初次（听到）的",
      },
      {
        rank: 363,
        word: "news",
        pronunciation: [["nooz"], ["nyooz"]],
        chinese_meanings: "新闻，消息，（可当作新闻内容的）人，物",
      },
      {
        rank: 375,
        word: "few",
        pronunciation: [["fyoo"]],
        chinese_meanings:
          "很少的，很少，（与复数名词和复数动词连用）有些，几乎没有的",
      },
      {
        rank: 2807,
        word: "interview",
        pronunciation: [[{ style: "bold", text: "in" }, "-ter-vyoo"]],
        chinese_meanings: "接见，采访，面试，会谈",
      },
      {
        rank: 3874,
        word: "view",
        pronunciation: [["vyoo"]],
        chinese_meanings: "看法，风景，视域，建筑学视图",
      },
      {
        rank: 3475,
        word: "review",
        pronunciation: [["ri-", { style: "bold", text: "vyoo" }]],
        chinese_meanings: "复习，回顾，（报刊的）评论，法复审",
      },
      {
        rank: 2621,
        word: "nephew",
        pronunciation: [
          [{ style: "bold", text: "nef" }, "-yoo"],
          [{ style: "bold", text: "nev" }, "-yoo"],
        ],
        chinese_meanings: "侄子，外甥",
      },
      { rank: 2848, word: "whew", pronunciation: [["hwyoo"]] },
      {
        rank: 4225,
        word: "phew",
        pronunciation: [["fyoo"], ["pfyoo"], ["whyoo"]],
      },
      {
        rank: 4674,
        word: "viewer",
        pronunciation: [[{ style: "bold", text: "vyoo" }, "-er"]],
        chinese_meanings:
          "电视观众，观看者，观察者，阅读器，看片机（把幻灯片等放大观看的装置）",
      },
    ],
  },
  {
    phoneme: "ju",
    grapheme: "ue",
    graphemeType: "LongVowel+",
    pronunciation: "yoo",
    tips: "ue 一船情况",
    words: [
      {
        rank: 1142,
        word: "continue",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "tin" },
            "-yoo",
          ],
        ],
        chinese_meanings: "持续，逗留，维持原状",
      },
      {
        rank: 1665,
        word: "Tuesday",
        pronunciation: [
          [{ style: "bold", text: "tooz" }, "-dey"],
          ["-dee"],
          [{ style: "bold", text: "tyooz" }, "-"],
        ],
      },
      {
        rank: 2613,
        word: "argue",
        pronunciation: [[{ style: "bold", text: "ahr" }, "-gyoo"]],
        chinese_meanings: "坚决主张，提出理由证明，说服，劝告，表明，证明",
      },
      {
        rank: 2822,
        word: "barbecue",
        pronunciation: [[{ style: "bold", text: "bahr" }, "-bi-kyoo"]],
        chinese_meanings: "烤架，户外烧烤",
      },
      {
        rank: 3021,
        word: "rescue",
        pronunciation: [[{ style: "bold", text: "res" }, "-kyoo"]],
        chinese_meanings: "营救，救援，使免遭损失，法律非法劫回",
      },
      {
        rank: 3547,
        word: "cue",
        pronunciation: [["kyoo"]],
        chinese_meanings: "暗示，提示，线索，台球杆，情绪，心情",
      },
    ],
  },
  {
    phoneme: "u",
    grapheme: "ue",
    graphemeType: "LongVowel+",
    pronunciation: "oo",
    tips: "ue 遇到字母 s , l",
    words: [
      {
        rank: 764,
        word: "blue",
        pronunciation: [["bloo"]],
        chinese_meanings:
          "蓝色，复数（美国海、陆、空三军穿的）蓝色制服，蓝颜料，theblue(s)用作单数或复数布鲁斯（歌曲）（一种伤感的美国黑人民歌）",
      },
      {
        rank: 925,
        word: "issue",
        pronunciation: [
          [{ style: "bold", text: "ish" }, "-oo"],
          [{ style: "bold", text: "is" }, "-yoo"],
        ],
        chinese_meanings: "问题，（报刊的）期，号，发行物，流出",
      },
      {
        rank: 1477,
        word: "sue",
        pronunciation: [["soo"]],
        chinese_meanings:
          "控告，控诉，和…打官司，请求，起诉，提起（诉讼）要求判决",
      },
      {
        rank: 3589,
        word: "value",
        pronunciation: [[{ style: "bold", text: "val" }, "-yoo"]],
        chinese_meanings: "价值，价格，意义，涵义，重要性，（邮票的）面值",
      },
      {
        rank: 2002,
        word: "clue",
        pronunciation: [["kloo"]],
        chinese_meanings:
          "线索，提示，（帮助警方破案的）线索，（纵横填字谜、游戏或问题的）提示词语",
      },
      {
        rank: 2635,
        word: "glue",
        pronunciation: [["gloo"]],
        chinese_meanings: "胶合，紧附于",
      },
      {
        rank: 2885,
        word: "tissue",
        pronunciation: [
          [{ style: "bold", text: "tish" }, "-oo"],
          [{ style: "bold", text: "tis" }, "-yoo"],
        ],
        chinese_meanings: "薄纸，棉纸，生组织，一套",
      },
      { rank: 3884, word: "blues", pronunciation: [["blooz"]] },
      {
        rank: 4398,
        word: "pursue",
        pronunciation: [["per-", { style: "bold", text: "soo" }]],
        chinese_meanings: "继续，追求，进行，追捕",
      },
      {
        rank: 4440,
        word: "influence",
        pronunciation: [
          [
            { style: "bold", text: "in" },
            "-floo-",
            { style: "italic", text: "uh" },
            "ns",
          ],
        ],
        chinese_meanings: "影响，势力，有影响的人（或事物），占星学星力",
      },
    ],
  },
  {
    phoneme: "u",
    grapheme: "ui",
    graphemeType: "LongVowel+",
    words: [
      {
        rank: 602,
        word: "ruin",
        pronunciation: [[{ style: "bold", text: "roo" }, "-in"]],
        chinese_meanings: "破坏，毁灭，使破产，使没落，使堕落，变成废墟",
      },
      {
        rank: 3772,
        word: "suit",
        pronunciation: [["soot"]],
        chinese_meanings: "一套外衣，西装，套装，诉讼，恳求",
      },
      {
        rank: 1166,
        word: "juice",
        pronunciation: [["joos"]],
        chinese_meanings: "果汁，肉汁，胃液",
      },
      {
        rank: 1381,
        word: "fruit",
        pronunciation: [["froot"]],
        chinese_meanings: "成果，水果，果实，（大地的）产物",
      },
      {
        rank: 2003,
        word: "suicide",
        pronunciation: [
          [
            { style: "bold", text: "soo" },
            "-",
            { style: "italic", text: "uh" },
            "-sahyd",
          ],
        ],
        chinese_meanings: "自杀，自杀者，自杀行为",
      },
      {
        rank: 2492,
        word: "cruise",
        pronunciation: [["krooz"]],
        chinese_meanings: "巡游，漫游，巡航",
      },
      {
        rank: 2944,
        word: "lawsuit",
        pronunciation: [[{ style: "bold", text: "law" }, "-soot"]],
        chinese_meanings: "诉讼，诉讼案件",
      },
      {
        rank: 3493,
        word: "juicy",
        pronunciation: [[{ style: "bold", text: "joo" }, "-see"]],
        chinese_meanings: "多汁的，有趣的，刺激性强的，报酬多的",
      },
      {
        rank: 3734,
        word: "suitcase",
        pronunciation: [[{ style: "bold", text: "soot" }, "-keys"]],
        chinese_meanings: "手提箱，衣箱",
      },
      {
        rank: 4213,
        word: "fluid",
        pronunciation: [[{ style: "bold", text: "floo" }, "-id"]],
        chinese_meanings: "液体，流体",
      },
    ],
  },
  {
    phoneme: "u",
    grapheme: "oo",
    graphemeType: "LongVowel+",
    pronunciation: "oo",
    tips: "oo 一般情况",
    words: [
      {
        rank: 104,
        word: "too",
        pronunciation: [["too"]],
        chinese_meanings: "也，太，很，非常",
      },
      {
        rank: 210,
        word: "school",
        pronunciation: [["skool"]],
        chinese_meanings: "学校，上学，学院，群",
      },
      {
        rank: 238,
        word: "room",
        pronunciation: [["room"], ["r", { style: "italic", text: "oo" }, "m"]],
        chinese_meanings: "房间，空间，余地，房间里所有的人",
      },
      {
        rank: 2547,
        word: "cool",
        pronunciation: [["kool"]],
        chinese_meanings: "冷静的，凉爽的，一流的，孤傲冷漠的",
      },
      {
        rank: 357,
        word: "food",
        pronunciation: [["food"]],
        chinese_meanings: "食物，食品，粮食，养料，资料",
      },
      {
        rank: 406,
        word: "shoot",
        pronunciation: [["shoot"]],
        chinese_meanings: "拍摄，射击，发芽",
      },
      {
        rank: 445,
        word: "soon",
        pronunciation: [["soon"]],
        chinese_meanings: "立刻，马上，一会儿，不久，快，宁愿",
      },
      {
        rank: 479,
        word: "bathroom",
        pronunciation: [
          [{ style: "bold", text: "bath" }, "-room"],
          ["-r", { style: "italic", text: "oo" }, "m"],
          [{ style: "bold", text: "bahth" }, "-"],
        ],
        chinese_meanings: "浴室，盥洗室，（带抽水马桶的）厕所，卫生间",
      },
      {
        rank: 607,
        word: "poor",
        pronunciation: [["p", { style: "italic", text: "oo" }, "r"]],
        chinese_meanings: "贫穷的，贫乏的，令人怜悯的，可怜的，匮乏的，低劣的",
      },
      {
        rank: 694,
        word: "tooth",
        pronunciation: [["tooth"]],
        chinese_meanings: "牙，齿，齿状部份",
      },
    ],
  },
  {
    phoneme: "bɫ",
    grapheme: "bl",
    graphemeType: "Consonant+",
    words: [
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
      {
        rank: 451,
        word: "black",
        pronunciation: [["blak"]],
        chinese_meanings: "黑（色）的，黑色人种的，黑暗的，不加牛奶的",
      },
      {
        rank: 540,
        word: "blow",
        pronunciation: [["bloh"]],
        chinese_meanings: "殴打，打击，吹风，一阵风，意外的灾害，吹奏（声）",
      },
      {
        rank: 764,
        word: "blue",
        pronunciation: [["bloo"]],
        chinese_meanings:
          "蓝色，复数（美国海、陆、空三军穿的）蓝色制服，蓝颜料，theblue(s)用作单数或复数布鲁斯（歌曲）（一种伤感的美国黑人民歌）",
      },
      {
        rank: 793,
        word: "blood",
        pronunciation: [["bluhd"]],
        chinese_meanings:
          "血，血液，流血，杀戮，杀人（罪），牺牲，有…类型的血的，血统，血气，气质",
      },
      {
        rank: 4337,
        word: "public",
        pronunciation: [[{ style: "bold", text: "puhb" }, "-lik"]],
        chinese_meanings: "公众的，公共的，公开的，政府的，人人知道的，知名的",
      },
      {
        rank: 1031,
        word: "blame",
        pronunciation: [["bleym"]],
        chinese_meanings: "指责，责怪，归咎于",
      },
      {
        rank: 1155,
        word: "blah",
        pronunciation: [["blah"]],
        chinese_meanings: "废话，空谈，胡扯，浮夸的文章",
      },
      {
        rank: 1233,
        word: "possibly",
        pronunciation: [
          [
            { style: "bold", text: "pos" },
            "-",
            { style: "italic", text: "uh" },
            "-blee",
          ],
        ],
        chinese_meanings: "可能地，也许，或许，敢是，容许",
      },
    ],
  },
  {
    phoneme: "pɫ",
    grapheme: "pl",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 133,
        word: "please",
        pronunciation: [["pleez"]],
        chinese_meanings: "请",
      },
      {
        rank: 172,
        word: "play",
        pronunciation: [["pley"]],
        chinese_meanings: "比赛，游戏，戏剧，赌博",
      },
      {
        rank: 2387,
        word: "place",
        pronunciation: [["pleys"]],
        chinese_meanings: "位，地方，职位，座位",
      },
      {
        rank: 520,
        word: "plan",
        pronunciation: [["plan"]],
        chinese_meanings: "计划，打算，平面图，示意图",
      },
      {
        rank: 662,
        word: "explain",
        pronunciation: [["ik-", { style: "bold", text: "spleyn" }]],
        chinese_meanings: "讲解，解释",
      },
      {
        rank: 665,
        word: "completely",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "m-",
            { style: "bold", text: "pleet" },
            "-lee",
          ],
        ],
        chinese_meanings:
          "完全地，完整地，完全，彻底，全部，一干二净，很，非常，充分，十分，万分",
      },
      {
        rank: 845,
        word: "plus",
        pronunciation: [["pluhs"]],
        chinese_meanings:
          "（表示运算）加，（表示包容）外加，口语和，（表示数目）在零（度）以上",
      },
      {
        rank: 997,
        word: "pleasure",
        pronunciation: [[{ style: "bold", text: "plezh" }, "-er"]],
        chinese_meanings: "愉快，娱乐，令人高兴的事",
      },
      {
        rank: 1017,
        word: "plane",
        pronunciation: [["pleyn"]],
        chinese_meanings: "水平，平面，飞机，木工刨",
      },
      {
        rank: 1045,
        word: "player",
        pronunciation: [[{ style: "bold", text: "pley" }, "-er"]],
        chinese_meanings: "演员，体运动员，音演奏者，播放机",
      },
    ],
  },
  {
    phoneme: "kɫ",
    grapheme: "cl",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 405,
        word: "class",
        pronunciation: [["klas"], ["klahs"]],
        chinese_meanings: "班，等级，阶级，种类",
      },
      {
        rank: 627,
        word: "close",
        pronunciation: [["klohz"]],
        chinese_meanings: "紧密的，亲密的，亲近的",
      },
      {
        rank: 515,
        word: "club",
        pronunciation: [["kluhb"]],
        chinese_meanings: "俱乐部，会所，社团，夜总会，（纸牌的）梅花",
      },
      {
        rank: 684,
        word: "clothes",
        pronunciation: [
          ["klohz"],
          ["kloh", { style: "italic", text: "th" }, "z"],
        ],
        chinese_meanings: "衣服，衣物，寝具",
      },
      {
        rank: 712,
        word: "clean",
        pronunciation: [["kleen"]],
        chinese_meanings: "清洁的，整齐的，新的，正派的",
      },
      {
        rank: 1668,
        word: "clear",
        pronunciation: [["kleer"]],
        chinese_meanings: "清楚的，明白的，清晰的，明亮的，清澈的，明确的",
      },
      {
        rank: 861,
        word: "clown",
        pronunciation: [["kloun"]],
        chinese_meanings:
          "丑角，小丑，乡下人，笨拙粗鲁的人，经常闹笑话的人，小气鬼，守财奴",
      },
      {
        rank: 1009,
        word: "clearly",
        pronunciation: [[{ style: "bold", text: "kleer" }, "-lee"]],
        chinese_meanings: "明亮地，明净地，明确地，显然地",
      },
      {
        rank: 1059,
        word: "client",
        pronunciation: [
          [
            { style: "bold", text: "klahy" },
            "-",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "顾客，当事人，诉讼委托人，计算机客户端",
      },
      {
        rank: 1174,
        word: "closet",
        pronunciation: [[{ style: "bold", text: "kloz" }, "-it"]],
        chinese_meanings: "壁橱，盥洗室，议事室，密室，贮藏室",
      },
    ],
  },
  {
    phoneme: "fɫ",
    grapheme: "fl",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 612,
        word: "fly",
        pronunciation: [["flahy"]],
        chinese_meanings: "飞，飞行，（旗）飘荡，过得快",
      },
      {
        rank: 706,
        word: "floor",
        pronunciation: [["flawr"]],
        chinese_meanings: "地面，地板，楼层，底部，议员席",
      },
      {
        rank: 1024,
        word: "flower",
        pronunciation: [[{ style: "bold", text: "flou" }, "-er"]],
        chinese_meanings: "花，精华，开花植物",
      },
      {
        rank: 1128,
        word: "flight",
        pronunciation: [["flahyt"]],
        chinese_meanings: "（物体的）飞行，航班，飞翔，楼梯的一段",
      },
      {
        rank: 1244,
        word: "flag",
        pronunciation: [["flag"]],
        chinese_meanings: "旗，旗帜，信号旗，菖蒲",
      },
      {
        rank: 1576,
        word: "flip",
        pronunciation: [["flip"]],
        chinese_meanings: "轻弹，轻击，按（开关），快速翻转，急挥",
      },
      {
        rank: 2157,
        word: "flavor",
        pronunciation: [[{ style: "bold", text: "fley" }, "-ver"]],
        chinese_meanings: "味，韵味，特点，香料",
      },
      {
        rank: 2290,
        word: "float",
        pronunciation: [["floht"]],
        chinese_meanings: "（使）浮动，（使）漂浮，自由浮动",
      },
      {
        rank: 2331,
        word: "flush",
        pronunciation: [["fluhsh"]],
        chinese_meanings: "脸红，呈红色，奔流，冲刷",
      },
      {
        rank: 3926,
        word: "flash",
        pronunciation: [["flash"]],
        chinese_meanings: "使闪光，使闪烁，拍出，发出（电报等），〈口〉炫耀",
      },
    ],
  },
  {
    phoneme: "ɡɫ",
    grapheme: "gl",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 496,
        word: "glad",
        pronunciation: [["glad"]],
        chinese_meanings:
          "高兴的，乐意的，令人高兴的，使人愉快的，（风光）明媚的，（景色）美丽的，充满欢乐的，兴高采烈的",
      },
      {
        rank: 961,
        word: "ugly",
        pronunciation: [[{ style: "bold", text: "uhg" }, "-lee"]],
        chinese_meanings: "难看的，丑陋的，有敌意的，不祥的",
      },
      {
        rank: 1066,
        word: "glass",
        pronunciation: [["glas"]],
        chinese_meanings: "玻璃，玻璃制品，镜子",
      },
      { rank: 1087, word: "glasses" },
      {
        rank: 1410,
        word: "English",
        pronunciation: [[{ style: "bold", text: "ing" }, "-glish"], ["-lish"]],
        chinese_meanings: "英语",
      },
      {
        rank: 1841,
        word: "glove",
        pronunciation: [["gluhv"]],
        chinese_meanings: "手套，棒球手套，拳击手套",
      },
      {
        rank: 2635,
        word: "glue",
        pronunciation: [["gloo"]],
        chinese_meanings: "胶合，紧附于",
      },
      {
        rank: 2782,
        word: "global",
        pronunciation: [
          [
            { style: "bold", text: "gloh" },
            "-b",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings:
          "全球的，全球性的，有关全球大局的，全面的，整体的，全局的，球形的，球状的，球面的，球体的，计全程的",
      },
      {
        rank: 3606,
        word: "glorious",
        pronunciation: [
          [
            { style: "bold", text: "glawr" },
            "-ee-",
            { style: "italic", text: "uh" },
            "s",
          ],
          [{ style: "bold", text: "glohr" }, "-"],
        ],
        chinese_meanings: "辉煌的，荣誉的，极好的，<口>非常愉快的",
      },
      {
        rank: 3659,
        word: "sunglasses",
        pronunciation: [
          [{ style: "bold", text: "suhn" }, "-glas-iz"],
          ["-glah-siz"],
        ],
        chinese_meanings: "太阳镜，黑眼镜，墨镜",
      },
    ],
  },
  {
    phoneme: "sɫ",
    grapheme: "sl",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 310,
        word: "sleep",
        pronunciation: [["sleep"]],
        chinese_meanings: "&link-",
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
      { rank: 828, word: "obviously", chinese_meanings: "明显地" },
      {
        rank: 1356,
        word: "slip",
        pronunciation: [["slip"]],
        chinese_meanings:
          "滑，滑脱，犯过失，出错，（时间）不知不觉地过去，（健康状况等）变差",
      },
      {
        rank: 1497,
        word: "slap",
        pronunciation: [["slap"]],
        chinese_meanings: "掌掴，掌掴声，侮辱",
      },
      {
        rank: 1924,
        word: "slow",
        pronunciation: [["sloh"]],
        chinese_meanings: "慢的，迟钝的，温和的，慢于…的",
      },
      {
        rank: 1839,
        word: "asleep",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "sleep" },
          ],
        ],
        chinese_meanings: "睡着的，休眠的，麻木的，已死的",
      },
      {
        rank: 2275,
        word: "slave",
        pronunciation: [["sleyv"]],
        chinese_meanings:
          "奴隶，…。的奴隶，耽迷于…的人，奴隶般受控的人，苦工，机从动装置",
      },
      {
        rank: 2276,
        word: "slowly",
        pronunciation: [[{ style: "bold", text: "sloh" }, "-lee"]],
        chinese_meanings:
          "缓慢地，慢吞吞地，慢腾腾地，慢条斯理地，不慌不忙地，袅袅，迟钝，痴痴呆呆地，逐步",
      },
      {
        rank: 2375,
        word: "slide",
        pronunciation: [["slahyd"]],
        chinese_meanings: "滑落，下跌，打滑，棒球滑垒",
      },
    ],
  },
  {
    phoneme: "pɹ",
    grapheme: "pr",
    graphemeType: "Consonant+",
    words: [
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
        rank: 253,
        word: "pretty",
        pronunciation: [[{ style: "bold", text: "prit" }, "-ee"]],
        chinese_meanings: "漂亮的，机灵的，聪明的",
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
      {
        rank: 495,
        word: "promise",
        pronunciation: [[{ style: "bold", text: "prom" }, "-is"]],
        chinese_meanings: "允诺，许诺，给人以…的指望或希望",
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
        rank: 1806,
        word: "present",
        pronunciation: [
          [
            { style: "bold", text: "prez" },
            "-",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "现在的，目前的，出席的，语法学现在时的",
      },
      {
        rank: 696,
        word: "proud",
        pronunciation: [["proud"]],
        chinese_meanings: "自豪的，得意的，光荣的，高尚的，傲慢的，有自尊心的",
      },
      {
        rank: 722,
        word: "pretend",
        pronunciation: [["pri-", { style: "bold", text: "tend" }]],
        chinese_meanings: "假装，伪装，假称，装扮",
      },
      {
        rank: 776,
        word: "appreciate",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pree" },
            "-shee-eyt",
          ],
        ],
        chinese_meanings: "感激，欣赏，领会，鉴别",
      },
      {
        rank: 778,
        word: "surprise",
        pronunciation: [
          ["ser-", { style: "bold", text: "prahyz" }],
          ["s", { style: "italic", text: "uh" }, "-"],
        ],
        chinese_meanings: "使惊奇，突袭，意外发现",
      },
    ],
  },
  {
    phoneme: "bɹ",
    grapheme: "br",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 199,
        word: "bring",
        pronunciation: [["bring"]],
        chinese_meanings: "带来，引来，促使，引起，提供，导致",
      },
      {
        rank: 230,
        word: "break",
        pronunciation: [["breyk"]],
        chinese_meanings: "（使）破，打破（纪录），（常指好天气）突变，开始",
      },
      {
        rank: 389,
        word: "brother",
        pronunciation: [
          [{ style: "bold", text: "bruhth" }, "-er"],
          [
            { style: "bold", text: "bruhth" },
            "-",
            { style: "bold", text: "ur" },
          ],
        ],
        chinese_meanings: "兄弟，同事，同胞，同志",
      },
      {
        rank: 664,
        word: "brain",
        pronunciation: [["breyn"]],
        chinese_meanings: "脑，智慧，聪明的人，（群体中）最聪明的人",
      },
      {
        rank: 896,
        word: "breakfast",
        pronunciation: [
          [
            { style: "bold", text: "brek" },
            "-f",
            { style: "italic", text: "uh" },
            "st",
          ],
        ],
        chinese_meanings: "早餐，早饭，早餐食物",
      },
      {
        rank: 1038,
        word: "celebrate",
        pronunciation: [
          [
            { style: "bold", text: "sel" },
            "-",
            { style: "italic", text: "uh" },
            "-breyt",
          ],
        ],
        chinese_meanings: "庆祝，祝贺，举行宗教庆典，歌颂",
      },
      {
        rank: 1149,
        word: "breast",
        pronunciation: [["brest"]],
        chinese_meanings: "乳房，乳腺，胸脯，胸部，心窝，胸怀",
      },
      {
        rank: 1207,
        word: "bread",
        pronunciation: [["bred"]],
        chinese_meanings: "面包，食物，营养，营养物，生计",
      },
      {
        rank: 1215,
        word: "breathe",
        pronunciation: [["bree", { style: "italic", text: "th" }]],
        chinese_meanings: "呼吸，活着，生存，小憩一会儿，歇歇气，散发香气",
      },
      {
        rank: 1407,
        word: "bra",
        pronunciation: [["brah"]],
        chinese_meanings: "胸罩，<口>车头罩",
      },
    ],
  },
  {
    phoneme: "kɹ",
    grapheme: "cr",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 286,
        word: "crazy",
        pronunciation: [[{ style: "bold", text: "krey" }, "-zee"]],
        chinese_meanings: "疯狂的，不理智的，离奇的，生气的",
      },
      {
        rank: 524,
        word: "cry",
        pronunciation: [["krahy"]],
        chinese_meanings: "哭，喊，叫",
      },
      {
        rank: 604,
        word: "screw",
        pronunciation: [["skroo"]],
        chinese_meanings: "螺丝钉，螺旋桨，螺旋状物，（螺丝的）转，扭，吝啬鬼",
      },
      {
        rank: 611,
        word: "secret",
        pronunciation: [[{ style: "bold", text: "see" }, "-krit"]],
        chinese_meanings: "秘密，机密，秘诀，奥秘",
      },
      {
        rank: 943,
        word: "crap",
        pronunciation: [["krap"]],
        chinese_meanings: "废物，废话，排泄，排泄物",
      },
      {
        rank: 707,
        word: "cream",
        pronunciation: [["kreem"]],
        chinese_meanings: "乳霜，精英，奶油色，乳脂，奶油",
      },
      {
        rank: 878,
        word: "across",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "kraws" },
          ],
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "kros" },
          ],
        ],
        chinese_meanings: "穿过，横穿，横过，与…交叉，在…对面",
      },
      {
        rank: 893,
        word: "credit",
        pronunciation: [[{ style: "bold", text: "kred" }, "-it"]],
        chinese_meanings: "信誉，信用，金融贷款，荣誉，学分",
      },
      {
        rank: 944,
        word: "create",
        pronunciation: [["kree-", { style: "bold", text: "eyt" }]],
        chinese_meanings: "创造，创作，产生，封爵，把…封为（贵族）",
      },
      {
        rank: 1006,
        word: "scream",
        pronunciation: [["skreem"]],
        chinese_meanings: "尖声喊叫，拼命叫喊，喊叫着说出，尖叫得使变…",
      },
    ],
  },
  {
    phoneme: "ɡɹ",
    grapheme: "gr",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 100,
        word: "great",
        pronunciation: [["greyt"]],
        chinese_meanings: "伟大的，杰出的，优异的，显著的，很多的，重大的",
      },
      {
        rank: 500,
        word: "grow",
        pronunciation: [["groh"]],
        chinese_meanings: "种植，扩大，扩展，增加",
      },
      {
        rank: 577,
        word: "agree",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "gree" },
          ],
        ],
        chinese_meanings: "同意，赞同",
      },
      {
        rank: 621,
        word: "group",
        pronunciation: [["groop"]],
        chinese_meanings:
          "组，团体，群，批，（雕塑等的）群像，（英美的）空军大队",
      },
      {
        rank: 686,
        word: "grab",
        pronunciation: [["grab"]],
        chinese_meanings: "抢先，抢占",
      },
      {
        rank: 801,
        word: "congratulations",
        chinese_meanings: "祝贺，贺词，祝词",
      },
      {
        rank: 839,
        word: "hungry",
        pronunciation: [[{ style: "bold", text: "huhng" }, "-gree"]],
        chinese_meanings:
          "饥饿的，渴望的，渴望得到，（统称）饥民，荒年的，不毛的",
      },
      {
        rank: 879,
        word: "angry",
        pronunciation: [[{ style: "bold", text: "ang" }, "-gree"]],
        chinese_meanings:
          "生气的，愤怒的，发怒的，（颜色等）刺目的，（伤口等）发炎的",
      },
      {
        rank: 915,
        word: "grandpa",
        pronunciation: [
          [{ style: "bold", text: "gran" }, "-pah"],
          ["-paw"],
          [{ style: "bold", text: "grand" }, "-"],
          [{ style: "bold", text: "gram" }, "-"],
          [
            { style: "bold", text: "gram" },
            "-p",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "<非正>爷爷，外公，老太爷",
      },
      {
        rank: 5016,
        word: "grade",
        pronunciation: [["greyd"]],
        chinese_meanings: "等级，职别，成绩等级，年级",
      },
    ],
  },
  {
    phoneme: "fɹ",
    grapheme: "fr",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 74,
        word: "from",
        pronunciation: [["fruhm"], ["from"]],
        chinese_meanings:
          "（表示时间）从…，（表示原因）因为，（表示来源）来自…，（表示分离）与…分离隔开",
      },
      {
        rank: 125,
        word: "friend",
        pronunciation: [["frend"]],
        chinese_meanings: "朋友，友人，资助者，助手，近亲",
      },
      {
        rank: 385,
        word: "free",
        pronunciation: [["free"]],
        chinese_meanings: "自由的，免费的，免税的，空闲的",
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
        rank: 485,
        word: "front",
        pronunciation: [["fruhnt"]],
        chinese_meanings: "前面，正面，身体前部，前线",
      },
      {
        rank: 508,
        word: "girlfriend",
        pronunciation: [[{ style: "bold", text: "gurl" }, "-frend"]],
        chinese_meanings: "女朋友，女性朋友",
      },
      {
        rank: 617,
        word: "boyfriend",
        pronunciation: [[{ style: "bold", text: "boi" }, "-frend"]],
        chinese_meanings: "男朋友，情郎",
      },
      {
        rank: 976,
        word: "fresh",
        pronunciation: [["fresh"]],
        chinese_meanings: "新鲜的，淡水的，新的，无经验的",
      },
      {
        rank: 1035,
        word: "freeze",
        pronunciation: [["freez"]],
        chinese_meanings: "使结冰，使冻僵，冷藏，吓呆，冻结（存款，工资等）",
      },
      {
        rank: 1370,
        word: "friendship",
        pronunciation: [[{ style: "bold", text: "frend" }, "-ship"]],
        chinese_meanings: "友情，友谊，友善的关系，友善，好意",
      },
    ],
  },
  {
    phoneme: "tɹ",
    grapheme: "tr",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 121,
        word: "try",
        pronunciation: [["trahy"]],
        chinese_meanings: "试图，努力，实验，审判，考验",
      },
      { rank: 354, word: "true", pronunciation: [["troo"]] },
      {
        rank: 521,
        word: "street",
        pronunciation: [["street"]],
        chinese_meanings: "大街，街道",
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
        rank: 559,
        word: "country",
        pronunciation: [[{ style: "bold", text: "kuhn" }, "-tree"]],
        chinese_meanings: "国家，国民，乡下，地区",
      },
      {
        rank: 583,
        word: "truth",
        pronunciation: [["trooth"]],
        chinese_meanings: "真理，真相，事实，忠实，忠诚，现实，现实性",
      },
      {
        rank: 641,
        word: "trust",
        pronunciation: [["truhst"]],
        chinese_meanings: "信任，信托，照管，受托基金机构",
      },
      {
        rank: 653,
        word: "tree",
        pronunciation: [["tree"]],
        chinese_meanings: "树，木料，树状图，宗谱",
      },
      {
        rank: 3123,
        word: "trip",
        pronunciation: [["trip"]],
        chinese_meanings:
          "旅游，出行，摔倒，绊倒，绊（使某人跌倒的动作），错误，过失",
      },
      {
        rank: 757,
        word: "strong",
        pronunciation: [["strawng"], ["strong"]],
        chinese_meanings: "强的，坚强的，强烈的，强壮的",
      },
    ],
  },
  {
    phoneme: "dɹ",
    grapheme: "dr",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 309,
        word: "drink",
        pronunciation: [["dringk"]],
        chinese_meanings: "喝（酒），饮，喝酒，（尤指）酗酒",
      },
      {
        rank: 326,
        word: "drive",
        pronunciation: [["drahyv"]],
        chinese_meanings: "驾驶，开车，驱动，迫使",
      },
      {
        rank: 1373,
        word: "dream",
        pronunciation: [["dreem"]],
        chinese_meanings: "梦想，做梦，梦见，想到",
      },
      {
        rank: 526,
        word: "drop",
        pronunciation: [["drop"]],
        chinese_meanings: "（使）落下，投下，（使）降低，减少",
      },
      {
        rank: 573,
        word: "dress",
        pronunciation: [["dres"]],
        chinese_meanings: "衣服，装饰，连衣裙，礼服",
      },
      {
        rank: 671,
        word: "hundred",
        pronunciation: [[{ style: "bold", text: "huhn" }, "-drid"]],
        chinese_meanings: "一百，许多，100到999间的数目，某个世纪的年代",
      },
      {
        rank: 794,
        word: "drug",
        pronunciation: [["druhg"]],
        chinese_meanings: "药物，药剂，麻醉药，毒品",
      },
      {
        rank: 987,
        word: "bedroom",
        pronunciation: [
          [{ style: "bold", text: "bed" }, "-room"],
          ["-r", { style: "italic", text: "oo" }, "m"],
        ],
        chinese_meanings: "卧室，寝室",
      },
      {
        rank: 992,
        word: "draw",
        pronunciation: [["draw"]],
        chinese_meanings: "绘画，拖，拉，招致，吸引",
      },
      {
        rank: 1130,
        word: "driver",
        pronunciation: [[{ style: "bold", text: "drahy" }, "-ver"]],
        chinese_meanings:
          "驾驶员，司机，驱动器，驱动程序，驱逐者，驱赶者，（高尔夫球）球棒",
      },
    ],
  },
  {
    phoneme: "sm",
    grapheme: "sm",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 517,
        word: "smell",
        pronunciation: [["smel"]],
        chinese_meanings: "嗅觉，气味，臭味，发出臭气的人东西",
      },
      {
        rank: 541,
        word: "small",
        pronunciation: [["smawl"]],
        chinese_meanings: "小的，难为情的，低级的，卑劣的，细微的，微弱的",
      },
      {
        rank: 564,
        word: "smart",
        pronunciation: [["smahrt"]],
        chinese_meanings: "聪明的，敏捷的，漂亮的，整齐的",
      },
      {
        rank: 751,
        word: "smoke",
        pronunciation: [["smohk"]],
        chinese_meanings: "烟，吸烟",
      },
      {
        rank: 1280,
        word: "smile",
        pronunciation: [["smahyl"]],
        chinese_meanings: "微笑，笑容",
      },
      {
        rank: 2139,
        word: "smooth",
        pronunciation: [["smoo", { style: "italic", text: "th" }]],
        chinese_meanings: "光滑的，流畅的，柔软的，温和的，安详的",
      },
      {
        rank: 2314,
        word: "smash",
        pronunciation: [["smash"]],
        chinese_meanings: "打碎，撞击，猛扣（球等）",
      },
      {
        rank: 2831,
        word: "harassment",
        pronunciation: [
          [
            "h",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "ras" },
            "-m",
            { style: "italic", text: "uh" },
            "nt",
          ],
          [
            { style: "bold", text: "har" },
            "-",
            { style: "italic", text: "uh" },
            "s-m",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "骚扰，扰乱，折磨人的东西，烦恼，忧虑，袭扰",
      },
      {
        rank: 2884,
        word: "smelly",
        pronunciation: [[{ style: "bold", text: "smel" }, "-ee"]],
        chinese_meanings: "发出难闻气味的，有臭味的，〈口〉“smell”的派生",
      },
      {
        rank: 3233,
        word: "smack",
        pronunciation: [["smak"]],
        chinese_meanings: "拍，打，掴",
      },
    ],
  },
  {
    phoneme: "sn",
    grapheme: "sn",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 1255,
        word: "sneak",
        pronunciation: [["sneek"]],
        chinese_meanings: "潜行，偷偷溜走，（儿童向成人）打小报告，告状",
      },
      {
        rank: 1463,
        word: "snake",
        pronunciation: [["sneyk"]],
        chinese_meanings: "蛇，奸险的人，卑劣的人，蛇形浮动汇率制",
      },
      {
        rank: 1664,
        word: "snow",
        pronunciation: [["snoh"]],
        chinese_meanings: "雪，雪花，积雪，雪季",
      },
      {
        rank: 1793,
        word: "snack",
        pronunciation: [["snak"]],
        chinese_meanings: "快餐，点心，加餐",
      },
      {
        rank: 2140,
        word: "snap",
        pronunciation: [["snap"]],
        chinese_meanings: "猛地咬住，呵斥，折断",
      },
      {
        rank: 3070,
        word: "sneaker",
        pronunciation: [[{ style: "bold", text: "snee" }, "-ker"]],
      },
      {
        rank: 3298,
        word: "sneeze",
        pronunciation: [["sneez"]],
        chinese_meanings: "喷嚏，喷嚏声",
      },
      {
        rank: 3585,
        word: "sniff",
        pronunciation: [["snif"]],
        chinese_meanings: "鄙视地说，嗅，深深吸入，发现，忿忿不平地说",
      },
      {
        rank: 3949,
        word: "snuggle",
        pronunciation: [
          [
            { style: "bold", text: "snuhg" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "依偎，舒适地蜷伏，紧靠，拥抱",
      },
    ],
  },
  {
    phoneme: "sw",
    grapheme: "sw",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 355,
        word: "sweet",
        pronunciation: [["sweet"]],
        chinese_meanings: "甜的，愉快的，快乐的，温柔的，亲切的，芳香的",
      },
      {
        rank: 543,
        word: "sweetie",
        pronunciation: [[{ style: "bold", text: "swee" }, "-tee"]],
        chinese_meanings:
          "<非正><英>（儿语或用于对儿童说话时）糖果，（用于称呼自己喜欢或所爱的人）亲爱的，好心人，热心肠的人",
      },
      {
        rank: 742,
        word: "swear",
        pronunciation: [["swair"]],
        chinese_meanings: "发誓，咒骂",
      },
      {
        rank: 1163,
        word: "switch",
        pronunciation: [["swich"]],
        chinese_meanings: "开关，转换，转换器，软鞭子，信接线台",
      },
      {
        rank: 1234,
        word: "sweetheart",
        pronunciation: [[{ style: "bold", text: "sweet" }, "-hahrt"]],
        chinese_meanings: "情人，爱人",
      },
      {
        rank: 1307,
        word: "sweater",
        pronunciation: [[{ style: "bold", text: "swet" }, "-er"]],
        chinese_meanings:
          "毛衣，运动衫，出汗（过多）的人，发汗剂，榨取别人血汗的人（或工厂、公司等）",
      },
      {
        rank: 1379,
        word: "swim",
        pronunciation: [["swim"]],
        chinese_meanings: "游泳，游动，旋转，眩晕",
      },
      {
        rank: 1781,
        word: "swing",
        pronunciation: [["swing"]],
        chinese_meanings: "（使）摇摆，（使）摇荡",
      },
      {
        rank: 1950,
        word: "swallow",
        pronunciation: [[{ style: "bold", text: "swol" }, "-oh"]],
        chinese_meanings: "吞，咽，忍耐，忍受",
      },
      {
        rank: 2285,
        word: "sweep",
        pronunciation: [["sweep"]],
        chinese_meanings: "打扫，清理，扫除，彻底搜索，掠过",
      },
    ],
  },
  {
    phoneme: "stɹ",
    grapheme: "str",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 521,
        word: "street",
        pronunciation: [["street"]],
        chinese_meanings: "大街，街道",
      },
      {
        rank: 757,
        word: "strong",
        pronunciation: [["strawng"], ["strong"]],
        chinese_meanings: "强的，坚强的，强烈的，强壮的",
      },
      {
        rank: 820,
        word: "destroy",
        pronunciation: [["dih-", { style: "bold", text: "stroi" }]],
        chinese_meanings: "破坏，摧毁，消灭，歼灭（敌人），杀死，使失败",
      },
      {
        rank: 965,
        word: "strange",
        pronunciation: [["streynj"]],
        chinese_meanings: "陌生的，生疏的，奇怪的，古怪的，疏远的，外国的",
      },
      {
        rank: 1070,
        word: "straight",
        pronunciation: [["streyt"]],
        chinese_meanings: "直的，连续的，直率的，整齐的",
      },
      {
        rank: 1691,
        word: "strike",
        pronunciation: [["strahyk"]],
        chinese_meanings: "罢（工、课等），撞，攻击，来到",
      },
      {
        rank: 1874,
        word: "distract",
        pronunciation: [["dih-", { style: "bold", text: "strakt" }]],
        chinese_meanings: "使分心，使混乱",
      },
      {
        rank: 1913,
        word: "string",
        pronunciation: [["string"]],
        chinese_meanings: "绳子，带子，线丝，植物纤维，串，计算机科学字符串",
      },
      {
        rank: 1925,
        word: "stranger",
        pronunciation: [[{ style: "bold", text: "streyn" }, "-jer"]],
        chinese_meanings: "陌生人，不认识的人，外地人，局外人，门外汉",
      },
      {
        rank: 2091,
        word: "strength",
        pronunciation: [["strengkth"], ["strength"], ["strenth"]],
        chinese_meanings: "力量，优点，长处，（光、声、色等的）力度，人力数",
      },
    ],
  },
  {
    phoneme: "sp",
    grapheme: "sp",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 349,
        word: "spend",
        pronunciation: [["spend"]],
        chinese_meanings: "用钱，花钱",
      },
      {
        rank: 431,
        word: "speak",
        pronunciation: [["speek"]],
        chinese_meanings: "讲，谈，演说，从某种观点来说",
      },
      {
        rank: 2863,
        word: "special",
        pronunciation: [
          [
            { style: "bold", text: "spesh" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "特殊的，专门的，专用的，重要的",
      },
      {
        rank: 581,
        word: "space",
        pronunciation: [["speys"]],
        chinese_meanings: "空间，太空，空白，间隔，空隙，片刻",
      },
      {
        rank: 723,
        word: "hospital",
        pronunciation: [[{ style: "bold", text: "hos" }, "-pi-tl"]],
        chinese_meanings: "医院，收容所，养老院，〈古〉旅客招待所",
      },
      {
        rank: 824,
        word: "sport",
        pronunciation: [["spawrt"]],
        chinese_meanings: "体育运动，乐趣，突变，朋友，老兄",
      },
      {
        rank: 2607,
        word: "spot",
        pronunciation: [["spot"]],
        chinese_meanings: "地点，场所，斑点，污点，股票现货，职位，职务",
      },
      {
        rank: 956,
        word: "spirit",
        pronunciation: [[{ style: "bold", text: "spir" }, "-it"]],
        chinese_meanings: "精神，心灵，情绪，勇气，精髓",
      },
      {
        rank: 1171,
        word: "respect",
        pronunciation: [["ri-", { style: "bold", text: "spekt" }]],
        chinese_meanings: "尊重，尊敬，关心，遵守",
      },
      {
        rank: 1263,
        word: "especially",
        pronunciation: [
          [
            "ih-",
            { style: "bold", text: "spesh" },
            "-",
            { style: "italic", text: "uh" },
            "-lee",
          ],
        ],
        chinese_meanings: "尤其地，主要地，格外地，显著地，异常地",
      },
    ],
  },
  {
    phoneme: "st",
    grapheme: "st",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 28,
        word: "just",
        pronunciation: [["juhst"]],
        chinese_meanings: "刚才，仅仅，只是，正好，刚要",
      },
      {
        rank: 136,
        word: "stop",
        pronunciation: [["stop"]],
        chinese_meanings: "停止，中断，逗留，（使）停止工作",
      },
      {
        rank: 143,
        word: "first",
        pronunciation: [["furst"]],
        chinese_meanings: "第一，最初，头等，一号，，乐高音部",
      },
      {
        rank: 158,
        word: "still",
        pronunciation: [["stil"]],
        chinese_meanings: "仍，仍然，更，还要，静静地，〈诗〉常，不断地",
      },
      {
        rank: 174,
        word: "start",
        pronunciation: [["stahrt"]],
        chinese_meanings: "开始，动身，开动，起点",
      },
      {
        rank: 233,
        word: "must",
        pronunciation: [["muhst"]],
        chinese_meanings: "必须，必然要，（做出逻辑推断），（表示坚持）",
      },
      {
        rank: 240,
        word: "stay",
        pronunciation: [["stey"]],
        chinese_meanings: "停留，停止，坚持，抑制",
      },
      {
        rank: 1930,
        word: "stuff",
        pronunciation: [["stuhf"]],
        chinese_meanings: "材料，原料，资料，〈俚〉钱，现金，填充物，素材资料",
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
        rank: 247,
        word: "last",
        pronunciation: [["last"], ["lahst"]],
        chinese_meanings: "末尾，最后，上个，鞋楦（做鞋的模型）",
      },
    ],
  },
  {
    phoneme: "sk",
    grapheme: "sk",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 173,
        word: "ask",
        pronunciation: [["ask"], ["ahsk"]],
        chinese_meanings: "问，询问，需要，要求，请求，邀请",
      },
      {
        rank: 889,
        word: "desk",
        pronunciation: [["desk"]],
        chinese_meanings: "书桌，办公桌，服务台，部门，（美）讲道台",
      },
      {
        rank: 1160,
        word: "skin",
        pronunciation: [["skin"]],
        chinese_meanings: "皮，皮肤，（蔬菜，水果等）外皮，毛皮",
      },
      {
        rank: 1528,
        word: "sky",
        pronunciation: [["skahy"]],
        chinese_meanings: "天（空）",
      },
      {
        rank: 1678,
        word: "basketball",
        pronunciation: [
          [{ style: "bold", text: "bas" }, "-kit-bawl"],
          [{ style: "bold", text: "bah" }, "-skit-"],
        ],
        chinese_meanings: "篮球，体篮球运动",
      },
      {
        rank: 1690,
        word: "skip",
        pronunciation: [["skip"]],
        chinese_meanings: "跳，跳绳，悄悄溜走，快速转移",
      },
      {
        rank: 1887,
        word: "basket",
        pronunciation: [[{ style: "bold", text: "bas" }, "-kit"]],
        chinese_meanings: "篮，一篮，（篮球运动的）篮，投篮得分",
      },
      {
        rank: 1919,
        word: "skill",
        pronunciation: [["skil"]],
        chinese_meanings: "技能，技巧，熟练，巧妙，才能，本领",
      },
      {
        rank: 2951,
        word: "risk",
        pronunciation: [["risk"]],
        chinese_meanings: "危险，冒险，保险额，被保险人或物",
      },
      {
        rank: 2640,
        word: "skull",
        pronunciation: [["skuhl"]],
        chinese_meanings: "颅骨，头盖骨，脑袋，脑子，冶渣壳，熔铁上的浮渣",
      },
    ],
  },
  {
    phoneme: "sk",
    grapheme: "sc",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 210,
        word: "school",
        pronunciation: [["skool"]],
        chinese_meanings: "学校，上学，学院，群",
      },
      {
        rank: 594,
        word: "scare",
        pronunciation: [["skair"]],
        chinese_meanings: "使惊恐，惊吓，使害怕，使恐惧，把…吓跑",
      },
      {
        rank: 604,
        word: "screw",
        pronunciation: [["skroo"]],
        chinese_meanings: "螺丝钉，螺旋桨，螺旋状物，（螺丝的）转，扭，吝啬鬼",
      },
      {
        rank: 1006,
        word: "scream",
        pronunciation: [["skreem"]],
        chinese_meanings: "尖声喊叫，拼命叫喊，喊叫着说出，尖叫得使变…",
      },
      {
        rank: 1112,
        word: "scary",
        pronunciation: [[{ style: "bold", text: "skair" }, "-ee"]],
        chinese_meanings: "使人惊慌的，胆小的，容易受惊的，可怕的，吓人的",
      },
      {
        rank: 1188,
        word: "discuss",
        pronunciation: [["dih-", { style: "bold", text: "skuhs" }]],
        chinese_meanings: "讨论，谈论，论述，详述，商量",
      },
      {
        rank: 1224,
        word: "discover",
        pronunciation: [["dih-", { style: "bold", text: "skuhv" }, "-er"]],
        chinese_meanings: "发现，碰见，撞见，获得知识",
      },
      {
        rank: 2215,
        word: "score",
        pronunciation: [["skawr"], ["skohr"]],
        chinese_meanings: "得分，分数，总谱，20个",
      },
      {
        rank: 1744,
        word: "escape",
        pronunciation: [["ih-", { style: "bold", text: "skeyp" }]],
        chinese_meanings: "逃脱，逃离，躲过，泄露",
      },
      {
        rank: 1905,
        word: "scout",
        pronunciation: [["skout"]],
        chinese_meanings:
          "搜索，侦察，侦察员，侦察机，侦察舰，童子军，（牛津大学的）校工",
      },
    ],
  },
  {
    phoneme: "ʃ",
    grapheme: "sh",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 56,
        word: "she",
        pronunciation: [["shee"]],
        chinese_meanings: "她，它",
      },
      {
        rank: 94,
        word: "shall",
        pronunciation: [["shal"]],
        chinese_meanings: "将要，必须，可以，应该",
      },
      {
        rank: 181,
        word: "show",
        pronunciation: [["shoh"]],
        chinese_meanings: "给…看，表现出，显露出，上演",
      },
      {
        rank: 344,
        word: "shut",
        pronunciation: [["shuht"]],
        chinese_meanings: "关闭，合上，打烊，闭上",
      },
      {
        rank: 406,
        word: "shoot",
        pronunciation: [["shoot"]],
        chinese_meanings: "拍摄，射击，发芽",
      },
      {
        rank: 410,
        word: "wish",
        pronunciation: [["wish"]],
        chinese_meanings: "希望，想要，祝愿",
      },
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
        rank: 536,
        word: "finish",
        pronunciation: [[{ style: "bold", text: "fin" }, "-ish"]],
        chinese_meanings: "完成，结束，吃光，使筋疲力尽",
      },
      {
        rank: 548,
        word: "shoe",
        pronunciation: [["shoo"]],
        chinese_meanings: "鞋，蹄铁，（汽车轮的）制动器，煞车，外胎",
      },
      {
        rank: 566,
        word: "shh",
        pronunciation: [["sh"]],
        chinese_meanings: "嘘，安静一点",
      },
    ],
  },
  {
    phoneme: "f",
    grapheme: "ph",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 316,
        word: "phone",
        pronunciation: [["fohn"]],
        chinese_meanings: "电话，听筒，（发声或使用声音的）工具，说某种语言的",
      },
      {
        rank: 1021,
        word: "photo",
        pronunciation: [[{ style: "bold", text: "foh" }, "-toh"]],
        chinese_meanings: "照片，相片",
      },
      {
        rank: 1680,
        word: "elephant",
        pronunciation: [
          [
            { style: "bold", text: "el" },
            "-",
            { style: "italic", text: "uh" },
            "-f",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "象，大象",
      },
      {
        rank: 3469,
        word: "physical",
        pronunciation: [
          [
            { style: "bold", text: "fiz" },
            "-i-k",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "自然（界）的，身体的，物质的，自然规律的",
      },
      {
        rank: 2197,
        word: "physics",
        pronunciation: [[{ style: "bold", text: "fiz" }, "-iks"]],
        chinese_meanings: "物理学，物理现象，物理成分",
      },
      {
        rank: 2378,
        word: "trophy",
        pronunciation: [[{ style: "bold", text: "troh" }, "-fee"]],
        chinese_meanings:
          "纪念品，战利品，奖品，奖杯（牌），胜利纪念柱，战利品雕饰",
      },
      {
        rank: 2427,
        word: "phase",
        pronunciation: [["feyz"]],
        chinese_meanings: "相，周相，阶段，物理学相位，方面，侧面",
      },
      {
        rank: 2437,
        word: "dolphin",
        pronunciation: [
          [{ style: "bold", text: "dol" }, "-fin"],
          [{ style: "bold", text: "dawl" }, "-"],
        ],
        chinese_meanings: "海豚，（码头的）系船柱",
      },
      {
        rank: 2499,
        word: "phrase",
        pronunciation: [["freyz"]],
        chinese_meanings: "<语>短语，成语，说法，乐句",
      },
      {
        rank: 2621,
        word: "nephew",
        pronunciation: [
          [{ style: "bold", text: "nef" }, "-yoo"],
          [{ style: "bold", text: "nev" }, "-yoo"],
        ],
        chinese_meanings: "侄子，外甥",
      },
    ],
  },
  {
    phoneme: "θ",
    grapheme: "th",
    graphemeType: "Consonant+",
    pronunciation: "th",
    tips: "th 在单词开头和结尾时",
    words: [
      {
        rank: 33,
        word: "with",
        pronunciation: [["with"], ["wi", { style: "italic", text: "th" }]],
        chinese_meanings: "和，跟，随着，关于，和…一致",
      },
      {
        rank: 38,
        word: "think",
        pronunciation: [["thingk"]],
        chinese_meanings: "想，思索，以为，看待",
      },
      {
        rank: 73,
        word: "thing",
        pronunciation: [["thing"]],
        chinese_meanings: "事件，形势，东西，事物，家伙，事业",
      },
      {
        rank: 119,
        word: "thank",
        pronunciation: [["thangk"]],
        chinese_meanings: "谢谢，感谢，责怪，把…归于",
      },
      {
        rank: 188,
        word: "three",
        pronunciation: [["three"]],
        chinese_meanings: "三，三个，第三（章，页等）",
      },
      {
        rank: 191,
        word: "thanks",
        chinese_meanings: "感谢，谢谢，感谢，谢谢，道谢的话(thank的名词复数)",
      },
      {
        rank: 236,
        word: "through",
        pronunciation: [["throo"]],
        chinese_meanings: "通过，穿过，经由，透过，凭借",
      },
      {
        rank: 331,
        word: "throw",
        pronunciation: [["throh"]],
        chinese_meanings: "投掷，丢，抛",
      },
      {
        rank: 347,
        word: "both",
        pronunciation: [["bohth"]],
        chinese_meanings: "二者，两者都",
      },
      {
        rank: 376,
        word: "month",
        pronunciation: [["muhnth"]],
        chinese_meanings: "月，月份，一个月的时间",
      },
    ],
  },
  {
    phoneme: "ð",
    grapheme: "th",
    graphemeType: "Consonant+",
    pronunciation: "_th",
    tips: "th 在 代、介、连、副、冠 词时；在单词中间时",
    words: [
      {
        rank: 4,
        word: "the",
        pronunciation: [[{ style: "italic", text: "th" }, "ee"]],
        chinese_meanings:
          "指已提到的人（物），指说话人与听者已知的人（物），用于独一无二的事物前，与形容词最高级和序数词连用",
      },
      {
        rank: 9,
        word: "that",
        pronunciation: [[{ style: "italic", text: "th" }, "at"]],
        chinese_meanings: "那个，那",
      },
      {
        rank: 18,
        word: "this",
        pronunciation: [[{ style: "italic", text: "th" }, "is"]],
        chinese_meanings: "这，这个，这事，这人，这时，下面所说的事",
      },
      {
        rank: 33,
        word: "with",
        pronunciation: [["with"], ["wi", { style: "italic", text: "th" }]],
        chinese_meanings: "和，跟，随着，关于，和…一致",
      },
      {
        rank: 51,
        word: "they",
        pronunciation: [[{ style: "italic", text: "th" }, "ey"]],
        chinese_meanings: "他/她/它们，人们，大家，政府，当局，她们",
      },
      {
        rank: 70,
        word: "there",
        pronunciation: [[{ style: "italic", text: "th" }, "air"]],
        chinese_meanings: "在那里，那里，在那一点上",
      },
      {
        rank: 91,
        word: "them",
        pronunciation: [[{ style: "italic", text: "th" }, "em"]],
        chinese_meanings: "他们，她们，它们",
      },
      {
        rank: 93,
        word: "then",
        pronunciation: [[{ style: "italic", text: "th" }, "en"]],
        chinese_meanings: "那时，然后，那么，话说回来",
      },
      {
        rank: 130,
        word: "these",
        pronunciation: [[{ style: "italic", text: "th" }, "eez"]],
        chinese_meanings: "这些的",
      },
      {
        rank: 140,
        word: "those",
        pronunciation: [[{ style: "italic", text: "th" }, "ohz"]],
        chinese_meanings: "that的复数",
      },
    ],
  },
  {
    phoneme: "w",
    grapheme: "wh",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 14,
        word: "what",
        pronunciation: [["wuht"], ["wot"], ["hwuht"], ["hwot"]],
        chinese_meanings: "（用以询问某人或某事物的词）什么，多少，…的事物",
      },
      {
        rank: 69,
        word: "why",
        pronunciation: [["wahy"], ["hwahy"]],
        chinese_meanings:
          "（用于问句）为什么，为何，（反问，表示不必）何必，（说明理由）为什么",
      },
      {
        rank: 77,
        word: "when",
        pronunciation: [["wen"], ["hwen"]],
        chinese_meanings:
          "什么时候，（用于时间的表达方式之后）在那时，其时，当时",
      },
      {
        rank: 99,
        word: "where",
        pronunciation: [["wair"], ["hwair"]],
        chinese_meanings: "哪里，在哪里，到哪里，某种情势或位置",
      },
      {
        rank: 232,
        word: "which",
        pronunciation: [["wich"], ["hwich"]],
        chinese_meanings: "哪一个，哪一些，哪个，那，指前面提到的事物",
      },
      {
        rank: 278,
        word: "whoa",
        pronunciation: [["woh"], ["hwoh"]],
        chinese_meanings: "惊叹声，停止",
      },
      {
        rank: 655,
        word: "while",
        pronunciation: [["wahyl"], ["hwahyl"]],
        chinese_meanings: "在…期间，与…同时，虽然，而",
      },
      {
        rank: 388,
        word: "whatever",
        pronunciation: [
          ["wuht-", { style: "bold", text: "ev" }, "-er"],
          ["wot-"],
          ["w", { style: "italic", text: "uh" }, "t-"],
          ["hwuht-"],
          ["hwot-"],
          ["hw", { style: "italic", text: "uh" }, "t-"],
        ],
        chinese_meanings:
          "无论什么，任何（事物），诸如此类，（表示不在乎，什么都可接受）什么都可以",
      },
      {
        rank: 551,
        word: "white",
        pronunciation: [["wahyt"], ["hwahyt"]],
        chinese_meanings: "白色的，纯洁的，无色的，透明的，白衣的，白种人的",
      },
      {
        rank: 736,
        word: "somewhere",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-hwair"], ["-wair"]],
        chinese_meanings: "某处，在某处，在到某处，不知道在到什么地方，某地",
      },
    ],
  },
  {
    phoneme: "tʃ",
    grapheme: "ch",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 135,
        word: "much",
        pronunciation: [["muhch"]],
        chinese_meanings: "非常，差不多，很多地，很大程度上",
      },
      {
        rank: 204,
        word: "watch",
        pronunciation: [["woch"]],
        chinese_meanings: "注视，注意，看守，监视，守候（机会等），密切注意",
      },
      {
        rank: 232,
        word: "which",
        pronunciation: [["wich"], ["hwich"]],
        chinese_meanings: "哪一个，哪一些，哪个，那，指前面提到的事物",
      },
      {
        rank: 250,
        word: "child",
        pronunciation: [["chahyld"]],
        chinese_meanings: "小孩，孩子，幼稚的人，产物，弟子",
      },
      {
        rank: 287,
        word: "change",
        pronunciation: [["cheynj"]],
        chinese_meanings: "改变，变更，交换，替换，兑换，换衣服（床单）",
      },
      {
        rank: 292,
        word: "check",
        pronunciation: [["chek"]],
        chinese_meanings: "检查，核对，制止，抑制，在…上打勾",
      },
      {
        rank: 324,
        word: "such",
        pronunciation: [["suhch"]],
        chinese_meanings: "这样的，如此的，这么大的，非常的",
      },
      {
        rank: 340,
        word: "each",
        pronunciation: [["eech"]],
        chinese_meanings: "每，各自的",
      },
      {
        rank: 426,
        word: "catch",
        pronunciation: [["kach"]],
        chinese_meanings: "赶上，接住，引起，看见",
      },
      {
        rank: 450,
        word: "chance",
        pronunciation: [["chans"], ["chahns"]],
        chinese_meanings: "机会，机遇，概率，可能性，偶然，运气",
      },
    ],
  },
  {
    phoneme: "tʃ",
    grapheme: "tch",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 204,
        word: "watch",
        pronunciation: [["woch"]],
        chinese_meanings: "注视，注意，看守，监视，守候（机会等），密切注意",
      },
      {
        rank: 426,
        word: "catch",
        pronunciation: [["kach"]],
        chinese_meanings: "赶上，接住，引起，看见",
      },
      {
        rank: 912,
        word: "kitchen",
        pronunciation: [
          [
            { style: "bold", text: "kich" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "厨房，厨师",
      },
      {
        rank: 1163,
        word: "switch",
        pronunciation: [["swich"]],
        chinese_meanings: "开关，转换，转换器，软鞭子，信接线台",
      },
      {
        rank: 2351,
        word: "match",
        pronunciation: [["mach"]],
        chinese_meanings: "比赛，对手，相配的人（或物），火柴",
      },
      {
        rank: 2021,
        word: "scratch",
        pronunciation: [["skrach"]],
        chinese_meanings: "擦，刮，擦痛，擦伤，在…处搔痒，抓破",
      },
      {
        rank: 2188,
        word: "witch",
        pronunciation: [["wich"]],
        chinese_meanings: "女巫，巫婆，<贬>讨人嫌的丑女人，迫害的对象",
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
      {
        rank: 2392,
        word: "stretch",
        pronunciation: [["strech"]],
        chinese_meanings: "伸展，延伸，持续，包括",
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
    phoneme: "f",
    grapheme: "gh",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 263,
        word: "enough",
        pronunciation: [["ih-", { style: "bold", text: "nuhf" }]],
        chinese_meanings: "足够地，充足地，十分地",
      },
      {
        rank: 575,
        word: "laugh",
        pronunciation: [["laf"], ["lahf"]],
        chinese_meanings: "笑，发笑，嘲笑，（特别表示因成功而）处于有利地位",
      },
      {
        rank: 691,
        word: "tough",
        pronunciation: [["tuhf"]],
        chinese_meanings:
          "坚强的，坚韧的，不屈不挠的，艰苦的，困难的，难办的，牢固的，强壮的，粗暴的",
      },
      {
        rank: 1747,
        word: "rough",
        pronunciation: [["ruhf"]],
        chinese_meanings:
          "粗糙的，崎岖不平的，粗鲁的，狂暴的，汹涌的，未经加工的",
      },
      {
        rank: 3085,
        word: "laughter",
        pronunciation: [
          [{ style: "bold", text: "laf" }, "-ter"],
          [{ style: "bold", text: "lahf" }, "-"],
        ],
        chinese_meanings:
          "笑，笑声，〈古〉好笑的事，〈美俚〉力量悬殊得可笑的体育比赛，大笑",
      },
      {
        rank: 4730,
        word: "cough",
        pronunciation: [["kawf"], ["kof"]],
        chinese_meanings: "咳嗽，（引擎等）发噗噗声，咳出",
      },
    ],
  },
  {
    phoneme: "k",
    grapheme: "ck",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 4481,
        word: "back",
        pronunciation: [["bak"]],
        chinese_meanings: "背，背部，背面，反面，后面，后部，（椅子等的）靠背",
      },
      {
        rank: 292,
        word: "check",
        pronunciation: [["chek"]],
        chinese_meanings: "检查，核对，制止，抑制，在…上打勾",
      },
      {
        rank: 293,
        word: "pick",
        pronunciation: [["pik"]],
        chinese_meanings: "挑选，挑拣，挖，采，摘，剔，扒，挑剔",
      },
      {
        rank: 432,
        word: "suck",
        pronunciation: [["suhk"]],
        chinese_meanings: "吮吸，吸入，卷进入，吸取",
      },
      {
        rank: 436,
        word: "stick",
        pronunciation: [["stik"]],
        chinese_meanings: "粘贴，张贴，插入，刺入",
      },
      {
        rank: 451,
        word: "black",
        pronunciation: [["blak"]],
        chinese_meanings: "黑（色）的，黑色人种的，黑暗的，不加牛奶的",
      },
      {
        rank: 460,
        word: "sick",
        pronunciation: [["sik"]],
        chinese_meanings: "恶心的，晕船，不舒服的，腻烦的",
      },
      {
        rank: 503,
        word: "ticket",
        pronunciation: [[{ style: "bold", text: "tik" }, "-it"]],
        chinese_meanings:
          "票，入场券，标签，传票，交通违规的通知单，<美>候选人名单",
      },
      {
        rank: 552,
        word: "kick",
        pronunciation: [["kik"]],
        chinese_meanings: "踢",
      },
      {
        rank: 596,
        word: "chicken",
        pronunciation: [
          [
            { style: "bold", text: "chik" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "鸡，鸡肉，胆小鬼，懦夫",
      },
    ],
  },
  {
    phoneme: "kw",
    grapheme: "qu",
    graphemeType: "Consonant+",
    words: [
      {
        rank: 561,
        word: "question",
        pronunciation: [
          [
            { style: "bold", text: "kwes" },
            "-ch",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "问题，疑问，怀疑，议题",
      },
      {
        rank: 563,
        word: "quite",
        pronunciation: [["kwahyt"]],
        chinese_meanings: "相当，很，非常，确实如此",
      },
      {
        rank: 631,
        word: "quick",
        pronunciation: [["kwik"]],
        chinese_meanings: "快的，急速的，聪明的，凌厉的，灵活的，短时间做成的",
      },
      {
        rank: 639,
        word: "quit",
        pronunciation: [["kwit"]],
        chinese_meanings: "离开，放弃，抛弃，停止，中断，偿清",
      },
      {
        rank: 1144,
        word: "quiet",
        pronunciation: [[{ style: "bold", text: "kwahy" }, "-it"]],
        chinese_meanings: "清静的，僻静的，不起眼的，不激动的",
      },
      {
        rank: 1261,
        word: "queen",
        pronunciation: [["kween"]],
        chinese_meanings:
          "女王，王后，杰出女性，（纸牌中的）王后，（国际象棋中的）后",
      },
      {
        rank: 1275,
        word: "square",
        pronunciation: [["skwair"]],
        chinese_meanings: "正方形，广场，平方，方格",
      },
      {
        rank: 1613,
        word: "quarter",
        pronunciation: [[{ style: "bold", text: "kwawr" }, "-ter"]],
        chinese_meanings: "四分之一，一刻钟，地区，（美式足球的）一节",
      },
      {
        rank: 1662,
        word: "quickly",
        pronunciation: [[{ style: "bold", text: "kwik" }, "-lee"]],
        chinese_meanings: "迅速地，立即，马上",
      },
      {
        rank: 1834,
        word: "squeeze",
        pronunciation: [["skweez"]],
        chinese_meanings: "挤，榨，捏，压迫，压榨",
      },
    ],
  },
  {
    phoneme: "s",
    grapheme: "c",
    graphemeType: "Consonant+",
    pronunciation: "s",
    tips: "c 遇到字母 i , e , y",
    words: [
      {
        rank: 156,
        word: "nice",
        pronunciation: [["nahys"]],
        chinese_meanings: "美好的，愉快的，正派的，友好的，亲切的，细致的",
      },
      {
        rank: 2387,
        word: "place",
        pronunciation: [["pleys"]],
        chinese_meanings: "位，地方，职位，座位",
      },
      {
        rank: 319,
        word: "once",
        pronunciation: [["wuhns"]],
        chinese_meanings: "一次，一趟，一倍，曾经，一旦",
      },
      {
        rank: 350,
        word: "office",
        pronunciation: [
          [{ style: "bold", text: "aw" }, "-fis"],
          [{ style: "bold", text: "of" }, "-is"],
        ],
        chinese_meanings: "办公室，办公楼，问询处，重要官职",
      },
      {
        rank: 473,
        word: "face",
        pronunciation: [["feys"]],
        chinese_meanings: "面容，表面，脸，方面",
      },
      {
        rank: 434,
        word: "city",
        pronunciation: [[{ style: "bold", text: "sit" }, "-ee"]],
        chinese_meanings:
          "城市，全市居民，（由国王或女王授予特权，通常有大教堂的）特许市，（由政府授予特权的）特权市",
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
      {
        rank: 469,
        word: "decide",
        pronunciation: [["dih-", { style: "bold", text: "sahyd" }]],
        chinese_meanings: "决定，决心，解决，裁决",
      },
      {
        rank: 547,
        word: "piece",
        pronunciation: [["pees"]],
        chinese_meanings: "块，片，段，部分，部件，文章，音乐作品",
      },
    ],
  },
  {
    phoneme: "dʒ",
    grapheme: "g",
    graphemeType: "Consonant+",
    pronunciation: "j",
    tips: "g 遇到字母 i , e , y",
    words: [
      {
        rank: 287,
        word: "change",
        pronunciation: [["cheynj"]],
        chinese_meanings: "改变，变更，交换，替换，兑换，换衣服（床单）",
      },
      {
        rank: 537,
        word: "gentleman",
        pronunciation: [
          [
            { style: "bold", text: "jen" },
            "-tl-m",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "先生，绅士，有身份地位的人",
      },
      {
        rank: 623,
        word: "college",
        pronunciation: [[{ style: "bold", text: "kol" }, "-ij"]],
        chinese_meanings: "大学，（英国）学院，学会，（尤指必须交费的）中学",
      },
      {
        rank: 628,
        word: "message",
        pronunciation: [[{ style: "bold", text: "mes" }, "-ij"]],
        chinese_meanings: "信息，消息，要旨，教训",
      },
      {
        rank: 680,
        word: "huge",
        pronunciation: [["hyooj"], ["yooj"]],
        chinese_meanings: "巨大的，庞大的，极大的",
      },
      {
        rank: 695,
        word: "marriage",
        pronunciation: [[{ style: "bold", text: "mar" }, "-ij"]],
        chinese_meanings: "结婚，婚姻生活，密切结合，合并",
      },
      {
        rank: 713,
        word: "apologize",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pol" },
            "-",
            { style: "italic", text: "uh" },
            "-jahyz",
          ],
        ],
        chinese_meanings: "道歉，认错，辩解，辩护",
      },
      {
        rank: 791,
        word: "imagine",
        pronunciation: [["ih-", { style: "bold", text: "maj" }, "-in"]],
        chinese_meanings: "想，设想，想像，料想，猜想，误认为",
      },
      {
        rank: 4996,
        word: "age",
        pronunciation: [["eyj"]],
        chinese_meanings: "年龄，时代，老年，年龄段",
      },
      {
        rank: 851,
        word: "manager",
        pronunciation: [[{ style: "bold", text: "man" }, "-i-jer"]],
        chinese_meanings:
          "处理者，经理，管理人，干事，理事，〈美〉（政党等的）领袖，策士，干才，干练的人",
      },
    ],
  },
  {
    phoneme: "ɑɹ",
    grapheme: "ar",
    graphemeType: "Other",
    words: [
      {
        rank: 174,
        word: "start",
        pronunciation: [["stahrt"]],
        chinese_meanings: "开始，动身，开动，起点",
      },
      {
        rank: 215,
        word: "car",
        pronunciation: [["kahr"]],
        chinese_meanings: "汽车，车厢，轿车",
      },
      {
        rank: 2929,
        word: "party",
        pronunciation: [[{ style: "bold", text: "pahr" }, "-tee"]],
        chinese_meanings: "社交聚会，党，党派，当事人，同类，伙伴",
      },
      {
        rank: 269,
        word: "hard",
        pronunciation: [["hahrd"]],
        chinese_meanings: "困难的，硬的，有力的，努力的",
      },
      {
        rank: 305,
        word: "part",
        pronunciation: [["pahrt"]],
        chinese_meanings: "部分，零件，参加，地区",
      },
      {
        rank: 402,
        word: "heart",
        pronunciation: [["hahrt"]],
        chinese_meanings: "心，心脏，感情，要点，胸部",
      },
      {
        rank: 446,
        word: "bar",
        pronunciation: [["bahr"]],
        chinese_meanings: "条，棒，（门、窗等的）闩，障碍，酒吧间",
      },
      {
        rank: 454,
        word: "card",
        pronunciation: [["kahrd"]],
        chinese_meanings: "卡片，纸牌，明信片，信用卡",
      },
      {
        rank: 461,
        word: "apartment",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pahrt" },
            "-m",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings:
          "寓所，住房，房间，公寓楼，（有特殊用途或专属某人的）豪华寓所",
      },
      {
        rank: 564,
        word: "smart",
        pronunciation: [["smahrt"]],
        chinese_meanings: "聪明的，敏捷的，漂亮的，整齐的",
      },
    ],
  },
  {
    phoneme: "ɝ",
    grapheme: "ir",
    graphemeType: "Other",
    words: [
      {
        rank: 143,
        word: "first",
        pronunciation: [["furst"]],
        chinese_meanings: "第一，最初，头等，一号，，乐高音部",
      },
      {
        rank: 167,
        word: "girl",
        pronunciation: [["gurl"]],
        chinese_meanings:
          "女孩，姑娘，未婚女子，女职员，女演员，（男人的）女朋友",
      },
      {
        rank: 268,
        word: "sir",
        pronunciation: [["sur"]],
        chinese_meanings:
          "先生，（用于姓名前）爵士，（中小学生对男教师的称呼）先生，老师",
      },
      {
        rank: 440,
        word: "birthday",
        pronunciation: [[{ style: "bold", text: "burth" }, "-dey"]],
        chinese_meanings: "生日，诞辰，成立纪念日",
      },
      {
        rank: 499,
        word: "fire",
        pronunciation: [["fahy", { style: "italic", text: "uh" }, "r"]],
        chinese_meanings: "火，燃烧物，火灾，射击，发射，热情",
      },
      {
        rank: 508,
        word: "girlfriend",
        pronunciation: [[{ style: "bold", text: "gurl" }, "-frend"]],
        chinese_meanings: "女朋友，女性朋友",
      },
      {
        rank: 635,
        word: "shirt",
        pronunciation: [["shurt"]],
        chinese_meanings: "衬衫，衬衣，内衣，汗衫",
      },
      {
        rank: 673,
        word: "entire",
        pronunciation: [["en-", { style: "bold", text: "tahyuhr" }]],
        chinese_meanings: "全部的，整个的，全体的，囫囵",
      },
      {
        rank: 738,
        word: "thirty",
        pronunciation: [[{ style: "bold", text: "thur" }, "-tee"]],
        chinese_meanings: "三十，三十个，三十年代，三十的记号",
      },
      {
        rank: 745,
        word: "tired",
        pronunciation: [["tahy", { style: "italic", text: "uh" }, "rd"]],
        chinese_meanings: "疲倦的，困倦的，对…不耐烦的，陈旧的",
      },
    ],
  },
  {
    phoneme: "ɝ",
    grapheme: "ur",
    graphemeType: "Other",
    words: [
      {
        rank: 81,
        word: "our",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "我们的，we的所有格形式，<口>我们家，敝",
      },
      {
        rank: 222,
        word: "turn",
        pronunciation: [["turn"]],
        chinese_meanings: "使转动，旋转，使改变方向，使不适",
      },
      {
        rank: 285,
        word: "hour",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "小时，钟头，时间，时刻，固定时间，课时",
      },
      {
        rank: 296,
        word: "yourself",
        pronunciation: [
          [
            "y",
            { style: "italic", text: "oo" },
            "r-",
            { style: "bold", text: "self" },
          ],
          ["yawr-"],
          ["yohr-"],
          ["yer-"],
        ],
        chinese_meanings: "你自己，（用以加强语气）亲自，你的正常或健康的情况",
      },
      {
        rank: 380,
        word: "hurt",
        pronunciation: [["hurt"]],
        chinese_meanings: "损害，使受伤，使伤心，使受皮肉之苦",
      },
      {
        rank: 2323,
        word: "picture",
        pronunciation: [[{ style: "bold", text: "pik" }, "-cher"]],
        chinese_meanings: "照片，画像，图画，图片，影片，情景",
      },
      {
        rank: 464,
        word: "figure",
        pronunciation: [[{ style: "bold", text: "fig" }, "-yer"]],
        chinese_meanings: "数字，算术，人物，身材",
      },
      {
        rank: 569,
        word: "yours",
        pronunciation: [
          ["y", { style: "italic", text: "oo" }, "rz"],
          ["yawrz"],
          ["yohrz"],
        ],
        chinese_meanings: "你（们）的东西，你的责任义务，你的家属，来信，尊函",
      },
      {
        rank: 580,
        word: "return",
        pronunciation: [["ri-", { style: "bold", text: "turn" }]],
        chinese_meanings: "回转，返回，复发，又来，送还，言归正传",
      },
      {
        rank: 690,
        word: "burn",
        pronunciation: [["burn"]],
        chinese_meanings: "&link-",
      },
    ],
  },
  {
    phoneme: "ɝ",
    grapheme: "er",
    graphemeType: "Other",
    words: [
      {
        rank: 65,
        word: "her",
        pronunciation: [["hur"]],
        chinese_meanings:
          "(she的宾格)她，(she的所有格)她的，她，指某个国家，（一艘）船",
      },
      {
        rank: 102,
        word: "never",
        pronunciation: [[{ style: "bold", text: "nev" }, "-er"]],
        chinese_meanings:
          "从不，从来没有，一点也不，决不，<口>不会…吧，没有，不曾",
      },
      {
        rank: 107,
        word: "over",
        pronunciation: [[{ style: "bold", text: "oh" }, "-ver"]],
        chinese_meanings:
          "（表示方向）越过，（部份或全部覆盖）在…上面，由于，（表示论及）关于",
      },
      {
        rank: 148,
        word: "ever",
        pronunciation: [[{ style: "bold", text: "ev" }, "-er"]],
        chinese_meanings: "永远，曾经，这以前，究竟，到底，可能",
      },
      {
        rank: 198,
        word: "after",
        pronunciation: [
          [{ style: "bold", text: "af" }, "-ter"],
          [{ style: "bold", text: "ahf" }, "-"],
        ],
        chinese_meanings:
          "…后的，（表示时间）在…以后，（表示位置、顺序）在…后面",
      },
      {
        rank: 200,
        word: "every",
        pronunciation: [[{ style: "bold", text: "ev" }, "-ree"]],
        chinese_meanings: "每个，每，所有可能的，充足的",
      },
      {
        rank: 203,
        word: "person",
        pronunciation: [
          [
            { style: "bold", text: "pur" },
            "-s",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "人，（语法）人称，身体，容貌",
      },
      {
        rank: 394,
        word: "other",
        pronunciation: [[{ style: "bold", text: "uhth" }, "-er"]],
        chinese_meanings: "别的，其他的，（两个中的）另一个，其余的",
      },
      {
        rank: 206,
        word: "remember",
        pronunciation: [["ri-", { style: "bold", text: "mem" }, "-ber"]],
        chinese_meanings: "记得，牢记",
      },
      {
        rank: 219,
        word: "another",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "nuhth" },
            "-er",
          ],
        ],
        chinese_meanings: "又一个，再一个，另一的，其他一种",
      },
    ],
  },
  {
    phoneme: "ɝ",
    grapheme: "or",
    graphemeType: "Other",
    pronunciation: "aw",
    tips: "or 在单词结尾；在字母 w 后面",
    words: [
      {
        rank: 26,
        word: "for",
        pronunciation: [["fawr"]],
        chinese_meanings: "为，为了，倾向于，关于，当作",
      },
      {
        rank: 95,
        word: "or",
        pronunciation: [["awr"]],
        chinese_meanings: "或，或者，还是，不然，否则，左右",
      },
      {
        rank: 118,
        word: "work",
        pronunciation: [["wurk"]],
        chinese_meanings: "使工作，使运作，操作，使产生效果",
      },
      {
        rank: 231,
        word: "world",
        pronunciation: [["wurld"]],
        chinese_meanings: "世界，地球，领域，尘世",
      },
      {
        rank: 261,
        word: "doctor",
        pronunciation: [[{ style: "bold", text: "dok" }, "-ter"]],
        chinese_meanings: "医生，大夫，博士，神学家，医疗设备",
      },
      {
        rank: 280,
        word: "worry",
        pronunciation: [
          [{ style: "bold", text: "wur" }, "-ee"],
          [{ style: "bold", text: "wuhr" }, "-ee"],
        ],
        chinese_meanings: "烦恼，忧虑，担心，撕咬",
      },
      {
        rank: 294,
        word: "word",
        pronunciation: [["wurd"]],
        chinese_meanings: "单词，话语，诺言，消息",
      },
      {
        rank: 767,
        word: "favor",
        pronunciation: [[{ style: "bold", text: "fey" }, "-ver"]],
        chinese_meanings: "好感，宠爱，关切，欢心",
      },
      {
        rank: 781,
        word: "worth",
        pronunciation: [["wurth"]],
        chinese_meanings: "值得的，有…的价值，等值的，有…的财产",
      },
      {
        rank: 865,
        word: "mayor",
        pronunciation: [[{ style: "bold", text: "mey" }, "-er"], ["mair"]],
        chinese_meanings:
          "市长，镇长，（英格兰、威尔士和北爱尔兰由议员选举产生的）镇长，（民选的）市长",
      },
    ],
  },
  {
    phoneme: "ɔɹ",
    grapheme: "or",
    graphemeType: "Other",
    pronunciation: "awr",
    tips: "or 在单词中间",
    words: [
      {
        rank: 110,
        word: "more",
        pronunciation: [["mawr"], ["mohr"]],
        chinese_meanings: "更，更多，达到或处于更大的范围或程度，此外，更加",
      },
      {
        rank: 186,
        word: "before",
        pronunciation: [
          ["bih-", { style: "bold", text: "fawr" }],
          ["-", { style: "bold", text: "fohr" }],
        ],
        chinese_meanings: "在…之前，先于，优于，当着…的面，与其…",
      },
      {
        rank: 256,
        word: "forget",
        pronunciation: [["fer-", { style: "bold", text: "get" }]],
        chinese_meanings: "忘记，忘却，忽略，疏忽，遗落，忘掉",
      },
      {
        rank: 302,
        word: "story",
        pronunciation: [
          [{ style: "bold", text: "stawr" }, "-ee"],
          [{ style: "bold", text: "stohr" }, "-ee"],
        ],
        chinese_meanings: "故事，传说，历史，沿革，内情，传记",
      },
      {
        rank: 313,
        word: "morning",
        pronunciation: [[{ style: "bold", text: "mawr" }, "-ning"]],
        chinese_meanings: "早晨，上午，黎明，早期，初期",
      },
      {
        rank: 361,
        word: "anymore",
        pronunciation: [
          ["en-ee-", { style: "bold", text: "mawr" }],
          ["-", { style: "bold", text: "mohr" }],
        ],
        chinese_meanings: "（不）再，目前，现在，今后",
      },
      {
        rank: 400,
        word: "important",
        pronunciation: [["im-", { style: "bold", text: "pawr" }, "-tnt"]],
        chinese_meanings: "重要的，权威的，有势力的，有地位的",
      },
      {
        rank: 470,
        word: "store",
        pronunciation: [["stawr"]],
        chinese_meanings: "商店，贮存物，仓库，大量",
      },
      {
        rank: 2777,
        word: "sort",
        pronunciation: [["sawrt"]],
        chinese_meanings: "分类，类别，品质，本性，方法，一群",
      },
      {
        rank: 701,
        word: "lord",
        pronunciation: [["lawrd"]],
        chinese_meanings:
          "主，领主，上帝，（英国用以称呼法官、主教或某些男性贵族成员，表示尊敬）大人",
      },
    ],
  },
  {
    phoneme: "ɔɪ",
    grapheme: "oi",
    graphemeType: "Other",
    words: [
      {
        rank: 539,
        word: "point",
        pronunciation: [["point"]],
        chinese_meanings: "点，要点，得分，标点",
      },
      {
        rank: 599,
        word: "join",
        pronunciation: [["join"]],
        chinese_meanings: "连接，联结，加入，参加",
      },
      {
        rank: 636,
        word: "choice",
        pronunciation: [["chois"]],
        chinese_meanings: "选择，选择权，精选品，入选者",
      },
      {
        rank: 666,
        word: "voice",
        pronunciation: [["vois"]],
        chinese_meanings: "嗓音，（动词的）语态，呼声，发言权，歌唱才能",
      },
      {
        rank: 759,
        word: "toilet",
        pronunciation: [[{ style: "bold", text: "toi" }, "-lit"]],
        chinese_meanings: "洗手间，坐便器，梳洗",
      },
      {
        rank: 1204,
        word: "noise",
        pronunciation: [["noiz"]],
        chinese_meanings: "噪音，嘈杂声，喧闹声，声音，声响，杂音",
      },
      {
        rank: 1359,
        word: "oil",
        pronunciation: [["oil"]],
        chinese_meanings: "油，石油，油画，燃油",
      },
      {
        rank: 1427,
        word: "disappoint",
        pronunciation: [
          [
            "dis-",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "point" },
          ],
        ],
        chinese_meanings: "使失望，使破灭，使落空",
      },
      {
        rank: 1492,
        word: "avoid",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "void" },
          ],
        ],
        chinese_meanings: "避开，避免，预防，法使无效，撤销，废止",
      },
      {
        rank: 1499,
        word: "appointment",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "point" },
            "-m",
            { style: "italic", text: "uh" },
            "nt",
          ],
        ],
        chinese_meanings: "约会，任命，职务，职位",
      },
    ],
  },
  {
    phoneme: "ɔɪ",
    grapheme: "oy",
    graphemeType: "Other",
    words: [
      {
        rank: 131,
        word: "boy",
        pronunciation: [["boi"]],
        chinese_meanings: "男孩，少年，儿子，小伙子，家伙，服务员",
      },
      {
        rank: 442,
        word: "enjoy",
        pronunciation: [["en-", { style: "bold", text: "joi" }]],
        chinese_meanings: "享有，享受，欣赏，喜欢，使过得快活",
      },
      {
        rank: 617,
        word: "boyfriend",
        pronunciation: [[{ style: "bold", text: "boi" }, "-frend"]],
        chinese_meanings: "男朋友，情郎",
      },
      {
        rank: 820,
        word: "destroy",
        pronunciation: [["dih-", { style: "bold", text: "stroi" }]],
        chinese_meanings: "破坏，摧毁，消灭，歼灭（敌人），杀死，使失败",
      },
      {
        rank: 962,
        word: "toy",
        pronunciation: [["toi"]],
        chinese_meanings: "玩具，玩物，小装饰品，无实用价值的东西",
      },
      {
        rank: 1392,
        word: "employee",
        pronunciation: [
          ["em-", { style: "bold", text: "ploi" }, "-ee"],
          ["em-ploi-", { style: "bold", text: "ee" }],
        ],
        chinese_meanings: "雇工，雇员，职工",
      },
      {
        rank: 1615,
        word: "annoy",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "noi" },
          ],
        ],
        chinese_meanings: "打扰，干扰，使烦恼，使恼怒",
      },
      {
        rank: 1946,
        word: "cowboy",
        pronunciation: [[{ style: "bold", text: "kou" }, "-boi"]],
        chinese_meanings: "牛仔，牧童，富有冒险精神的英雄，俚语莽撞的人",
      },
      {
        rank: 2116,
        word: "joy",
        pronunciation: [["joi"]],
        chinese_meanings: "喜悦，快乐，高兴，令人高兴的事（或人），成功，好运",
      },
      { rank: 2803, word: "ex-boyfriend" },
    ],
  },
  {
    phoneme: "aʊ",
    grapheme: "ou",
    graphemeType: "Other",
    words: [
      {
        rank: 41,
        word: "out",
        pronunciation: [["out"]],
        chinese_meanings: "出局，在外，在外部，完全，彻底，出版",
      },
      {
        rank: 42,
        word: "about",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "bout" },
          ],
        ],
        chinese_meanings: "关于，大约，在…周围",
      },
      {
        rank: 81,
        word: "our",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "我们的，we的所有格形式，<口>我们家，敝",
      },
      {
        rank: 182,
        word: "around",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "round" },
          ],
        ],
        chinese_meanings: "大约，旋转，到处，四处，在周围",
      },
      {
        rank: 207,
        word: "house",
        pronunciation: [["hous"]],
        chinese_meanings:
          "房屋，全家人，（从事某种生意的）公司，（英国）下议院",
      },
      {
        rank: 271,
        word: "sound",
        pronunciation: [["sound"]],
        chinese_meanings: "声音，声响，音调，声调，声波，嘈杂声",
      },
      {
        rank: 285,
        word: "hour",
        pronunciation: [
          ["ou", { style: "italic", text: "uh" }, "r"],
          [{ style: "bold", text: "ou" }, "-er"],
        ],
        chinese_meanings: "小时，钟头，时间，时刻，固定时间，课时",
      },
      {
        rank: 322,
        word: "without",
        pronunciation: [
          [
            "wi",
            { style: "italic", text: "th" },
            "-",
            { style: "bold", text: "out" },
          ],
          ["with-"],
        ],
        chinese_meanings: "在外部，户外，缺少，没有或不显示某事物",
      },
      {
        rank: 560,
        word: "mouth",
        pronunciation: [["mouth"]],
        chinese_meanings: "口，出入口，传闻",
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
    ],
  },
  {
    phoneme: "aʊ",
    grapheme: "ow",
    graphemeType: "Other",
    pronunciation: "ou",
    tips: "ow 在单词中间",
    words: [
      {
        rank: 111,
        word: "down",
        pronunciation: [["doun"]],
        chinese_meanings:
          "（坐、倒、躺）下，向下，（表示范围或顺序的限度）下至",
      },
      {
        rank: 345,
        word: "town",
        pronunciation: [["toun"]],
        chinese_meanings: "城镇，市镇，小村庄，城镇居民，商业中心",
      },
      {
        rank: 3860,
        word: "power",
        pronunciation: [[{ style: "bold", text: "pou" }, "-er"]],
        chinese_meanings: "机动力，功率，力量，政权，权力，强国，大国",
      },
      {
        rank: 861,
        word: "clown",
        pronunciation: [["kloun"]],
        chinese_meanings:
          "丑角，小丑，乡下人，笨拙粗鲁的人，经常闹笑话的人，小气鬼，守财奴",
      },
      {
        rank: 2762,
        word: "shower",
        pronunciation: [[{ style: "bold", text: "shou" }, "-er"]],
        chinese_meanings: "阵雨，淋浴，淋浴器，一大批",
      },
      {
        rank: 1024,
        word: "flower",
        pronunciation: [[{ style: "bold", text: "flou" }, "-er"]],
        chinese_meanings: "花，精华，开花植物",
      },
      {
        rank: 1181,
        word: "towel",
        pronunciation: [
          [
            { style: "bold", text: "tou" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
          ["toul"],
        ],
        chinese_meanings: "毛巾，手巾，纸巾",
      },
      {
        rank: 1408,
        word: "brown",
        pronunciation: [["broun"]],
        chinese_meanings: "棕色的，褐色的，被晒黑的，未去壳的",
      },
      {
        rank: 1575,
        word: "crowd",
        pronunciation: [["kroud"]],
        chinese_meanings: "人群，群众，一群",
      },
      {
        rank: 1679,
        word: "downtown",
        pronunciation: [
          [
            { style: "bold", text: "doun" },
            "-",
            { style: "bold", text: "toun" },
          ],
        ],
        chinese_meanings: "市中心区，（市中）商业区",
      },
    ],
  },
  {
    phoneme: "ɛɹ",
    grapheme: "air",
    graphemeType: "Other",
    words: [
      {
        rank: 413,
        word: "hair",
        pronunciation: [["hair"]],
        chinese_meanings:
          "头发，毛发，（动、植物的）毛，一丝丝，些微，毛发织物",
      },
      {
        rank: 615,
        word: "fair",
        pronunciation: [["fair"]],
        chinese_meanings: "公平的，合理的，晴朗的，美丽的",
      },
      {
        rank: 3960,
        word: "air",
        pronunciation: [["air"]],
        chinese_meanings: "天空，气氛，空运，（简单易记的）曲调",
      },
      {
        rank: 649,
        word: "chair",
        pronunciation: [["chair"]],
        chinese_meanings:
          "椅子，大学教授职位，主持会议的主席（的席位或职位），讲座",
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
        rank: 1362,
        word: "airplane",
        pronunciation: [[{ style: "bold", text: "air" }, "-pleyn"]],
        chinese_meanings: "<美>飞机",
      },
      {
        rank: 1363,
        word: "airport",
        pronunciation: [[{ style: "bold", text: "air" }, "-pawrt"], ["-pohrt"]],
        chinese_meanings: "机场，航空站",
      },
      {
        rank: 1915,
        word: "downstairs",
        pronunciation: [
          [
            { style: "bold", text: "doun" },
            "-",
            { style: "bold", text: "stairz" },
          ],
        ],
        chinese_meanings: "在楼下，向往楼下",
      },
      {
        rank: 1958,
        word: "pair",
        pronunciation: [["pair"]],
        chinese_meanings: "一副，一对男女，套在一起的两匹马，雌雄成对的动物",
      },
      {
        rank: 1987,
        word: "affair",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "fair" },
          ],
        ],
        chinese_meanings: "事情，事件，事务，个人的事，私事，风流韵事",
      },
    ],
  },
  {
    phoneme: "ɛɹ",
    grapheme: "are",
    graphemeType: "Other",
    words: [
      {
        rank: 214,
        word: "care",
        pronunciation: [["kair"]],
        chinese_meanings: "关心，担心，照顾，喜爱",
      },
      {
        rank: 374,
        word: "parent",
        pronunciation: [
          [
            { style: "bold", text: "pair" },
            "-",
            { style: "italic", text: "uh" },
            "nt",
          ],
          [{ style: "bold", text: "par" }, "-"],
        ],
        chinese_meanings: "父亲（或母亲），先辈，根源，起源，保护者",
      },
      {
        rank: 594,
        word: "scare",
        pronunciation: [["skair"]],
        chinese_meanings: "使惊恐，惊吓，使害怕，使恐惧，把…吓跑",
      },
      {
        rank: 716,
        word: "share",
        pronunciation: [["shair"]],
        chinese_meanings:
          "股，（参与、得到等的）份，（分享到的或贡献出的）一份，市场占有率",
      },
      {
        rank: 826,
        word: "apparently",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pair" },
            "-",
            { style: "italic", text: "uh" },
            "nt-lee",
          ],
        ],
        chinese_meanings: "据说，看来，似乎，实际上",
      },
      {
        rank: 894,
        word: "prepare",
        pronunciation: [["pri-", { style: "bold", text: "pair" }]],
        chinese_meanings: "准备，预备（饭菜），配备，使（自己）有准备",
      },
      {
        rank: 1000,
        word: "careful",
        pronunciation: [
          [
            { style: "bold", text: "kair" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "仔细的，小心的，周到的，慎，心细",
      },
      {
        rank: 1063,
        word: "dare",
        pronunciation: [["dair"]],
        chinese_meanings:
          "敢，敢做，激（某人做某事），问（某人）有没有胆量（做某事）",
      },
      {
        rank: 1080,
        word: "area",
        pronunciation: [
          [
            { style: "bold", text: "air" },
            "-ee-",
            { style: "italic", text: "uh" },
          ],
        ],
        chinese_meanings: "地区，区域，范围，面积，平地，领域",
      },
      {
        rank: 1243,
        word: "stare",
        pronunciation: [["stair"]],
        chinese_meanings: "盯着看，显眼，倒立，直竖起",
      },
    ],
  },
  {
    phoneme: "ɛɹ",
    grapheme: "ear",
    graphemeType: "Other",
    pronunciation: "air",
    tips: "ear 在字母 b , p , w 后",
    words: [
      {
        rank: 266,
        word: "wear",
        pronunciation: [["wair"]],
        chinese_meanings: "穿着，戴着，面露，留着（胡须等），磨损",
      },
      {
        rank: 742,
        word: "swear",
        pronunciation: [["swair"]],
        chinese_meanings: "发誓，咒骂",
      },
      {
        rank: 754,
        word: "bear",
        pronunciation: [["bair"]],
        chinese_meanings: "熊，（在证券市场等）卖空的人，蛮横的人",
      },
      {
        rank: 1172,
        word: "underwear",
        pronunciation: [[{ style: "bold", text: "uhn" }, "-der-wair"]],
        chinese_meanings: "衬衣，内衣",
      },
    ],
  },
  {
    phoneme: "ɪɹ",
    grapheme: "eer",
    graphemeType: "Other",
    words: [
      {
        rank: 512,
        word: "beer",
        pronunciation: [["beer"]],
        chinese_meanings: "啤酒，麦酒，（一般）发酵饮料，印，纺比尔",
      },
      {
        rank: 1165,
        word: "career",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "reer" },
          ],
        ],
        chinese_meanings: "生涯，职业，事业，速度，全速",
      },
      {
        rank: 1456,
        word: "cheer",
        pronunciation: [["cheer"]],
        chinese_meanings: "欢呼，使高兴，为…喝彩，为…加油",
      },
      {
        rank: 2507,
        word: "cheers",
        chinese_meanings: "举杯敬酒的用语，谢谢，再见",
      },
      {
        rank: 3010,
        word: "deer",
        pronunciation: [["deer"]],
        chinese_meanings: "鹿",
      },
      {
        rank: 3177,
        word: "volunteer",
        pronunciation: [
          [
            "vol-",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "teer" },
          ],
        ],
        chinese_meanings: "志愿者，志愿兵，军义勇军，植自生植物，林先锋树种",
      },
      {
        rank: 3268,
        word: "steer",
        pronunciation: [["steer"]],
        chinese_meanings: "驾驶，操纵，控制，引导",
      },
      {
        rank: 3341,
        word: "cheerleader",
        pronunciation: [[{ style: "bold", text: "cheer" }, "-lee-der"]],
        chinese_meanings: "啦啦队队长，（强有力的）支持者",
      },
      {
        rank: 4229,
        word: "reindeer",
        pronunciation: [[{ style: "bold", text: "reyn" }, "-deer"]],
        chinese_meanings: "<动>驯鹿",
      },
      {
        rank: 4265,
        word: "engineer",
        pronunciation: [
          [
            "en-j",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "neer" },
          ],
        ],
        chinese_meanings:
          "工程师，技师，（轮船的）机师，〈美〉（火车的）司机，，（陆军的）工兵",
      },
    ],
  },
  {
    phoneme: "ɪɹ",
    grapheme: "ear",
    graphemeType: "Other",
    pronunciation: "eer",
    tips: "ear 在单词结尾",
    words: [
      {
        rank: 145,
        word: "year",
        pronunciation: [["yeer"]],
        chinese_meanings: "年，年纪，一年的期间，某年级的学生",
      },
      {
        rank: 562,
        word: "dear",
        pronunciation: [["deer"]],
        chinese_meanings: "亲爱的，敬爱的，昂贵的，严厉的",
      },
      {
        rank: 1668,
        word: "clear",
        pronunciation: [["kleer"]],
        chinese_meanings: "清楚的，明白的，清晰的，明亮的，清澈的，明确的",
      },
      {
        rank: 959,
        word: "ear",
        pronunciation: [["eer"]],
        chinese_meanings: "耳朵，听觉，听力，耳状物，穗",
      },
      {
        rank: 1008,
        word: "appear",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "peer" },
          ],
        ],
        chinese_meanings: "出现，显现，出庭，出场，演出，发表",
      },
      {
        rank: 2512,
        word: "fear",
        pronunciation: [["feer"]],
        chinese_meanings: "害怕，可能性，（对神等的）敬畏，忧虑",
      },
      {
        rank: 1262,
        word: "tear",
        pronunciation: [["teer"]],
        chinese_meanings: "撕裂，拉掉，挣开，拉伤",
      },
      {
        rank: 4280,
        word: "near",
        pronunciation: [["neer"]],
        chinese_meanings: "（空间）在近处，在附近，（时间）临近，（程度）几乎",
      },
      {
        rank: 2027,
        word: "disappear",
        pronunciation: [
          [
            "dis-",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "peer" },
          ],
        ],
        chinese_meanings: "不见，消失，不复存在，灭绝",
      },
    ],
  },
  {
    phoneme: "ɪɹ",
    grapheme: "ere",
    graphemeType: "Other",
    words: [
      {
        rank: 2519,
        word: "cereal",
        pronunciation: [
          [
            { style: "bold", text: "seer" },
            "-ee-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "谷类植物，谷物，粮食，荞麦食品",
      },
      {
        rank: 2783,
        word: "hereby",
        pronunciation: [
          ["heer-", { style: "bold", text: "bahy" }],
          [{ style: "bold", text: "heer" }, "-bahy"],
        ],
        chinese_meanings: "以此方式，特此",
      },
      {
        rank: 3425,
        word: "merely",
        pronunciation: [[{ style: "bold", text: "meer" }, "-lee"]],
        chinese_meanings: "仅仅，只不过，只是，纯粹，全然",
      },
      {
        rank: 4102,
        word: "cashmere",
        pronunciation: [
          [{ style: "bold", text: "kazh" }, "-meer"],
          [{ style: "bold", text: "kash" }, "-"],
        ],
        chinese_meanings: "开司米，山羊绒，开士米羊毛织品",
      },
      {
        rank: 4221,
        word: "interfere",
        pronunciation: [["in-ter-", { style: "bold", text: "feer" }]],
        chinese_meanings: "干预，干涉，调停，排解，妨碍，打扰",
      },
      {
        rank: 4235,
        word: "severe",
        pronunciation: [
          [
            "s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "veer" },
          ],
        ],
        chinese_meanings: "严峻的，严厉的，剧烈的，苛刻的",
      },
      {
        rank: 4405,
        word: "sincere",
        pronunciation: [["sin-", { style: "bold", text: "seer" }]],
        chinese_meanings:
          "真诚的，诚挚的，〈古〉纯粹的，不掺假的，真心实意的，真实的",
      },
      {
        rank: 4420,
        word: "premiere",
        pronunciation: [
          ["pri-", { style: "bold", text: "meer" }],
          ["-", { style: "bold", text: "myair" }],
        ],
        chinese_meanings: "首映",
      },
      {
        rank: 4542,
        word: "atmosphere",
        pronunciation: [
          [
            { style: "bold", text: "at" },
            "-m",
            { style: "italic", text: "uh" },
            "s-feer",
          ],
        ],
        chinese_meanings: "大气，空气，大气层，风格，基调，气氛",
      },
      {
        rank: 5043,
        word: "sincerely",
        pronunciation: [["sin-", { style: "bold", text: "seer" }, "-lee"]],
        chinese_meanings: "真诚地，诚恳地，谆",
      },
    ],
  },
  {
    phoneme: "ɔ",
    grapheme: "au",
    graphemeType: "Other",
    words: [
      {
        rank: 79,
        word: "because",
        pronunciation: [
          ["bih-", { style: "bold", text: "kawz" }],
          ["-", { style: "bold", text: "koz" }],
          ["-", { style: "bold", text: "kuhz" }],
        ],
        chinese_meanings: "因为",
      },
      {
        rank: 622,
        word: "daughter",
        pronunciation: [[{ style: "bold", text: "daw" }, "-ter"]],
        chinese_meanings: "女儿，产物，后代，（某地的）妇女，生子代",
      },
      {
        rank: 630,
        word: "fault",
        pronunciation: [["fawlt"]],
        chinese_meanings: "缺点，缺陷，过错，责任，电故障，（猎狗的）失去嗅迹",
      },
      {
        rank: 966,
        word: "aunt",
        pronunciation: [["ant"], ["ahnt"]],
        chinese_meanings: "阿姨，姨母，姑妈，舅妈，婶娘",
      },
      {
        rank: 1020,
        word: "cause",
        pronunciation: [["kawz"]],
        chinese_meanings: "原因，动机，理由，事业",
      },
      {
        rank: 1333,
        word: "sauce",
        pronunciation: [["saws"]],
        chinese_meanings: "调味汁，酱汁，〈非〉莽撞无礼，〈俚〉烈酒",
      },
      {
        rank: 1421,
        word: "laundry",
        pronunciation: [
          [{ style: "bold", text: "lawn" }, "-dree"],
          [{ style: "bold", text: "lahn" }, "-"],
        ],
        chinese_meanings: "洗衣店，洗衣房，洗好的衣服，待洗的衣服，洗熨",
      },
      {
        rank: 1472,
        word: "audience",
        pronunciation: [
          [
            { style: "bold", text: "aw" },
            "-dee-",
            { style: "italic", text: "uh" },
            "ns",
          ],
        ],
        chinese_meanings: "观众，听众，读者，读者，接见，拥护者，爱好者",
      },
      {
        rank: 2245,
        word: "exhaust",
        pronunciation: [["ig-", { style: "bold", text: "zawst" }]],
        chinese_meanings: "用尽，耗尽，使精疲力尽，排出，彻底探讨",
      },
      {
        rank: 2415,
        word: "authority",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "thawr" },
            "-i-tee",
          ],
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "thor" },
            "-",
          ],
        ],
        chinese_meanings: "权威，权力，学术权威，复数当权者",
      },
    ],
  },
  {
    phoneme: "ɔ",
    grapheme: "aw",
    graphemeType: "Other",
    words: [
      {
        rank: 336,
        word: "aw",
        pronunciation: [["aw"]],
        chinese_meanings: "实际重量",
      },
      {
        rank: 459,
        word: "awesome",
        pronunciation: [
          [
            { style: "bold", text: "aw" },
            "-s",
            { style: "italic", text: "uh" },
            "m",
          ],
        ],
        chinese_meanings: "令人敬畏的，使人畏惧的，可怕的，极好的",
      },
      {
        rank: 758,
        word: "law",
        pronunciation: [["law"]],
        chinese_meanings: "法，法学，规律，法制",
      },
      {
        rank: 885,
        word: "lawyer",
        pronunciation: [
          [{ style: "bold", text: "law" }, "-yer"],
          [{ style: "bold", text: "loi" }, "-er"],
        ],
        chinese_meanings: "律师，法学家",
      },
      {
        rank: 921,
        word: "awful",
        pronunciation: [
          [
            { style: "bold", text: "aw" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "糟糕的，可怕的，非常的，极坏的",
      },
      {
        rank: 992,
        word: "draw",
        pronunciation: [["draw"]],
        chinese_meanings: "绘画，拖，拉，招致，吸引",
      },
      {
        rank: 1069,
        word: "award",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "wawrd" },
          ],
        ],
        chinese_meanings: "授予，奖给，判给，判归，判定",
      },
      {
        rank: 1399,
        word: "awkward",
        pronunciation: [[{ style: "bold", text: "awk" }, "-werd"]],
        chinese_meanings: "令人尴尬的，难对付的，不方便的，笨拙的",
      },
      {
        rank: 2046,
        word: "drawer",
        pronunciation: [["drawr"]],
        chinese_meanings: "抽屉，开票人，出票人，起草者，酒馆侍者",
      },
      {
        rank: 2060,
        word: "crawl",
        pronunciation: [["krawl"]],
        chinese_meanings: "爬行，缓慢行进，巴结",
      },
    ],
  },
  {
    phoneme: "ɔ",
    grapheme: "al",
    graphemeType: "Other",
    words: [
      {
        rank: 31,
        word: "all",
        pronunciation: [["awl"]],
        chinese_meanings: "全部的，一切的，各种的，极度的，尽量的",
      },
      {
        rank: 96,
        word: "talk",
        pronunciation: [["tawk"]],
        chinese_meanings: "说话，讨论，讲，说，说闲话",
      },
      {
        rank: 103,
        word: "call",
        pronunciation: [["kawl"]],
        chinese_meanings: "呼唤，喊叫，召唤，叫来，召集，下令，命令，打电话给",
      },
      {
        rank: 187,
        word: "always",
        pronunciation: [[{ style: "bold", text: "awl" }, "-weyz"], ["-weez"]],
        chinese_meanings: "总是，老是，永远，始终，常常，不断地",
      },
      {
        rank: 300,
        word: "walk",
        pronunciation: [["wawk"]],
        chinese_meanings: "走，步行，散步",
      },
      {
        rank: 303,
        word: "already",
        pronunciation: [["awl-", { style: "bold", text: "red" }, "-ee"]],
        chinese_meanings: "早已，已经，先前",
      },
      {
        rank: 362,
        word: "also",
        pronunciation: [[{ style: "bold", text: "awl" }, "-soh"]],
        chinese_meanings: "也，同样，并且",
      },
      {
        rank: 395,
        word: "ball",
        pronunciation: [["bawl"]],
        chinese_meanings: "球，棒球（投手投出的）坏球，拇指球，舞会",
      },
      {
        rank: 401,
        word: "fall",
        pronunciation: [["fawl"]],
        chinese_meanings: "落下，跌倒，减少，沦陷",
      },
      {
        rank: 452,
        word: "almost",
        pronunciation: [
          [{ style: "bold", text: "awl" }, "-mohst"],
          ["awl-", { style: "bold", text: "mohst" }],
        ],
        chinese_meanings: "几乎，差不多，将近，快要，近乎",
      },
    ],
  },
  {
    phoneme: "ɔɫ",
    grapheme: "all",
    graphemeType: "Other",
    words: [
      {
        rank: 31,
        word: "all",
        pronunciation: [["awl"]],
        chinese_meanings: "全部的，一切的，各种的，极度的，尽量的",
      },
      {
        rank: 103,
        word: "call",
        pronunciation: [["kawl"]],
        chinese_meanings: "呼唤，喊叫，召唤，叫来，召集，下令，命令，打电话给",
      },
      {
        rank: 395,
        word: "ball",
        pronunciation: [["bawl"]],
        chinese_meanings: "球，棒球（投手投出的）坏球，拇指球，舞会",
      },
      {
        rank: 401,
        word: "fall",
        pronunciation: [["fawl"]],
        chinese_meanings: "落下，跌倒，减少，沦陷",
      },
      {
        rank: 541,
        word: "small",
        pronunciation: [["smawl"]],
        chinese_meanings: "小的，难为情的，低级的，卑劣的，细微的，微弱的",
      },
      {
        rank: 769,
        word: "wall",
        pronunciation: [["wawl"]],
        chinese_meanings: "墙，屏障，隔阂，壁垒",
      },
      {
        rank: 934,
        word: "hall",
        pronunciation: [["hawl"]],
        chinese_meanings: "过道，走廊，大厅，前厅，娱乐中心，会所",
      },
      {
        rank: 1052,
        word: "football",
        pronunciation: [[{ style: "bold", text: "foot" }, "-bawl"]],
        chinese_meanings:
          "足球〔美国通常指橄榄球〕，足球运动，屡屡引起争论（或分歧）的问题，被踢来踢去的难题",
      },
      {
        rank: 1182,
        word: "mall",
        pronunciation: [["mawl"]],
        chinese_meanings: "购物中心，林荫路，铁圈球场",
      },
      {
        rank: 1219,
        word: "tall",
        pronunciation: [["tawl"]],
        chinese_meanings:
          "身材高的，高大的，（数量）大的，（俚）过分的，夸张的",
      },
    ],
  },
  {
    phoneme: "ʊ",
    grapheme: "oo",
    graphemeType: "Other",
    pronunciation: "_oo",
    tips: "oo 在字母 k 前时；好、脚、站在、羊毛、木头 时",
    words: [
      {
        rank: 43,
        word: "good",
        pronunciation: [["g", { style: "italic", text: "oo" }, "d"]],
        chinese_meanings: "好的，优秀的，有益的，漂亮的，健全的",
      },
      {
        rank: 57,
        word: "look",
        pronunciation: [["l", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "看，瞧",
      },
      {
        rank: 1990,
        word: "book",
        pronunciation: [["b", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "书，卷，课本，账簿",
      },
      {
        rank: 534,
        word: "foot",
        pronunciation: [["f", { style: "italic", text: "oo" }, "t"]],
        chinese_meanings: "脚，底部，英尺(=12英寸或30。48厘米)，脚步",
      },
      {
        rank: 601,
        word: "good-bye",
        pronunciation: [
          [
            "g",
            { style: "italic", text: "oo" },
            "d-",
            { style: "bold", text: "bahy" },
          ],
        ],
      },
      {
        rank: 788,
        word: "cookie",
        pronunciation: [[{ style: "bold", text: "kook" }, "-ee"]],
        chinese_meanings: "饼干，小甜点，吸引人的年轻妇女，甜面包",
      },
      {
        rank: 996,
        word: "cook",
        pronunciation: [["k", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "烹调，编造，篡改，密谋",
      },
      {
        rank: 1052,
        word: "football",
        pronunciation: [[{ style: "bold", text: "foot" }, "-bawl"]],
        chinese_meanings:
          "足球〔美国通常指橄榄球〕，足球运动，屡屡引起争论（或分歧）的问题，被踢来踢去的难题",
      },
      {
        rank: 1241,
        word: "hook",
        pronunciation: [["h", { style: "italic", text: "oo" }, "k"]],
        chinese_meanings: "钩，铁钩，弯曲部分，有钩部分，圈套，陷阱，〈俚〉锚",
      },
      {
        rank: 1248,
        word: "wood",
        pronunciation: [["w", { style: "italic", text: "oo" }, "d"]],
        chinese_meanings: "木材，树林，木制品",
      },
    ],
  },
  {
    phoneme: "ʊ",
    grapheme: "u",
    graphemeType: "Other",
    pronunciation: "_oo",
    tips: "u 在 推、拉、放、满 时",
    words: [
      {
        rank: 132,
        word: "put",
        pronunciation: [["p", { style: "italic", text: "oo" }, "t"]],
        chinese_meanings:
          "放，表达，给予（重视、信任、价值等），使处于（某种状态）",
      },
      {
        rank: 274,
        word: "suppose",
        pronunciation: [
          [
            "s",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "pohz" },
          ],
        ],
        chinese_meanings: "假定，猜想，推测，认为，让（用于祈祷语气）",
      },
      {
        rank: 465,
        word: "pull",
        pronunciation: [["p", { style: "italic", text: "oo" }, "l"]],
        chinese_meanings: "拉，扯，拉过来，划（船）",
      },
      {
        rank: 483,
        word: "full",
        pronunciation: [["f", { style: "italic", text: "oo" }, "l"]],
        chinese_meanings: "满的，装满的，完全的，完整的，丰富的，详尽的",
      },
      {
        rank: 698,
        word: "push",
        pronunciation: [["p", { style: "italic", text: "oo" }, "sh"]],
        chinese_meanings: "推，推动",
      },
      {
        rank: 829,
        word: "uh-oh",
        pronunciation: [[{ style: "bold", text: "uh" }, "-oh"]],
        chinese_meanings: "呃喔",
      },
      {
        rank: 1230,
        word: "introduce",
        pronunciation: [
          [
            "in-tr",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "doos" },
          ],
          ["-", { style: "bold", text: "dyoos" }],
        ],
        chinese_meanings: "提出，介绍，引进，作为…的开头",
      },
      {
        rank: 1313,
        word: "sugar",
        pronunciation: [[{ style: "bold", text: "shoog" }, "-er"]],
        chinese_meanings: "食糖，一匙糖，宝贝儿，亲爱的",
      },
      {
        rank: 3338,
        word: "bully",
        pronunciation: [[{ style: "bold", text: "bool" }, "-ee"]],
        chinese_meanings: "恐吓，威逼，盛气凌人，以强凌弱",
      },
      {
        rank: 1827,
        word: "focus",
        pronunciation: [
          [
            { style: "bold", text: "foh" },
            "-k",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings:
          "（使）集中，（使）聚集，调整（镜头，眼睛）焦点焦距以便看清",
      },
    ],
  },
  {
    phoneme: "m",
    grapheme: "mb",
    graphemeType: "Other",
    words: [
      {
        rank: 206,
        word: "remember",
        pronunciation: [["ri-", { style: "bold", text: "mem" }, "-ber"]],
        chinese_meanings: "记得，牢记",
      },
      {
        rank: 311,
        word: "number",
        pronunciation: [[{ style: "bold", text: "nuhm" }, "-ber"]],
        chinese_meanings: "数字，数量，号码，编号",
      },
      {
        rank: 752,
        word: "embarrass",
        pronunciation: [
          [
            "em-",
            { style: "bold", text: "bar" },
            "-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "（使）窘迫，（使）局促不安，（使）困难",
      },
      {
        rank: 833,
        word: "dumb",
        pronunciation: [["duhm"]],
        chinese_meanings:
          "哑的，无说话能力的，不说话的，无声的，沉默的，无言的，口齿不清的，（在政府中）无代言人的，政治上无发言权的",
      },
      {
        rank: 1134,
        word: "member",
        pronunciation: [[{ style: "bold", text: "mem" }, "-ber"]],
        chinese_meanings: "成员，分子，身体部位（尤指胳膊或腿），构件，部件",
      },
      {
        rank: 1566,
        word: "climb",
        pronunciation: [["klahym"]],
        chinese_meanings: "攀登，爬，登山，上升",
      },
      {
        rank: 4370,
        word: "bomb",
        pronunciation: [["bom"]],
        chinese_meanings: "炸弹，彻底的失败，橄榄球长传，高压贮罐",
      },
      {
        rank: 2141,
        word: "thumb",
        pronunciation: [["thuhm"]],
        chinese_meanings: "拇指，（手套的）拇指部份",
      },
      {
        rank: 2341,
        word: "zombie",
        pronunciation: [[{ style: "bold", text: "zom" }, "-bee"]],
        chinese_meanings:
          "（某些非洲和加勒比地区的宗教及恐怖故事中）靠巫术起死回生的僵尸，无生气的人，麻木迟钝的人",
      },
      {
        rank: 2371,
        word: "hamburger",
        pronunciation: [[{ style: "bold", text: "ham" }, "-bur-ger"]],
        chinese_meanings: "汉堡包，碎牛肉，牛肉饼",
      },
    ],
  },
  {
    phoneme: "n",
    grapheme: "kn",
    graphemeType: "Other",
    words: [
      {
        rank: 27,
        word: "know",
        pronunciation: [["noh"]],
        chinese_meanings: "知道，了解，认识，确信",
      },
      {
        rank: 787,
        word: "knock",
        pronunciation: [["nok"]],
        chinese_meanings: "短促的敲打（声），爆震声，敲击声，敲门（或窗等）声",
      },
      {
        rank: 1428,
        word: "knife",
        pronunciation: [["nahyf"]],
        chinese_meanings: "刀，匕首，刃部，手术刀",
      },
      {
        rank: 1473,
        word: "knee",
        pronunciation: [["nee"]],
        chinese_meanings: "膝，膝盖",
      },
      {
        rank: 2652,
        word: "nickname",
        pronunciation: [[{ style: "bold", text: "nik" }, "-neym"]],
        chinese_meanings: "绰号，诨名，昵称",
      },
      {
        rank: 2687,
        word: "knowledge",
        pronunciation: [[{ style: "bold", text: "nol" }, "-ij"]],
        chinese_meanings:
          "了解，理解，知识（表示多方面的知识时有复数knowledges这一用法），学科，见闻",
      },
      {
        rank: 3079,
        word: "darkness",
        pronunciation: [[{ style: "bold", text: "dahrk" }, "-nis"]],
        chinese_meanings: "黑暗，阴郁，模糊，无知",
      },
      {
        rank: 3151,
        word: "knight",
        pronunciation: [["nahyt"]],
        chinese_meanings: "（中古时代的）武士，骑士，爵士，（国际象棋中）马",
      },
      {
        rank: 3548,
        word: "acknowledge",
        pronunciation: [["ak-", { style: "bold", text: "nol" }, "-ij"]],
        chinese_meanings: "承认，鸣谢，对…打招呼，告知已收到",
      },
      {
        rank: 3698,
        word: "weakness",
        pronunciation: [[{ style: "bold", text: "week" }, "-nis"]],
        chinese_meanings:
          "弱点，缺点，软弱，优柔寡断，弱，衰弱，虚弱，〈口〉偏爱，癖好",
      },
    ],
  },
  {
    phoneme: "ɹ",
    grapheme: "wr",
    graphemeType: "Other",
    words: [
      {
        rank: 208,
        word: "wrong",
        pronunciation: [["rawng"], ["rong"]],
        chinese_meanings:
          "有毛病的，失常的，错误的，不正确的，不好的，不公正的，反对的，相反的，颠倒的，背面的，里面的",
      },
      {
        rank: 312,
        word: "write",
        pronunciation: [["rahyt"]],
        chinese_meanings: "写，写信，写作，作曲",
      },
      {
        rank: 1390,
        word: "wrap",
        pronunciation: [["rap"]],
        chinese_meanings: "包，缠绕，用…包裹（或包扎、覆盖等），掩护",
      },
      {
        rank: 1574,
        word: "writer",
        pronunciation: [[{ style: "bold", text: "rahy" }, "-ter"]],
        chinese_meanings: "作家，作者，撰写人，写字…的人",
      },
      {
        rank: 2301,
        word: "wrestle",
        pronunciation: [
          [
            { style: "bold", text: "res" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "（与某人）搏斗，（与…）摔跤，斟酌",
      },
      {
        rank: 3445,
        word: "wrestler",
        pronunciation: [
          [
            { style: "bold", text: "res" },
            "-",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "摔跤选手，扭斗者，搏斗者",
      },
      {
        rank: 3627,
        word: "wreck",
        pronunciation: [["rek"]],
        chinese_meanings: "破坏，毁坏，拆除，使遇难",
      },
      {
        rank: 3779,
        word: "wrist",
        pronunciation: [["rist"]],
        chinese_meanings: "腕，手腕，腕关节，（衣袖等的）腕部",
      },
      {
        rank: 4535,
        word: "writing",
        pronunciation: [[{ style: "bold", text: "rahy" }, "-ting"]],
        chinese_meanings: "文字，写作，文章，笔迹",
      },
    ],
  },
  {
    phoneme: "ʒɝ",
    grapheme: "sure",
    graphemeType: "Other",
    words: [
      {
        rank: 997,
        word: "pleasure",
        pronunciation: [[{ style: "bold", text: "plezh" }, "-er"]],
        chinese_meanings: "愉快，娱乐，令人高兴的事",
      },
      {
        rank: 1895,
        word: "treasure",
        pronunciation: [[{ style: "bold", text: "trezh" }, "-er"]],
        chinese_meanings: "金银财宝，宝藏，珍宝，不可多得的人才",
      },
      {
        rank: 3060,
        word: "measure",
        pronunciation: [[{ style: "bold", text: "mezh" }, "-er"]],
        chinese_meanings: "测量，测度，措施，程度，尺寸",
      },
      {
        rank: 3885,
        word: "closure",
        pronunciation: [[{ style: "bold", text: "kloh" }, "-zher"]],
        chinese_meanings: "（永久的）停业，关闭，结束，电闭合，数闭包",
      },
    ],
  },
  {
    phoneme: "tʃɝ",
    grapheme: "ture",
    graphemeType: "Other",
    words: [
      {
        rank: 2323,
        word: "picture",
        pronunciation: [[{ style: "bold", text: "pik" }, "-cher"]],
        chinese_meanings: "照片，画像，图画，图片，影片，情景",
      },
      {
        rank: 795,
        word: "future",
        pronunciation: [[{ style: "bold", text: "fyoo" }, "-cher"]],
        chinese_meanings: "将来的，未来的，语法学将来时的",
      },
      {
        rank: 1325,
        word: "nature",
        pronunciation: [[{ style: "bold", text: "ney" }, "-cher"]],
        chinese_meanings: "自然，天性，天理，类型",
      },
      {
        rank: 1503,
        word: "adventure",
        pronunciation: [["ad-", { style: "bold", text: "ven" }, "-cher"]],
        chinese_meanings: "冒险活动，冒险经历，奇遇",
      },
      {
        rank: 1855,
        word: "creature",
        pronunciation: [[{ style: "bold", text: "kree" }, "-cher"]],
        chinese_meanings: "生物，动物，人，创造物，（他人的）工具",
      },
      {
        rank: 1863,
        word: "culture",
        pronunciation: [[{ style: "bold", text: "kuhl" }, "-cher"]],
        chinese_meanings: "文化，生物学（微生物等的）培养，修养，养殖",
      },
      {
        rank: 2191,
        word: "furniture",
        pronunciation: [[{ style: "bold", text: "fur" }, "-ni-cher"]],
        chinese_meanings: "家具，设备，附属品",
      },
      {
        rank: 2667,
        word: "gesture",
        pronunciation: [[{ style: "bold", text: "jes" }, "-cher"]],
        chinese_meanings:
          "手势，姿势，举止，动作，〔古语〕仪态，计算机光笔指令",
      },
      {
        rank: 2796,
        word: "capture",
        pronunciation: [[{ style: "bold", text: "kap" }, "-cher"]],
        chinese_meanings: "俘获，夺取，夺得，引起（注意、想像、兴趣）",
      },
      {
        rank: 2861,
        word: "signature",
        pronunciation: [
          [
            { style: "bold", text: "sig" },
            "-n",
            { style: "italic", text: "uh" },
            "-cher",
          ],
          ["-ch", { style: "italic", text: "oo" }, "r"],
        ],
        chinese_meanings: "签名，署名，识别标志，鲜明特征，医药的用法说明",
      },
    ],
  },
  {
    phoneme: "ʃən",
    grapheme: "tion",
    graphemeType: "Other",
    words: [
      {
        rank: 561,
        word: "question",
        pronunciation: [
          [
            { style: "bold", text: "kwes" },
            "-ch",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "问题，疑问，怀疑，议题",
      },
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
        rank: 637,
        word: "attention",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "ten" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "注意，注意力，照料，关怀，殷勤",
      },
      {
        rank: 801,
        word: "congratulations",
        chinese_meanings: "祝贺，贺词，祝词",
      },
      {
        rank: 827,
        word: "conversation",
        pronunciation: [
          [
            "kon-ver-",
            { style: "bold", text: "sey" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "交谈，会话，交往，交际，会谈，（人与计算机的）人机对话",
      },
      {
        rank: 836,
        word: "mention",
        pronunciation: [
          [
            { style: "bold", text: "men" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "提到，说起，提名表扬",
      },
      {
        rank: 840,
        word: "situation",
        pronunciation: [
          [
            "sich-oo-",
            { style: "bold", text: "ey" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "（人的）情况，局面，形势，处境，位置，心理学情境",
      },
      {
        rank: 972,
        word: "action",
        pronunciation: [
          [
            { style: "bold", text: "ak" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "行动，活动，功能，作用，手段，法诉讼",
      },
      {
        rank: 1079,
        word: "station",
        pronunciation: [
          [
            { style: "bold", text: "stey" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "车站，所，局，身份，电视台",
      },
      {
        rank: 1095,
        word: "information",
        pronunciation: [
          [
            "in-fer-",
            { style: "bold", text: "mey" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "信息，数据，通知，消息，知识",
      },
    ],
  },
  {
    phoneme: "ʃən",
    grapheme: "cian",
    graphemeType: "Other",
    words: [
      {
        rank: 2455,
        word: "magician",
        pronunciation: [
          [
            "m",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "jish" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "魔术师，巫师，变戏法的人",
      },
      {
        rank: 3321,
        word: "musician",
        pronunciation: [
          [
            "myoo-",
            { style: "bold", text: "zish" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "音乐家",
      },
    ],
  },
  {
    phoneme: "ʃən",
    grapheme: "sion",
    graphemeType: "Other",
    pronunciation: "sh_uhn",
    tips: "sion 遇到辅音",
    words: [
      {
        rank: 2949,
        word: "professional",
        pronunciation: [
          [
            "pr",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "fesh" },
            "-",
            { style: "italic", text: "uh" },
            "-nl",
          ],
        ],
        chinese_meanings: "专业的，专业性的，职业的",
      },
      {
        rank: 1957,
        word: "mission",
        pronunciation: [
          [
            { style: "bold", text: "mish" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "代表团，使命，官方使命，布道所",
      },
      {
        rank: 2176,
        word: "impression",
        pronunciation: [
          [
            "im-",
            { style: "bold", text: "presh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "印象，感觉，影响，效果，盖印，印记",
      },
      {
        rank: 2310,
        word: "permission",
        pronunciation: [
          [
            "per-",
            { style: "bold", text: "mish" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "允许，批准，正式认可，认可",
      },
      {
        rank: 2335,
        word: "passion",
        pronunciation: [
          [
            { style: "bold", text: "pash" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "激情，热情，热心，爱好，热恋，酷爱",
      },
      {
        rank: 2358,
        word: "expression",
        pronunciation: [
          [
            "ik-",
            { style: "bold", text: "spresh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "表现，表示，表达，表情，脸色，态度，腔调，声调，数式，符号，词句，语句，措辞，说法",
      },
      {
        rank: 2656,
        word: "session",
        pronunciation: [
          [
            { style: "bold", text: "sesh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "开会，会议，（法庭的）开庭，会期，学期，（进行某活动连续的）一段时间",
      },
      {
        rank: 2683,
        word: "discussion",
        pronunciation: [
          [
            "dih-",
            { style: "bold", text: "skuhsh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "讨论，谈论，详述，论述",
      },
      {
        rank: 3008,
        word: "commission",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "mish" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "委员会，委员，商佣金，手续费，任命，委任，委任状",
      },
      {
        rank: 3355,
        word: "mansion",
        pronunciation: [
          [
            { style: "bold", text: "man" },
            "-sh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "大厦，宅第，公馆",
      },
    ],
  },
  {
    phoneme: "ʒən",
    grapheme: "sion",
    graphemeType: "Other",
    pronunciation: "zh_uhn",
    tips: "sion 遇到元音",
    words: [
      {
        rank: 342,
        word: "television",
        pronunciation: [
          [
            { style: "bold", text: "tel" },
            "-",
            { style: "italic", text: "uh" },
            "-vizh-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "电视，电视机，电视节目，电视业",
      },
      {
        rank: 901,
        word: "decision",
        pronunciation: [
          [
            "dih-",
            { style: "bold", text: "sizh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "决定，果断，决议，（法院的）判决",
      },
      {
        rank: 1666,
        word: "version",
        pronunciation: [
          [
            { style: "bold", text: "vur" },
            "-zh",
            { style: "italic", text: "uh" },
            "n",
          ],
          ["-sh", { style: "italic", text: "uh" }, "n"],
        ],
        chinese_meanings: "版本，译文，译本，说法，倒转术",
      },
      {
        rank: 2300,
        word: "vision",
        pronunciation: [
          [
            { style: "bold", text: "vizh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "视力，视觉，美景，绝妙的东西，幻影，想像力",
      },
      {
        rank: 2474,
        word: "occasion",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "key" },
            "-zh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "机会，时机，场合，理由，需要",
      },
      {
        rank: 3345,
        word: "conclusion",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "kloo" },
            "-zh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "结论，结局，断定，决定，推论",
      },
      {
        rank: 3842,
        word: "explosion",
        pronunciation: [
          [
            "ik-",
            { style: "bold", text: "sploh" },
            "-zh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings:
          "爆炸，炸裂，爆发，扩张，激增，（感情，尤指愤怒的）突然爆发",
      },
      {
        rank: 3922,
        word: "division",
        pronunciation: [
          [
            "dih-",
            { style: "bold", text: "vizh" },
            "-",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "分开，分隔，数除法，部门，军师",
      },
      {
        rank: 4130,
        word: "occasionally",
        pronunciation: [
          [
            { style: "italic", text: "uh" },
            "-",
            { style: "bold", text: "key" },
            "-zh",
            { style: "italic", text: "uh" },
            "-nl-ee",
          ],
        ],
        chinese_meanings: "偶尔，偶然，有时候",
      },
      {
        rank: 4376,
        word: "confusion",
        pronunciation: [
          [
            "k",
            { style: "italic", text: "uh" },
            "n-",
            { style: "bold", text: "fyoo" },
            "-zh",
            { style: "italic", text: "uh" },
            "n",
          ],
        ],
        chinese_meanings: "混乱，混淆，困惑",
      },
    ],
  },
  {
    phoneme: "əs",
    grapheme: "ous",
    graphemeType: "Other",
    words: [
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
      { rank: 828, word: "obviously", chinese_meanings: "明显地" },
      {
        rank: 1001,
        word: "nervous",
        pronunciation: [
          [
            { style: "bold", text: "nur" },
            "-v",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "焦虑的，紧张不安的，神经质的",
      },
      {
        rank: 1043,
        word: "delicious",
        pronunciation: [
          [
            "dih-",
            { style: "bold", text: "lish" },
            "-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "美味的，可口的，有趣的，，喷香",
      },
      {
        rank: 1109,
        word: "jealous",
        pronunciation: [
          [
            { style: "bold", text: "jel" },
            "-",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "妒忌的，羡慕的，精心守护的，吃醋的",
      },
      {
        rank: 1116,
        word: "dangerous",
        pronunciation: [
          [
            { style: "bold", text: "deyn" },
            "-jer-",
            { style: "italic", text: "uh" },
            "s",
          ],
          [
            { style: "bold", text: "deynj" },
            "-r",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "危险的",
      },
      {
        rank: 1157,
        word: "famous",
        pronunciation: [
          [
            { style: "bold", text: "fey" },
            "-m",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings: "著名的，出名的，〈古〉一流的，极好的",
      },
      {
        rank: 1366,
        word: "fabulous",
        pronunciation: [
          [
            { style: "bold", text: "fab" },
            "-y",
            { style: "italic", text: "uh" },
            "-l",
            { style: "italic", text: "uh" },
            "s",
          ],
        ],
        chinese_meanings:
          "极好的，极妙的，（美貌）惊人的，寓言般的，难以置信的",
      },
    ],
  },
  {
    phoneme: "fəɫ",
    grapheme: "ful",
    graphemeType: "Other",
    words: [
      {
        rank: 346,
        word: "beautiful",
        pronunciation: [
          [
            { style: "bold", text: "byoo" },
            "-t",
            { style: "italic", text: "uh" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "美丽的，美好的，极好的",
      },
      {
        rank: 557,
        word: "wonderful",
        pronunciation: [
          [
            { style: "bold", text: "wuhn" },
            "-der-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "极好的，精彩的，绝妙的，美妙，胜，神妙",
      },
      {
        rank: 921,
        word: "awful",
        pronunciation: [
          [
            { style: "bold", text: "aw" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "糟糕的，可怕的，非常的，极坏的",
      },
      {
        rank: 1000,
        word: "careful",
        pronunciation: [
          [
            { style: "bold", text: "kair" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "仔细的，小心的，周到的，慎，心细",
      },
      {
        rank: 1711,
        word: "powerful",
        pronunciation: [
          [
            { style: "bold", text: "pou" },
            "-er-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "强大的，权力大的，（药）有效地",
      },
      {
        rank: 1769,
        word: "successful",
        pronunciation: [
          [
            "s",
            { style: "italic", text: "uh" },
            "k-",
            { style: "bold", text: "ses" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "成功的，如愿以偿的",
      },
      {
        rank: 2308,
        word: "painful",
        pronunciation: [
          [
            { style: "bold", text: "peyn" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings:
          "痛苦的，（肉体）疼的，费力的，（工作）困难的，讨厌的，使人厌烦的",
      },
      {
        rank: 2321,
        word: "helpful",
        pronunciation: [
          [
            { style: "bold", text: "help" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "给予帮助的，有益的，愿意帮忙的",
      },
      {
        rank: 2631,
        word: "delightful",
        pronunciation: [
          [
            "dih-",
            { style: "bold", text: "lahyt" },
            "-f",
            { style: "italic", text: "uh" },
            "l",
          ],
        ],
        chinese_meanings: "令人非常高兴的，讨人喜欢的，令人愉快的，宜人",
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
    ],
  },
  {
    phoneme: "ŋ",
    grapheme: "ng",
    graphemeType: "Other",
    words: [
      {
        rank: 73,
        word: "thing",
        pronunciation: [["thing"]],
        chinese_meanings: "事件，形势，东西，事物，家伙，事业",
      },
      {
        rank: 98,
        word: "something",
        pronunciation: [[{ style: "bold", text: "suhm" }, "-thing"]],
        chinese_meanings: "某物，某事，重要的事物人，有一定意义的事物",
      },
      {
        rank: 160,
        word: "anything",
        pronunciation: [[{ style: "bold", text: "en" }, "-ee-thing"]],
        chinese_meanings:
          "任何东西，（用于否定句、疑问句中以及if或whether和prevent、ban、avoid等动词后，代替something）任何东西，重要东西，重要事物",
      },
      {
        rank: 176,
        word: "nothing",
        pronunciation: [[{ style: "bold", text: "nuhth" }, "-ing"]],
        chinese_meanings: "没有东西，没有事情，无关紧要的东西，毫无趣味的事",
      },
      {
        rank: 199,
        word: "bring",
        pronunciation: [["bring"]],
        chinese_meanings: "带来，引来，促使，引起，提供，导致",
      },
      {
        rank: 201,
        word: "everything",
        pronunciation: [[{ style: "bold", text: "ev" }, "-ree-thing"]],
        chinese_meanings: "每件事物，最重要的东西，（有关的）一切，万事",
      },
      {
        rank: 208,
        word: "wrong",
        pronunciation: [["rawng"], ["rong"]],
        chinese_meanings:
          "有毛病的，失常的，错误的，不正确的，不好的，不公正的，反对的，相反的，颠倒的，背面的，里面的",
      },
      {
        rank: 248,
        word: "long",
        pronunciation: [["lawng"], ["long"]],
        chinese_meanings: "长的，长时间的，冗长的，过长的，长音的",
      },
      {
        rank: 313,
        word: "morning",
        pronunciation: [[{ style: "bold", text: "mawr" }, "-ning"]],
        chinese_meanings: "早晨，上午，黎明，早期，初期",
      },
      {
        rank: 329,
        word: "hang",
        pronunciation: [["hang"]],
        chinese_meanings: "悬挂，（被）绞死，贴，装饰，使悬而未决",
      },
    ],
  },
  {
    phoneme: "ŋk",
    grapheme: "nk",
    graphemeType: "Other",
    words: [
      {
        rank: 38,
        word: "think",
        pronunciation: [["thingk"]],
        chinese_meanings: "想，思索，以为，看待",
      },
      {
        rank: 119,
        word: "thank",
        pronunciation: [["thangk"]],
        chinese_meanings: "谢谢，感谢，责怪，把…归于",
      },
      {
        rank: 191,
        word: "thanks",
        chinese_meanings: "感谢，谢谢，感谢，谢谢，道谢的话(thank的名词复数)",
      },
      {
        rank: 309,
        word: "drink",
        pronunciation: [["dringk"]],
        chinese_meanings: "喝（酒），饮，喝酒，（尤指）酗酒",
      },
      {
        rank: 670,
        word: "monkey",
        pronunciation: [[{ style: "bold", text: "muhng" }, "-kee"]],
        chinese_meanings: "猴，猿，淘气鬼，小淘气",
      },
      {
        rank: 1015,
        word: "stink",
        pronunciation: [["stingk"]],
        chinese_meanings: "散发出恶臭，招人厌恶，糟透",
      },
      {
        rank: 1101,
        word: "Thanksgiving",
        pronunciation: [["thangks-", { style: "bold", text: "giv" }, "-ing"]],
        chinese_meanings: "（常小写）（对神的）感谢，感恩祈祷，感恩节",
      },
      {
        rank: 1150,
        word: "bank",
        pronunciation: [["bangk"]],
        chinese_meanings: "银行，（条形的）堆，（河的）岸，库存",
      },
      {
        rank: 1431,
        word: "blanket",
        pronunciation: [[{ style: "bold", text: "blang" }, "-kit"]],
        chinese_meanings: "毛毯，毯子，毯状物，厚的覆盖层",
      },
      {
        rank: 1738,
        word: "frankly",
        pronunciation: [[{ style: "bold", text: "frangk" }, "-lee"]],
        chinese_meanings: "直率地（说），坦诚地，真诚地，坦白地，平心而论",
      },
    ],
  },
];
