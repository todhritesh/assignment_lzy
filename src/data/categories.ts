export type CategoryItem = {
    label: string;
};

export type Categories = {
    [key: string]: CategoryItem[];
};

export const Categories: Categories = {
    "DIRECT BY FARM": [
        { label: "ANNAJ / GRAIN" },
        { label: "EGGS" },
        { label: "FRUITS" },
        { label: "MILK" },
        { label: "VEGETABLES" }
    ],
    "SELF MADE": [
        { label: "ARTIFICIAL JEWELLERY" },
        { label: "CLOTH / STITCHING" },
        { label: "HOME DECOR" },
        { label: "HOME MADE" },
        { label: "PLANT AND POT" }
    ],
    "RENTAL ITEMS": [
        { label: "AC" },
        { label: "COMPUTER / LAPTOP" },
        { label: "CUSTOM / CLOTH" },
        { label: "FRIDGE" },
        { label: "FURNITURE" }
    ],
    "REAL ESTATE": [
        { label: "BUY" },
        { label: "RENT" }
    ]
};
