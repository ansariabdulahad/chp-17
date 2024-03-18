let allBtn = document.querySelectorAll('button');
let inputEl = document.querySelector('input');

// Check length of input value
allBtn[0].onclick = () => {

    Swal.fire({
        title: `Your Value Lenght is ${inputEl.value.length}`,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
}

// Check char
allBtn[1].onclick = () => {

    Swal.fire({
        title: `Your Last Char is " ${inputEl.value.charAt(inputEl.value.length - 1)} "`,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
}

// Check Match
allBtn[2].onclick = () => {
    let dataMatchWith = "Just For Code";

    Swal.fire({
        title: dataMatchWith.match(inputEl.value) ? "YOUR DATA IS MATCHED WITH THE INPUT VALUE" : `Please input "Just For Code" to match the data.`,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
}