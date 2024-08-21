export const color = [
    'White',
    'Black',
    'Red',
    'Marun',
    'Pink',
    'Green',
    'Yellow',
    'Beige',
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {
                value: 'white',
                label: 'White',
            },
            {
                value: 'beige',
                label: 'Beige',
            },
            {
                value: 'blue',
                label: 'Blue',
            },
            {
                value: 'brown',
                label: 'Brown',
            },
            {
                value: 'green',
                label: 'Green',
            },
            {
                value: 'purple',
                label: 'Purple',
            },
            {
                value: 'yellow',
                label: 'Yellow',
            },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' },
        ],
    },
]

export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '159-399', label: '$159 to $399' },
            { value: '399-999', label: '$399 to $999' },
            { value: '999-1999', label: '$999 to $1999' },
            { value: '1999-2999', label: '$1999 to $2999' },
            { value: '3999-4999', label: '$3999 to $4999' },
        ],
    },
    {
        id: 'stock',
        name: 'Availibility',
        options: [
            { value: 'in_stock', label: 'In Stock' },
            { value: 'out_of_stock', label: 'Out Of Stock' },
        ],
    },
]

export const sortOptions = [
    { name: 'Price: Low to High', query: 'price_low', current: false },
    { name: 'Price: High to Low', query: 'price_high', current: false },
]
