import { all } from "core-js/fn/promise";

const forms = () => {
    const allForms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputsUploadImg = document.querySelectorAll('[name = upload]'),
          message = {
              loadingText: 'загрузка...',
              sucsessText: 'Мы свяжемся с вами в ближайшее время',
              failureText: 'Что-то пошло не так',
              loadingImg: './assets/img/spinner.gif',
              sucsessImg: './assets/img/ok.png',
              failureImg: 'assets/img/fail.png'
          },
          pathServer = {
              ordrerDesigher: 'assets/desinerServer.php',
              callBack: 'assets/callBackServer.php'
          };
    
    async function postData  (src, data) {
        let response =  await fetch(src, {
            method: 'POST',
            body: data
        });
        return await response.text();
    }

    function clearInputs(){
        inputs.forEach(input => {
            input.value = '';
        });
        inputsUploadImg.forEach(input => {
            input.previousElementSibling.textContent = 'Файл не выбран';    
        });
    }

    inputsUploadImg.forEach(input => {

        input.addEventListener('input', () => {
         
            const filesName = input.files[0].name,
                  arrNameFiles = filesName.split('.'),
                  firstFiveLetters = filesName.slice(0, 5),
                  nameLoadingImg = input.previousElementSibling;
            let dots = '';
      
        dots =  arrNameFiles[0].length > 6 ? '...' : '.';

        nameLoadingImg.textContent = firstFiveLetters + dots + arrNameFiles[1];
        });
    });
 
    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
 
            form.classList.remove('fadeIn');
            form.classList.add('animated', 'fadeOut');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);
            
            const statusMessage = document.createElement('div'),
                  statusImg = document.createElement('img'),
                  statusText = document.createElement('div');
            
            statusMessage.classList.add('status');
            form.parentNode.append(statusMessage);

            statusImg.setAttribute('src', message.loadingImg);
            statusMessage.append(statusImg);
            

            statusText.textContent = message.loadingText;
            statusMessage.append(statusText);
            statusMessage.classList.add('animated', 'fadeIn');

            const formData = new FormData(form);
            
            let api = form.getAttribute('data-callBack') ? pathServer.callBack : pathServer.ordrerDesigher;

            postData(api, formData)
                .then(response => {
                    console.log(response);
                    statusImg.setAttribute('src', message.sucsessImg);
                    statusText.textContent = message.sucsessText;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.failureImg);
                    statusText.textContent = message.failureText;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOut');
                        form.classList.add('fadeIn');
                    }, 5000);
                });
        });
    });
};
export default forms;