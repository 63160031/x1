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
                html += '<option value="'+ data[i].is_location +'">'+ data[i].is_location +'</option>';
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
    function updateTableByLocation(selectedLocation) {
        const apiUrl = 'http://127.0.0.1/api/Stock_info/show_tablelstock';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    if (data[i].is_location === selectedLocation) {
                        html += `<tr>
                        <td><i></i> <strong>${i + 1}</strong></td>
                        <td><i></i>${data[i].item_no}</td>
                        <td><i></i>${data[i].itf_item_name}</td>
                        <td><i></i>${data[i].is_location}</td>
                        <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlDetail" id="btnDetail" data-id="${data[i].is_id}"><i class="bx bxs-detail"></i></a></td>
                    </tr>`;
                    }
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

});
function showStock() {
    var x = document.getElementById("ifstock");
    if (x.style.display === "none") {
        x.style.display = "block";
    }   
var location = $("#selLocation").val();

        const apiUrl = "http://127.0.0.1/api/Stock_info/show_tablelstock?location=" + location;

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].isa_item_no}</td>
                    <td><i></i>${data[i].ITEM_NAME}</td>
                    <td><i></i>${data[i].MODEL}</td>
                    <td><i></i>${data[i].isa_qty}</td>
                    <td><i></i>${data[i].isa_location}</td>
                    <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlDetail" id="btnDetail" data-id="${data[i].isa_location}"><i class="bx bxs-detail"></i></a></td>
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
