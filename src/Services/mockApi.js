const data = [
    {
        id: 1,
        tittle: "Play Station 5",
        description: "Consola",
        price: 4000,
        picture:"/Assets/Items/Ps5.png",
        stock: 6


    },
    {
        id: 2,
        tittle: "Xbox series",
        description: "Consola",
        price: 4500,
        picture:"/Assets/Items/Xbox.png",
        stock: 4

    },
    {
        id: 3,
        tittle: "Nintendo Switch",
        description: "Consola",
        price: 800,
        picture:"/Assets/Items/NintendoSwitch.png",
        stock: 10

    },
    {
        id: 4,
        tittle: "Mouse",
        description: "Periferico",
        price: 4000,
        picture:"/Assets/Items/Mouse.png",
        stock: 8

    },
    {
        id: 5,
        tittle: "Joystick",
        description: "Periferico",
        price: 200,
        picture:"/Assets/Items/Joystick.png",
        stock: 10

    }
    ,
    {
        id: 6,
        tittle: "RedDead Redemption",
        description: "Juego",
        price: 50,
        picture:"/Assets/Items/Game1.JPG",
        stock: 7

    }
]

export default function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}

export function getSingleData(idItem){
    return new Promise((res,reject)=>{
        setTimeout(()=>{
            let itemFind = data.find((item) =>{
                return item.id === idItem;

            })
            if(itemFind) res(itemFind);
            else reject(new Error("No se encontro el item."))  

        },1000)
    })
}

export function getCatData(CatItem){
    return new Promise((res,reject)=>{
        setTimeout(()=>{
            let itemFind = data.filter((item) =>{
                return item.description === CatItem;

            })
            if(itemFind) res(itemFind);
            else reject(new Error("No se encontro la categoria."))  

        },1000)
    })
}
 