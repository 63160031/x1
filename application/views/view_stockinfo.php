<div class="content-wrapper">
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Stock Info</h4>
    <div class="card" style=" margin-bottom: 15px;">
      <div class="card-body">
        <div class="row py-2">
          <div class="col-12">
            <div class="head-label text-left" style="padding: 1px 0px 10px 7px;">
              <i class="bx bxs-select-multiple mb-2" style="margin-top: 1px;color: #2c3a4a;"></i>
              <span style="font-size: 17px;font-weight: 700;color: #0f1f31;margin-left: 5px;">Select Form Location</span>
              <!-- <div class="d-flex justify-content-end mt-2 pr-2"> -->
              <!-- </div> -->
            </div>
            <div class="row ">
              <label for="selLoation" class="form-label ">Choose Location <span class="red-text">*</span></label>
              <div class="text-center">
                <select class="form-control selLoation form-selectSI " id="selLocation" onchange="showStock()">
                </select>
                <span style="color: red;font-size: 13px; font-weight: 600;float: left;margin-top: 6px;">* Please Select Location</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="card" style="display: none;" id="ifstock">
      <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
        <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
        <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Stock Info</span>
      </div>
      <div class="card-body">
        <div class="row py-2 mt-2">
          <!-- เพิ่มช่องค้นหาสำหรับ Location ที่นี่ -->
          <div class="col">
            <div class="table-responsive text-nowrap">
              <div class="card-datatable table-responsive pt-0">
                <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblMainMenu">
                  <thead>
                    <tr>
                      <th class="text-center">No.</th>
                      <th class="text-center">item no</th>
                      <th class="text-center">item name</th>
                      <th class="text-center">model</th>
                      <th class="text-center">STOCK QTY</th>
                      <th class="text-center">location</th>
                      <th class="text-center">DETAIL</th>
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
      <div class="modal-dialog modal-lg" role="document" style="    max-width: 95rem;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mdlDetailLabel"> Stock Detail </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card" style=" margin-bottom: 15px;">
              <div class="card-body">
                <div class="row py-2">
                  <div class="col-12">
                    <div class="head-label text-left" style="padding: 1px 0px 10px 7px;">
                      <i class="bx bxs-select-multiple mb-2" style="margin-top: 1px;color: #2c3a4a;"></i>
                      <span style="font-size: 17px;font-weight: 700;color: #0f1f31;margin-left: 5px;">Select Form</span>
                    </div>
                    <div class="row">
                      <div class="col-8">
                        <label for="selLoation" class="form-label ">Choose Lot No.</label>
                        <div class="text-center">
                          <select class="form-control selLoation form-selectSI" onchange="showBylot()" id="sellot">
                          </select>
                        </div>
                      </div>
                      <div class="col-6">
                      <!-- <div id="showItemLocation">

                      </div> -->
                      <input type="text" class="form-control" id="inpItemNo" value="" hidden>
                      <input type="text" class="form-control" id="inpLocation" value="" hidden>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body" style="box-shadow: 0px 0px 5px 0px #d9dee3; border-radius: 8px;">
              <div class="head-label text-left" style="    padding: 10px 0px 0px 13px;">
                <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
                <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Stock Info</span>
              </div>
              <div class="row py-2 mt-2">
                <!-- เพิ่มช่องค้นหาสำหรับ Location ที่นี่ -->
                <div class="col">
                  <div class="table-responsive text-nowrap">
                    <div class="card-datatable table-responsive pt-0">
                      <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblTransaction">
                        <thead>
                          <tr>
                            <th class="text-center">No.</th>
                            <th class="text-center">item no</th>
                            <th class="text-center">lot no.</th>
                            <th class="text-center">QTY</th>
                            <th class="text-center">UPDATE DATE</th>
                            <th class="text-center">UPDATE BY</th>
                            <th class="text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody class="table-border-bottom-0" id="tbodyTransaction">
                          <!-- ถ้าคุณต้องการเพิ่มแถวข้อมูลตารางในนี้ สามารถทำได้ -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>