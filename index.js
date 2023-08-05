// Add JavaScript code here

const textDwelling = document.getElementById('text-dwelling-type');
const textArea = document.getElementById('text-total-area');
const textYears = document.getElementById('text-total-years');
const successMsg = document.getElementById('success-msg');
const errorMsg = document.getElementById('error-msg');

let formData = {
    type: "Detached",
    area: 15,
    years: "1 year"
}

const ipDwelling = document.getElementById('ip-dwell-type');
const ipArea = document.getElementById('ip-total-area');
ipArea.value = formData.area;
const ipYears = document.getElementById('ip-total-years');

ipDwelling.onchange = (event) => {
  console.log(event.target.value);
    formData = { ...formData, type: `${event.target.value}` }
}

ipArea.onchange = (event) => {
    formData = { ...formData, area: event.target.value }
}

ipYears.onchange = (event) => {
    formData = { ...formData, years: event.target.value }
}

const editForm = document.getElementById('edit-form');
editForm.onsubmit = (event) => {
    event.preventDefault();
    if (ipArea.value < 0) {
        showMessage("error","Please enter value greater than 0")
    }
    else { 
      console.log(formData);
        updateData(formData);
    }
};

const updateData = (data) => {
    textDwelling.innerText = data.type;
    textArea.innerText = `${data.area} m2`;
    textYears.innerText = data.years
}

const showMessage = (type, msg) => {
    if (type === 'success') {
        successMsg.classList.toggle('hidden');
        successMsg.textContent = msg;
        setTimeout(() => {
            successMsg.classList.toggle('hidden');
        }, 2000);
    }
    else {
        errorMsg.classList.toggle('hidden');
        errorMsg.textContent = msg;
        setTimeout(() => {
            errorMsg.classList.toggle('hidden');
        }, 2000);
    }
}

updateData(formData);

