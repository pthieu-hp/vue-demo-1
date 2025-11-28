<template>
  <section class="enquiry-form-view">
    <h1 class="page-title">お問い合わせフォーム</h1>
    <EnquiryForm />
  </section>
</template>

<script setup lang="ts">
import EnquiryForm from '@/components/EnquiryForm.vue'
</script>

<style scoped>
.enquiry-form-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-heading, #333);
}
</style>
