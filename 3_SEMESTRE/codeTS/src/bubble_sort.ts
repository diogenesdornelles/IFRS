


let my_array_test_bubble = [10, 300, 0, 100, 60, -10, 100, 40]


// se array prossegue 
if (my_array_test_bubble instanceof Array) {
    // define count como tamanho do array
    let count: number = my_array_test_bubble.length
    // enquanto count não for falsy
    while (count) {
        // define count = 0
        count = 0
        for (let i = 0; i < my_array_test_bubble.length - 1; i++) {
            // se a posição for menor que a seguinte, troca as posições ordenando
            if (my_array_test_bubble[i] > my_array_test_bubble[i + 1]) {
                let _ = my_array_test_bubble[i + 1]
                my_array_test_bubble[i + 1] = my_array_test_bubble[i]
                my_array_test_bubble[i] = _
                // incrementa count para ser truthy
                count++
            }
        }
    }
}


console.log(my_array_test_bubble)
