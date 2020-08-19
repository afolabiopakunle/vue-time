new Vue({
    el: "#app",
    data() {
        return {
            firstname: '',
            lastname: '',
            students: [{
                firstname: "Afolabi",
                lastname: "Opakunle"
            }]

        }
    },
    methods: {
        addStudent() {
            student = {
                firstname: firstname.value,
                lastname: lastname.value
            }
            this.students.push(student);
            this.firstname = '';
            this.lastname = ''
        }
    }
})