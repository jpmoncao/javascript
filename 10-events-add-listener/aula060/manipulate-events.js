let sampleInput = document.querySelector('input[name="sample-input"]')

function doChange(event) {
    alert(event.target.value)
}

sampleInput.addEventListener('change', doChange)

let changeEvent = new Event('change') // Cria um evento de 'change' na variavel

sampleInput.dispatchEvent(changeEvent) // Dispara o evento equivalente a 'changeEvent'

sampleInput.removeEventListener('change', doChange) // Remove evento de change que resulta na função 'doChange' 