<template>
    <div>
        <CScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
            <table class="table table-hover table-striped">
                <colgroup>
                    <col style="width: 5%;">
                    <col style="width: 20%;">
                    <col style="width: 20%;">
                    <col style="width: 23%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                </colgroup>
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Main Menu</th>
                        <th class="text-center">Sub Menu</th>
                        <th class="text-center">Link</th>
                        <th class="text-center">Premmission</th>
                        <th class="text-center">Type</th>
                        <th class="text-center">Active</th>
                        <th class="text-center">Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">01</td>
                        <td class="text-center">APPLICATIONS</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">02</td>
                        <td class="text-center"></td>
                        <td class="text-center">HOME</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">03</td>
                        <td class="text-center"></td>
                        <td class="text-center">CI/CD</td>
                        <td class="text-center">zcp-devops.cloudzcp.io</td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" variant="outline" class="mx-1">CI/CD View</CButton>
                        </td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">04</td>
                        <td class="text-center"></td>
                        <td class="text-center">LOGGING</td>
                        <td class="text-center">zcp-logging.cloudzcp.io</td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" variant="outline" class="mx-1">LOGGING View</CButton>
                        </td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">05</td>
                        <td class="text-center"></td>
                        <td class="text-center">MONITORING</td>
                        <td class="text-center">zcp-monitoring.cloudzcp.io</td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" variant="outline" class="mx-1">MONITORING View</CButton>
                        </td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">06</td>
                        <td class="text-center"></td>
                        <td class="text-center">APPS</td>
                        <td class="text-center">zcp-apps.cloudzcp.io</td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" variant="outline" class="mx-1">APPS View</CButton>
                        </td>
                        <td class="text-center"></td>
                        <td class="text-center">
                            <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                            </label>
                        </td>
                        <td class="text-center">
                            <CButton color="primary" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-top" class="m-0" /></CButton>
                            <CButton color="info" size="sm" class="mx-1"><CIcon name="cil-arrow-thick-from-bottom" class="m-0" /></CButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CScrollbar>
    </div>
</template>

<script>
    import CScrollbar from '@coreui/vue/src/components/scrollbar/CScrollbar'
    
    export default {
        components: {
            CScrollbar
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
        data () {
            return {
            }
        },
        methods: {
            scrollHandle(evt) {
                console.log(evt)
            }
        }
    }
</script>

<style>
    
</style>