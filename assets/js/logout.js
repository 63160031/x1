$(document).ready(function () {
    $('#btnLogout').click(function (e) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to Logout",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes,logout!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: base_url('Login/logout'),
                success: (response) => {
                    window.location.href = 'http://127.0.0.1/SysIMS/Login/login';
                }
            })
        }
    })
})
});