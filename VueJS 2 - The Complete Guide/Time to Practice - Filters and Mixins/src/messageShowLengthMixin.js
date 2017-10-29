export const messageShowLengthMixin = {
    computed: {
        messageShowLength(){
            return `${this.message} (${this.message.length})`;
        }
    }
};