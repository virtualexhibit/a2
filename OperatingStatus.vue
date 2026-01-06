<template>
    <v-sheet class="line-image bg-transparent w-100"
        ><v-table class="info-table"
            ><thead>
                <tr>
                    <th class="bg-grey-darken-2 text-center font-weight-bold text-h6 text-white">
                        {{ leftText }}
                    </th>
                    <th class="bg-green-darken-2 text-center font-weight-bold text-h6 text-white">
                        {{ rightText }}
                    </th>
                </tr>
            </thead></v-table
        ></v-sheet
    >
</template>
<script>
export default {
    name: 'OperatingStatus',
    data() {
        return {
            leftText: '稼働情報',
            rightText: '稼働中',
        }
    },
}
</script>
<style scoped>
.line-image {
    padding-left: 2%;
    margin-top: 1%;
}

.info-table {
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border: 2px solid white;
}

.info-table :deep(th) {
    padding: 8px 12px;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    border: 1px solid white;
    color: white;
    height: 50px;
}

.info-table :deep(td) {
    padding: 8px 12px;
    text-align: center;
    border: 1px solid white;
    color: white;
}
</style>
