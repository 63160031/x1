<div class="content-wrapper">
  <!-- Content -->


  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span>App Manage Permission Detail</h5>
    <div class="row py-1">
      <div class="col-1">
        Premission Group
      </div>
      <div class="col">
        <select class="form-control selGroup form-select" id="selGroup">
          <option value="">Choose main menu</option>
        </select>
      </div>
      <div class="col">
        <button type="button" class="btn btn-circle btn-dark" id="btnSerchMain">Search</button>
      </div>
    </div>
    <br>

    <div class="card" style="display: none;" id="content">
      <div class="col-sm-12 mt-3">
        <div class="row ">
          <div class="col-md-12">
            <div class="card container">
              <div class="row py-2 mt-2">
                <span class="fs-5 fw-bold text-primary-emphasis">Register Permission</span>
                <div class="col-md-5 col-sm-10 col-5 mt-3">
                  <div class="row ">
                    <div class="col-lg-3 p-t-20">
                      <span>Sub Menu</span><span class="red-text">*</span>
                    </div>
                    <div class="col-lg">
                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <select class="form-control selMenuGroupName form-select" id="selMenuGroupName">
                          <option value="">Choose Main menu</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 col-sm-2 col-5">
                  <div class="row ">
                    <div class="col-lg-5 p-t-20">
                      <span>Sub Menu controller</span><span class="red-text">*</span>
                    </div>
                    <div class="col-lg">
                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <select class="form-control selSubMenuName form-select" id="selSubMenuName">
                          <option value="">Choose Sub Menu</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md col-sm-2 col-2 p-t-20">
                  <button type="button" class="btn btn-circle btn-primary" id="btnSaveAddPer" style="margin-top: -33px;margin-left: -3px;">Add</button>
                </div>
                <div class="col-12 col-sm-12 justify-content-start">
                  <div id="errMegadd" style="color: red; display: none;">Please enter in English only.</div>
                </div>
                <div class="card-body">
                  <div class="table-responsive text-nowrap">
                    <div class="card-datatable table-responsive pt-0">
                      <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblPermis">
                        <thead>
                          <tr>
                            <th class="text-center">No.</th>
                            <th class="text-center">Main Menu</th>
                            <th class="text-center">Update Date</th>
                            <th class="text-center">Update By</th>
                            <th class="text-center">Stasus</th>
                            <th class="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody class="table-border-bottom-0" id="tbody">
                          <!-- <tr>
                  <td><i></i> <strong>1</strong></td>
                  <td><i></i> <strong>Dashboard</strong></td>
                  <td><i></i> <strong>Admin</strong></td>
                  <td class="">2024-01-10 14:45:04</td>
                  <td class="">SD525</td>
                  <td><span class="badge bg-label-success me-1">Enable</span></td>
                  <td class="">
                    </div><a href="" class="btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#basicModal">
                      <i class="bx bxs-edit"></i>
                    </a>
                  </td>
                </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ Bordered Table -->



  <!-- Button trigger modal -->

  <!-- Modal -->
  <div class="modal fade" id="mdlEdit" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropEdit">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Main menu</label>
              <select id="edtMainmenu" class="edtMainmenu select2 form-select" data-allow-clear="true">
                <option value="">Choose Main menu</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Sub Menu</label>
              <select id="edtSubEdit" class="edtSubEdit select2 form-select" data-allow-clear="true">
                <option value="">Choose Sub Menu</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="btnSaveEdit">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>