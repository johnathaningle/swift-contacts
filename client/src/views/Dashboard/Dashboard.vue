<template>
    <div>
        <dashboard-nav></dashboard-nav>
        <div class="container pt-4">
            <email-component v-for="(email, index) in emails" :key="index"
            :id=index
            :subject=email.subject
            :email=email.to
            :body=email.body>
            </email-component>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardNav from "@/components/Dashboard/DashboardNav"
import Email from "@/components/Dashboard/Email"
import testdata from '@/testdata.js';
export default {
    name: "Dashboard",
    components: {
        DashboardNav,
        EmailComponent: Email,
    },
    data() {
        return {
            emails: testdata.emails
        }
    }
}
</script>

<style>
    .card {
        box-shadow: 0px 10px 10px 0px rgb(216, 216, 216);
        border: 0px;
        padding: 0 !important;
    }

</style>
