<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">pvc-2a06e79a-8da5-473a-9465-32dc9cf5fbc0</h1>
        <b-card>
            <h5 class="mb-3">
                <i class="icons cui-justify-left mr-1"></i> Details
                <template v-if="collapseDetail === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseDetail ? null : 'collapsed'" :aria-expanded="collapseDetail ? 'true' : 'false'" aria-controls="collapseDetail" @click="collapseDetail = !collapseDetail"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseDetail === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseDetail ? null : 'collapsed'" :aria-expanded="collapseDetail ? 'true' : 'false'" aria-controls="collapseDetail" @click="collapseDetail = !collapseDetail"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseDetail" v-model="collapseDetail">
                    <b-form class="table-detail-view">
                        <b-form-group label="Name" label-for="name" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type">pvc-2a06e79a-8da5-473a-9465-32dc9cf5fbc0</span>
                            </div>
                        </b-form-group>
                        <b-form-group label="Labels" label-for="labels" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">CapacityGb: 20</b-badge>
                                <b-badge variant="secondary">Datacenter: seo01</b-badge>
                                <b-badge variant="secondary">IOPS: 2</b-badge>
                                <b-badge variant="secondary">StorageType: Endurance</b-badge>
                                <b-badge variant="secondary">billingType: hourly</b-badge>
                                <b-badge variant="secondary">failure-domain.beta.kubernetes.io/region: jp-tok</b-badge>
                                <b-badge variant="secondary">ibm-cloud.kubernetes.io/iaas-provider: softlayer</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Annotations" label-for="annotations" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">ibm.io/dm:  /dev/dm-8</b-badge>
                                <b-badge variant="secondary">ibm.io/mountstatus:  mounted</b-badge>
                                <b-badge variant="secondary">ibm.io/network-storage-id:  138053644</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Creation Time" label-for="creationTime" :label-cols="3">
                            <b-form-input type="text" id="creationTime" value="2019-11-28 15:03:59" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Status" label-for="status" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="success">Available</b-badge>
                                <b-badge variant="warning">Bound</b-badge>
                                <b-badge variant="primary">Released</b-badge>
                                <b-badge variant="danger">Failed</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Claim" label-for="claim" :label-cols="3">
                            <b-form-input type="text" id="claim" value="Delete" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Access Modes" label-for="accessModes" :label-cols="3">
                            <b-form-input type="text" id="accessModes" value="ReadWriteOnce" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Storage Class" label-for="storageClass" :label-cols="3">
                            <b-form-input type="text" id="storageClass" value="ibmc-block-silver" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Message" label-for="message" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type"></span>
                            </div>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-drawer mr-1"></i> Capacity
                <template v-if="collapseCapacity === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseCapacity ? null : 'collapsed'" :aria-expanded="collapseCapacity ? 'true' : 'false'" aria-controls="collapseCapacity" @click="collapseCapacity = !collapseCapacity"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseCapacity === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseCapacity ? null : 'collapsed'" :aria-expanded="collapseCapacity ? 'true' : 'false'" aria-controls="collapseCapacity" @click="collapseCapacity = !collapseCapacity"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseCapacity" v-model="collapseCapacity">
                    <b-form class="table-detail-view">
                        <b-form-group label="Storage" label-for="storage" :label-cols="3">
                            <b-form-input type="text" id="storage" value="20Gi" readonly></b-form-input>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <div class="text-center mb-4">
            <router-link :to="{ path: '/cluster/clusterdetail' }">
                <b-button variant="warning" class="left"><i class="icon-list"></i> 목록</b-button>
            </router-link>
        </div>
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
        }
    },
    data()  {
        return {
            collapseDetail: true,
            collapseCapacity: true
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>