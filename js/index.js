const app = Vue.createApp({
    data(){
        return {
            wlcmText: 'Welcome To the vue world',
            result: 0,
            firstNum: 0,
            secNum: 0,
            oparetor: "?",
            topValue: 0,
            leftValue: 0,
            topSite: "0%",
            leftSite: "0%",
            
        }
    },
    methods: {
        fRight(){
            let value = this.leftValue + 2;
            if(value < 0){
                value = 0;
            }
            else if(value > 96.4){
                value =96.4;
            }
            this.leftValue = value;
            this.leftSite = value + '%';
        },
        fLeft(){
            let value = this.leftValue - 2;
            if(value < 0){
                value = 0;
            }
            else if(value > 96.4){
                value =96.4;
            }
            this.leftValue = value;
            this.leftSite = value + '%';
        },
        fDown(){
            let value = this.topValue + 4;
            if(value < 0){
                value = 0;
            }
            else if(value > 90){
                value =90;
            }
            this.topValue = value;
            this.topSite = value + '%';
        },
        fUp(){
            let value = this.topValue - 4;
            if(value < 0){
                value = 0;
            }
            else if(value > 90){
                value =90;
            }
            this.topValue = value;
            this.topSite = value + '%';
        },
        plus(){
            this.oparetor = '+';
            this.result = this.firstNum + this.secNum;
        },
        minus(){
            this.oparetor = '-';
            this.result = this.firstNum - this.secNum;
        },
        multi(){
            this.oparetor = '*';
            this.result = this.firstNum * this.secNum;
        },
        div(){
            this.oparetor = '/';
            this.result = this.firstNum / this.secNum;
        },
    },
})

app.mount("#app");