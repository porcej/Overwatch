
<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal show bg-dark collapse-sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <div class="sidebar-header">
                    <h6 class="fs-5 d-none d-sm-inline text-danger">Overwatch</h6>
                    <button type="button" class="btn-close  btn-close-white float-right" data-bs-toggle="collapse" data-bs-target=".collapse-sidebar" aria-label="Close"></button>
                </div>
                
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                      <a href="#" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-binoculars"></i><span class="ms-1 d-none d-sm-inline">Current</span>
                      </a>
                    </li>
                    <li>
                      <a href="#custom-menu" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4  bi-filter-circle"></i> <span class="ms-1 d-none d-sm-inline">Custom</span>
                      </a>
                      <ul class="collapse show nav flex-column ms-1" id="custom-menu" data-bs-parent="#menu">
                        <li>
                            <a href="#times-menu" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4  bi-clock"></i> <span class="ms-1 d-none d-sm-inline">Times</span> </a>
                            <ul class="collapse show nav flex-column ms-1" id="times-menu" data-bs-parent="#custom-menu">
                                <li class="w-100">
                                  <label data-bs-theme="dark" for="start-time" class="form-label">Start Time:</label>
                                  <input data-bs-theme="dark" type="datetime-local" class="form-control" id="start-time">
                                </li>
                                <li>
                                  <label for="end-time" class="form-label">End Time:</label>
                                  <input type="datetime-local" class="form-control" id="end-time">
                                </li>
                            </ul>
                        </li>
                        <li>
                          <a href="#units-menu" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-truck-front"></i> <span class="ms-1 d-none d-sm-inline">Units</span>
                          </a>
                          <ul class="collapse nav flex-column ms-1" id="units-menu" data-bs-parent="#custom-menu">
                            <li class="w-100">
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">E201</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">E203</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">E204</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">E205</span></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4  bi-alarm"></i> <span class="ms-1 d-none d-sm-inline">Incidents</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"># 0001</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"># 0002</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"># 0003</span></a>
                            </li>
                            <li>
                              <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"># 0004</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <main class="col ps-md-2 pt-2">
            <button class="btn collapse collapse-sidebar" data-bs-toggle="collapse" data-bs-target=".collapse-sidebar" role="button">
                <i class="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
            <div id="mapContainer"></div>
        </main>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>