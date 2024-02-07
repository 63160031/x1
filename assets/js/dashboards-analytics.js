$(function() {
  "use strict";
  var e = $(".datatables-basic");
  e.length && (e.DataTable({
      ajax: assetsPath + "/json/table-datatable.json",
      columns: [{
          data: ""
      }, {
          data: "id"
      }, {
          data: "id"
      }, {
          data: "full_name"
      }, {
          data: "email"
      }, {
          data: "start_date"
      }, {
          data: "salary"
      }, {
          data: "status"
      }, {
          data: ""
      }],
      columnDefs: [{
          className: "control",
          orderable: !1,
          responsivePriority: 2,
          searchable: !1,
          targets: 0,
          render: function(e, t, a, s) {
              return ""
          }
      }, {
          targets: 1,
          orderable: !1,
          responsivePriority: 3,
          searchable: !1,
          checkboxes: !0,
          checkboxes: {
              selectAllRender: '<input type="checkbox" class="form-check-input">'
          },
          render: function() {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">'
          }
      }, {
          targets: 2,
          searchable: !1,
          visible: !1
      }, {
          targets: 3,
          responsivePriority: 4,
          render: function(e, t, a, s) {
              var l = a.avatar,
                  n = a.full_name,
                  r = a.post;
              return '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' + (l ? '<img src="' + assetsPath + "/img/avatars/" + l + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (l = (((l = (n = a.full_name).match(/\b\w/g) || []).shift() || "") + (l.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">' + n + '</span><small class="emp_post text-truncate text-muted">' + r + "</small></div></div>"
          }
      }, {
          responsivePriority: 1,
          targets: 4
      }, {
          targets: -2,
          render: function(e, t, a, s) {
              var a = a.status,
                  l = {
                      1: {
                          title: "Current",
                          class: "bg-label-primary"
                      },
                      2: {
                          title: "Professional",
                          class: " bg-label-success"
                      },
                      3: {
                          title: "Rejected",
                          class: " bg-label-danger"
                      },
                      4: {
                          title: "Resigned",
                          class: " bg-label-warning"
                      },
                      5: {
                          title: "Applied",
                          class: " bg-label-info"
                      }
                  };
              return void 0 === l[a] ? e : '<span class="badge rounded-pill ' + l[a].class + '">' + l[a].title + "</span>"
          }
      }, {
          targets: -1,
          title: "Actions",
          orderable: !1,
          searchable: !1,
          render: function(e, t, a, s) {
              return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><ul class="dropdown-menu dropdown-menu-end"><li><a href="javascript:;" class="dropdown-item">Details</a></li><li><a href="javascript:;" class="dropdown-item">Archive</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></li></ul></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>'
          }
      }],
      order: [
          [2, "desc"]
      ],
      dom: '<"card-header"<"head-label text-center"><"dt-action-buttons text-end"B>><"d-flex justify-content-between align-items-center row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      buttons: [{
          extend: "collection",
          className: "btn btn-label-primary dropdown-toggle me-2",
          text: '<i class="bx bx-show me-1"></i>Export',
          buttons: [{
              extend: "print",
              text: '<i class="bx bx-printer me-1" ></i>Print',
              className: "dropdown-item",
              exportOptions: {
                  columns: [3, 4, 5, 6, 7]
              }
          }, {
              extend: "csv",
              text: '<i class="bx bx-file me-1" ></i>Csv',
              className: "dropdown-item",
              exportOptions: {
                  columns: [3, 4, 5, 6, 7]
              }
          }, {
              extend: "excel",
              text: '<i class="bx bx-file me-1"></i>Excel',
              className: "dropdown-item",
              exportOptions: {
                  columns: [3, 4, 5, 6, 7]
              }
          }, {
              extend: "pdf",
              text: '<i class="bx bxs-file-pdf me-1"></i>Pdf',
              className: "dropdown-item",
              exportOptions: {
                  columns: [3, 4, 5, 6, 7]
              }
          }, {
              extend: "copy",
              text: '<i class="bx bx-copy me-1" ></i>Copy',
              className: "dropdown-item",
              exportOptions: {
                  columns: [3, 4, 5, 6, 7]
              }
          }]
      }, {
          text: '<i class="bx bx-plus me-1"></i> <span class="d-none d-lg-inline-block">Add New Record</span>',
          className: "create-new btn btn-primary"
      }],
      responsive: {
          details: {
              display: $.fn.dataTable.Responsive.display.modal({
                  header: function(e) {
                      return "Details of " + e.data().full_name
                  }
              }),
              type: "column",
              renderer: function(e, t, a) {
                  a = $.map(a, function(e, t) {
                      return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                  }).join("");
                  return !!a && $('<table class="table"/><tbody />').append(a)
              }
          }
      }
  }), $("div.head-label").html('<h5 class="card-title mb-0">DataTable with Buttons</h5>'))
});