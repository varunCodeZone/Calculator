const buttons = document.querySelectorAll('button');
const calScreen = document.querySelector('.screen');

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const value = button.textContent;
        if(value === 'c'){
            calScreen.textContent = '';
        }else if(value === '='){
            try{
                calScreen.textContent = eval(calScreen.textContent);
            } catch {
                calScreen.textContent = 'Error';
            }
        }else{
            calScreen.textContent += value;
        }
    });
});