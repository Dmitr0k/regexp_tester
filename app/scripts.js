var app = new Vue ({
    el: ".regexp_app",
    data: {
        isTrue: false,
        isFalse: true,
        regexp: '',
        result: true,
        expressions: [
            {
                expression: '',
                isTrue: true,
                label_text: "True!"
            }
        ]
    },
    methods: {
        addNewExpression () {
            this.expressions.push ({
                expression: '',
                isTrue: false,
                label_text: "False!"
            });
            this.recheck(this.expressions.length-1);
        },
        deleteExpression() {
            this.expressions.splice(0,1);
        },

        recheck: function (index) {
            var regexp = new RegExp("^"+this.regexp+"$");
            this.result = regexp.test(this.expressions[index].expression);
            if (regexp.test(this.expressions[index].expression)) {
                this.expressions[index].isTrue = true;
                this.expressions[index].label_text = "True!";
            } else {
                this.expressions[index].isTrue = false;
                this.expressions[index].label_text = "False!";
            }
        }
    },
    watch: {
        regexp: function () {
            for (var i = 0; i < this.expressions.length; i++) {
                this.recheck(i);
            }
        }
    }
});