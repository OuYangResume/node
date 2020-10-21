/*
 * @Author: your name
 * @Date: 2020-10-21 20:33:24
 * @LastEditTime: 2020-10-21 21:10:28
 * @LastEditors: Please set LastEditors
 * @Description: 数组和元组
 * @FilePath: /node/typescriptdemo/typescript/List.ts
 */
//数组
const arr: (string | number)[] = ["name", "age", 17];
const strArr: string[] = ["name", "age"];
const nullALl: (undefined | null | number)[] = [
  undefined,
  undefined,
  14,
  15,
  null,
];

const objectArr: { name: string; age: number | string }[] = [
  {
    name: "oouyang",
    age: 15,
  },
  {
    name: "xiaogao",
    age: "18",
  },
];

// type alias 别名
type User = {
  name: string;
  age: number | string;
};
const objectArr1: User[] = [
  {
    name: "oouyang",
    age: 15,
  },
  {
    name: "xiaogao",
    age: "18",
  },
];

// 元组  tuple 长度和类型都固定
const userInfo: [string, string, number] = ["name", "age", 18];

const userList: [string, string, number][] = [
  ["oouyang", "aa", 16],
  ["xiaogao", "bb", 18],
  ["xiaoxi", "cc", 3],
];
