<h4 class="fw-bold py-4 mb-4" style="margin-left: 25px;"><span class="text-muted fw-light">Administrator /</span> Manage App Account </h4>
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
          <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
          <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List App Account</span>
          <button type="button" class="btn btn btn-primary" style="letter-spacing: 2px; margin: 0px 40px;float: right;" id="callmodelAdd" data-bs-toggle="modal" data-bs-target="#mdlAdd"><span class="tf-icons bx bx-add-to-queue me-1"></span>Register New App Account </button>
        </div>
        <div class="card-body">
          <div class="table-responsive text-nowrap">
            <div class="card-datatable table-responsive pt-0">
              <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblManageAccount">
                <thead>
                  <tr>
                    <th class="text-center">No.</th>
                    <th class="text-center">Employee Code</th>
                    <th class="text-center">Permis Group</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">lastName</th>
                    <th class="text-center">Plant</th>
                    <th class="text-center">CREATE DATE</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody class="table-border-bottom-0" id="tbody">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Add-->
  <div class="modal fade" id="mdlAdd" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Register App Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="" id="add">
            <div class="row g-2">
              <div class="col mb-3">
                <label class="form-label">Employee Code</label>
                <input type="text" id="inpEmpCode" class="form-control" placeholder="Emp Code" oninput="InputAddEmpcode(this)">
              </div>
            </div>
            <div class="row g-2">
              <div class="col mb-3">
                <label class="form-label">Name</label>
                <input type="text" id="inpFirstName" class="form-control" placeholder="FirstName" oninput="InputAddpersonal(this)">
              </div>
            </div>
            <div class="row g-2">
              <div class="col mb-0">
                <label class="form-label">Last Name</label>
                <input type="text" id="inpLastName" class="form-control" placeholder="LastName" oninput="InputAddpersonal(this)">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label class="form-label">Permission group</label>
                <select id="selPermissionAdd" class="selPermissionAdd select2 form-select" data-allow-clear="true">
                  <option value="">Choose Permission Group</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label class="form-label">Plant</label>
                <select id="selPlantAdd" class="selPlantAdd select2 form-select" data-allow-clear="true">
                  <option value="">Choose Plant</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="container col justify-content-start">
            <div id="errMegadd" style="display: none; color: red;">Please enter in English only.</div>
            <div id="errAddempcode" style="display: none; color: red;">Please enter Employee Code as (a-z ,A-Z ,0-9) only.</div>
            <div id="errAddpersonal" style="display: none; color: red;">Please enter Firstname or Lastname as (a-z ,A-Z) only.</div>
          </div>
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
          <button type="button" class="btn btn-primary" id="btnSaveAdd">Save</button>
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
          <h5 class="modal-title" id="exampleModalLabel1">Edit Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-2">
            <div class="col mb-0">
              <label class="form-label">Employee Code</label>
              <input type="text" id="edtEmpCode" class="form-control" value="" oninput="InputAddEmpcode(this)" readonly>
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-0">
              <label class="form-label">First Name</label>
              <input type="text" id="edtName" class="form-control" value="" oninput="InputAddpersonal(this)">
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-0">
              <label class="form-label">Last Name</label>
              <input type="text" id="edtLastName" class="form-control" value="" oninput="InputAddpersonal(this)">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Permission group</label>
              <select id="edtPermission" class="edtPermission select2 form-select" data-allow-clear="true">
                <option value="">Choose Permission Group</option>
                <!-- ตัวเลือกจะถูกเติมโดย JavaScript -->
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Plant</label>
              <select id="edtPlantEdit" class="edtPlantEdit select2 form-select" data-allow-clear="true">
                <option value="">Choose Plant</option>
                <!-- ตัวเลือกจะถูกเติมโดย JavaScript -->
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="container col justify-content-start">
            <div id="errMegadd" style="display: none; color: red;">Please enter in English only.</div>
            <div id="errAddempcode" style="display: none; color: red;">Please enter Employee Code as (a-z ,A-Z ,0-9) only.</div>
            <div id="errAddpersonal" style="display: none; color: red;">Please enter Firstname or Lastname as (a-z ,A-Z) only.</div>
          </div>
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
          <button type="button" class="btn btn-primary" id="btnSaveEdit">Save</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Edit Modal -->