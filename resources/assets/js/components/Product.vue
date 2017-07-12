<template>
    <div class="container">

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
     <table class="table table-bordered">
      <thead>
       <tr>
        <td>Product Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Created at</td>
        <td>Total</td>
       </tr>
      </thead>
      <tbody  v-for="product in sortedProducts ">
       <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.qyt }}</td>
        <td>{{ product.created_at }}</td>
        <td>{{ product.total }}</td>
       </tr>
      </tbody>
     </table>
     Grand total : {{ total }}
    </div>
</template>

<script>
    export default {
     data() {
            return {
                products:[],
                product:{},
            }
        },
        mounted() {
         axios.get('http://localhost:8000/products')
              .then(response => {
                this.products = response.data

                 console.log("get seccsess");
              }).catch(response => {
               console.log("eror erors");
              });
               console.log('Component mounted.')
        },
        computed: {
          total: function(){
            if(this.products.length < 1 ){
             return 0
            }else{
             return this.products.reduce(function(prev, product){
               return prev + product.total;
             },0);
            }

          },
          sortedProducts: function() {
           function compare(a, b) {
             if (a.created_at > b.created_at)
               return -1;
             if (a.created_at < b.created_at)
               return 1;
             return 0;
           }
           if(this.products.length < 1 ){
            return this.products
           }else{
            return this.products.sort(compare);
           }
         }
        },
        methods: {
          submit: function submit() {
           axios.post('http://localhost:8000/products',this.product)
                .then(response => {
                 this.products = response.data
                 this.product = {}
                 console.log("insert seccsess");
                }).catch(response => {
                 console.log("insert erors");
                });
          },
         }
    }
</script>
