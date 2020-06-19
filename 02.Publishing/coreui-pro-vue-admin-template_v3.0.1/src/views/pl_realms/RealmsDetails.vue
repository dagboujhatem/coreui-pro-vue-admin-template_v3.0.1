<template>
    <div>
        <h1 class="page-title">SKI</h1>
        <div class="tab-contents-box">
            <CTabs>
                <CTab active>
                    <template slot="title">
                        Overview
                    </template>
                    <CRow>
                        <CCol lg="6">
                            <CInput
                                label="Name"
                                horizontal
                                autocomplete="Name"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="6">
                            <CRow form class="form-group">
                                <CCol tag="label" sm="3" class="col-form-label">
                                    Status
                                </CCol>
                                <CCol sm="9" class="d-flex align-items-center">
                                    <label class="c-switch c-switch-label c-switch-success mb-0">
                                        <input class="c-switch-input" type="checkbox" checked="">
                                        <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                                    </label>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="6">
                            <CInput
                                label="Created Date"
                                horizontal
                                autocomplete="Created Date"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="6">
                            <CInput
                                label="Creator"
                                horizontal
                                autocomplete="Creator"
                            />
                        </CCol>
                    </CRow>
                    <div class="btn-contents-box">
                        <CLink to="/pl_realms/pl_realms">
                            <CButton type="reset" size="sm" color="warning"><CIcon name="cil-list"/><span class="icon-text ml-1">List</span></CButton>
                        </CLink>
                        <div class="float-right">
                            <CButton type="reset" size="sm" color="secondary"><CIcon name="cil-arrow-circle-left"/><span class="icon-text ml-1">Cancel</span></CButton>
                            <CButton type="submit" size="sm" color="primary" class="ml-2"><CIcon name="cil-check-circle"/><span class="icon-text ml-1">Save</span></CButton>
                        </div>
                    </div>
                </CTab>
                <CTab>
                    <template slot="title">
                        Users
                    </template>
                    
                </CTab>
                <CTab>
                    <template slot="title">
                        Groups
                    </template>
                    
                </CTab>
                </CTab>
                <CTab>
                    <template slot="title">
                        Clusters
                    </template>
                    
                </CTab>
                </CTab>
                <CTab>
                    <template slot="title">
                        Projects
                    </template>
                    
                </CTab>
            </CTabs>
        </div>
    </div>
</template>

<script>    
    export default {
        data () {
            return {
                
            }
        }
    }
</script>