const submitRef = document.querySelector('form.lotto-form button[type="submit"]');
const inputRefs = [...document.querySelectorAll('form.lotto-form input[id^="digit"]')];


const isNotEmpty = (elements) => elements.every((element)=> element.value !== "");

const isIntigers = (elements) => elements.every((element) => Number.isInteger(Number(element.value)));

const ConvertInputs = (elements) => elements.map((element)=> parseInt(element.value()))

const isNotRedundant = (digits) => new Set(digits).size === digits.length

submitRef.addEventListener('click', (event) =>{
    event.preventDefault();

    if (isNotEmpty(inputRefs)) {
        if (isIntigers(inputRefs)) {
            const userDigits = ConvertInputs(inputRefs);
            if (isNotRedundant(userDigits)) {
                console.log('ok')
            } else{
                console.log('redundant')
            }
        } else {
            console.log('no intigers');
        }
    }else {
        console.log('empty inputs');
    }
})
