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
]

export default function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}
 