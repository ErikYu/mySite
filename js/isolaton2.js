// var pipeInfo=new Vue({
//     el: "#pipeInfo",
//     data: {
//         lengthUnit: "inch",
//         pipeOd: 60
//     },
//     computed: {
//         pipeOdA: function () {
//             if(this.lengthUnit=="inch"){
//                 return this.pipeOd*25.4;
//             } else{
//                 return this.pipeOd;
//             }
//         }
//     }
// });
// var innerTInfo=new Vue({
//     el: "#innerTInfo",
//     data: {
//         tempUnit: "K",
//         innerT: 60
//     },
//     computed: {
//         innerTA: function () {
//             if(this.tempUnit=="C"){
//                 return this.tempUnit+275.15
//             } else{
//                 return this.tempUnit
//             }
//         }
//     }
// });
new Vue({
    el: "#isoCalc",
    data: {
        pipeOd: 25,
        innerT: 114,
        surroT: 0,
        windV: 0.1,
        isoTd: 60,
        condCoef: 0.044,
        coefA: 0.00018,
        coefB: 70
    },
    computed:{
        condCoefTrue: function () {
            return this.condCoef+this.coefA*((this.innerT-this.surroT)/2-this.coefB);
        },
        convectionCoef: function () {
            return 1.163*(10+6*Math.sqrt(this.windV));
        },
        heatLossLength: function () {
            return (this.innerT-this.surroT)/(1/(this.convectionCoef*Math.PI*(this.pipeOd+2*this.isoTd))+Math.log((this.pipeOd+2*this.isoTd)/this.pipeOd)/(2*Math.PI*this.condCoefTrue));
        },
        heatLossArea: function () {
            return this.heatLossLength/(Math.PI*(this.pipeOd+2*this.isoTd)/1000)
        },
        outerT: function () {
            return this.surroT+this.heatLossLength/(this.convectionCoef*Math.PI*this.pipeOd/1000);
        }

    }
});
