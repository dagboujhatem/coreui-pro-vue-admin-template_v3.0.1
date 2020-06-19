<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">
            Cluster Nodes <b-badge class="m-1" variant="danger">2</b-badge>
            <div class="float-right">
                <b-button variant="primary" class="mr-2"><i class="icon-refresh"></i> Refresh</b-button>
                <b-button variant="success" class="mr-2"><i class="fa fa-file-excel-o"></i> Excel Download</b-button>
                <b-button v-b-toggle.collapse1 variant="secondary"><i class="fa fa-filter"></i> 검색상세</b-button>
            </div>
        </h1>
        <div>
            <b-collapse id="collapse1">
                <b-card>
                    <b-form class="row">
                        <b-col lg="3">
                            <b-form-group>
                                <label for="nodesName">Name</label>
                                <b-form-input type="text" id="nodesName" placeholder="Name을 입력하세요."></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col lg="3">
                            <b-form-group>
                                <label for="nodesCsp">CSP</label>
                                <b-form-select id="nodesCsp" :plain="true" :options="['All', 'Aws', 'Azure', 'Cloud Z', 'GCS', 'IBM']" value="All"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col lg="3">
                            <b-form-group>
                                <label for="nodesRoles">Roles</label>
                                <b-form-select id="nodesRoles" :plain="true" :options="['All', 'logging', 'management', 'worker', 'edge', 'zdb']" value="All"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col lg="3">
                            <b-form-group>
                                <label for="nodesStatus">Status</label>
                                <b-form-select id="nodesStatus" :plain="true" :options="['All', 'Ready', 'NotReady', 'Unknown']" value="All"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col lg="12">
                            <b-button variant="primary" block><i class="fa fa-search"></i> 검색</b-button>
                        </b-col>
                    </b-form>
                </b-card>
            </b-collapse>
        </div>
        <b-card>
            <div class="mb-3">
                <b-form-group label-for="perPageSelect" class="mb-0 float-left">
                    <b-form-select v-model="perPage" id="perPageSelect" :options="pageOptions" class="w-auto"></b-form-select>
                </b-form-group>
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" class="my-0"></b-pagination>
            </div>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <b-table striped hover small bordered :fields="nodes_fields" :items="nodes_items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'nodes_number' ? '5%' : '' }">
                    </template>
                    <template slot="nodes_name" slot-scope="data">
                        <b-link :to="{ path: '/cluster/nodesdetail' }">{{data.item.nodes_name}}</b-link>
                    </template>
                    <template slot="nodes_csp" slot-scope="data">
                        <img :src="variantUrl(data.item.nodes_csp)" width="22" :alt="variantAlt(data.item.nodes_csp)" class="mx-1">
                    </template>
                    <template slot="nodes_status" slot-scope="data">
                        <b-badge :variant="variantResult(data.item.nodes_status)">{{data.item.nodes_status}}</b-badge>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
        </b-card>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { Switch as cSwitch } from '@coreui/vue'

export default {
    components: {
        VuePerfectScrollbar,
        cSwitch
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
            nodes_fields: [
                { key: 'nodes_number', label: 'No', tdClass: 'text-center' },
                { key: 'nodes_cluster_name', label: 'Cluster Name' },
                { key: 'nodes_csp', label: 'CSP', tdClass: 'text-center' },
                { key: 'nodes_name', label: 'Node Name', tdClass: 'text-center' },
                { key: 'nodes_node_pool_name', label: 'Node Pool Name' },
                { key: 'nodes_type', label: 'Type' },
                { key: 'nodes_roles', label: 'Roles' },
                { key: 'nodes_status', label: 'Status', tdClass: 'text-center' },
                { key: 'nodes_version', label: 'Version' },
                { key: 'nodes_age', label: 'Age', tdClass: 'text-center' }
            ],
            nodes_items: [
                { nodes_number: '1', nodes_cluster_name: 'cloudzcp-skcc-happycampus-prod', nodes_csp: 'ibm', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'Ready', nodes_version: 'v1.15.5+IKS',nodes_age: '11d' },
                { nodes_number: '2', nodes_cluster_name: 'cloudzcp-skcc-happycampus-prod', nodes_csp: 'aws', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'NotReady', nodes_version: 'v1.15.5+IKS',nodes_age: '11d' },
                { nodes_number: '3', nodes_cluster_name: 'cloudzcp-accuinsight-prod', nodes_csp: 'gcs', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'Ready', nodes_version: 'v1.15.5+IKS',nodes_age: '11d' },
                { nodes_number: '4', nodes_cluster_name: 'cloudzcp-skcc-happycampus-prod', nodes_csp: 'cloudz', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'Ready', nodes_version: 'v1.15.5+IKS',nodes_age: '11d' },
                { nodes_number: '5', nodes_cluster_name: 'cloudzcp-accuinsight-prod', nodes_csp: 'azure', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'Unknown', nodes_version: 'v1.15.5+IKS',nodes_age: '11d' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 20, 30, 50, 100]
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        },
        variantUrl (cloud) {
            let $variantUrl
            
            if(cloud == 'gcs') {
                $variantUrl = 'img/img_logo_gcs.png'
            }else if(cloud == 'aws') {
                $variantUrl = 'img/img_logo_aws.png'
            }else if(cloud == 'cloudz') {
                $variantUrl = 'img/img_logo_cloud.png'
            }else if(cloud == 'ibm') {
                $variantUrl = 'img/img_logo_ibm.png'
            }else if(cloud == 'azure') {
                $variantUrl = 'img/img_logo_azure.png'
            }
            return $variantUrl
        },
        variantAlt (cloud) {
            let $variantAlt
            
            if(cloud == 'gcs') {
                $variantAlt = 'Google Clould System Logo'
            }else if(cloud == 'aws') {
                $variantAlt = 'Amazon Web System Logo'
            }else if(cloud == 'cloudz') {
                $variantAlt = 'Cloud Z Logo'
            }else if(cloud == 'ibm') {
                $variantAlt = 'IBM Logo'
            }else if(cloud == 'azure') {
                $variantAlt = 'Azure Logo'
            }
            return $variantAlt
        },
        variantResult (status) {
            let $variantStatus
            
            if(status == 'Ready') {
                $variantStatus = 'primary' // 파랑
            }else if(status == 'NotReady') {
                $variantStatus = 'warning' // 노랑
            }else if(status == 'Unknown') {
                $variantStatus = 'secondary' // 회색
            }
            return $variantStatus
        }
    }
}
</script>