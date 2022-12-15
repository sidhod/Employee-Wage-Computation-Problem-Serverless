'use strict';
module.exports.employeeAttendance = async () => {
  let attendance = Math.floor((Math.random() * 2) + 0);
  if (attendance === 0) {
    return "Employee is Present!!!";
  } else {
    return "Employee is Absent!!!"
  }
};

