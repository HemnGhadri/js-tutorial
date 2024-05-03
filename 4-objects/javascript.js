student = {
    id: 1254,
    firstname: "John",
    lastname: "Meyers",
    fields: ["Java", "Python", "JS"],
    age: 25,
    fullname() {
        return `${this.lastname} ${this.lastname}`
    },
    showfields() {
        this.fields.forEach((field, index) => console.log(`${index + 1}: ${field}`))
    }
}

console.log(student.fullname())
student.showfields()