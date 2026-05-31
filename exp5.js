let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
 let empId = document.getElementById("id").value;
   let salary = parseFloat(document.getElementById("salary").value);
   let department = document.getElementById("department").value;
   if (name === "" || empId === "" || isNaN(salary) || department === "") {
       alert("Please fill in all fields correctly.");
       return;
   }
   let employee = {
       name: name,
       empId: empId,    
         salary: salary,
         department: department
    };
    employees.push(employee);   
    alert("Employee added successfully!");
    document.getElementById("name").value ="";
    document.getElementById("empId").value ="";
    document.getElementById("salary").value ="";
    document.getElementById("department").value ="";

}
function displayEmployees() {
    let output = "<h2>Employee List</h2>";
    employees.forEach(emp => {
        output += `Name: ${emp.name}, ID: ${emp.empId}, Salary: ${emp.salary}, Department: ${emp.department}<br>;
    }";}}                                                                                                              
function filterSalary(){
}