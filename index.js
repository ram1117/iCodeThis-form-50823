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
    formData = { ...formData, type: event.target.value }
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
        showMessage(errorMsg, "Please enter Area value greater than 0")
    }
    else {
        updateData(formData);
        showMessage(successMsg, "Updated successfully!!!");
        closeEditWindow();
    }
};

const updateData = (data) => {
    textDwelling.innerText = data.type;
    textArea.innerText = `${data.area} m2`;
    textYears.innerText = data.years
}

const showMessage = (element, msg) => {
    element.classList.toggle('hidden');
    element.textContent = msg;
    setTimeout(() => {
        element.classList.toggle('hidden');
    }, 2000);

}

const editBtn = document.getElementById('edit-btn');
const closeBtn = document.getElementById('close-btn');

const editWindow = document.getElementById('edit-window');
const showEditWindow = () => { 
    editWindow.classList.remove('window-hidden');
    editWindow.classList.add('window-show')
}

const closeEditWindow = () => { 
    editWindow.classList.add('window-hidden');
    editWindow.classList.remove('window-show')
}

editBtn.onclick = () => { 
    showEditWindow();
}

closeBtn.onclick = () => { 
    closeEditWindow();
}

updateData(formData);

