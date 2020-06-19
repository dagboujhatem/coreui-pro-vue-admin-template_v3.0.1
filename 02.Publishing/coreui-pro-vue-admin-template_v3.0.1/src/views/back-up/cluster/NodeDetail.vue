<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">10.174.27.197</h1>
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
                            <b-form-input type="text" id="name" value="10.174.27.197" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Annotations" label-for="annotations" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">node.alpha.kubernetes.io/ttl:0</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Address" label-for="address" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">InternalIP: 10.178.218.132</b-badge>
                                <b-badge variant="secondary">ExternalIP: 169.56.166.232</b-badge>
                                <b-badge variant="secondary">Hostname: 10.178.218.132</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Role" label-for="role" :label-cols="3">
                            <b-form-input type="text" id="role" value="management" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Labels" label-for="labels" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">arch: amd64</b-badge>
                                <b-badge variant="secondary">beta.kubernetes.io/arch: amd64</b-badge>
                                <b-badge variant="secondary">beta.kubernetes.io/instance-type:b3c.4x16.encrypted</b-badge>
                                <b-badge variant="secondary">beta.kubernetes.io/os: linux</b-badge>
                                <b-badge variant="secondary">ibm-cloud.kubernetes.io/internal-ip: 10.174.27.234</b-badge>
                                <b-badge variant="secondary">ibm-cloud.kubernetes.io/os: UBUNTU_18_64</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Provider ID" label-for="providerID" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type">ibm://8d9919419ee14c4283742e5861dbd242///934015ddda66464289887531c1af39df/kube-hkg02-cr934015ddda66464289887531c1af39df-w15</span>
                            </div>
                        </b-form-group>
                        <b-form-group label="Taints" label-for="taints" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <b-badge variant="secondary">logging=true:NoSchedule</b-badge>
                            </div>
                        </b-form-group>
                        <b-form-group label="Unschedulable" label-for="unschedulable" :label-cols="3">
                            <b-form-input type="text" id="unschedulable" value="false" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Creation Time" label-for="creationTime" :label-cols="3">
                            <b-form-input type="text" id="creationTime" value="2019-11-28 15:03:59" readonly></b-form-input>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-options-vertical mr-1"></i> Node Info
                <template v-if="collapseNode === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseNode ? null : 'collapsed'" :aria-expanded="collapseNode ? 'true' : 'false'" aria-controls="collapseNode" @click="collapseNode = !collapseNode"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseNode === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseNode ? null : 'collapsed'" :aria-expanded="collapseNode ? 'true' : 'false'" aria-controls="collapseNode" @click="collapseNode = !collapseNode"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseNode" v-model="collapseNode">
                    <b-form class="table-detail-view">
                        <b-form-group label="Architecture" label-for="architecture" :label-cols="3">
                            <b-form-input type="text" id="architecture" value="amd64" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Boot ID" label-for="bootID" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type">ff7a54aa-b5fe-4187-8690-a45fbf889d88</span>
                            </div>
                        </b-form-group>
                        <b-form-group label="Container Runtime Version" label-for="containerRuntimeVersion" :label-cols="3">
                            <b-form-input type="text" id="containerRuntimeVersion" value="containerd://1.2.10" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Kernel Version" label-for="kernelVersion" :label-cols="3">
                            <b-form-input type="text" id="kernelVersion" value="4.15.0-70-generic" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Kube Proxy Version" label-for="kubeProxyVersion" :label-cols="3">
                            <b-form-input type="text" id="kubeProxyVersion" value="v1.14.9+IKS" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Kubelet Version" label-for="kubeletVersion" :label-cols="3">
                            <b-form-input type="text" id="kubeletVersion" value="v1.14.9+IKS" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="Machine ID" label-for="machineID" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type">6e17fa8f533f4fa782342b9a4c7a9d2d</span>
                            </div>
                        </b-form-group>
                        <b-form-group label="Operating System" label-for="operatingSystem" :label-cols="3">
                            <b-form-input type="text" id="operatingSystem" value="linux" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="OS Image" label-for="osImage" :label-cols="3">
                            <b-form-input type="text" id="osImage" value="Ubuntu 18.04.3 LTS" readonly></b-form-input>
                        </b-form-group>
                        <b-form-group label="System UUID" label-for="systemUUID" :label-cols="3">
                            <div class="d-flex align-items-center">
                                <span class="form-text-input-type">D362E164-ADB0-90D8-7A26-24889DA151D2</span>
                            </div>
                        </b-form-group>
                    </b-form>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-info mr-1"></i> Conditions
                <template v-if="collapseConditions === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseConditions ? null : 'collapsed'" :aria-expanded="collapseConditions ? 'true' : 'false'" aria-controls="collapseConditions" @click="collapseConditions = !collapseConditions"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseConditions === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseConditions ? null : 'collapsed'" :aria-expanded="collapseConditions ? 'true' : 'false'" aria-controls="collapseConditions" @click="collapseConditions = !collapseConditions"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseConditions" v-model="collapseConditions">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <b-table striped hover small bordered :fields="conditions_fields" :items="conditions_items">
                            <template slot="conditions_status" slot-scope="data">
                                <b-badge :variant="variantResult(data.item.conditions_status)">{{data.item.conditions_status}}</b-badge>
                            </template>
                        </b-table>
                    </VuePerfectScrollbar>
                </b-collapse>
            </div>
        </b-card>
        <b-card>
            <h5 class="mb-3">
                <i class="icon-eye mr-1"></i> Images
                <template v-if="collapseImages === true">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseImages ? null : 'collapsed'" :aria-expanded="collapseImages ? 'true' : 'false'" aria-controls="collapseImages" @click="collapseImages = !collapseImages"><i class="icon-arrow-up"></i></b-button>
                </template>
                <template v-if="collapseImages === false">
                    <b-button variant="primary" size="sm" class="float-right" :class="collapseImages ? null : 'collapsed'" :aria-expanded="collapseImages ? 'true' : 'false'" aria-controls="collapseImages" @click="collapseImages = !collapseImages"><i class="icon-arrow-down"></i></b-button>
                </template>
            </h5>
            <div>
                <b-collapse id="collapseImages" v-model="collapseImages">
                    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                        <table class="table table-sm table-bordered">
                            <colgroup>
                                <col style="width: 5%;">
                                <col style="width: *;">
                                <col style="width: 12%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center" rowspan="2">1</td>
                                    <td>registry.au-syd.bluemix.net/cloudzcp/elasticsearch@sha256:cf4ab67af8c18c1f866da1956d85235b75325579f07054ca40f6f4d89d689cae</td>
                                    <td class="text-right" rowspan="2">34.5MB</td>
                                </tr>
                                <tr>
                                    <td>registry.au-syd.bluemix.net/cloudzcp/elasticsearch:6.3.1</td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td>registry.au-syd.bluemix.net/armada-master/cni:v3.6.5</td>
                                    <td class="text-right">34.5MB</td>
                                </tr>
                            </tbody>
                        </table>
                    </VuePerfectScrollbar>
                </b-collapse>
            </div>
        </b-card>
        <div class="text-center mb-4">
            <router-link :to="{ path: '/cluster/nodestatus' }">
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
            conditions_fields: [
                { key: 'conditions_type', label: 'Type', tdClass: 'text-center' },
                { key: 'conditions_status', label: 'Status', tdClass: 'text-center' },
                { key: 'conditions_transition_time', label: 'Last Transition Time', tdClass: 'text-center' },
                { key: 'conditions_heartbeat_time', label: 'Last Heartbeat Time', tdClass: 'text-center' },
                { key: 'conditions_reason', label: 'Reason' },
                { key: 'conditions_message', label: 'Message' }
            ],
            conditions_items: [
                { conditions_type: 'MemoryPressure', conditions_status: 'False', conditions_transition_time: '4 days', conditions_heartbeat_time: '58 seconds', conditions_reason: 'KubeletHasSufficientMemory', conditions_message: 'kubelet is posting ready status. AppArmor enabled' },
                { conditions_type: 'DiskPressure', conditions_status: 'True', conditions_transition_time: '4 days', conditions_heartbeat_time: '58 seconds', conditions_reason: 'KubeletHasSufficientMemory', conditions_message: 'kubelet is posting ready status. AppArmor enabled' }
            ],
            collapseDetail: true,
            collapseNode: true,
            collapseConditions: true,
            collapseImages: false
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        },
        variantResult (status) {
            let $variantStatus
            
            if(status == 'True') {
                $variantStatus = 'success' // 초록
            }else if(status == 'False') {
                $variantStatus = 'danger' // 빨강
            }
            return $variantStatus
        }
    }
}
</script>