import { TenseInterface } from "../../app/types";
const template = 'info about time';

export const FUTURE_PERFECT: TenseInterface = {
  name: "Future Perfect",
  strategies: [
    [0, 0, 0],
    [1, 0, 1],
    [2, 0, 2],
    [3, 0, 3],
    [4, 0, 4],
    [0, 1, 0],
    [1, 1, 1],
    [2, 1, 2],
    [3, 1, 3],
    [4, 1, 4],
  ],
  pronounts: [
    [{ I: "Я" }],
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
    [{ They: "Они" }],
    [{ We: "Мы" }],
    [{ You: "Ты" }],
  ],
  auxiliaries: [[{ "will have": "" }], [{ "will not have": "не" }]],
  verbs: [
    [
      { "opened the window by 8 p.m. ": "открою окно к 8 часам" },
      { "opened the bottle by 6 p.m. ": "открою бутылку к 6 часам вечера" },
    ],
    [
      { "opened the window by 8 p.m. ": "откроет окно к 8 часам" },
      { "opened the bottle by 6 p.m. ": "откроет бутылку к 6 часам вечера" },
    ],
    [
      { "opened the window by 8 p.m. ": "откроют окно к 8 часам" },
      { "opened the bottle by 6 p.m. ": "откроют бутылку к 6 часам вечера" },
    ],
    [
      { "opened the window by 8 p.m. ": "откроем окно к 8 часам" },
      { "opened the bottle by 6 p.m. ": "откроем бутылку к 6 часам вечера" },
    ],
    [
      { "opened the window by 8 p.m. ": "откроешь окно к 8 часам" },
      { "opened the bottle by 6 p.m. ": "откроешь бутылку к 6 часам вечера" },
    ],
  ],
  html: `${template}`,
};
