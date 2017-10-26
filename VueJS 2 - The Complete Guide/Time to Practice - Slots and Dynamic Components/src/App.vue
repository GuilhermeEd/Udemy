<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="component = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="component = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="component = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="component">
                    <p slot="blueContent">This is some Blue content</p>
                    <p slot="greenContent">This is some Green content</p>
                    <p slot="redContent">This is some Red content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return{
                component: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
