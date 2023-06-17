import { TenseInterface } from "../../app/types";
const template = 'info about time';

export const PRESENT_PERFECT: TenseInterface = {
  name: "Present Perfect",
  strategies: [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [2, 0, 1],
    [2, 1, 1],
  ],
  pronounts: [
    [{ I: "Я" }, { You: "Ты" }],
    [
      { He: "Он" },
      { Tom: "Том" },
      { James: "Джеймс" },
      { "Samwise Gamgee": "Сэмуайз Гэмджи" },
      { "Donnie Darko": "Донни Дарко" },
      { "Rocky Balboa": "Рокки Бальбоа" },
      { Groot: "Грут" },
      { "Peter Venkman": "Питер Венкман" },
      { "Johnny Depp": "Джонни Депп" },
      { "Leonardo DiCaprio": "Леонардо Ди Каприо" },
      { "Will Smith": "Уилл Смит" },
      { "Jim carrey": "Джим Керри" },
      { "Brad Pitt": "Брэд Питт" },
      { "Keanu Reeves": "Киану Ривз" },
      { "Tom Hardy": "Том Харди" },
      { "Tom Hanks": "Том Хэнкс" },
      { "Matthew David McConaughey": "Мэттью Дэвид МакКонахи" },
      { "Anthony Hopkins": "Энтони Хопкинс" },
      { "Tom Cruise": "Том Круз" },
      { "Walter Bruce Willis": "Уо́лтер Брюс Уи́ллис" },
    ],
    [{ They: "Они" }, { We: "Мы" }],
  ],
  auxiliaries: [
    [{ have: "" }],
    [{ "have not": "не" }],
    [{ has: "" }],
    [{ "has not": "не" }],
  ],
  verbs: [
    [{ "worked once": "поработал однажды" }],
    [{ "worked once": "поработали однажды" }],
  ],
  html: `${template}`,
};
