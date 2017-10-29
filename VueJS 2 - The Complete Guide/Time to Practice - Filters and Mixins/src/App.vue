<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Local Reverse Filter</h3>
                <p>{{ message | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Global Show Length Filter</h3>
                <p>{{ message | showLength }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Reverse with Computed Properties</h3>
                <p>{{ messageReverse }}</p>
                <h3>Show Length with Computed Properties</h3>
                <p>{{ messageShowLength }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { messageShowLengthMixin } from './messageShowLengthMixin';

    export default {
        mixins: [messageShowLengthMixin],
        data() {
            return {
                message: 'Filters & Mixins'
            }
        },
        filters: {
            reverse(value){
                return value.split('').reverse().join('');
            }
        },
        computed: {
            messageReverse(){
                return this.message.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>
