'use strict';

const empList = document.querySelector('ul');
const employeeData = [...document.getElementsByTagName('li')];

function sortList(list) {
  return list.sort(function(prev, current) {
    return +current.dataset.salary.replace('$', '').replace(',', '')
    - +prev.dataset.salary.replace('$', '').replace(',', '');
  });
};

function getEmployees(list) {
  employeeData.forEach(employee => empList.append(employee));
};

sortList(employeeData);
getEmployees(empList);
// write code here
