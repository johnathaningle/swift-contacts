<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Dashboard</el-menu-item>
            <el-menu-item index="3">Contacts</el-menu-item>
            <el-menu-item index="4">Sent</el-menu-item>
            <el-menu-item index="5">Drafts</el-menu-item>
            <el-menu-item index="6">Logs</el-menu-item>
        </el-menu>
        <div class="line"></div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>

</style>