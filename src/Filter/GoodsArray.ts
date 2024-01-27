export type Goods = {
    id: number
    article: number
    title: string
    language:string
    Keywords: string[]
    Language_type:string
    category: string
    level: string[]
    age: number 
    media: string[]
    price: number
    image: string
    description: string
    keywordSearch?: string  
}

const GoodsArray: Goods[] = [
    {
        id: 1,
        article: 753619,
        title: 'Презентації',
        language: 'EN-UA',
        Keywords: ['презентації', 'овочі', 'фрукти'],
        Language_type: 'Business',
        category: 'Загальний словник',
        level: ['A1', 'A2'],
        age: 12, 
        media: ['Відео', 'Аудіо', 'Фото'],
        price: 55,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 2,
        article: 753620,
        title: 'Фрукти',
        language: 'EN-UA',
        Keywords: ['фрукти', 'тварини'],
        Language_type: 'For Kids',
        category: 'Словник ігор',
        level: ['A1','A2'],
        age: 5, 
        media: ['Відео'],
        price: 56,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 3,
        article: 753621,
        title: 'Овочі',
        language: 'EN-UA',
        Keywords: ['овочі', 'ліс','сад'],
        Language_type: 'Special Purpose',
        category: 'Ігри',
        level: ['A1', 'A2'],
        age: 6, 
        media: ['Фото'],
        price: 56,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 4,
        article: 753622,
        title: 'Презентації',
        language: 'EN-UA',
        Keywords:  ['презентації', 'ферма', 'тварини'],
        Language_type: 'General',
        category: 'Загальний словник',
        level: ['A1', 'A2', 'B1'],
        age: 7, 
        media: ['Аудіо'],
        price: 57,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 5,
        article: 753629,
        title: 'Фрукти',
        language: 'EN-UA',
        Keywords: ['фрукти', 'ферма', 'тварини'],
        Language_type: 'Legal',
        category: 'Словник ігор',
        level: ['A1', 'A2', 'B1'],
        age: 12, 
        media: ['Аудіо'],
        price: 58,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 6,
        article: 753630,
        title: 'Овочі',
        language: 'EN-UA',
        Keywords: ['овочі', 'фрукти'],
        Language_type: 'Teenager',
        category: 'Ігри',
        level: ["C1", "C2"],
        age: 12, 
        media: ['Аудіо'],
        price: 68,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
    {
        id: 7,
        article: 753633,
        title: 'Презентації',
        language: 'EN-JP',
        Keywords: ['презентації', 'овочі', 'фрукти'],
        Language_type: 'Medical',
        category: 'Загальний словник',
        level: ['A1', 'B2'],
        age: 12, 
        media: ['Аудіо'],
        price: 60,
        image:'./image/red_pitahaya.jpeg',
        description: 'Ці запитання та завдання допоможуть учням зрозуміти як правильно…',
    },
   

    
]


export const getGoodssObject = (array:Goods[]) => array.reduce((object, goods) => ({
    ...object,
    [goods.id]: goods,
}),{})



export default GoodsArray; 
