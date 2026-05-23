var selectRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = data.fullName;
    newRow.insertCell(1).innerHTML = data.empCode;
    newRow.insertCell(2).innerHTML = data.salary;
    newRow.insertCell(3).innerHTML = data.city;

    newRow.insertCell(4).innerHTML = `
        <a onclick="onEdit(this)">Edit</a>
        <a onclick="onDelete(this)">Delete</a>
    `;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectRow = null;
}

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectRow.cells[2].innerHTML;
    document.getElementById("city").value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.fullName;
    selectRow.cells[1].innerHTML = formData.empCode;
    selectRow.cells[2].innerHTML = formData.salary;
    selectRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    var isValid = true;

    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) {
            document.getElementById("fullNameValidationError").classList.add("hide");
        }
    }

    return isValid;
}