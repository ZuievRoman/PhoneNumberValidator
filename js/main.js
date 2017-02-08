new Vue({

    el: "#app",
    data: {
        number: '',
        code_country: null,
        result: '',
        countries: [
            {
                code: 'Ukraine +380'
            },
            {
                code: 'Russia +7'
            },
            {
                code: 'Belarus +375'
            }
        ]
    },
    methods: {
        phoneResult: function () {

            this.result = ( this.code_country + this.number ).replace(/[^-0-9]/gim, '');

        },
        validatePhone: function (event) {

            var code = event.keyCode;

            if (event.shiftKey && ( code >= 48 && code <= 57 )) {
                event.preventDefault();
                return false;
            }

            if (( code >= 96 && code <= 105 ) || ( code >= 48 && code <= 57 ) || code == 123 || code == 32 || code == 17 || code == 65 || code == 8) {
                return;
            } else {
                event.preventDefault();
            }

        }
    }

});