const data = [
    {
        id: 1,
        tittle: "Play Station 5",
        description: "Consola",
        price: 4000,
        picture:"/Assets/Items/Ps5.png"

    },
    {
        id: 2,
        tittle: "Xbox series",
        description: "Consola",
        price: 4500,
        picture:"/Assets/Items/Xbox.png"

    },
    {
        id: 3,
        tittle: "Nintendo Switch",
        description: "Consola",
        price: 800,
        picture:"/Assets/Items/NintendoSwitch.png"

    },
    {
        id: 4,
        tittle: "Mouse",
        description: "Periferico",
        price: 4000,
        picture:"/Assets/Items/Mouse.png"

    },
    {
        id: 5,
        tittle: "Joystick",
        description: "Periferico",
        price: 200,
        picture:"/Assets/Items/Joystick.png"

    }
    ,
    {
        id: 6,
        tittle: "RedDead Redemption",
        description: "Juego",
        price: 50,
        picture:"/Assets/Items/Game1.JPG"

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

        },2000)
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

        },2000)
    })
}
 