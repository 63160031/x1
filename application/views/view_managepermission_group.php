<!-- Content wrapper -->
<div class="content-wrapper">
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Manage Permission Group</h4>

    <!-- Add Permission Group Card -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row py-2">
          <div class="col-md-12">
            <div class="head-label text-left" style="padding: 1px 0px 10px 7px;">
              <i class="bx bxs-select-multiple mb-2" style="margin-top: 1px;color: #2c3a4a;"></i>
              <span style="font-size: 17px;font-weight: 700;color: #0f1f31;margin-left: 5px;">Register Permission Group</span>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <input class="form-control" type="text" id="inpPermisGroup" oninput="InputAdd(this)">
                <span style="color: red;font-size: 13px; font-weight: 600;">* Please Enter Permission Group</span>
              </div>
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-circle btn-primary" style="letter-spacing: 2px;" id="btnSaveAdd"><span class="tf-icons bx bx-add-to-queue me-1"></span>Register Permission Group</button>
            </div>
          </div>
        </div>

        <div class="col-md-12 text-start mt-3">
          <div id="errMegadd" style="color: red; display: none;">Please enter in English only.</div>
        </div>
      </div>
    </div>
    <div class="card">
    <div class="col-sm-12 mt-3">
      <div class="row ">
        <div class="col-md-12">
          <div class="card container">
            <div class="row py-2 mt-2">
              <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
                <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
                <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Permission Group</span>
              </div>
              <div class="card-body">
                <div class="table-responsive text-nowrap">
                  <div class="card-datatable table-responsive pt-0">
                    <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblPermisGP">
                      <thead>
                        <tr>
                          <th class="text-center">No.</th>
                          <th class="text-center">Permission Group Name</th>
                          <th class="text-center">Update Date</th>
                          <th class="text-center">Update By</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0" id="tbody">
                        <!-- ข้อมูลในตาราง -->
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

  <!-- Permission Group Table Card -->
  
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div class="modal fade" id="mdlEdit" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Edit Permission Group</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="edtGroup" class="form-label">Permission Group Name</label>
              <input type="text" id="edtGroup" class="form-control" placeholder="Enter Permission Group Name">
              <input type="text" id="edtspgid" class="form-control" hidden>
              <input type="text" id="empCd" class="form-control" value="<?php echo  $this->session->userdata('userName'); ?>" hidden>

            </div>
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
<!--/ Bordered Table -->
</div>