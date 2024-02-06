<style>
  td,
  a {
    text-align: center;
  }

  th {
    text-align: center;
  }
</style>
<div class="content-wrapper">
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Stock Info</h5>
    <div class="card">
      <div class="card-body">
        <div class="row py-2 mt-2">
          <!-- เพิ่มช่องค้นหาสำหรับ Location ที่นี่ -->
          <div class="col">
            <select class="form-control selLoation form-select" id="selLoation">
              <option value="">Choose Location</option>
            </select>
            <br>
            <div class="table-responsive text-nowrap">
              <div class="card-datatable table-responsive pt-0">
                <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblMainMenu">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>item no</th>
                      <th>item name</th>
                      <th>location</th>
                      <th>DETAIL</th>
                    </tr>
                  </thead>
                  <tbody class="table-border-bottom-0" id="tbody">
                    <!-- ถ้าคุณต้องการเพิ่มแถวข้อมูลตารางในนี้ สามารถทำได้ -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Detail Modal -->
</a>

<!-- Modal -->
<div class="modal fade" id="mdlDetail" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mdlDetailLabel">Detail </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3">
          <div class="col-4">
            <label for="partNo" class="form-label">Part No</label>
            <input  id="dtlpartNo"  class="form-control" readonly type="text">
          </div>
          <div class="col-4">
            <label for="date" class="form-label">Date</label>
            <input  id="dtldate"  class="form-control" readonly type="text">
          </div>
          <div class="col-4">
            <label for="lotNo" class="form-label">Lot No</label>
            <input  id="dtllotNo"  class="form-control" readonly type="text">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-4">
            <label for="box" class="form-label">Box</label>
            <input  id="dtlbox"  class="form-control" readonly type="text">
          </div>
          <div class="col-4">
            <label for="location" class="form-label">Location</label>
            <input  id="dtllocation"  class="form-control" readonly type="text">
          </div>
          <div class="col-4">
            <label for="qty" class="form-label">QTY</label>
            <input  id="dtlqty"  class="form-control" readonly type="text">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
