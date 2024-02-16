$(() => {
    // Initial table display
    // showDataTable();

    const apiUrl = 'http://127.0.0.1/api/Stock_info/show_DDlocation';
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var html = '';
            html = '<option value="" selected disabled>Choose Location</option>';
            for (let i = 0; i < data.length; i++) {
                const menu = data[i];
                html += '<option value="' + data[i].is_location + '">' + data[i].is_location + '</option>';
                $("#selSubMenuName").html(html);
            }
            $("#selLocation").html(html);

        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
    // Event listener for dropdown change

    //-------------------------- Function Definitions ----------------------------------


    // Function to update the table based on the selected location


});
function showStock() {
    var x = document.getElementById("ifstock");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    $("#loadingPage").attr("style", "display: block; z-index: 9999999999999; position: fixed;background: #000000c7;width: 100%;height: 1900px;");
    var location = $("#selLocation").val();
    const apiUrl = "http://127.0.0.1/api/Stock_info/show_tablelstock?location=" + location;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // $("#loadingPage").attr("style", "display: inline;");
          },
          error: function(xhr, status, error) {
            // เกิดข้อผิดพลาดในการโหลดข้อมูล
            console.error('Error:', error);
          },
          complete: function() {
            $("#loadingPage").attr("style", "display: none;");
          },
        success: function (data) {
            console.log(data);
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].isa_item_no}</td>
                    <td><i></i>${data[i]["0"].ITEM_NAME}</td>
                    <td><i></i>${data[i]["0"].MODEL}</td>
                    <td><i></i>${data[i].isa_qty}</td>
                    <td><i></i>${data[i].isa_location}</td>

                    <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-info  btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlDetail" onclick="showStockDetail('${data[i].isa_item_no}', '${data[i].isa_location}')" ><i class="bx bxs-detail"></i></a></td>
                </tr>`;
            }
            $('#tblMainMenu').dataTable().fnDestroy();
            $("#tbody")
                .html(html)
                .promise()
                .done(() => {
                    $("#tblMainMenu").DataTable({
                        scrollX: true,
                    });
                });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

function showStockDetail(item_no, location) {
    $("#loadingPage").attr("style", "display: block; z-index: 9999999999999; position: fixed;background: #000000c7;width: 100%;height: 1900px;");
    $("#inpItemNo").val(item_no);
    $("#inpLocation").val(location);
    const apiUrlSelect = 'http://127.0.0.1/api/Stock_info/show_lotno?item_no=' + item_no + '&location=' + location;
    $.ajax({
        url: apiUrlSelect,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var html = '';
            html = '<option value="" selected disabled>Choose Lot No</option>';
            for (let i = 0; i < data.length; i++) {
                const menu = data[i];
                html += '<option value="' + data[i].is_lot_no + '">' + data[i].is_lot_no + '</option>';
                $("#sellot").html(html);
            }
            $("#sellot").html(html);

        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
    const apiUrl = "http://127.0.0.1/api/Stock_info/show_tablestockdetail?item_no=" + item_no + "&location=" + location;
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // $("#loadingPage").attr("style", "display: inline;");
          },
          error: function(xhr, status, error) {
            // เกิดข้อผิดพลาดในการโหลดข้อมูล
            console.error('Error:', error);
          },
          complete: function() {
            $("#loadingPage").attr("style", "display: none;");
          },
        
        success: function (data) {
            console.log(data);
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].is_item_no}</td>
                    <td><i></i>${data[i].is_lot_no}</td>
                    <td><i></i>${data[i].is_qty}</td>
                    <td><i></i>${data[i].is_updated_date}</td>
                    <td><i></i>${data[i].Fullname}</td>
                    <td><button class="btnStatus btn badge bg-label-${data[i].is_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].is_id}" value="${data[i].is_status_flg}">${data[i].is_status_flg == 1 ? 'Stock in' : data[i].is_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
                </tr>`;
            }
            $('#tblTransaction').dataTable().fnDestroy();
            $("#tbodyTransaction")
                .html(html)
                .promise()
                .done(() => {
                    $("#tblTransaction").DataTable({
                        scrollX: true,
                    });
                });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

function showBylot() {
    var lot = $("#sellot").val();
    var item_no = $("#inpItemNo").val();
    var location = $("#inpLocation").val();
    $("#loadingPage").attr("style", "display: block; z-index: 9999999999999; position: fixed;background: #000000c7;width: 100%;height: 1900px;");
    const apiUrl = "http://127.0.0.1/api/Stock_info/show_tablestockdetailByLot?item_no=" + item_no + "&location=" + location + "&lot=" + lot;
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // $("#loadingPage").attr("style", "display: inline;");
          },
          error: function(xhr, status, error) {
            // เกิดข้อผิดพลาดในการโหลดข้อมูล
            console.error('Error:', error);
          },
          complete: function() {
            $("#loadingPage").attr("style", "display: none;");
          },
        success: function (data) {
            console.log(data);
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].is_item_no}</td>
                    <td><i></i>${data[i].is_lot_no}</td>
                    <td><i></i>${data[i].is_qty}</td>
                    <td><i></i>${data[i].is_updated_date}</td>
                    <td><i></i>${data[i].Fullname}</td>
                    <td><button class="btnStatus btn badge bg-label-${data[i].is_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].is_id}" value="${data[i].is_status_flg}">${data[i].is_status_flg == 1 ? 'Stock in' : data[i].is_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
                </tr>`;
            }
            $('#tblTransaction').dataTable().fnDestroy();
            $("#tbodyTransaction")
                .html(html)
                .promise()
                .done(() => {
                    $("#tblTransaction").DataTable({
                        scrollX: true,
                    });
                });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}
$(document).ready(function () {
    $("#loadingPage").attr("style", "display: none;");
});


