# Phonics

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO List

1. [X] 整理自然拼读 MP3
2. [X] 从自然拼读提取音标
3. [ ] 发音
4. [ ] 加音标
5. [ ] KK音标 https://zh.wikipedia.org/wiki/KK%E9%9F%B3%E6%A8%99
6. [ ] IPA和ARPAbet https://github.com/chdzq/ARPAbetAndIPAConvertor
7. [ ] TTS https://github.com/jankapunkt/easy-speech
8. [ ] 连字符 https://github.com/cuzzo/Hyphenator
9. [ ] 连字符 https://github.com/ytiurin/hyphen
10. [ ] 发音重拼 https://github.com/Attacktive/ipa-to-pronunciation-respelling


### TTS online

* https://study.zwjjiaozhu.top/jz-translator/advance/pronunciation-interface.html
* https://dict.youdao.com/dictvoice?le={lang}&audio={text}
* https://fanyi.sogou.com/reventondc/synthesis?text={text}&speed=1&lang={lang}&from=translateweb&speaker=6
* https://fanyi.baidu.com/gettts?lan={lang}&text={text}&spd=3&source=wise
* https://fanyi.baidu.com/gettts?lan=en&text=have&spd=3&source=web


`"AA1 R|ER0".replace(/\d/g, "").split("|")[0].split(" ")`

