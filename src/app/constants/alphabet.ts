import type { Phonics } from "./types";

export const ALPHABET_LIST: Phonics[] = [
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
];
