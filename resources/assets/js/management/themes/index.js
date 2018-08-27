import Vue from 'vue'
import CustomizeColor from './components/CustomizeColor'


new Vue({
    el: '#uicustomize',
    components: {
        CustomizeColor,
    },
    data: {
        file1: null,
        file2: null,
        colors: ""
    },
    methods: {
        showPrimaryModal() {
            this.$refs.primaryModal.show()
        },
        hidePrimaryModal() {
            this.$refs.primaryModal.hide()
        },
        showSecondaryModal() {
            this.$refs.secondaryModal.show()
        },
        hideSecondaryModal() {
            this.$refs.secondaryModal.hide()
        },
        changeColor(val) {
            this.colors = val
        },
        onImgUpload1(input) {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = function (input) {
                $('#file1Img')
                    .attr('src', reader.result);
            };

            reader.readAsDataURL(file);
        },
        onImgUpload2(input) {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = function (input) {
                $('#file2Img')
                    .attr('src', reader.result);
            };

            reader.readAsDataURL(file);
        }

    }
})