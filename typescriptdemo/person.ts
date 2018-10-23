enum Choose {
    Wife=1,
    Mother=2
}

function question(choose:Choose):void{
    console.log("你的选择是"+choose);
}

class Person{
    name:string;//姓名
    age:number;//年龄
    labels:Array<string>;//标签组
    wifes:string[];
    contat:[string,number];//元组 联系[地址，号码]
    other:any;//备注
    saveMother:boolean=true;
    constructor(){

    };
    answer(): Choose{
        if(this.saveMother===false){
            return Choose.Mother
        }else{
            return Choose.Wife
        }
    }
    hello():void{
        console.log('my name is '+this.name)
    }
    empty(){

    }
    down(): never{
while(true){

}
    }

}