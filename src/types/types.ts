export interface Results {
    results: RandomUser[]
}

export interface DataForUI {
    photo: string
    label: string
    value: string
    icon: string
    activeIcon: string
    key: string
    active?: boolean
}

export interface RandomUser {
    email: string
    cell: string
    phone: string
    gender: string
    nat: string
    picture: Picture
    location: Location
    login: Login
    dob: DOB
    registered: Registered
    id: ID
    name: Name
}

interface Picture {
    large: string
    medium: string
    thumbnail: string
}

interface ID {
    name: string
    value: string
}

interface Registered {
    date: string
    age: number
}

interface DOB {
    date: string
    age: number
}

interface Login {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

interface Street {
    number: number
    name: string
}

interface Timezone {
    offset: string
    description: string
}

interface Coordinates {
    latitude: string
    longitude: string
}

interface Location {
    street: Street
    city: string
    state: string
    country: string
    postcode: string
    coordinates: Coordinates
    timezone: Timezone
}

interface Name {
    title: string
    first: string
    last: string
}