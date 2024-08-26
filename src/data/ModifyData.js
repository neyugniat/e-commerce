const fs = require('fs')

// Read the original file
const filePath = './page1.js'
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err)
        return
    }

    // Remove the 'export const mens_kurta = ' line and extract the array
    const cleanedData = data.replace(/export const dressPage1 = /, '').trim()

    // Remove any trailing semicolon if present
    const cleanedDataWithoutSemicolon = cleanedData.replace(/;$/, '').trim()

    // Parse the file as a JavaScript array
    let products
    try {
        products = eval(`(${cleanedDataWithoutSemicolon})`)
    } catch (err) {
        console.error('Error parsing the data:', err)
        return
    }

    // Add unique IDs to each product
    const updatedProducts = products.map((product, index) => ({
        id: index + 1,
        ...product,
    }))

    // Convert back to string
    const updatedData = `const dressPage1 = ${JSON.stringify(
        updatedProducts,
        null,
        4
    )};\n\nexport default dressPage1;`

    // Write the updated data back to the file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err)
            return
        }
        console.log('IDs added successfully!')
    })
})
