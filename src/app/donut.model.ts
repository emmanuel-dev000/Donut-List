export interface Donut {
    id: string,
    name: string,
    imageUrl: string,
}

export const DummyDonuts: Donut[] = [
    {
        id: "donut01",
        name: "Glazed",
        imageUrl: "https://github.com/aaronfrost/DonutsApi/blob/main/static/images/glazed-chocolate-cake.jpg?raw=true"
    },
    {
        id: "donut02",
        name: "Cinnamon",
        imageUrl: "https://github.com/aaronfrost/DonutsApi/blob/main/static/images/cinnamon-apple-filled.jpg?raw=true"
    },
    {
        id: "donut03",
        name: "Choco",
        imageUrl: "https://github.com/aaronfrost/DonutsApi/blob/main/static/images/chocolate-iced-glazed.jpg?raw=true"
    },
    {
        id: "donut04",
        name: "Cruller",
        imageUrl: "https://github.com/aaronfrost/DonutsApi/blob/main/static/images/glazed-cruller.jpg?raw=true"
    },
];