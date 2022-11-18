// Initialize object (employee).
const employee = {
    name: "Sankara",
    streetAddress: "Kamiti Road"
};

// updateEmployeeWithKeyAndValue(employee, key, value): "before each" hook for "returns an employee with the original key value pairs and the new key value pair":
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

const updated = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);
// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value): updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// deleteFromEmployeeByKey(employee, key): deletes `key` from a clone of employee and returns the new employee (it is non-destructive):
function deleteFromEmployeeByKey(employee, key) {
    return {...employee
    [key]
    };
}

const newEmployee = deleteFromEmployeeByKey(employee, 'name');
delete newEmployee.name;

// destructivelyDeleteFromEmployeeByKey(employee, key): modifies the original employee:
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

