<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div class="alert alert-info">
                    <p><strong>Event:</strong> {{ event }}</p>
                </div>
                <button v-myOn:click="buttonClick" class="btn btn-primary">Click Me!</button>
                <hr>
                <div
                    v-myOn:mouseenter="mouseEnter"
                    v-myOn:mouseleave="mouseLeave"
                    class="box"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                event: 'waiting for event...'
            }
        },
        methods: {
            buttonClick(){
                this.showEvent('Button Click');
            },
            mouseEnter(){
                this.showEvent('Mouse Enter');
            },
            mouseLeave(){
                this.showEvent('Mouse Leave');
            },
            showEvent(e){
                this.event = e;
                let that = this;
                setTimeout(function(){
                    that.event = 'waiting for event...';
                },1000);
            }
        }
    }
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: lightgreen
}
</style>
