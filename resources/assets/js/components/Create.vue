<template>
    <div class="panel panel-default">
     <div class="panel-heading">
      Create Product
     </div>
     <div class="panel-body">
      <form @submit.prevent="submit">
       <div class="form-group">
       <label class="control-label col-sm-2" for="name">name:</label>
       <div class="col-sm-10">
         <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter name"
          v-model="product.name"
          >
       </div>
       </div>
       <div class="form-group">
       <label class="control-label col-sm-2" for="name">Qyt</label>
       <div class="col-sm-10">
         <input
          type="number"
          class="form-control"
          id="qyt"
          v-model="product.qyt"
          >
       </div>
       </div>
       <div class="form-group">
       <label class="control-label col-sm-2" for="name">Price</label>
       <div class="col-sm-10">
         <input
          type="number"
          class="form-control"
          id="price"
          v-model="product.price"
          >
       </div>
       </div>
       <div class="form-group">
       <label class="control-label col-sm-2" for="name"></label>
       <div class="col-sm-10">
         <button type="button" @click="submit" class="btn btn-primary">Add</button>
       </div>
       </div>
      </form>
     </div>
    </div>
</template>

<script>
    export default {
     data() {
            return {
                // url: '/api/library',
                product: {
                    name: '',
                    qyt: '',
                    price: '',
                },
            }
        },
        methods: {
          submit: function submit() {
           axios.post('http://localhost:8000/products',this.product)
                .then(response => {
                   console.log("insert seccsess");
                }).catch(response => {
                 console.log("insert erors");
                });
          }
        }
    }
</script>
