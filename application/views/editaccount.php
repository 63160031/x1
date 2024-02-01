<div class="container-xxl flex-grow-1 container-p-y">

  <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span> Account</h5>

  <div class="card mb-4">
    <h5 class="card-header text-center">Profile Details</h5>

    <!-- Account -->
    <div class="card-body d-flex justify-content-center">
      <div class="d-flex align-items-start align-items-sm-center gap-4">
        <img src="<?php echo base_url() ?>/assets/img/pf/PF.webp"  alt="user-avatar" class="d-block rounded" height="100" width="100" id="uploadedAvatar" />
      </div>
    </div>
    <hr class="my-0" />
    <div class="card-body">
      <form id="formAccountSettings" method="POST" onsubmit="return false">
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="empCode" class="form-label">empcode</label>
            <input type="text" class="form-control" id="empCode" name="empCode" value="" placeholder="" readonly />
          </div>
          <div class="mb-3 col-md-6">
            <label for="edtPass" class="form-label">Password</label>
            <input type="password" class="form-control" id="edtPass" name="edtPass" value="" placeholder=" •••••••• " />
          </div>

          <div class="mb-3 col-md-6">
            <label for="edtfName" class="form-label">First Name</label>
            <input class="form-control" type="text" name="edtfName" id="edtfName" value="" />
          </div>
          <div class="mb-3 col-md-6">
            <label for="edtlName" class="form-label">Last Name</label>
            <input class="form-control" type="text" id="edtlName" name="edtlName" value="" />
          </div>
          <div class="mb-3 col-md-6">
            <label for="edtEmail" class="form-label">E-mail</label>
            <input class="form-control" type="text" id="edtEmail" name="edtEmail" value="" />
          </div>
            
          <div class="mt-2">
            <button type="submit" class="btn btn-ET me-2" id="btnSaveEdit"> Save </button>
            <button type="reset" class="btn btn-outline-secondary">Cancel</button>
          </div>
      </form>
    </div>
  </div>
</div>