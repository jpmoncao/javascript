document.querySelector('select[name="select-option"]').addEventListener('change', event => {
    alert(event.target.value)
})