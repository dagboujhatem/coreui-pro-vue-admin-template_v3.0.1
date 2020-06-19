<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">
            Users 
            <b-button variant="success" class="float-right" v-b-modal.user-add-modal><i class="icon-plus"></i> User 추가</b-button>
        </h1>
        <b-card>
            <div class="mb-3">
                <b-form-group label-for="perPageSelect" class="mb-0 float-left">
                    <b-form-select v-model="perPage" id="perPageSelect" :options="pageOptions" class="w-auto"></b-form-select>
                </b-form-group>
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" class="my-0"></b-pagination>
            </div>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <b-table striped hover small bordered :fields="user_fields" :items="user_items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'user_number' ? '3%' : '' }">
                    </template>
                    <template slot="user_actions" slot-scope="data">
                        <router-link :to="{ path: '/user/userdetail' }">
                            <b-button variant="secondary" size="sm" class="mr-1"><i class="fa fa-pencil"></i></b-button>
                        </router-link>
                        <b-button variant="danger" size="sm" class="mr-1"><i class="fa fa-close"></i></b-button>
                        <b-button variant="warning" size="sm"><i class="icon-ban"></i></b-button>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
            
            <!-- modal : User 추가 -->
            <b-modal id="user-add-modal" size="lg" title="User" centered scrollable>
                <b-form>
                    
                </b-form>
                <template v-slot:modal-footer="{ ok, cancel }">
                    <b-button variant="secondary" @click="cancel()">취소</b-button>
                    <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                </template>
            </b-modal>
            <!-- // modal : User 추가 -->
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
            user_fields: [
                { key: 'user_number', label: 'No', tdClass: 'text-center' },
                { key: 'user_company', label: 'Company', tdClass: 'text-center' },
                { key: 'user_orgarnization', label: 'Orgarnization', tdClass: 'text-center' },
                { key: 'user_role', label: 'Role', tdClass: 'text-center' },
                { key: 'user_name', label: 'Name', tdClass: 'text-center' },
                { key: 'user_email', label: 'Email' },
                { key: 'user_cluster_name', label: 'Cluster Name', tdClass: 'text-center' },
                { key: 'user_age', label: 'Age', tdClass: 'text-center' },
                { key: 'user_rel', label: 'Rel. Project', tdClass: 'text-center' },
                { key: 'user_arch', label: 'n/w arch', tdClass: 'text-center' },
                { key: 'user_pm', label: 'Next. PM', tdClass: 'text-center' },
                { key: 'user_actions', label: 'Actions', tdClass: 'text-center' }
            ],
            user_items: [
                { user_number: '1', user_company: 'SK C&C', user_orgarnization: '제조인프라 O.G', user_role: 'Platform Provider', user_name: '홍길동', user_email: 'honggildong@skcc.com', user_cluster_name: 'cloudzcp-skcc-dev', user_age: '2019/10/25', user_rel: '3', user_arch: 'private', user_pm: '2019/12', user_actions: '' },
                { user_number: '2', user_company: 'SK C&C', user_orgarnization: 'POG', user_role: 'Service Provider', user_name: '김길동', user_email: 'kimgildong@skcc.com', user_cluster_name: 'cloudzcp-ski-dev', user_age: '2019/10/25', user_rel: '3', user_arch: 'private', user_pm: '2019/12', user_actions: '' }
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
        }
    }
}
</script>