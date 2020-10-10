const checklatinSymbol = (selectorInput) => {

            const inputs =  document.querySelectorAll(selectorInput);
        
            inputs.forEach(input => {
                input.addEventListener('input', (e) => {
                    e.target.value = e.target.value.replace(/[A-Za-z]/g, '');
                });
            });
    };
export default checklatinSymbol;