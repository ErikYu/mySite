// Vue.component("length-input", {
//     template:  '\
//     <div>\
//       <label v-if="label">{{ label }}</label>\
//       $\
//       <input\
//         ref="input"\
//         v-bind:value="value"\
//         v-on:input="updateValue($event.target.value)"\
//         v-on:focus="selectAll"\
//         v-on:blur="formatValue"\
//       >\
//     </div>\
//   ',
//     props: ['labelinfo']
// });
Vue.component("length-input",{
    template:  '\
    <div class="col-sm-10">\
      <input ref="input" class="form-control" v-model="value" id="pipeOD">\
      <select\
        class="form-control"\
        v-model="unit"\
        v-on:blur="formatValue"\
      >\
        <option value="mm">mm</option>\
        <option value="inch">inch</option>\
      </select>\
    </div>\
    ',
    props: ['value','unit'],
    methods:{
        formatValue: function () {
            if(this.unit=="inch"){
                this.$refs.input.value /= 25.4
            }
        }
    }
});
var pipeInfo=new Vue({
    el: "#pipeInfo",
    data: {
        pipeOd: 60,
        lengthUnit: "mm"
    }
})