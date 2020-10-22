/*
 * @Author: your name
 * @Date: 2020-10-21 21:10:25
 * @LastEditTime: 2020-10-22 22:54:47
 * @LastEditors: Please set LastEditors
 * @Description: 接口
 * @FilePath: /node/typescriptdemo/typescript/interface.ts
 */
//通用的类型集合 与【类型别名】可以定义基础类型
//接口类型编译并不会成js代码，只是在ts做校验的功能
interface Person {
  //readonly address: string;//只读属性
  name: string;
  age?: number | string; //age可有可无
  [propName: string]: any; //不确定的属性
  say(): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

let person = {
  name: "oouyang",
  sex: "man",
  say() {
    return "";
  },
};
//非强校验
getPersonName(person);
setPersonName(person, "xiaogao");

//强校验
// getPersonName({
//   name: "oouyang",
//   sex: "man",
// });

//类运用接口
class IUser implements Person {
  name = "oouyang";
  say() {
    return "";
  }
}

//接口继承--拥有子类所有方法
interface teacher extends Person {}
