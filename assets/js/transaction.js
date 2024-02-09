$(() => {
    $(document).ready(function () {
        // $(".datepicker").datepicker({
        //     dateFormat: 'dd/mm/yy'
        // });
        var x = document.getElementById("content");
        x.style.display = "block";
        var beginDate = $('#inpStartDate').val();
        var endDate = $('#inpEndDate').val();
        showDataTable(beginDate,endDate);
    });
});

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
}



$(document).on('click', '#tblTransBtn', function () {
    var beginDate = $('#inpStartDate').val();
    var endDate = $('#inpEndDate').val();

    if (beginDate == '' && endDate == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Ooops..',
            html: 'Please choose begin and end date',
        });
    } else {
        var x = document.getElementById("content");
        if (x.style.display === "none") {
            // alert(beginDate);
            x.style.display = "block";
            showDataTable(beginDate, endDate);
        } 
        else {
            showDataTable(beginDate, endDate);
        }
    }
});
// function initializeDataTable() {
//     $("#tblTransaction").DataTable({
//         scrollX: true
//     });
// }
function showDataTable(beginDate, endDate) {
    // const apiUrl = 'http://127.0.0.1/api/Transaction_info/show_Transaction_date';

    $.ajax({
        url: base_url('Transactioninfo/callApiFillterDate'),
        type: 'POST',
        data: {
            beginDate: beginDate,
            endDate: endDate
        },
        dataType: 'json',
        success: function (data) {
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].item_no}</td>
                    <td><i></i>${data[i].itf_item_name}</td>
                    <td><i></i>${data[i].is_qty}</td>
                    <td><i></i>${data[i].is_location}</td>
                    <td><i></i>${formatDate(data[i].is_created_date)}</td>
                    <td><button class="btnStatus btn badge bg-label-${data[i].is_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].is_id}" value="${data[i].is_status_flg}">${data[i].is_status_flg == 1 ? 'Stock in' : data[i].is_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
                </tr>`;
            }

            // Destroy the existing DataTable instance
            // $('#tblTransaction').dataTable().fnDestroy();

            $("#tbody")
                .html(html)
                .promise()
                .done(() => {
                    // initializeDataTable();
                });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}


