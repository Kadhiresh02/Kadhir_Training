"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization = /** @class */ (function () {
    function Organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    Organization.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.empName, " Contact:").concat(this.empContact);
    };
    return Organization;
}());
var OrganizationObj = new Organization(101, "Vinay", 9789);
console.log(OrganizationObj.employeeDetails());
