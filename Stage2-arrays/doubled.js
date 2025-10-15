// ! This function returns an array with every element doubled

let array = [1,2,3,4,5,6,7,8,9,10];

function double_array (array) {
    let new_array =[]; //! We have to initialiwe it
    for (let i = 0; i < array.length; i++){
        new_array[i] = array[i] * 2;

    }

    console.log(`The doubled array:`);
    for (let i = 0; i < array.length; i++){
        console.log(new_array[i]);

    }

    
}


double_array(array);