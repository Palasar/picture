const dragDrop = () => {
    const inputUpload = document.querySelectorAll('[name=upload]');
  
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
        inputUpload.forEach(input => {
            input.addEventListener(event, (e) => preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight (input){
        input.closest('.file_upload').style.border = '5px solid green';
    }

    function unhighlight (input){
        input.closest('.file_upload').style.border = 'none';
    }
     

    ['dragenter', 'dragover'].forEach(event => {
        inputUpload.forEach(input => {
            input.addEventListener(event, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(event => {
        inputUpload.forEach(input => {
            input.addEventListener(event, () => unhighlight(input), false);
        });
    });

    inputUpload.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            const nameFileArr = input.files[0].name.split('.'),
                  dots = nameFileArr[0].length > 6 ? '...' : '.',
                  shortNameFile = nameFileArr[0].slice(0, 6) + dots + nameFileArr[1];

            input.previousElementSibling.textContent = shortNameFile; 
        });
    });
};
export default dragDrop;