<template>
    <div class="animated fadeIn">
        <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
            <div class="db-container">
                <div class="db-item-container">
                    <div class="db-item-box">
                        <h5 class="item-tit">
                            <b-badge variant="primary" class="mr-1">운영</b-badge> 공유인프라
                            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                                <template slot="button-content">
                                    <b-button variant="dark" size="sm">
                                        <i class="icon-options-vertical"></i>
                                    </b-button>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here...</b-dropdown-item>
                            </b-dropdown>
                        </h5>
                        <VuePerfectScrollbar class="scroll-area" :settings="psYSettings" @ps-scroll-y="scrollHandle">
                            <div class="db-item-scroll-box">
                                <b-card class="card-accent-success bg-deepdark master-card">
                                    <b-card-body style="margin: -1.25rem">
                                        <b-row>
                                            <b-col sm="6" class="pr-0">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub"><span class="badge badge-warning">Master</span> 버전 1.13.9_1533</h6>
                                                        <h6 class="sub">클러스터
                                                            <a class="btn-icon" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fa fa-bell"></i>
                                                                <b-badge pill variant="danger">99+</b-badge>
                                                            </a>
                                                        </h6>
                                                        <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col sm="6">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub">Worker Node</h6>
                                                    </div>
                                                    <div class="cl-body">
                                                        <b-row>
                                                            <b-col sm="12">
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Normal</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="100" variant="success"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">100</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Warning</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="84" variant="warning"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">84</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Critical</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="15" variant="danger"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">15</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Pending</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="9" variant="info"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">9</div>
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                                <b-card class="card-accent-warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-dev</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">5</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">23</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                    </div>
                                </b-card>
                                <b-card class="card-accent-danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod-cloudzcp-gdi-prodcloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card class="card-accent-danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card class="card-accent-success">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card class="card-accent-success">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                            </div>     
                        </VuePerfectScrollbar>
                    </div>
                </div>
                <div class="db-item-container">
                    <div class="db-item-box">
                        <h5 class="item-tit">
                            <b-badge variant="secondary" class="mr-1">개발</b-badge> 공유인프라 
                            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                                <template slot="button-content">
                                    <b-button variant="dark" size="sm">
                                        <i class="icon-options-vertical"></i>
                                    </b-button>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here...</b-dropdown-item>
                            </b-dropdown>
                        </h5>
                        <VuePerfectScrollbar class="scroll-area" :settings="psYSettings" @ps-scroll-y="scrollHandle">
                            <div class="db-item-scroll-box">
                                <b-card class="card-accent-success bg-deepdark master-card">
                                    <b-card-body style="margin: -1.25rem">
                                        <b-row>
                                            <b-col sm="6" class="pr-0">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub"><span class="badge badge-warning">Master</span> 버전 1.13.9_1533</h6>
                                                        <h6 class="sub">클러스터
                                                            <a class="btn-icon" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fa fa-bell"></i>
                                                                <b-badge pill variant="danger">99+</b-badge>
                                                            </a>
                                                        </h6>
                                                        <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col sm="6">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub">Worker Node</h6>
                                                    </div>
                                                    <div class="cl-body">
                                                        <b-row>
                                                            <b-col sm="12">
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Normal</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="success"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Warning</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Critical</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="danger"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Pending</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                                <b-card class="card-accent-warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                    </div>
                                </b-card>
                                <b-card class="card-accent-danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                </div>
                <div class="db-item-container">
                    <div class="db-item-box">
                        <h5 class="item-tit">
                            <b-badge variant="secondary" class="mr-1">개발</b-badge> 공유인프라 
                            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                                <template slot="button-content">
                                    <b-button variant="dark" size="sm">
                                        <i class="icon-options-vertical"></i>
                                    </b-button>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here...</b-dropdown-item>
                            </b-dropdown>
                        </h5>
                        <VuePerfectScrollbar class="scroll-area" :settings="psYSettings" @ps-scroll-y="scrollHandle">
                            <div class="db-item-scroll-box">
                                <b-card border-variant="success" class="bg-deepdark master-card">
                                    <b-card-body style="margin: -1.25rem">
                                        <b-row>
                                            <b-col sm="6" class="pr-0">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub"><span class="badge badge-warning">Master</span> 버전 1.13.9_1533</h6>
                                                        <h6 class="sub">클러스터
                                                            <a class="btn-icon" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fa fa-bell"></i>
                                                                <b-badge pill variant="danger">99+</b-badge>
                                                            </a>
                                                        </h6>
                                                        <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col sm="6">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub">Worker Node</h6>
                                                    </div>
                                                    <div class="cl-body">
                                                        <b-row>
                                                            <b-col sm="12">
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Normal</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="success"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Warning</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Critical</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="danger"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Pending</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                                <b-card border-variant="warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <!-- <span class="badge badge-pill badge-danger">0</span> -->
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                    </div>
                                </b-card>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                </div>
                <div class="db-item-container">
                    <div class="db-item-box">
                        <h5 class="item-tit">
                            <b-badge variant="secondary" class="mr-1">개발</b-badge> 공유인프라 
                            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                                <template slot="button-content">
                                    <b-button variant="dark" size="sm">
                                        <i class="icon-options-vertical"></i>
                                    </b-button>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here...</b-dropdown-item>
                            </b-dropdown>
                        </h5>
                        <VuePerfectScrollbar class="scroll-area" :settings="psYSettings" @ps-scroll-y="scrollHandle">
                            <div class="db-item-scroll-box">
                                <b-card border-variant="success" class="bg-deepdark master-card">
                                    <b-card-body style="margin: -1.25rem">
                                        <b-row>
                                            <b-col sm="6" class="pr-0">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub"><span class="badge badge-warning">Master</span> 버전 1.13.9_1533</h6>
                                                        <h6 class="sub">클러스터
                                                            <a class="btn-icon" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fa fa-bell"></i>
                                                                <b-badge pill variant="danger">99+</b-badge>
                                                            </a>
                                                        </h6>
                                                        <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col sm="6">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub">Worker Node</h6>
                                                    </div>
                                                    <div class="cl-body">
                                                        <b-row>
                                                            <b-col sm="12">
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Normal</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="success"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Warning</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Critical</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="danger"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Pending</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                                <b-card border-variant="warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="success">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="success">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                </div>
                <div class="db-item-container">
                    <div class="db-item-box">
                        <h5 class="item-tit">
                            <b-badge variant="secondary" class="mr-1">개발</b-badge> 공유인프라 
                            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                                <template slot="button-content">
                                    <b-button variant="dark" size="sm">
                                        <i class="icon-options-vertical"></i>
                                    </b-button>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here...</b-dropdown-item>
                            </b-dropdown>
                        </h5>
                        <VuePerfectScrollbar class="scroll-area" :settings="psYSettings" @ps-scroll-y="scrollHandle">
                            <div class="db-item-scroll-box">
                                <b-card border-variant="success" class="bg-deepdark master-card">
                                    <b-card-body style="margin: -1.25rem">
                                        <b-row>
                                            <b-col sm="6" class="pr-0">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub"><span class="badge badge-warning">Master</span> 버전 1.13.9_1533</h6>
                                                        <h6 class="sub">클러스터
                                                            <a class="btn-icon" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fa fa-bell"></i>
                                                                <b-badge pill variant="danger">99+</b-badge>
                                                            </a>
                                                        </h6>
                                                        <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col sm="6">
                                                <div class="cl-box">
                                                    <div class="cl-header">
                                                        <h6 class="sub">Worker Node</h6>
                                                    </div>
                                                    <div class="cl-body">
                                                        <b-row>
                                                            <b-col sm="12">
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Normal</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="success"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Warning</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Critical</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="danger"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                                <div class="progress-group">
                                                                    <div class="progress-group-header align-items-end">
                                                                        <div class="progress-label font-xs">Pending</div>
                                                                        <div class="progress-group-bars mx-1">
                                                                            <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                                                                        </div>
                                                                        <div class="progress-value font-xs">43</div>
                                                                    </div>
                                                                </div>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                                <b-card border-variant="warning">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                                <b-card border-variant="danger">
                                    <div class="cl-box d-flex align-items-center">
                                        <div class="left mr-4">
                                            <img src="img/img-ci-mariadb-logo.png" alt="maria DB">
                                            <b-badge variant="primary" class="mt-3 d-block">10.2.21</b-badge>
                                        </div>
                                        <div class="right">
                                            <div class="cl-header">
                                                <h4 class="tit">cloudzcp-gdi-prod</h4>
                                                <p class="font-xs text-muted mb-2">구동시간 : 20일</p>
                                                <div class="btn-icon-group">
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-bell"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speech"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="icon-speedometer"></i>
                                                        <b-badge pill variant="danger">99+</b-badge>
                                                    </a>
                                                    <a class="btn-icon btn-icon-block bg-secondary" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-gears"></i>
                                                        <span class="badge badge-pill badge-danger">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="badge-group">
                                        <b-badge variant="light" class="mr-1">Oracle</b-badge>
                                        <b-badge variant="light" class="mr-1">HA</b-badge>
                                    </div>
                                </b-card>
                            </div>
                        </VuePerfectScrollbar>
                    </div>
                </div>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    components: {
        VuePerfectScrollbar
    },
    computed: {
        psSettings: () => {
            return {
                maxScrollbarLength: 200,
                minScrollbarLength: 40,
                suppressScrollY: true,
                wheelPropagation: true,
                useBothWheelAxes: true
            }
        },
        psYSettings: () => {
            return {
                maxScrollbarLength: 200,
                minScrollbarLength: 40,
                suppressScrollX: true,
                wheelPropagation: true,
                useBothWheelAxes: true
            }
        }
    },
    data() {
        return {
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>

<style>
    
</style>