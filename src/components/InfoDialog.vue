<template>
  <div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p v-if="bodyText">{{ bodyText }}</p>
        <p v-if="error" class="auth-error">
          {{ error.message }}
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="$emit('close-dialog')" class="btn btn-primary">Ok</button>
      </div>  

    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "infoDialog",
    props: {
        bodyText: {
            Type: String,
            required: false
        },
        error: {
            Type: Object,
            required: false
        }
    }
}
</script>

<style>
  .modal {

    display: block !important;    
  }
  .fade {
    opacity: 1 !important;
  }
  .auth-error {
    font-weight: 600;
    color: #f00;
    margin-top: 30px;
  }
</style>