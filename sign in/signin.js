// let namInput = document.getElementById('nam').value;
// let nationalityInput = document.getElementById('about').value;
// let contactInput = document.getElementById('contact').value;
// let btn = document.getElementById('btn');
// console.log(namInput)
// btn.addEventListener('click', function(){
//     if (namInput == '' || nationalityInput == '' || contactInput == '') {
//         alert('Please fill in all required fields.');
        
//     }
//     else{
//         window.location.href = 'submit-page.html';
//     }
// })

document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        
        let namInput = document.getElementById('nam').value;
        let nationalityInput = document.getElementById('about').value;
        let contactInput = document.getElementById('contact').value;

        if (namInput.trim() === '' || nationalityInput.trim() === '' || contactInput.trim() === '') {
            alert('Please fill in all required fields.');
        } else {
            window.location.href = 'submit-page.html';
        }
    });
});
