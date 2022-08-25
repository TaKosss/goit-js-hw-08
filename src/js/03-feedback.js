import throttle from 'lodash.throttle';
import { getValue } from './getValueFromLS';

const STORAGE_KEY = 'feedback-form-state'

const formData = {}

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('texterea'),
    input: document.querySelector('input')
}

refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(onTextareaInput, 500))

populateTextarea() 

function onFormSubmit(e) {
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value
    const msg = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, msg)
}

function populateTextarea() {
    const savedMsg = getValue(STORAGE_KEY, "")
    console.log(savedMsg);
    
    if (savedMsg) {
        refs.input.value = savedMsg.email
        refs.textarea.value = savedMsg.message
    }
}