```json
[
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "AO",
    ipa: "ɔ",
    ex: "mauve",
    exarpabet: "M AO1 V",
    exhtml: "m<em>au</em>ve",
    colorbase: "#E0B0FF",
    colorbright1: "#F3DFFF",
    colorbright2: "#E8C4FF",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "AA",
    ipa: "ɑ",
    ex: "coffee",
    exarpabet: "K AA1 F IY0",
    exhtml: "c<em>o</em>ffee",
    colorbase: "#A56945",
    colorbright1: "#F4DCCE",
    colorbright2: "#A56945",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "IY",
    ipa: "i",
    ex: "green",
    exarpabet: "G R IY1 N",
    exhtml: "gr<em>ee</em>n",
    colorbase: "#008000",
    colorbright1: "#7ED47E",
    colorbright2: "#30C030",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "UW",
    ipa: "u",
    ex: "blue",
    exarpabet: "B L UW1",
    exhtml: "bl<em>ue</em>",
    colorbase: "#0000FF",
    colorbright1: "#9A9ADF",
    colorbright2: "#4040FF",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "EH",
    ipa: "ɛ",
    ex: "red",
    exarpabet: "R EH1 D",
    exhtml: "r<em>e</em>d",
    colorbase: "#FF0000",
    colorbright1: "#FF9797",
    colorbright2: "#FF4040",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "IH",
    ipa: "ɪ",
    ex: "pink",
    exarpabet: "P IH1 NG K",
    exhtml: "p<em>i</em>nk",
    colorbase: "#FFC0CB",
    colorbright1: "#FFE5EA",
    colorbright2: "#FFD0D8",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "UH",
    ipa: "ʊ",
    ex: "wood",
    exarpabet: "W UH1 D",
    exhtml: "w<em>oo</em>d",
    colorbase: "#A8531C",
    colorbright1: "#D39973",
    colorbright2: "#D3834F",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "AH",
    ipa: "ə",
    ex: "dust",
    exarpabet: "D AH1 S T",
    exhtml: "d<em>u</em>st",
    colorbase: "#E5CCC9",
    colorbright1: "#F2DEDC",
    colorbright2: "#DFCBD4",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "AX",
    ipa: "ə",
    ex: "dust",
    exarpabet: "D AH1 S T",
    exhtml: "d<em>u</em>st",
    colorbase: "#E5CCC9",
    colorbright1: "#F2DEDC",
    colorbright2: "#DFCBD4",
  },
  {
    categ: "vowel",
    subcateg: "monophthong",
    arpabet: "AE",
    ipa: "æ",
    ex: "sand",
    exarpabet: "S AE1 N D",
    exhtml: "s<em>a</em>nd",
    colorbase: "#C2B280",
    colorbright1: "#EAE3CA",
    colorbright2: "#E1D3A7",
  },
  {
    categ: "vowel",
    subcateg: "diphthong",
    arpabet: "EY",
    ipa: "eɪ",
    ex: "jade",
    exarpabet: "JH EY1 D",
    exhtml: "j<em>a</em>de",
    colorbase: "#00A86B",
    colorbright1: "#B2F5DD",
    colorbright2: "#35D39C",
  },
  {
    categ: "vowel",
    subcateg: "diphthong",
    arpabet: "AY",
    ipa: "aɪ",
    ex: "lime",
    exarpabet: "L AY1 M",
    exhtml: "l<em>i</em>me",
    colorbase: "#00FF00",
    colorbright1: "#B9FFB9",
    colorbright2: "#40FF40",
  },
  {
    categ: "vowel",
    subcateg: "diphthong",
    arpabet: "OW",
    ipa: "oʊ",
    ex: "gold",
    exarpabet: "G OW1 L D",
    exhtml: "g<em>o</em>ld",
    colorbase: "#FFD700",
    colorbright1: "#FFE140",
    colorbright2: "#FFC340",
  },
  {
    categ: "vowel",
    subcateg: "diphthong",
    arpabet: "AW",
    ipa: "aʊ",
    ex: "brown",
    exarpabet: "B R AW1 N",
    exhtml: "br<em>o</em>wn",
    colorbase: "#572E02",
    colorbright1: "#AB7F4F",
    colorbright2: "#AB6F2E",
  },
  {
    categ: "vowel",
    subcateg: "diphthong",
    arpabet: "OY",
    ipa: "ɔɪ",
    ex: "turquoise",
    exarpabet: "T ER1 K W OY0 Z",
    exhtml: "turqu<em>oi</em>se",
    colorbase: "#40E0D0",
    colorbright1: "#CBFBF6",
    colorbright2: "#6FF0E2",
  },
  {
    categ: "vowel",
    subcateg: "R-colored vowel",
    arpabet: "ER",
    ipa: "ɝ",
    ex: "purple",
    exarpabet: "P ER1 P AH0 L",
    exhtml: "p<em>ur</em>ple",
    colorbase: "#800080",
    colorbright1: "#D47ED4",
    colorbright2: "#C030C0",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "P",
    ipa: "p",
    ex: "pig",
    exarpabet: "P IH1 G",
    exhtml: "<em>p</em>ig",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "B",
    ipa: "b",
    ex: "bear",
    exarpabet: "B EH1 R",
    exhtml: "<em>b</em>ear",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "T",
    ipa: "t",
    ex: "turtle",
    exarpabet: "T ER1 T AH0 L",
    exhtml: "<em>t</em>urtle",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "D",
    ipa: "d",
    ex: "dog",
    exarpabet: "D AO1 G",
    exhtml: "<em>d</em>og",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "K",
    ipa: "k",
    ex: "cat",
    exarpabet: "K AE1 T",
    exhtml: "<em>c</em>at",
  },
  {
    categ: "consonant",
    subcateg: "stop",
    arpabet: "G",
    ipa: "ɡ",
    ex: "goat",
    exarpabet: "G OW1 T",
    exhtml: "<em>g</em>oat",
  },
  {
    categ: "consonant",
    subcateg: "affricate",
    arpabet: "CH",
    ipa: "tʃ",
    ex: "chicken",
    exarpabet: "CH IH1 K AH0 N",
    exhtml: "<em>ch</em>icken",
  },
  {
    categ: "consonant",
    subcateg: "affricate",
    arpabet: "JH",
    ipa: "dʒ",
    ex: "giraffe",
    exarpabet: "JH ER0 AE1 F",
    exhtml: "<em>g</em>iraffe",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "F",
    ipa: "f",
    ex: "frog",
    exarpabet: "F R AA1 G",
    exhtml: "<em>f</em>rog",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "V",
    ipa: "v",
    ex: "beaver",
    exarpabet: "B IY1 V ER0",
    exhtml: "bea<em>v</em>er",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "TH",
    ipa: "θ",
    ex: "panther",
    exarpabet: "P AE1 N TH ER0",
    exhtml: "pan<em>th</em>er",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "DH",
    ipa: "ð",
    ex: "feather",
    exarpabet: "F EH1 DH ER0",
    exhtml: "fea<em>th</em>er",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "S",
    ipa: "s",
    ex: "spider",
    exarpabet: "S P AY1 D ER0",
    exhtml: "<em>s</em>pider",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "Z",
    ipa: "z",
    ex: "zebra",
    exarpabet: "Z IY1 B R AH0",
    exhtml: "<em>z</em>ebra",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "SH",
    ipa: "ʃ",
    ex: "sheep",
    exarpabet: "SH IY1 P",
    exhtml: "<em>sh</em>eep",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "ZH",
    ipa: "ʒ",
    ex: "television",
    exarpabet: "T EH1 L AH0 V IH2 ZH AH0 N",
    exhtml: "televi<em>si</em>on",
  },
  {
    categ: "consonant",
    subcateg: "fricative",
    arpabet: "HH",
    ipa: "h",
    ex: "horse",
    exarpabet: "HH AO1 R S",
    exhtml: "<em>h</em>orse",
  },
  {
    categ: "consonant",
    subcateg: "nasal",
    arpabet: "M",
    ipa: "m",
    ex: "mouse",
    exarpabet: "M AW1 S",
    exhtml: "<em>m</em>ouse",
  },
  {
    categ: "consonant",
    subcateg: "nasal",
    arpabet: "N",
    ipa: "n",
    ex: "dinosaur",
    exarpabet: "D AY1 N AH0 S AO2 R",
    exhtml: "di<em>n</em>osaur",
  },
  {
    categ: "consonant",
    subcateg: "nasal",
    arpabet: "NG",
    ipa: "ŋ",
    ex: "penguin",
    exarpabet: "P EH1 NG G W AH0 N",
    exhtml: "pe<em>n</em>guin",
  },
  {
    categ: "consonant",
    subcateg: "liquid",
    arpabet: "L",
    ipa: "ɫ",
    ex: "lion",
    exarpabet: "L AY1 AH0 N",
    exhtml: "<em>l</em>ion",
  },
  {
    categ: "consonant",
    subcateg: "liquid",
    arpabet: "R",
    ipa: "ɹ",
    ex: "rabbit",
    exarpabet: "R AE1 B IH2 T",
    exhtml: "<em>r</em>abbit",
  },
  {
    categ: "consonant",
    subcateg: "semivowel",
    arpabet: "Y",
    ipa: "j",
    ex: "yak",
    exarpabet: "Y AE1 K",
    exhtml: "<em>y</em>ak",
  },
  {
    categ: "consonant",
    subcateg: "semivowel",
    arpabet: "W",
    ipa: "w",
    ex: "wolf",
    exarpabet: "W UH1 L F",
    exhtml: "<em>w</em>olf",
  },
];
```
