<!-- Exercise 3 -->
<!-- Edit the Example from above and create a custom "Full Name" Control -->
<!-- which still holds the First Name and Last Name Input Field -->

<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input
                :value="firstName"
                @input="nameChanged(true, $event)"
                name="firstName"
                id="firstName"
                type="text"
                class="form-control">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input
                :value="lastName"
                @input="nameChanged(false, $event)"
                name="lastName"
                id="lastName"
                type="text"
                class="form-control">
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFirstName, event){
            let name = '';
            if(isFirstName){
                name = event.target.value + ' ' + this.lastName;
            } else {
                name = this.firstName + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', this.value);
        }
    },
    computed: {
        firstName(){
            return this.value.split(" ")[0];
        },
        lastName(){
            return this.value.split(" ")[1];
        }
    }
}
</script>

