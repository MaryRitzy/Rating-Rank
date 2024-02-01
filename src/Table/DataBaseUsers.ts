export type PropsData = {
    id: number
    number: number
    name: string
    rating:string
    lots: number
    age: string[]
    level: string[]
    Keywords: string[]
    Language_type:string
    wordsInQuestions: number
    numberOfQuestions: number
    video: boolean,
    audio: boolean,
    photo: boolean,
    price: number
    keywordSearch?: string  
}

const DataBaseUsers: PropsData[] = [
    {
        id: 1,
        number: 1,
        name: 'Barbara Williams',
        rating: './image/Apprentice_gr_1.svg',
        lots: 5,
        age: ['12-35'], 
        level: ['A1-A2'],
        Language_type: 'Special purposes',
        Keywords: ['ринок', 'фрукти', 'овочі', 'купівля','продаж'],
        wordsInQuestions: 162,
        numberOfQuestions: 1453,
        video: true,
        audio: false,
        photo: true,
        price: 10.65

    },
   
    {
        id: 2,
        number: 2,
        name: 'Simon Galvan',
        rating: './image/Captain.svg',
        lots: 8,
        age: ['18-60'], 
        level: ['A2-B1'],
        Language_type: 'Business',
        Keywords: ['ферма', 'фрукти', 'овочі', 'тварини','продаж'],
        wordsInQuestions: 229,
        numberOfQuestions: 674,
        video: false,
        audio: true,
        photo: false,
        price: 25.01

    },
    {
        id: 3,
        number: 3,
        name: 'Kameron Watson',
        rating: './image/General.svg',
        lots: 10,
        age: ['5-45'], 
        level: ['B2-C1'],
        Language_type: 'General',
        Keywords: ['біржа', 'ягоди', 'овочі', 'тварини','купівля'],
        wordsInQuestions: 342,
        numberOfQuestions: 174,
        video: true,
        audio: true,
        photo: false,
        price: 15.01

    }, 
    {
        id: 4,
        number: 4,
        name: 'Quincy Fischer',
        rating: './image/Private.svg',
        lots: 6,
        age: ['0-12'], 
        level: ['A1-A2'],
        Language_type: 'For Kids',
        Keywords: ['oвочі', 'ягоди', 'фрукти', 'тварини','ліс'],
        wordsInQuestions: 42,
        numberOfQuestions: 24,
        video: true,
        audio: true,
        photo: true,
        price: 19.00

    }
    
]


export const getPropsDataObject = (array:PropsData[]) => array.reduce((object, PropsData) => ({
    ...object,
    [PropsData.id]: PropsData,
}),{})



export default DataBaseUsers; 
