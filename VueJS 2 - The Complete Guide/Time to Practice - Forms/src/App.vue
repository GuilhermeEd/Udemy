<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <form v-if="!formWasSubmitted" style="padding-top: 15px;">
                        <!-- Full Name (First Name + Last Name) -->
                        <app-full-name v-model="fullName"></app-full-name>
                        <!-- Mail -->
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input v-model="email" name="email" id="email" type="email" class="form-control">
                        </div>
                        <!-- Password -->
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input v-model="password" name="password" id="password" type="password" class="form-control">
                        </div>
                        <!-- Store Data? Yes/No -->
                        <div class="form-check">
                            <label class="form-check-label">
                                <input v-model="storeData" value="Yes" type="radio" class="form-check-input">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                                <input v-model="storeData" value="No" type="radio" class="form-check-input">
                                No
                            </label>
                        </div>
                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click.prevent="formWasSubmitted = true">
                            Submit</button>
                    </form>
                </div>
            </div>
        </form>
        <hr>
            <!-- Display the Data Summary ONCE the Form HAS been submitted -->
        <div v-if="formWasSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Exercise 3 -->
    <!-- Edit the Example from above and create a custom "Full Name" Control -->
    <!-- which still holds the First Name and Last Name Input Field -->

    <!-- Solution: See FullName.vue component -->
</template>

<script>
import FullName from './FullName.vue';

    export default {
        data(){
            return{
                fullName: 'Guilherme Eduardo',
                email: '',
                password: '',
                storeData: 'Yes',
                formWasSubmitted: false
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
