$(document).ready(function () {

    $('#btnLogin').click(function (e) {
        e.preventDefault();

        var empCode = $('#username').val();
        var empPassword = $('#password').val();

        if (empCode == '' || empPassword == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                html: 'Please enter both username and password.',
                showConfirmButton: true
            });
        } else {
            var apiUrl = 'http://127.0.0.1/api/';

            var requestData = {
                empCode: empCode,
                empPassword: empPassword
            };

            $.ajax({
                url: base_url('Login/callApiLogin'),
                type: 'post',
                data:requestData,

                dataType: 'json', // Specifies the type of data expected in the response

                success: function (response) {
                    console.log('Response:', response);

                    if (response.result == 1) {
                        window.location.href = base_url('Dashboard/dashboard');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Check your Employee Code and Password!',
                            html: response ? response.message : 'Unexpected response format'

                        });
                    }
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        }
    });
});