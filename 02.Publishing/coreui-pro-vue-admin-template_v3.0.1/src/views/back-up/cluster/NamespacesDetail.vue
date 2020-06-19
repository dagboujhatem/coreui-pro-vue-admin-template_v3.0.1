<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">fsk-db</h1>
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
                            <b-form-input type="text" id="name" value="zcp-system" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Labels" label-for="labels" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">cloudzcp.io/zcp-system: true</b-badge>
                                <b-badge variant="secondary">cloudzdb.io/zdb-system: true</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Creation Time" label-for="creationTime" :label-cols="3">
                            <b-form-input type="text" id="creationTime" value="2019-11-28 15:03:59" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Status" label-for="status" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="success">Active</b-badge>
                                <b-badge variant="danger">Terminating</b-badge>
                            </div>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-folder mr-1"></i> Resource Quotas
                <template v-if="collapseResource === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseResource ? null : 'collapsed'" :aria-expanded="collapseResource ? 'true' : 'false'" aria-controls="collapseResource" @click="collapseResource = !collapseResource"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseResource === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseResource ? null : 'collapsed'" :aria-expanded="collapseResource ? 'true' : 'false'" aria-controls="collapseResource" @click="collapseResource = !collapseResource"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseResource" v-model="collapseResource">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <b-table striped hover small bordered :fields="resource_fields" :items="resource_items">
                            <template v-slot:table-colgroup="scope">
                                <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'resource_resource' ? '40%' : '' }">
                            </template>
                        </b-table>
                    </VuePerfectScrollbar>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-equalizer mr-1"></i> Pod Default Limit Range
                <template v-if="collapseRange === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseRange ? null : 'collapsed'" :aria-expanded="collapseRange ? 'true' : 'false'" aria-controls="collapseRange" @click="collapseRange = !collapseRange"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseRange === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseRange ? null : 'collapsed'" :aria-expanded="collapseRange ? 'true' : 'false'" aria-controls="collapseRange" @click="collapseRange = !collapseRange"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseRange" v-model="collapseRange">
                    <b-form class="table-detail-view">
                        <b-form-group label="CPU Requests" label-for="cpuRequests" :label-cols="3">
                            <b-form-input type="text" id="cpuRequests" value="0Core" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="CPU Limits" label-for="cpuLimits" :label-cols="3">
                            <b-form-input type="text" id="cpuLimits" value="0Core" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Memory Requests" label-for="memoryRequests" :label-cols="3">
                            <b-form-input type="text" id="memoryRequests" value="0Gi" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Memory Limits" label-for="memoryLimits" :label-cols="3">
                            <b-form-input type="text" id="memoryLimits" value="0Gi" readonly></b-form-input>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-info mr-1"></i> Pods
                <template v-if="collapsePods === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapsePods ? null : 'collapsed'" :aria-expanded="collapsePods ? 'true' : 'false'" aria-controls="collapsePods" @click="collapsePods = !collapsePods"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapsePods === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapsePods ? null : 'collapsed'" :aria-expanded="collapsePods ? 'true' : 'false'" aria-controls="collapsePods" @click="collapsePods = !collapsePods"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapsePods" v-model="collapsePods">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <b-table striped hover small bordered :fields="pods_fields" :items="pods_items">
                            <template v-slot:table-colgroup="scope">
                                <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'pods_number' ? '5%' : '' }">
                            </template>
                        </b-table>
                    </VuePerfectScrollbar>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-book-open mr-1"></i> Service
                <template v-if="collapseService === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseService ? null : 'collapsed'" :aria-expanded="collapseService ? 'true' : 'false'" aria-controls="collapseService" @click="collapseService = !collapseService"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseService === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseService ? null : 'collapsed'" :aria-expanded="collapseService ? 'true' : 'false'" aria-controls="collapseService" @click="collapseService = !collapseService"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseService" v-model="collapseService">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <b-table striped hover small bordered :fields="service_fields" :items="service_items">
                            <template v-slot:table-colgroup="scope">
                                <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'service_number' ? '5%' : '' }">
                            </template>
                            <template slot="service_selector" slot-scope="data">
                                <b-badge variant="secondary">{{data.item.service_selector}}</b-badge>
                            </template>
                        </b-table>
                    </VuePerfectScrollbar>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-grid mr-1"></i> Ingress
                <template v-if="collapseIngress === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseIngress ? null : 'collapsed'" :aria-expanded="collapseIngress ? 'true' : 'false'" aria-controls="collapseIngress" @click="collapseIngress = !collapseIngress"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseIngress === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseIngress ? null : 'collapsed'" :aria-expanded="collapseIngress ? 'true' : 'false'" aria-controls="collapseIngress" @click="collapseIngress = !collapseIngress"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseIngress" v-model="collapseIngress">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <b-table striped hover small bordered :fields="ingress_fields" :items="ingress_items">
                            <template v-slot:table-colgroup="scope">
                                <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'ingress_number' ? '5%' : '' }">
                            </template>
                            <template slot="ingress_endpoint" slot-scope="data">
                                <b-link :to="{ path: '/' }">{{data.item.ingress_endpoint}}</b-link>
                            </template>
                        </b-table>
                    </VuePerfectScrollbar>
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
            resource_fields: [
                { key: 'resource_resource', label: 'Resource' },
                { key: 'resource_hard', label: 'Hard', tdClass: 'text-right' },
                { key: 'resource_used', label: 'Used', tdClass: 'text-right' }
            ],
            resource_items: [
                { resource_resource: 'CPU Requests', resource_hard: '10Core', resource_used: '0' },
                { resource_resource: 'CPU Limits', resource_hard: '10Core', resource_used: '0' },
                { resource_resource: 'Memory Requests', resource_hard: '30Gi', resource_used: '0' },
                { resource_resource: 'Memory Limits', resource_hard: '30Gi', resource_used: '0' },
                { resource_resource: 'Pods', resource_hard: '100', resource_used: '7' },
                { resource_resource: 'Services', resource_hard: '100', resource_used: '4' },
                { resource_resource: 'Secrets', resource_hard: '100', resource_used: '3' },
                { resource_resource: 'Config Maps', resource_hard: '100', resource_used: '1' },
                { resource_resource: 'Persistent Volume Claims', resource_hard: '100', resource_used: '0' },
                { resource_resource: 'Services Load Balancers', resource_hard: '100', resource_used: '0' }
            ],
            pods_fields: [
                { key: 'pods_number', label: 'No', tdClass: 'text-center' },
                { key: 'pods_name', label: 'Name' },
                { key: 'pods_node', label: 'Node', tdClass: 'text-center' },
                { key: 'pods_status', label: 'Status' },
                { key: 'pods_restats', label: 'Restats', tdClass: 'text-center' },
                { key: 'pods_age', label: 'Age', tdClass: 'text-center' }
            ],
            pods_items: [
                { pods_number: '1', pods_name: 'zcp-admin-portal-ui-78f46f94fc-4tpnz', pods_node: '10.178.218.137', pods_status: 'Running', pods_restats: '0', pods_age: '280d' },
                { pods_number: '1', pods_name: 'zcp-admin-portal-ui-78f46f94fc-4tpnz', pods_node: '10.178.218.137', pods_status: 'Succeeded', pods_restats: '0', pods_age: '280d' },
                { pods_number: '1', pods_name: 'zcp-admin-portal-ui-78f46f94fc-4tpnz', pods_node: '10.178.218.137', pods_status: 'Terminated: Completed', pods_restats: '0', pods_age: '280d' },
                { pods_number: '1', pods_name: 'zcp-admin-portal-ui-78f46f94fc-4tpnz', pods_node: '10.178.218.137', pods_status: 'Waiting: CrashLoopBackOff', pods_restats: '0', pods_age: '280d' }
            ],
            service_fields: [
                { key: 'service_number', label: 'No', tdClass: 'text-center' },
                { key: 'service_name', label: 'Name' },
                { key: 'service_selector', label: 'Selector' },
                { key: 'service_type', label: 'Type' },
                { key: 'service_cluster_ip', label: 'Cluster IP', tdClass: 'text-center' },
                { key: 'service_ports', label: 'Prots' },
                { key: 'service_age', label: 'Age', tdClass: 'text-center' }
            ],
            service_items: [
                { service_number: '1', service_name: 'zcp-admin-cluster', service_selector: 'component:zcp-admin-cluster', service_type: 'ClusterIP', service_cluster_ip: '172.21.213.100', service_ports: '80/TCP', service_age: '280d' },
                { service_number: '2', service_name: 'zcp-admin-cluster', service_selector: 'component:zcp-admin-cluster', service_type: 'ClusterIP', service_cluster_ip: '172.21.213.100', service_ports: '80/TCP', service_age: '280d' }
            ],
            ingress_fields: [
                { key: 'ingress_number', label: 'No', tdClass: 'text-center' },
                { key: 'ingress_name', label: 'Name' },
                { key: 'ingress_endpoint', label: 'Endpoint' },
                { key: 'ingress_service', label: 'Service' },
                { key: 'ingress_address', label: 'Address', tdClass: 'text-center' },
                { key: 'ingress_secret', label: 'Secret' },
                { key: 'ingress_age', label: 'Age', tdClass: 'text-center' }
            ],
            ingress_items: [
                { ingress_number: '1', ingress_name: 'stg-ticket-aws-backend', ingress_endpoint: 'https://stg-ticket-aws.cloudzcp.io', ingress_service: 'stg-ticket-aws-backend:80', ingress_address: '10.178.218.137', ingress_secret: 'cloudzcp-io-cert', ingress_age: '280d' },
                { ingress_number: '2', ingress_name: 'stg-ticket-aws-backend', ingress_endpoint: 'https://stg-ticket-aws.cloudzcp.io', ingress_service: 'stg-ticket-aws-backend:80', ingress_address: '10.178.218.137', ingress_secret: 'cloudzcp-io-cert', ingress_age: '280d' }
            ],
            collapseDetail: true,
            collapseResource: false,
            collapseRange: false,
            collapsePods: false,
            collapseService: false,
            collapseIngress: false
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>