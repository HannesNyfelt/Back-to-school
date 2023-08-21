var layers = 1

function triangle(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < layers; j++) {
            document.write('#')
        }
        document.write('<br></br>')
        layers++
    }
}

triangle(5)