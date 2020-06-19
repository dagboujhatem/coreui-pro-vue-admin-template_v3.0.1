<template>
    <div class="animated fadeIn">
        <h1 class="display-tit">POG ZCP 견적</h1>
        
        <b-card>
            <h5 class="mb-3"><i class="icons cui-justify-left mr-1"></i> Basic Information</h5>
            <b-form>
                <b-form-group label="Name" label-for="name" :label-cols="3">
                    <b-form-input type="text" id="name" value="POG ZCP 견적" readonly></b-form-input>
                </b-form-group>
                <b-form-group label="설명" label-for="description" :label-cols="3">
                    <b-form-input type="text" id="description" placeholder="설명을 입력해주세요."></b-form-input>
                </b-form-group>
            </b-form>
        </b-card>
        <div class="text-center mb-4">
            <b-button variant="primary"><i class="icon-check"></i> 저장</b-button>
        </div>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-folder-alt mr-1"></i> Project

                <div class="float-right">
                    <b-button variant="success" size="sm" v-b-modal.project-add-modal><i class="icon-plus"></i> Project 추가</b-button>
                </div>
            </h5>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <b-table striped hover small bordered :fields="project_fields" :items="project_items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'project_number' ? '4%' : '' }">
                    </template>
                    <template slot="project_volume" slot-scope="data">
                        <router-link :to="{ path: '/estimate/estvolume' }">
                            <b-button variant="outline-primary" size="sm" v-b-modal.iks-vm-modal><i class="icon-info"></i> {{data.item.project_volume}}</b-button>
                        </router-link>
                    </template>
                </b-table>
            </VuePerfectScrollbar>

            <!-- modal : Project Add -->
            <b-modal id="project-add-modal" title="Project Selection" centered>
                <b-form>
                    <b-form-group label="Project" label-for="projectSelect" :label-cols="3" label-class="required">
                        <b-form-select id="projectSelect" :plain="true" :options="['선택', 'FSK', 'SK C&C', 'SK E&S', 'SK 네트웍스', 'SK 이노베이션']" value="선택" required>
                        </b-form-select>
                        <b-form-invalid-feedback id="projectSelect">
                            Project를 선택해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-form>
                <template v-slot:modal-footer="{ ok, cancel }">
                    <b-button variant="secondary" @click="cancel()">취소</b-button>
                    <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                </template>
            </b-modal>
            <!-- // modal : Project Add -->
        </b-card>
        <b-card>
            <h5 class="mb-3"><i class="icon-calculator mr-1"></i> 계약된 원가견적</h5>
            <b-form>
                <b-form-group label="Cloud" label-for="cloud" :label-cols="3">
                    <b-form-input type="text" id="cloud" value="AWS" readonly></b-form-input>
                </b-form-group>
                <b-form-group label="버전" label-for="version" :label-cols="3">
                    <b-form-input type="text" id="version" value="1.1.1" readonly></b-form-input>
                </b-form-group>
            </b-form>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <table class="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Environment</th>
                            <th>Product</th>
                            <th>Cloud 사용료(₩)</th>
                            <th>인건비(₩)</th>
                            <th>월 비용 합계(₩)</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr class="bg-secondary">
                            <th colspan="2" class="text-right">계</th>
                            <td class="text-right font-weight">₩ 8,438,325</td>
                            <td class="text-right font-weight">₩ 3,207,500</td>
                            <td class="text-right font-weight">₩ 11,645,825</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <th rowspan="3" class="bg-dark">dev</th>
                            <th>Cloud Z CP</th>
                            <td class="text-right">₩ 2,439,970</td>
                            <td class="text-right">₩ 420,000</td>
                            <td class="text-right">₩ 2,859,970</td>
                        </tr>
                        <tr>
                            <th>Cloud Z DB</th>
                            <td class="text-right">₩ 411,594</td>
                            <td class="text-right">₩ 157,500</td>
                            <td class="text-right">₩ 569,094</td>
                        </tr>
                        <tr>
                            <th>Cloud Z DB Storage</th>
                            <td class="text-right">₩ 229,950</td>
                            <td class="text-right">₩ 0</td>
                            <td class="text-right">₩ 229,950</td>
                        </tr>
                        <tr>
                            <th rowspan="3" class="bg-dark">prod</th>
                            <th>Cloud Z CP</th>
                            <td class="text-right">₩ 4,159,922</td>
                            <td class="text-right">₩ 2,000,000</td>
                            <td class="text-right">₩ 6,159,922</td>
                        </tr>
                        <tr>
                            <th>Cloud Z DB</th>
                            <td class="text-right">₩ 805,974</td>
                            <td class="text-right">₩ 630,000</td>
                            <td class="text-right">₩ 1,435,974</td>
                        </tr>
                        <tr>
                            <th>Cloud Z DB Storage</th>
                            <td class="text-right">₩ 390,915</td>
                            <td class="text-right">₩ 0</td>
                            <td class="text-right">₩ 390,915</td>
                        </tr>
                    </tbody>
                </table>
            </VuePerfectScrollbar>
        </b-card>

        <b-card>
            <h5 class="mb-3"><i class="icon-calculator mr-1"></i> Cloud별 원가견적</h5>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <b-table striped hover small bordered :fields="cloud_est_fields" :items="cloud_est_items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'est_number' ? '4%' : '' }">
                    </template>
                    <template slot="est_cloud" slot-scope="data">
                        <router-link :to="{ path: '/estimate/estcost' }">{{data.item.est_cloud}}</router-link>
                    </template>
                    <template slot="est_download" slot-scope="data">
                        <b-button variant="success" size="sm"><i class="fa fa-file-excel-o"></i></b-button>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
        </b-card>

        <div class="text-center mb-4">
            <router-link :to="{ path: '/estimate/' }">
                <b-button variant="warning" class="left"><i class="icon-list"></i> 목록</b-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    data()  {
        return {
            project_fields: [
                { key: 'project_number', label: 'No', tdClass: 'text-center' },
                { key: 'project_name', label: 'Project' },
                { key: 'project_status', label: 'Status', tdClass: 'text-center' },
                { key: 'project_volume', label: '용량산정', tdClass: 'text-center' }
            ],
            project_items: [
                { project_number: '1', project_name: 'POG ZCP 개발 프로젝트', project_status: 'Development', project_volume: '용량산정' },
                { project_number: '2', project_name: 'POG CBT 프로젝트', project_status: 'Development', project_volume: '용량산정' }
            ],
            cloud_est_fields: [
                { key: 'est_number', label: 'No', tdClass: 'text-center' },
                { key: 'est_cloud', label: 'Cloud', tdClass: 'text-center' },
                { key: 'est_version', label: '버전', tdClass: 'text-center' },
                { key: 'est_use_price', label: 'Cloud 사용료(₩)', tdClass: 'text-center' },
                { key: 'est_cost', label: '인건비(₩)', tdClass: 'text-center' },
                { key: 'est_total', label: '월 비용 합계(₩)', tdClass: 'text-center' },
                { key: 'est_created_date', label: 'Estimate Sheet Created Date', tdClass: 'text-center' },
                { key: 'est_last_date', label: 'Estimate Sheet Last Update', tdClass: 'text-center' },
                { key: 'est_download', label: 'Download', tdClass: 'text-center' }
            ],
            cloud_est_items: [
                { est_number: '1', est_cloud: 'gcs', est_version: '1.1.1', est_use_price: '₩ 1,234,560', est_cost: '₩ 2,345,670', est_total: '₩ 3,456,780', est_created_date: '2019-09-03 17:54:12', est_last_date: '2019-09-03 17:54:12', est_download: '' },
                { est_number: '2', est_cloud: 'cloudz', est_version: '1.2.1', est_use_price: '₩ 1,234,560', est_cost: '₩ 2,345,670', est_total: '₩ 3,456,780', est_created_date: '2019-09-03 17:54:12', est_last_date: '2019-09-03 17:54:12', est_download: '' }
            ],
        }
    },
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
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>