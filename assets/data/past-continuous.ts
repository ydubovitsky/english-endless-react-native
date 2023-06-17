import { TenseInterface } from "../../app/types";
const template = 'info about time';

export const PAST_CONTINUOUS: TenseInterface = {
  name: "Past Continuous",
  strategies:  [
    [0, 0, 0],
    [1, 0, 1],
    [2, 1, 2],
    [3, 1, 2],
    [4, 1, 4],
  ],
  pronounts: [
    [
      { "I": "Я" },
    ],
    [
      { "He": "Он" },
      { "Tom": "Том" },
      { "James": "Джеймс" },
      { "Samwise Gamgee": "Сэмуайз Гэмджи" },
      { "Donnie Darko": "Донни Дарко" },
      { "Rocky Balboa": "Рокки Бальбоа" },
      { "Groot": "Грут" },
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
    [
      { "They": "Они" },
      { "Athletes": "Спортсмены" },
      { "Students": "Студенты" },
      { "Teachers": "Учителя" },
    ],
    [{ "We": "Мы" }],
    [{ "You": "Ты" }],
  ],
  auxiliaries: [
    [{ "was": "" }, { "was not": "не" }],
    [{ "were": "" }, { "were not": "не" }],
  ],
  verbs: [
    [
      { "reading last Monday ": "читал в прошлый понедельник" },
      { "reading the whole evening": "читал весь вечер" },
      { "cooking the whole evening": "готовил весь вечер" },
      { "dancing the whole evening": "танцевал весь вечер" },
      { "dancing all night long": "танцевал всю ночь" },
      { "dancing the whole morning": "танцевал все утро" },
      { "reading all day long": "читал весь день" },
      { "taking a shower": "принимал душ" },
      { "still dancing at midnight": "танцевал все еще в полночь" },
      { "cleaning the house when the phone rang": "убирал дом в то время как зазвонил телефон" },
      { "cooking dinner when Jam suddenly cut his finger": "готовил обед, когда Джем внезапно порезал палец" },
      { "eating my soup when Matthey came home": "ел суп, когда Метью пришел домой" },
      { "doing her makeup while she was talking over the telephone": "делал макияж во время разговора по телефону" },
      { "drinking a cup of coffee while they were sitting at that restaurant": "пил кофе, когда сидели в том ресторане" },
      { "hoping to meet her at the bookstore but she didn’t come": "надеялся встретить её в книжном магазине, но она не пришла" },
      { "thinking of cooking a pie but we wanted some pizza.": "думал приготовить пирог, но мы хотели пиццы." },
    ],
    [
      { "working all night long": "работал всю ночь" },
      { "reading all night long": "читал всю ночь" },
    ],
    [
      { "working all night long": "работали всю ночь" },
      { "reading all night long": "читали всю ночь" },
    ],
    [
      { "working all night long": "работал всю ночь" },
      { "reading all night long": "читал всю ночь" },
    ],
  ],
  html: `${template}`
};
