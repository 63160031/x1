<h4 class="fw-bold py-4 mb-4" style="margin-left: 25px;"><span class="text-muted fw-light">Administrator /</span> Manage App Menu </h4>
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
          <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
          <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List App Menu </span>
          <button type="button" class="btn btn-primary" id="btnAddMenuApp"style="letter-spacing: 2px; margin: 0px 40px;float: right;" data-bs-target="#mdlAdd" data-bs-toggle="modal"><span class="tf-icons bx bx-add-to-queue me-1"></span> Register New App Menu</button>
        </div>
        <div class="card-body">
          <div class="table-responsive text-nowrap">
            <div class="card-datatable table-responsive pt-0">
              <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblManageMenu">
                <thead>
                  <tr>
                    <th class="text-center">No.</th>
                    <th class="text-center">Main Menu Name</th>
                    <th class="text-center">UPDATE DATE</th>
                    <th class="text-center">UPDATE BY</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="table-border-bottom-0" id="tbody">
                  <!-- Table body content goes here -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <!--/ Bordered Table -->



      <!-- Button trigger modal -->


      <!-- Modal Add-->
      <div class="modal fade" id="mdlAdd" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">Register App Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col mb-3">
                  <label for="addMenuName" class="form-label"> App Menu Name</label>
                  <input type="text" id="addMenuName" class="form-control" placeholder="Enter Menu Name">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">
                  <label for="addMenuPic" class="form-label">App Menu Pic</label>
                  <input type="text" id="addMenuPic" class="form-control" placeholder="Enter Menu Pic">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">
                  <label for="addMenuPart" class="form-label">App Menu Part</label>
                  <input type="text" id="addMenuPart" class="form-control" placeholder=" Enter Menu Part">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">
                  <label for="addMenuBtn" class="form-label">App Menu Button Name</label>
                  <input type="text" id="addMenuBtn" class="form-control" placeholder="Enter Menu Button Name ">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="container col justify-content-start">
                <div id="errMegadd" style="display: none; color: red; ">Please enter in English only.</div>
                <div id="errAddempcode" style="display: none; color: red; ">Please enter Employee Code as (a-z ,A-Z ,0-9) only.</div>
                <div id="errAddpersonal" style="display: none; color: red; ">Please enter Firstname or Lastname as (a-z ,A-Z) only.</div>
              </div>
              <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
              <button type="button" class="btn btn-primary" id="btnSaveAdd">Add</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Add-->



      <!-- Modal Edit-->
      <div class="modal fade" id="mdlEdit" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">Edit Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col mb-3">
                  <label for="edtMenuName" class="form-label">Menu name</label>
                  <input type="text" id="edtMenuName" class="form-control" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">
                  <label for="edtMenuPic" class="form-label">Menu Pic</label>
                  <input type="text" id="edtMenuPic" class="form-control" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">
                  <label for="edtMenuPart" class="form-label">Menu Part</label>
                  <input type="text" id="edtMenuPart" class="form-control" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="col mb-3">

                </div>
              </div>
            </div>
            <div class="modal-footer">

              <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
              <button type="button" class="btn btn-primary" id="btnSaveEdit">Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<!-- End Edit Modal -->